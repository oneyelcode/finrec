import { renderHook, act } from "@testing-library/react";
import { useDynamicList } from "@hooks";

describe("useDynamicList", () => {
  const setUp = (props: any): any => renderHook(() => useDynamicList(props));

  it("getKey should work", () => {
    const { result } = setUp([1, 2, 3]);
    expect(result.current.list[0]).toEqual(1);
    expect(result.current.getKey(0)).toEqual(0);
    expect(result.current.getKey(1)).toEqual(1);
    expect(result.current.getKey(2)).toEqual(2);
  });

  it("methods should work", () => {
    const { result } = setUp([
      { name: "aaa", age: 18 },
      { name: "bbb", age: 19 },
      { name: "ccc", age: 20 },
    ]);

    expect(result.current.list[0].age).toEqual(18);
    expect(result.current.list[1].age).toEqual(19);
    expect(result.current.list[2].age).toEqual(20);

    expect(result.current.getKey(0)).toEqual(0);
    expect(result.current.getKey(1)).toEqual(1);
    expect(result.current.getKey(2)).toEqual(2);

    // unshift
    act(() => {
      result.current.unshift({ name: "ddd", age: 21 });
    });

    expect(result.current.list[0].name).toEqual("ddd");
    expect(result.current.getKey(0)).toEqual(3);

    // push
    act(() => {
      result.current.push({ name: "ddd", age: 21 });
    });

    expect(result.current.list[4].name).toEqual("ddd");
    expect(result.current.getKey(0)).toEqual(3);
    expect(result.current.getKey(4)).toEqual(4);

    // insert
    act(() => {
      result.current.insert(1, { name: "eee", age: 22 });
    });
    expect(result.current.list[1].name).toEqual("eee");
    expect(result.current.getKey(1)).toEqual(5);

    // merge
    act(() => {
      result.current.merge(0, [1, 2, 3, 4]);
    });
    expect(result.current.list[0]).toEqual(1);
    expect(result.current.getKey(0)).toEqual(6);

    // move
    act(() => {
      result.current.move(0, 1);
    });
    expect(result.current.list[0]).toEqual(2);
    expect(result.current.getKey(0)).toEqual(7);

    // move without changes
    act(() => {
      result.current.move(2, 2);
    });
    expect(result.current.list[0]).toEqual(2);
    expect(result.current.getKey(0)).toEqual(7);

    // shift
    act(() => {
      result.current.shift();
    });
    expect(result.current.list[0]).toEqual(1);
    expect(result.current.getKey(0)).toEqual(6);
    expect(result.current.list.length).toEqual(9);

    // pop
    act(() => {
      result.current.pop();
    });
    expect(result.current.list.length).toEqual(8);

    // replace
    act(() => {
      result.current.replace(7, { value: 8 });
    });
    expect(result.current.list[7].value).toEqual(8);

    // remove
    act(() => {
      result.current.remove(7);
    });
    expect(result.current.list.length).toEqual(7);
  });

  it("same items should have different keys", () => {
    const { result } = setUp([1, 1, 1, 1]);
    expect(result.current.getKey(0)).toEqual(0);
    expect(result.current.getKey(1)).toEqual(1);
    expect(result.current.getKey(2)).toEqual(2);
    expect(result.current.getKey(3)).toEqual(3);

    act(() => {
      result.current.push(1);
    });

    expect(result.current.getKey(4)).toEqual(4);
    const testObj = {};

    act(() => {
      result.current.push({});
      result.current.push(testObj);
      result.current.push(testObj);
    });

    expect(result.current.getKey(5)).toEqual(5);
    expect(result.current.getKey(6)).toEqual(6);
    expect(result.current.getKey(7)).toEqual(7);
  });

  it("initialValue changes", () => {
    const { result } = renderHook(({ initialValue }) => useDynamicList(initialValue), {
      initialProps: {
        initialValue: [1],
      },
    });
    expect(result.current.list[0]).toEqual(1);
    expect(result.current.getKey(0)).toEqual(0);

    act(() => {
      result.current.resetList([2]);
    });

    expect(result.current.list[0]).toEqual(2);
    expect(result.current.getKey(0)).toEqual(1);

    act(() => {
      result.current.resetList([3]);
    });

    expect(result.current.list[0]).toEqual(3);
    expect(result.current.getKey(0)).toEqual(2);
  });

  it("sortList", () => {
    const { result } = setUp([1, 2, 3, 4]);
    const formData = [
      {
        name: "my bro",
        age: "22",
        memo: "he's my bro",
      },
      {
        name: "my sis",
        age: "21",
        memo: "she's my sis",
      },
      null,
      {
        name: "my meow",
        age: "1",
      },
    ];

    let sorted = result.current.sortList(formData);
    expect(sorted.length).toEqual(3);
    expect(sorted[0].name).toEqual("my bro");

    act(() => {
      result.current.move(3, 0);
    });
    sorted = result.current.sortList(formData);
    expect(sorted[0].name).toEqual("my meow");
  });
});

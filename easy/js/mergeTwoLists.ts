class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next?: ListNode) {
    this.val = val;
    this.next = next ?? null;
  }
}

const mergeTwoLists = function (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Dummy node to simplify merging process
  let dummy = new ListNode(0);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // If there are remaining elements in either list
  if (list1 !== null) {
    current.next = list1;
  } else if (list2 !== null) {
    current.next = list2;
  }

  return dummy.next;
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
console.log(mergeTwoLists(list1, list2));

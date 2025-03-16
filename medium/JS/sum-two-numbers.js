class ListNode {
  val;
  next;
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode();
  let res = dummy;
  let med = 0;

  while (l1 || l2 || med) {
    let total = med;

    if (l1) {
      total += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      total += l2.val;
      l2 = l2.next;
    }

    med = Math.floor(total / 10);
    total = total % 10;

    dummy.next = new ListNode(total);
    dummy = dummy.next;
  }

  return res.next;
}

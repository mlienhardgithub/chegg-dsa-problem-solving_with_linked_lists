
const cycle = (list) => {
    let head = list.head;
    let set = new Set();
    while (head) {
        if (set.has(head)) {
            return true;
        }
        set.add(head);
        head = head.next;
    }
    return false;
};

module.exports = cycle;

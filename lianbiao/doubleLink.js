/**
 * 双向链表，一个节点同时包含前一个prev指向，以及next指向
 */
function doubleList(){
  let Node = function(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
  // 初始头节点为 null
  let head = null;
  // 新增尾结点
  let tail = null;
  // 链表长度
  let length = 0
  // 获取链表
  this.getList = function () { return head }
  //append添加节点
  this.append = function(element) {
    let node = new Node(element), p = head;
    if(!head) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      node.prev = tail;
      tail = node;
    }
    length += 1;
  }
  //插入节点
  this.insert = function(position, element) {
    let node = new Node(element);
    if(position >=0 && position< length) {
      let prev = head,
          curr = head,
          index = 0;
      if(position === 0) {
        if(!head) { //与单链表不同，首尾节点都要赋值
          head = node;
          tail = node;
        } else {
          //双向
          node.next = head;
          head.prev = node;
          //节点变化，node成为新的头结点
          head = node;
        }
      } else if(position === length) { //在尾结点插入，这个可以成为append方法，添加节点
        tail.next = node;
        node.prev = tail;
        //节点变化，node成为新的尾结点
        tail = node;
      } else {
        while(index < position) {
          prev = curr;
          curr = curr.next;
          index++;
        }
        //插入到prev后，curr前
        prev.next = node;
        node.next = curr;
        curr.prev = node;
        node.prev = prev;
      }
      length += 1;
      return true
    } else {
      return false
    }
  }
  //删除节点 0是头结点开始移除
  this.remove = function(position) {
    if(position >=0 && position< length && length > 0) {
      let prev = head,
          curr = head,
          index = 0;
      if(position === 0) {// 移除头节点
        if(length === 1) { // 仅有一个节点
          head = null
          tail = null
        } else {
          head = head.next;
          head.prev = null;
        }
      } else if(position === length-1) {// 移除尾结点,将尾结点前移
        curr = tail;
        tail = curr.prev;
        tail.next = null;
      } else {
        while(index < position) {
          prev = curr;
          curr = curr.next;
          index++;
        }

        console.log('当前prev', prev)
        console.log('当前curr', curr)
        // 此时，curr是当需要移除的，所以要把curr后面的节点与curr前面的节点想关联。达到移除curr的功能
        prev.next = curr.next
        curr.next.prev = prev
      }
      length -= 1
      return curr.element
    } 
  }
}
var node = new doubleList();
node.append(1)
node.append(2)
node.append(3)
node.remove(1)
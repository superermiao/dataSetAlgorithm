/**
 * 循环单链表链表，即尾结点最后指向头结点，形成环
 */
function circleList(){
  let Node = function(element) {
    this.element = element;
    this.next = null;
    this.prev = null;//前驱结点，循环双链表需要
  }
  let head = null, tail = null;
  let length = 0;
  this.insert = function(position, element) {
    let node = new Node(element)
    if(position>=0 && position<=length) {
      let prev = head,
      curr = head,
      index = 0;
      if(position === 0) { //与单链表插入不同
        while(index < length) { //目的是找到最后一个节点
          prev = curr;
          curr = curr.next;
          index++;
        }
        prev.next = node; //prev为最后一个节点,最后一个节点指向头结点，此时头结点为插入的node。
        node.next = curr; //curr为之前的头结点
        head = node; //最后把head变为头结点
      } else {
        while(index < position) {
          prev = curr;
          curr = curr.next;
          index++;
        }
        prev.next = node //prev为position位置处的前一个节点
        node.next = curr;
      }
      length++;
    } else {
      return null
    }
  };
  //和单链表类似，唯一不同的是：循环单链表的循环结束条件为 index++ < length。
  //同理删除也是
  this.search = function(element){ //与单链表不同的是需要一个结束条件，因为没有指向null
    let p = head , index = 0;
    if(!p) return null
    while(index++ < length) { //当index小于length，否则就查找完了
      if(p.element === element) return true
      p = p.next
      //index++;
    }
    return false
  }
}
/**
 * 单链表，只有next指向
 */

function List() {
  //节点，包含自身和next
  let Node = function (element) {
    this.element = element;
    this.next = null;
  }
  // 初始头节点为 null
  let head = null
  // 链表长度
  let length = 0
  // 获取链表
  this.getList = function () { return head }
  // 查找节点
  this.search = function (element) {
    let p = head;
    if(!p) return null
    while(p) {
      if(p.element === element) return true
      p = p.next
    }
    return false
  }
  // 添加节点
  this.append = function (element) {
    let node = new Node(element), p = head;
    if(!head) { //如果head不存在
      head = node;
    } else {
      while(p.next) {
        p = p.next;
      }
      p.next = node ;         
    }
    length += 1;
    console.log(head)
  }
  // 插入节点
  this.insert = function (position, element) {
    let node = new Node(element)
    if(position >= 0 && position<= length) {
      if(position === 0) {
        node.next = head;
        head = node
      } else {
        let index = 0;
        let prev = head, cur =  head;
        while(index < position) {
          prev = cur;
          cur = cur.next
          index++
        }
        prev.next = node;
        node.next = cur
      }
      length += 1
      console.log(head)
    } else {
      return null
    }
  }
  // 删除节点
  this.remove = function (element) {
    let p = head, prev = head;
    if(!p) return
    while(p) {
      if(p.element === element){
        p = p.next
        prev.next = p;
        length -= 1;
        console.log(head)
      } else {
        prev = p;
        p = p.next
      }
    } 
  }
  // 链表是否为空
  this.isEmpty = function () {
    if(!head) return true
    return false
  }
  // 获取链表的size
  this.size = function () {
    return length
  }
}

var node = new List()
node.size() //0
node.append(4) //
node.append(5)
node.append(7)
node.insert(0,3)
console.log(node.size()) // 4
node.insert(3,6)
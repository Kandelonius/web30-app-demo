/**
 * using a singly linked list that will add two numbers where the digits are stored in reverse order
 * and output the sum in another linked list also in reverse order.
 * 342 + 465 = 807 would look like:
 * (2 -> 4 -> 3) + (5 -> 6 -> 4) = 7 -> 0 -> 8
 */

// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
//  }
    
var addTwoNumbers = function(l1, l2) {
    // first take the input numbers and load them into a SLL with the first digit as the tail and last digit as the head.
    // create new linked list to store my result
    let l3Head = new ListNode(0);
    let l3 = l3Head;
    let temp = 0;
    let val1 = 0;
    let val2 = 0;
    let num3 = 0;
    do {
        val1 += (l1 !== null) ? (l1.val) : 0;
        val2 += (l2 !== null) ? (l2.val) : 0;
        if(l1 === null || l1.next === null) {
            l1 = null;
        } else {
            l1 = l1.next;
            val1 /= 10;
        }
        if(l2 === null || l2.next === null) {
            l2 = null;
        } else {
            l2 = l2.next;
            val2 /= 10;
        }
    } while (l1 !== null || l2 !== null);
    console.log("nums before whole " + val1 + " " + val2);
    // val1 = annoyingJS(val1);
    // val2 = annoyingJS(val2);
    val1 = wholeNumber(val1);
    val2 = wholeNumber(val2);
    console.log("nums after whole " + val1 + " " + val2);
    num3 = val1 + val2;
    while(num3 >= 0) {
        if(num3 < 10) {
            temp = num3 % 10;
            let nextL3 = new ListNode(temp);
            l3.next = nextL3;
            break;
        }
        temp = num3 % 10;
        let nextL3 = new ListNode(temp);
        l3.next = nextL3;
        l3 = l3.next;
        num3 = Math.floor(num3 / 10);
    }
    return l3Head.next;
};

var wholeNumber = function(num) {
    while(num % 1 !== 0) {
        let temp = num * 10.0;
        console.log("fff " + temp);
        num = temp;
    }
    return num;
};

// let num = 13245;
// let other = 0;
// while(num > 0) {
//     if(num < 10) {
//         other += num;
        
//     }
//     other += num % 10;
//     num += Math.floor(num / 10);
//     other *= 10;
// }
// console.log("other is " + other);
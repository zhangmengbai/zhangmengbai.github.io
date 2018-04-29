import san from "san"

var MyApp = san.defineComponent({
  template: ''
      +'<div>'
      + '<button on-click="add">添加</button>'
      + '<table>'
      +   '<tr>'
      +     '<th>姓名</th>'
      +     '<th>审核状态</th>'
      +     '<th>操作</th>'
      +   '</tr>'
      +   '<tr san-for="p, index in persons">'
      +     '<td>{{p.name}}</td>'
      +     '<td>{{p.state}}</td>'
      +     '<td>'
      +       '<button on-click="change" san-if="p.state=合格">{{p.operation}}</button>'
      +       '<button on-click="change"san-elif="p.state=不合格">{{p.operation}}</button>'
      +       '<button on-click="change" san-else="p.state=待审核">{{p.operation}}</button>'
      +     '</td>'
      +   '</tr>'
      + '</table>'
      + '<dl>'
      +   '<dt>name - state</dt>'
      +   '<dd san-for="p, index in persons" title="{{p.name}}">{{index + 1}}. {{p.name}}({{dept}}) - {{p.state}}</dd>'
      + '</dl>'
      +'<div>',
  initData: function () {
    return {
      persons: [
        {name: '张三', state: '合格', operation: '删除'},
        {name: '李四', state: '不合格', operation: '删除'},
        {name: '王五', state: '待审核', operation: '审核'},
        {name: '赵六', state: '待审核', operation: '审核'},              
        {name: '孙七', state: '待审核', operation: '审核'}
      ]
    };
  },
  change: function () {
    let sValue = this.data.get("index in persons");
    console.log(sValue);
    if(sValue === "合格"||"不合格"){
      this.data.remove("persons", "index");
    }else{
      this.data.set("index.state", "合格");
      this.data.set("index.operation", "删除");
    }
  },
  add: function () {
    this.data.push("persons",{name: '吃瓜群众', state: '不合格', operation: '删除'});
  }
});
var myApp = new MyApp();
myApp.attach(document.body);
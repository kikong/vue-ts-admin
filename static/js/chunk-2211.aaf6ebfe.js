(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2211","chunk-02f1"],{"3eda":function(e,t,a){"use strict";a.r(t);a("b97c3");var i=a("7571"),s=(a("28a5"),a("c665")),d=a("dc0a"),r=a("aa9a"),l=a("d328"),n=a("11d9"),o=a("9ab4"),c=a("60a3"),u=a("c1df"),m=a.n(u),h=a("c155"),b=a("244d"),p=(a("baae"),function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(l["a"])(this,Object(n["a"])(t).apply(this,arguments)),e.filterParams={name:"",address:[],createtime:[],startTime:"",endTime:""},e.BackParams={code:"data.result.resultCode",codeOK:0,message:"data.result.resultMessage",data:"data.entity.data",total:"data.entity.total"},e.outParams={},e.filterList=[{key:"name",label:"name",type:"input",placeholder:"Seach Name"},{key:"address",label:"address",type:"cascader",placeholder:"Seach address",options:h["a"]},{key:"createtime",label:"Createtime",type:"datetimerange",placeholder:["start date","end date"],value:["startTime","endTime"]}],e.tableList=[{title:"Name",dataIndex:"name"},{title:"Nickname",dataIndex:"nickName"},{title:"age",dataIndex:"age"},{title:"Phone number",dataIndex:"phone"},{title:"Birth date",dataIndex:"birthDate"},{title:"Gender",dataIndex:"isMale",customRender:e.genderRender},{title:"ID number",dataIndex:"id"},{title:"Email",dataIndex:"email"},{title:"Address",dataIndex:"address"}],e.opreat=[{key:"edit",rowKey:"id",color:"blue",text:"编辑",roles:!0},{key:"delete",rowKey:"id",color:"red",text:"删除",roles:!0,msg:"确定删除？"}],e.title="add customer",e.visible=!1,e.modelType="add",e.editData={},e}return Object(r["a"])(t,[{key:"genderRender",value:function(e){var t=this.$createElement;return t("a-tag",{attrs:{color:e?"blue":"purple"}},[e?"Male":"Female"])}},{key:"tableClick",value:function(e,t){var a=JSON.parse(JSON.stringify(t));switch(a.address=a.address.split(" "),a.birthDate=m()(a.birthDate,"YYYY-MM-DD HH:mm:ss"),e){case"edit":this.editData=a,this.visible=!0,this.modelType="edit";break;default:break}}},{key:"add",value:function(){this.title="Add customer",this.modelType="add",this.visible=!0,this.editData={}}},{key:"closeModal",value:function(){this.visible=!1,this.editData={}}},{key:"success",value:function(){this.visible=!1;var e=this.$refs.baseInfoTable;this.editData={},e.reloadTable()}},{key:"render",value:function(){var e=arguments[0];return e("div",{class:"baseInfo-wrap"},[e("filter-table",{ref:"baseInfoTable",attrs:{tableList:this.tableList,filterList:this.filterList,filterGrade:[],url:"/customers/baseInfoList",filterParams:this.filterParams,outParams:this.outParams,addBtn:!0,exportBtn:!1,dataType:"json",rowKey:"id",opreat:this.opreat,fetchType:"post",BackParams:this.BackParams},on:{menuClick:this.tableClick,add:this.add}}),e("info-modal",{attrs:{title:this.title,visible:this.visible,type:this.modelType,data:this.editData},on:{close:this.closeModal,success:this.success}})])}}]),Object(d["a"])(t,e),t}(c["d"]));p=o["a"]([Object(c["a"])({components:{"a-tag":i["a"],"info-modal":b["default"]}})],p),t["default"]=p},baae:function(e,t,a){}}]);
//# sourceMappingURL=chunk-2211.aaf6ebfe.js.map
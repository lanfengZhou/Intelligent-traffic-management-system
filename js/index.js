
$(function(){
	//页面加载完成之后执行
	//智能停车场用户管理列表
	ScUserAdminlist();
	ScPlacelist();
	ScHistorylist();
	ETCUserlist();
	ETCChargelist();
	ETCHistorylist();
	CarnumReclist();
	CarRedlist();
	//SmartCarnav<a>标签鼠标经过的动作
	$(".button").hover(
     function(){$(this).animate({"width":"120px"},200);},
     //function(){$()}
     function(){$(this).animate({"width":"100px"},200);}
 );
	 $("#setPlaceform").validate();
	 //智能车用户管理新用户注册表单验证
	$("#order").validate({
		rules:{
			ccarnumber:{
				required:true,
				minlength:2,
			},
			ccarid:{
				required:true,
				carnumcheck: $("#carid").val(),
			},
			cusername:{
				required:true,

			},
			cuserphone:{
				required:true,
				carphonecheck: $("#userphone").val(),
			},
			ccarbalance:{
				required:true,
			},
		},
		messages:{
			ccarnumber:{
				required:'*请输入停车卡号',
				minlength:'*至少输入两位数字'},
			ccarid:{
				required:'*请输入车牌号',
			},
			cusername:{
				required:'*请输入姓名'
			},
			cuserphone:{
				required:'*请输入电话号码'
			},
			ccarbalance:{
				required:'*请输入金额'
			},
		},
	});
	//ETC用户管理新用户注册表单验证
	$("#ETCnewuser").validate({
		rules:{
			cETCusername:{
				required:true,
				minlength:2,
			},
			cETCcarid:{
				required:true,
				carnumcheck: $("#ETCcarid").val(),
			},
			cETCelenum:{
				required:true,

			},
			cETCuserphone:{
				required:true,
				carphonecheck: $("#ETCuserphone").val(),
			},
			cETCbalance:{
				required:true,
				number:true,
			},
		},
		messages:{
			cETCusername:{
				required:'*请输入车主姓名',
				minlength:'*至少输入两个字符'},
			cETCcarid:{
				required:'*请输入车牌号',
			},
			cETCelenum:{
				required:'*请输入电子标签号'
			},
			cETCuserphone:{
				required:'*请输入电话号码'
			},
			cETCbalance:{
				required:'*请输入金额'
			},
		},
	});
	$("#ETCrechargeform").validate({
		rules:{
			cETCname:{
				required:true,
				carnumcheck: $("#ETCname").val(),
			},
			cETCchargenum:{
				required:true,
				number:true,
			},
		},
		messages:{
			cETCname:{
				required:'*请输入车牌号',
			},
			cETCchargenum:{
				required:'*请输入充值金额'
			},
		},
	});
	$.validator.addMethod(
 	 	"carnumcheck",
 	 	function (value,element, param){
 	 	var reg = new RegExp("[\u4E00-\u9FFF][A-Z]([A-Z]|[0-9])","g");
 	 	if(reg.test(value)&&value.length==7){
 	 		//return [true,""];
 	 		return value;
 	 	}
 	 	//return value==eval(param);
 	 },
 	 	//else
 	 		//return [false,"请输入正确的车牌号"];
 	 	'*请输入正确的车牌号'
 	);
 	$.validator.addMethod(
 	 	"carphonecheck",
 	 	function (value,element, param){
 	 	if((/^1[34578]\d{9}$/.test(value))||(/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(value))){ 
 			return value;
 		}

 	 },
 	 	//else
 	 		//return [false,"请输入正确的车牌号"];
 	 	'*请输入正确的电话'
 	);
	//阻止a标签跳转
	// var test = $('.button'); 
	// function stopDefault( e )
	// { 
 //   	if ( e && e.preventDefault ) 
 //      e.preventDefault(); 
 //     else 
 //        window.event.returnValue = false;  
	// } 
	// test.click = function(e) 
	// { 
 //     stopDefault(e); 
	// } 
	//点击显示隐藏导航栏
	$(".navlist").click(function(){
		if ($(this).siblings('ul').css('display')=='none') {
			//alert("ss");
			//$(this).addClass('navScUserlist');
			//显示二级菜单智能停车场导航
			$(this).siblings('ul').slideDown(100).children('li');
			//改变图标图片
			//$(this).parent('li').siblings('li').removeClass("navlists");
			$(this).removeClass("navlists");
			$(this).addClass("navlist");
			//  if($(this).parents('li').siblings('li').children('ul').css('display')=='block'){
			//  	//$(this).parents('li').siblings('li').children('ul').slideUp(100);
			// }
			
		}
		else{
			//alert("ss");
			//清除“-”号标志
			$(this).removeClass('navlist');
			$(this).addClass("navlists");
			//控制菜单隐藏
			$(this).siblings('ul').slideUp(100);
			//添加“+”
			$(this).siblings('ul').children('li').children('ul').parent('li').children('a').addClass('navlist');
			//控制三级菜单隐藏
			$(this).siblings('ul').children('li').children('ul').slideUp(100);
			$(this).siblings('ul').children('li').children('a').removeClass('navlist');
		}
	});
	//智能停车场用户管理
	$("#ScUserAdmin").click(function(){
		$(".toptext").text("用户信息管理");
		$(".SmartCarfirstpage").css("display","none");//欢迎页
		$(".SmartCarUser").css("display","block");//智能停车场用户管理页
		$(".SmartCarPlace").css("display","none");//智能停车场车位管理页
		$(".SmartCarHistory").css("display","none");//智能停车场历史管理页
		$(".ETCUser").css("display","none");//ETC用户管理页
		$(".ETCCharge").css("display","none");//ETC标准收费管理页
		$(".ETCHistory").css("display","none");//ETC历史记录管理页
		$(".CarNumRec").css("display","none");
		$(".CarRed").css("display","none");
	});
	//智能停车场车位管理
	$("#ScUserPlace").click(function(){
		$(".toptext").text("车位管理");
		$(".SmartCarfirstpage").css("display","none");
		$(".SmartCarUser").css("display","none");
		$(".SmartCarPlace").css("display","block");
		$(".SmartCarHistory").css("display","none");
		$(".ETCUser").css("display","none");
		$(".ETCCharge").css("display","none");
		$(".ETCHistory").css("display","none");
		$(".CarNumRec").css("display","none");
		$(".CarRed").css("display","none");
	});
	//智能停车场历史信息管理
	$("#ScUserHistory").click(function(){
		$(".toptext").text("历史记录管理");
		$(".SmartCarfirstpage").css("display","none");
		$(".SmartCarUser").css("display","none");
		$(".SmartCarPlace").css("display","none");
		$(".SmartCarHistory").css("display","block");
		$(".ETCUser").css("display","none");
		$(".ETCCharge").css("display","none");
		$(".ETCHistory").css("display","none");
		$(".CarNumRec").css("display","none");
		$(".CarRed").css("display","none");
	});
	//ETC用户管理
	$("#ETCUserAdmin").click(function(){
		$(".toptext").text("用户管理");
		$(".SmartCarfirstpage").css("display","none");
		$(".SmartCarUser").css("display","none");
		$(".SmartCarPlace").css("display","none");
		$(".SmartCarHistory").css("display","none");
		$(".ETCUser").css("display","block");
		$(".ETCCharge").css("display","none");
		$(".ETCHistory").css("display","none");
		$(".CarNumRec").css("display","none");
		$(".CarRed").css("display","none");
	});
	//ETC收费标准管理
	$("#ETCUserCharge").click(function(){
		$(".toptext").text("收费标准管理");
		$(".SmartCarfirstpage").css("display","none");
		$(".SmartCarUser").css("display","none");
		$(".SmartCarPlace").css("display","none");
		$(".SmartCarHistory").css("display","none");
		$(".ETCUser").css("display","none");
		$(".ETCCharge").css("display","block");
		$(".ETCHistory").css("display","none");
		$(".CarNumRec").css("display","none");
		$(".CarRed").css("display","none");
	});
	//ETC历史记录管理
	$("#ETCUserHistory").click(function(){
		$(".toptext").text("历史记录管理");
		$(".SmartCarfirstpage").css("display","none");
		$(".SmartCarUser").css("display","none");
		$(".SmartCarPlace").css("display","none");
		$(".SmartCarHistory").css("display","none");
		$(".ETCUser").css("display","none");
		$(".ETCCharge").css("display","none");
		$(".ETCHistory").css("display","block");
		$(".CarNumRec").css("display","none");
		$(".CarRed").css("display","none");
	});
	//车牌识别
	$("#Carnumrec").click(function(){
		$(".toptext").text("车牌识别");
		$(".SmartCarfirstpage").css("display","none");
		$(".SmartCarUser").css("display","none");
		$(".SmartCarPlace").css("display","none");
		$(".SmartCarHistory").css("display","none");
		$(".ETCUser").css("display","none");
		$(".ETCCharge").css("display","none");
		$(".ETCHistory").css("display","none");
		$(".CarNumRec").css("display","block");
		$(".CarRed").css("display","none");
	});
		//车牌识别
	$("#CatchRed").click(function(){
		$(".toptext").text("车牌识别");
		$(".SmartCarfirstpage").css("display","none");
		$(".SmartCarUser").css("display","none");
		$(".SmartCarPlace").css("display","none");
		$(".SmartCarHistory").css("display","none");
		$(".ETCUser").css("display","none");
		$(".ETCCharge").css("display","none");
		$(".ETCHistory").css("display","none");
		$(".CarNumRec").css("display","none");
		$(".CarRed").css("display","block");
	});
	//日期时间
	var weekdayArray=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	var Udate= new Date();
	var year=Udate.getFullYear();
	var mouth=Udate.getMonth()+1;
	var date=Udate.getDate();
	var weekday=weekdayArray[Udate.getDay()];
	$("#date").html(year+"年"+mouth+"月"+date+"日"+"  "+weekday);
	function clock(){
		var Udate= new Date();
		hours=Udate.getHours();
		minutes=Udate.getMinutes();
		seconds=Udate.getSeconds();
		if(hours<10){
			hours="0"+hours;
		}
		if(minutes<10){
			minutes="0"+minutes;
		}
		if (seconds<10) {
			seconds="0"+seconds;
		}
		 time=hours+":"+minutes+":"+seconds;
		$("#time").html(time);
		//console.log("1");
	}
	var timer=setInterval(clock,1000);
	
});
function ScUserAdminlist(){
	var arry=["cardID","carNumber","carType","userName","userPhone","cardBalance","registerTime"];
	//创建jqGrid组件
	jQuery("#ScUserlist").jqGrid(
			{
				url : 'http://localhost:82/pUser/getUsersInfo?start=0&limit=15',//组件创建完成之后请求数据的url
				datatype : "json",//请求数据返回的类型。可选json,xml,txt
				colNames : [ '停车卡号', '车牌号', '汽车型号','用户姓名', '联系电话', '当前金额','注册时间','充值金额' ],//jqGrid的列显示名字
				colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
				             {name : 'cardID',index:'cardID',width : 55, align : "center",editable:true,editoptions:{size:10},editrules:{number:true,required:true}}, 
				             {name : 'carNumber',index:'carNumber',width : 65,align : "center",editable:true,editoptions:{size:10},editrules:{required:true,custom:true,custom_func:carNumCheck}}, 
				             {name : 'carType',index:'carType',width:65,align : "center",editable:true,edittype:"select",editoptions:{width:10,value : "宝马:宝马;奥迪:奥迪;奔驰:奔驰"}},
				             {name : 'userName',index:'userName',width : 65,align : "center",editable:true,editoptions:{size:10},editrules:{required:true}}, 
				             {name : 'userPhone',index:'userPhone',width : 70,align : "center",editable:true,editoptions:{size:11},editrules:{required:true,custom:true,custom_func:userPhoneCheck}}, 
				             {name : 'cardBalance',index:'cardBalance',width : 65,align : "center",editable:true,editoptions:{size:10},editrules:{required:true}}, 
				             {name : 'registerTime',index:'registerTime',width : 80,align : "center",editable:false,editoptions:{size:17}},
				             {name : 'sum',index:'sum',width : 1,align : "center",editable:false,editoptions:{size:10},editrules:{required:true}},
				             
				           ],
				jsonReader : { 
                root:"results",    
                records: "totalRecord",
                total:"totalRecord",
                page:"page"
            },  
				rowNum : 20,//一页显示多少条
				rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
				pager : '#pager1',//表格页脚的占位符(一般是div)的id
				sortname : 'cardID',//初始化的时候排序的字段
				sortorder : "asc",//排序方式,可选desc,asc
				mtype : "post",//向后台请求数据的ajax的类型。可选post,get
				viewrecords : true,
				//caption : "停车场信息用户列表",//表格的标题名字
				rownumbers: true,//列索引
				rownumWidth:40,
			});
	/*创建jqGrid的操作按钮容器*/
	/*可以控制界面上增删改查的按钮是否显示*/
	jQuery("#ScUserlist").jqGrid('hideCol', ["sum"]);//隐藏操纵
	jQuery("#ScUserlist").jqGrid('navGrid', '#pager1', {edit : false,add : false,del : false,search:false});
	jQuery("#ScUserlist").setGridHeight (480);//设置表格的高度
	jQuery("#ScUserlist").setGridWidth(1119);
	// jQuery("#ScUserlist").jqGrid('searchGrid', {
 //      sopt : [ 'cn', 'bw', 'eq', 'ne', 'lt', 'gt', 'ew' ]
 //    });
 	//车牌号输入验证
 	 function carNumCheck(value, colname){
 	 	var reg = new RegExp("[\u4E00-\u9FFF][A-Z]([A-Z]|[0-9])","g");
 	 	if(reg.test(value)&&value.length==7){
 	 		return [true,""];
 	 	}
 	 	else
 	 		return [false,"请输入正确的车牌号"];
		
 	}
 	//用户手机号验证
 	function userPhoneCheck(value,colname){
 		if(/^1[34578]\d{9}$/.test(value)){ 
 			return [true,""];
 		}
 		else if (/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(value)) {
 			return [true,""];	
 		}
 		else
        	return [false,"手机号码有误，请重填"]; 
 	}
	//新用户注册添加操作
	$("#bedata").click(function() {
		jQuery("#ScUserlist").jqGrid('hideCol', ["sum"]);//隐藏操纵
		var docHeight = $(document).height(); //获取窗口高度     
		$("#overlay").height(docHeight);  
  		$("#order").css("display","block");
  		$("#overlay").css("display","block");
  		$("#submit").click(function(){
  			if($("#order").valid())//验证表单
  			{
  			$("#overlay").css("display","none");
  			
  			// $("#order").attr("value","");
  			//$("#order").validate('resetForm',false);
  			 //var data=$("#order").val();
             $.ajax({
                    type:"POST",
                    datatype : "json",
                    url:'http://localhost:82/pUser/addUserInfo',
                    data:{
                    	cardID:$("#carnumber").val(),
                    	carNumber:$("#carid").val(),
                    	carType:$("#cartype").val(),
                    	userName:$("#username").val(),
                    	userPhone:$("#userphone").val(),
                    	cardBalance:$("#carbalance").val()
                    },
                    complete:function(msg){
						jQuery("#ScUserlist").jqGrid('setGridParam',{
						url : 'http://localhost:82/pUser/getUsersInfo?start=0&limit=15',//组件创建完成之后请求数据的url
						}).trigger("reloadGrid");
						$("#order").css("display","none");
						$("#order input:enabled").val("");
						// $("#order").validate().resetForm();
                    },
                    // error:function(){
                    //     alert("无法连接到url");
                    // }
                });

  			
  		}
  		});
  		$("#cancle").click(function(){
  			$("#order").css("display","none");
  			$("#order input:enabled").val("");
  			$("#order").validate().resetForm();
  			$("#overlay").css("display","none");
  		});
  		$("#topcancle").click(function(){
  			$("#overlay").css("display","none");
  			$("#order").css("display","none");
  		});
  		// $("#submit").click(function(){

  		// })
    });
		//删除操作
    $("#delete").click(function(){
    	jQuery("#ScUserlist").jqGrid('hideCol', ["sum"]);//隐藏操纵
    	var gr=jQuery("#ScUserlist").jqGrid('getGridParam',"selrow");//selarrrow
    	var gr1=jQuery("#ScUserlist").jqGrid('getRowData',gr);
    	deleteUrl= 'http://localhost:82/pUser/deleteUserInfo';
    	gr2=gr1.cardID;
    	gr3=gr1.carNumber;
    	ETCtagID="";
    	//console.log(gr2);
  		if (gr!=null) {
  			jQuery("#ScUserlist").jqGrid("delGridRow",gr,{

  								reloadAfterSubmit:true			
  			});
  			}
 		else{
 			alert("Please Select Row to delete!");
  			}
	});
	//修改用户信息
	$("#revise").click(function(){
		//jQuery("#ScUserlist").jqGrid('hideCol', ["cardID"]);//隐藏操纵
		// jQuery("#ScUserlist").jqGrid('hideCol', ["sum"]);//隐藏操纵
		jQuery("#ScUserlist").setColProp("sum",{editrules:{required:false}});
		infors="revise";
		jQuery("#ScUserlist").setColProp("cardID",{editoptions:{readonly:true}});
		for(var i=1;i<7;i++){
			jQuery("#ScUserlist").setColProp(arry[i],{editoptions:{readonly:false},editable:true});
		}
		var gr=jQuery("#ScUserlist").jqGrid("getGridParam","selrow");
		urls='http://localhost:82/pUser/updateUserInfo';
		if(gr!=null){
			jQuery("#ScUserlist").jqGrid('editGridRow',gr,{
      		height:400,
      		reloadAfterSubmit : true
    		});
		}
		else{
			alert("Please Select Row");
		}
	});
	//用户充值操作
	$("#recharge").click(function(){
		//jQuery("#ScUserlist").setColProp('cardID',{editoptions:{readonly:false}});
		//是否可编辑，是否只读
		//jQuery("#ScUserlist").jqGrid("setGridParam",{});//jqGrid的列显示名字
		//jQuery("#ScUserlist").jqGrid("setLabel","cardBalance","充值金额：","sum",{editable:true});
		
		infors="recharge";
		for(var i=1;i<7;i++){
			jQuery("#ScUserlist").setColProp(arry[i],{editable:false,editoptions:{readonly:true}});
		}
		jQuery("#ScUserlist").setColProp("cardID",{editoptions:{readonly:true}});//设置新的属性
		jQuery("#ScUserlist").setColProp("carNumber",{editable:true});//设置新的属性
		jQuery("#ScUserlist").setColProp("cardBalance",{editable:true,editoptions:{readonly:true}});
		jQuery("#ScUserlist").jqGrid('showCol', ["sum"]);
		jQuery("#ScUserlist").setColProp("sum",{editable:true,editoptions:{readonly:false},editrules:{required:true}});
		var gr=jQuery("#ScUserlist").jqGrid("getGridParam","selrow");
		
		// var gr4=jQuery("#ScUserlist").jqGrid("getRowData",gr);
		// gr4.cardBalance=0;
		// //console.log(gr5);
		urls='http://localhost:82/pUser/rechargeForParking';
		if (gr!=null) {
			jQuery("#ScUserlist").jqGrid('editGridRow',gr,{
      		reloadAfterSubmit : true//刷新表格
    		});
		}
		else{
			alert("Please Select Row")
		}
		jQuery("#ScUserlist").jqGrid('hideCol', ["sum"]);//显示操作
	});
	//显示所有记录
	$("#showall").click(function(){
		jQuery("#ScUserlist").jqGrid('setGridParam',{
			url : 'http://localhost:82/pUser/getUsersInfo?start=0&limit=15',//组件创建完成之后请求数据的url
			postData: {
				carNum:""}
		}).trigger("reloadGrid");
	});
	var carNumber;
	//按车牌号查询获得焦点事件处理
	$("#ScUserSearchText").focus(function(){
		$("#ScUserSearchText").attr("value","");
		$("#ScUserSearchText").css("color","#000");
	});
	//失去焦点
	$("#ScUserSearchText").blur(function(){
		if ($("#ScUserSearchText").val()=="") {
			alert("车牌号不能为空");
		}
		carNumber=$("#ScUserSearchText").val();
		//console.log($("#ScUserSearchText").val());
		$("#ScUserSearchText").attr("value","请输入要查询的车牌号");
		$("#ScUserSearchText").css("color","#AFABAB");
	});
	//按车牌号查询提交
	$("#ScUserSearch").click(function(){
		if (carNumber==""||carNumber==null) {
			alert("车牌号不能为空");
		}
		else{
		jQuery("#ScUserlist").jqGrid('setGridParam', {
			url:'http://localhost:82/pUser/getUsersInfo?start=0&limit=15',
			postData: {
				carNum:carNumber}
		}).trigger("reloadGrid");
		carNumber=""
		}
	});
}
function ScPlacelist(){
//创建jqGrid组件
	jQuery("#ScPlacelist").jqGrid(
			{
				url : 'http://localhost:82/place/getParkingCarInfo?start=0&limit=15',//组件创建完成之后请求数据的url
				datatype : "json",//请求数据返回的类型。可选json,xml,txt
				colNames : [  '车牌号：', '进入时间','单价（元/分钟）', '已消费（元）' ],//jqGrid的列显示名字
				colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
				             {name : 'carNumber',index:'carNumber',width : 55,align : "center",editable:true,editoptions:{size:10}}, 
				             {name : 'startTime',index:'startTime',width : 90,align : "center",editable:true,editoptions:{size:10}}, 
				             {name : 'unitPrice',index:'unitPrice',width:90,align : "center",editable:true,edittype:"select",editoptions:{width:10,value : "宝马:宝马;奥迪:奥迪;奔驰:奔驰"}},
				             {name : 'payMoney',index:'payMoney',width:90,align : "center",editable:true,edittype:"select",editoptions:{width:10,value : "宝马:宝马;奥迪:奥迪;奔驰:奔驰"}},
				           ],
				jsonReader : { 
                root:"results",    
                records: "totalRecord",
                total:"totalRecord",
                page:"page"
            },  
				rowNum : 20,//一页显示多少条
				rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
				pager : '#pager2',//表格页脚的占位符(一般是div)的id
				sortname : 'cardID',//初始化的时候排序的字段
				sortorder : "asc",//排序方式,可选desc,asc
				mtype : "post",//向后台请求数据的ajax的类型。可选post,get
				viewrecords : true,
				rownumbers: true,//列索引
			});
	  $.ajax({
                    type:"get",
                    datatype : "json",
                    url:'http://localhost:82/place/queryParkingInfo',
                    success:function(data){
                    	//$("#Pnum").html(data);
						// $.each(data, function(commentIndex,comment){
							// alert(comment['maxPlace']);
							$("#Pnum").html(data.maxPlace);
							$("#Npnum").html(data.freePlace);
							$("#Pprice").html(data.unitPrice);
							//alert("ss");
						// })
                    },
                    // error:function(){
                    //     alert("无法连接到url");
                    // }
                });
	/*创建jqGrid的操作按钮容器*/
	/*可以控制界面上增删改查的按钮是否显示*/

	jQuery('#ScPlacelist').jqGrid('navGrid', '#pager2', {edit : false,add : false,del : false,search:false});
	jQuery("#ScPlacelist").setGridHeight (480);//设置表格的高度
	jQuery("#ScPlacelist").setGridWidth(1124);
	$("#CarPlaceSet").click(function(){
		var docHeight = $(document).height(); //获取窗口高度   
		  $('#overlay').height(docHeight);
  		$("#setPlaceform").css("display","block");
  		$("#overlay").css("display","block");
  		$("#submitPlace").click(function(){
  			if($("#setPlaceform").valid())//验证表单
  			{
  			$("#overlay").css("display","none");
  			
  			// $("#order").attr("value","");
  			//$("#order").validate('resetForm',false);
  			 //var data=$("#order").val();
             $.ajax({
                    type:"POST",
                    datatype : "json",
                    url:'http://localhost:82/place/setMaxPlace',
                    data:{
                    	maxPlace: $("#Maxplace").val()
                    },
                    complete:function(msg){
						jQuery("#ScPlacelist").jqGrid('setGridParam',{
						url : 'http://localhost:82/place/getParkingCarInfo?start=0&limit=15',//组件创建完成之后请求数据的url
						}).trigger("reloadGrid");
						$("#setPlaceform").css("display","none");
						$("#setPlaceform input:enabled").val("");
						// $("#order").validate().resetForm();
                    },
                    // error:function(){
                    //     alert("无法连接到url");
                    // }
                });
             $.ajax({
                    type:"get",
                    datatype : "json",
                    url:'http://localhost:82/place/queryParkingInfo',
                    success:function(data){
                    	//$("#Pnum").html(data);
						// $.each(data, function(commentIndex,comment){
							// alert(comment['maxPlace']);
							$("#Pnum").html(data.maxPlace);
							$("#Npnum").html(data.freePlace);
							$("#Pprice").html(data.unitPrice);
							//alert("ss");
						// })
                    },
                    // error:function(){
                    //     alert("无法连接到url");
                    // }
                });
  			
  		}
  		});
  		$("#canclePlace").click(function(){
  			$("#setPlaceform").css("display","none");
  			$("#setPlaceform input:enabled").val("");
  			$("#setPlaceform").validate().resetForm();
  			$("#overlay").css("display","none");
  		});
  		$("#topcanclePlace").click(function(){
  			$("#overlay").css("display","none");
  			$("#setPlaceform").css("display","none");
  		});
	});
	$("#CarPriceSet").click(function(){
		// jQuery("#ScPlacelist").jqGrid('setGridParam', {
		// 	url:'http://localhost:82/place/queryParkingInfo?start=0&limit=15',
		// 	postData: {
		// 		unitPrice:5,
		// 		success:true,
		// 		freePlace:32,
		// 		maxPlace:32}
		// }).trigger("reloadGrid");
		var docHeight = $(document).height(); //获取窗口高度  
		     
		  //$('body').append('<div id="overlay"></div>');  
		     
		$('#overlay').height(docHeight) ;
  		$("#setPriceform").css("display","block");
  		$("#overlay").css("display","block");
  		$("#submitPrice").click(function(){
  			if($("#setPriceform").valid())//验证表单
  			{
  			$("#overlay").css("display","none");
  			
  			// $("#order").attr("value","");
  			//$("#order").validate('resetForm',false);
  			 //var data=$("#order").val();
             $.ajax({
                    type:"POST",
                    datatype : "json",
                    url:'http://localhost:82/place/setUnitPrice',
                    data:{
                    	unitPrice: $("#Unitprice").val()
                    },
                    complete:function(msg){
						jQuery("#ScPlacelist").jqGrid('setGridParam',{
						url : 'http://localhost:82/place/getParkingCarInfo?start=0&limit=15',//组件创建完成之后请求数据的url
						}).trigger("reloadGrid");
						$("#setPriceform").css("display","none");
						$("#setPriceform input:enabled").val("");
						// $("#order").validate().resetForm();
                    },
                    // error:function(){
                    //     alert("无法连接到url");
                    // }
                });
             $.ajax({
                    type:"get",
                    datatype : "json",
                    url:'http://localhost:82/place/queryParkingInfo',
                    success:function(data){
                    	//$("#Pnum").html(data);
						// $.each(data, function(commentIndex,comment){
							// alert(comment['maxPlace']);
							$("#Pnum").html(data.maxPlace);
							$("#Npnum").html(data.freePlace);
							$("#Pprice").html(data.unitPrice);
							//alert("ss");
						// })
                    },
                    // error:function(){
                    //     alert("无法连接到url");
                    // }
                });
  			
  		}
  		});
  		$("#canclePrice").click(function(){
  			$("#setPriceform").css("display","none");
  			$("#setPriceform input:enabled").val("");
  			$("#setPriceform").validate().resetForm();
  			$("#overlay").css("display","none");
  		});
  		$("#topcanclePrice").click(function(){
  			$("#overlay").css("display","none");
  			$("#setPriceform").css("display","none");
  		});
	});
	$("#RemovePlace").click(function(){
		//http://localhost:82/place/clearParkingCar
		var docHeight = $(document).height(); //获取窗口高度  
		     
		  //$('body').append('<div id="overlay"></div>');  
		     
		$('#overlay').height(docHeight) ;
  		$("#clearPlaceform").css("display","block");
  		$("#overlay").css("display","block");
  		$("#submitClear").click(function(){
  			$("#overlay").css("display","none");
  			$("#clearPlaceform").css("display","none");
             $.ajax({
                    type:"get",
                    datatype : "json",
                    url:'http://localhost:82/place/clearParkingCar',
                    success:function(data){
                    	jQuery("#ScPlacelist").jqGrid('setGridParam',{
						url : 'http://localhost:82/place/getParkingCarInfo?start=0&limit=15',//组件创建完成之后请求数据的url
						}).trigger("reloadGrid");
                    },
                });
  		});
  		$("#cancleClear").click(function(){
  			$("#clearPlaceform").css("display","none");
  			$("#clearPlaceform input:enabled").val("");
  			$("#clearPlaceform").validate().resetForm();
  			$("#overlay").css("display","none");
  		});
  		$("#topcancleClear").click(function(){
  			$("#overlay").css("display","none");
  			$("#clearPlaceform").css("display","none");
  		});

	});
}
function ScHistorylist(){
//创建jqGrid组件
	jQuery("#ScHistorylist").jqGrid(
			{
				url : 'http://localhost:82/pHis/getHistoryInfo?start=0&limit=15',//组件创建完成之后请求数据的url
				datatype : "json",//请求数据返回的类型。可选json,xml,txt
				colNames : [  '车牌号：', '进车时间','出车时间', '扣费金额（元）','停车单价' ],//jqGrid的列显示名字
				colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
				             {name : 'carNumber',index:'carNumber',width : 55,align : "center",editable:true,editoptions:{size:10}}, 
				             {name : 'startTime',index:'startTime',width : 90,align : "center",editable:true,editoptions:{size:10}}, 
				             {name : 'endTime',index:'endTime',width:90,align : "center",editable:true,edittype:"select",editoptions:{width:10,value : "宝马:宝马;奥迪:奥迪;奔驰:奔驰"}},
				             {name : 'payMoney',index:'payMoney',width:90,align : "center",editable:true,edittype:"select",editoptions:{width:10,value : "宝马:宝马;奥迪:奥迪;奔驰:奔驰"}},
				              {name : 'unitPrice',index:'unitPrice',width : 55,align : "center",editable:true,editoptions:{size:10}}, 
				           ],
				jsonReader : { 
                root:"results",    
                records: "totalRecord",
                total:"totalRecord",
                page:"page"
            },  
				rowNum : 20,//一页显示多少条
				rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
				pager : '#pager3',//表格页脚的占位符(一般是div)的id
				sortname : 'cardID',//初始化的时候排序的字段
				sortorder : "asc",//排序方式,可选desc,asc
				mtype : "post",//向后台请求数据的ajax的类型。可选post,get
				viewrecords : true,
				rownumbers: true,//列索引
			});
	/*创建jqGrid的操作按钮容器*/
	/*可以控制界面上增删改查的按钮是否显示*/
	jQuery("#ScHistorylist").jqGrid('navGrid', '#pager3', {edit : false,add : false,del : false,search:false});
	jQuery("#ScHistorylist").setGridHeight (480);//设置表格的高度
	jQuery("#ScHistorylist").setGridWidth(1124);
			//删除操作
    $("#deleteHistory").click(function(){
    	var gr=jQuery("#ScHistorylist").jqGrid('getGridParam',"selrow");//selarrrow
    	var gr1=jQuery("#ScUserlist").jqGrid('getRowData',gr);
    	deleteUrl='http://localhost:82/pHis/deleteHistory';
    	gr2=gr1.payMoney;
    	gr3=gr1.carNumber;
    	ETCtagID="";
    	//console.log(gr2);
  		if (gr!=null) {
  			jQuery("#ScHistorylist").jqGrid("delGridRow",gr,{
  								reloadAfterSubmit:true			
  			});
  			}
 		else{
 			alert("Please Select Row to delete!");
  			}
	});
	//显示所有记录
	$("#showaHistory").click(function(){
		jQuery("#ScHistorylist").jqGrid('setGridParam',{
			url : 'http://localhost:82/pHis/getHistoryInfo?start=0&limit=15',//组件创建完成之后请求数据的url
			postData: {
				carNum:""}
		}).trigger("reloadGrid");
	});
	var carNumber;
	//按车牌号查询获得焦点事件处理
	$("#ScHistorySearchText").focus(function(){
		$("#ScHistorySearchText").attr("value","");
		$("#ScHistorySearchText").css("color","#000");
	});
	//失去焦点
	$("#ScHistorySearchText").blur(function(){
		if ($("#ScHistorySearchText").val()=="") {
			alert("车牌号不能为空");
		}
		carNumber=$("#ScHistorySearchText").val();
		//console.log($("#ScUserSearchText").val());
		$("#ScHistorySearchText").attr("value","请输入要查询的车牌号");
		$("#ScHistorySearchText").css("color","#AFABAB");
	});
	//按车牌号查询提交
	$("#ScHistorySearch").click(function(){
		if (carNumber==""||carNumber==null) {
			alert("车牌号不能为空");
		}
		else{
		jQuery("#ScHistorylist").jqGrid('setGridParam', {
			url:'http://localhost:82/pHis/getHistoryInfo?start=0&limit=15',
			postData: {
				carNum:carNumber}
		}).trigger("reloadGrid");
		carNumber=""
		}
	});
}
function ETCUserlist(){
//创建jqGrid组件
	jQuery("#ETCUserlist").jqGrid(
			{
				url : 'http://localhost:82/etcUser/getUsersInfo?start=0&limit=15',//组件创建完成之后请求数据的url
				datatype : "json",//请求数据返回的类型。可选json,xml,txt
				colNames : [  '车主', '车牌号','电子标签号','车型', '余额','车主电话','注册时间' ],//jqGrid的列显示名字
				colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
				             {name : 'name',index:'name',width : 40,align : "left",editable:true,editoptions:{size:10},editrules:{required:true}}, 
				             {name : 'carNum',index:'carNum',width : 40,align : "left",editable:true,editoptions:{size:10},editrules:{required:true,custom:true,custom_func:carNumCheck}},
				             {name : 'tagID',index:'tagID',width : 0.1,align : "left",editable:true,editoptions:{size:10},editrules:{required:true}},  
				             {name : 'carType',index:'carType',width:40,align : "left",editable:true,edittype:"select",editoptions:{width:10,value : "小型1:小型1;中型:中型;大型:大型;豪华型:豪华型"}},
				             {name : 'balance',index:'balance',width:40,align : "left",editable:true,editoptions:{size:10},editrules:{number:true,required:true}},
				             {name : 'tel',index:'tel',width : 55,align : "left",editable:true,editoptions:{size:10},editrules:{required:true,custom:true,custom_func:userPhoneCheck}},
				             {name : 'time',index:'time',width : 80,align : "left",editable:true,editoptions:{size:17},editrules:{required:true}}, 
				           ],
				jsonReader : { 
                root:"results",    
                records: "totalRecord",
                total:"totalRecord",
                page:"page"
            },  
				rowNum : 20,//一页显示多少条
				rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
				pager : '#pager4',//表格页脚的占位符(一般是div)的id
				sortname : 'cardID',//初始化的时候排序的字段
				sortorder : "asc",//排序方式,可选desc,asc
				mtype : "post",//向后台请求数据的ajax的类型。可选post,get
				viewrecords : true,
				rownumbers: true,//列索引
			});
	jQuery("#ETCUserlist").jqGrid('hideCol', ["tagID"]);//隐藏操纵
	/*创建jqGrid的操作按钮容器*/
	/*可以控制界面上增删改查的按钮是否显示*/
	jQuery("#ETCUserlist").jqGrid('navGrid', '#pager4', {edit : false,add : false,del : false,search:false});
	jQuery("#ETCUserlist").setGridHeight (480);//设置表格的高度
	jQuery("#ETCUserlist").setGridWidth(1124);
//新用户注册添加操作
	$("#ETCbedata").click(function() {
		//jQuery("#ScUserlist").jqGrid('hideCol', ["sum"]);//隐藏操纵
		var docHeight = $(document).height(); //获取窗口高度     
		$("#overlay").height(docHeight);  
  		$("#ETCnewuser").css("display","block");
  		$("#overlay").css("display","block");
  		$("#ETCUsersubmit").click(function(){
  			if($("#ETCnewuser").valid())//验证表单
  			{
  			$("#overlay").css("display","none");
  			
  			// $("#order").attr("value","");
  			//$("#order").validate('resetForm',false);
  			 //var data=$("#order").val();
             $.ajax({
                    type:"POST",
                    datatype : "json",
                    url:'http://localhost:82/etcUser/addUserInfo',
                    data:{
                    	name:$("#ETCusername").val(),
                    	carNum:$("#ETCcarid").val(),
                    	tagID:$("#ETCelenum").val(),
                    	carType:$("#ETCcartype").val(),
                    	balance:$("#ETCbalance").val(),
                    	tel:$("#ETCuserphone").val()
                    },
                    complete:function(msg){
						jQuery("#ETCUserlist").jqGrid('setGridParam',{
						url : 'http://localhost:82/etcUser/getUsersInfo?start=0&limit=15',//组件创建完成之后请求数据的url
						}).trigger("reloadGrid");
						$("#ETCnewuser").css("display","none");
						$("#ETCnewuser input:enabled").val("");
                    },
                    // error:function(){
                    //     alert("无法连接到url");
                    // }
                });

  			
  		}
  		});
  		$("#ETCUsercancle").click(function(){
  			$("#ETCnewuser").css("display","none");
  			$("#ETCnewuser input:enabled").val("");
  			$("#ETCnewuser").validate().resetForm();
  			$("#overlay").css("display","none");
  		});
  		$("#ETCtopcancle").click(function(){
  			$("#overlay").css("display","none");
  			$("#ETCnewuser").css("display","none");
  		});
  		// $("#submit").click(function(){

  		// })
    });
		//删除操作
    $("#ETCdelete").click(function(){
    	var gr=jQuery("#ETCUserlist").jqGrid('getGridParam',"selrow");//selarrrow
    	var gr1=jQuery("#ETCUserlist").jqGrid('getRowData',gr);
    	deleteUrl= 'http://localhost:82/etcUser/deleteUserInfo';
    	gr2=gr1.cardID;
    	gr3=gr1.carNumber;
    	ETCtagID=gr1.tagID;
  		if (gr!=null) {
  			jQuery("#ETCUserlist").jqGrid("delGridRow",gr,{
  								reloadAfterSubmit:true			
  			});
  			}
 		else{
 			alert("Please Select Row to delete!");
  			}
	});
	//修改用户信息
	$("#ETCrevise").click(function(){
		jQuery("#ETCUserlist").jqGrid('showCol', ["tagID"]);
		infors="revise";
		var gr=jQuery("#ETCUserlist").jqGrid("getGridParam","selrow");
		urls='http://localhost:82/etcUser/updateUserInfo';
		if(gr!=null){
			jQuery("#ETCUserlist").jqGrid('editGridRow',gr,{
			width:350,
      		height:400,
      		reloadAfterSubmit : true
    		});
		}
		else{
			alert("Please Select Row");
		}
		jQuery("#ETCUserlist").jqGrid('hideCol', ["tagID"]);
	});
	//用户充值操作
	$("#ETCrecharge").click(function(){
		var gr=jQuery("#ETCUserlist").jqGrid("getGridParam","selrow");
		if(gr!=null){
			var gr1=jQuery("#ETCUserlist").jqGrid('getRowData',gr);
			$("#ETCname").val(gr1.carNum);
			// alert(gr1.carNum);
			var docHeight = $(document).height(); //获取窗口高度  
					     
					  //$('body').append('<div id="overlay"></div>');  
					     
					$('#overlay').height(docHeight) ;
			  		$("#ETCrechargeform").css("display","block");
			  		$("#overlay").css("display","block");
			  		$("#ETCsubmitClear").click(function(){
			  			if($("#ETCrechargeform").valid())//验证表单
			  			{
			  			$("#overlay").css("display","none");
			             $.ajax({
			                    type:"POST",
			                    datatype : "json",
			                    url:'http://localhost:82/etcUser/recharge',
			                    data:{
			                    	carNum:$("#ETCname").val(),
									sum: $("#ETCchargenum").val(),
			                    },
			                    complete:function(msg){
									jQuery("#ETCUserlist").jqGrid('setGridParam',{
									url : 'http://localhost:82/etcUser/getUsersInfo?start=0&limit=15',//组件创建完成之后请求数据的url
									}).trigger("reloadGrid");
									$("#ETCrechargeform").css("display","none");
									$("#ETCrechargeform input:enabled").val("");
									// $("#order").validate().resetForm();
			                    },
			                    // error:function(){
			                    //     alert("无法连接到url");
			                    // }
			                });
			  			}
			  		});
			  		$("#ETCcancleClear").click(function(){
			  			$("#ETCrechargeform").css("display","none");
			  			$("#ETCrechargeform input:enabled").val("");
			  			$("#ETCrechargeform").validate().resetForm();
			  			$("#overlay").css("display","none");
			  		});
			  		$("#ETCtopcancleClear").click(function(){
			  			$("#overlay").css("display","none");
			  			$("#ETCrechargeform").css("display","none");
			  		});
		}
		else{
			alert("Please Select Row");
		}
	});
	//显示所有记录
	$("#ETCshowall").click(function(){
		jQuery("#ETCUserlist").jqGrid('setGridParam',{
			url : 'http://localhost:82/etcUser/getUsersInfo?start=0&limit=15',//组件创建完成之后请求数据的url
			postData: {
				carNum:"",
				name:""}
		}).trigger("reloadGrid");
	});
	//按车牌号查询获得焦点事件处理

	$("#ETCnumText").focus(function(){
		$("#ETCnumText").attr("value","");
		$("#ETCnumText").css("color","#000");
	});
	$("#ETCnameSearchText").focus(function(){
		$("#ETCnameSearchText").attr("value","");
		$("#ETCnameSearchText").css("color","#000");
	});
	//失去焦点
	$("#ETCnumText").blur(function(){
		if ($("#ETCnumText").val()=="") {
			alert("车牌号不能为空");
		}
		carNum=$("#ETCnumText").val();
		//console.log($("#ScUserSearchText").val());
		$("#ETCnumText").attr("value","请输入要查询的车牌号");
		$("#ETCnumText").css("color","#AFABAB");
	});
	$("#ETCnameSearchText").blur(function(){
		if ($("#ETCnameSearchText").val()=="") {
			alert("车主姓名不能为空");
		}
		name=$("#ETCnameSearchText").val();
		//console.log($("#ScUserSearchText").val());
		$("#ETCnameSearchText").attr("value","请输入车主姓名");
		$("#ETCnameSearchText").css("color","#AFABAB");
	});
	//按车牌号查询提交
	$("#ETCnumSearch").click(function(){
		if (carNum==""||carNum==null) {
			alert("车牌号不能为空");
		}
		else{
		jQuery("#ETCUserlist").jqGrid('setGridParam', {
			url:'http://localhost:82/etcUser/getUsersInfo?start=0&limit=15',
			postData: {
				carNum:carNum}
		}).trigger("reloadGrid");
		}
	});
	$("#ETCnameSearch").click(function(){
		if (name==""||name==null) {
			alert("车牌号不能为空");
		}
		else{
		jQuery("#ETCUserlist").jqGrid('setGridParam', {
			url:'http://localhost:82/etcUser/getUsersInfo?start=0&limit=15',
			postData: {
				name:name}
		}).trigger("reloadGrid");
		}
});

	//车牌号输入验证
 	 function carNumCheck(value, colname){
 	 	var reg = new RegExp("[\u4E00-\u9FFF][A-Z]([A-Z]|[0-9])","g");
 	 	if(reg.test(value)&&value.length==7){
 	 		return [true,""];
 	 	}
 	 	else
 	 		return [false,"请输入正确的车牌号"];
		
 	}
 	//用户手机号验证
 	function userPhoneCheck(value,colname){
 		if(/^1[34578]\d{9}$/.test(value)){ 
 			return [true,""];
 		}
 		else if (/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(value)) {
 			return [true,""];	
 		}
 		else
        	return [false,"手机号码有误，请重填"]; 
 	}
}
function ETCChargelist(){
//创建jqGrid组件
	jQuery("#ETCChargelist").jqGrid(
			{
				url : 'http://localhost:82/charge/getChargeInfo?start=0&limit=15',//组件创建完成之后请求数据的url
				datatype : "json",//请求数据返回的类型。可选json,xml,txt
				colNames : [  '车型', '单次收费'],//jqGrid的列显示名字
				colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
				             {name : 'cartype',index:'cartype',width : 55,align : "center",editable:true,editoptions:{size:10}}, 
				             {name : 'price',index:'price',width : 90,align : "center",editable:true,editoptions:{size:10}}, 
				           ],
				jsonReader : { 
                root:"results",    
                records: "totalRecord",
                total:"totalRecord",
                page:"page"
            },  
				rowNum : 10,//一页显示多少条
				rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
				pager : '#pager5',//表格页脚的占位符(一般是div)的id
				sortname : 'cardID',//初始化的时候排序的字段
				sortorder : "asc",//排序方式,可选desc,asc
				mtype : "post",//向后台请求数据的ajax的类型。可选post,get
				viewrecords : true,
				rownumbers: true,//列索引
			});
	/*创建jqGrid的操作按钮容器*/
	/*可以控制界面上增删改查的按钮是否显示*/
	jQuery("#ETCChargelist").jqGrid('navGrid', '#pager5', {edit : false,add : false,del : false,search:false});
	jQuery("#ETCChargelist").setGridHeight (480);//设置表格的高度
	jQuery("#ETCChargelist").setGridWidth(1124);
	//新用户注册添加操作
	$("#ETCCbedata").click(function() {
		var docHeight = $(document).height(); //获取窗口高度     
		$("#overlay").height(docHeight);  
  		$("#ETCNewchargeform").css("display","block");
  		$("#overlay").css("display","block");
  		$("#ETCNewsubmit").click(function(){
  			if($("#ETCNewchargeform").valid())//验证表单
  			{
  			$("#overlay").css("display","none");
             $.ajax({
                    type:"POST",
                    datatype : "json",
                    url:'http://localhost:82/charge/addChargeInfo',
                    data:{
                    	cartype:$("#ETCType").val(),
                    	price:$("#ETCPerprice").val()
                    },
                    complete:function(msg){
						jQuery("#ETCChargelist").jqGrid('setGridParam',{
						url : 'http://localhost:82/charge/getChargeInfo?start=0&limit=15',//组件创建完成之后请求数据的url
						}).trigger("reloadGrid");
						$("#ETCNewchargeform").css("display","none");
						$("#ETCNewchargeform input:enabled").val("");
						// $("#order").validate().resetForm();
                    },
                });	
  		}
  		});
  		$("#ETCNewcancle").click(function(){
  			$("#ETCNewchargeform").css("display","none");
  			$("#ETCNewchargeform input:enabled").val("");
  			$("#ETCNewchargeform").validate().resetForm();
  			$("#overlay").css("display","none");
  		});
  		$("#ETCNewchargetop").click(function(){
  			$("#overlay").css("display","none");
  			$("#ETCNewchargeform").css("display","none");
  		});
    });
		//删除操作
    $("#ETCCdelete").click(function(){
    	var gr=jQuery("#ETCChargelist").jqGrid('getGridParam',"selrow");//selarrrow
    	var gr1=jQuery("#ETCChargelist").jqGrid('getRowData',gr);
    	deleteUrl= 'http://localhost:82/charge/deleteChargeInfo';
    	gr2="";
    	gr3="";
    	ETCtagID="";
    	//console.log(gr2);
  		if (gr!=null) {
  			jQuery("#ETCChargelist").jqGrid("delGridRow",gr,{

  								reloadAfterSubmit:true			
  			});
  			}
 		else{
 			alert("Please Select Row to delete!");
  			}
	});
	//修改用户信息
	$("#ETCCrevise").click(function(){
		infors="revise";
		var gr=jQuery("#ETCChargelist").jqGrid("getGridParam","selrow");
		urls='http://localhost:82/charge/updateChargeInfo';
		if(gr!=null){
			jQuery("#ETCChargelist").jqGrid('editGridRow',gr,{
      		height:400,
      		reloadAfterSubmit : true
    		});
		}
		else{
			alert("Please Select Row");
		}
	});
	//按车型查询获得焦点事件处理
	$("#ETCCSearchText").focus(function(){
		$("#ETCCSearchText").attr("value","");
		$("#ETCCSearchText").css("color","#000");
	});
	//失去焦点
	$("#ETCCSearchText").blur(function(){
		if ($("#ETCCSearchText").val()=="") {
			alert("车型不能为空");
		}
		cartype=$("#ETCCSearchText").val();
		//console.log($("#ScUserSearchText").val());
		$("#ETCCSearchText").attr("value","请输入要查询的车型");
		$("#ETCCSearchText").css("color","#AFABAB");
	});
	//按车牌号查询提交
	$("#ETCCSearch").click(function(){
		if (cartype==""||cartype==null) {
			alert("车牌号不能为空");
		}
		else{
		jQuery("#ETCChargelist").jqGrid('setGridParam', {
			url:'http://localhost:82/charge/getChargeInfo?start=0&limit=15',
			postData: {
				cartype:cartype}
		}).trigger("reloadGrid");
		}
	});
}
function ETCHistorylist(){
//创建jqGrid组件
	jQuery("#ETCHistorylist").jqGrid(
			{
				url : 'http://localhost:82/etcHis/getHistoryInfo?start=0&limit=15',//组件创建完成之后请求数据的url
				datatype : "json",//请求数据返回的类型。可选json,xml,txt
				colNames : [ '车主姓名', '车牌号', '车辆标签','金额', '记录类型', '日期'],//jqGrid的列显示名字
				colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
				             {name : 'name',index:'name',width : 55,align : "center",editable:true,editoptions:{size:10}}, 
				             {name : 'carNum',index:'carNum',width : 90,align : "center",editable:true,editoptions:{size:10}}, 
				             {name : 'tagID',index:'tagID',width:90,align : "center",editable:true,edittype:"select",editoptions:{width:10,value : "宝马:宝马;奥迪:奥迪;奔驰:奔驰"}},
				             {name : 'amount',index:'amount',width : 90,align : "center",editable:true,editoptions:{size:10}}, 
				             {name : 'recordType',index:'recordType',width : 80,align : "center",editable:true,editoptions:{size:10}}, 
				             {name : 'date',index:'date',width : 80,align : "center",editable:true,editoptions:{size:10}}, 
				           ],
				jsonReader : { 
                root:"results",    
                records: "totalRecord",
                total:"totalRecord",
                page:"page"
            },  
				rowNum : 10,//一页显示多少条
				rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
				pager : '#pager6',//表格页脚的占位符(一般是div)的id
				mtype : "post",//向后台请求数据的ajax的类型。可选post,get
				viewrecords : true,
				rownumbers: true,//列索引
			});
	/*创建jqGrid的操作按钮容器*/
	/*可以控制界面上增删改查的按钮是否显示*/
	jQuery("#ETCHistorylist").jqGrid('navGrid', '#pager6', {edit : false,add : false,del : false,search:false});
	jQuery("#ETCHistorylist").setGridHeight (480);//设置表格的高度
	jQuery("#ETCHistorylist").setGridWidth(1124);
	//删除操作
    $("#ETCHdelete").click(function(){
    	var gr=jQuery("#ETCHistorylist").jqGrid('getGridParam',"selrow");//selarrrow
    	var gr1=jQuery("#ETCHistorylist").jqGrid('getRowData',gr);
    	deleteUrl= 'http://localhost:82/etcHis/deleteHistoryInfo';
    	gr2="";
    	gr3="";
    	ETCtagID="";
  		if (gr!=null) {
  			jQuery("#ETCHistorylist").jqGrid("delGridRow",gr,{

  								reloadAfterSubmit:true			
  			});
  			}
 		else{
 			alert("Please Select Row to delete!");
  			}
	});
		//按车牌号查询获得焦点事件处理

	$("#ETCHnumtext").focus(function(){
		$("#ETCHnumtext").attr("value","");
		$("#ETCHnumtext").css("color","#000");
	});
	$("#ETCHnametext").focus(function(){
		$("#ETCHnametext").attr("value","");
		$("#ETCHnametext").css("color","#000");
	});
	//失去焦点
	$("#ETCHnumtext").blur(function(){
		if ($("#ETCHnumtext").val()=="") {
			alert("车牌号不能为空");
		}
		carNum=$("#ETCHnumtext").val();
		//console.log($("#ScUserSearchText").val());
		$("#ETCHnumtext").attr("value","请输入要查询的车牌号");
		$("#ETCHnumtext").css("color","#AFABAB");
	});
	$("#ETCHnametext").blur(function(){
		if ($("#ETCHnametext").val()=="") {
			alert("车主姓名不能为空");
		}
		name=$("#ETCHnametext").val();
		//console.log($("#ScUserSearchText").val());
		$("#ETCHnametext").attr("value","请输入车主姓名");
		$("#ETCHnametext").css("color","#AFABAB");
	});
	//按车牌号查询提交
	$("#ETCHnum").click(function(){
		if (carNum==""||carNum==null) {
			alert("车牌号不能为空");
		}
		else{
		jQuery("#ETCHistorylist").jqGrid('setGridParam', {
			url:'http://localhost:82/etcHis/getHistoryInfo?start=0&limit=15',
			postData: {
				carNum:carNum}
		}).trigger("reloadGrid");
		}
	});
	$("#ETCHname").click(function(){
		if (name==""||name==null) {
			alert("车牌号不能为空");
		}
		else{
		jQuery("#ETCHistorylist").jqGrid('setGridParam', {
			url:'http://localhost:82/etcHis/getHistoryInfo?start=0&limit=15',
			postData: {
				name:name}
		}).trigger("reloadGrid");
		}
});
	$('#two-inputs').dateRangePicker(
		{
		getValue: function()
		{
			if ($('#startTime').val() && $('#stopTime').val() )
				return $('#startTime').val() + ' to ' + $('#stopTime').val();
			else
				return '';
		},
		setValue: function(s,s1,s2)
		{
			$('#startTime').val(s1);
			$('#stopTime').val(s2);
		}
	});
	$("#ETCHtime").click(function(){
		if ($("#startTime").val()==""||$("#stopTime").val()=="") {
			alert("请先选择开始/结束时间");
		}
		else{
		jQuery("#ETCHistorylist").jqGrid('setGridParam', {
			url:'http://localhost:82/etcHis/getHistoryInfo?start=0&limit=15',
			postData: {
				startTime:$("#startTime").val()+"T00:00:00",
				stopTime:$("#stopTime").val()+"T00:00:00",
			}
		}).trigger("reloadGrid");
		}
	});
}
function CarnumReclist(){
//创建jqGrid组件
	jQuery("#CarNumReclist").jqGrid(
			{
				url : 'http://localhost:82/plate/getPlateNumberInfo?start=0&limit=15',//组件创建完成之后请求数据的url
				datatype : "json",//请求数据返回的类型。可选json,xml,txt
				colNames : [ '车牌号', '车主', '车辆标签','拍照时间', '查看图像'],//jqGrid的列显示名字
				colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
				             {name : 'carNum',index:'carNum',width : 55,align : "center",editable:true,editoptions:{size:10}}, 
				             {name : 'owner',index:'owner',width : 90,align : "center",editable:true,editoptions:{size:10}}, 
				             {name : 'tagID',index:'tagID',width:90,align : "center",editable:true,edittype:"select",editoptions:{width:10,value : "宝马:宝马;奥迪:奥迪;奔驰:奔驰"}},
				             {name : 'time',index:'time',width : 90,align : "center",editable:true,editoptions:{size:10}}, 
				             {name : 'photo',index:'photo',width : 80,align : "center",editable:true,editoptions:{size:10}}, 
				           ],
				jsonReader : { 
                root:"results",    
                records: "totalRecord",
                total:"totalRecord",
                page:"page"
            },  
				rowNum : 10,//一页显示多少条
				rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
				pager : '#pager7',//表格页脚的占位符(一般是div)的id
				mtype : "post",//向后台请求数据的ajax的类型。可选post,get
				viewrecords : true,
				rownumbers: true,//列索引
			});
	/*创建jqGrid的操作按钮容器*/
	/*可以控制界面上增删改查的按钮是否显示*/
	jQuery("#CarNumReclist").jqGrid('navGrid', '#pager7', {edit : false,add : false,del : false,search:false});
	jQuery("#CarNumReclist").setGridHeight (480);//设置表格的高度
	jQuery("#CarNumReclist").setGridWidth(1124);
	//删除操作
    $("#CarNumRecHdelete").click(function(){
    	var gr=jQuery("#CarNumReclist").jqGrid('getGridParam',"selrow");//selarrrow
    	var gr1=jQuery("#CarNumReclist").jqGrid('getRowData',gr);
    	deleteUrl= 'http://localhost:82/plate/deletePlateNumberInfo';
    	gr2="";
    	gr3="";
    	ETCtagID="";
  		if (gr!=null) {
  			jQuery("#CarNumReclist").jqGrid("delGridRow",gr,{

  								reloadAfterSubmit:true			
  			});
  			}
 		else{
 			alert("Please Select Row to delete!");
  			}
	});

}
function CarRedlist(){
//创建jqGrid组件
	jQuery("#CarRedlist").jqGrid(
			{
				url : 'http://localhost:82/redLight/getRedLightInfo?start=0&limit=15',//组件创建完成之后请求数据的url
				datatype : "json",//请求数据返回的类型。可选json,xml,txt
				colNames : [ '车牌号', '拍照时间', '查看图像'],//jqGrid的列显示名字
				colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
				             {name : 'carNum',index:'carNum',width : 55,align : "center",editable:true,editoptions:{size:10}},
				             {name : 'time',index:'time',width : 90,align : "center",editable:true,editoptions:{size:10}}, 
				             {name : 'photoName',index:'photoName',width : 80,align : "center",editable:true,editoptions:{size:10}}, 
				           ],
				jsonReader : { 
                root:"results",    
                records: "totalRecord",
                total:"totalRecord",
                page:"page"
            },  
				rowNum : 10,//一页显示多少条
				rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
				pager : '#pager8',//表格页脚的占位符(一般是div)的id
				mtype : "post",//向后台请求数据的ajax的类型。可选post,get
				viewrecords : true,
				rownumbers: true,//列索引
			});
	/*创建jqGrid的操作按钮容器*/
	/*可以控制界面上增删改查的按钮是否显示*/
	jQuery("#CarRedlist").jqGrid('navGrid', '#pager8', {edit : false,add : false,del : false,search:false});
	jQuery("#CarRedlist").setGridHeight (480);//设置表格的高度
	jQuery("#CarRedlist").setGridWidth(1124);
	//删除操作
    $("#CarRedHdelete").click(function(){
    	var gr=jQuery("#CarRedlist").jqGrid('getGridParam',"selrow");//selarrrow
    	var gr1=jQuery("#CarRedlist").jqGrid('getRowData',gr);
    	deleteUrl= 'http://localhost:82/plate/deletePlateNumberInfo';
    	gr2="";
    	gr3="";
    	ETCtagID="";
  		if (gr!=null) {
  			jQuery("#CarRedlist").jqGrid("delGridRow",gr,{

  								reloadAfterSubmit:true			
  			});
  			}
 		else{
 			alert("Please Select Row to delete!");
  			}
	});

}
//本地缓存保存、获取
function localStorageSave(name,json){
    localStorage.setItem(name,JSON.stringify(json));
}
function localStorageGet(name){
    return JSON.parse(localStorage.getItem(name));
}
//本地缓存保存、获取
function sessionStorageSave(name,json){
    sessionStorage.setItem(name,JSON.stringify(json));
}
function sessionStorageGet(name){
    return JSON.parse(sessionStorage.getItem(name));
}
//form数据转json数据
function formJson(data){
	var o = {};
	$.each(data, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
}
function formUrlData(data){
    var result;
	$.each(data, function(index) {
        // console.log(this,index);
        if(!index){
            result = this.name+'='+this.value;
        }else{
            result += '&'+this.name+'='+this.value;
        }
    });
    return result;
}
//url的search读取
function urlSearch() {
    var url = location.search;
    if (url.indexOf('?') != -1) {
        var str = url.substr(1);
        strs = str.split('&');
        var result = {};
        for(var i in strs){
            var data = strs[i].split('=');
            result[data[0]] = data[1];
        }
        return result;
    }else{
        return null;
    }
 }
 //约定数据转换
function agreedDataReturn(type,data,val,text){
    val = val || 'type';
    text = text || 'name';
    var result = '';
    data.forEach(function(item){
        if(item[val] === type) {
            result = item[text];
        }
    });
    return result;
}
 //约定数据转换
function agreedStrReturn(type,data){
    var result = '';
    data.forEach(function(item){
        if(item.name === type) {
            result = item.type;
        }
    });
    return result;
}
//
const local = {
    set:localStorageSave,
    get:localStorageGet,
}
//
const session = {
    set:sessionStorageSave,
    get:sessionStorageGet,
}
//表单处理
const form = {
    json:formJson,//表单数据转成json
    urlData:formUrlData,//表单数据转成?xxx=aaa
}
// 约定数据处理
const agreed = {
    data:agreedDataReturn,//返回value
    str:agreedStrReturn,//返回string
}
export {
    local,
    session,
    form,
    urlSearch,
    agreed,
}
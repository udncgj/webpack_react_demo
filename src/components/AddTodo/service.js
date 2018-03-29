export function dataValidation(text){
    if( !text.name || text.name.length <= 1 ){
        alert('请输入2位以上姓名');
        return false;
    }else if( text.age < 1 ){
        alert('请输入正确年龄');
        return false;
    }else if( text.headPortrait === '' ){
        alert('请选择头像');
        return false;
    }else{
        return true;
    }
}
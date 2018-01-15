function _ajax(url,data,cb) {
    $.ajax({
        type:"post",
        url:url,
        //url:"core/registerSql.php",//mysql
        async:true,
        data:data,
        success:cb
    });
}
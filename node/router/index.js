var express = require('express');
var router = express.Router();



//获取post请求参数 使用body-parser中间件
router.post("/login", function (req, res) {
    console.log(req.body);
    const { name, pwd } = req.body;
    if (name == "18726841741" && pwd == "123456") {
        // req.session.user = req.body;
        res.send("登录成功")
    }
    else {
        res.send("登录失败")
    }
})
router.post("/register", function (req, res) {
    console.log(req.body);
    console.log(req.body. name, "ccc")
        var id = req.body. id;
        var neme = req.body. neme;
        var pwd = req.body. pwd ;
        let sql = `INSERT INTO useql ( id , neme , pwd ) VALUES ('s(id} ','s(neme} ', 's(pwd} ')`
        req.db.driver.execQuery(sql, (err,datas) =>{
            res.end(JSON.stringify(datas))
        })
        

})

router.get("/layout", function (req, res) {
    req.session.user = null;
    res.json("退出登录成功")
})

//操作数据库
router.get("/login", function (req, res) {
    let sql = "SELECT * FROM useql;"
    req.db.driver.execQuery(sql, (err, datas) => {
        console.log(datas,"xxxxxxzzzz")
        res.json(datas)
    })
})

module.exports = router;
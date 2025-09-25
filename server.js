const http = require('http');
const fs = require('fs');

const routes = {
  '/': '.index.html',
  'index.html': './index.html',
  'about.html': './about.html',
  //新しいページを追加する時は、ここに追加するでok!
  // '/contact.html': './contact.html',
};

const server = http.createServer((req,res) =>{
  if(req.url==='/'|| req.url==='/index.html'){
    fs.readFile('./index.html',(err,data)=>{
      if(err){

        fs.readFile('./500.html',(err500,data500)=>{
          if(err500){

            res.writeHead(500,{'Comtemt-Type':'text/plain;charset=utf-8'});
            res.end('サーバーエラー');
          }else{
            res.writeHead(500,{'Content-Type':'text/html;charset=utf-8'});
            res.end(data500);
          }
        });
      }else{
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end(data);
      }
    });
  }else if(req.url==='/about.html'){
    fs.readFile('.about.html',(err,data)=>{
      if(err){

        fs.readFile('./500.html',(err500,data500)=>{
          if(err500){
            res.writeHead(500,{'Content-Type':'text/html;charset=utf-8'});
            res.end('サーバーエラー');
          }else{
            res.writeHead(500,{'Content-Type':'text/html;charset=utf-8'});
            res.end(data500);
          }
        });
      }else{
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end(data);
      }
    });
  }else if(req.url==='/form.html'){
    fs.readFile('./form.html',(err,data)=>{
      if(err){

        fs.readFile('./500.html',(err500,data500)=>{
          if(err500){
            res.writeHead(500,{'Content-Type':'text/html;charset=utf-8'});
            res.end('サーバーエラー');
          }else{
            res.writeHead(500,{'Content-Type':'text/html;charset=utf-8'});
            res.end(data500);
          }
        });
      }else{
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end(data);
      }
    });
  }else if(req.url.startsWith('/hello?')) {
  const url = new URL(req.url, 'http://localhost:3000');
  const name = url.searchParams.get('username');

  fs.readFile('./hello.html', 'utf-8',(err,data) =>{
    if (err) {
        res.writeHead(500,{'Content-Type':'text/plain; charset=utf-8'});
        res.end('サーバーエラー');
      return;
    }

    const updatedHtml=data.replace('<div id="greeting-message"></div>',
      `<h1>こんにちは、${name}さん!</h1>`);  
    
      res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
      res.end(data500);
    }
);
  res.writeHead(200,{ 'Content-type': 'text/html; charset=utf-8' });
  res.end(`<h1>こんにちは、${name}さん!</h1>`);
  }else{
    fs.readFile('./404.html',(err404,data404)=>{
      if(err404){

        res.writeHead(404,{'Content-Type':'text/html;charset=utf-8'});
        res.end('ページが見つかりません');
      }else{
        res.writeHead(404,{'Content-Type':'text/html;charset=utf-8'});
        res.end(data404);
      }
    });
  }
}
)


server.listen(3000,()=>{
  console.log('http://localhost:3000 にアクセスしてみよう');
});
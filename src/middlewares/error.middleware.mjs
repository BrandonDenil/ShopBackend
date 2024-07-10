export class ErrorMiddleware{

    static register(err,req,res,next){
        const statusCode = err.status || 500;
  
        res.status(statusCode).json({
          status: 'error',
          message: err.message,
        });
      
        if (app.get('env') === 'development') {
          console.error(err.stack);
        }
    }
    
}
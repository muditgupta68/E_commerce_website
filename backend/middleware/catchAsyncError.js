const catchAsyncError = theRouteFunc =>(req,res,next)=>{
    Promise.resolve(theRouteFunc(req,res,next)).catch(next);
}

module.exports = {catchAsyncError}
/**
 *
 */
module.exports = formatter;

function formatter({filter} = {}){
     return async function formatterAPI(ctx,next){
        await next();
        console.log(filter);
        console.log(ctx.body)
        console.log(2);
    }
}
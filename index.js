function receivesAFunction(spy)
{
    return spy ()
}

returnsANamedFunction();
function returnsANamedFunction()
{
    return function Moi(){}
}
function returnsAnAnonymousFunction()
{
    return()=>
    {}
}
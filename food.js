class Food
{
constructor(foodStock,lastFed)
{
    this.foodStock = foodStock;
    
   this.image = loadImage("images/milk.png")
}




display()
{
    var  x= 80,y= 100; 
    imageMode(CENTER);
    image(this.image,720,220,70,70);


    if( foodStock != 0)
    {
        console.log(this.foodStock)

        for(var i = 0;i<this.foodStock;i++ )
        {
         
            if(i%10==0)
            {
                x= 80;
                y=y+50;

                
            }
            image(this.image,x,y,50,50) ;
            x= x+30;
           
        }
    }
}


updateFoodStock(foodStock)
{
    this.foodStock = foodStock
}
}


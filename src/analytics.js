import * as $ from 'jquery'
function createAnalytics(){
   let counter =2
   let isDestroyed = false
   const listener =()=> counter ++
   $(document).on('click',listener )

   return {
       destroy(){
 $(document).off('click',listener)
       },
       getClicks(){
           if (isDestroyed){
               return 'Analytics is destroyed'
           }
           return counter 
       }
   }
}

window.analytics = createAnalytics()
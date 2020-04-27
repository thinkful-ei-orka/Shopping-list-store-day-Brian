//take the item from addItem and add it when the form is submited
$(function() {
    
    $('#js-shopping-list-form').submit( event => {
     
      event.preventDefault();
        
        const AddItem =  $(event.currentTarget).find(
            'input[name="shopping-list-entry"]').val();
        console.log (AddItem);
        $(event.currentTarget).find(
        'input[name="shopping-list-entry"]').val("");
        
        let appendThis = `<li><span class="shopping-item">${AddItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`
        $('.shopping-list').append(appendThis);    
}
    )
//check on click draw a line though it
$('.shopping-item-toggle').on('click', event => {
        
    let shoppingSpan = $(event.currentTarget).parent().parent().find('span').first();
    shoppingSpan.toggleClass('shopping-item__checked')

  })
//delete on click delete it
  $('.shopping-item-delete').on('click', event => {
   //event.prevenDefault();
    console.log('Deleted')
    $(event.currentTarget).parent().parent().remove();
  })

})




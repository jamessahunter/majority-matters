var el = document.getElementById('items');
var sortable = Sortable.create(el);


const answerHandler= async()=>{
    const sortableList = document.getElementById('items');
    const listItems = sortableList.getElementsByTagName('li')
    const arr=[];
    for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];
        const answerId = listItem.getAttribute('data-id');
        arr.push(parseInt(answerId));
    }    
    // console.log(typeof arr[0]);
    const h2Element = document.querySelector('h2');
    const id = h2Element.getAttribute('data-qID');
    console.log(id);
    const createResponse = await fetch(`/api/users/answer/${id}`,{
        method: 'POST',
        body: JSON.stringify({arr, id}),
        headers: { 'Content-Type': 'application/json' },
    });
    if(createResponse.ok){
        console.log('Added');
    }else{
        alert('Failed to add user answers');
    }

    
    const getResponse = await fetch(`/api/answer/${id}`,{
        method: 'GET',
    })
    const data = await getResponse.json();

    arr.forEach((num, index) => {
        const foundIndex = data.findIndex(item => item.id === num);
        if (foundIndex !== -1) {
          data[foundIndex].total += ((10 - index) * 2);
        }
    });
    

    const updateResponse = await fetch(`/api/answer/${id}`,{
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
    // console.log(updateResponse);
    if (updateResponse.ok) {
        document.location.replace(`/scores/${id}`)
      } else {
        alert('Failed to Update.');
      }

}


document
.querySelector('.btn')
.addEventListener('click', answerHandler);
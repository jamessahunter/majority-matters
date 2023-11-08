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
    console.log('user answers')
    console.log(arr);
    // console.log(typeof arr[0]);
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length-1
      ];
    const getResponse=await fetch(`/api/answer/${id}`,{
        method: 'GET',
    })
    const data = await getResponse.json();
    const passArr=[];
    console.log( 'data before');
    console.log(data);
    arr.forEach((num, index) => {
        const foundIndex = data.findIndex(item => item.id === num);
        if (foundIndex !== -1) {
          data[foundIndex].total += (10 - index * 2);
        }
    });
    console.log('data after');
    console.log(data);
    
    for(let i=0; i<arr.length;i++){
        const obj={total:`${data[i].total}`}
        passArr[i]=obj;
    }
    console.log('totals')
    console.log(passArr);
    const updateResponse = await fetch(`/api/answer/${id}`,{
        method: 'PUT',
        body: JSON.stringify({passArr}),
        headers: { 'Content-Type': 'application/json' },
    })
    // console.log(updateResponse);
    if (updateResponse.ok) {
        // document.location.replace('/dashboard');
      } else {
        alert('Failed to Update.');
      }

}


document
.querySelector('.btn')
.addEventListener('click', answerHandler);
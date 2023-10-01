const endPoint=5;
var imgElement = document.querySelector('#prog');
const qna= document.querySelector("#qna");
const result= document.querySelector("#result");
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function calResult(){
  console.log(select);
  var result = select.indexOf(Math.max(...select));
  return result;
}


  function setResult(){
    let point = calResult();
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML=infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-' + point + '.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);


  }



  function goResult(){
    qna.style.display = "none";
    result.style.display = "block";
    setResult();
  
  }

  
  
  
  



  function addAnswer(answerText, idx){
    var a= document.querySelector('.answerBox');
    var answer= document.createElement('Button');
    answer.classList.add('answerList');
    answer.classList.add('my-3')
    answer.classList.add('py-3')
  
    a.appendChild(answer);
    answer.innerHTML= answerText;
  
    answer.addEventListener("click", function(){
      var children = document.querySelectorAll('.answerList');
      for(let i=0; i<children.length; i++){
      
        children[i].disabled=true;
        children[i].style.display='none';

      }
      var target = qnaList[qIdx].a[idx].type;
      for(let i = 0; i < target.length; i++){
        select[target[i]] += 1;
      }

      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
      
    }, false);

}

function goNext(){
  document.getElementById("prog").src= `./prog${qIdx+1}.png`;
  if(qIdx+1===endPoint){
    goResult();
    return;
  }
  var q= document.querySelector('.qBox');
  q.innerHTML=qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, i);
  }
  var status= document.querySelector('statusBar');
}


let qIdx=0;
goNext(qIdx);

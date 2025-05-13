function showcandidates(){

  let CandidateTable=document.getElementById('candidatetable');
  let TableBody=document.getElementById('tablebody');

  let arraylist=[
      {image:"D:\.Net-Core-Bootcamp-Batch-23\Web\Javascript\chapter 2\SANA\exercise2-table\images",name:"Alen",qualification:"MCA",experience:"3 year",location:"Banglore"},
      {name:"Sarah",qualification:"MSC",experience:"5 year",location:"Chennai"},
      {name:"Vivek",qualification:"Btech",experience:"5 year",location:"Thiruvanathapuram"},
      {name:"Deepak Roy",qualification:"Btech",experience:"2 year",location:"Calicut"}
  ]

  let i=0;
  while(i<arraylist.length){
      const row=document.createElement('tr');

      //First candidate
      const td1=document.createElement("td");
      td1.innerHTML=`<strong>${arraylist[i].name}</strong><br>
      Qualification:${arraylist[i].qualification}<br>
      Experience:${arraylist[i].experience}<br>
      Location:${arraylist[i].location}`;
      row.appendChild(td1);


      //second candidates if only exisits
      const td2=document.createElement("td");
      if(i + 1 <arraylist.length){
        td2.innerHTML=`<strong>${arraylist[i + 1].name}</strong><br>
        Qualification:${arraylist[i + 1].qualification}<br>
        Experience:${arraylist[i + 1].experience}<br>
        Location:${arraylist[i + 1].location}`;
        }
        else{
            td2.innerHTML="";
        }
        row.appendChild(td2);
        TableBody.appendChild(row);
        i+=2;//move to the next pair

    }    
}
showcandidates();

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-a',
  templateUrl: './table-a.component.html',
  styleUrls: ['./table-a.component.css']
})
export class TableAComponent implements OnInit {

  result_1: any;
  result_2: any;
  result_3: any;
  result_4: any;
  result_5: any;
  result_6: any;
  result_7: any;
  result_8: any;
  prime: any;
  isShow_1 = false;


  constructor() { }

  ngOnInit(): void {
  }

  leapyear(event: any)
  {
    const year = event.target.value;
      if (+year % 400 == 0  || +year %400 != 0 && +year % 100 != 0 && +year % 4 == 0)
      {

          this.result_1 = year + " -> true";
      }
      else
      {

          this.result_1 = year + " -> false" ;
      }
  }

  getAnsNo2(event: any)
  {
    this.result_2 = '';
    const number_range = event.target.value;
    for (let n=1; n<=number_range; n++ )
    {
      if(n % 3 == 0 && n % 5 == 0)
          {
              //("FizzBuz"+ " ")
              this.result_2 += "FizzBuz" + " ";
          }
      else if (n % 5 == 0)
          {
              // ("Buzz"+ " ");
              this.result_2 += "Buzz" + " ";
          }
      else if (n % 3 == 0)
          {
              // ("Fizz"+ " ");
              this.result_2 += "Fizz" + " " ;
          }
      else
          //(n +" ")
          this.result_2 += n + " " + '';
    }

  }

//*
//***
//*****
// x = [''] //!!!testarray
//3.1
  pyramid1(event: any){
  this.result_3 = [] ;
  this.isShow_1 = false;
  let n = event.target.value;
  {
    for (let i = 1; i <= n; i++)
     {
        let txt = ""
        for (let j = 1; j <= i; j++)
        {
        // this.result_3 += ('*');
          txt += '*'
        }
        ("<br/>")
        this.result_3.push(txt)
     }
     this.isShow_1 = true;

  }

}
//3.2
    pyramid2(event: any)
 {
    this.result_4 = ""
    const n = event.target.value;
    for (let i = 1; i <= n; i++)
     {

         for (let j = n-1; j>=i; j--)
         {
             this.result_4 += "&nbsp;"
         }

      {
          for(let k =1 ; k <=i; k++)
          {
              this.result_4 += "*"
          }
      }

         this.result_4 += "<br/>"
    }

}
//3.3

    pyramid3(event: any)
    {
      this.result_5 = "";
      const n = event.target.value;
      for(let i=1; i<=n; i++)
    {
        for(let j=i; j<=n; j++)
        {
            this.result_5 += "&nbsp;"
        }
        {
            for(let k=1; k<=2*i-1; k++)
            {
                if(k==1 || k==2*i-1)
                {
                    this.result_5 += "*";
                }
                else
                {
                    this.result_5 += "&nbsp;"
                }
            }
            this.result_5 += '<br>';
        }
    }
    }
    //3.4
    pyramid4(event: any)
    {
      this.result_6 = "";
      const n = event.target.value;

      for(let i=1; i<= +n; i++)
    {
        for(let j=1; j<= +n; j++)
        {
            if( i == j || i+j==+n+1)
            {
              this.result_6 += '*'
            }
            else
            {
              this.result_6 += '&nbsp'
            }
        }
        this.result_6 += '<br>'
    }

  }
  //3.5
  pyramid5(event: any)
  {
    this.result_7 = "";
    const rows = event.target.value;

    for(let i = 1; i <= rows; i++){
      for(let k = 1; k <= (rows - i); k++){
        this.result_7 += '&nbsp';
      }

      for(let j = 0; j != (2 * i - 1); j++){
        this.result_7 += '*'

      }

      for(let k =  i + 1; k <= rows; k++){
        this.result_7 += '&nbsp';
      }

       this.result_7 += '<br>'

    }
    //upside
    for(let i = +rows - 1; i >= 1; i--){

      for(let k = 1; k <= (rows - i); k++){
        this.result_7 += ' '
      }

      for(let j = 0; j != (2 * i - 1); j++){

        this.result_7 += '*'

      }

      for(let k =  i + 1; k <= rows; k++){
        this.result_7 += ''
      }
       this.result_7 += '</br>'

    }

  }
//3.6
  letters(event: any)
  {
    this.result_8 = "";
    const rows = event.target.value;


    let k = 1;
    for(let i = 1; i <= rows; i++){


      for(let k = 1; k <= (rows - i); k++){
        this.result_8 += 'A';
      }

      for(let j = 1; j <= (2 * i - 1); j++)
      {
        if( k != j && j != i*2 -1 )
        {
          this.result_8 += 'E'
        }
        else
        {
          this.result_8 += '+'
        }

      }
      for(let k =  i + 1; k <= rows; k++){
        this.result_8 += 'B';
      }

       this.result_8 += '<br>'
    }
    //upside
    for(let i = +rows - 1; i >= 1; i--){

      for(let k = 1; k <= (rows - i); k++){
        this.result_8 += 'C'
      }

      for(let j = 1; j <= (2 * i - 1); j++)
      {

        if( j != k && j!=i*2-1 )
        {
          this.result_8 += 'E'
        }
        else
        {
          this.result_8 += '+'
        }

      }
      for(let k =  i + 1; k <= rows; k++)
      {
        this.result_8 += 'D'
      }
       this.result_8 += '</br>'

    }

  }


  primenumber(event : any)
  {
    const np = event.target.value;
    this.prime = ""
    nextP:
    for (let i = 2; i <= np; i++)
     {

    for (let j = 2; j < i; j++)
      {
        if (i % j == 0) continue nextP;
      }

  this.prime += i + " ";
     }
  }
}


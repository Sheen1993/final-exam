import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  mainTitle: string ='サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト';
  mainParagraph: string ='サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト…';
  mainDate: string='2016.01.01';
  
  constructor() { }

  ngOnInit() {

  }
  myContents: myData[] =[  
      {Title:this.mainTitle, Paragraph:this.mainParagraph,Date:this.mainDate},
      {Title:this.mainTitle, Paragraph:this.mainParagraph,Date:this.mainDate}, 
      {Title:this.mainTitle, Paragraph:this.mainParagraph,Date:this.mainDate}, 
      {Title:this.mainTitle, Paragraph:this.mainParagraph,Date:this.mainDate}, 
      {Title:this.mainTitle, Paragraph:this.mainParagraph,Date:this.mainDate}, 
      {Title:this.mainTitle, Paragraph:this.mainParagraph,Date:this.mainDate}, 
      {Title:this.mainTitle, Paragraph:this.mainParagraph,Date:this.mainDate}, 
      {Title:this.mainTitle, Paragraph:this.mainParagraph,Date:this.mainDate}, 
      {Title:this.mainTitle, Paragraph:this.mainParagraph,Date:this.mainDate}, 
      {Title:this.mainTitle, Paragraph:this.mainParagraph,Date:this.mainDate}    
  ]  
  myContents2: myData[] =[  
    {Title:this.mainTitle, Paragraph:this.mainParagraph,Date:this.mainDate},
    {Title:this.mainTitle, Paragraph:this.mainParagraph,Date:this.mainDate}, 
    {Title:this.mainTitle, Paragraph:this.mainParagraph,Date:this.mainDate} 
]  

}
class myData {  
  Title : string;  
  Paragraph : string;  
  Date : string;  
}  

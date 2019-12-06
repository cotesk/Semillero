
import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'filtro'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg == '') return value;
  const filterPost = [];
  for(const post of value ){
    if(post.nombre.toLowerCase().indexOf(arg.toLowerCase() ) > -1){
      filterPost.push(post);
    }else if(post.programa.toLowerCase().indexOf(arg.toLowerCase() ) > -1){
      filterPost.push(post);
    }else if(post.semestre.toLowerCase().indexOf(arg.toLowerCase() ) > -1){
      filterPost.push(post);
    }else if(post.ingreso.toLowerCase().indexOf(arg.toLowerCase() ) > -1){
      filterPost.push(post);
    }
  }
  return filterPost;
  }

}

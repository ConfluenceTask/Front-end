import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements AfterViewInit {
  @ViewChild('editorContent') editorContent!: ElementRef;
  
  ngAfterViewInit() {
    if (this.content) {
      this.editorContent.nativeElement.innerHTML = this.content;
    }
  }

  private content: string = '';

  getContent(): string {
    return this.editorContent?.nativeElement.innerHTML || '';
  }

  setContent(value: string) {
    if (this.editorContent) {
      this.editorContent.nativeElement.innerHTML = value;
    }
  }

  applyStyle(style: string) {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;
    
    const range = selection.getRangeAt(0);
    
    // Для выравнивания текста
    if (style === 'left' || style === 'center' || style === 'right') {
      let container: Node | null = range.commonAncestorContainer;
      let element: HTMLElement | null = null;
      
      // Находим ближайший блочный элемент
      while (container) {
        if (container.nodeType === Node.ELEMENT_NODE) {
          const el = container as HTMLElement;
          if (['DIV', 'P'].includes(el.tagName)) {
            element = el;
            break;
          }
        }
        container = container.parentNode;
      }
      
      // Если блочный элемент не найден, создаем новый
      if (!element) {
        const p = document.createElement('p');
        range.surroundContents(p);
        element = p;
      }
      
      element.style.textAlign = style;
      return;
    }
    
    // Для других стилей (жирный, курсив)
    const span = document.createElement('span');
    switch(style) {
      case 'bold':
        span.style.fontWeight = 'bold';
        break;
      case 'italic':
        span.style.fontStyle = 'italic';
        break;
    }
    
    range.surroundContents(span);
  }

  toggleList(type: 'ordered' | 'unordered') {
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;
    
    const range = selection.getRangeAt(0);
    const list = document.createElement(type === 'ordered' ? 'ol' : 'ul');
    const li = document.createElement('li');
    
    li.textContent = range.toString();
    list.appendChild(li);
    range.deleteContents();
    range.insertNode(list);
  }
}

import { Injectable} from '@angular/core';

@Injectable()
export class WidgetService {
  constructor() { }
  widgets = [
      { _id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO'},
      { _id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum'},
      { _id: '345', widgetType: 'IMAGE', pageId: '321', width: '100%' , url : 'http://lorempixel.com/400/200/'},
      { _id: '456', widgetType: 'HTML', pageId: '321', text: 'Lorem ipsum'},
      { _id: '567', widgetType: 'HEADING', pageId: '321', size: '4', text: 'Lorem ipsum'},
      { _id: '678', widgetType: 'YOUTUBE', pageId: '321', width: '100%', url : 'https://www.youtube.com/embed/JQbjS0_ZfJ0' },
      { _id: '789', widgetType: 'HTML', pageId: '321', text: 'Lorem ipsum'}

  ];
  /*
  Implement the following API in the WidgetService service
  1. createWidget(pageId,widget)-adds the widget parameter instance to the local widgets array.
  The new widget's pageId is set to the pageId parameter.
  2. findWidgetsByPageId(pageId) - retrieves the widgets in local widgets array whose pageId matches the parameter pageId.
  3. findWidgetById(widgetId)-retrieves the widget in local widgets array whose _id matches the widgetId parameter.
  4. updateWidget(widgetId, widget) - updates the widget in local widgets array whose _id matches the widgetId parameter.
  5. deleteWidget(widgetId)-removes the widget from local widgets array whose _id matches the widgetId parameter.
  */
  api = {
    'createWidget' : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'findWidgetById': this.findWidgetById,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget
  };
  createWidget(pageId, widget) {
    // adds the widget parameter instance to the local widgets array.
    // The new widget's pageId is set to the pageId parameter.
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;
  }

  findWidgetsByPageId(pageId) {
    //  retrieves the widgets in local widgets array whose pageId matches the parameter pageId.
    const widgets_pageId = [];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        widgets_pageId.push(this.widgets[x]);
      }
    }
    return widgets_pageId;
  }

  findWidgetById(widgetId) {
    // retrieves the widget in local widgets array whose _id matches the widgetId parameter.
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
      return this.widgets[x];
      }
    }
  }


  updateWidget(widgetId, widget) {
    // updates the widget in local widgets array whose _id matches the widgetId parameter.
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets[x] = widget;

      }
    }
  }

  deleteWidget(widgetId) {
    // removes the widget from local widgets array whose _id matches the widgetId parameter.
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        delete this.widgets[x];
      }
    }

  }
}

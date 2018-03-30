var express = require('express');
var router = express.Router();
    widgets = [
         { _id: "123", widgetType: "Header", pageId: "321", size: 2, text: "GIZMODO"},
         { _id: "234", widgetType: "Header", pageId: "321", size: 4, text: "Lorem ipsum"},
         { _id: "345", widgetType: "Image", pageId: "321", width: "100%",
         url: "http://lorempixel.com/400/200/"},
         { _id: "456", widgetType: "Html", pageId: "321", text: "<p>Lorem ipsum!!!!!</p>"},
         { _id: "567", widgetType: "Header", pageId: "321", size: 4, text: "Lorem ipsum"},
         { _id: "678", widgetType: "Youtube", pageId: "321", width: "100%",
         url: "https://www.youtube.com/embed/JQbjS0_ZfJ0" },
         { _id: "789", widgetType: "Html", pageId: "321", text: "<p>Lorem ipsum!!!!</p>"}
    ];
wgs = [];
router.post('/api/page/:pageId/widget', function(req, res, next){
    var widget = req.body;
    widget._id = 'id' + (new Date()).getTime()//generate unique id here
    widget.pageId = req.params.pageId;
    this.widgets.push(widget);
    res.json({});
});
router.get('/api/page/:pageId/widget', function(req, res, next){
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId == req.params.pageId) {
                this.wgs.push(this.widgets[x]);
            }
        }
        res.json(this.wgs);
});
router.get('/api/widget/:widgetId', function(req, res, next){
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id == req.params.widgetId) {
                res.json(this.widgets[x]); 
            }
        }
});
router.put('/api/widget/:widgetId', function(req, res, next){
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id == req.params.widgetId) {
                this.widgets[x] = req.body;
                res.json({});
            }
        }
});
router.delete('/api/widget/:widgetId', function(req, res, next){
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id == req.params.widgetId) {
                this.widgets.splice(x, 1);
                res.json({});
            }
        }
});

module.exports = router;

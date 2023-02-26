gdjs.room_323_32learningsCode = {};
gdjs.room_323_32learningsCode.GDtextBackObjects1= [];
gdjs.room_323_32learningsCode.GDtextBackObjects2= [];
gdjs.room_323_32learningsCode.GDtextBoxObjects1= [];
gdjs.room_323_32learningsCode.GDtextBoxObjects2= [];
gdjs.room_323_32learningsCode.GDclickableObjects1= [];
gdjs.room_323_32learningsCode.GDclickableObjects2= [];
gdjs.room_323_32learningsCode.GDitemObjects1= [];
gdjs.room_323_32learningsCode.GDitemObjects2= [];
gdjs.room_323_32learningsCode.GDRightObjects1= [];
gdjs.room_323_32learningsCode.GDRightObjects2= [];
gdjs.room_323_32learningsCode.GDLeftObjects1= [];
gdjs.room_323_32learningsCode.GDLeftObjects2= [];
gdjs.room_323_32learningsCode.GDlearningsObjects1= [];
gdjs.room_323_32learningsCode.GDlearningsObjects2= [];
gdjs.room_323_32learningsCode.GDExitTextObjects1= [];
gdjs.room_323_32learningsCode.GDExitTextObjects2= [];

gdjs.room_323_32learningsCode.conditionTrue_0 = {val:false};
gdjs.room_323_32learningsCode.condition0IsTrue_0 = {val:false};
gdjs.room_323_32learningsCode.condition1IsTrue_0 = {val:false};
gdjs.room_323_32learningsCode.condition2IsTrue_0 = {val:false};


gdjs.room_323_32learningsCode.mapOfGDgdjs_46room_95323_9532learningsCode_46GDExitTextObjects1Objects = Hashtable.newFrom({"ExitText": gdjs.room_323_32learningsCode.GDExitTextObjects1});
gdjs.room_323_32learningsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ExitText"), gdjs.room_323_32learningsCode.GDExitTextObjects1);

gdjs.room_323_32learningsCode.condition0IsTrue_0.val = false;
gdjs.room_323_32learningsCode.condition1IsTrue_0.val = false;
{
gdjs.room_323_32learningsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.room_323_32learningsCode.mapOfGDgdjs_46room_95323_9532learningsCode_46GDExitTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.room_323_32learningsCode.condition0IsTrue_0.val ) {
{
gdjs.room_323_32learningsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.room_323_32learningsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Thank You", false);
}}

}


};

gdjs.room_323_32learningsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.room_323_32learningsCode.GDtextBackObjects1.length = 0;
gdjs.room_323_32learningsCode.GDtextBackObjects2.length = 0;
gdjs.room_323_32learningsCode.GDtextBoxObjects1.length = 0;
gdjs.room_323_32learningsCode.GDtextBoxObjects2.length = 0;
gdjs.room_323_32learningsCode.GDclickableObjects1.length = 0;
gdjs.room_323_32learningsCode.GDclickableObjects2.length = 0;
gdjs.room_323_32learningsCode.GDitemObjects1.length = 0;
gdjs.room_323_32learningsCode.GDitemObjects2.length = 0;
gdjs.room_323_32learningsCode.GDRightObjects1.length = 0;
gdjs.room_323_32learningsCode.GDRightObjects2.length = 0;
gdjs.room_323_32learningsCode.GDLeftObjects1.length = 0;
gdjs.room_323_32learningsCode.GDLeftObjects2.length = 0;
gdjs.room_323_32learningsCode.GDlearningsObjects1.length = 0;
gdjs.room_323_32learningsCode.GDlearningsObjects2.length = 0;
gdjs.room_323_32learningsCode.GDExitTextObjects1.length = 0;
gdjs.room_323_32learningsCode.GDExitTextObjects2.length = 0;

gdjs.room_323_32learningsCode.eventsList0(runtimeScene);

return;

}

gdjs['room_323_32learningsCode'] = gdjs.room_323_32learningsCode;

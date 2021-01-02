gdjs.evtsExt__CameraShaking__onScenePostEvents = {};

gdjs.evtsExt__CameraShaking__onScenePostEvents.conditionTrue_0 = {val:false};
gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShaking__onScenePostEvents.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShaking__onScenePostEvents.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShaking__onScenePostEvents.conditionTrue_1 = {val:false};
gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__CameraShaking__onScenePostEvents.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__CameraShaking__onScenePostEvents.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__CameraShaking__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_UseCameraAngle")) == 1;
}if (gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_InitialCameraRotation")), gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShaking_Layer")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Camera")));
}}

}


{


gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_UseCameraZoom")) == 1;
}if (gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_InitialCameraZoom")), gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShaking_Layer")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Camera")));
}}

}


};gdjs.evtsExt__CameraShaking__onScenePostEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShaking_Layer")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Camera"))) + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShaking_Timer")) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Duration")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_PowerX")) * gdjs.randomWithStep(-(1), 1, 2), gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShaking_Layer")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Camera")));
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShaking_Layer")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Camera"))) + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShaking_Timer")) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Duration")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_PowerY")) * gdjs.randomWithStep(-(1), 1, 2), gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShaking_Layer")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Camera")));
}}

}


};gdjs.evtsExt__CameraShaking__onScenePostEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShaking__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShaking__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_FrameCount")), 2) == 0);
}
}if (gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.camera.getCameraRotation(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShaking_Layer")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Camera"))) + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShaking_Timer")) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Duration")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_PowerX")) - gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_PowerX")), "", 0);
}}

}


{


gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShaking__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShaking__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_FrameCount")), 2) == 1);
}
}if (gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.camera.getCameraRotation(runtimeScene, gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShaking_Layer")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Camera"))) + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShaking_Timer")) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Duration")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_PowerX")) * -(1) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_PowerX")), "", 0);
}}

}


};gdjs.evtsExt__CameraShaking__onScenePostEvents.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShaking__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShaking__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_FrameCount")), 2) == 0);
}
}if (gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_InitialCameraZoom")) + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShaking_Timer")) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Duration")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_PowerX")) * (-(1) / 100), gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShaking_Layer")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Camera")));
}}

}


{


gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShaking__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0;
gdjs.evtsExt__CameraShaking__onScenePostEvents.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_FrameCount")), 2) == 1);
}
}if (gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_InitialCameraZoom")) + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Duration")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "__CameraShaking_Timer")) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Duration")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_PowerX")) * (1 / 100), gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("__CameraShaking_Layer")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Camera")));
}}

}


};gdjs.evtsExt__CameraShaking__onScenePostEvents.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_UseCameraPosition")) == 1;
}if (gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__CameraShaking__onScenePostEvents.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_UseCameraAngle")) == 1;
}if (gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__CameraShaking__onScenePostEvents.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_UseCameraZoom")) == 1;
}if (gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__CameraShaking__onScenePostEvents.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__CameraShaking__onScenePostEvents.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = false;
gdjs.evtsExt__CameraShaking__onScenePostEvents.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Duration")), "__CameraShaking_Timer");
}if ( gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__CameraShaking__onScenePostEvents.conditionTrue_1 = gdjs.evtsExt__CameraShaking__onScenePostEvents.condition1IsTrue_0;
gdjs.evtsExt__CameraShaking__onScenePostEvents.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(31450148);
}
}}
if (gdjs.evtsExt__CameraShaking__onScenePostEvents.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShaking_ShakeInProgress").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__CameraShaking__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


{
{runtimeScene.getGame().getVariables().get("__CameraShaking_FrameCount").add(1);
}}

}


{



}


{


gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_ShakeInProgress")) == 1;
}if (gdjs.evtsExt__CameraShaking__onScenePostEvents.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__CameraShaking__onScenePostEvents.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CameraShaking__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShaking__onScenePostEvents.eventsList5(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerRuntimeScenePostEventsCallback(function(runtimeScene) {
    gdjs.evtsExt__CameraShaking__onScenePostEvents.func(runtimeScene, runtimeScene);
});

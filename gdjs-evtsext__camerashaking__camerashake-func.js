gdjs.evtsExt__CameraShaking__CameraShake = {};

gdjs.evtsExt__CameraShaking__CameraShake.conditionTrue_0 = {val:false};
gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShaking__CameraShake.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShaking__CameraShake.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShaking__CameraShake.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__CameraShaking__CameraShake.conditionTrue_1 = {val:false};
gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__CameraShaking__CameraShake.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__CameraShaking__CameraShake.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__CameraShaking__CameraShake.condition3IsTrue_1 = {val:false};


gdjs.evtsExt__CameraShaking__CameraShake.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShaking__CameraShake.conditionTrue_1 = gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0;
gdjs.evtsExt__CameraShaking__CameraShake.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("UseCameraAngle")) || 0 : 0) == 1);
}
}if (gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShaking_InitialCameraRotation").setNumber(gdjs.evtTools.camera.getCameraRotation(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)));
}}

}


{



}


{


gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CameraShaking__CameraShake.conditionTrue_1 = gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0;
gdjs.evtsExt__CameraShaking__CameraShake.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("UseCameraZoom")) || 0 : 0) == 1);
}
}if (gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShaking_InitialCameraZoom").setNumber(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / gdjs.evtTools.camera.getCameraWidth(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)));
}}

}


};gdjs.evtsExt__CameraShaking__CameraShake.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__CameraShaking_Timer");
}{runtimeScene.getGame().getVariables().get("__CameraShaking_FrameCount").setNumber(0);
}}

}


{



}


{


{
{runtimeScene.getGame().getVariables().get("__CameraShaking_PowerX").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerX")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShaking_PowerY").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerY")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShaking_Layer").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{runtimeScene.getGame().getVariables().get("__CameraShaking_Camera").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShaking_Duration").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShaking_UseCameraPosition").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("UseCameraPosition")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShaking_UseCameraAngle").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("UseCameraAngle")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShaking_UseCameraZoom").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("UseCameraZoom")) || 0 : 0));
}}

}


{



}


{


gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_PowerX")) == 0;
}if (gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShaking_PowerX").setNumber(5);
}}

}


{


gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_PowerY")) == 0;
}if (gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShaking_PowerY").setNumber(5);
}}

}


{


gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_Duration")) == 0;
}if (gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShaking_Duration").setNumber(0.25);
}}

}


{


gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val = false;
gdjs.evtsExt__CameraShaking__CameraShake.condition1IsTrue_0.val = false;
gdjs.evtsExt__CameraShaking__CameraShake.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_UseCameraPosition")) == 0;
}if ( gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__CameraShaking__CameraShake.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_UseCameraAngle")) == 0;
}if ( gdjs.evtsExt__CameraShaking__CameraShake.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__CameraShaking__CameraShake.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_UseCameraZoom")) == 0;
}}
}
if (gdjs.evtsExt__CameraShaking__CameraShake.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShaking_UseCameraPosition").setNumber(1);
}}

}


{



}


{


gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShaking_ShakeInProgress")) == 0;
}if (gdjs.evtsExt__CameraShaking__CameraShake.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("__CameraShaking_FrameCount").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__CameraShaking__CameraShake.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


{
{runtimeScene.getGame().getVariables().get("__CameraShaking_ShakeInProgress").setNumber(1);
}}

}


};

gdjs.evtsExt__CameraShaking__CameraShake.func = function(runtimeScene, PowerX, PowerY, Layer, Camera, Duration, UseCameraPosition, UseCameraAngle, UseCameraZoom, parentEventsFunctionContext) {
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
if (argName === "PowerX") return PowerX;
if (argName === "PowerY") return PowerY;
if (argName === "Layer") return Layer;
if (argName === "Camera") return Camera;
if (argName === "Duration") return Duration;
if (argName === "UseCameraPosition") return UseCameraPosition;
if (argName === "UseCameraAngle") return UseCameraAngle;
if (argName === "UseCameraZoom") return UseCameraZoom;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShaking__CameraShake.eventsList1(runtimeScene, eventsFunctionContext);
return;
}


// source: communitygames.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.web.communitygames.AssetCategory', null, global);
goog.exportSymbol('proto.web.communitygames.AssetCategoryBoolean', null, global);
goog.exportSymbol('proto.web.communitygames.AssetCategoryTagBooleanOverride', null, global);
goog.exportSymbol('proto.web.communitygames.AssetCategoryTagBooleanTeamOverride', null, global);
goog.exportSymbol('proto.web.communitygames.AvailableAssetCategories', null, global);
goog.exportSymbol('proto.web.communitygames.AvailableAssetCategoryTag', null, global);
goog.exportSymbol('proto.web.communitygames.AvailableFloatValues', null, global);
goog.exportSymbol('proto.web.communitygames.AvailableGameData', null, global);
goog.exportSymbol('proto.web.communitygames.AvailableIntValue', null, global);
goog.exportSymbol('proto.web.communitygames.AvailableIntValues', null, global);
goog.exportSymbol('proto.web.communitygames.AvailableMapEntry', null, global);
goog.exportSymbol('proto.web.communitygames.AvailableMutator', null, global);
goog.exportSymbol('proto.web.communitygames.AvailableMutatorFloatValues', null, global);
goog.exportSymbol('proto.web.communitygames.AvailableMutatorIntValues', null, global);
goog.exportSymbol('proto.web.communitygames.AvailableMutatorKind', null, global);
goog.exportSymbol('proto.web.communitygames.AvailableMutatorSparseFloatValues', null, global);
goog.exportSymbol('proto.web.communitygames.AvailableMutatorSparseIntValues', null, global);
goog.exportSymbol('proto.web.communitygames.AvailableTag', null, global);
goog.exportSymbol('proto.web.communitygames.BalancingMethod', null, global);
goog.exportSymbol('proto.web.communitygames.Blueprint', null, global);
goog.exportSymbol('proto.web.communitygames.BlueprintInfo', null, global);
goog.exportSymbol('proto.web.communitygames.CapacityType', null, global);
goog.exportSymbol('proto.web.communitygames.Category', null, global);
goog.exportSymbol('proto.web.communitygames.CompatibleModRules', null, global);
goog.exportSymbol('proto.web.communitygames.CompiledRules', null, global);
goog.exportSymbol('proto.web.communitygames.Compressed', null, global);
goog.exportSymbol('proto.web.communitygames.CreatePlaygroundRequest', null, global);
goog.exportSymbol('proto.web.communitygames.CreatePlaygroundResponse', null, global);
goog.exportSymbol('proto.web.communitygames.DeletePlaygroundRequest', null, global);
goog.exportSymbol('proto.web.communitygames.DeletePlaygroundResponse', null, global);
goog.exportSymbol('proto.web.communitygames.FloatRange', null, global);
goog.exportSymbol('proto.web.communitygames.GameServerMessage', null, global);
goog.exportSymbol('proto.web.communitygames.GameServerSettings', null, global);
goog.exportSymbol('proto.web.communitygames.GetBlueprintsByIdRequest', null, global);
goog.exportSymbol('proto.web.communitygames.GetBlueprintsByIdResponse', null, global);
goog.exportSymbol('proto.web.communitygames.GetConstraintsRequest', null, global);
goog.exportSymbol('proto.web.communitygames.GetConstraintsResponse', null, global);
goog.exportSymbol('proto.web.communitygames.GetPlaygroundRequest', null, global);
goog.exportSymbol('proto.web.communitygames.GetProgressionTypesRequest', null, global);
goog.exportSymbol('proto.web.communitygames.GetProgressionTypesResponse', null, global);
goog.exportSymbol('proto.web.communitygames.GetScheduledBlueprintsRequest', null, global);
goog.exportSymbol('proto.web.communitygames.GetScheduledBlueprintsResponse', null, global);
goog.exportSymbol('proto.web.communitygames.GlobalConstraints', null, global);
goog.exportSymbol('proto.web.communitygames.InCompatibleModRules', null, global);
goog.exportSymbol('proto.web.communitygames.IncludeFields', null, global);
goog.exportSymbol('proto.web.communitygames.InputMethodResrictions', null, global);
goog.exportSymbol('proto.web.communitygames.InputMethods', null, global);
goog.exportSymbol('proto.web.communitygames.IntRange', null, global);
goog.exportSymbol('proto.web.communitygames.InternalTeamStructure', null, global);
goog.exportSymbol('proto.web.communitygames.ListPlaygroundsByOwnerRequest', null, global);
goog.exportSymbol('proto.web.communitygames.ListPlaygroundsByOwnerResponse', null, global);
goog.exportSymbol('proto.web.communitygames.MapInfo', null, global);
goog.exportSymbol('proto.web.communitygames.MapRotation', null, global);
goog.exportSymbol('proto.web.communitygames.Metadata', null, global);
goog.exportSymbol('proto.web.communitygames.ModRulesDefinition', null, global);
goog.exportSymbol('proto.web.communitygames.Mutator', null, global);
goog.exportSymbol('proto.web.communitygames.MutatorBoolean', null, global);
goog.exportSymbol('proto.web.communitygames.MutatorFloat', null, global);
goog.exportSymbol('proto.web.communitygames.MutatorInt', null, global);
goog.exportSymbol('proto.web.communitygames.MutatorKind', null, global);
goog.exportSymbol('proto.web.communitygames.MutatorSparseBoolean', null, global);
goog.exportSymbol('proto.web.communitygames.MutatorSparseBooleanEntry', null, global);
goog.exportSymbol('proto.web.communitygames.MutatorSparseFloat', null, global);
goog.exportSymbol('proto.web.communitygames.MutatorSparseFloatEntry', null, global);
goog.exportSymbol('proto.web.communitygames.MutatorSparseInt', null, global);
goog.exportSymbol('proto.web.communitygames.MutatorSparseIntEntry', null, global);
goog.exportSymbol('proto.web.communitygames.MutatorString', null, global);
goog.exportSymbol('proto.web.communitygames.OriginalModRules', null, global);
goog.exportSymbol('proto.web.communitygames.PhantomGameState', null, global);
goog.exportSymbol('proto.web.communitygames.Platform', null, global);
goog.exportSymbol('proto.web.communitygames.PlatformRestrictions', null, global);
goog.exportSymbol('proto.web.communitygames.PlayerInfo', null, global);
goog.exportSymbol('proto.web.communitygames.Playground', null, global);
goog.exportSymbol('proto.web.communitygames.PlaygroundConstraints', null, global);
goog.exportSymbol('proto.web.communitygames.PlaygroundInfoResponse', null, global);
goog.exportSymbol('proto.web.communitygames.PlaygroundResponse', null, global);
goog.exportSymbol('proto.web.communitygames.ProgressionEntry', null, global);
goog.exportSymbol('proto.web.communitygames.ProgressionMode', null, global);
goog.exportSymbol('proto.web.communitygames.Resource', null, global);
goog.exportSymbol('proto.web.communitygames.ResourceLocation', null, global);
goog.exportSymbol('proto.web.communitygames.Restrictions', null, global);
goog.exportSymbol('proto.web.communitygames.RotationBehavior', null, global);
goog.exportSymbol('proto.web.communitygames.RoundBehavior', null, global);
goog.exportSymbol('proto.web.communitygames.SharePlaygroundRequest', null, global);
goog.exportSymbol('proto.web.communitygames.SharePlaygroundResponse', null, global);
goog.exportSymbol('proto.web.communitygames.ShortCode', null, global);
goog.exportSymbol('proto.web.communitygames.SparseFloatValues', null, global);
goog.exportSymbol('proto.web.communitygames.SparseIntEntity', null, global);
goog.exportSymbol('proto.web.communitygames.State', null, global);
goog.exportSymbol('proto.web.communitygames.StringValue', null, global);
goog.exportSymbol('proto.web.communitygames.Tag', null, global);
goog.exportSymbol('proto.web.communitygames.TeamComposition', null, global);
goog.exportSymbol('proto.web.communitygames.TeamStructure', null, global);
goog.exportSymbol('proto.web.communitygames.Timestamp', null, global);
goog.exportSymbol('proto.web.communitygames.TranslationMetadata', null, global);
goog.exportSymbol('proto.web.communitygames.Uncompressed', null, global);
goog.exportSymbol('proto.web.communitygames.UpdatePlaygroundRequest', null, global);
goog.exportSymbol('proto.web.communitygames.UpdatePlaygroundResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.ProgressionEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.ProgressionEntry.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.ProgressionEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.ProgressionEntry.displayName = 'proto.web.communitygames.ProgressionEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.TranslationMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.TranslationMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.TranslationMetadata.displayName = 'proto.web.communitygames.TranslationMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.ResourceLocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.ResourceLocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.ResourceLocation.displayName = 'proto.web.communitygames.ResourceLocation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.Resource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.Resource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.Resource.displayName = 'proto.web.communitygames.Resource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.Metadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.Metadata.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.Metadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.Metadata.displayName = 'proto.web.communitygames.Metadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.Tag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.Tag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.Tag.displayName = 'proto.web.communitygames.Tag';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.ProgressionMode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.ProgressionMode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.ProgressionMode.displayName = 'proto.web.communitygames.ProgressionMode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.PlaygroundResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.PlaygroundResponse.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.PlaygroundResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.PlaygroundResponse.displayName = 'proto.web.communitygames.PlaygroundResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.MapInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.MapInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.MapInfo.displayName = 'proto.web.communitygames.MapInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.MapRotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.MapRotation.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.MapRotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.MapRotation.displayName = 'proto.web.communitygames.MapRotation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.TeamStructure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.TeamStructure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.TeamStructure.displayName = 'proto.web.communitygames.TeamStructure';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.InternalTeamStructure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.InternalTeamStructure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.InternalTeamStructure.displayName = 'proto.web.communitygames.InternalTeamStructure';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.MutatorSparseFloatEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.MutatorSparseFloatEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.MutatorSparseFloatEntry.displayName = 'proto.web.communitygames.MutatorSparseFloatEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.MutatorSparseFloat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.MutatorSparseFloat.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.MutatorSparseFloat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.MutatorSparseFloat.displayName = 'proto.web.communitygames.MutatorSparseFloat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.MutatorFloat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.MutatorFloat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.MutatorFloat.displayName = 'proto.web.communitygames.MutatorFloat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.MutatorBoolean = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.MutatorBoolean, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.MutatorBoolean.displayName = 'proto.web.communitygames.MutatorBoolean';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.MutatorString = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.MutatorString, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.MutatorString.displayName = 'proto.web.communitygames.MutatorString';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.MutatorInt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.MutatorInt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.MutatorInt.displayName = 'proto.web.communitygames.MutatorInt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.MutatorSparseBooleanEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.MutatorSparseBooleanEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.MutatorSparseBooleanEntry.displayName = 'proto.web.communitygames.MutatorSparseBooleanEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.MutatorSparseBoolean = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.MutatorSparseBoolean.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.MutatorSparseBoolean, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.MutatorSparseBoolean.displayName = 'proto.web.communitygames.MutatorSparseBoolean';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.SparseIntEntity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.SparseIntEntity.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.SparseIntEntity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.SparseIntEntity.displayName = 'proto.web.communitygames.SparseIntEntity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.MutatorSparseIntEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.MutatorSparseIntEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.MutatorSparseIntEntry.displayName = 'proto.web.communitygames.MutatorSparseIntEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.MutatorSparseInt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.MutatorSparseInt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.MutatorSparseInt.displayName = 'proto.web.communitygames.MutatorSparseInt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.MutatorKind = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.MutatorKind, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.MutatorKind.displayName = 'proto.web.communitygames.MutatorKind';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.TeamComposition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.TeamComposition.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.TeamComposition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.TeamComposition.displayName = 'proto.web.communitygames.TeamComposition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.Mutator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.Mutator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.Mutator.displayName = 'proto.web.communitygames.Mutator';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.Timestamp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.Timestamp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.Timestamp.displayName = 'proto.web.communitygames.Timestamp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.StringValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.StringValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.StringValue.displayName = 'proto.web.communitygames.StringValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.GameServerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.GameServerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.GameServerMessage.displayName = 'proto.web.communitygames.GameServerMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.GameServerSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.GameServerSettings.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.GameServerSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.GameServerSettings.displayName = 'proto.web.communitygames.GameServerSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.PlayerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.PlayerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.PlayerInfo.displayName = 'proto.web.communitygames.PlayerInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.PlatformRestrictions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.PlatformRestrictions.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.PlatformRestrictions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.PlatformRestrictions.displayName = 'proto.web.communitygames.PlatformRestrictions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.InputMethodResrictions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.InputMethodResrictions.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.InputMethodResrictions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.InputMethodResrictions.displayName = 'proto.web.communitygames.InputMethodResrictions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.Restrictions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.Restrictions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.Restrictions.displayName = 'proto.web.communitygames.Restrictions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.Compressed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.Compressed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.Compressed.displayName = 'proto.web.communitygames.Compressed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.Uncompressed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.Uncompressed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.Uncompressed.displayName = 'proto.web.communitygames.Uncompressed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.CompiledRules = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.CompiledRules, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.CompiledRules.displayName = 'proto.web.communitygames.CompiledRules';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.CompatibleModRules = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.CompatibleModRules, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.CompatibleModRules.displayName = 'proto.web.communitygames.CompatibleModRules';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.InCompatibleModRules = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.InCompatibleModRules, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.InCompatibleModRules.displayName = 'proto.web.communitygames.InCompatibleModRules';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.OriginalModRules = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.OriginalModRules, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.OriginalModRules.displayName = 'proto.web.communitygames.OriginalModRules';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AssetCategoryTagBooleanOverride = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.AssetCategoryTagBooleanOverride.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.AssetCategoryTagBooleanOverride, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AssetCategoryTagBooleanOverride.displayName = 'proto.web.communitygames.AssetCategoryTagBooleanOverride';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AssetCategoryTagBooleanTeamOverride = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.AssetCategoryTagBooleanTeamOverride, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.displayName = 'proto.web.communitygames.AssetCategoryTagBooleanTeamOverride';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AssetCategoryBoolean = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.AssetCategoryBoolean.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.AssetCategoryBoolean, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AssetCategoryBoolean.displayName = 'proto.web.communitygames.AssetCategoryBoolean';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AssetCategory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.AssetCategory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AssetCategory.displayName = 'proto.web.communitygames.AssetCategory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.Playground = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.Playground.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.Playground, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.Playground.displayName = 'proto.web.communitygames.Playground';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.ListPlaygroundsByOwnerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.ListPlaygroundsByOwnerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.ListPlaygroundsByOwnerRequest.displayName = 'proto.web.communitygames.ListPlaygroundsByOwnerRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.GetConstraintsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.GetConstraintsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.GetConstraintsRequest.displayName = 'proto.web.communitygames.GetConstraintsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.GetBlueprintsByIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.GetBlueprintsByIdRequest.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.GetBlueprintsByIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.GetBlueprintsByIdRequest.displayName = 'proto.web.communitygames.GetBlueprintsByIdRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.GlobalConstraints = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.GlobalConstraints, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.GlobalConstraints.displayName = 'proto.web.communitygames.GlobalConstraints';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.IntRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.IntRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.IntRange.displayName = 'proto.web.communitygames.IntRange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AvailableIntValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.AvailableIntValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AvailableIntValues.displayName = 'proto.web.communitygames.AvailableIntValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AvailableIntValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.AvailableIntValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AvailableIntValue.displayName = 'proto.web.communitygames.AvailableIntValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.SparseFloatValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.SparseFloatValues.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.SparseFloatValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.SparseFloatValues.displayName = 'proto.web.communitygames.SparseFloatValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.FloatRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.FloatRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.FloatRange.displayName = 'proto.web.communitygames.FloatRange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AvailableFloatValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.AvailableFloatValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AvailableFloatValues.displayName = 'proto.web.communitygames.AvailableFloatValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AvailableMutatorFloatValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.AvailableMutatorFloatValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AvailableMutatorFloatValues.displayName = 'proto.web.communitygames.AvailableMutatorFloatValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AvailableMutatorIntValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.AvailableMutatorIntValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AvailableMutatorIntValues.displayName = 'proto.web.communitygames.AvailableMutatorIntValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AvailableMutatorSparseIntValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.AvailableMutatorSparseIntValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AvailableMutatorSparseIntValues.displayName = 'proto.web.communitygames.AvailableMutatorSparseIntValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AvailableMutatorSparseFloatValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.AvailableMutatorSparseFloatValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AvailableMutatorSparseFloatValues.displayName = 'proto.web.communitygames.AvailableMutatorSparseFloatValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AvailableMutatorKind = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.AvailableMutatorKind, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AvailableMutatorKind.displayName = 'proto.web.communitygames.AvailableMutatorKind';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AvailableMutator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.AvailableMutator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AvailableMutator.displayName = 'proto.web.communitygames.AvailableMutator';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AvailableMapEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.AvailableMapEntry.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.AvailableMapEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AvailableMapEntry.displayName = 'proto.web.communitygames.AvailableMapEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AvailableTag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.AvailableTag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AvailableTag.displayName = 'proto.web.communitygames.AvailableTag';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AvailableAssetCategoryTag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.AvailableAssetCategoryTag.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.AvailableAssetCategoryTag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AvailableAssetCategoryTag.displayName = 'proto.web.communitygames.AvailableAssetCategoryTag';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AvailableAssetCategories = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.AvailableAssetCategories.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.AvailableAssetCategories, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AvailableAssetCategories.displayName = 'proto.web.communitygames.AvailableAssetCategories';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.PlaygroundConstraints = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.PlaygroundConstraints, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.PlaygroundConstraints.displayName = 'proto.web.communitygames.PlaygroundConstraints';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.ModRulesDefinition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.ModRulesDefinition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.ModRulesDefinition.displayName = 'proto.web.communitygames.ModRulesDefinition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.AvailableGameData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.AvailableGameData.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.AvailableGameData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.AvailableGameData.displayName = 'proto.web.communitygames.AvailableGameData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.Blueprint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.Blueprint.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.Blueprint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.Blueprint.displayName = 'proto.web.communitygames.Blueprint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.ShortCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.ShortCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.ShortCode.displayName = 'proto.web.communitygames.ShortCode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.GetProgressionTypesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.GetProgressionTypesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.GetProgressionTypesRequest.displayName = 'proto.web.communitygames.GetProgressionTypesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.BlueprintInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.BlueprintInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.BlueprintInfo.displayName = 'proto.web.communitygames.BlueprintInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.GetProgressionTypesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.GetProgressionTypesResponse.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.GetProgressionTypesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.GetProgressionTypesResponse.displayName = 'proto.web.communitygames.GetProgressionTypesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.GetScheduledBlueprintsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.GetScheduledBlueprintsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.GetScheduledBlueprintsRequest.displayName = 'proto.web.communitygames.GetScheduledBlueprintsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.GetScheduledBlueprintsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.GetScheduledBlueprintsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.GetScheduledBlueprintsResponse.displayName = 'proto.web.communitygames.GetScheduledBlueprintsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.GetBlueprintsByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.GetBlueprintsByIdResponse.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.GetBlueprintsByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.GetBlueprintsByIdResponse.displayName = 'proto.web.communitygames.GetBlueprintsByIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.GetConstraintsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.GetConstraintsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.GetConstraintsResponse.displayName = 'proto.web.communitygames.GetConstraintsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.ListPlaygroundsByOwnerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.ListPlaygroundsByOwnerResponse.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.ListPlaygroundsByOwnerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.ListPlaygroundsByOwnerResponse.displayName = 'proto.web.communitygames.ListPlaygroundsByOwnerResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.CreatePlaygroundRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.web.communitygames.CreatePlaygroundRequest.repeatedFields_, null);
};
goog.inherits(proto.web.communitygames.CreatePlaygroundRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.CreatePlaygroundRequest.displayName = 'proto.web.communitygames.CreatePlaygroundRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.UpdatePlaygroundRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.UpdatePlaygroundRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.UpdatePlaygroundRequest.displayName = 'proto.web.communitygames.UpdatePlaygroundRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.DeletePlaygroundRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.DeletePlaygroundRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.DeletePlaygroundRequest.displayName = 'proto.web.communitygames.DeletePlaygroundRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.GetPlaygroundRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.GetPlaygroundRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.GetPlaygroundRequest.displayName = 'proto.web.communitygames.GetPlaygroundRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.SharePlaygroundRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.SharePlaygroundRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.SharePlaygroundRequest.displayName = 'proto.web.communitygames.SharePlaygroundRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.SharePlaygroundResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.SharePlaygroundResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.SharePlaygroundResponse.displayName = 'proto.web.communitygames.SharePlaygroundResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.CreatePlaygroundResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.CreatePlaygroundResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.CreatePlaygroundResponse.displayName = 'proto.web.communitygames.CreatePlaygroundResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.UpdatePlaygroundResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.UpdatePlaygroundResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.UpdatePlaygroundResponse.displayName = 'proto.web.communitygames.UpdatePlaygroundResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.DeletePlaygroundResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.DeletePlaygroundResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.DeletePlaygroundResponse.displayName = 'proto.web.communitygames.DeletePlaygroundResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.web.communitygames.PlaygroundInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.web.communitygames.PlaygroundInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.web.communitygames.PlaygroundInfoResponse.displayName = 'proto.web.communitygames.PlaygroundInfoResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.ProgressionEntry.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.ProgressionEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.ProgressionEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.ProgressionEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.ProgressionEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    progressionmode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    progressiblesList: jspb.Message.toObjectList(msg.getProgressiblesList(),
    proto.web.communitygames.Mutator.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.ProgressionEntry}
 */
proto.web.communitygames.ProgressionEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.ProgressionEntry;
  return proto.web.communitygames.ProgressionEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.ProgressionEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.ProgressionEntry}
 */
proto.web.communitygames.ProgressionEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProgressionmode(value);
      break;
    case 2:
      var value = new proto.web.communitygames.Mutator;
      reader.readMessage(value,proto.web.communitygames.Mutator.deserializeBinaryFromReader);
      msg.addProgressibles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.ProgressionEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.ProgressionEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.ProgressionEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.ProgressionEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProgressionmode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProgressiblesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.web.communitygames.Mutator.serializeBinaryToWriter
    );
  }
};


/**
 * optional string progressionMode = 1;
 * @return {string}
 */
proto.web.communitygames.ProgressionEntry.prototype.getProgressionmode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.ProgressionEntry} returns this
 */
proto.web.communitygames.ProgressionEntry.prototype.setProgressionmode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Mutator progressibles = 2;
 * @return {!Array<!proto.web.communitygames.Mutator>}
 */
proto.web.communitygames.ProgressionEntry.prototype.getProgressiblesList = function() {
  return /** @type{!Array<!proto.web.communitygames.Mutator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.Mutator, 2));
};


/**
 * @param {!Array<!proto.web.communitygames.Mutator>} value
 * @return {!proto.web.communitygames.ProgressionEntry} returns this
*/
proto.web.communitygames.ProgressionEntry.prototype.setProgressiblesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.web.communitygames.Mutator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.Mutator}
 */
proto.web.communitygames.ProgressionEntry.prototype.addProgressibles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.web.communitygames.Mutator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.ProgressionEntry} returns this
 */
proto.web.communitygames.ProgressionEntry.prototype.clearProgressiblesList = function() {
  return this.setProgressiblesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.TranslationMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.TranslationMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.TranslationMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.TranslationMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, ""),
    translationid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.TranslationMetadata}
 */
proto.web.communitygames.TranslationMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.TranslationMetadata;
  return proto.web.communitygames.TranslationMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.TranslationMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.TranslationMetadata}
 */
proto.web.communitygames.TranslationMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTranslationid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.TranslationMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.TranslationMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.TranslationMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.TranslationMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTranslationid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string kind = 1;
 * @return {string}
 */
proto.web.communitygames.TranslationMetadata.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.TranslationMetadata} returns this
 */
proto.web.communitygames.TranslationMetadata.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string translationId = 2;
 * @return {string}
 */
proto.web.communitygames.TranslationMetadata.prototype.getTranslationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.TranslationMetadata} returns this
 */
proto.web.communitygames.TranslationMetadata.prototype.setTranslationid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.ResourceLocation.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.ResourceLocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.ResourceLocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.ResourceLocation.toObject = function(includeInstance, msg) {
  var f, obj = {
    ref: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.ResourceLocation}
 */
proto.web.communitygames.ResourceLocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.ResourceLocation;
  return proto.web.communitygames.ResourceLocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.ResourceLocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.ResourceLocation}
 */
proto.web.communitygames.ResourceLocation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRef(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.ResourceLocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.ResourceLocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.ResourceLocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.ResourceLocation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRef();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string ref = 1;
 * @return {string}
 */
proto.web.communitygames.ResourceLocation.prototype.getRef = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.ResourceLocation} returns this
 */
proto.web.communitygames.ResourceLocation.prototype.setRef = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.web.communitygames.ResourceLocation.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.ResourceLocation} returns this
 */
proto.web.communitygames.ResourceLocation.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.Resource.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.Resource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.Resource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Resource.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.web.communitygames.ResourceLocation.toObject(includeInstance, f),
    kind: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.Resource}
 */
proto.web.communitygames.Resource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.Resource;
  return proto.web.communitygames.Resource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.Resource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.Resource}
 */
proto.web.communitygames.Resource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.ResourceLocation;
      reader.readMessage(value,proto.web.communitygames.ResourceLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.Resource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.Resource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.Resource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Resource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.ResourceLocation.serializeBinaryToWriter
    );
  }
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ResourceLocation location = 1;
 * @return {?proto.web.communitygames.ResourceLocation}
 */
proto.web.communitygames.Resource.prototype.getLocation = function() {
  return /** @type{?proto.web.communitygames.ResourceLocation} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.ResourceLocation, 1));
};


/**
 * @param {?proto.web.communitygames.ResourceLocation|undefined} value
 * @return {!proto.web.communitygames.Resource} returns this
*/
proto.web.communitygames.Resource.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.Resource} returns this
 */
proto.web.communitygames.Resource.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.Resource.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string kind = 2;
 * @return {string}
 */
proto.web.communitygames.Resource.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.Resource} returns this
 */
proto.web.communitygames.Resource.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.Metadata.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.Metadata.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.Metadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.Metadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Metadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    translationsList: jspb.Message.toObjectList(msg.getTranslationsList(),
    proto.web.communitygames.TranslationMetadata.toObject, includeInstance),
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    proto.web.communitygames.Resource.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.Metadata}
 */
proto.web.communitygames.Metadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.Metadata;
  return proto.web.communitygames.Metadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.Metadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.Metadata}
 */
proto.web.communitygames.Metadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.TranslationMetadata;
      reader.readMessage(value,proto.web.communitygames.TranslationMetadata.deserializeBinaryFromReader);
      msg.addTranslations(value);
      break;
    case 2:
      var value = new proto.web.communitygames.Resource;
      reader.readMessage(value,proto.web.communitygames.Resource.deserializeBinaryFromReader);
      msg.addResources(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.Metadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.Metadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.Metadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Metadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranslationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.web.communitygames.TranslationMetadata.serializeBinaryToWriter
    );
  }
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.web.communitygames.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TranslationMetadata translations = 1;
 * @return {!Array<!proto.web.communitygames.TranslationMetadata>}
 */
proto.web.communitygames.Metadata.prototype.getTranslationsList = function() {
  return /** @type{!Array<!proto.web.communitygames.TranslationMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.TranslationMetadata, 1));
};


/**
 * @param {!Array<!proto.web.communitygames.TranslationMetadata>} value
 * @return {!proto.web.communitygames.Metadata} returns this
*/
proto.web.communitygames.Metadata.prototype.setTranslationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.web.communitygames.TranslationMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.TranslationMetadata}
 */
proto.web.communitygames.Metadata.prototype.addTranslations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.web.communitygames.TranslationMetadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.Metadata} returns this
 */
proto.web.communitygames.Metadata.prototype.clearTranslationsList = function() {
  return this.setTranslationsList([]);
};


/**
 * repeated Resource resources = 2;
 * @return {!Array<!proto.web.communitygames.Resource>}
 */
proto.web.communitygames.Metadata.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.web.communitygames.Resource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.Resource, 2));
};


/**
 * @param {!Array<!proto.web.communitygames.Resource>} value
 * @return {!proto.web.communitygames.Metadata} returns this
*/
proto.web.communitygames.Metadata.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.web.communitygames.Resource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.Resource}
 */
proto.web.communitygames.Metadata.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.web.communitygames.Resource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.Metadata} returns this
 */
proto.web.communitygames.Metadata.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.Tag.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.Tag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.Tag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Tag.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sortorder: jspb.Message.getFieldWithDefault(msg, 2, 0),
    metadata: (f = msg.getMetadata()) && proto.web.communitygames.Metadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.Tag}
 */
proto.web.communitygames.Tag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.Tag;
  return proto.web.communitygames.Tag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.Tag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.Tag}
 */
proto.web.communitygames.Tag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSortorder(value);
      break;
    case 3:
      var value = new proto.web.communitygames.Metadata;
      reader.readMessage(value,proto.web.communitygames.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.Tag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.Tag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.Tag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Tag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSortorder();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.web.communitygames.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.web.communitygames.Tag.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.Tag} returns this
 */
proto.web.communitygames.Tag.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 sortOrder = 2;
 * @return {number}
 */
proto.web.communitygames.Tag.prototype.getSortorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.Tag} returns this
 */
proto.web.communitygames.Tag.prototype.setSortorder = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Metadata metadata = 3;
 * @return {?proto.web.communitygames.Metadata}
 */
proto.web.communitygames.Tag.prototype.getMetadata = function() {
  return /** @type{?proto.web.communitygames.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.Metadata, 3));
};


/**
 * @param {?proto.web.communitygames.Metadata|undefined} value
 * @return {!proto.web.communitygames.Tag} returns this
*/
proto.web.communitygames.Tag.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.Tag} returns this
 */
proto.web.communitygames.Tag.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.Tag.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.ProgressionMode.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.ProgressionMode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.ProgressionMode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.ProgressionMode.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.ProgressionMode}
 */
proto.web.communitygames.ProgressionMode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.ProgressionMode;
  return proto.web.communitygames.ProgressionMode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.ProgressionMode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.ProgressionMode}
 */
proto.web.communitygames.ProgressionMode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.ProgressionMode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.ProgressionMode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.ProgressionMode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.ProgressionMode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.web.communitygames.ProgressionMode.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.ProgressionMode} returns this
 */
proto.web.communitygames.ProgressionMode.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.PlaygroundResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.PlaygroundResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.PlaygroundResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.PlaygroundResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.PlaygroundResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    originalplayground: (f = msg.getOriginalplayground()) && proto.web.communitygames.Playground.toObject(includeInstance, f),
    validatedplayground: (f = msg.getValidatedplayground()) && proto.web.communitygames.Playground.toObject(includeInstance, f),
    tagList: jspb.Message.toObjectList(msg.getTagList(),
    proto.web.communitygames.Tag.toObject, includeInstance),
    progressionmode: (f = msg.getProgressionmode()) && proto.web.communitygames.ProgressionMode.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.PlaygroundResponse}
 */
proto.web.communitygames.PlaygroundResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.PlaygroundResponse;
  return proto.web.communitygames.PlaygroundResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.PlaygroundResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.PlaygroundResponse}
 */
proto.web.communitygames.PlaygroundResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.Playground;
      reader.readMessage(value,proto.web.communitygames.Playground.deserializeBinaryFromReader);
      msg.setOriginalplayground(value);
      break;
    case 2:
      var value = new proto.web.communitygames.Playground;
      reader.readMessage(value,proto.web.communitygames.Playground.deserializeBinaryFromReader);
      msg.setValidatedplayground(value);
      break;
    case 3:
      var value = new proto.web.communitygames.Tag;
      reader.readMessage(value,proto.web.communitygames.Tag.deserializeBinaryFromReader);
      msg.addTag(value);
      break;
    case 4:
      var value = new proto.web.communitygames.ProgressionMode;
      reader.readMessage(value,proto.web.communitygames.ProgressionMode.deserializeBinaryFromReader);
      msg.setProgressionmode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.PlaygroundResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.PlaygroundResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.PlaygroundResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.PlaygroundResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOriginalplayground();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.Playground.serializeBinaryToWriter
    );
  }
  f = message.getValidatedplayground();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.Playground.serializeBinaryToWriter
    );
  }
  f = message.getTagList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.web.communitygames.Tag.serializeBinaryToWriter
    );
  }
  f = message.getProgressionmode();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.web.communitygames.ProgressionMode.serializeBinaryToWriter
    );
  }
};


/**
 * optional Playground originalPlayground = 1;
 * @return {?proto.web.communitygames.Playground}
 */
proto.web.communitygames.PlaygroundResponse.prototype.getOriginalplayground = function() {
  return /** @type{?proto.web.communitygames.Playground} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.Playground, 1));
};


/**
 * @param {?proto.web.communitygames.Playground|undefined} value
 * @return {!proto.web.communitygames.PlaygroundResponse} returns this
*/
proto.web.communitygames.PlaygroundResponse.prototype.setOriginalplayground = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.PlaygroundResponse} returns this
 */
proto.web.communitygames.PlaygroundResponse.prototype.clearOriginalplayground = function() {
  return this.setOriginalplayground(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.PlaygroundResponse.prototype.hasOriginalplayground = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Playground validatedPlayground = 2;
 * @return {?proto.web.communitygames.Playground}
 */
proto.web.communitygames.PlaygroundResponse.prototype.getValidatedplayground = function() {
  return /** @type{?proto.web.communitygames.Playground} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.Playground, 2));
};


/**
 * @param {?proto.web.communitygames.Playground|undefined} value
 * @return {!proto.web.communitygames.PlaygroundResponse} returns this
*/
proto.web.communitygames.PlaygroundResponse.prototype.setValidatedplayground = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.PlaygroundResponse} returns this
 */
proto.web.communitygames.PlaygroundResponse.prototype.clearValidatedplayground = function() {
  return this.setValidatedplayground(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.PlaygroundResponse.prototype.hasValidatedplayground = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Tag tag = 3;
 * @return {!Array<!proto.web.communitygames.Tag>}
 */
proto.web.communitygames.PlaygroundResponse.prototype.getTagList = function() {
  return /** @type{!Array<!proto.web.communitygames.Tag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.Tag, 3));
};


/**
 * @param {!Array<!proto.web.communitygames.Tag>} value
 * @return {!proto.web.communitygames.PlaygroundResponse} returns this
*/
proto.web.communitygames.PlaygroundResponse.prototype.setTagList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.web.communitygames.Tag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.Tag}
 */
proto.web.communitygames.PlaygroundResponse.prototype.addTag = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.web.communitygames.Tag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.PlaygroundResponse} returns this
 */
proto.web.communitygames.PlaygroundResponse.prototype.clearTagList = function() {
  return this.setTagList([]);
};


/**
 * optional ProgressionMode progressionMode = 4;
 * @return {?proto.web.communitygames.ProgressionMode}
 */
proto.web.communitygames.PlaygroundResponse.prototype.getProgressionmode = function() {
  return /** @type{?proto.web.communitygames.ProgressionMode} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.ProgressionMode, 4));
};


/**
 * @param {?proto.web.communitygames.ProgressionMode|undefined} value
 * @return {!proto.web.communitygames.PlaygroundResponse} returns this
*/
proto.web.communitygames.PlaygroundResponse.prototype.setProgressionmode = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.PlaygroundResponse} returns this
 */
proto.web.communitygames.PlaygroundResponse.prototype.clearProgressionmode = function() {
  return this.setProgressionmode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.PlaygroundResponse.prototype.hasProgressionmode = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.MapInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.MapInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.MapInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MapInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    gamesize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    rounds: jspb.Message.getFieldWithDefault(msg, 4, 0),
    mutators: (f = msg.getMutators()) && proto.web.communitygames.Mutator.toObject(includeInstance, f),
    location: jspb.Message.getFieldWithDefault(msg, 6, ""),
    preroundsize: jspb.Message.getFieldWithDefault(msg, 7, 0),
    warmupsize: jspb.Message.getFieldWithDefault(msg, 8, 0),
    allowedspectators: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.MapInfo}
 */
proto.web.communitygames.MapInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.MapInfo;
  return proto.web.communitygames.MapInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.MapInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.MapInfo}
 */
proto.web.communitygames.MapInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMapname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMode(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGamesize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRounds(value);
      break;
    case 5:
      var value = new proto.web.communitygames.Mutator;
      reader.readMessage(value,proto.web.communitygames.Mutator.deserializeBinaryFromReader);
      msg.setMutators(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPreroundsize(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWarmupsize(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAllowedspectators(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.MapInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.MapInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.MapInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MapInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGamesize();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getRounds();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getMutators();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.web.communitygames.Mutator.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPreroundsize();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getWarmupsize();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getAllowedspectators();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
};


/**
 * optional string mapname = 1;
 * @return {string}
 */
proto.web.communitygames.MapInfo.prototype.getMapname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.MapInfo} returns this
 */
proto.web.communitygames.MapInfo.prototype.setMapname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string mode = 2;
 * @return {string}
 */
proto.web.communitygames.MapInfo.prototype.getMode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.MapInfo} returns this
 */
proto.web.communitygames.MapInfo.prototype.setMode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 gameSize = 3;
 * @return {number}
 */
proto.web.communitygames.MapInfo.prototype.getGamesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.MapInfo} returns this
 */
proto.web.communitygames.MapInfo.prototype.setGamesize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 rounds = 4;
 * @return {number}
 */
proto.web.communitygames.MapInfo.prototype.getRounds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.MapInfo} returns this
 */
proto.web.communitygames.MapInfo.prototype.setRounds = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional Mutator mutators = 5;
 * @return {?proto.web.communitygames.Mutator}
 */
proto.web.communitygames.MapInfo.prototype.getMutators = function() {
  return /** @type{?proto.web.communitygames.Mutator} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.Mutator, 5));
};


/**
 * @param {?proto.web.communitygames.Mutator|undefined} value
 * @return {!proto.web.communitygames.MapInfo} returns this
*/
proto.web.communitygames.MapInfo.prototype.setMutators = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.MapInfo} returns this
 */
proto.web.communitygames.MapInfo.prototype.clearMutators = function() {
  return this.setMutators(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.MapInfo.prototype.hasMutators = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string location = 6;
 * @return {string}
 */
proto.web.communitygames.MapInfo.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.MapInfo} returns this
 */
proto.web.communitygames.MapInfo.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint32 preRoundSize = 7;
 * @return {number}
 */
proto.web.communitygames.MapInfo.prototype.getPreroundsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.MapInfo} returns this
 */
proto.web.communitygames.MapInfo.prototype.setPreroundsize = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 warmUpSize = 8;
 * @return {number}
 */
proto.web.communitygames.MapInfo.prototype.getWarmupsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.MapInfo} returns this
 */
proto.web.communitygames.MapInfo.prototype.setWarmupsize = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 allowedSpectators = 9;
 * @return {number}
 */
proto.web.communitygames.MapInfo.prototype.getAllowedspectators = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.MapInfo} returns this
 */
proto.web.communitygames.MapInfo.prototype.setAllowedspectators = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.MapRotation.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.MapRotation.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.MapRotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.MapRotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MapRotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapsList: jspb.Message.toObjectList(msg.getMapsList(),
    proto.web.communitygames.MapInfo.toObject, includeInstance),
    rotationbehavior: jspb.Message.getFieldWithDefault(msg, 2, 0),
    roundbehavior: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.MapRotation}
 */
proto.web.communitygames.MapRotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.MapRotation;
  return proto.web.communitygames.MapRotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.MapRotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.MapRotation}
 */
proto.web.communitygames.MapRotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.MapInfo;
      reader.readMessage(value,proto.web.communitygames.MapInfo.deserializeBinaryFromReader);
      msg.addMaps(value);
      break;
    case 2:
      var value = /** @type {!proto.web.communitygames.RotationBehavior} */ (reader.readEnum());
      msg.setRotationbehavior(value);
      break;
    case 3:
      var value = /** @type {!proto.web.communitygames.RoundBehavior} */ (reader.readEnum());
      msg.setRoundbehavior(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.MapRotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.MapRotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.MapRotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MapRotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.web.communitygames.MapInfo.serializeBinaryToWriter
    );
  }
  f = message.getRotationbehavior();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getRoundbehavior();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * repeated MapInfo maps = 1;
 * @return {!Array<!proto.web.communitygames.MapInfo>}
 */
proto.web.communitygames.MapRotation.prototype.getMapsList = function() {
  return /** @type{!Array<!proto.web.communitygames.MapInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.MapInfo, 1));
};


/**
 * @param {!Array<!proto.web.communitygames.MapInfo>} value
 * @return {!proto.web.communitygames.MapRotation} returns this
*/
proto.web.communitygames.MapRotation.prototype.setMapsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.web.communitygames.MapInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.MapInfo}
 */
proto.web.communitygames.MapRotation.prototype.addMaps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.web.communitygames.MapInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.MapRotation} returns this
 */
proto.web.communitygames.MapRotation.prototype.clearMapsList = function() {
  return this.setMapsList([]);
};


/**
 * optional RotationBehavior rotationBehavior = 2;
 * @return {!proto.web.communitygames.RotationBehavior}
 */
proto.web.communitygames.MapRotation.prototype.getRotationbehavior = function() {
  return /** @type {!proto.web.communitygames.RotationBehavior} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.web.communitygames.RotationBehavior} value
 * @return {!proto.web.communitygames.MapRotation} returns this
 */
proto.web.communitygames.MapRotation.prototype.setRotationbehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional RoundBehavior roundBehavior = 3;
 * @return {!proto.web.communitygames.RoundBehavior}
 */
proto.web.communitygames.MapRotation.prototype.getRoundbehavior = function() {
  return /** @type {!proto.web.communitygames.RoundBehavior} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.web.communitygames.RoundBehavior} value
 * @return {!proto.web.communitygames.MapRotation} returns this
 */
proto.web.communitygames.MapRotation.prototype.setRoundbehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.TeamStructure.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.TeamStructure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.TeamStructure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.TeamStructure.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    capacity: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.TeamStructure}
 */
proto.web.communitygames.TeamStructure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.TeamStructure;
  return proto.web.communitygames.TeamStructure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.TeamStructure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.TeamStructure}
 */
proto.web.communitygames.TeamStructure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCapacity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.TeamStructure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.TeamStructure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.TeamStructure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.TeamStructure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCapacity();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 teamId = 1;
 * @return {number}
 */
proto.web.communitygames.TeamStructure.prototype.getTeamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.TeamStructure} returns this
 */
proto.web.communitygames.TeamStructure.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 capacity = 2;
 * @return {number}
 */
proto.web.communitygames.TeamStructure.prototype.getCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.TeamStructure} returns this
 */
proto.web.communitygames.TeamStructure.prototype.setCapacity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.InternalTeamStructure.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.InternalTeamStructure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.InternalTeamStructure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.InternalTeamStructure.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    capacity: jspb.Message.getFieldWithDefault(msg, 2, 0),
    capacitytype: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.InternalTeamStructure}
 */
proto.web.communitygames.InternalTeamStructure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.InternalTeamStructure;
  return proto.web.communitygames.InternalTeamStructure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.InternalTeamStructure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.InternalTeamStructure}
 */
proto.web.communitygames.InternalTeamStructure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCapacity(value);
      break;
    case 3:
      var value = /** @type {!proto.web.communitygames.CapacityType} */ (reader.readEnum());
      msg.setCapacitytype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.InternalTeamStructure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.InternalTeamStructure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.InternalTeamStructure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.InternalTeamStructure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCapacity();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCapacitytype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional int32 teamId = 1;
 * @return {number}
 */
proto.web.communitygames.InternalTeamStructure.prototype.getTeamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.InternalTeamStructure} returns this
 */
proto.web.communitygames.InternalTeamStructure.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 capacity = 2;
 * @return {number}
 */
proto.web.communitygames.InternalTeamStructure.prototype.getCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.InternalTeamStructure} returns this
 */
proto.web.communitygames.InternalTeamStructure.prototype.setCapacity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional CapacityType capacityType = 3;
 * @return {!proto.web.communitygames.CapacityType}
 */
proto.web.communitygames.InternalTeamStructure.prototype.getCapacitytype = function() {
  return /** @type {!proto.web.communitygames.CapacityType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.web.communitygames.CapacityType} value
 * @return {!proto.web.communitygames.InternalTeamStructure} returns this
 */
proto.web.communitygames.InternalTeamStructure.prototype.setCapacitytype = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.MutatorSparseFloatEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.MutatorSparseFloatEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.MutatorSparseFloatEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorSparseFloatEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.MutatorSparseFloatEntry}
 */
proto.web.communitygames.MutatorSparseFloatEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.MutatorSparseFloatEntry;
  return proto.web.communitygames.MutatorSparseFloatEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.MutatorSparseFloatEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.MutatorSparseFloatEntry}
 */
proto.web.communitygames.MutatorSparseFloatEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.MutatorSparseFloatEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.MutatorSparseFloatEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.MutatorSparseFloatEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorSparseFloatEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.web.communitygames.MutatorSparseFloatEntry.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.MutatorSparseFloatEntry} returns this
 */
proto.web.communitygames.MutatorSparseFloatEntry.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float value = 2;
 * @return {number}
 */
proto.web.communitygames.MutatorSparseFloatEntry.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.MutatorSparseFloatEntry} returns this
 */
proto.web.communitygames.MutatorSparseFloatEntry.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.MutatorSparseFloat.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.MutatorSparseFloat.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.MutatorSparseFloat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.MutatorSparseFloat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorSparseFloat.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultvalue: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sparsevaluesList: jspb.Message.toObjectList(msg.getSparsevaluesList(),
    proto.web.communitygames.MutatorSparseFloatEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.MutatorSparseFloat}
 */
proto.web.communitygames.MutatorSparseFloat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.MutatorSparseFloat;
  return proto.web.communitygames.MutatorSparseFloat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.MutatorSparseFloat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.MutatorSparseFloat}
 */
proto.web.communitygames.MutatorSparseFloat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDefaultvalue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSize(value);
      break;
    case 3:
      var value = new proto.web.communitygames.MutatorSparseFloatEntry;
      reader.readMessage(value,proto.web.communitygames.MutatorSparseFloatEntry.deserializeBinaryFromReader);
      msg.addSparsevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.MutatorSparseFloat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.MutatorSparseFloat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.MutatorSparseFloat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorSparseFloat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultvalue();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSparsevaluesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.web.communitygames.MutatorSparseFloatEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional float defaultValue = 1;
 * @return {number}
 */
proto.web.communitygames.MutatorSparseFloat.prototype.getDefaultvalue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.MutatorSparseFloat} returns this
 */
proto.web.communitygames.MutatorSparseFloat.prototype.setDefaultvalue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional uint32 size = 2;
 * @return {number}
 */
proto.web.communitygames.MutatorSparseFloat.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.MutatorSparseFloat} returns this
 */
proto.web.communitygames.MutatorSparseFloat.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated MutatorSparseFloatEntry sparseValues = 3;
 * @return {!Array<!proto.web.communitygames.MutatorSparseFloatEntry>}
 */
proto.web.communitygames.MutatorSparseFloat.prototype.getSparsevaluesList = function() {
  return /** @type{!Array<!proto.web.communitygames.MutatorSparseFloatEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.MutatorSparseFloatEntry, 3));
};


/**
 * @param {!Array<!proto.web.communitygames.MutatorSparseFloatEntry>} value
 * @return {!proto.web.communitygames.MutatorSparseFloat} returns this
*/
proto.web.communitygames.MutatorSparseFloat.prototype.setSparsevaluesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.web.communitygames.MutatorSparseFloatEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.MutatorSparseFloatEntry}
 */
proto.web.communitygames.MutatorSparseFloat.prototype.addSparsevalues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.web.communitygames.MutatorSparseFloatEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.MutatorSparseFloat} returns this
 */
proto.web.communitygames.MutatorSparseFloat.prototype.clearSparsevaluesList = function() {
  return this.setSparsevaluesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.MutatorFloat.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.MutatorFloat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.MutatorFloat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorFloat.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.MutatorFloat}
 */
proto.web.communitygames.MutatorFloat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.MutatorFloat;
  return proto.web.communitygames.MutatorFloat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.MutatorFloat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.MutatorFloat}
 */
proto.web.communitygames.MutatorFloat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.MutatorFloat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.MutatorFloat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.MutatorFloat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorFloat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * optional float value = 1;
 * @return {number}
 */
proto.web.communitygames.MutatorFloat.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.MutatorFloat} returns this
 */
proto.web.communitygames.MutatorFloat.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.MutatorBoolean.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.MutatorBoolean.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.MutatorBoolean} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorBoolean.toObject = function(includeInstance, msg) {
  var f, obj = {
    boolvalue: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.MutatorBoolean}
 */
proto.web.communitygames.MutatorBoolean.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.MutatorBoolean;
  return proto.web.communitygames.MutatorBoolean.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.MutatorBoolean} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.MutatorBoolean}
 */
proto.web.communitygames.MutatorBoolean.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.MutatorBoolean.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.MutatorBoolean.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.MutatorBoolean} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorBoolean.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBoolvalue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool boolValue = 1;
 * @return {boolean}
 */
proto.web.communitygames.MutatorBoolean.prototype.getBoolvalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.web.communitygames.MutatorBoolean} returns this
 */
proto.web.communitygames.MutatorBoolean.prototype.setBoolvalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.MutatorString.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.MutatorString.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.MutatorString} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorString.toObject = function(includeInstance, msg) {
  var f, obj = {
    stringvalue: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.MutatorString}
 */
proto.web.communitygames.MutatorString.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.MutatorString;
  return proto.web.communitygames.MutatorString.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.MutatorString} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.MutatorString}
 */
proto.web.communitygames.MutatorString.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.MutatorString.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.MutatorString.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.MutatorString} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorString.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStringvalue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string stringValue = 1;
 * @return {string}
 */
proto.web.communitygames.MutatorString.prototype.getStringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.MutatorString} returns this
 */
proto.web.communitygames.MutatorString.prototype.setStringvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.MutatorInt.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.MutatorInt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.MutatorInt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorInt.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.MutatorInt}
 */
proto.web.communitygames.MutatorInt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.MutatorInt;
  return proto.web.communitygames.MutatorInt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.MutatorInt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.MutatorInt}
 */
proto.web.communitygames.MutatorInt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.MutatorInt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.MutatorInt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.MutatorInt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorInt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 value = 1;
 * @return {number}
 */
proto.web.communitygames.MutatorInt.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.MutatorInt} returns this
 */
proto.web.communitygames.MutatorInt.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.MutatorSparseBooleanEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.MutatorSparseBooleanEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.MutatorSparseBooleanEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorSparseBooleanEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    value: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.MutatorSparseBooleanEntry}
 */
proto.web.communitygames.MutatorSparseBooleanEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.MutatorSparseBooleanEntry;
  return proto.web.communitygames.MutatorSparseBooleanEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.MutatorSparseBooleanEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.MutatorSparseBooleanEntry}
 */
proto.web.communitygames.MutatorSparseBooleanEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.MutatorSparseBooleanEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.MutatorSparseBooleanEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.MutatorSparseBooleanEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorSparseBooleanEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getValue();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.web.communitygames.MutatorSparseBooleanEntry.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.MutatorSparseBooleanEntry} returns this
 */
proto.web.communitygames.MutatorSparseBooleanEntry.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool value = 2;
 * @return {boolean}
 */
proto.web.communitygames.MutatorSparseBooleanEntry.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.web.communitygames.MutatorSparseBooleanEntry} returns this
 */
proto.web.communitygames.MutatorSparseBooleanEntry.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.MutatorSparseBoolean.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.MutatorSparseBoolean.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.MutatorSparseBoolean.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.MutatorSparseBoolean} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorSparseBoolean.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultvalue: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sparsevaluesList: jspb.Message.toObjectList(msg.getSparsevaluesList(),
    proto.web.communitygames.MutatorSparseBooleanEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.MutatorSparseBoolean}
 */
proto.web.communitygames.MutatorSparseBoolean.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.MutatorSparseBoolean;
  return proto.web.communitygames.MutatorSparseBoolean.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.MutatorSparseBoolean} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.MutatorSparseBoolean}
 */
proto.web.communitygames.MutatorSparseBoolean.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultvalue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSize(value);
      break;
    case 3:
      var value = new proto.web.communitygames.MutatorSparseBooleanEntry;
      reader.readMessage(value,proto.web.communitygames.MutatorSparseBooleanEntry.deserializeBinaryFromReader);
      msg.addSparsevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.MutatorSparseBoolean.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.MutatorSparseBoolean.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.MutatorSparseBoolean} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorSparseBoolean.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultvalue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSparsevaluesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.web.communitygames.MutatorSparseBooleanEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool defaultValue = 1;
 * @return {boolean}
 */
proto.web.communitygames.MutatorSparseBoolean.prototype.getDefaultvalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.web.communitygames.MutatorSparseBoolean} returns this
 */
proto.web.communitygames.MutatorSparseBoolean.prototype.setDefaultvalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint32 size = 2;
 * @return {number}
 */
proto.web.communitygames.MutatorSparseBoolean.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.MutatorSparseBoolean} returns this
 */
proto.web.communitygames.MutatorSparseBoolean.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated MutatorSparseBooleanEntry sparseValues = 3;
 * @return {!Array<!proto.web.communitygames.MutatorSparseBooleanEntry>}
 */
proto.web.communitygames.MutatorSparseBoolean.prototype.getSparsevaluesList = function() {
  return /** @type{!Array<!proto.web.communitygames.MutatorSparseBooleanEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.MutatorSparseBooleanEntry, 3));
};


/**
 * @param {!Array<!proto.web.communitygames.MutatorSparseBooleanEntry>} value
 * @return {!proto.web.communitygames.MutatorSparseBoolean} returns this
*/
proto.web.communitygames.MutatorSparseBoolean.prototype.setSparsevaluesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.web.communitygames.MutatorSparseBooleanEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.MutatorSparseBooleanEntry}
 */
proto.web.communitygames.MutatorSparseBoolean.prototype.addSparsevalues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.web.communitygames.MutatorSparseBooleanEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.MutatorSparseBoolean} returns this
 */
proto.web.communitygames.MutatorSparseBoolean.prototype.clearSparsevaluesList = function() {
  return this.setSparsevaluesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.SparseIntEntity.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.SparseIntEntity.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.SparseIntEntity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.SparseIntEntity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.SparseIntEntity.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.SparseIntEntity}
 */
proto.web.communitygames.SparseIntEntity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.SparseIntEntity;
  return proto.web.communitygames.SparseIntEntity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.SparseIntEntity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.SparseIntEntity}
 */
proto.web.communitygames.SparseIntEntity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addValues(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.SparseIntEntity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.SparseIntEntity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.SparseIntEntity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.SparseIntEntity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
};


/**
 * repeated int32 values = 1;
 * @return {!Array<number>}
 */
proto.web.communitygames.SparseIntEntity.prototype.getValuesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.web.communitygames.SparseIntEntity} returns this
 */
proto.web.communitygames.SparseIntEntity.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.SparseIntEntity} returns this
 */
proto.web.communitygames.SparseIntEntity.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.SparseIntEntity} returns this
 */
proto.web.communitygames.SparseIntEntity.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.MutatorSparseIntEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.MutatorSparseIntEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.MutatorSparseIntEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorSparseIntEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    value: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.MutatorSparseIntEntry}
 */
proto.web.communitygames.MutatorSparseIntEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.MutatorSparseIntEntry;
  return proto.web.communitygames.MutatorSparseIntEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.MutatorSparseIntEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.MutatorSparseIntEntry}
 */
proto.web.communitygames.MutatorSparseIntEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.MutatorSparseIntEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.MutatorSparseIntEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.MutatorSparseIntEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorSparseIntEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.web.communitygames.MutatorSparseIntEntry.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.MutatorSparseIntEntry} returns this
 */
proto.web.communitygames.MutatorSparseIntEntry.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 value = 2;
 * @return {number}
 */
proto.web.communitygames.MutatorSparseIntEntry.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.MutatorSparseIntEntry} returns this
 */
proto.web.communitygames.MutatorSparseIntEntry.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.MutatorSparseInt.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.MutatorSparseInt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.MutatorSparseInt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorSparseInt.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultvalue: jspb.Message.getFieldWithDefault(msg, 1, 0),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sparsevalues: (f = msg.getSparsevalues()) && proto.web.communitygames.MutatorSparseIntEntry.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.MutatorSparseInt}
 */
proto.web.communitygames.MutatorSparseInt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.MutatorSparseInt;
  return proto.web.communitygames.MutatorSparseInt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.MutatorSparseInt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.MutatorSparseInt}
 */
proto.web.communitygames.MutatorSparseInt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefaultvalue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSize(value);
      break;
    case 3:
      var value = new proto.web.communitygames.MutatorSparseIntEntry;
      reader.readMessage(value,proto.web.communitygames.MutatorSparseIntEntry.deserializeBinaryFromReader);
      msg.setSparsevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.MutatorSparseInt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.MutatorSparseInt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.MutatorSparseInt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorSparseInt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultvalue();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSparsevalues();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.web.communitygames.MutatorSparseIntEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 defaultValue = 1;
 * @return {number}
 */
proto.web.communitygames.MutatorSparseInt.prototype.getDefaultvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.MutatorSparseInt} returns this
 */
proto.web.communitygames.MutatorSparseInt.prototype.setDefaultvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 size = 2;
 * @return {number}
 */
proto.web.communitygames.MutatorSparseInt.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.MutatorSparseInt} returns this
 */
proto.web.communitygames.MutatorSparseInt.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional MutatorSparseIntEntry sparseValues = 3;
 * @return {?proto.web.communitygames.MutatorSparseIntEntry}
 */
proto.web.communitygames.MutatorSparseInt.prototype.getSparsevalues = function() {
  return /** @type{?proto.web.communitygames.MutatorSparseIntEntry} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MutatorSparseIntEntry, 3));
};


/**
 * @param {?proto.web.communitygames.MutatorSparseIntEntry|undefined} value
 * @return {!proto.web.communitygames.MutatorSparseInt} returns this
*/
proto.web.communitygames.MutatorSparseInt.prototype.setSparsevalues = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.MutatorSparseInt} returns this
 */
proto.web.communitygames.MutatorSparseInt.prototype.clearSparsevalues = function() {
  return this.setSparsevalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.MutatorSparseInt.prototype.hasSparsevalues = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.MutatorKind.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.MutatorKind.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.MutatorKind} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorKind.toObject = function(includeInstance, msg) {
  var f, obj = {
    mutatorboolean: (f = msg.getMutatorboolean()) && proto.web.communitygames.MutatorBoolean.toObject(includeInstance, f),
    mutatorstring: (f = msg.getMutatorstring()) && proto.web.communitygames.MutatorString.toObject(includeInstance, f),
    mutatorfloat: (f = msg.getMutatorfloat()) && proto.web.communitygames.MutatorFloat.toObject(includeInstance, f),
    mutatorint: (f = msg.getMutatorint()) && proto.web.communitygames.MutatorInt.toObject(includeInstance, f),
    mutatorsparseboolean: (f = msg.getMutatorsparseboolean()) && proto.web.communitygames.MutatorSparseBoolean.toObject(includeInstance, f),
    mutatorsparseint: (f = msg.getMutatorsparseint()) && proto.web.communitygames.MutatorSparseInt.toObject(includeInstance, f),
    mutatorsparsefloat: (f = msg.getMutatorsparsefloat()) && proto.web.communitygames.MutatorSparseFloat.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.MutatorKind}
 */
proto.web.communitygames.MutatorKind.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.MutatorKind;
  return proto.web.communitygames.MutatorKind.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.MutatorKind} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.MutatorKind}
 */
proto.web.communitygames.MutatorKind.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.MutatorBoolean;
      reader.readMessage(value,proto.web.communitygames.MutatorBoolean.deserializeBinaryFromReader);
      msg.setMutatorboolean(value);
      break;
    case 4:
      var value = new proto.web.communitygames.MutatorString;
      reader.readMessage(value,proto.web.communitygames.MutatorString.deserializeBinaryFromReader);
      msg.setMutatorstring(value);
      break;
    case 5:
      var value = new proto.web.communitygames.MutatorFloat;
      reader.readMessage(value,proto.web.communitygames.MutatorFloat.deserializeBinaryFromReader);
      msg.setMutatorfloat(value);
      break;
    case 6:
      var value = new proto.web.communitygames.MutatorInt;
      reader.readMessage(value,proto.web.communitygames.MutatorInt.deserializeBinaryFromReader);
      msg.setMutatorint(value);
      break;
    case 7:
      var value = new proto.web.communitygames.MutatorSparseBoolean;
      reader.readMessage(value,proto.web.communitygames.MutatorSparseBoolean.deserializeBinaryFromReader);
      msg.setMutatorsparseboolean(value);
      break;
    case 8:
      var value = new proto.web.communitygames.MutatorSparseInt;
      reader.readMessage(value,proto.web.communitygames.MutatorSparseInt.deserializeBinaryFromReader);
      msg.setMutatorsparseint(value);
      break;
    case 9:
      var value = new proto.web.communitygames.MutatorSparseFloat;
      reader.readMessage(value,proto.web.communitygames.MutatorSparseFloat.deserializeBinaryFromReader);
      msg.setMutatorsparsefloat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.MutatorKind.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.MutatorKind.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.MutatorKind} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.MutatorKind.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMutatorboolean();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.MutatorBoolean.serializeBinaryToWriter
    );
  }
  f = message.getMutatorstring();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.web.communitygames.MutatorString.serializeBinaryToWriter
    );
  }
  f = message.getMutatorfloat();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.web.communitygames.MutatorFloat.serializeBinaryToWriter
    );
  }
  f = message.getMutatorint();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.web.communitygames.MutatorInt.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsparseboolean();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.web.communitygames.MutatorSparseBoolean.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsparseint();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.web.communitygames.MutatorSparseInt.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsparsefloat();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.web.communitygames.MutatorSparseFloat.serializeBinaryToWriter
    );
  }
};


/**
 * optional MutatorBoolean mutatorBoolean = 1;
 * @return {?proto.web.communitygames.MutatorBoolean}
 */
proto.web.communitygames.MutatorKind.prototype.getMutatorboolean = function() {
  return /** @type{?proto.web.communitygames.MutatorBoolean} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MutatorBoolean, 1));
};


/**
 * @param {?proto.web.communitygames.MutatorBoolean|undefined} value
 * @return {!proto.web.communitygames.MutatorKind} returns this
*/
proto.web.communitygames.MutatorKind.prototype.setMutatorboolean = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.MutatorKind} returns this
 */
proto.web.communitygames.MutatorKind.prototype.clearMutatorboolean = function() {
  return this.setMutatorboolean(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.MutatorKind.prototype.hasMutatorboolean = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MutatorString mutatorString = 4;
 * @return {?proto.web.communitygames.MutatorString}
 */
proto.web.communitygames.MutatorKind.prototype.getMutatorstring = function() {
  return /** @type{?proto.web.communitygames.MutatorString} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MutatorString, 4));
};


/**
 * @param {?proto.web.communitygames.MutatorString|undefined} value
 * @return {!proto.web.communitygames.MutatorKind} returns this
*/
proto.web.communitygames.MutatorKind.prototype.setMutatorstring = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.MutatorKind} returns this
 */
proto.web.communitygames.MutatorKind.prototype.clearMutatorstring = function() {
  return this.setMutatorstring(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.MutatorKind.prototype.hasMutatorstring = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MutatorFloat mutatorFloat = 5;
 * @return {?proto.web.communitygames.MutatorFloat}
 */
proto.web.communitygames.MutatorKind.prototype.getMutatorfloat = function() {
  return /** @type{?proto.web.communitygames.MutatorFloat} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MutatorFloat, 5));
};


/**
 * @param {?proto.web.communitygames.MutatorFloat|undefined} value
 * @return {!proto.web.communitygames.MutatorKind} returns this
*/
proto.web.communitygames.MutatorKind.prototype.setMutatorfloat = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.MutatorKind} returns this
 */
proto.web.communitygames.MutatorKind.prototype.clearMutatorfloat = function() {
  return this.setMutatorfloat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.MutatorKind.prototype.hasMutatorfloat = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MutatorInt mutatorInt = 6;
 * @return {?proto.web.communitygames.MutatorInt}
 */
proto.web.communitygames.MutatorKind.prototype.getMutatorint = function() {
  return /** @type{?proto.web.communitygames.MutatorInt} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MutatorInt, 6));
};


/**
 * @param {?proto.web.communitygames.MutatorInt|undefined} value
 * @return {!proto.web.communitygames.MutatorKind} returns this
*/
proto.web.communitygames.MutatorKind.prototype.setMutatorint = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.MutatorKind} returns this
 */
proto.web.communitygames.MutatorKind.prototype.clearMutatorint = function() {
  return this.setMutatorint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.MutatorKind.prototype.hasMutatorint = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional MutatorSparseBoolean mutatorSparseBoolean = 7;
 * @return {?proto.web.communitygames.MutatorSparseBoolean}
 */
proto.web.communitygames.MutatorKind.prototype.getMutatorsparseboolean = function() {
  return /** @type{?proto.web.communitygames.MutatorSparseBoolean} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MutatorSparseBoolean, 7));
};


/**
 * @param {?proto.web.communitygames.MutatorSparseBoolean|undefined} value
 * @return {!proto.web.communitygames.MutatorKind} returns this
*/
proto.web.communitygames.MutatorKind.prototype.setMutatorsparseboolean = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.MutatorKind} returns this
 */
proto.web.communitygames.MutatorKind.prototype.clearMutatorsparseboolean = function() {
  return this.setMutatorsparseboolean(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.MutatorKind.prototype.hasMutatorsparseboolean = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional MutatorSparseInt mutatorSparseInt = 8;
 * @return {?proto.web.communitygames.MutatorSparseInt}
 */
proto.web.communitygames.MutatorKind.prototype.getMutatorsparseint = function() {
  return /** @type{?proto.web.communitygames.MutatorSparseInt} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MutatorSparseInt, 8));
};


/**
 * @param {?proto.web.communitygames.MutatorSparseInt|undefined} value
 * @return {!proto.web.communitygames.MutatorKind} returns this
*/
proto.web.communitygames.MutatorKind.prototype.setMutatorsparseint = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.MutatorKind} returns this
 */
proto.web.communitygames.MutatorKind.prototype.clearMutatorsparseint = function() {
  return this.setMutatorsparseint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.MutatorKind.prototype.hasMutatorsparseint = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional MutatorSparseFloat mutatorSparseFloat = 9;
 * @return {?proto.web.communitygames.MutatorSparseFloat}
 */
proto.web.communitygames.MutatorKind.prototype.getMutatorsparsefloat = function() {
  return /** @type{?proto.web.communitygames.MutatorSparseFloat} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MutatorSparseFloat, 9));
};


/**
 * @param {?proto.web.communitygames.MutatorSparseFloat|undefined} value
 * @return {!proto.web.communitygames.MutatorKind} returns this
*/
proto.web.communitygames.MutatorKind.prototype.setMutatorsparsefloat = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.MutatorKind} returns this
 */
proto.web.communitygames.MutatorKind.prototype.clearMutatorsparsefloat = function() {
  return this.setMutatorsparsefloat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.MutatorKind.prototype.hasMutatorsparsefloat = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.TeamComposition.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.TeamComposition.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.TeamComposition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.TeamComposition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.TeamComposition.toObject = function(includeInstance, msg) {
  var f, obj = {
    teams: (f = msg.getTeams()) && proto.web.communitygames.TeamStructure.toObject(includeInstance, f),
    internalteamsList: jspb.Message.toObjectList(msg.getInternalteamsList(),
    proto.web.communitygames.InternalTeamStructure.toObject, includeInstance),
    balancingmethod: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.TeamComposition}
 */
proto.web.communitygames.TeamComposition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.TeamComposition;
  return proto.web.communitygames.TeamComposition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.TeamComposition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.TeamComposition}
 */
proto.web.communitygames.TeamComposition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.TeamStructure;
      reader.readMessage(value,proto.web.communitygames.TeamStructure.deserializeBinaryFromReader);
      msg.setTeams(value);
      break;
    case 2:
      var value = new proto.web.communitygames.InternalTeamStructure;
      reader.readMessage(value,proto.web.communitygames.InternalTeamStructure.deserializeBinaryFromReader);
      msg.addInternalteams(value);
      break;
    case 3:
      var value = /** @type {!proto.web.communitygames.BalancingMethod} */ (reader.readEnum());
      msg.setBalancingmethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.TeamComposition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.TeamComposition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.TeamComposition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.TeamComposition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.TeamStructure.serializeBinaryToWriter
    );
  }
  f = message.getInternalteamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.web.communitygames.InternalTeamStructure.serializeBinaryToWriter
    );
  }
  f = message.getBalancingmethod();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional TeamStructure teams = 1;
 * @return {?proto.web.communitygames.TeamStructure}
 */
proto.web.communitygames.TeamComposition.prototype.getTeams = function() {
  return /** @type{?proto.web.communitygames.TeamStructure} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.TeamStructure, 1));
};


/**
 * @param {?proto.web.communitygames.TeamStructure|undefined} value
 * @return {!proto.web.communitygames.TeamComposition} returns this
*/
proto.web.communitygames.TeamComposition.prototype.setTeams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.TeamComposition} returns this
 */
proto.web.communitygames.TeamComposition.prototype.clearTeams = function() {
  return this.setTeams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.TeamComposition.prototype.hasTeams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated InternalTeamStructure internalTeams = 2;
 * @return {!Array<!proto.web.communitygames.InternalTeamStructure>}
 */
proto.web.communitygames.TeamComposition.prototype.getInternalteamsList = function() {
  return /** @type{!Array<!proto.web.communitygames.InternalTeamStructure>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.InternalTeamStructure, 2));
};


/**
 * @param {!Array<!proto.web.communitygames.InternalTeamStructure>} value
 * @return {!proto.web.communitygames.TeamComposition} returns this
*/
proto.web.communitygames.TeamComposition.prototype.setInternalteamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.web.communitygames.InternalTeamStructure=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.InternalTeamStructure}
 */
proto.web.communitygames.TeamComposition.prototype.addInternalteams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.web.communitygames.InternalTeamStructure, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.TeamComposition} returns this
 */
proto.web.communitygames.TeamComposition.prototype.clearInternalteamsList = function() {
  return this.setInternalteamsList([]);
};


/**
 * optional BalancingMethod balancingMethod = 3;
 * @return {!proto.web.communitygames.BalancingMethod}
 */
proto.web.communitygames.TeamComposition.prototype.getBalancingmethod = function() {
  return /** @type {!proto.web.communitygames.BalancingMethod} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.web.communitygames.BalancingMethod} value
 * @return {!proto.web.communitygames.TeamComposition} returns this
 */
proto.web.communitygames.TeamComposition.prototype.setBalancingmethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.Mutator.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.Mutator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.Mutator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Mutator.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    category: jspb.Message.getFieldWithDefault(msg, 2, ""),
    kind: (f = msg.getKind()) && proto.web.communitygames.MutatorKind.toObject(includeInstance, f),
    id: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.Mutator}
 */
proto.web.communitygames.Mutator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.Mutator;
  return proto.web.communitygames.Mutator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.Mutator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.Mutator}
 */
proto.web.communitygames.Mutator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.web.communitygames.MutatorKind;
      reader.readMessage(value,proto.web.communitygames.MutatorKind.deserializeBinaryFromReader);
      msg.setKind(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.Mutator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.Mutator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.Mutator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Mutator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKind();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.web.communitygames.MutatorKind.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.web.communitygames.Mutator.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.Mutator} returns this
 */
proto.web.communitygames.Mutator.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.web.communitygames.Mutator.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.Mutator} returns this
 */
proto.web.communitygames.Mutator.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional MutatorKind kind = 3;
 * @return {?proto.web.communitygames.MutatorKind}
 */
proto.web.communitygames.Mutator.prototype.getKind = function() {
  return /** @type{?proto.web.communitygames.MutatorKind} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MutatorKind, 3));
};


/**
 * @param {?proto.web.communitygames.MutatorKind|undefined} value
 * @return {!proto.web.communitygames.Mutator} returns this
*/
proto.web.communitygames.Mutator.prototype.setKind = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.Mutator} returns this
 */
proto.web.communitygames.Mutator.prototype.clearKind = function() {
  return this.setKind(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.Mutator.prototype.hasKind = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string id = 4;
 * @return {string}
 */
proto.web.communitygames.Mutator.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.Mutator} returns this
 */
proto.web.communitygames.Mutator.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.Timestamp.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.Timestamp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.Timestamp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Timestamp.toObject = function(includeInstance, msg) {
  var f, obj = {
    seconds: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    nanos: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.Timestamp}
 */
proto.web.communitygames.Timestamp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.Timestamp;
  return proto.web.communitygames.Timestamp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.Timestamp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.Timestamp}
 */
proto.web.communitygames.Timestamp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setSeconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNanos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.Timestamp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.Timestamp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.Timestamp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Timestamp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeconds();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getNanos();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int64 seconds = 1;
 * @return {string}
 */
proto.web.communitygames.Timestamp.prototype.getSeconds = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.Timestamp} returns this
 */
proto.web.communitygames.Timestamp.prototype.setSeconds = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int32 nanos = 2;
 * @return {number}
 */
proto.web.communitygames.Timestamp.prototype.getNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.Timestamp} returns this
 */
proto.web.communitygames.Timestamp.prototype.setNanos = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.StringValue.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.StringValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.StringValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.StringValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.StringValue}
 */
proto.web.communitygames.StringValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.StringValue;
  return proto.web.communitygames.StringValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.StringValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.StringValue}
 */
proto.web.communitygames.StringValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.StringValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.StringValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.StringValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.StringValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.web.communitygames.StringValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.StringValue} returns this
 */
proto.web.communitygames.StringValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.GameServerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.GameServerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.GameServerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GameServerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.GameServerMessage}
 */
proto.web.communitygames.GameServerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.GameServerMessage;
  return proto.web.communitygames.GameServerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.GameServerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.GameServerMessage}
 */
proto.web.communitygames.GameServerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.GameServerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.GameServerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.GameServerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GameServerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string kind = 1;
 * @return {string}
 */
proto.web.communitygames.GameServerMessage.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.GameServerMessage} returns this
 */
proto.web.communitygames.GameServerMessage.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.web.communitygames.GameServerMessage.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.GameServerMessage} returns this
 */
proto.web.communitygames.GameServerMessage.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.GameServerSettings.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.GameServerSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.GameServerSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.GameServerSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GameServerSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: (f = msg.getDescription()) && proto.web.communitygames.StringValue.toObject(includeInstance, f),
    gameservermessageList: jspb.Message.toObjectList(msg.getGameservermessageList(),
    proto.web.communitygames.GameServerMessage.toObject, includeInstance),
    configname: (f = msg.getConfigname()) && proto.web.communitygames.StringValue.toObject(includeInstance, f),
    configdescription: (f = msg.getConfigdescription()) && proto.web.communitygames.StringValue.toObject(includeInstance, f),
    phantomgamestate: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.GameServerSettings}
 */
proto.web.communitygames.GameServerSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.GameServerSettings;
  return proto.web.communitygames.GameServerSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.GameServerSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.GameServerSettings}
 */
proto.web.communitygames.GameServerSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.web.communitygames.StringValue;
      reader.readMessage(value,proto.web.communitygames.StringValue.deserializeBinaryFromReader);
      msg.setDescription(value);
      break;
    case 3:
      var value = new proto.web.communitygames.GameServerMessage;
      reader.readMessage(value,proto.web.communitygames.GameServerMessage.deserializeBinaryFromReader);
      msg.addGameservermessage(value);
      break;
    case 4:
      var value = new proto.web.communitygames.StringValue;
      reader.readMessage(value,proto.web.communitygames.StringValue.deserializeBinaryFromReader);
      msg.setConfigname(value);
      break;
    case 5:
      var value = new proto.web.communitygames.StringValue;
      reader.readMessage(value,proto.web.communitygames.StringValue.deserializeBinaryFromReader);
      msg.setConfigdescription(value);
      break;
    case 6:
      var value = /** @type {!proto.web.communitygames.PhantomGameState} */ (reader.readEnum());
      msg.setPhantomgamestate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.GameServerSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.GameServerSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.GameServerSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GameServerSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getGameservermessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.web.communitygames.GameServerMessage.serializeBinaryToWriter
    );
  }
  f = message.getConfigname();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.web.communitygames.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getConfigdescription();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.web.communitygames.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getPhantomgamestate();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.web.communitygames.GameServerSettings.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.GameServerSettings} returns this
 */
proto.web.communitygames.GameServerSettings.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional StringValue description = 2;
 * @return {?proto.web.communitygames.StringValue}
 */
proto.web.communitygames.GameServerSettings.prototype.getDescription = function() {
  return /** @type{?proto.web.communitygames.StringValue} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.StringValue, 2));
};


/**
 * @param {?proto.web.communitygames.StringValue|undefined} value
 * @return {!proto.web.communitygames.GameServerSettings} returns this
*/
proto.web.communitygames.GameServerSettings.prototype.setDescription = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.GameServerSettings} returns this
 */
proto.web.communitygames.GameServerSettings.prototype.clearDescription = function() {
  return this.setDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.GameServerSettings.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated GameServerMessage gameServerMessage = 3;
 * @return {!Array<!proto.web.communitygames.GameServerMessage>}
 */
proto.web.communitygames.GameServerSettings.prototype.getGameservermessageList = function() {
  return /** @type{!Array<!proto.web.communitygames.GameServerMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.GameServerMessage, 3));
};


/**
 * @param {!Array<!proto.web.communitygames.GameServerMessage>} value
 * @return {!proto.web.communitygames.GameServerSettings} returns this
*/
proto.web.communitygames.GameServerSettings.prototype.setGameservermessageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.web.communitygames.GameServerMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.GameServerMessage}
 */
proto.web.communitygames.GameServerSettings.prototype.addGameservermessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.web.communitygames.GameServerMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.GameServerSettings} returns this
 */
proto.web.communitygames.GameServerSettings.prototype.clearGameservermessageList = function() {
  return this.setGameservermessageList([]);
};


/**
 * optional StringValue configName = 4;
 * @return {?proto.web.communitygames.StringValue}
 */
proto.web.communitygames.GameServerSettings.prototype.getConfigname = function() {
  return /** @type{?proto.web.communitygames.StringValue} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.StringValue, 4));
};


/**
 * @param {?proto.web.communitygames.StringValue|undefined} value
 * @return {!proto.web.communitygames.GameServerSettings} returns this
*/
proto.web.communitygames.GameServerSettings.prototype.setConfigname = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.GameServerSettings} returns this
 */
proto.web.communitygames.GameServerSettings.prototype.clearConfigname = function() {
  return this.setConfigname(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.GameServerSettings.prototype.hasConfigname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional StringValue ConfigDescription = 5;
 * @return {?proto.web.communitygames.StringValue}
 */
proto.web.communitygames.GameServerSettings.prototype.getConfigdescription = function() {
  return /** @type{?proto.web.communitygames.StringValue} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.StringValue, 5));
};


/**
 * @param {?proto.web.communitygames.StringValue|undefined} value
 * @return {!proto.web.communitygames.GameServerSettings} returns this
*/
proto.web.communitygames.GameServerSettings.prototype.setConfigdescription = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.GameServerSettings} returns this
 */
proto.web.communitygames.GameServerSettings.prototype.clearConfigdescription = function() {
  return this.setConfigdescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.GameServerSettings.prototype.hasConfigdescription = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PhantomGameState phantomGameState = 6;
 * @return {!proto.web.communitygames.PhantomGameState}
 */
proto.web.communitygames.GameServerSettings.prototype.getPhantomgamestate = function() {
  return /** @type {!proto.web.communitygames.PhantomGameState} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.web.communitygames.PhantomGameState} value
 * @return {!proto.web.communitygames.GameServerSettings} returns this
 */
proto.web.communitygames.GameServerSettings.prototype.setPhantomgamestate = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.PlayerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.PlayerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.PlayerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.PlayerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    nucleusid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    personaid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    platformid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.PlayerInfo}
 */
proto.web.communitygames.PlayerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.PlayerInfo;
  return proto.web.communitygames.PlayerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.PlayerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.PlayerInfo}
 */
proto.web.communitygames.PlayerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setNucleusid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPersonaid(value);
      break;
    case 3:
      var value = /** @type {!proto.web.communitygames.Platform} */ (reader.readEnum());
      msg.setPlatformid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.PlayerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.PlayerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.PlayerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.PlayerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNucleusid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getPersonaid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getPlatformid();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional uint64 nucleusId = 1;
 * @return {string}
 */
proto.web.communitygames.PlayerInfo.prototype.getNucleusid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.PlayerInfo} returns this
 */
proto.web.communitygames.PlayerInfo.prototype.setNucleusid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 personaId = 2;
 * @return {string}
 */
proto.web.communitygames.PlayerInfo.prototype.getPersonaid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.PlayerInfo} returns this
 */
proto.web.communitygames.PlayerInfo.prototype.setPersonaid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional Platform platformId = 3;
 * @return {!proto.web.communitygames.Platform}
 */
proto.web.communitygames.PlayerInfo.prototype.getPlatformid = function() {
  return /** @type {!proto.web.communitygames.Platform} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.web.communitygames.Platform} value
 * @return {!proto.web.communitygames.PlayerInfo} returns this
 */
proto.web.communitygames.PlayerInfo.prototype.setPlatformid = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.PlatformRestrictions.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.PlatformRestrictions.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.PlatformRestrictions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.PlatformRestrictions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.PlatformRestrictions.toObject = function(includeInstance, msg) {
  var f, obj = {
    platformsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.PlatformRestrictions}
 */
proto.web.communitygames.PlatformRestrictions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.PlatformRestrictions;
  return proto.web.communitygames.PlatformRestrictions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.PlatformRestrictions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.PlatformRestrictions}
 */
proto.web.communitygames.PlatformRestrictions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.web.communitygames.Platform>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPlatforms(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.PlatformRestrictions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.PlatformRestrictions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.PlatformRestrictions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.PlatformRestrictions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlatformsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated Platform platforms = 1;
 * @return {!Array<!proto.web.communitygames.Platform>}
 */
proto.web.communitygames.PlatformRestrictions.prototype.getPlatformsList = function() {
  return /** @type {!Array<!proto.web.communitygames.Platform>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.web.communitygames.Platform>} value
 * @return {!proto.web.communitygames.PlatformRestrictions} returns this
 */
proto.web.communitygames.PlatformRestrictions.prototype.setPlatformsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.web.communitygames.Platform} value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.PlatformRestrictions} returns this
 */
proto.web.communitygames.PlatformRestrictions.prototype.addPlatforms = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.PlatformRestrictions} returns this
 */
proto.web.communitygames.PlatformRestrictions.prototype.clearPlatformsList = function() {
  return this.setPlatformsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.InputMethodResrictions.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.InputMethodResrictions.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.InputMethodResrictions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.InputMethodResrictions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.InputMethodResrictions.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputmethodsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.InputMethodResrictions}
 */
proto.web.communitygames.InputMethodResrictions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.InputMethodResrictions;
  return proto.web.communitygames.InputMethodResrictions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.InputMethodResrictions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.InputMethodResrictions}
 */
proto.web.communitygames.InputMethodResrictions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.web.communitygames.InputMethods>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addInputmethods(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.InputMethodResrictions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.InputMethodResrictions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.InputMethodResrictions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.InputMethodResrictions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputmethodsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated InputMethods inputMethods = 1;
 * @return {!Array<!proto.web.communitygames.InputMethods>}
 */
proto.web.communitygames.InputMethodResrictions.prototype.getInputmethodsList = function() {
  return /** @type {!Array<!proto.web.communitygames.InputMethods>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.web.communitygames.InputMethods>} value
 * @return {!proto.web.communitygames.InputMethodResrictions} returns this
 */
proto.web.communitygames.InputMethodResrictions.prototype.setInputmethodsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.web.communitygames.InputMethods} value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.InputMethodResrictions} returns this
 */
proto.web.communitygames.InputMethodResrictions.prototype.addInputmethods = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.InputMethodResrictions} returns this
 */
proto.web.communitygames.InputMethodResrictions.prototype.clearInputmethodsList = function() {
  return this.setInputmethodsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.Restrictions.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.Restrictions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.Restrictions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Restrictions.toObject = function(includeInstance, msg) {
  var f, obj = {
    platformrestrictions: (f = msg.getPlatformrestrictions()) && proto.web.communitygames.PlatformRestrictions.toObject(includeInstance, f),
    inputmethodresctrictions: (f = msg.getInputmethodresctrictions()) && proto.web.communitygames.InputMethodResrictions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.Restrictions}
 */
proto.web.communitygames.Restrictions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.Restrictions;
  return proto.web.communitygames.Restrictions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.Restrictions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.Restrictions}
 */
proto.web.communitygames.Restrictions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.PlatformRestrictions;
      reader.readMessage(value,proto.web.communitygames.PlatformRestrictions.deserializeBinaryFromReader);
      msg.setPlatformrestrictions(value);
      break;
    case 2:
      var value = new proto.web.communitygames.InputMethodResrictions;
      reader.readMessage(value,proto.web.communitygames.InputMethodResrictions.deserializeBinaryFromReader);
      msg.setInputmethodresctrictions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.Restrictions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.Restrictions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.Restrictions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Restrictions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlatformrestrictions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.PlatformRestrictions.serializeBinaryToWriter
    );
  }
  f = message.getInputmethodresctrictions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.InputMethodResrictions.serializeBinaryToWriter
    );
  }
};


/**
 * optional PlatformRestrictions platformRestrictions = 1;
 * @return {?proto.web.communitygames.PlatformRestrictions}
 */
proto.web.communitygames.Restrictions.prototype.getPlatformrestrictions = function() {
  return /** @type{?proto.web.communitygames.PlatformRestrictions} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.PlatformRestrictions, 1));
};


/**
 * @param {?proto.web.communitygames.PlatformRestrictions|undefined} value
 * @return {!proto.web.communitygames.Restrictions} returns this
*/
proto.web.communitygames.Restrictions.prototype.setPlatformrestrictions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.Restrictions} returns this
 */
proto.web.communitygames.Restrictions.prototype.clearPlatformrestrictions = function() {
  return this.setPlatformrestrictions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.Restrictions.prototype.hasPlatformrestrictions = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional InputMethodResrictions inputMethodResctrictions = 2;
 * @return {?proto.web.communitygames.InputMethodResrictions}
 */
proto.web.communitygames.Restrictions.prototype.getInputmethodresctrictions = function() {
  return /** @type{?proto.web.communitygames.InputMethodResrictions} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.InputMethodResrictions, 2));
};


/**
 * @param {?proto.web.communitygames.InputMethodResrictions|undefined} value
 * @return {!proto.web.communitygames.Restrictions} returns this
*/
proto.web.communitygames.Restrictions.prototype.setInputmethodresctrictions = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.Restrictions} returns this
 */
proto.web.communitygames.Restrictions.prototype.clearInputmethodresctrictions = function() {
  return this.setInputmethodresctrictions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.Restrictions.prototype.hasInputmethodresctrictions = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.Compressed.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.Compressed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.Compressed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Compressed.toObject = function(includeInstance, msg) {
  var f, obj = {
    compiledmodrules: msg.getCompiledmodrules_asB64(),
    rulesversion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    inflatedsize: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.Compressed}
 */
proto.web.communitygames.Compressed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.Compressed;
  return proto.web.communitygames.Compressed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.Compressed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.Compressed}
 */
proto.web.communitygames.Compressed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCompiledmodrules(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRulesversion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInflatedsize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.Compressed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.Compressed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.Compressed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Compressed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompiledmodrules_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRulesversion();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getInflatedsize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes compiledModRules = 1;
 * @return {!(string|Uint8Array)}
 */
proto.web.communitygames.Compressed.prototype.getCompiledmodrules = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes compiledModRules = 1;
 * This is a type-conversion wrapper around `getCompiledmodrules()`
 * @return {string}
 */
proto.web.communitygames.Compressed.prototype.getCompiledmodrules_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCompiledmodrules()));
};


/**
 * optional bytes compiledModRules = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCompiledmodrules()`
 * @return {!Uint8Array}
 */
proto.web.communitygames.Compressed.prototype.getCompiledmodrules_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCompiledmodrules()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.web.communitygames.Compressed} returns this
 */
proto.web.communitygames.Compressed.prototype.setCompiledmodrules = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int32 rulesVersion = 2;
 * @return {number}
 */
proto.web.communitygames.Compressed.prototype.getRulesversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.Compressed} returns this
 */
proto.web.communitygames.Compressed.prototype.setRulesversion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 inflatedSize = 3;
 * @return {number}
 */
proto.web.communitygames.Compressed.prototype.getInflatedsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.Compressed} returns this
 */
proto.web.communitygames.Compressed.prototype.setInflatedsize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.Uncompressed.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.Uncompressed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.Uncompressed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Uncompressed.toObject = function(includeInstance, msg) {
  var f, obj = {
    compiledmodrules: msg.getCompiledmodrules_asB64(),
    rulesversion: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.Uncompressed}
 */
proto.web.communitygames.Uncompressed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.Uncompressed;
  return proto.web.communitygames.Uncompressed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.Uncompressed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.Uncompressed}
 */
proto.web.communitygames.Uncompressed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCompiledmodrules(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRulesversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.Uncompressed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.Uncompressed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.Uncompressed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Uncompressed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompiledmodrules_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRulesversion();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional bytes compiledModRules = 1;
 * @return {!(string|Uint8Array)}
 */
proto.web.communitygames.Uncompressed.prototype.getCompiledmodrules = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes compiledModRules = 1;
 * This is a type-conversion wrapper around `getCompiledmodrules()`
 * @return {string}
 */
proto.web.communitygames.Uncompressed.prototype.getCompiledmodrules_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCompiledmodrules()));
};


/**
 * optional bytes compiledModRules = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCompiledmodrules()`
 * @return {!Uint8Array}
 */
proto.web.communitygames.Uncompressed.prototype.getCompiledmodrules_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCompiledmodrules()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.web.communitygames.Uncompressed} returns this
 */
proto.web.communitygames.Uncompressed.prototype.setCompiledmodrules = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int32 rulesVersion = 2;
 * @return {number}
 */
proto.web.communitygames.Uncompressed.prototype.getRulesversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.Uncompressed} returns this
 */
proto.web.communitygames.Uncompressed.prototype.setRulesversion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.CompiledRules.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.CompiledRules.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.CompiledRules} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.CompiledRules.toObject = function(includeInstance, msg) {
  var f, obj = {
    uncompressed: (f = msg.getUncompressed()) && proto.web.communitygames.Uncompressed.toObject(includeInstance, f),
    compressed: (f = msg.getCompressed()) && proto.web.communitygames.Compressed.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.CompiledRules}
 */
proto.web.communitygames.CompiledRules.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.CompiledRules;
  return proto.web.communitygames.CompiledRules.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.CompiledRules} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.CompiledRules}
 */
proto.web.communitygames.CompiledRules.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.Uncompressed;
      reader.readMessage(value,proto.web.communitygames.Uncompressed.deserializeBinaryFromReader);
      msg.setUncompressed(value);
      break;
    case 2:
      var value = new proto.web.communitygames.Compressed;
      reader.readMessage(value,proto.web.communitygames.Compressed.deserializeBinaryFromReader);
      msg.setCompressed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.CompiledRules.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.CompiledRules.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.CompiledRules} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.CompiledRules.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUncompressed();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.Uncompressed.serializeBinaryToWriter
    );
  }
  f = message.getCompressed();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.Compressed.serializeBinaryToWriter
    );
  }
};


/**
 * optional Uncompressed uncompressed = 1;
 * @return {?proto.web.communitygames.Uncompressed}
 */
proto.web.communitygames.CompiledRules.prototype.getUncompressed = function() {
  return /** @type{?proto.web.communitygames.Uncompressed} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.Uncompressed, 1));
};


/**
 * @param {?proto.web.communitygames.Uncompressed|undefined} value
 * @return {!proto.web.communitygames.CompiledRules} returns this
*/
proto.web.communitygames.CompiledRules.prototype.setUncompressed = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.CompiledRules} returns this
 */
proto.web.communitygames.CompiledRules.prototype.clearUncompressed = function() {
  return this.setUncompressed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.CompiledRules.prototype.hasUncompressed = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Compressed compressed = 2;
 * @return {?proto.web.communitygames.Compressed}
 */
proto.web.communitygames.CompiledRules.prototype.getCompressed = function() {
  return /** @type{?proto.web.communitygames.Compressed} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.Compressed, 2));
};


/**
 * @param {?proto.web.communitygames.Compressed|undefined} value
 * @return {!proto.web.communitygames.CompiledRules} returns this
*/
proto.web.communitygames.CompiledRules.prototype.setCompressed = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.CompiledRules} returns this
 */
proto.web.communitygames.CompiledRules.prototype.clearCompressed = function() {
  return this.setCompressed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.CompiledRules.prototype.hasCompressed = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.CompatibleModRules.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.CompatibleModRules.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.CompatibleModRules} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.CompatibleModRules.toObject = function(includeInstance, msg) {
  var f, obj = {
    rules: msg.getRules_asB64(),
    rulesversion: jspb.Message.getFieldWithDefault(msg, 3, 0),
    compiled: (f = msg.getCompiled()) && proto.web.communitygames.CompiledRules.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.CompatibleModRules}
 */
proto.web.communitygames.CompatibleModRules.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.CompatibleModRules;
  return proto.web.communitygames.CompatibleModRules.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.CompatibleModRules} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.CompatibleModRules}
 */
proto.web.communitygames.CompatibleModRules.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRules(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRulesversion(value);
      break;
    case 4:
      var value = new proto.web.communitygames.CompiledRules;
      reader.readMessage(value,proto.web.communitygames.CompiledRules.deserializeBinaryFromReader);
      msg.setCompiled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.CompatibleModRules.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.CompatibleModRules.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.CompatibleModRules} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.CompatibleModRules.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRules_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRulesversion();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCompiled();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.web.communitygames.CompiledRules.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes rules = 1;
 * @return {!(string|Uint8Array)}
 */
proto.web.communitygames.CompatibleModRules.prototype.getRules = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes rules = 1;
 * This is a type-conversion wrapper around `getRules()`
 * @return {string}
 */
proto.web.communitygames.CompatibleModRules.prototype.getRules_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRules()));
};


/**
 * optional bytes rules = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRules()`
 * @return {!Uint8Array}
 */
proto.web.communitygames.CompatibleModRules.prototype.getRules_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRules()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.web.communitygames.CompatibleModRules} returns this
 */
proto.web.communitygames.CompatibleModRules.prototype.setRules = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int32 rulesVersion = 3;
 * @return {number}
 */
proto.web.communitygames.CompatibleModRules.prototype.getRulesversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.CompatibleModRules} returns this
 */
proto.web.communitygames.CompatibleModRules.prototype.setRulesversion = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CompiledRules compiled = 4;
 * @return {?proto.web.communitygames.CompiledRules}
 */
proto.web.communitygames.CompatibleModRules.prototype.getCompiled = function() {
  return /** @type{?proto.web.communitygames.CompiledRules} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.CompiledRules, 4));
};


/**
 * @param {?proto.web.communitygames.CompiledRules|undefined} value
 * @return {!proto.web.communitygames.CompatibleModRules} returns this
*/
proto.web.communitygames.CompatibleModRules.prototype.setCompiled = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.CompatibleModRules} returns this
 */
proto.web.communitygames.CompatibleModRules.prototype.clearCompiled = function() {
  return this.setCompiled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.CompatibleModRules.prototype.hasCompiled = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.InCompatibleModRules.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.InCompatibleModRules.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.InCompatibleModRules} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.InCompatibleModRules.toObject = function(includeInstance, msg) {
  var f, obj = {
    rules: msg.getRules_asB64(),
    rulesversion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    blueprintrulesversion: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.InCompatibleModRules}
 */
proto.web.communitygames.InCompatibleModRules.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.InCompatibleModRules;
  return proto.web.communitygames.InCompatibleModRules.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.InCompatibleModRules} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.InCompatibleModRules}
 */
proto.web.communitygames.InCompatibleModRules.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRules(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRulesversion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBlueprintrulesversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.InCompatibleModRules.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.InCompatibleModRules.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.InCompatibleModRules} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.InCompatibleModRules.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRules_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRulesversion();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getBlueprintrulesversion();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bytes rules = 1;
 * @return {!(string|Uint8Array)}
 */
proto.web.communitygames.InCompatibleModRules.prototype.getRules = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes rules = 1;
 * This is a type-conversion wrapper around `getRules()`
 * @return {string}
 */
proto.web.communitygames.InCompatibleModRules.prototype.getRules_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRules()));
};


/**
 * optional bytes rules = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRules()`
 * @return {!Uint8Array}
 */
proto.web.communitygames.InCompatibleModRules.prototype.getRules_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRules()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.web.communitygames.InCompatibleModRules} returns this
 */
proto.web.communitygames.InCompatibleModRules.prototype.setRules = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int32 rulesVersion = 2;
 * @return {number}
 */
proto.web.communitygames.InCompatibleModRules.prototype.getRulesversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.InCompatibleModRules} returns this
 */
proto.web.communitygames.InCompatibleModRules.prototype.setRulesversion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 blueprintRulesVersion = 3;
 * @return {number}
 */
proto.web.communitygames.InCompatibleModRules.prototype.getBlueprintrulesversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.InCompatibleModRules} returns this
 */
proto.web.communitygames.InCompatibleModRules.prototype.setBlueprintrulesversion = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.OriginalModRules.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.OriginalModRules.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.OriginalModRules} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.OriginalModRules.toObject = function(includeInstance, msg) {
  var f, obj = {
    compatiblerules: (f = msg.getCompatiblerules()) && proto.web.communitygames.CompatibleModRules.toObject(includeInstance, f),
    incompatiblerules: (f = msg.getIncompatiblerules()) && proto.web.communitygames.InCompatibleModRules.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.OriginalModRules}
 */
proto.web.communitygames.OriginalModRules.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.OriginalModRules;
  return proto.web.communitygames.OriginalModRules.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.OriginalModRules} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.OriginalModRules}
 */
proto.web.communitygames.OriginalModRules.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.CompatibleModRules;
      reader.readMessage(value,proto.web.communitygames.CompatibleModRules.deserializeBinaryFromReader);
      msg.setCompatiblerules(value);
      break;
    case 2:
      var value = new proto.web.communitygames.InCompatibleModRules;
      reader.readMessage(value,proto.web.communitygames.InCompatibleModRules.deserializeBinaryFromReader);
      msg.setIncompatiblerules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.OriginalModRules.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.OriginalModRules.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.OriginalModRules} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.OriginalModRules.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCompatiblerules();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.CompatibleModRules.serializeBinaryToWriter
    );
  }
  f = message.getIncompatiblerules();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.InCompatibleModRules.serializeBinaryToWriter
    );
  }
};


/**
 * optional CompatibleModRules compatibleRules = 1;
 * @return {?proto.web.communitygames.CompatibleModRules}
 */
proto.web.communitygames.OriginalModRules.prototype.getCompatiblerules = function() {
  return /** @type{?proto.web.communitygames.CompatibleModRules} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.CompatibleModRules, 1));
};


/**
 * @param {?proto.web.communitygames.CompatibleModRules|undefined} value
 * @return {!proto.web.communitygames.OriginalModRules} returns this
*/
proto.web.communitygames.OriginalModRules.prototype.setCompatiblerules = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.OriginalModRules} returns this
 */
proto.web.communitygames.OriginalModRules.prototype.clearCompatiblerules = function() {
  return this.setCompatiblerules(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.OriginalModRules.prototype.hasCompatiblerules = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional InCompatibleModRules incompatibleRules = 2;
 * @return {?proto.web.communitygames.InCompatibleModRules}
 */
proto.web.communitygames.OriginalModRules.prototype.getIncompatiblerules = function() {
  return /** @type{?proto.web.communitygames.InCompatibleModRules} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.InCompatibleModRules, 2));
};


/**
 * @param {?proto.web.communitygames.InCompatibleModRules|undefined} value
 * @return {!proto.web.communitygames.OriginalModRules} returns this
*/
proto.web.communitygames.OriginalModRules.prototype.setIncompatiblerules = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.OriginalModRules} returns this
 */
proto.web.communitygames.OriginalModRules.prototype.clearIncompatiblerules = function() {
  return this.setIncompatiblerules(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.OriginalModRules.prototype.hasIncompatiblerules = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.AssetCategoryTagBooleanOverride.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AssetCategoryTagBooleanOverride.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AssetCategoryTagBooleanOverride.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AssetCategoryTagBooleanOverride} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AssetCategoryTagBooleanOverride.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetcategorytagsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    value: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AssetCategoryTagBooleanOverride}
 */
proto.web.communitygames.AssetCategoryTagBooleanOverride.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AssetCategoryTagBooleanOverride;
  return proto.web.communitygames.AssetCategoryTagBooleanOverride.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AssetCategoryTagBooleanOverride} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AssetCategoryTagBooleanOverride}
 */
proto.web.communitygames.AssetCategoryTagBooleanOverride.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAssetcategorytags(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AssetCategoryTagBooleanOverride.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AssetCategoryTagBooleanOverride.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AssetCategoryTagBooleanOverride} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AssetCategoryTagBooleanOverride.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetcategorytagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated string assetCategoryTags = 1;
 * @return {!Array<string>}
 */
proto.web.communitygames.AssetCategoryTagBooleanOverride.prototype.getAssetcategorytagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.web.communitygames.AssetCategoryTagBooleanOverride} returns this
 */
proto.web.communitygames.AssetCategoryTagBooleanOverride.prototype.setAssetcategorytagsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.AssetCategoryTagBooleanOverride} returns this
 */
proto.web.communitygames.AssetCategoryTagBooleanOverride.prototype.addAssetcategorytags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.AssetCategoryTagBooleanOverride} returns this
 */
proto.web.communitygames.AssetCategoryTagBooleanOverride.prototype.clearAssetcategorytagsList = function() {
  return this.setAssetcategorytagsList([]);
};


/**
 * optional bool value = 2;
 * @return {boolean}
 */
proto.web.communitygames.AssetCategoryTagBooleanOverride.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.web.communitygames.AssetCategoryTagBooleanOverride} returns this
 */
proto.web.communitygames.AssetCategoryTagBooleanOverride.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AssetCategoryTagBooleanTeamOverride} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetcategorytagsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    value: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    teamid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AssetCategoryTagBooleanTeamOverride}
 */
proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AssetCategoryTagBooleanTeamOverride;
  return proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AssetCategoryTagBooleanTeamOverride} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AssetCategoryTagBooleanTeamOverride}
 */
proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAssetcategorytags(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTeamid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AssetCategoryTagBooleanTeamOverride} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetcategorytagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTeamid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * repeated string assetCategoryTags = 1;
 * @return {!Array<string>}
 */
proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.prototype.getAssetcategorytagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.web.communitygames.AssetCategoryTagBooleanTeamOverride} returns this
 */
proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.prototype.setAssetcategorytagsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.AssetCategoryTagBooleanTeamOverride} returns this
 */
proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.prototype.addAssetcategorytags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.AssetCategoryTagBooleanTeamOverride} returns this
 */
proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.prototype.clearAssetcategorytagsList = function() {
  return this.setAssetcategorytagsList([]);
};


/**
 * optional bool value = 2;
 * @return {boolean}
 */
proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.web.communitygames.AssetCategoryTagBooleanTeamOverride} returns this
 */
proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional uint32 teamId = 3;
 * @return {number}
 */
proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.prototype.getTeamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.AssetCategoryTagBooleanTeamOverride} returns this
 */
proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.AssetCategoryBoolean.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AssetCategoryBoolean.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AssetCategoryBoolean.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AssetCategoryBoolean} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AssetCategoryBoolean.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultvalue: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    overrides: (f = msg.getOverrides()) && proto.web.communitygames.AssetCategoryTagBooleanOverride.toObject(includeInstance, f),
    teamoverridesList: jspb.Message.toObjectList(msg.getTeamoverridesList(),
    proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AssetCategoryBoolean}
 */
proto.web.communitygames.AssetCategoryBoolean.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AssetCategoryBoolean;
  return proto.web.communitygames.AssetCategoryBoolean.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AssetCategoryBoolean} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AssetCategoryBoolean}
 */
proto.web.communitygames.AssetCategoryBoolean.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDefaultvalue(value);
      break;
    case 2:
      var value = new proto.web.communitygames.AssetCategoryTagBooleanOverride;
      reader.readMessage(value,proto.web.communitygames.AssetCategoryTagBooleanOverride.deserializeBinaryFromReader);
      msg.setOverrides(value);
      break;
    case 3:
      var value = new proto.web.communitygames.AssetCategoryTagBooleanTeamOverride;
      reader.readMessage(value,proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.deserializeBinaryFromReader);
      msg.addTeamoverrides(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AssetCategoryBoolean.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AssetCategoryBoolean.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AssetCategoryBoolean} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AssetCategoryBoolean.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultvalue();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getOverrides();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.AssetCategoryTagBooleanOverride.serializeBinaryToWriter
    );
  }
  f = message.getTeamoverridesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.web.communitygames.AssetCategoryTagBooleanTeamOverride.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool defaultValue = 1;
 * @return {boolean}
 */
proto.web.communitygames.AssetCategoryBoolean.prototype.getDefaultvalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.web.communitygames.AssetCategoryBoolean} returns this
 */
proto.web.communitygames.AssetCategoryBoolean.prototype.setDefaultvalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional AssetCategoryTagBooleanOverride overrides = 2;
 * @return {?proto.web.communitygames.AssetCategoryTagBooleanOverride}
 */
proto.web.communitygames.AssetCategoryBoolean.prototype.getOverrides = function() {
  return /** @type{?proto.web.communitygames.AssetCategoryTagBooleanOverride} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AssetCategoryTagBooleanOverride, 2));
};


/**
 * @param {?proto.web.communitygames.AssetCategoryTagBooleanOverride|undefined} value
 * @return {!proto.web.communitygames.AssetCategoryBoolean} returns this
*/
proto.web.communitygames.AssetCategoryBoolean.prototype.setOverrides = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AssetCategoryBoolean} returns this
 */
proto.web.communitygames.AssetCategoryBoolean.prototype.clearOverrides = function() {
  return this.setOverrides(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AssetCategoryBoolean.prototype.hasOverrides = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated AssetCategoryTagBooleanTeamOverride teamOverrides = 3;
 * @return {!Array<!proto.web.communitygames.AssetCategoryTagBooleanTeamOverride>}
 */
proto.web.communitygames.AssetCategoryBoolean.prototype.getTeamoverridesList = function() {
  return /** @type{!Array<!proto.web.communitygames.AssetCategoryTagBooleanTeamOverride>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.AssetCategoryTagBooleanTeamOverride, 3));
};


/**
 * @param {!Array<!proto.web.communitygames.AssetCategoryTagBooleanTeamOverride>} value
 * @return {!proto.web.communitygames.AssetCategoryBoolean} returns this
*/
proto.web.communitygames.AssetCategoryBoolean.prototype.setTeamoverridesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.web.communitygames.AssetCategoryTagBooleanTeamOverride=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.AssetCategoryTagBooleanTeamOverride}
 */
proto.web.communitygames.AssetCategoryBoolean.prototype.addTeamoverrides = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.web.communitygames.AssetCategoryTagBooleanTeamOverride, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.AssetCategoryBoolean} returns this
 */
proto.web.communitygames.AssetCategoryBoolean.prototype.clearTeamoverridesList = function() {
  return this.setTeamoverridesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AssetCategory.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AssetCategory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AssetCategory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AssetCategory.toObject = function(includeInstance, msg) {
  var f, obj = {
    tagid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pb_boolean: (f = msg.getBoolean()) && proto.web.communitygames.AssetCategoryBoolean.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AssetCategory}
 */
proto.web.communitygames.AssetCategory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AssetCategory;
  return proto.web.communitygames.AssetCategory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AssetCategory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AssetCategory}
 */
proto.web.communitygames.AssetCategory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTagid(value);
      break;
    case 2:
      var value = new proto.web.communitygames.AssetCategoryBoolean;
      reader.readMessage(value,proto.web.communitygames.AssetCategoryBoolean.deserializeBinaryFromReader);
      msg.setBoolean(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AssetCategory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AssetCategory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AssetCategory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AssetCategory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBoolean();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.AssetCategoryBoolean.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tagId = 1;
 * @return {string}
 */
proto.web.communitygames.AssetCategory.prototype.getTagid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.AssetCategory} returns this
 */
proto.web.communitygames.AssetCategory.prototype.setTagid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AssetCategoryBoolean boolean = 2;
 * @return {?proto.web.communitygames.AssetCategoryBoolean}
 */
proto.web.communitygames.AssetCategory.prototype.getBoolean = function() {
  return /** @type{?proto.web.communitygames.AssetCategoryBoolean} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AssetCategoryBoolean, 2));
};


/**
 * @param {?proto.web.communitygames.AssetCategoryBoolean|undefined} value
 * @return {!proto.web.communitygames.AssetCategory} returns this
*/
proto.web.communitygames.AssetCategory.prototype.setBoolean = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AssetCategory} returns this
 */
proto.web.communitygames.AssetCategory.prototype.clearBoolean = function() {
  return this.setBoolean(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AssetCategory.prototype.hasBoolean = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.Playground.repeatedFields_ = [6,17];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.Playground.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.Playground.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.Playground} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Playground.toObject = function(includeInstance, msg) {
  var f, obj = {
    playgroundid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprinttype: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    mutatorsList: jspb.Message.toObjectList(msg.getMutatorsList(),
    proto.web.communitygames.Mutator.toObject, includeInstance),
    maprotation: (f = msg.getMaprotation()) && proto.web.communitygames.MapRotation.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 8, 0),
    checksum: jspb.Message.getFieldWithDefault(msg, 9, ""),
    secret: jspb.Message.getFieldWithDefault(msg, 10, ""),
    createdat: (f = msg.getCreatedat()) && proto.web.communitygames.Timestamp.toObject(includeInstance, f),
    updatedat: (f = msg.getUpdatedat()) && proto.web.communitygames.Timestamp.toObject(includeInstance, f),
    serversettings: (f = msg.getServersettings()) && proto.web.communitygames.GameServerSettings.toObject(includeInstance, f),
    owner: (f = msg.getOwner()) && proto.web.communitygames.PlayerInfo.toObject(includeInstance, f),
    restrictions: (f = msg.getRestrictions()) && proto.web.communitygames.Restrictions.toObject(includeInstance, f),
    modrules: (f = msg.getModrules()) && proto.web.communitygames.OriginalModRules.toObject(includeInstance, f),
    assetcategoriesList: jspb.Message.toObjectList(msg.getAssetcategoriesList(),
    proto.web.communitygames.AssetCategory.toObject, includeInstance),
    teamcomposition: (f = msg.getTeamcomposition()) && proto.web.communitygames.TeamComposition.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.Playground}
 */
proto.web.communitygames.Playground.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.Playground;
  return proto.web.communitygames.Playground.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.Playground} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.Playground}
 */
proto.web.communitygames.Playground.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaygroundid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprinttype(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = new proto.web.communitygames.Mutator;
      reader.readMessage(value,proto.web.communitygames.Mutator.deserializeBinaryFromReader);
      msg.addMutators(value);
      break;
    case 7:
      var value = new proto.web.communitygames.MapRotation;
      reader.readMessage(value,proto.web.communitygames.MapRotation.deserializeBinaryFromReader);
      msg.setMaprotation(value);
      break;
    case 8:
      var value = /** @type {!proto.web.communitygames.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setChecksum(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    case 11:
      var value = new proto.web.communitygames.Timestamp;
      reader.readMessage(value,proto.web.communitygames.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedat(value);
      break;
    case 12:
      var value = new proto.web.communitygames.Timestamp;
      reader.readMessage(value,proto.web.communitygames.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedat(value);
      break;
    case 13:
      var value = new proto.web.communitygames.GameServerSettings;
      reader.readMessage(value,proto.web.communitygames.GameServerSettings.deserializeBinaryFromReader);
      msg.setServersettings(value);
      break;
    case 14:
      var value = new proto.web.communitygames.PlayerInfo;
      reader.readMessage(value,proto.web.communitygames.PlayerInfo.deserializeBinaryFromReader);
      msg.setOwner(value);
      break;
    case 15:
      var value = new proto.web.communitygames.Restrictions;
      reader.readMessage(value,proto.web.communitygames.Restrictions.deserializeBinaryFromReader);
      msg.setRestrictions(value);
      break;
    case 16:
      var value = new proto.web.communitygames.OriginalModRules;
      reader.readMessage(value,proto.web.communitygames.OriginalModRules.deserializeBinaryFromReader);
      msg.setModrules(value);
      break;
    case 17:
      var value = new proto.web.communitygames.AssetCategory;
      reader.readMessage(value,proto.web.communitygames.AssetCategory.deserializeBinaryFromReader);
      msg.addAssetcategories(value);
      break;
    case 18:
      var value = new proto.web.communitygames.TeamComposition;
      reader.readMessage(value,proto.web.communitygames.TeamComposition.deserializeBinaryFromReader);
      msg.setTeamcomposition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.Playground.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.Playground.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.Playground} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Playground.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaygroundid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprinttype();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMutatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.web.communitygames.Mutator.serializeBinaryToWriter
    );
  }
  f = message.getMaprotation();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.web.communitygames.MapRotation.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getChecksum();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCreatedat();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.web.communitygames.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedat();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.web.communitygames.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getServersettings();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.web.communitygames.GameServerSettings.serializeBinaryToWriter
    );
  }
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.web.communitygames.PlayerInfo.serializeBinaryToWriter
    );
  }
  f = message.getRestrictions();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.web.communitygames.Restrictions.serializeBinaryToWriter
    );
  }
  f = message.getModrules();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.web.communitygames.OriginalModRules.serializeBinaryToWriter
    );
  }
  f = message.getAssetcategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      proto.web.communitygames.AssetCategory.serializeBinaryToWriter
    );
  }
  f = message.getTeamcomposition();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.web.communitygames.TeamComposition.serializeBinaryToWriter
    );
  }
};


/**
 * optional string playgroundId = 1;
 * @return {string}
 */
proto.web.communitygames.Playground.prototype.getPlaygroundid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.Playground} returns this
 */
proto.web.communitygames.Playground.prototype.setPlaygroundid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintType = 3;
 * @return {string}
 */
proto.web.communitygames.Playground.prototype.getBlueprinttype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.Playground} returns this
 */
proto.web.communitygames.Playground.prototype.setBlueprinttype = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.web.communitygames.Playground.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.Playground} returns this
 */
proto.web.communitygames.Playground.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.web.communitygames.Playground.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.Playground} returns this
 */
proto.web.communitygames.Playground.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated Mutator mutators = 6;
 * @return {!Array<!proto.web.communitygames.Mutator>}
 */
proto.web.communitygames.Playground.prototype.getMutatorsList = function() {
  return /** @type{!Array<!proto.web.communitygames.Mutator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.Mutator, 6));
};


/**
 * @param {!Array<!proto.web.communitygames.Mutator>} value
 * @return {!proto.web.communitygames.Playground} returns this
*/
proto.web.communitygames.Playground.prototype.setMutatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.web.communitygames.Mutator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.Mutator}
 */
proto.web.communitygames.Playground.prototype.addMutators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.web.communitygames.Mutator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.Playground} returns this
 */
proto.web.communitygames.Playground.prototype.clearMutatorsList = function() {
  return this.setMutatorsList([]);
};


/**
 * optional MapRotation mapRotation = 7;
 * @return {?proto.web.communitygames.MapRotation}
 */
proto.web.communitygames.Playground.prototype.getMaprotation = function() {
  return /** @type{?proto.web.communitygames.MapRotation} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MapRotation, 7));
};


/**
 * @param {?proto.web.communitygames.MapRotation|undefined} value
 * @return {!proto.web.communitygames.Playground} returns this
*/
proto.web.communitygames.Playground.prototype.setMaprotation = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.Playground} returns this
 */
proto.web.communitygames.Playground.prototype.clearMaprotation = function() {
  return this.setMaprotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.Playground.prototype.hasMaprotation = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional State state = 8;
 * @return {!proto.web.communitygames.State}
 */
proto.web.communitygames.Playground.prototype.getState = function() {
  return /** @type {!proto.web.communitygames.State} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.web.communitygames.State} value
 * @return {!proto.web.communitygames.Playground} returns this
 */
proto.web.communitygames.Playground.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string checksum = 9;
 * @return {string}
 */
proto.web.communitygames.Playground.prototype.getChecksum = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.Playground} returns this
 */
proto.web.communitygames.Playground.prototype.setChecksum = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string secret = 10;
 * @return {string}
 */
proto.web.communitygames.Playground.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.Playground} returns this
 */
proto.web.communitygames.Playground.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional Timestamp createdAt = 11;
 * @return {?proto.web.communitygames.Timestamp}
 */
proto.web.communitygames.Playground.prototype.getCreatedat = function() {
  return /** @type{?proto.web.communitygames.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.Timestamp, 11));
};


/**
 * @param {?proto.web.communitygames.Timestamp|undefined} value
 * @return {!proto.web.communitygames.Playground} returns this
*/
proto.web.communitygames.Playground.prototype.setCreatedat = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.Playground} returns this
 */
proto.web.communitygames.Playground.prototype.clearCreatedat = function() {
  return this.setCreatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.Playground.prototype.hasCreatedat = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Timestamp updatedAt = 12;
 * @return {?proto.web.communitygames.Timestamp}
 */
proto.web.communitygames.Playground.prototype.getUpdatedat = function() {
  return /** @type{?proto.web.communitygames.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.Timestamp, 12));
};


/**
 * @param {?proto.web.communitygames.Timestamp|undefined} value
 * @return {!proto.web.communitygames.Playground} returns this
*/
proto.web.communitygames.Playground.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.Playground} returns this
 */
proto.web.communitygames.Playground.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.Playground.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional GameServerSettings serverSettings = 13;
 * @return {?proto.web.communitygames.GameServerSettings}
 */
proto.web.communitygames.Playground.prototype.getServersettings = function() {
  return /** @type{?proto.web.communitygames.GameServerSettings} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.GameServerSettings, 13));
};


/**
 * @param {?proto.web.communitygames.GameServerSettings|undefined} value
 * @return {!proto.web.communitygames.Playground} returns this
*/
proto.web.communitygames.Playground.prototype.setServersettings = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.Playground} returns this
 */
proto.web.communitygames.Playground.prototype.clearServersettings = function() {
  return this.setServersettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.Playground.prototype.hasServersettings = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional PlayerInfo owner = 14;
 * @return {?proto.web.communitygames.PlayerInfo}
 */
proto.web.communitygames.Playground.prototype.getOwner = function() {
  return /** @type{?proto.web.communitygames.PlayerInfo} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.PlayerInfo, 14));
};


/**
 * @param {?proto.web.communitygames.PlayerInfo|undefined} value
 * @return {!proto.web.communitygames.Playground} returns this
*/
proto.web.communitygames.Playground.prototype.setOwner = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.Playground} returns this
 */
proto.web.communitygames.Playground.prototype.clearOwner = function() {
  return this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.Playground.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Restrictions restrictions = 15;
 * @return {?proto.web.communitygames.Restrictions}
 */
proto.web.communitygames.Playground.prototype.getRestrictions = function() {
  return /** @type{?proto.web.communitygames.Restrictions} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.Restrictions, 15));
};


/**
 * @param {?proto.web.communitygames.Restrictions|undefined} value
 * @return {!proto.web.communitygames.Playground} returns this
*/
proto.web.communitygames.Playground.prototype.setRestrictions = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.Playground} returns this
 */
proto.web.communitygames.Playground.prototype.clearRestrictions = function() {
  return this.setRestrictions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.Playground.prototype.hasRestrictions = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional OriginalModRules modRules = 16;
 * @return {?proto.web.communitygames.OriginalModRules}
 */
proto.web.communitygames.Playground.prototype.getModrules = function() {
  return /** @type{?proto.web.communitygames.OriginalModRules} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.OriginalModRules, 16));
};


/**
 * @param {?proto.web.communitygames.OriginalModRules|undefined} value
 * @return {!proto.web.communitygames.Playground} returns this
*/
proto.web.communitygames.Playground.prototype.setModrules = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.Playground} returns this
 */
proto.web.communitygames.Playground.prototype.clearModrules = function() {
  return this.setModrules(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.Playground.prototype.hasModrules = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * repeated AssetCategory assetCategories = 17;
 * @return {!Array<!proto.web.communitygames.AssetCategory>}
 */
proto.web.communitygames.Playground.prototype.getAssetcategoriesList = function() {
  return /** @type{!Array<!proto.web.communitygames.AssetCategory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.AssetCategory, 17));
};


/**
 * @param {!Array<!proto.web.communitygames.AssetCategory>} value
 * @return {!proto.web.communitygames.Playground} returns this
*/
proto.web.communitygames.Playground.prototype.setAssetcategoriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.web.communitygames.AssetCategory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.AssetCategory}
 */
proto.web.communitygames.Playground.prototype.addAssetcategories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.web.communitygames.AssetCategory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.Playground} returns this
 */
proto.web.communitygames.Playground.prototype.clearAssetcategoriesList = function() {
  return this.setAssetcategoriesList([]);
};


/**
 * optional TeamComposition teamComposition = 18;
 * @return {?proto.web.communitygames.TeamComposition}
 */
proto.web.communitygames.Playground.prototype.getTeamcomposition = function() {
  return /** @type{?proto.web.communitygames.TeamComposition} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.TeamComposition, 18));
};


/**
 * @param {?proto.web.communitygames.TeamComposition|undefined} value
 * @return {!proto.web.communitygames.Playground} returns this
*/
proto.web.communitygames.Playground.prototype.setTeamcomposition = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.Playground} returns this
 */
proto.web.communitygames.Playground.prototype.clearTeamcomposition = function() {
  return this.setTeamcomposition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.Playground.prototype.hasTeamcomposition = function() {
  return jspb.Message.getField(this, 18) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.ListPlaygroundsByOwnerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.ListPlaygroundsByOwnerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.ListPlaygroundsByOwnerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.ListPlaygroundsByOwnerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blueprinttype: jspb.Message.getFieldWithDefault(msg, 1, ""),
    protocolversion: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.ListPlaygroundsByOwnerRequest}
 */
proto.web.communitygames.ListPlaygroundsByOwnerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.ListPlaygroundsByOwnerRequest;
  return proto.web.communitygames.ListPlaygroundsByOwnerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.ListPlaygroundsByOwnerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.ListPlaygroundsByOwnerRequest}
 */
proto.web.communitygames.ListPlaygroundsByOwnerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprinttype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocolversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.ListPlaygroundsByOwnerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.ListPlaygroundsByOwnerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.ListPlaygroundsByOwnerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.ListPlaygroundsByOwnerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlueprinttype();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProtocolversion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string blueprintType = 1;
 * @return {string}
 */
proto.web.communitygames.ListPlaygroundsByOwnerRequest.prototype.getBlueprinttype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.ListPlaygroundsByOwnerRequest} returns this
 */
proto.web.communitygames.ListPlaygroundsByOwnerRequest.prototype.setBlueprinttype = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string protocolVersion = 2;
 * @return {string}
 */
proto.web.communitygames.ListPlaygroundsByOwnerRequest.prototype.getProtocolversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.ListPlaygroundsByOwnerRequest} returns this
 */
proto.web.communitygames.ListPlaygroundsByOwnerRequest.prototype.setProtocolversion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.GetConstraintsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.GetConstraintsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.GetConstraintsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetConstraintsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.GetConstraintsRequest}
 */
proto.web.communitygames.GetConstraintsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.GetConstraintsRequest;
  return proto.web.communitygames.GetConstraintsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.GetConstraintsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.GetConstraintsRequest}
 */
proto.web.communitygames.GetConstraintsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.GetConstraintsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.GetConstraintsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.GetConstraintsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetConstraintsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.GetBlueprintsByIdRequest.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.GetBlueprintsByIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.GetBlueprintsByIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.GetBlueprintsByIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetBlueprintsByIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blueprintidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    includefieldsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.GetBlueprintsByIdRequest}
 */
proto.web.communitygames.GetBlueprintsByIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.GetBlueprintsByIdRequest;
  return proto.web.communitygames.GetBlueprintsByIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.GetBlueprintsByIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.GetBlueprintsByIdRequest}
 */
proto.web.communitygames.GetBlueprintsByIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addBlueprintids(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.web.communitygames.IncludeFields>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addIncludefields(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.GetBlueprintsByIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.GetBlueprintsByIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.GetBlueprintsByIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetBlueprintsByIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlueprintidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getIncludefieldsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
};


/**
 * repeated string blueprintIds = 1;
 * @return {!Array<string>}
 */
proto.web.communitygames.GetBlueprintsByIdRequest.prototype.getBlueprintidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.web.communitygames.GetBlueprintsByIdRequest} returns this
 */
proto.web.communitygames.GetBlueprintsByIdRequest.prototype.setBlueprintidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.GetBlueprintsByIdRequest} returns this
 */
proto.web.communitygames.GetBlueprintsByIdRequest.prototype.addBlueprintids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.GetBlueprintsByIdRequest} returns this
 */
proto.web.communitygames.GetBlueprintsByIdRequest.prototype.clearBlueprintidsList = function() {
  return this.setBlueprintidsList([]);
};


/**
 * repeated IncludeFields includeFields = 2;
 * @return {!Array<!proto.web.communitygames.IncludeFields>}
 */
proto.web.communitygames.GetBlueprintsByIdRequest.prototype.getIncludefieldsList = function() {
  return /** @type {!Array<!proto.web.communitygames.IncludeFields>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.web.communitygames.IncludeFields>} value
 * @return {!proto.web.communitygames.GetBlueprintsByIdRequest} returns this
 */
proto.web.communitygames.GetBlueprintsByIdRequest.prototype.setIncludefieldsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.web.communitygames.IncludeFields} value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.GetBlueprintsByIdRequest} returns this
 */
proto.web.communitygames.GetBlueprintsByIdRequest.prototype.addIncludefields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.GetBlueprintsByIdRequest} returns this
 */
proto.web.communitygames.GetBlueprintsByIdRequest.prototype.clearIncludefieldsList = function() {
  return this.setIncludefieldsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.GlobalConstraints.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.GlobalConstraints.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.GlobalConstraints} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GlobalConstraints.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxplaygroundsperplayer: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxgameserversperplayer: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxfollowedhostslistsize: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.GlobalConstraints}
 */
proto.web.communitygames.GlobalConstraints.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.GlobalConstraints;
  return proto.web.communitygames.GlobalConstraints.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.GlobalConstraints} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.GlobalConstraints}
 */
proto.web.communitygames.GlobalConstraints.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxplaygroundsperplayer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxgameserversperplayer(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxfollowedhostslistsize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.GlobalConstraints.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.GlobalConstraints.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.GlobalConstraints} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GlobalConstraints.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxplaygroundsperplayer();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMaxgameserversperplayer();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMaxfollowedhostslistsize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 maxPlaygroundsPerPlayer = 1;
 * @return {number}
 */
proto.web.communitygames.GlobalConstraints.prototype.getMaxplaygroundsperplayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.GlobalConstraints} returns this
 */
proto.web.communitygames.GlobalConstraints.prototype.setMaxplaygroundsperplayer = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 maxGameServersPerPlayer = 2;
 * @return {number}
 */
proto.web.communitygames.GlobalConstraints.prototype.getMaxgameserversperplayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.GlobalConstraints} returns this
 */
proto.web.communitygames.GlobalConstraints.prototype.setMaxgameserversperplayer = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 maxFollowedHostsListSize = 3;
 * @return {number}
 */
proto.web.communitygames.GlobalConstraints.prototype.getMaxfollowedhostslistsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.GlobalConstraints} returns this
 */
proto.web.communitygames.GlobalConstraints.prototype.setMaxfollowedhostslistsize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.IntRange.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.IntRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.IntRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.IntRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    minvalue: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxvalue: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.IntRange}
 */
proto.web.communitygames.IntRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.IntRange;
  return proto.web.communitygames.IntRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.IntRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.IntRange}
 */
proto.web.communitygames.IntRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinvalue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.IntRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.IntRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.IntRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.IntRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinvalue();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMaxvalue();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 minValue = 1;
 * @return {number}
 */
proto.web.communitygames.IntRange.prototype.getMinvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.IntRange} returns this
 */
proto.web.communitygames.IntRange.prototype.setMinvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 maxValue = 2;
 * @return {number}
 */
proto.web.communitygames.IntRange.prototype.getMaxvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.IntRange} returns this
 */
proto.web.communitygames.IntRange.prototype.setMaxvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AvailableIntValues.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AvailableIntValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AvailableIntValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableIntValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    range: (f = msg.getRange()) && proto.web.communitygames.IntRange.toObject(includeInstance, f),
    sparsevalues: (f = msg.getSparsevalues()) && proto.web.communitygames.SparseIntEntity.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AvailableIntValues}
 */
proto.web.communitygames.AvailableIntValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AvailableIntValues;
  return proto.web.communitygames.AvailableIntValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AvailableIntValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AvailableIntValues}
 */
proto.web.communitygames.AvailableIntValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.IntRange;
      reader.readMessage(value,proto.web.communitygames.IntRange.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 2:
      var value = new proto.web.communitygames.SparseIntEntity;
      reader.readMessage(value,proto.web.communitygames.SparseIntEntity.deserializeBinaryFromReader);
      msg.setSparsevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AvailableIntValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AvailableIntValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AvailableIntValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableIntValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.IntRange.serializeBinaryToWriter
    );
  }
  f = message.getSparsevalues();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.SparseIntEntity.serializeBinaryToWriter
    );
  }
};


/**
 * optional IntRange range = 1;
 * @return {?proto.web.communitygames.IntRange}
 */
proto.web.communitygames.AvailableIntValues.prototype.getRange = function() {
  return /** @type{?proto.web.communitygames.IntRange} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.IntRange, 1));
};


/**
 * @param {?proto.web.communitygames.IntRange|undefined} value
 * @return {!proto.web.communitygames.AvailableIntValues} returns this
*/
proto.web.communitygames.AvailableIntValues.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableIntValues} returns this
 */
proto.web.communitygames.AvailableIntValues.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableIntValues.prototype.hasRange = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SparseIntEntity sparseValues = 2;
 * @return {?proto.web.communitygames.SparseIntEntity}
 */
proto.web.communitygames.AvailableIntValues.prototype.getSparsevalues = function() {
  return /** @type{?proto.web.communitygames.SparseIntEntity} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.SparseIntEntity, 2));
};


/**
 * @param {?proto.web.communitygames.SparseIntEntity|undefined} value
 * @return {!proto.web.communitygames.AvailableIntValues} returns this
*/
proto.web.communitygames.AvailableIntValues.prototype.setSparsevalues = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableIntValues} returns this
 */
proto.web.communitygames.AvailableIntValues.prototype.clearSparsevalues = function() {
  return this.setSparsevalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableIntValues.prototype.hasSparsevalues = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AvailableIntValue.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AvailableIntValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AvailableIntValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableIntValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultvalue: jspb.Message.getFieldWithDefault(msg, 1, 0),
    availablevalues: (f = msg.getAvailablevalues()) && proto.web.communitygames.AvailableIntValues.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AvailableIntValue}
 */
proto.web.communitygames.AvailableIntValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AvailableIntValue;
  return proto.web.communitygames.AvailableIntValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AvailableIntValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AvailableIntValue}
 */
proto.web.communitygames.AvailableIntValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefaultvalue(value);
      break;
    case 2:
      var value = new proto.web.communitygames.AvailableIntValues;
      reader.readMessage(value,proto.web.communitygames.AvailableIntValues.deserializeBinaryFromReader);
      msg.setAvailablevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AvailableIntValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AvailableIntValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AvailableIntValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableIntValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultvalue();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAvailablevalues();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.AvailableIntValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 defaultValue = 1;
 * @return {number}
 */
proto.web.communitygames.AvailableIntValue.prototype.getDefaultvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.AvailableIntValue} returns this
 */
proto.web.communitygames.AvailableIntValue.prototype.setDefaultvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional AvailableIntValues availableValues = 2;
 * @return {?proto.web.communitygames.AvailableIntValues}
 */
proto.web.communitygames.AvailableIntValue.prototype.getAvailablevalues = function() {
  return /** @type{?proto.web.communitygames.AvailableIntValues} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AvailableIntValues, 2));
};


/**
 * @param {?proto.web.communitygames.AvailableIntValues|undefined} value
 * @return {!proto.web.communitygames.AvailableIntValue} returns this
*/
proto.web.communitygames.AvailableIntValue.prototype.setAvailablevalues = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableIntValue} returns this
 */
proto.web.communitygames.AvailableIntValue.prototype.clearAvailablevalues = function() {
  return this.setAvailablevalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableIntValue.prototype.hasAvailablevalues = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.SparseFloatValues.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.SparseFloatValues.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.SparseFloatValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.SparseFloatValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.SparseFloatValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuesList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.SparseFloatValues}
 */
proto.web.communitygames.SparseFloatValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.SparseFloatValues;
  return proto.web.communitygames.SparseFloatValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.SparseFloatValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.SparseFloatValues}
 */
proto.web.communitygames.SparseFloatValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addValues(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.SparseFloatValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.SparseFloatValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.SparseFloatValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.SparseFloatValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
};


/**
 * repeated float values = 1;
 * @return {!Array<number>}
 */
proto.web.communitygames.SparseFloatValues.prototype.getValuesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.web.communitygames.SparseFloatValues} returns this
 */
proto.web.communitygames.SparseFloatValues.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.SparseFloatValues} returns this
 */
proto.web.communitygames.SparseFloatValues.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.SparseFloatValues} returns this
 */
proto.web.communitygames.SparseFloatValues.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.FloatRange.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.FloatRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.FloatRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.FloatRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    minvalue: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    maxvalue: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.FloatRange}
 */
proto.web.communitygames.FloatRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.FloatRange;
  return proto.web.communitygames.FloatRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.FloatRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.FloatRange}
 */
proto.web.communitygames.FloatRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinvalue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMaxvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.FloatRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.FloatRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.FloatRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.FloatRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinvalue();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getMaxvalue();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float minValue = 1;
 * @return {number}
 */
proto.web.communitygames.FloatRange.prototype.getMinvalue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.FloatRange} returns this
 */
proto.web.communitygames.FloatRange.prototype.setMinvalue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float maxValue = 2;
 * @return {number}
 */
proto.web.communitygames.FloatRange.prototype.getMaxvalue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.FloatRange} returns this
 */
proto.web.communitygames.FloatRange.prototype.setMaxvalue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AvailableFloatValues.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AvailableFloatValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AvailableFloatValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableFloatValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    range: (f = msg.getRange()) && proto.web.communitygames.FloatRange.toObject(includeInstance, f),
    sparsevalues: (f = msg.getSparsevalues()) && proto.web.communitygames.SparseFloatValues.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AvailableFloatValues}
 */
proto.web.communitygames.AvailableFloatValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AvailableFloatValues;
  return proto.web.communitygames.AvailableFloatValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AvailableFloatValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AvailableFloatValues}
 */
proto.web.communitygames.AvailableFloatValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.FloatRange;
      reader.readMessage(value,proto.web.communitygames.FloatRange.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 2:
      var value = new proto.web.communitygames.SparseFloatValues;
      reader.readMessage(value,proto.web.communitygames.SparseFloatValues.deserializeBinaryFromReader);
      msg.setSparsevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AvailableFloatValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AvailableFloatValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AvailableFloatValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableFloatValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.FloatRange.serializeBinaryToWriter
    );
  }
  f = message.getSparsevalues();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.SparseFloatValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional FloatRange range = 1;
 * @return {?proto.web.communitygames.FloatRange}
 */
proto.web.communitygames.AvailableFloatValues.prototype.getRange = function() {
  return /** @type{?proto.web.communitygames.FloatRange} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.FloatRange, 1));
};


/**
 * @param {?proto.web.communitygames.FloatRange|undefined} value
 * @return {!proto.web.communitygames.AvailableFloatValues} returns this
*/
proto.web.communitygames.AvailableFloatValues.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableFloatValues} returns this
 */
proto.web.communitygames.AvailableFloatValues.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableFloatValues.prototype.hasRange = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SparseFloatValues sparseValues = 2;
 * @return {?proto.web.communitygames.SparseFloatValues}
 */
proto.web.communitygames.AvailableFloatValues.prototype.getSparsevalues = function() {
  return /** @type{?proto.web.communitygames.SparseFloatValues} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.SparseFloatValues, 2));
};


/**
 * @param {?proto.web.communitygames.SparseFloatValues|undefined} value
 * @return {!proto.web.communitygames.AvailableFloatValues} returns this
*/
proto.web.communitygames.AvailableFloatValues.prototype.setSparsevalues = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableFloatValues} returns this
 */
proto.web.communitygames.AvailableFloatValues.prototype.clearSparsevalues = function() {
  return this.setSparsevalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableFloatValues.prototype.hasSparsevalues = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AvailableMutatorFloatValues.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AvailableMutatorFloatValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AvailableMutatorFloatValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableMutatorFloatValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    mutator: (f = msg.getMutator()) && proto.web.communitygames.MutatorFloat.toObject(includeInstance, f),
    availablevalues: (f = msg.getAvailablevalues()) && proto.web.communitygames.AvailableFloatValues.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AvailableMutatorFloatValues}
 */
proto.web.communitygames.AvailableMutatorFloatValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AvailableMutatorFloatValues;
  return proto.web.communitygames.AvailableMutatorFloatValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AvailableMutatorFloatValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AvailableMutatorFloatValues}
 */
proto.web.communitygames.AvailableMutatorFloatValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.MutatorFloat;
      reader.readMessage(value,proto.web.communitygames.MutatorFloat.deserializeBinaryFromReader);
      msg.setMutator(value);
      break;
    case 2:
      var value = new proto.web.communitygames.AvailableFloatValues;
      reader.readMessage(value,proto.web.communitygames.AvailableFloatValues.deserializeBinaryFromReader);
      msg.setAvailablevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AvailableMutatorFloatValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AvailableMutatorFloatValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AvailableMutatorFloatValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableMutatorFloatValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMutator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.MutatorFloat.serializeBinaryToWriter
    );
  }
  f = message.getAvailablevalues();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.AvailableFloatValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional MutatorFloat mutator = 1;
 * @return {?proto.web.communitygames.MutatorFloat}
 */
proto.web.communitygames.AvailableMutatorFloatValues.prototype.getMutator = function() {
  return /** @type{?proto.web.communitygames.MutatorFloat} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MutatorFloat, 1));
};


/**
 * @param {?proto.web.communitygames.MutatorFloat|undefined} value
 * @return {!proto.web.communitygames.AvailableMutatorFloatValues} returns this
*/
proto.web.communitygames.AvailableMutatorFloatValues.prototype.setMutator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMutatorFloatValues} returns this
 */
proto.web.communitygames.AvailableMutatorFloatValues.prototype.clearMutator = function() {
  return this.setMutator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMutatorFloatValues.prototype.hasMutator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AvailableFloatValues availableValues = 2;
 * @return {?proto.web.communitygames.AvailableFloatValues}
 */
proto.web.communitygames.AvailableMutatorFloatValues.prototype.getAvailablevalues = function() {
  return /** @type{?proto.web.communitygames.AvailableFloatValues} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AvailableFloatValues, 2));
};


/**
 * @param {?proto.web.communitygames.AvailableFloatValues|undefined} value
 * @return {!proto.web.communitygames.AvailableMutatorFloatValues} returns this
*/
proto.web.communitygames.AvailableMutatorFloatValues.prototype.setAvailablevalues = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMutatorFloatValues} returns this
 */
proto.web.communitygames.AvailableMutatorFloatValues.prototype.clearAvailablevalues = function() {
  return this.setAvailablevalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMutatorFloatValues.prototype.hasAvailablevalues = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AvailableMutatorIntValues.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AvailableMutatorIntValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AvailableMutatorIntValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableMutatorIntValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    mutator: (f = msg.getMutator()) && proto.web.communitygames.MutatorInt.toObject(includeInstance, f),
    availablevalues: (f = msg.getAvailablevalues()) && proto.web.communitygames.AvailableIntValues.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AvailableMutatorIntValues}
 */
proto.web.communitygames.AvailableMutatorIntValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AvailableMutatorIntValues;
  return proto.web.communitygames.AvailableMutatorIntValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AvailableMutatorIntValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AvailableMutatorIntValues}
 */
proto.web.communitygames.AvailableMutatorIntValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.MutatorInt;
      reader.readMessage(value,proto.web.communitygames.MutatorInt.deserializeBinaryFromReader);
      msg.setMutator(value);
      break;
    case 2:
      var value = new proto.web.communitygames.AvailableIntValues;
      reader.readMessage(value,proto.web.communitygames.AvailableIntValues.deserializeBinaryFromReader);
      msg.setAvailablevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AvailableMutatorIntValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AvailableMutatorIntValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AvailableMutatorIntValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableMutatorIntValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMutator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.MutatorInt.serializeBinaryToWriter
    );
  }
  f = message.getAvailablevalues();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.AvailableIntValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional MutatorInt mutator = 1;
 * @return {?proto.web.communitygames.MutatorInt}
 */
proto.web.communitygames.AvailableMutatorIntValues.prototype.getMutator = function() {
  return /** @type{?proto.web.communitygames.MutatorInt} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MutatorInt, 1));
};


/**
 * @param {?proto.web.communitygames.MutatorInt|undefined} value
 * @return {!proto.web.communitygames.AvailableMutatorIntValues} returns this
*/
proto.web.communitygames.AvailableMutatorIntValues.prototype.setMutator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMutatorIntValues} returns this
 */
proto.web.communitygames.AvailableMutatorIntValues.prototype.clearMutator = function() {
  return this.setMutator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMutatorIntValues.prototype.hasMutator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AvailableIntValues availableValues = 2;
 * @return {?proto.web.communitygames.AvailableIntValues}
 */
proto.web.communitygames.AvailableMutatorIntValues.prototype.getAvailablevalues = function() {
  return /** @type{?proto.web.communitygames.AvailableIntValues} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AvailableIntValues, 2));
};


/**
 * @param {?proto.web.communitygames.AvailableIntValues|undefined} value
 * @return {!proto.web.communitygames.AvailableMutatorIntValues} returns this
*/
proto.web.communitygames.AvailableMutatorIntValues.prototype.setAvailablevalues = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMutatorIntValues} returns this
 */
proto.web.communitygames.AvailableMutatorIntValues.prototype.clearAvailablevalues = function() {
  return this.setAvailablevalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMutatorIntValues.prototype.hasAvailablevalues = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AvailableMutatorSparseIntValues.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AvailableMutatorSparseIntValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AvailableMutatorSparseIntValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableMutatorSparseIntValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    mutator: (f = msg.getMutator()) && proto.web.communitygames.MutatorSparseInt.toObject(includeInstance, f),
    availablevalues: (f = msg.getAvailablevalues()) && proto.web.communitygames.AvailableIntValues.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AvailableMutatorSparseIntValues}
 */
proto.web.communitygames.AvailableMutatorSparseIntValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AvailableMutatorSparseIntValues;
  return proto.web.communitygames.AvailableMutatorSparseIntValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AvailableMutatorSparseIntValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AvailableMutatorSparseIntValues}
 */
proto.web.communitygames.AvailableMutatorSparseIntValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.MutatorSparseInt;
      reader.readMessage(value,proto.web.communitygames.MutatorSparseInt.deserializeBinaryFromReader);
      msg.setMutator(value);
      break;
    case 2:
      var value = new proto.web.communitygames.AvailableIntValues;
      reader.readMessage(value,proto.web.communitygames.AvailableIntValues.deserializeBinaryFromReader);
      msg.setAvailablevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AvailableMutatorSparseIntValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AvailableMutatorSparseIntValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AvailableMutatorSparseIntValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableMutatorSparseIntValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMutator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.MutatorSparseInt.serializeBinaryToWriter
    );
  }
  f = message.getAvailablevalues();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.AvailableIntValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional MutatorSparseInt mutator = 1;
 * @return {?proto.web.communitygames.MutatorSparseInt}
 */
proto.web.communitygames.AvailableMutatorSparseIntValues.prototype.getMutator = function() {
  return /** @type{?proto.web.communitygames.MutatorSparseInt} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MutatorSparseInt, 1));
};


/**
 * @param {?proto.web.communitygames.MutatorSparseInt|undefined} value
 * @return {!proto.web.communitygames.AvailableMutatorSparseIntValues} returns this
*/
proto.web.communitygames.AvailableMutatorSparseIntValues.prototype.setMutator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMutatorSparseIntValues} returns this
 */
proto.web.communitygames.AvailableMutatorSparseIntValues.prototype.clearMutator = function() {
  return this.setMutator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMutatorSparseIntValues.prototype.hasMutator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AvailableIntValues availableValues = 2;
 * @return {?proto.web.communitygames.AvailableIntValues}
 */
proto.web.communitygames.AvailableMutatorSparseIntValues.prototype.getAvailablevalues = function() {
  return /** @type{?proto.web.communitygames.AvailableIntValues} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AvailableIntValues, 2));
};


/**
 * @param {?proto.web.communitygames.AvailableIntValues|undefined} value
 * @return {!proto.web.communitygames.AvailableMutatorSparseIntValues} returns this
*/
proto.web.communitygames.AvailableMutatorSparseIntValues.prototype.setAvailablevalues = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMutatorSparseIntValues} returns this
 */
proto.web.communitygames.AvailableMutatorSparseIntValues.prototype.clearAvailablevalues = function() {
  return this.setAvailablevalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMutatorSparseIntValues.prototype.hasAvailablevalues = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AvailableMutatorSparseFloatValues.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AvailableMutatorSparseFloatValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AvailableMutatorSparseFloatValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableMutatorSparseFloatValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    mutator: (f = msg.getMutator()) && proto.web.communitygames.MutatorSparseFloat.toObject(includeInstance, f),
    availablevalues: (f = msg.getAvailablevalues()) && proto.web.communitygames.AvailableFloatValues.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AvailableMutatorSparseFloatValues}
 */
proto.web.communitygames.AvailableMutatorSparseFloatValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AvailableMutatorSparseFloatValues;
  return proto.web.communitygames.AvailableMutatorSparseFloatValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AvailableMutatorSparseFloatValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AvailableMutatorSparseFloatValues}
 */
proto.web.communitygames.AvailableMutatorSparseFloatValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.MutatorSparseFloat;
      reader.readMessage(value,proto.web.communitygames.MutatorSparseFloat.deserializeBinaryFromReader);
      msg.setMutator(value);
      break;
    case 2:
      var value = new proto.web.communitygames.AvailableFloatValues;
      reader.readMessage(value,proto.web.communitygames.AvailableFloatValues.deserializeBinaryFromReader);
      msg.setAvailablevalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AvailableMutatorSparseFloatValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AvailableMutatorSparseFloatValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AvailableMutatorSparseFloatValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableMutatorSparseFloatValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMutator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.MutatorSparseFloat.serializeBinaryToWriter
    );
  }
  f = message.getAvailablevalues();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.AvailableFloatValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional MutatorSparseFloat mutator = 1;
 * @return {?proto.web.communitygames.MutatorSparseFloat}
 */
proto.web.communitygames.AvailableMutatorSparseFloatValues.prototype.getMutator = function() {
  return /** @type{?proto.web.communitygames.MutatorSparseFloat} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MutatorSparseFloat, 1));
};


/**
 * @param {?proto.web.communitygames.MutatorSparseFloat|undefined} value
 * @return {!proto.web.communitygames.AvailableMutatorSparseFloatValues} returns this
*/
proto.web.communitygames.AvailableMutatorSparseFloatValues.prototype.setMutator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMutatorSparseFloatValues} returns this
 */
proto.web.communitygames.AvailableMutatorSparseFloatValues.prototype.clearMutator = function() {
  return this.setMutator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMutatorSparseFloatValues.prototype.hasMutator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AvailableFloatValues availableValues = 2;
 * @return {?proto.web.communitygames.AvailableFloatValues}
 */
proto.web.communitygames.AvailableMutatorSparseFloatValues.prototype.getAvailablevalues = function() {
  return /** @type{?proto.web.communitygames.AvailableFloatValues} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AvailableFloatValues, 2));
};


/**
 * @param {?proto.web.communitygames.AvailableFloatValues|undefined} value
 * @return {!proto.web.communitygames.AvailableMutatorSparseFloatValues} returns this
*/
proto.web.communitygames.AvailableMutatorSparseFloatValues.prototype.setAvailablevalues = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMutatorSparseFloatValues} returns this
 */
proto.web.communitygames.AvailableMutatorSparseFloatValues.prototype.clearAvailablevalues = function() {
  return this.setAvailablevalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMutatorSparseFloatValues.prototype.hasAvailablevalues = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AvailableMutatorKind.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AvailableMutatorKind.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AvailableMutatorKind} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableMutatorKind.toObject = function(includeInstance, msg) {
  var f, obj = {
    mutatorboolean: (f = msg.getMutatorboolean()) && proto.web.communitygames.MutatorBoolean.toObject(includeInstance, f),
    mutatorstring: (f = msg.getMutatorstring()) && proto.web.communitygames.MutatorString.toObject(includeInstance, f),
    mutatorfloatvalues: (f = msg.getMutatorfloatvalues()) && proto.web.communitygames.AvailableMutatorFloatValues.toObject(includeInstance, f),
    mutatorintvalues: (f = msg.getMutatorintvalues()) && proto.web.communitygames.AvailableMutatorIntValues.toObject(includeInstance, f),
    mutatorsparseboolean: (f = msg.getMutatorsparseboolean()) && proto.web.communitygames.MutatorSparseBoolean.toObject(includeInstance, f),
    mutatorsparseintvalues: (f = msg.getMutatorsparseintvalues()) && proto.web.communitygames.AvailableMutatorSparseIntValues.toObject(includeInstance, f),
    mutatorsparsefloatvalues: (f = msg.getMutatorsparsefloatvalues()) && proto.web.communitygames.AvailableMutatorSparseFloatValues.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AvailableMutatorKind}
 */
proto.web.communitygames.AvailableMutatorKind.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AvailableMutatorKind;
  return proto.web.communitygames.AvailableMutatorKind.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AvailableMutatorKind} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AvailableMutatorKind}
 */
proto.web.communitygames.AvailableMutatorKind.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.MutatorBoolean;
      reader.readMessage(value,proto.web.communitygames.MutatorBoolean.deserializeBinaryFromReader);
      msg.setMutatorboolean(value);
      break;
    case 4:
      var value = new proto.web.communitygames.MutatorString;
      reader.readMessage(value,proto.web.communitygames.MutatorString.deserializeBinaryFromReader);
      msg.setMutatorstring(value);
      break;
    case 7:
      var value = new proto.web.communitygames.AvailableMutatorFloatValues;
      reader.readMessage(value,proto.web.communitygames.AvailableMutatorFloatValues.deserializeBinaryFromReader);
      msg.setMutatorfloatvalues(value);
      break;
    case 8:
      var value = new proto.web.communitygames.AvailableMutatorIntValues;
      reader.readMessage(value,proto.web.communitygames.AvailableMutatorIntValues.deserializeBinaryFromReader);
      msg.setMutatorintvalues(value);
      break;
    case 9:
      var value = new proto.web.communitygames.MutatorSparseBoolean;
      reader.readMessage(value,proto.web.communitygames.MutatorSparseBoolean.deserializeBinaryFromReader);
      msg.setMutatorsparseboolean(value);
      break;
    case 10:
      var value = new proto.web.communitygames.AvailableMutatorSparseIntValues;
      reader.readMessage(value,proto.web.communitygames.AvailableMutatorSparseIntValues.deserializeBinaryFromReader);
      msg.setMutatorsparseintvalues(value);
      break;
    case 11:
      var value = new proto.web.communitygames.AvailableMutatorSparseFloatValues;
      reader.readMessage(value,proto.web.communitygames.AvailableMutatorSparseFloatValues.deserializeBinaryFromReader);
      msg.setMutatorsparsefloatvalues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AvailableMutatorKind.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AvailableMutatorKind.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AvailableMutatorKind} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableMutatorKind.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMutatorboolean();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.MutatorBoolean.serializeBinaryToWriter
    );
  }
  f = message.getMutatorstring();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.web.communitygames.MutatorString.serializeBinaryToWriter
    );
  }
  f = message.getMutatorfloatvalues();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.web.communitygames.AvailableMutatorFloatValues.serializeBinaryToWriter
    );
  }
  f = message.getMutatorintvalues();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.web.communitygames.AvailableMutatorIntValues.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsparseboolean();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.web.communitygames.MutatorSparseBoolean.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsparseintvalues();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.web.communitygames.AvailableMutatorSparseIntValues.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsparsefloatvalues();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.web.communitygames.AvailableMutatorSparseFloatValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional MutatorBoolean mutatorBoolean = 1;
 * @return {?proto.web.communitygames.MutatorBoolean}
 */
proto.web.communitygames.AvailableMutatorKind.prototype.getMutatorboolean = function() {
  return /** @type{?proto.web.communitygames.MutatorBoolean} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MutatorBoolean, 1));
};


/**
 * @param {?proto.web.communitygames.MutatorBoolean|undefined} value
 * @return {!proto.web.communitygames.AvailableMutatorKind} returns this
*/
proto.web.communitygames.AvailableMutatorKind.prototype.setMutatorboolean = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMutatorKind} returns this
 */
proto.web.communitygames.AvailableMutatorKind.prototype.clearMutatorboolean = function() {
  return this.setMutatorboolean(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMutatorKind.prototype.hasMutatorboolean = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MutatorString mutatorString = 4;
 * @return {?proto.web.communitygames.MutatorString}
 */
proto.web.communitygames.AvailableMutatorKind.prototype.getMutatorstring = function() {
  return /** @type{?proto.web.communitygames.MutatorString} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MutatorString, 4));
};


/**
 * @param {?proto.web.communitygames.MutatorString|undefined} value
 * @return {!proto.web.communitygames.AvailableMutatorKind} returns this
*/
proto.web.communitygames.AvailableMutatorKind.prototype.setMutatorstring = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMutatorKind} returns this
 */
proto.web.communitygames.AvailableMutatorKind.prototype.clearMutatorstring = function() {
  return this.setMutatorstring(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMutatorKind.prototype.hasMutatorstring = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AvailableMutatorFloatValues mutatorFloatValues = 7;
 * @return {?proto.web.communitygames.AvailableMutatorFloatValues}
 */
proto.web.communitygames.AvailableMutatorKind.prototype.getMutatorfloatvalues = function() {
  return /** @type{?proto.web.communitygames.AvailableMutatorFloatValues} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AvailableMutatorFloatValues, 7));
};


/**
 * @param {?proto.web.communitygames.AvailableMutatorFloatValues|undefined} value
 * @return {!proto.web.communitygames.AvailableMutatorKind} returns this
*/
proto.web.communitygames.AvailableMutatorKind.prototype.setMutatorfloatvalues = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMutatorKind} returns this
 */
proto.web.communitygames.AvailableMutatorKind.prototype.clearMutatorfloatvalues = function() {
  return this.setMutatorfloatvalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMutatorKind.prototype.hasMutatorfloatvalues = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional AvailableMutatorIntValues mutatorIntValues = 8;
 * @return {?proto.web.communitygames.AvailableMutatorIntValues}
 */
proto.web.communitygames.AvailableMutatorKind.prototype.getMutatorintvalues = function() {
  return /** @type{?proto.web.communitygames.AvailableMutatorIntValues} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AvailableMutatorIntValues, 8));
};


/**
 * @param {?proto.web.communitygames.AvailableMutatorIntValues|undefined} value
 * @return {!proto.web.communitygames.AvailableMutatorKind} returns this
*/
proto.web.communitygames.AvailableMutatorKind.prototype.setMutatorintvalues = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMutatorKind} returns this
 */
proto.web.communitygames.AvailableMutatorKind.prototype.clearMutatorintvalues = function() {
  return this.setMutatorintvalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMutatorKind.prototype.hasMutatorintvalues = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional MutatorSparseBoolean mutatorSparseBoolean = 9;
 * @return {?proto.web.communitygames.MutatorSparseBoolean}
 */
proto.web.communitygames.AvailableMutatorKind.prototype.getMutatorsparseboolean = function() {
  return /** @type{?proto.web.communitygames.MutatorSparseBoolean} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MutatorSparseBoolean, 9));
};


/**
 * @param {?proto.web.communitygames.MutatorSparseBoolean|undefined} value
 * @return {!proto.web.communitygames.AvailableMutatorKind} returns this
*/
proto.web.communitygames.AvailableMutatorKind.prototype.setMutatorsparseboolean = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMutatorKind} returns this
 */
proto.web.communitygames.AvailableMutatorKind.prototype.clearMutatorsparseboolean = function() {
  return this.setMutatorsparseboolean(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMutatorKind.prototype.hasMutatorsparseboolean = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional AvailableMutatorSparseIntValues mutatorSparseIntValues = 10;
 * @return {?proto.web.communitygames.AvailableMutatorSparseIntValues}
 */
proto.web.communitygames.AvailableMutatorKind.prototype.getMutatorsparseintvalues = function() {
  return /** @type{?proto.web.communitygames.AvailableMutatorSparseIntValues} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AvailableMutatorSparseIntValues, 10));
};


/**
 * @param {?proto.web.communitygames.AvailableMutatorSparseIntValues|undefined} value
 * @return {!proto.web.communitygames.AvailableMutatorKind} returns this
*/
proto.web.communitygames.AvailableMutatorKind.prototype.setMutatorsparseintvalues = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMutatorKind} returns this
 */
proto.web.communitygames.AvailableMutatorKind.prototype.clearMutatorsparseintvalues = function() {
  return this.setMutatorsparseintvalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMutatorKind.prototype.hasMutatorsparseintvalues = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional AvailableMutatorSparseFloatValues mutatorSparseFloatValues = 11;
 * @return {?proto.web.communitygames.AvailableMutatorSparseFloatValues}
 */
proto.web.communitygames.AvailableMutatorKind.prototype.getMutatorsparsefloatvalues = function() {
  return /** @type{?proto.web.communitygames.AvailableMutatorSparseFloatValues} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AvailableMutatorSparseFloatValues, 11));
};


/**
 * @param {?proto.web.communitygames.AvailableMutatorSparseFloatValues|undefined} value
 * @return {!proto.web.communitygames.AvailableMutatorKind} returns this
*/
proto.web.communitygames.AvailableMutatorKind.prototype.setMutatorsparsefloatvalues = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMutatorKind} returns this
 */
proto.web.communitygames.AvailableMutatorKind.prototype.clearMutatorsparsefloatvalues = function() {
  return this.setMutatorsparsefloatvalues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMutatorKind.prototype.hasMutatorsparsefloatvalues = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AvailableMutator.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AvailableMutator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AvailableMutator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableMutator.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    category: jspb.Message.getFieldWithDefault(msg, 2, ""),
    kind: (f = msg.getKind()) && proto.web.communitygames.AvailableMutatorKind.toObject(includeInstance, f),
    metadata: (f = msg.getMetadata()) && proto.web.communitygames.Metadata.toObject(includeInstance, f),
    id: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AvailableMutator}
 */
proto.web.communitygames.AvailableMutator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AvailableMutator;
  return proto.web.communitygames.AvailableMutator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AvailableMutator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AvailableMutator}
 */
proto.web.communitygames.AvailableMutator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = new proto.web.communitygames.AvailableMutatorKind;
      reader.readMessage(value,proto.web.communitygames.AvailableMutatorKind.deserializeBinaryFromReader);
      msg.setKind(value);
      break;
    case 4:
      var value = new proto.web.communitygames.Metadata;
      reader.readMessage(value,proto.web.communitygames.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AvailableMutator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AvailableMutator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AvailableMutator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableMutator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKind();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.web.communitygames.AvailableMutatorKind.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.web.communitygames.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.web.communitygames.AvailableMutator.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.AvailableMutator} returns this
 */
proto.web.communitygames.AvailableMutator.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.web.communitygames.AvailableMutator.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.AvailableMutator} returns this
 */
proto.web.communitygames.AvailableMutator.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AvailableMutatorKind kind = 3;
 * @return {?proto.web.communitygames.AvailableMutatorKind}
 */
proto.web.communitygames.AvailableMutator.prototype.getKind = function() {
  return /** @type{?proto.web.communitygames.AvailableMutatorKind} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AvailableMutatorKind, 3));
};


/**
 * @param {?proto.web.communitygames.AvailableMutatorKind|undefined} value
 * @return {!proto.web.communitygames.AvailableMutator} returns this
*/
proto.web.communitygames.AvailableMutator.prototype.setKind = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMutator} returns this
 */
proto.web.communitygames.AvailableMutator.prototype.clearKind = function() {
  return this.setKind(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMutator.prototype.hasKind = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.web.communitygames.Metadata}
 */
proto.web.communitygames.AvailableMutator.prototype.getMetadata = function() {
  return /** @type{?proto.web.communitygames.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.Metadata, 4));
};


/**
 * @param {?proto.web.communitygames.Metadata|undefined} value
 * @return {!proto.web.communitygames.AvailableMutator} returns this
*/
proto.web.communitygames.AvailableMutator.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMutator} returns this
 */
proto.web.communitygames.AvailableMutator.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMutator.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string id = 5;
 * @return {string}
 */
proto.web.communitygames.AvailableMutator.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.AvailableMutator} returns this
 */
proto.web.communitygames.AvailableMutator.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.AvailableMapEntry.repeatedFields_ = [9,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AvailableMapEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AvailableMapEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AvailableMapEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableMapEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    levelname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    gamemode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    levellocation: jspb.Message.getFieldWithDefault(msg, 3, ""),
    gamesize: (f = msg.getGamesize()) && proto.web.communitygames.AvailableIntValue.toObject(includeInstance, f),
    rounds: (f = msg.getRounds()) && proto.web.communitygames.AvailableIntValue.toObject(includeInstance, f),
    preroundsize: (f = msg.getPreroundsize()) && proto.web.communitygames.AvailableIntValue.toObject(includeInstance, f),
    warmupsize: (f = msg.getWarmupsize()) && proto.web.communitygames.AvailableIntValue.toObject(includeInstance, f),
    allowedspectators: (f = msg.getAllowedspectators()) && proto.web.communitygames.AvailableIntValue.toObject(includeInstance, f),
    mutatorsList: jspb.Message.toObjectList(msg.getMutatorsList(),
    proto.web.communitygames.AvailableMutator.toObject, includeInstance),
    metadataList: jspb.Message.toObjectList(msg.getMetadataList(),
    proto.web.communitygames.Metadata.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AvailableMapEntry}
 */
proto.web.communitygames.AvailableMapEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AvailableMapEntry;
  return proto.web.communitygames.AvailableMapEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AvailableMapEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AvailableMapEntry}
 */
proto.web.communitygames.AvailableMapEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevelname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGamemode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevellocation(value);
      break;
    case 4:
      var value = new proto.web.communitygames.AvailableIntValue;
      reader.readMessage(value,proto.web.communitygames.AvailableIntValue.deserializeBinaryFromReader);
      msg.setGamesize(value);
      break;
    case 5:
      var value = new proto.web.communitygames.AvailableIntValue;
      reader.readMessage(value,proto.web.communitygames.AvailableIntValue.deserializeBinaryFromReader);
      msg.setRounds(value);
      break;
    case 6:
      var value = new proto.web.communitygames.AvailableIntValue;
      reader.readMessage(value,proto.web.communitygames.AvailableIntValue.deserializeBinaryFromReader);
      msg.setPreroundsize(value);
      break;
    case 7:
      var value = new proto.web.communitygames.AvailableIntValue;
      reader.readMessage(value,proto.web.communitygames.AvailableIntValue.deserializeBinaryFromReader);
      msg.setWarmupsize(value);
      break;
    case 8:
      var value = new proto.web.communitygames.AvailableIntValue;
      reader.readMessage(value,proto.web.communitygames.AvailableIntValue.deserializeBinaryFromReader);
      msg.setAllowedspectators(value);
      break;
    case 9:
      var value = new proto.web.communitygames.AvailableMutator;
      reader.readMessage(value,proto.web.communitygames.AvailableMutator.deserializeBinaryFromReader);
      msg.addMutators(value);
      break;
    case 10:
      var value = new proto.web.communitygames.Metadata;
      reader.readMessage(value,proto.web.communitygames.Metadata.deserializeBinaryFromReader);
      msg.addMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AvailableMapEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AvailableMapEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AvailableMapEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableMapEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevelname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGamemode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLevellocation();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGamesize();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.web.communitygames.AvailableIntValue.serializeBinaryToWriter
    );
  }
  f = message.getRounds();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.web.communitygames.AvailableIntValue.serializeBinaryToWriter
    );
  }
  f = message.getPreroundsize();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.web.communitygames.AvailableIntValue.serializeBinaryToWriter
    );
  }
  f = message.getWarmupsize();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.web.communitygames.AvailableIntValue.serializeBinaryToWriter
    );
  }
  f = message.getAllowedspectators();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.web.communitygames.AvailableIntValue.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.web.communitygames.AvailableMutator.serializeBinaryToWriter
    );
  }
  f = message.getMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.web.communitygames.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string levelName = 1;
 * @return {string}
 */
proto.web.communitygames.AvailableMapEntry.prototype.getLevelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.AvailableMapEntry} returns this
 */
proto.web.communitygames.AvailableMapEntry.prototype.setLevelname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string gameMode = 2;
 * @return {string}
 */
proto.web.communitygames.AvailableMapEntry.prototype.getGamemode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.AvailableMapEntry} returns this
 */
proto.web.communitygames.AvailableMapEntry.prototype.setGamemode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string levelLocation = 3;
 * @return {string}
 */
proto.web.communitygames.AvailableMapEntry.prototype.getLevellocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.AvailableMapEntry} returns this
 */
proto.web.communitygames.AvailableMapEntry.prototype.setLevellocation = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional AvailableIntValue gameSize = 4;
 * @return {?proto.web.communitygames.AvailableIntValue}
 */
proto.web.communitygames.AvailableMapEntry.prototype.getGamesize = function() {
  return /** @type{?proto.web.communitygames.AvailableIntValue} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AvailableIntValue, 4));
};


/**
 * @param {?proto.web.communitygames.AvailableIntValue|undefined} value
 * @return {!proto.web.communitygames.AvailableMapEntry} returns this
*/
proto.web.communitygames.AvailableMapEntry.prototype.setGamesize = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMapEntry} returns this
 */
proto.web.communitygames.AvailableMapEntry.prototype.clearGamesize = function() {
  return this.setGamesize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMapEntry.prototype.hasGamesize = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AvailableIntValue rounds = 5;
 * @return {?proto.web.communitygames.AvailableIntValue}
 */
proto.web.communitygames.AvailableMapEntry.prototype.getRounds = function() {
  return /** @type{?proto.web.communitygames.AvailableIntValue} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AvailableIntValue, 5));
};


/**
 * @param {?proto.web.communitygames.AvailableIntValue|undefined} value
 * @return {!proto.web.communitygames.AvailableMapEntry} returns this
*/
proto.web.communitygames.AvailableMapEntry.prototype.setRounds = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMapEntry} returns this
 */
proto.web.communitygames.AvailableMapEntry.prototype.clearRounds = function() {
  return this.setRounds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMapEntry.prototype.hasRounds = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AvailableIntValue preRoundSize = 6;
 * @return {?proto.web.communitygames.AvailableIntValue}
 */
proto.web.communitygames.AvailableMapEntry.prototype.getPreroundsize = function() {
  return /** @type{?proto.web.communitygames.AvailableIntValue} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AvailableIntValue, 6));
};


/**
 * @param {?proto.web.communitygames.AvailableIntValue|undefined} value
 * @return {!proto.web.communitygames.AvailableMapEntry} returns this
*/
proto.web.communitygames.AvailableMapEntry.prototype.setPreroundsize = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMapEntry} returns this
 */
proto.web.communitygames.AvailableMapEntry.prototype.clearPreroundsize = function() {
  return this.setPreroundsize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMapEntry.prototype.hasPreroundsize = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AvailableIntValue warmUpSize = 7;
 * @return {?proto.web.communitygames.AvailableIntValue}
 */
proto.web.communitygames.AvailableMapEntry.prototype.getWarmupsize = function() {
  return /** @type{?proto.web.communitygames.AvailableIntValue} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AvailableIntValue, 7));
};


/**
 * @param {?proto.web.communitygames.AvailableIntValue|undefined} value
 * @return {!proto.web.communitygames.AvailableMapEntry} returns this
*/
proto.web.communitygames.AvailableMapEntry.prototype.setWarmupsize = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMapEntry} returns this
 */
proto.web.communitygames.AvailableMapEntry.prototype.clearWarmupsize = function() {
  return this.setWarmupsize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMapEntry.prototype.hasWarmupsize = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional AvailableIntValue allowedSpectators = 8;
 * @return {?proto.web.communitygames.AvailableIntValue}
 */
proto.web.communitygames.AvailableMapEntry.prototype.getAllowedspectators = function() {
  return /** @type{?proto.web.communitygames.AvailableIntValue} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AvailableIntValue, 8));
};


/**
 * @param {?proto.web.communitygames.AvailableIntValue|undefined} value
 * @return {!proto.web.communitygames.AvailableMapEntry} returns this
*/
proto.web.communitygames.AvailableMapEntry.prototype.setAllowedspectators = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableMapEntry} returns this
 */
proto.web.communitygames.AvailableMapEntry.prototype.clearAllowedspectators = function() {
  return this.setAllowedspectators(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableMapEntry.prototype.hasAllowedspectators = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated AvailableMutator mutators = 9;
 * @return {!Array<!proto.web.communitygames.AvailableMutator>}
 */
proto.web.communitygames.AvailableMapEntry.prototype.getMutatorsList = function() {
  return /** @type{!Array<!proto.web.communitygames.AvailableMutator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.AvailableMutator, 9));
};


/**
 * @param {!Array<!proto.web.communitygames.AvailableMutator>} value
 * @return {!proto.web.communitygames.AvailableMapEntry} returns this
*/
proto.web.communitygames.AvailableMapEntry.prototype.setMutatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.web.communitygames.AvailableMutator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.AvailableMutator}
 */
proto.web.communitygames.AvailableMapEntry.prototype.addMutators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.web.communitygames.AvailableMutator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.AvailableMapEntry} returns this
 */
proto.web.communitygames.AvailableMapEntry.prototype.clearMutatorsList = function() {
  return this.setMutatorsList([]);
};


/**
 * repeated Metadata metadata = 10;
 * @return {!Array<!proto.web.communitygames.Metadata>}
 */
proto.web.communitygames.AvailableMapEntry.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.web.communitygames.Metadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.Metadata, 10));
};


/**
 * @param {!Array<!proto.web.communitygames.Metadata>} value
 * @return {!proto.web.communitygames.AvailableMapEntry} returns this
*/
proto.web.communitygames.AvailableMapEntry.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.web.communitygames.Metadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.Metadata}
 */
proto.web.communitygames.AvailableMapEntry.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.web.communitygames.Metadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.AvailableMapEntry} returns this
 */
proto.web.communitygames.AvailableMapEntry.prototype.clearMetadataList = function() {
  return this.setMetadataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AvailableTag.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AvailableTag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AvailableTag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableTag.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    metadata: (f = msg.getMetadata()) && proto.web.communitygames.Metadata.toObject(includeInstance, f),
    category: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AvailableTag}
 */
proto.web.communitygames.AvailableTag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AvailableTag;
  return proto.web.communitygames.AvailableTag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AvailableTag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AvailableTag}
 */
proto.web.communitygames.AvailableTag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.web.communitygames.Metadata;
      reader.readMessage(value,proto.web.communitygames.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 3:
      var value = /** @type {!proto.web.communitygames.Category} */ (reader.readEnum());
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AvailableTag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AvailableTag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AvailableTag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableTag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.web.communitygames.AvailableTag.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.AvailableTag} returns this
 */
proto.web.communitygames.AvailableTag.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Metadata metadata = 2;
 * @return {?proto.web.communitygames.Metadata}
 */
proto.web.communitygames.AvailableTag.prototype.getMetadata = function() {
  return /** @type{?proto.web.communitygames.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.Metadata, 2));
};


/**
 * @param {?proto.web.communitygames.Metadata|undefined} value
 * @return {!proto.web.communitygames.AvailableTag} returns this
*/
proto.web.communitygames.AvailableTag.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableTag} returns this
 */
proto.web.communitygames.AvailableTag.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableTag.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Category category = 3;
 * @return {!proto.web.communitygames.Category}
 */
proto.web.communitygames.AvailableTag.prototype.getCategory = function() {
  return /** @type {!proto.web.communitygames.Category} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.web.communitygames.Category} value
 * @return {!proto.web.communitygames.AvailableTag} returns this
 */
proto.web.communitygames.AvailableTag.prototype.setCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.AvailableAssetCategoryTag.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AvailableAssetCategoryTag.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AvailableAssetCategoryTag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AvailableAssetCategoryTag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableAssetCategoryTag.toObject = function(includeInstance, msg) {
  var f, obj = {
    tagid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    childrentagsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    metadata: (f = msg.getMetadata()) && proto.web.communitygames.Metadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AvailableAssetCategoryTag}
 */
proto.web.communitygames.AvailableAssetCategoryTag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AvailableAssetCategoryTag;
  return proto.web.communitygames.AvailableAssetCategoryTag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AvailableAssetCategoryTag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AvailableAssetCategoryTag}
 */
proto.web.communitygames.AvailableAssetCategoryTag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTagid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addChildrentags(value);
      break;
    case 4:
      var value = new proto.web.communitygames.Metadata;
      reader.readMessage(value,proto.web.communitygames.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AvailableAssetCategoryTag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AvailableAssetCategoryTag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AvailableAssetCategoryTag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableAssetCategoryTag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChildrentagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.web.communitygames.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tagId = 1;
 * @return {string}
 */
proto.web.communitygames.AvailableAssetCategoryTag.prototype.getTagid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.AvailableAssetCategoryTag} returns this
 */
proto.web.communitygames.AvailableAssetCategoryTag.prototype.setTagid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.web.communitygames.AvailableAssetCategoryTag.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.AvailableAssetCategoryTag} returns this
 */
proto.web.communitygames.AvailableAssetCategoryTag.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string childrenTags = 3;
 * @return {!Array<string>}
 */
proto.web.communitygames.AvailableAssetCategoryTag.prototype.getChildrentagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.web.communitygames.AvailableAssetCategoryTag} returns this
 */
proto.web.communitygames.AvailableAssetCategoryTag.prototype.setChildrentagsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.AvailableAssetCategoryTag} returns this
 */
proto.web.communitygames.AvailableAssetCategoryTag.prototype.addChildrentags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.AvailableAssetCategoryTag} returns this
 */
proto.web.communitygames.AvailableAssetCategoryTag.prototype.clearChildrentagsList = function() {
  return this.setChildrentagsList([]);
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.web.communitygames.Metadata}
 */
proto.web.communitygames.AvailableAssetCategoryTag.prototype.getMetadata = function() {
  return /** @type{?proto.web.communitygames.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.Metadata, 4));
};


/**
 * @param {?proto.web.communitygames.Metadata|undefined} value
 * @return {!proto.web.communitygames.AvailableAssetCategoryTag} returns this
*/
proto.web.communitygames.AvailableAssetCategoryTag.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableAssetCategoryTag} returns this
 */
proto.web.communitygames.AvailableAssetCategoryTag.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableAssetCategoryTag.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.AvailableAssetCategories.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AvailableAssetCategories.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AvailableAssetCategories.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AvailableAssetCategories} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableAssetCategories.toObject = function(includeInstance, msg) {
  var f, obj = {
    roottagsList: jspb.Message.toObjectList(msg.getRoottagsList(),
    proto.web.communitygames.AvailableAssetCategoryTag.toObject, includeInstance),
    tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    proto.web.communitygames.AvailableAssetCategoryTag.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AvailableAssetCategories}
 */
proto.web.communitygames.AvailableAssetCategories.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AvailableAssetCategories;
  return proto.web.communitygames.AvailableAssetCategories.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AvailableAssetCategories} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AvailableAssetCategories}
 */
proto.web.communitygames.AvailableAssetCategories.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.AvailableAssetCategoryTag;
      reader.readMessage(value,proto.web.communitygames.AvailableAssetCategoryTag.deserializeBinaryFromReader);
      msg.addRoottags(value);
      break;
    case 2:
      var value = new proto.web.communitygames.AvailableAssetCategoryTag;
      reader.readMessage(value,proto.web.communitygames.AvailableAssetCategoryTag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AvailableAssetCategories.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AvailableAssetCategories.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AvailableAssetCategories} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableAssetCategories.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoottagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.web.communitygames.AvailableAssetCategoryTag.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.web.communitygames.AvailableAssetCategoryTag.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AvailableAssetCategoryTag rootTags = 1;
 * @return {!Array<!proto.web.communitygames.AvailableAssetCategoryTag>}
 */
proto.web.communitygames.AvailableAssetCategories.prototype.getRoottagsList = function() {
  return /** @type{!Array<!proto.web.communitygames.AvailableAssetCategoryTag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.AvailableAssetCategoryTag, 1));
};


/**
 * @param {!Array<!proto.web.communitygames.AvailableAssetCategoryTag>} value
 * @return {!proto.web.communitygames.AvailableAssetCategories} returns this
*/
proto.web.communitygames.AvailableAssetCategories.prototype.setRoottagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.web.communitygames.AvailableAssetCategoryTag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.AvailableAssetCategoryTag}
 */
proto.web.communitygames.AvailableAssetCategories.prototype.addRoottags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.web.communitygames.AvailableAssetCategoryTag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.AvailableAssetCategories} returns this
 */
proto.web.communitygames.AvailableAssetCategories.prototype.clearRoottagsList = function() {
  return this.setRoottagsList([]);
};


/**
 * repeated AvailableAssetCategoryTag tags = 2;
 * @return {!Array<!proto.web.communitygames.AvailableAssetCategoryTag>}
 */
proto.web.communitygames.AvailableAssetCategories.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.web.communitygames.AvailableAssetCategoryTag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.AvailableAssetCategoryTag, 2));
};


/**
 * @param {!Array<!proto.web.communitygames.AvailableAssetCategoryTag>} value
 * @return {!proto.web.communitygames.AvailableAssetCategories} returns this
*/
proto.web.communitygames.AvailableAssetCategories.prototype.setTagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.web.communitygames.AvailableAssetCategoryTag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.AvailableAssetCategoryTag}
 */
proto.web.communitygames.AvailableAssetCategories.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.web.communitygames.AvailableAssetCategoryTag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.AvailableAssetCategories} returns this
 */
proto.web.communitygames.AvailableAssetCategories.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.PlaygroundConstraints.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.PlaygroundConstraints.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.PlaygroundConstraints} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.PlaygroundConstraints.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxnamesize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxdescriptionsize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxsecretsize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    maxmapsinrotation: jspb.Message.getFieldWithDefault(msg, 4, 0),
    maxmutators: jspb.Message.getFieldWithDefault(msg, 5, 0),
    maxconfignamesize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    maxconfigdescriptionsize: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.PlaygroundConstraints}
 */
proto.web.communitygames.PlaygroundConstraints.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.PlaygroundConstraints;
  return proto.web.communitygames.PlaygroundConstraints.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.PlaygroundConstraints} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.PlaygroundConstraints}
 */
proto.web.communitygames.PlaygroundConstraints.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxnamesize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxdescriptionsize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxsecretsize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxmapsinrotation(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxmutators(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxconfignamesize(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxconfigdescriptionsize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.PlaygroundConstraints.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.PlaygroundConstraints.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.PlaygroundConstraints} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.PlaygroundConstraints.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxnamesize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMaxdescriptionsize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMaxsecretsize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getMaxmapsinrotation();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getMaxmutators();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getMaxconfignamesize();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getMaxconfigdescriptionsize();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional int32 maxNameSize = 1;
 * @return {number}
 */
proto.web.communitygames.PlaygroundConstraints.prototype.getMaxnamesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.PlaygroundConstraints} returns this
 */
proto.web.communitygames.PlaygroundConstraints.prototype.setMaxnamesize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 maxDescriptionSize = 2;
 * @return {number}
 */
proto.web.communitygames.PlaygroundConstraints.prototype.getMaxdescriptionsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.PlaygroundConstraints} returns this
 */
proto.web.communitygames.PlaygroundConstraints.prototype.setMaxdescriptionsize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 maxSecretSize = 3;
 * @return {number}
 */
proto.web.communitygames.PlaygroundConstraints.prototype.getMaxsecretsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.PlaygroundConstraints} returns this
 */
proto.web.communitygames.PlaygroundConstraints.prototype.setMaxsecretsize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 maxMapsInRotation = 4;
 * @return {number}
 */
proto.web.communitygames.PlaygroundConstraints.prototype.getMaxmapsinrotation = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.PlaygroundConstraints} returns this
 */
proto.web.communitygames.PlaygroundConstraints.prototype.setMaxmapsinrotation = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 maxMutators = 5;
 * @return {number}
 */
proto.web.communitygames.PlaygroundConstraints.prototype.getMaxmutators = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.PlaygroundConstraints} returns this
 */
proto.web.communitygames.PlaygroundConstraints.prototype.setMaxmutators = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 maxConfigNameSize = 6;
 * @return {number}
 */
proto.web.communitygames.PlaygroundConstraints.prototype.getMaxconfignamesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.PlaygroundConstraints} returns this
 */
proto.web.communitygames.PlaygroundConstraints.prototype.setMaxconfignamesize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 maxConfigDescriptionSize = 7;
 * @return {number}
 */
proto.web.communitygames.PlaygroundConstraints.prototype.getMaxconfigdescriptionsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.PlaygroundConstraints} returns this
 */
proto.web.communitygames.PlaygroundConstraints.prototype.setMaxconfigdescriptionsize = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.ModRulesDefinition.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.ModRulesDefinition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.ModRulesDefinition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.ModRulesDefinition.toObject = function(includeInstance, msg) {
  var f, obj = {
    rulesversion: jspb.Message.getFieldWithDefault(msg, 1, 0),
    modbuilder: msg.getModbuilder_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.ModRulesDefinition}
 */
proto.web.communitygames.ModRulesDefinition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.ModRulesDefinition;
  return proto.web.communitygames.ModRulesDefinition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.ModRulesDefinition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.ModRulesDefinition}
 */
proto.web.communitygames.ModRulesDefinition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRulesversion(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setModbuilder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.ModRulesDefinition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.ModRulesDefinition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.ModRulesDefinition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.ModRulesDefinition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesversion();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getModbuilder_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional int32 rulesVersion = 1;
 * @return {number}
 */
proto.web.communitygames.ModRulesDefinition.prototype.getRulesversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.web.communitygames.ModRulesDefinition} returns this
 */
proto.web.communitygames.ModRulesDefinition.prototype.setRulesversion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes modBuilder = 2;
 * @return {!(string|Uint8Array)}
 */
proto.web.communitygames.ModRulesDefinition.prototype.getModbuilder = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes modBuilder = 2;
 * This is a type-conversion wrapper around `getModbuilder()`
 * @return {string}
 */
proto.web.communitygames.ModRulesDefinition.prototype.getModbuilder_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getModbuilder()));
};


/**
 * optional bytes modBuilder = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getModbuilder()`
 * @return {!Uint8Array}
 */
proto.web.communitygames.ModRulesDefinition.prototype.getModbuilder_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getModbuilder()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.web.communitygames.ModRulesDefinition} returns this
 */
proto.web.communitygames.ModRulesDefinition.prototype.setModbuilder = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.AvailableGameData.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.AvailableGameData.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.AvailableGameData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.AvailableGameData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableGameData.toObject = function(includeInstance, msg) {
  var f, obj = {
    mutatorsList: jspb.Message.toObjectList(msg.getMutatorsList(),
    proto.web.communitygames.AvailableMutator.toObject, includeInstance),
    mapsList: jspb.Message.toObjectList(msg.getMapsList(),
    proto.web.communitygames.AvailableMapEntry.toObject, includeInstance),
    modrules: (f = msg.getModrules()) && proto.web.communitygames.ModRulesDefinition.toObject(includeInstance, f),
    assetcategories: (f = msg.getAssetcategories()) && proto.web.communitygames.AvailableAssetCategories.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.AvailableGameData}
 */
proto.web.communitygames.AvailableGameData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.AvailableGameData;
  return proto.web.communitygames.AvailableGameData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.AvailableGameData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.AvailableGameData}
 */
proto.web.communitygames.AvailableGameData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.AvailableMutator;
      reader.readMessage(value,proto.web.communitygames.AvailableMutator.deserializeBinaryFromReader);
      msg.addMutators(value);
      break;
    case 2:
      var value = new proto.web.communitygames.AvailableMapEntry;
      reader.readMessage(value,proto.web.communitygames.AvailableMapEntry.deserializeBinaryFromReader);
      msg.addMaps(value);
      break;
    case 4:
      var value = new proto.web.communitygames.ModRulesDefinition;
      reader.readMessage(value,proto.web.communitygames.ModRulesDefinition.deserializeBinaryFromReader);
      msg.setModrules(value);
      break;
    case 5:
      var value = new proto.web.communitygames.AvailableAssetCategories;
      reader.readMessage(value,proto.web.communitygames.AvailableAssetCategories.deserializeBinaryFromReader);
      msg.setAssetcategories(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.AvailableGameData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.AvailableGameData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.AvailableGameData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.AvailableGameData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMutatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.web.communitygames.AvailableMutator.serializeBinaryToWriter
    );
  }
  f = message.getMapsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.web.communitygames.AvailableMapEntry.serializeBinaryToWriter
    );
  }
  f = message.getModrules();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.web.communitygames.ModRulesDefinition.serializeBinaryToWriter
    );
  }
  f = message.getAssetcategories();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.web.communitygames.AvailableAssetCategories.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AvailableMutator mutators = 1;
 * @return {!Array<!proto.web.communitygames.AvailableMutator>}
 */
proto.web.communitygames.AvailableGameData.prototype.getMutatorsList = function() {
  return /** @type{!Array<!proto.web.communitygames.AvailableMutator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.AvailableMutator, 1));
};


/**
 * @param {!Array<!proto.web.communitygames.AvailableMutator>} value
 * @return {!proto.web.communitygames.AvailableGameData} returns this
*/
proto.web.communitygames.AvailableGameData.prototype.setMutatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.web.communitygames.AvailableMutator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.AvailableMutator}
 */
proto.web.communitygames.AvailableGameData.prototype.addMutators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.web.communitygames.AvailableMutator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.AvailableGameData} returns this
 */
proto.web.communitygames.AvailableGameData.prototype.clearMutatorsList = function() {
  return this.setMutatorsList([]);
};


/**
 * repeated AvailableMapEntry maps = 2;
 * @return {!Array<!proto.web.communitygames.AvailableMapEntry>}
 */
proto.web.communitygames.AvailableGameData.prototype.getMapsList = function() {
  return /** @type{!Array<!proto.web.communitygames.AvailableMapEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.AvailableMapEntry, 2));
};


/**
 * @param {!Array<!proto.web.communitygames.AvailableMapEntry>} value
 * @return {!proto.web.communitygames.AvailableGameData} returns this
*/
proto.web.communitygames.AvailableGameData.prototype.setMapsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.web.communitygames.AvailableMapEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.AvailableMapEntry}
 */
proto.web.communitygames.AvailableGameData.prototype.addMaps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.web.communitygames.AvailableMapEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.AvailableGameData} returns this
 */
proto.web.communitygames.AvailableGameData.prototype.clearMapsList = function() {
  return this.setMapsList([]);
};


/**
 * optional ModRulesDefinition modRules = 4;
 * @return {?proto.web.communitygames.ModRulesDefinition}
 */
proto.web.communitygames.AvailableGameData.prototype.getModrules = function() {
  return /** @type{?proto.web.communitygames.ModRulesDefinition} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.ModRulesDefinition, 4));
};


/**
 * @param {?proto.web.communitygames.ModRulesDefinition|undefined} value
 * @return {!proto.web.communitygames.AvailableGameData} returns this
*/
proto.web.communitygames.AvailableGameData.prototype.setModrules = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableGameData} returns this
 */
proto.web.communitygames.AvailableGameData.prototype.clearModrules = function() {
  return this.setModrules(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableGameData.prototype.hasModrules = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AvailableAssetCategories assetCategories = 5;
 * @return {?proto.web.communitygames.AvailableAssetCategories}
 */
proto.web.communitygames.AvailableGameData.prototype.getAssetcategories = function() {
  return /** @type{?proto.web.communitygames.AvailableAssetCategories} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AvailableAssetCategories, 5));
};


/**
 * @param {?proto.web.communitygames.AvailableAssetCategories|undefined} value
 * @return {!proto.web.communitygames.AvailableGameData} returns this
*/
proto.web.communitygames.AvailableGameData.prototype.setAssetcategories = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.AvailableGameData} returns this
 */
proto.web.communitygames.AvailableGameData.prototype.clearAssetcategories = function() {
  return this.setAssetcategories(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.AvailableGameData.prototype.hasAssetcategories = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.Blueprint.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.Blueprint.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.Blueprint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.Blueprint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Blueprint.toObject = function(includeInstance, msg) {
  var f, obj = {
    blueprinttype: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    availablegamedata: (f = msg.getAvailablegamedata()) && proto.web.communitygames.AvailableGameData.toObject(includeInstance, f),
    metadata: (f = msg.getMetadata()) && proto.web.communitygames.Metadata.toObject(includeInstance, f),
    customdata: msg.getCustomdata_asB64(),
    playgroundconstraints: (f = msg.getPlaygroundconstraints()) && proto.web.communitygames.PlaygroundConstraints.toObject(includeInstance, f),
    availabletagsList: jspb.Message.toObjectList(msg.getAvailabletagsList(),
    proto.web.communitygames.AvailableTag.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.Blueprint}
 */
proto.web.communitygames.Blueprint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.Blueprint;
  return proto.web.communitygames.Blueprint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.Blueprint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.Blueprint}
 */
proto.web.communitygames.Blueprint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprinttype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.web.communitygames.AvailableGameData;
      reader.readMessage(value,proto.web.communitygames.AvailableGameData.deserializeBinaryFromReader);
      msg.setAvailablegamedata(value);
      break;
    case 4:
      var value = new proto.web.communitygames.Metadata;
      reader.readMessage(value,proto.web.communitygames.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCustomdata(value);
      break;
    case 6:
      var value = new proto.web.communitygames.PlaygroundConstraints;
      reader.readMessage(value,proto.web.communitygames.PlaygroundConstraints.deserializeBinaryFromReader);
      msg.setPlaygroundconstraints(value);
      break;
    case 7:
      var value = new proto.web.communitygames.AvailableTag;
      reader.readMessage(value,proto.web.communitygames.AvailableTag.deserializeBinaryFromReader);
      msg.addAvailabletags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.Blueprint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.Blueprint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.Blueprint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.Blueprint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlueprinttype();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvailablegamedata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.web.communitygames.AvailableGameData.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.web.communitygames.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getCustomdata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getPlaygroundconstraints();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.web.communitygames.PlaygroundConstraints.serializeBinaryToWriter
    );
  }
  f = message.getAvailabletagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.web.communitygames.AvailableTag.serializeBinaryToWriter
    );
  }
};


/**
 * optional string blueprintType = 1;
 * @return {string}
 */
proto.web.communitygames.Blueprint.prototype.getBlueprinttype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.Blueprint} returns this
 */
proto.web.communitygames.Blueprint.prototype.setBlueprinttype = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.web.communitygames.Blueprint.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.Blueprint} returns this
 */
proto.web.communitygames.Blueprint.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AvailableGameData availableGameData = 3;
 * @return {?proto.web.communitygames.AvailableGameData}
 */
proto.web.communitygames.Blueprint.prototype.getAvailablegamedata = function() {
  return /** @type{?proto.web.communitygames.AvailableGameData} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.AvailableGameData, 3));
};


/**
 * @param {?proto.web.communitygames.AvailableGameData|undefined} value
 * @return {!proto.web.communitygames.Blueprint} returns this
*/
proto.web.communitygames.Blueprint.prototype.setAvailablegamedata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.Blueprint} returns this
 */
proto.web.communitygames.Blueprint.prototype.clearAvailablegamedata = function() {
  return this.setAvailablegamedata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.Blueprint.prototype.hasAvailablegamedata = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Metadata metadata = 4;
 * @return {?proto.web.communitygames.Metadata}
 */
proto.web.communitygames.Blueprint.prototype.getMetadata = function() {
  return /** @type{?proto.web.communitygames.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.Metadata, 4));
};


/**
 * @param {?proto.web.communitygames.Metadata|undefined} value
 * @return {!proto.web.communitygames.Blueprint} returns this
*/
proto.web.communitygames.Blueprint.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.Blueprint} returns this
 */
proto.web.communitygames.Blueprint.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.Blueprint.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes customData = 5;
 * @return {!(string|Uint8Array)}
 */
proto.web.communitygames.Blueprint.prototype.getCustomdata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes customData = 5;
 * This is a type-conversion wrapper around `getCustomdata()`
 * @return {string}
 */
proto.web.communitygames.Blueprint.prototype.getCustomdata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCustomdata()));
};


/**
 * optional bytes customData = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCustomdata()`
 * @return {!Uint8Array}
 */
proto.web.communitygames.Blueprint.prototype.getCustomdata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCustomdata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.web.communitygames.Blueprint} returns this
 */
proto.web.communitygames.Blueprint.prototype.setCustomdata = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional PlaygroundConstraints playgroundConstraints = 6;
 * @return {?proto.web.communitygames.PlaygroundConstraints}
 */
proto.web.communitygames.Blueprint.prototype.getPlaygroundconstraints = function() {
  return /** @type{?proto.web.communitygames.PlaygroundConstraints} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.PlaygroundConstraints, 6));
};


/**
 * @param {?proto.web.communitygames.PlaygroundConstraints|undefined} value
 * @return {!proto.web.communitygames.Blueprint} returns this
*/
proto.web.communitygames.Blueprint.prototype.setPlaygroundconstraints = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.Blueprint} returns this
 */
proto.web.communitygames.Blueprint.prototype.clearPlaygroundconstraints = function() {
  return this.setPlaygroundconstraints(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.Blueprint.prototype.hasPlaygroundconstraints = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated AvailableTag availableTags = 7;
 * @return {!Array<!proto.web.communitygames.AvailableTag>}
 */
proto.web.communitygames.Blueprint.prototype.getAvailabletagsList = function() {
  return /** @type{!Array<!proto.web.communitygames.AvailableTag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.AvailableTag, 7));
};


/**
 * @param {!Array<!proto.web.communitygames.AvailableTag>} value
 * @return {!proto.web.communitygames.Blueprint} returns this
*/
proto.web.communitygames.Blueprint.prototype.setAvailabletagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.web.communitygames.AvailableTag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.AvailableTag}
 */
proto.web.communitygames.Blueprint.prototype.addAvailabletags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.web.communitygames.AvailableTag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.Blueprint} returns this
 */
proto.web.communitygames.Blueprint.prototype.clearAvailabletagsList = function() {
  return this.setAvailabletagsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.ShortCode.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.ShortCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.ShortCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.ShortCode.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.ShortCode}
 */
proto.web.communitygames.ShortCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.ShortCode;
  return proto.web.communitygames.ShortCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.ShortCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.ShortCode}
 */
proto.web.communitygames.ShortCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.ShortCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.ShortCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.ShortCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.ShortCode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.web.communitygames.ShortCode.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.ShortCode} returns this
 */
proto.web.communitygames.ShortCode.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.GetProgressionTypesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.GetProgressionTypesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.GetProgressionTypesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetProgressionTypesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.GetProgressionTypesRequest}
 */
proto.web.communitygames.GetProgressionTypesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.GetProgressionTypesRequest;
  return proto.web.communitygames.GetProgressionTypesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.GetProgressionTypesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.GetProgressionTypesRequest}
 */
proto.web.communitygames.GetProgressionTypesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.GetProgressionTypesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.GetProgressionTypesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.GetProgressionTypesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetProgressionTypesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.BlueprintInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.BlueprintInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.BlueprintInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.BlueprintInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    blueprinttype: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blueprintid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.BlueprintInfo}
 */
proto.web.communitygames.BlueprintInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.BlueprintInfo;
  return proto.web.communitygames.BlueprintInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.BlueprintInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.BlueprintInfo}
 */
proto.web.communitygames.BlueprintInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprinttype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprintid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.BlueprintInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.BlueprintInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.BlueprintInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.BlueprintInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlueprinttype();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlueprintid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string blueprintType = 1;
 * @return {string}
 */
proto.web.communitygames.BlueprintInfo.prototype.getBlueprinttype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.BlueprintInfo} returns this
 */
proto.web.communitygames.BlueprintInfo.prototype.setBlueprinttype = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string blueprintId = 2;
 * @return {string}
 */
proto.web.communitygames.BlueprintInfo.prototype.getBlueprintid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.BlueprintInfo} returns this
 */
proto.web.communitygames.BlueprintInfo.prototype.setBlueprintid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.GetProgressionTypesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.GetProgressionTypesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.GetProgressionTypesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.GetProgressionTypesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetProgressionTypesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.web.communitygames.ProgressionEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.GetProgressionTypesResponse}
 */
proto.web.communitygames.GetProgressionTypesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.GetProgressionTypesResponse;
  return proto.web.communitygames.GetProgressionTypesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.GetProgressionTypesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.GetProgressionTypesResponse}
 */
proto.web.communitygames.GetProgressionTypesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.ProgressionEntry;
      reader.readMessage(value,proto.web.communitygames.ProgressionEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.GetProgressionTypesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.GetProgressionTypesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.GetProgressionTypesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetProgressionTypesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.web.communitygames.ProgressionEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProgressionEntry entries = 1;
 * @return {!Array<!proto.web.communitygames.ProgressionEntry>}
 */
proto.web.communitygames.GetProgressionTypesResponse.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.web.communitygames.ProgressionEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.ProgressionEntry, 1));
};


/**
 * @param {!Array<!proto.web.communitygames.ProgressionEntry>} value
 * @return {!proto.web.communitygames.GetProgressionTypesResponse} returns this
*/
proto.web.communitygames.GetProgressionTypesResponse.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.web.communitygames.ProgressionEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.ProgressionEntry}
 */
proto.web.communitygames.GetProgressionTypesResponse.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.web.communitygames.ProgressionEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.GetProgressionTypesResponse} returns this
 */
proto.web.communitygames.GetProgressionTypesResponse.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.GetScheduledBlueprintsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.GetScheduledBlueprintsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.GetScheduledBlueprintsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetScheduledBlueprintsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocolversion: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.GetScheduledBlueprintsRequest}
 */
proto.web.communitygames.GetScheduledBlueprintsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.GetScheduledBlueprintsRequest;
  return proto.web.communitygames.GetScheduledBlueprintsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.GetScheduledBlueprintsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.GetScheduledBlueprintsRequest}
 */
proto.web.communitygames.GetScheduledBlueprintsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocolversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.GetScheduledBlueprintsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.GetScheduledBlueprintsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.GetScheduledBlueprintsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetScheduledBlueprintsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocolversion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string protocolVersion = 1;
 * @return {string}
 */
proto.web.communitygames.GetScheduledBlueprintsRequest.prototype.getProtocolversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.GetScheduledBlueprintsRequest} returns this
 */
proto.web.communitygames.GetScheduledBlueprintsRequest.prototype.setProtocolversion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.GetScheduledBlueprintsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.GetScheduledBlueprintsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.GetScheduledBlueprintsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetScheduledBlueprintsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blueprints: (f = msg.getBlueprints()) && proto.web.communitygames.BlueprintInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.GetScheduledBlueprintsResponse}
 */
proto.web.communitygames.GetScheduledBlueprintsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.GetScheduledBlueprintsResponse;
  return proto.web.communitygames.GetScheduledBlueprintsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.GetScheduledBlueprintsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.GetScheduledBlueprintsResponse}
 */
proto.web.communitygames.GetScheduledBlueprintsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.BlueprintInfo;
      reader.readMessage(value,proto.web.communitygames.BlueprintInfo.deserializeBinaryFromReader);
      msg.setBlueprints(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.GetScheduledBlueprintsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.GetScheduledBlueprintsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.GetScheduledBlueprintsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetScheduledBlueprintsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlueprints();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.BlueprintInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional BlueprintInfo blueprints = 1;
 * @return {?proto.web.communitygames.BlueprintInfo}
 */
proto.web.communitygames.GetScheduledBlueprintsResponse.prototype.getBlueprints = function() {
  return /** @type{?proto.web.communitygames.BlueprintInfo} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.BlueprintInfo, 1));
};


/**
 * @param {?proto.web.communitygames.BlueprintInfo|undefined} value
 * @return {!proto.web.communitygames.GetScheduledBlueprintsResponse} returns this
*/
proto.web.communitygames.GetScheduledBlueprintsResponse.prototype.setBlueprints = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.GetScheduledBlueprintsResponse} returns this
 */
proto.web.communitygames.GetScheduledBlueprintsResponse.prototype.clearBlueprints = function() {
  return this.setBlueprints(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.GetScheduledBlueprintsResponse.prototype.hasBlueprints = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.GetBlueprintsByIdResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.GetBlueprintsByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.GetBlueprintsByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.GetBlueprintsByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetBlueprintsByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blueprintList: jspb.Message.toObjectList(msg.getBlueprintList(),
    proto.web.communitygames.Blueprint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.GetBlueprintsByIdResponse}
 */
proto.web.communitygames.GetBlueprintsByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.GetBlueprintsByIdResponse;
  return proto.web.communitygames.GetBlueprintsByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.GetBlueprintsByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.GetBlueprintsByIdResponse}
 */
proto.web.communitygames.GetBlueprintsByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.Blueprint;
      reader.readMessage(value,proto.web.communitygames.Blueprint.deserializeBinaryFromReader);
      msg.addBlueprint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.GetBlueprintsByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.GetBlueprintsByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.GetBlueprintsByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetBlueprintsByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlueprintList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.web.communitygames.Blueprint.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Blueprint blueprint = 1;
 * @return {!Array<!proto.web.communitygames.Blueprint>}
 */
proto.web.communitygames.GetBlueprintsByIdResponse.prototype.getBlueprintList = function() {
  return /** @type{!Array<!proto.web.communitygames.Blueprint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.Blueprint, 1));
};


/**
 * @param {!Array<!proto.web.communitygames.Blueprint>} value
 * @return {!proto.web.communitygames.GetBlueprintsByIdResponse} returns this
*/
proto.web.communitygames.GetBlueprintsByIdResponse.prototype.setBlueprintList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.web.communitygames.Blueprint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.Blueprint}
 */
proto.web.communitygames.GetBlueprintsByIdResponse.prototype.addBlueprint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.web.communitygames.Blueprint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.GetBlueprintsByIdResponse} returns this
 */
proto.web.communitygames.GetBlueprintsByIdResponse.prototype.clearBlueprintList = function() {
  return this.setBlueprintList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.GetConstraintsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.GetConstraintsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.GetConstraintsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetConstraintsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    globalconstraints: (f = msg.getGlobalconstraints()) && proto.web.communitygames.GlobalConstraints.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.GetConstraintsResponse}
 */
proto.web.communitygames.GetConstraintsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.GetConstraintsResponse;
  return proto.web.communitygames.GetConstraintsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.GetConstraintsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.GetConstraintsResponse}
 */
proto.web.communitygames.GetConstraintsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.GlobalConstraints;
      reader.readMessage(value,proto.web.communitygames.GlobalConstraints.deserializeBinaryFromReader);
      msg.setGlobalconstraints(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.GetConstraintsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.GetConstraintsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.GetConstraintsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetConstraintsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGlobalconstraints();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.GlobalConstraints.serializeBinaryToWriter
    );
  }
};


/**
 * optional GlobalConstraints globalConstraints = 1;
 * @return {?proto.web.communitygames.GlobalConstraints}
 */
proto.web.communitygames.GetConstraintsResponse.prototype.getGlobalconstraints = function() {
  return /** @type{?proto.web.communitygames.GlobalConstraints} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.GlobalConstraints, 1));
};


/**
 * @param {?proto.web.communitygames.GlobalConstraints|undefined} value
 * @return {!proto.web.communitygames.GetConstraintsResponse} returns this
*/
proto.web.communitygames.GetConstraintsResponse.prototype.setGlobalconstraints = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.GetConstraintsResponse} returns this
 */
proto.web.communitygames.GetConstraintsResponse.prototype.clearGlobalconstraints = function() {
  return this.setGlobalconstraints(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.GetConstraintsResponse.prototype.hasGlobalconstraints = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.ListPlaygroundsByOwnerResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.ListPlaygroundsByOwnerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.ListPlaygroundsByOwnerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.ListPlaygroundsByOwnerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.ListPlaygroundsByOwnerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    playgroundresponsesList: jspb.Message.toObjectList(msg.getPlaygroundresponsesList(),
    proto.web.communitygames.PlaygroundResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.ListPlaygroundsByOwnerResponse}
 */
proto.web.communitygames.ListPlaygroundsByOwnerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.ListPlaygroundsByOwnerResponse;
  return proto.web.communitygames.ListPlaygroundsByOwnerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.ListPlaygroundsByOwnerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.ListPlaygroundsByOwnerResponse}
 */
proto.web.communitygames.ListPlaygroundsByOwnerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.web.communitygames.PlaygroundResponse;
      reader.readMessage(value,proto.web.communitygames.PlaygroundResponse.deserializeBinaryFromReader);
      msg.addPlaygroundresponses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.ListPlaygroundsByOwnerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.ListPlaygroundsByOwnerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.ListPlaygroundsByOwnerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.ListPlaygroundsByOwnerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaygroundresponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.web.communitygames.PlaygroundResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PlaygroundResponse playgroundResponses = 2;
 * @return {!Array<!proto.web.communitygames.PlaygroundResponse>}
 */
proto.web.communitygames.ListPlaygroundsByOwnerResponse.prototype.getPlaygroundresponsesList = function() {
  return /** @type{!Array<!proto.web.communitygames.PlaygroundResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.PlaygroundResponse, 2));
};


/**
 * @param {!Array<!proto.web.communitygames.PlaygroundResponse>} value
 * @return {!proto.web.communitygames.ListPlaygroundsByOwnerResponse} returns this
*/
proto.web.communitygames.ListPlaygroundsByOwnerResponse.prototype.setPlaygroundresponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.web.communitygames.PlaygroundResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.PlaygroundResponse}
 */
proto.web.communitygames.ListPlaygroundsByOwnerResponse.prototype.addPlaygroundresponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.web.communitygames.PlaygroundResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.ListPlaygroundsByOwnerResponse} returns this
 */
proto.web.communitygames.ListPlaygroundsByOwnerResponse.prototype.clearPlaygroundresponsesList = function() {
  return this.setPlaygroundresponsesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.web.communitygames.CreatePlaygroundRequest.repeatedFields_ = [5,11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.CreatePlaygroundRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.CreatePlaygroundRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.CreatePlaygroundRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blueprinttype: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: (f = msg.getDescription()) && proto.web.communitygames.StringValue.toObject(includeInstance, f),
    mutatorsList: jspb.Message.toObjectList(msg.getMutatorsList(),
    proto.web.communitygames.Mutator.toObject, includeInstance),
    maprotation: (f = msg.getMaprotation()) && proto.web.communitygames.MapRotation.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && proto.web.communitygames.StringValue.toObject(includeInstance, f),
    serversettings: (f = msg.getServersettings()) && proto.web.communitygames.GameServerSettings.toObject(includeInstance, f),
    restrictions: (f = msg.getRestrictions()) && proto.web.communitygames.Restrictions.toObject(includeInstance, f),
    originalmodrules: msg.getOriginalmodrules_asB64(),
    assetcategoriesList: jspb.Message.toObjectList(msg.getAssetcategoriesList(),
    proto.web.communitygames.AssetCategory.toObject, includeInstance),
    teamcomposition: (f = msg.getTeamcomposition()) && proto.web.communitygames.TeamComposition.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.CreatePlaygroundRequest}
 */
proto.web.communitygames.CreatePlaygroundRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.CreatePlaygroundRequest;
  return proto.web.communitygames.CreatePlaygroundRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.CreatePlaygroundRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.CreatePlaygroundRequest}
 */
proto.web.communitygames.CreatePlaygroundRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlueprinttype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.web.communitygames.StringValue;
      reader.readMessage(value,proto.web.communitygames.StringValue.deserializeBinaryFromReader);
      msg.setDescription(value);
      break;
    case 5:
      var value = new proto.web.communitygames.Mutator;
      reader.readMessage(value,proto.web.communitygames.Mutator.deserializeBinaryFromReader);
      msg.addMutators(value);
      break;
    case 6:
      var value = new proto.web.communitygames.MapRotation;
      reader.readMessage(value,proto.web.communitygames.MapRotation.deserializeBinaryFromReader);
      msg.setMaprotation(value);
      break;
    case 7:
      var value = new proto.web.communitygames.StringValue;
      reader.readMessage(value,proto.web.communitygames.StringValue.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 8:
      var value = new proto.web.communitygames.GameServerSettings;
      reader.readMessage(value,proto.web.communitygames.GameServerSettings.deserializeBinaryFromReader);
      msg.setServersettings(value);
      break;
    case 9:
      var value = new proto.web.communitygames.Restrictions;
      reader.readMessage(value,proto.web.communitygames.Restrictions.deserializeBinaryFromReader);
      msg.setRestrictions(value);
      break;
    case 10:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOriginalmodrules(value);
      break;
    case 11:
      var value = new proto.web.communitygames.AssetCategory;
      reader.readMessage(value,proto.web.communitygames.AssetCategory.deserializeBinaryFromReader);
      msg.addAssetcategories(value);
      break;
    case 12:
      var value = new proto.web.communitygames.TeamComposition;
      reader.readMessage(value,proto.web.communitygames.TeamComposition.deserializeBinaryFromReader);
      msg.setTeamcomposition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.CreatePlaygroundRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.CreatePlaygroundRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.CreatePlaygroundRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlueprinttype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.web.communitygames.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getMutatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.web.communitygames.Mutator.serializeBinaryToWriter
    );
  }
  f = message.getMaprotation();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.web.communitygames.MapRotation.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.web.communitygames.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getServersettings();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.web.communitygames.GameServerSettings.serializeBinaryToWriter
    );
  }
  f = message.getRestrictions();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.web.communitygames.Restrictions.serializeBinaryToWriter
    );
  }
  f = message.getOriginalmodrules_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      10,
      f
    );
  }
  f = message.getAssetcategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.web.communitygames.AssetCategory.serializeBinaryToWriter
    );
  }
  f = message.getTeamcomposition();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.web.communitygames.TeamComposition.serializeBinaryToWriter
    );
  }
};


/**
 * optional string blueprintType = 2;
 * @return {string}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.getBlueprinttype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.setBlueprinttype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional StringValue description = 4;
 * @return {?proto.web.communitygames.StringValue}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.getDescription = function() {
  return /** @type{?proto.web.communitygames.StringValue} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.StringValue, 4));
};


/**
 * @param {?proto.web.communitygames.StringValue|undefined} value
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
*/
proto.web.communitygames.CreatePlaygroundRequest.prototype.setDescription = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.clearDescription = function() {
  return this.setDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Mutator mutators = 5;
 * @return {!Array<!proto.web.communitygames.Mutator>}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.getMutatorsList = function() {
  return /** @type{!Array<!proto.web.communitygames.Mutator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.Mutator, 5));
};


/**
 * @param {!Array<!proto.web.communitygames.Mutator>} value
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
*/
proto.web.communitygames.CreatePlaygroundRequest.prototype.setMutatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.web.communitygames.Mutator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.Mutator}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.addMutators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.web.communitygames.Mutator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.clearMutatorsList = function() {
  return this.setMutatorsList([]);
};


/**
 * optional MapRotation mapRotation = 6;
 * @return {?proto.web.communitygames.MapRotation}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.getMaprotation = function() {
  return /** @type{?proto.web.communitygames.MapRotation} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.MapRotation, 6));
};


/**
 * @param {?proto.web.communitygames.MapRotation|undefined} value
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
*/
proto.web.communitygames.CreatePlaygroundRequest.prototype.setMaprotation = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.clearMaprotation = function() {
  return this.setMaprotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.hasMaprotation = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional StringValue secret = 7;
 * @return {?proto.web.communitygames.StringValue}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.getSecret = function() {
  return /** @type{?proto.web.communitygames.StringValue} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.StringValue, 7));
};


/**
 * @param {?proto.web.communitygames.StringValue|undefined} value
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
*/
proto.web.communitygames.CreatePlaygroundRequest.prototype.setSecret = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.clearSecret = function() {
  return this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional GameServerSettings serverSettings = 8;
 * @return {?proto.web.communitygames.GameServerSettings}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.getServersettings = function() {
  return /** @type{?proto.web.communitygames.GameServerSettings} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.GameServerSettings, 8));
};


/**
 * @param {?proto.web.communitygames.GameServerSettings|undefined} value
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
*/
proto.web.communitygames.CreatePlaygroundRequest.prototype.setServersettings = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.clearServersettings = function() {
  return this.setServersettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.hasServersettings = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Restrictions restrictions = 9;
 * @return {?proto.web.communitygames.Restrictions}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.getRestrictions = function() {
  return /** @type{?proto.web.communitygames.Restrictions} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.Restrictions, 9));
};


/**
 * @param {?proto.web.communitygames.Restrictions|undefined} value
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
*/
proto.web.communitygames.CreatePlaygroundRequest.prototype.setRestrictions = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.clearRestrictions = function() {
  return this.setRestrictions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.hasRestrictions = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bytes originalModRules = 10;
 * @return {!(string|Uint8Array)}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.getOriginalmodrules = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * optional bytes originalModRules = 10;
 * This is a type-conversion wrapper around `getOriginalmodrules()`
 * @return {string}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.getOriginalmodrules_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOriginalmodrules()));
};


/**
 * optional bytes originalModRules = 10;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOriginalmodrules()`
 * @return {!Uint8Array}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.getOriginalmodrules_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOriginalmodrules()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.setOriginalmodrules = function(value) {
  return jspb.Message.setProto3BytesField(this, 10, value);
};


/**
 * repeated AssetCategory assetCategories = 11;
 * @return {!Array<!proto.web.communitygames.AssetCategory>}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.getAssetcategoriesList = function() {
  return /** @type{!Array<!proto.web.communitygames.AssetCategory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.web.communitygames.AssetCategory, 11));
};


/**
 * @param {!Array<!proto.web.communitygames.AssetCategory>} value
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
*/
proto.web.communitygames.CreatePlaygroundRequest.prototype.setAssetcategoriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.web.communitygames.AssetCategory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.web.communitygames.AssetCategory}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.addAssetcategories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.web.communitygames.AssetCategory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.clearAssetcategoriesList = function() {
  return this.setAssetcategoriesList([]);
};


/**
 * optional TeamComposition teamComposition = 12;
 * @return {?proto.web.communitygames.TeamComposition}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.getTeamcomposition = function() {
  return /** @type{?proto.web.communitygames.TeamComposition} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.TeamComposition, 12));
};


/**
 * @param {?proto.web.communitygames.TeamComposition|undefined} value
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
*/
proto.web.communitygames.CreatePlaygroundRequest.prototype.setTeamcomposition = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.CreatePlaygroundRequest} returns this
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.clearTeamcomposition = function() {
  return this.setTeamcomposition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.CreatePlaygroundRequest.prototype.hasTeamcomposition = function() {
  return jspb.Message.getField(this, 12) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.UpdatePlaygroundRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.UpdatePlaygroundRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.UpdatePlaygroundRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.UpdatePlaygroundRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    newplayground: (f = msg.getNewplayground()) && proto.web.communitygames.Playground.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.UpdatePlaygroundRequest}
 */
proto.web.communitygames.UpdatePlaygroundRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.UpdatePlaygroundRequest;
  return proto.web.communitygames.UpdatePlaygroundRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.UpdatePlaygroundRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.UpdatePlaygroundRequest}
 */
proto.web.communitygames.UpdatePlaygroundRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.web.communitygames.Playground;
      reader.readMessage(value,proto.web.communitygames.Playground.deserializeBinaryFromReader);
      msg.setNewplayground(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.UpdatePlaygroundRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.UpdatePlaygroundRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.UpdatePlaygroundRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.UpdatePlaygroundRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewplayground();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.Playground.serializeBinaryToWriter
    );
  }
};


/**
 * optional Playground newPlayground = 2;
 * @return {?proto.web.communitygames.Playground}
 */
proto.web.communitygames.UpdatePlaygroundRequest.prototype.getNewplayground = function() {
  return /** @type{?proto.web.communitygames.Playground} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.Playground, 2));
};


/**
 * @param {?proto.web.communitygames.Playground|undefined} value
 * @return {!proto.web.communitygames.UpdatePlaygroundRequest} returns this
*/
proto.web.communitygames.UpdatePlaygroundRequest.prototype.setNewplayground = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.UpdatePlaygroundRequest} returns this
 */
proto.web.communitygames.UpdatePlaygroundRequest.prototype.clearNewplayground = function() {
  return this.setNewplayground(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.UpdatePlaygroundRequest.prototype.hasNewplayground = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.DeletePlaygroundRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.DeletePlaygroundRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.DeletePlaygroundRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.DeletePlaygroundRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    playgroundid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.DeletePlaygroundRequest}
 */
proto.web.communitygames.DeletePlaygroundRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.DeletePlaygroundRequest;
  return proto.web.communitygames.DeletePlaygroundRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.DeletePlaygroundRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.DeletePlaygroundRequest}
 */
proto.web.communitygames.DeletePlaygroundRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaygroundid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.DeletePlaygroundRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.DeletePlaygroundRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.DeletePlaygroundRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.DeletePlaygroundRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaygroundid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string playgroundId = 1;
 * @return {string}
 */
proto.web.communitygames.DeletePlaygroundRequest.prototype.getPlaygroundid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.DeletePlaygroundRequest} returns this
 */
proto.web.communitygames.DeletePlaygroundRequest.prototype.setPlaygroundid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.GetPlaygroundRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.GetPlaygroundRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.GetPlaygroundRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetPlaygroundRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    playgroundid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.GetPlaygroundRequest}
 */
proto.web.communitygames.GetPlaygroundRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.GetPlaygroundRequest;
  return proto.web.communitygames.GetPlaygroundRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.GetPlaygroundRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.GetPlaygroundRequest}
 */
proto.web.communitygames.GetPlaygroundRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaygroundid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.GetPlaygroundRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.GetPlaygroundRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.GetPlaygroundRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.GetPlaygroundRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaygroundid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string playgroundId = 2;
 * @return {string}
 */
proto.web.communitygames.GetPlaygroundRequest.prototype.getPlaygroundid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.GetPlaygroundRequest} returns this
 */
proto.web.communitygames.GetPlaygroundRequest.prototype.setPlaygroundid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.SharePlaygroundRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.SharePlaygroundRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.SharePlaygroundRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.SharePlaygroundRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    playgroundid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.SharePlaygroundRequest}
 */
proto.web.communitygames.SharePlaygroundRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.SharePlaygroundRequest;
  return proto.web.communitygames.SharePlaygroundRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.SharePlaygroundRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.SharePlaygroundRequest}
 */
proto.web.communitygames.SharePlaygroundRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaygroundid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.SharePlaygroundRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.SharePlaygroundRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.SharePlaygroundRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.SharePlaygroundRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaygroundid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string playgroundId = 1;
 * @return {string}
 */
proto.web.communitygames.SharePlaygroundRequest.prototype.getPlaygroundid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.web.communitygames.SharePlaygroundRequest} returns this
 */
proto.web.communitygames.SharePlaygroundRequest.prototype.setPlaygroundid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.SharePlaygroundResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.SharePlaygroundResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.SharePlaygroundResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.SharePlaygroundResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    shortcode: (f = msg.getShortcode()) && proto.web.communitygames.ShortCode.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.SharePlaygroundResponse}
 */
proto.web.communitygames.SharePlaygroundResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.SharePlaygroundResponse;
  return proto.web.communitygames.SharePlaygroundResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.SharePlaygroundResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.SharePlaygroundResponse}
 */
proto.web.communitygames.SharePlaygroundResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.ShortCode;
      reader.readMessage(value,proto.web.communitygames.ShortCode.deserializeBinaryFromReader);
      msg.setShortcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.SharePlaygroundResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.SharePlaygroundResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.SharePlaygroundResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.SharePlaygroundResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShortcode();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.ShortCode.serializeBinaryToWriter
    );
  }
};


/**
 * optional ShortCode shortCode = 1;
 * @return {?proto.web.communitygames.ShortCode}
 */
proto.web.communitygames.SharePlaygroundResponse.prototype.getShortcode = function() {
  return /** @type{?proto.web.communitygames.ShortCode} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.ShortCode, 1));
};


/**
 * @param {?proto.web.communitygames.ShortCode|undefined} value
 * @return {!proto.web.communitygames.SharePlaygroundResponse} returns this
*/
proto.web.communitygames.SharePlaygroundResponse.prototype.setShortcode = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.SharePlaygroundResponse} returns this
 */
proto.web.communitygames.SharePlaygroundResponse.prototype.clearShortcode = function() {
  return this.setShortcode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.SharePlaygroundResponse.prototype.hasShortcode = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.CreatePlaygroundResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.CreatePlaygroundResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.CreatePlaygroundResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.CreatePlaygroundResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    playgroundresponse: (f = msg.getPlaygroundresponse()) && proto.web.communitygames.PlaygroundResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.CreatePlaygroundResponse}
 */
proto.web.communitygames.CreatePlaygroundResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.CreatePlaygroundResponse;
  return proto.web.communitygames.CreatePlaygroundResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.CreatePlaygroundResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.CreatePlaygroundResponse}
 */
proto.web.communitygames.CreatePlaygroundResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.web.communitygames.PlaygroundResponse;
      reader.readMessage(value,proto.web.communitygames.PlaygroundResponse.deserializeBinaryFromReader);
      msg.setPlaygroundresponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.CreatePlaygroundResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.CreatePlaygroundResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.CreatePlaygroundResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.CreatePlaygroundResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaygroundresponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.PlaygroundResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional PlaygroundResponse playgroundResponse = 2;
 * @return {?proto.web.communitygames.PlaygroundResponse}
 */
proto.web.communitygames.CreatePlaygroundResponse.prototype.getPlaygroundresponse = function() {
  return /** @type{?proto.web.communitygames.PlaygroundResponse} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.PlaygroundResponse, 2));
};


/**
 * @param {?proto.web.communitygames.PlaygroundResponse|undefined} value
 * @return {!proto.web.communitygames.CreatePlaygroundResponse} returns this
*/
proto.web.communitygames.CreatePlaygroundResponse.prototype.setPlaygroundresponse = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.CreatePlaygroundResponse} returns this
 */
proto.web.communitygames.CreatePlaygroundResponse.prototype.clearPlaygroundresponse = function() {
  return this.setPlaygroundresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.CreatePlaygroundResponse.prototype.hasPlaygroundresponse = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.UpdatePlaygroundResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.UpdatePlaygroundResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.UpdatePlaygroundResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.UpdatePlaygroundResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    playgroundresponse: (f = msg.getPlaygroundresponse()) && proto.web.communitygames.PlaygroundResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.UpdatePlaygroundResponse}
 */
proto.web.communitygames.UpdatePlaygroundResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.UpdatePlaygroundResponse;
  return proto.web.communitygames.UpdatePlaygroundResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.UpdatePlaygroundResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.UpdatePlaygroundResponse}
 */
proto.web.communitygames.UpdatePlaygroundResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.web.communitygames.PlaygroundResponse;
      reader.readMessage(value,proto.web.communitygames.PlaygroundResponse.deserializeBinaryFromReader);
      msg.setPlaygroundresponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.UpdatePlaygroundResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.UpdatePlaygroundResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.UpdatePlaygroundResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.UpdatePlaygroundResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaygroundresponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.web.communitygames.PlaygroundResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional PlaygroundResponse playgroundResponse = 2;
 * @return {?proto.web.communitygames.PlaygroundResponse}
 */
proto.web.communitygames.UpdatePlaygroundResponse.prototype.getPlaygroundresponse = function() {
  return /** @type{?proto.web.communitygames.PlaygroundResponse} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.PlaygroundResponse, 2));
};


/**
 * @param {?proto.web.communitygames.PlaygroundResponse|undefined} value
 * @return {!proto.web.communitygames.UpdatePlaygroundResponse} returns this
*/
proto.web.communitygames.UpdatePlaygroundResponse.prototype.setPlaygroundresponse = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.UpdatePlaygroundResponse} returns this
 */
proto.web.communitygames.UpdatePlaygroundResponse.prototype.clearPlaygroundresponse = function() {
  return this.setPlaygroundresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.UpdatePlaygroundResponse.prototype.hasPlaygroundresponse = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.DeletePlaygroundResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.DeletePlaygroundResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.DeletePlaygroundResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.DeletePlaygroundResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.DeletePlaygroundResponse}
 */
proto.web.communitygames.DeletePlaygroundResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.DeletePlaygroundResponse;
  return proto.web.communitygames.DeletePlaygroundResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.DeletePlaygroundResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.DeletePlaygroundResponse}
 */
proto.web.communitygames.DeletePlaygroundResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.DeletePlaygroundResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.DeletePlaygroundResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.DeletePlaygroundResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.DeletePlaygroundResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.web.communitygames.PlaygroundInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.web.communitygames.PlaygroundInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.web.communitygames.PlaygroundInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.PlaygroundInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    playground: (f = msg.getPlayground()) && proto.web.communitygames.PlaygroundResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.web.communitygames.PlaygroundInfoResponse}
 */
proto.web.communitygames.PlaygroundInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.web.communitygames.PlaygroundInfoResponse;
  return proto.web.communitygames.PlaygroundInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.web.communitygames.PlaygroundInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.web.communitygames.PlaygroundInfoResponse}
 */
proto.web.communitygames.PlaygroundInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.web.communitygames.PlaygroundResponse;
      reader.readMessage(value,proto.web.communitygames.PlaygroundResponse.deserializeBinaryFromReader);
      msg.setPlayground(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.web.communitygames.PlaygroundInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.web.communitygames.PlaygroundInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.web.communitygames.PlaygroundInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.web.communitygames.PlaygroundInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayground();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.web.communitygames.PlaygroundResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional PlaygroundResponse playground = 1;
 * @return {?proto.web.communitygames.PlaygroundResponse}
 */
proto.web.communitygames.PlaygroundInfoResponse.prototype.getPlayground = function() {
  return /** @type{?proto.web.communitygames.PlaygroundResponse} */ (
    jspb.Message.getWrapperField(this, proto.web.communitygames.PlaygroundResponse, 1));
};


/**
 * @param {?proto.web.communitygames.PlaygroundResponse|undefined} value
 * @return {!proto.web.communitygames.PlaygroundInfoResponse} returns this
*/
proto.web.communitygames.PlaygroundInfoResponse.prototype.setPlayground = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.web.communitygames.PlaygroundInfoResponse} returns this
 */
proto.web.communitygames.PlaygroundInfoResponse.prototype.clearPlayground = function() {
  return this.setPlayground(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.web.communitygames.PlaygroundInfoResponse.prototype.hasPlayground = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.web.communitygames.Platform = {
  UNKNOWN: 0,
  PC: 1,
  PS4: 2,
  XBOXONE: 3,
  PS5: 4,
  XBSX: 5,
  COMMON: 6
};

/**
 * @enum {number}
 */
proto.web.communitygames.InputMethods = {
  ALL: 0,
  KEYBOARD_MOUSE: 1,
  GAME_CONTROLLER: 3
};

/**
 * @enum {number}
 */
proto.web.communitygames.IncludeFields = {
  AVAILABLE_GAME_DATA: 0,
  METADATA: 1,
  CUSTOM_DATA: 2,
  CONSTRAINTS: 3,
  AVAILABLE_TAGS: 4
};

/**
 * @enum {number}
 */
proto.web.communitygames.State = {
  ACTIVE: 0,
  ARCHIVED: 1
};

/**
 * @enum {number}
 */
proto.web.communitygames.Category = {
  CATEGORY_UNKNOWN: 0,
  CATEGORY_MODE: 1,
  CATEGORY_PACKAGE: 2,
  CATEGORY_GENERAL: 3
};

/**
 * @enum {number}
 */
proto.web.communitygames.PhantomGameState = {
  ENABLED: 0,
  DISABLED: 1
};

/**
 * @enum {number}
 */
proto.web.communitygames.CapacityType = {
  AI_BACKFILL: 0,
  AI_STATIC: 1
};

/**
 * @enum {number}
 */
proto.web.communitygames.RotationBehavior = {
  LOOP: 0,
  MATCHMAKE: 1,
  ONE_MAP: 2
};

/**
 * @enum {number}
 */
proto.web.communitygames.RoundBehavior = {
  CONTINUE: 0
};

/**
 * @enum {number}
 */
proto.web.communitygames.BalancingMethod = {
  UNSPECIFIED: 0,
  EVEN_NUMBERS: 1,
  EVEN_PERCENTAGE: 2,
  FILL_IN_TEAM_ORDER: 3
};

goog.object.extend(exports, proto.web.communitygames);

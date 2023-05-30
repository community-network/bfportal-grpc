# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: communitygames.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14\x63ommunitygames.proto\x12\x12web.communitygames\"_\n\x10ProgressionEntry\x12\x17\n\x0fprogressionMode\x18\x01 \x01(\t\x12\x32\n\rprogressibles\x18\x02 \x03(\x0b\x32\x1b.web.communitygames.Mutator\":\n\x13TranslationMetadata\x12\x0c\n\x04kind\x18\x01 \x01(\t\x12\x15\n\rtranslationId\x18\x02 \x01(\t\",\n\x10ResourceLocation\x12\x0b\n\x03ref\x18\x01 \x01(\t\x12\x0b\n\x03url\x18\x02 \x01(\t\"P\n\x08Resource\x12\x36\n\x08location\x18\x01 \x01(\x0b\x32$.web.communitygames.ResourceLocation\x12\x0c\n\x04kind\x18\x02 \x01(\t\"z\n\x08Metadata\x12=\n\x0ctranslations\x18\x01 \x03(\x0b\x32\'.web.communitygames.TranslationMetadata\x12/\n\tresources\x18\x02 \x03(\x0b\x32\x1c.web.communitygames.Resource\"T\n\x03Tag\x12\n\n\x02id\x18\x01 \x01(\t\x12\x11\n\tsortOrder\x18\x02 \x01(\x05\x12.\n\x08metadata\x18\x03 \x01(\x0b\x32\x1c.web.communitygames.Metadata\" \n\x0fProgressionMode\x12\r\n\x05value\x18\x01 \x01(\t\"\xf1\x01\n\x12PlaygroundResponse\x12:\n\x12originalPlayground\x18\x01 \x01(\x0b\x32\x1e.web.communitygames.Playground\x12;\n\x13validatedPlayground\x18\x02 \x01(\x0b\x32\x1e.web.communitygames.Playground\x12$\n\x03tag\x18\x03 \x03(\x0b\x32\x17.web.communitygames.Tag\x12<\n\x0fprogressionMode\x18\x04 \x01(\x0b\x32#.web.communitygames.ProgressionMode\"\xd0\x01\n\x07MapInfo\x12\x0f\n\x07mapname\x18\x01 \x01(\t\x12\x0c\n\x04mode\x18\x02 \x01(\t\x12\x10\n\x08gameSize\x18\x03 \x01(\r\x12\x0e\n\x06rounds\x18\x04 \x01(\r\x12-\n\x08mutators\x18\x05 \x01(\x0b\x32\x1b.web.communitygames.Mutator\x12\x10\n\x08location\x18\x06 \x01(\t\x12\x14\n\x0cpreRoundSize\x18\x07 \x01(\r\x12\x12\n\nwarmUpSize\x18\x08 \x01(\r\x12\x19\n\x11\x61llowedSpectators\x18\t \x01(\r\"\xb2\x01\n\x0bMapRotation\x12)\n\x04maps\x18\x01 \x03(\x0b\x32\x1b.web.communitygames.MapInfo\x12>\n\x10rotationBehavior\x18\x02 \x01(\x0e\x32$.web.communitygames.RotationBehavior\x12\x38\n\rroundBehavior\x18\x03 \x01(\x0e\x32!.web.communitygames.RoundBehavior\"1\n\rTeamStructure\x12\x0e\n\x06teamId\x18\x01 \x01(\x05\x12\x10\n\x08\x63\x61pacity\x18\x02 \x01(\x05\"q\n\x15InternalTeamStructure\x12\x0e\n\x06teamId\x18\x01 \x01(\x05\x12\x10\n\x08\x63\x61pacity\x18\x02 \x01(\x05\x12\x36\n\x0c\x63\x61pacityType\x18\x03 \x01(\x0e\x32 .web.communitygames.CapacityType\"7\n\x17MutatorSparseFloatEntry\x12\r\n\x05index\x18\x01 \x01(\r\x12\r\n\x05value\x18\x02 \x01(\x02\"{\n\x12MutatorSparseFloat\x12\x14\n\x0c\x64\x65\x66\x61ultValue\x18\x01 \x01(\x02\x12\x0c\n\x04size\x18\x02 \x01(\r\x12\x41\n\x0csparseValues\x18\x03 \x03(\x0b\x32+.web.communitygames.MutatorSparseFloatEntry\"\x1d\n\x0cMutatorFloat\x12\r\n\x05value\x18\x01 \x01(\x02\"#\n\x0eMutatorBoolean\x12\x11\n\tboolValue\x18\x01 \x01(\x08\"$\n\rMutatorString\x12\x13\n\x0bstringValue\x18\x01 \x01(\t\"\x1b\n\nMutatorInt\x12\r\n\x05value\x18\x01 \x01(\x05\"9\n\x19MutatorSparseBooleanEntry\x12\r\n\x05index\x18\x01 \x01(\r\x12\r\n\x05value\x18\x02 \x01(\x08\"\x7f\n\x14MutatorSparseBoolean\x12\x14\n\x0c\x64\x65\x66\x61ultValue\x18\x01 \x01(\x08\x12\x0c\n\x04size\x18\x02 \x01(\r\x12\x43\n\x0csparseValues\x18\x03 \x03(\x0b\x32-.web.communitygames.MutatorSparseBooleanEntry\"!\n\x0fSparseIntEntity\x12\x0e\n\x06values\x18\x01 \x03(\x05\"5\n\x15MutatorSparseIntEntry\x12\r\n\x05index\x18\x01 \x01(\r\x12\r\n\x05value\x18\x02 \x01(\x05\"w\n\x10MutatorSparseInt\x12\x14\n\x0c\x64\x65\x66\x61ultValue\x18\x01 \x01(\x05\x12\x0c\n\x04size\x18\x02 \x01(\r\x12?\n\x0csparseValues\x18\x03 \x01(\x0b\x32).web.communitygames.MutatorSparseIntEntry\"\xbb\x03\n\x0bMutatorKind\x12:\n\x0emutatorBoolean\x18\x01 \x01(\x0b\x32\".web.communitygames.MutatorBoolean\x12\x38\n\rmutatorString\x18\x04 \x01(\x0b\x32!.web.communitygames.MutatorString\x12\x36\n\x0cmutatorFloat\x18\x05 \x01(\x0b\x32 .web.communitygames.MutatorFloat\x12\x32\n\nmutatorInt\x18\x06 \x01(\x0b\x32\x1e.web.communitygames.MutatorInt\x12\x46\n\x14mutatorSparseBoolean\x18\x07 \x01(\x0b\x32(.web.communitygames.MutatorSparseBoolean\x12>\n\x10mutatorSparseInt\x18\x08 \x01(\x0b\x32$.web.communitygames.MutatorSparseInt\x12\x42\n\x12mutatorSparseFloat\x18\t \x01(\x0b\x32&.web.communitygames.MutatorSparseFloat\"\xc3\x01\n\x0fTeamComposition\x12\x30\n\x05teams\x18\x01 \x01(\x0b\x32!.web.communitygames.TeamStructure\x12@\n\rinternalTeams\x18\x02 \x03(\x0b\x32).web.communitygames.InternalTeamStructure\x12<\n\x0f\x62\x61lancingMethod\x18\x03 \x01(\x0e\x32#.web.communitygames.BalancingMethod\"d\n\x07Mutator\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x10\n\x08\x63\x61tegory\x18\x02 \x01(\t\x12-\n\x04kind\x18\x03 \x01(\x0b\x32\x1f.web.communitygames.MutatorKind\x12\n\n\x02id\x18\x04 \x01(\t\"/\n\tTimestamp\x12\x13\n\x07seconds\x18\x01 \x01(\x03\x42\x02\x30\x01\x12\r\n\x05nanos\x18\x02 \x01(\x05\"\x1c\n\x0bStringValue\x12\r\n\x05value\x18\x01 \x01(\t\"/\n\x11GameServerMessage\x12\x0c\n\x04kind\x18\x01 \x01(\t\x12\x0c\n\x04text\x18\x02 \x01(\t\"\xcb\x02\n\x12GameServerSettings\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x34\n\x0b\x64\x65scription\x18\x02 \x01(\x0b\x32\x1f.web.communitygames.StringValue\x12@\n\x11gameServerMessage\x18\x03 \x03(\x0b\x32%.web.communitygames.GameServerMessage\x12\x33\n\nconfigName\x18\x04 \x01(\x0b\x32\x1f.web.communitygames.StringValue\x12:\n\x11\x43onfigDescription\x18\x05 \x01(\x0b\x32\x1f.web.communitygames.StringValue\x12>\n\x10phantomGameState\x18\x06 \x01(\x0e\x32$.web.communitygames.PhantomGameState\"l\n\nPlayerInfo\x12\x15\n\tnucleusId\x18\x01 \x01(\x04\x42\x02\x30\x01\x12\x15\n\tpersonaId\x18\x02 \x01(\x04\x42\x02\x30\x01\x12\x30\n\nplatformId\x18\x03 \x01(\x0e\x32\x1c.web.communitygames.Platform\"G\n\x14PlatformRestrictions\x12/\n\tplatforms\x18\x01 \x03(\x0e\x32\x1c.web.communitygames.Platform\"P\n\x16InputMethodResrictions\x12\x36\n\x0cinputMethods\x18\x01 \x03(\x0e\x32 .web.communitygames.InputMethods\"\xa4\x01\n\x0cRestrictions\x12\x46\n\x14platformRestrictions\x18\x01 \x01(\x0b\x32(.web.communitygames.PlatformRestrictions\x12L\n\x18inputMethodResctrictions\x18\x02 \x01(\x0b\x32*.web.communitygames.InputMethodResrictions\"R\n\nCompressed\x12\x18\n\x10\x63ompiledModRules\x18\x01 \x01(\x0c\x12\x14\n\x0crulesVersion\x18\x02 \x01(\x05\x12\x14\n\x0cinflatedSize\x18\x03 \x01(\x05\">\n\x0cUncompressed\x12\x18\n\x10\x63ompiledModRules\x18\x01 \x01(\x0c\x12\x14\n\x0crulesVersion\x18\x02 \x01(\x05\"{\n\rCompiledRules\x12\x36\n\x0cuncompressed\x18\x01 \x01(\x0b\x32 .web.communitygames.Uncompressed\x12\x32\n\ncompressed\x18\x02 \x01(\x0b\x32\x1e.web.communitygames.Compressed\"n\n\x12\x43ompatibleModRules\x12\r\n\x05rules\x18\x01 \x01(\x0c\x12\x14\n\x0crulesVersion\x18\x03 \x01(\x05\x12\x33\n\x08\x63ompiled\x18\x04 \x01(\x0b\x32!.web.communitygames.CompiledRules\"Z\n\x14InCompatibleModRules\x12\r\n\x05rules\x18\x01 \x01(\x0c\x12\x14\n\x0crulesVersion\x18\x02 \x01(\x05\x12\x1d\n\x15\x62lueprintRulesVersion\x18\x03 \x01(\x05\"\x98\x01\n\x10OriginalModRules\x12?\n\x0f\x63ompatibleRules\x18\x01 \x01(\x0b\x32&.web.communitygames.CompatibleModRules\x12\x43\n\x11incompatibleRules\x18\x02 \x01(\x0b\x32(.web.communitygames.InCompatibleModRules\"K\n\x1f\x41ssetCategoryTagBooleanOverride\x12\x19\n\x11\x61ssetCategoryTags\x18\x01 \x03(\t\x12\r\n\x05value\x18\x02 \x01(\x08\"_\n#AssetCategoryTagBooleanTeamOverride\x12\x19\n\x11\x61ssetCategoryTags\x18\x01 \x03(\t\x12\r\n\x05value\x18\x02 \x01(\x08\x12\x0e\n\x06teamId\x18\x03 \x01(\r\"\xc4\x01\n\x14\x41ssetCategoryBoolean\x12\x14\n\x0c\x64\x65\x66\x61ultValue\x18\x01 \x01(\x08\x12\x46\n\toverrides\x18\x02 \x01(\x0b\x32\x33.web.communitygames.AssetCategoryTagBooleanOverride\x12N\n\rteamOverrides\x18\x03 \x03(\x0b\x32\x37.web.communitygames.AssetCategoryTagBooleanTeamOverride\"Y\n\rAssetCategory\x12\r\n\x05tagId\x18\x01 \x01(\t\x12\x39\n\x07\x62oolean\x18\x02 \x01(\x0b\x32(.web.communitygames.AssetCategoryBoolean\"\xca\x05\n\nPlayground\x12\x14\n\x0cplaygroundId\x18\x01 \x01(\t\x12\x15\n\rblueprintType\x18\x03 \x01(\t\x12\x0c\n\x04name\x18\x04 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x05 \x01(\t\x12-\n\x08mutators\x18\x06 \x03(\x0b\x32\x1b.web.communitygames.Mutator\x12\x34\n\x0bmapRotation\x18\x07 \x01(\x0b\x32\x1f.web.communitygames.MapRotation\x12(\n\x05state\x18\x08 \x01(\x0e\x32\x19.web.communitygames.State\x12\x10\n\x08\x63hecksum\x18\t \x01(\t\x12\x0e\n\x06secret\x18\n \x01(\t\x12\x30\n\tcreatedAt\x18\x0b \x01(\x0b\x32\x1d.web.communitygames.Timestamp\x12\x30\n\tupdatedAt\x18\x0c \x01(\x0b\x32\x1d.web.communitygames.Timestamp\x12>\n\x0eserverSettings\x18\r \x01(\x0b\x32&.web.communitygames.GameServerSettings\x12-\n\x05owner\x18\x0e \x01(\x0b\x32\x1e.web.communitygames.PlayerInfo\x12\x36\n\x0crestrictions\x18\x0f \x01(\x0b\x32 .web.communitygames.Restrictions\x12\x36\n\x08modRules\x18\x10 \x01(\x0b\x32$.web.communitygames.OriginalModRules\x12:\n\x0f\x61ssetCategories\x18\x11 \x03(\x0b\x32!.web.communitygames.AssetCategory\x12<\n\x0fteamComposition\x18\x12 \x01(\x0b\x32#.web.communitygames.TeamComposition\"6\n\x1dListPlaygroundsByOwnerRequest\x12\x15\n\rblueprintType\x18\x01 \x01(\t\"\x17\n\x15GetConstraintsRequest\"j\n\x18GetBlueprintsByIdRequest\x12\x14\n\x0c\x62lueprintIds\x18\x01 \x03(\t\x12\x38\n\rincludeFields\x18\x02 \x03(\x0e\x32!.web.communitygames.IncludeFields\"w\n\x11GlobalConstraints\x12\x1f\n\x17maxPlaygroundsPerPlayer\x18\x01 \x01(\x05\x12\x1f\n\x17maxGameServersPerPlayer\x18\x02 \x01(\x05\x12 \n\x18maxFollowedHostsListSize\x18\x03 \x01(\x05\".\n\x08IntRange\x12\x10\n\x08minValue\x18\x01 \x01(\x05\x12\x10\n\x08maxValue\x18\x02 \x01(\x05\"|\n\x12\x41vailableIntValues\x12+\n\x05range\x18\x01 \x01(\x0b\x32\x1c.web.communitygames.IntRange\x12\x39\n\x0csparseValues\x18\x02 \x01(\x0b\x32#.web.communitygames.SparseIntEntity\"j\n\x11\x41vailableIntValue\x12\x14\n\x0c\x64\x65\x66\x61ultValue\x18\x01 \x01(\x05\x12?\n\x0f\x61vailableValues\x18\x02 \x01(\x0b\x32&.web.communitygames.AvailableIntValues\"#\n\x11SparseFloatValues\x12\x0e\n\x06values\x18\x01 \x03(\x02\"0\n\nFloatRange\x12\x10\n\x08minValue\x18\x01 \x01(\x02\x12\x10\n\x08maxValue\x18\x02 \x01(\x02\"\x82\x01\n\x14\x41vailableFloatValues\x12-\n\x05range\x18\x01 \x01(\x0b\x32\x1e.web.communitygames.FloatRange\x12;\n\x0csparseValues\x18\x02 \x01(\x0b\x32%.web.communitygames.SparseFloatValues\"\x93\x01\n\x1b\x41vailableMutatorFloatValues\x12\x31\n\x07mutator\x18\x01 \x01(\x0b\x32 .web.communitygames.MutatorFloat\x12\x41\n\x0f\x61vailableValues\x18\x02 \x01(\x0b\x32(.web.communitygames.AvailableFloatValues\"\x8d\x01\n\x19\x41vailableMutatorIntValues\x12/\n\x07mutator\x18\x01 \x01(\x0b\x32\x1e.web.communitygames.MutatorInt\x12?\n\x0f\x61vailableValues\x18\x02 \x01(\x0b\x32&.web.communitygames.AvailableIntValues\"\x99\x01\n\x1f\x41vailableMutatorSparseIntValues\x12\x35\n\x07mutator\x18\x01 \x01(\x0b\x32$.web.communitygames.MutatorSparseInt\x12?\n\x0f\x61vailableValues\x18\x02 \x01(\x0b\x32&.web.communitygames.AvailableIntValues\"\x9f\x01\n!AvailableMutatorSparseFloatValues\x12\x37\n\x07mutator\x18\x01 \x01(\x0b\x32&.web.communitygames.MutatorSparseFloat\x12\x41\n\x0f\x61vailableValues\x18\x02 \x01(\x0b\x32(.web.communitygames.AvailableFloatValues\"\x98\x04\n\x14\x41vailableMutatorKind\x12:\n\x0emutatorBoolean\x18\x01 \x01(\x0b\x32\".web.communitygames.MutatorBoolean\x12\x38\n\rmutatorString\x18\x04 \x01(\x0b\x32!.web.communitygames.MutatorString\x12K\n\x12mutatorFloatValues\x18\x07 \x01(\x0b\x32/.web.communitygames.AvailableMutatorFloatValues\x12G\n\x10mutatorIntValues\x18\x08 \x01(\x0b\x32-.web.communitygames.AvailableMutatorIntValues\x12\x46\n\x14mutatorSparseBoolean\x18\t \x01(\x0b\x32(.web.communitygames.MutatorSparseBoolean\x12S\n\x16mutatorSparseIntValues\x18\n \x01(\x0b\x32\x33.web.communitygames.AvailableMutatorSparseIntValues\x12W\n\x18mutatorSparseFloatValues\x18\x0b \x01(\x0b\x32\x35.web.communitygames.AvailableMutatorSparseFloatValues\"\xa6\x01\n\x10\x41vailableMutator\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x10\n\x08\x63\x61tegory\x18\x02 \x01(\t\x12\x36\n\x04kind\x18\x03 \x01(\x0b\x32(.web.communitygames.AvailableMutatorKind\x12.\n\x08metadata\x18\x04 \x01(\x0b\x32\x1c.web.communitygames.Metadata\x12\n\n\x02id\x18\x05 \x01(\t\"\xe1\x03\n\x11\x41vailableMapEntry\x12\x11\n\tlevelName\x18\x01 \x01(\t\x12\x10\n\x08gameMode\x18\x02 \x01(\t\x12\x15\n\rlevelLocation\x18\x03 \x01(\t\x12\x37\n\x08gameSize\x18\x04 \x01(\x0b\x32%.web.communitygames.AvailableIntValue\x12\x35\n\x06rounds\x18\x05 \x01(\x0b\x32%.web.communitygames.AvailableIntValue\x12;\n\x0cpreRoundSize\x18\x06 \x01(\x0b\x32%.web.communitygames.AvailableIntValue\x12\x39\n\nwarmUpSize\x18\x07 \x01(\x0b\x32%.web.communitygames.AvailableIntValue\x12@\n\x11\x61llowedSpectators\x18\x08 \x01(\x0b\x32%.web.communitygames.AvailableIntValue\x12\x36\n\x08mutators\x18\t \x03(\x0b\x32$.web.communitygames.AvailableMutator\x12.\n\x08metadata\x18\n \x03(\x0b\x32\x1c.web.communitygames.Metadata\"z\n\x0c\x41vailableTag\x12\n\n\x02id\x18\x01 \x01(\t\x12.\n\x08metadata\x18\x02 \x01(\x0b\x32\x1c.web.communitygames.Metadata\x12.\n\x08\x63\x61tegory\x18\x03 \x01(\x0e\x32\x1c.web.communitygames.Category\"~\n\x19\x41vailableAssetCategoryTag\x12\r\n\x05tagId\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x14\n\x0c\x63hildrenTags\x18\x03 \x03(\t\x12.\n\x08metadata\x18\x04 \x01(\x0b\x32\x1c.web.communitygames.Metadata\"\x98\x01\n\x18\x41vailableAssetCategories\x12?\n\x08rootTags\x18\x01 \x03(\x0b\x32-.web.communitygames.AvailableAssetCategoryTag\x12;\n\x04tags\x18\x02 \x03(\x0b\x32-.web.communitygames.AvailableAssetCategoryTag\"\xcc\x01\n\x15PlaygroundConstraints\x12\x13\n\x0bmaxNameSize\x18\x01 \x01(\x05\x12\x1a\n\x12maxDescriptionSize\x18\x02 \x01(\x05\x12\x15\n\rmaxSecretSize\x18\x03 \x01(\x05\x12\x19\n\x11maxMapsInRotation\x18\x04 \x01(\x05\x12\x13\n\x0bmaxMutators\x18\x05 \x01(\x05\x12\x19\n\x11maxConfigNameSize\x18\x06 \x01(\x05\x12 \n\x18maxConfigDescriptionSize\x18\x07 \x01(\x05\">\n\x12ModRulesDefinition\x12\x14\n\x0crulesVersion\x18\x01 \x01(\x05\x12\x12\n\nmodBuilder\x18\x02 \x01(\x0c\"\x81\x02\n\x11\x41vailableGameData\x12\x36\n\x08mutators\x18\x01 \x03(\x0b\x32$.web.communitygames.AvailableMutator\x12\x33\n\x04maps\x18\x02 \x03(\x0b\x32%.web.communitygames.AvailableMapEntry\x12\x38\n\x08modRules\x18\x04 \x01(\x0b\x32&.web.communitygames.ModRulesDefinition\x12\x45\n\x0f\x61ssetCategories\x18\x05 \x01(\x0b\x32,.web.communitygames.AvailableAssetCategories\"\xb9\x02\n\tBlueprint\x12\x15\n\rblueprintType\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12@\n\x11\x61vailableGameData\x18\x03 \x01(\x0b\x32%.web.communitygames.AvailableGameData\x12.\n\x08metadata\x18\x04 \x01(\x0b\x32\x1c.web.communitygames.Metadata\x12\x12\n\ncustomData\x18\x05 \x01(\x0c\x12H\n\x15playgroundConstraints\x18\x06 \x01(\x0b\x32).web.communitygames.PlaygroundConstraints\x12\x37\n\ravailableTags\x18\x07 \x03(\x0b\x32 .web.communitygames.AvailableTag\"\x19\n\tShortCode\x12\x0c\n\x04\x63ode\x18\x01 \x01(\t\"\x1c\n\x1aGetProgressionTypesRequest\";\n\rBlueprintInfo\x12\x15\n\rblueprintType\x18\x01 \x01(\t\x12\x13\n\x0b\x62lueprintId\x18\x02 \x01(\t\"T\n\x1bGetProgressionTypesResponse\x12\x35\n\x07\x65ntries\x18\x01 \x03(\x0b\x32$.web.communitygames.ProgressionEntry\"\x1f\n\x1dGetScheduledBlueprintsRequest\"W\n\x1eGetScheduledBlueprintsResponse\x12\x35\n\nblueprints\x18\x01 \x01(\x0b\x32!.web.communitygames.BlueprintInfo\"M\n\x19GetBlueprintsByIdResponse\x12\x30\n\tblueprint\x18\x01 \x03(\x0b\x32\x1d.web.communitygames.Blueprint\"Z\n\x16GetConstraintsResponse\x12@\n\x11globalConstraints\x18\x01 \x01(\x0b\x32%.web.communitygames.GlobalConstraints\"e\n\x1eListPlaygroundsByOwnerResponse\x12\x43\n\x13playgroundResponses\x18\x02 \x03(\x0b\x32&.web.communitygames.PlaygroundResponse\"\x96\x04\n\x17\x43reatePlaygroundRequest\x12\x15\n\rblueprintType\x18\x02 \x01(\t\x12\x0c\n\x04name\x18\x03 \x01(\t\x12\x34\n\x0b\x64\x65scription\x18\x04 \x01(\x0b\x32\x1f.web.communitygames.StringValue\x12-\n\x08mutators\x18\x05 \x03(\x0b\x32\x1b.web.communitygames.Mutator\x12\x34\n\x0bmapRotation\x18\x06 \x01(\x0b\x32\x1f.web.communitygames.MapRotation\x12/\n\x06secret\x18\x07 \x01(\x0b\x32\x1f.web.communitygames.StringValue\x12>\n\x0eserverSettings\x18\x08 \x01(\x0b\x32&.web.communitygames.GameServerSettings\x12\x36\n\x0crestrictions\x18\t \x01(\x0b\x32 .web.communitygames.Restrictions\x12\x18\n\x10originalModRules\x18\n \x01(\x0c\x12:\n\x0f\x61ssetCategories\x18\x0b \x03(\x0b\x32!.web.communitygames.AssetCategory\x12<\n\x0fteamComposition\x18\x0c \x01(\x0b\x32#.web.communitygames.TeamComposition\"P\n\x17UpdatePlaygroundRequest\x12\x35\n\rnewPlayground\x18\x02 \x01(\x0b\x32\x1e.web.communitygames.Playground\"/\n\x17\x44\x65letePlaygroundRequest\x12\x14\n\x0cplaygroundId\x18\x01 \x01(\t\",\n\x14GetPlaygroundRequest\x12\x14\n\x0cplaygroundId\x18\x02 \x01(\t\".\n\x16SharePlaygroundRequest\x12\x14\n\x0cplaygroundId\x18\x01 \x01(\t\"K\n\x17SharePlaygroundResponse\x12\x30\n\tshortCode\x18\x01 \x01(\x0b\x32\x1d.web.communitygames.ShortCode\"^\n\x18\x43reatePlaygroundResponse\x12\x42\n\x12playgroundResponse\x18\x02 \x01(\x0b\x32&.web.communitygames.PlaygroundResponse\"^\n\x18UpdatePlaygroundResponse\x12\x42\n\x12playgroundResponse\x18\x02 \x01(\x0b\x32&.web.communitygames.PlaygroundResponse\"\x1a\n\x18\x44\x65letePlaygroundResponse\"T\n\x16PlaygroundInfoResponse\x12:\n\nplayground\x18\x01 \x01(\x0b\x32&.web.communitygames.PlaygroundResponse*T\n\x08Platform\x12\x0b\n\x07UNKNOWN\x10\x00\x12\x06\n\x02PC\x10\x01\x12\x07\n\x03PS4\x10\x02\x12\x0b\n\x07XBOXONE\x10\x03\x12\x07\n\x03PS5\x10\x04\x12\x08\n\x04XBSX\x10\x05\x12\n\n\x06\x43OMMON\x10\x06*@\n\x0cInputMethods\x12\x07\n\x03\x41LL\x10\x00\x12\x12\n\x0eKEYBOARD_MOUSE\x10\x01\x12\x13\n\x0fGAME_CONTROLLER\x10\x03*l\n\rIncludeFields\x12\x17\n\x13\x41VAILABLE_GAME_DATA\x10\x00\x12\x0c\n\x08METADATA\x10\x01\x12\x0f\n\x0b\x43USTOM_DATA\x10\x02\x12\x0f\n\x0b\x43ONSTRAINTS\x10\x03\x12\x12\n\x0e\x41VAILABLE_TAGS\x10\x04*!\n\x05State\x12\n\n\x06\x41\x43TIVE\x10\x00\x12\x0c\n\x08\x41RCHIVED\x10\x01*_\n\x08\x43\x61tegory\x12\x14\n\x10\x43\x41TEGORY_UNKNOWN\x10\x00\x12\x11\n\rCATEGORY_MODE\x10\x01\x12\x14\n\x10\x43\x41TEGORY_PACKAGE\x10\x02\x12\x14\n\x10\x43\x41TEGORY_GENERAL\x10\x03*-\n\x10PhantomGameState\x12\x0b\n\x07\x45NABLED\x10\x00\x12\x0c\n\x08\x44ISABLED\x10\x01*.\n\x0c\x43\x61pacityType\x12\x0f\n\x0b\x41I_BACKFILL\x10\x00\x12\r\n\tAI_STATIC\x10\x01*8\n\x10RotationBehavior\x12\x08\n\x04LOOP\x10\x00\x12\r\n\tMATCHMAKE\x10\x01\x12\x0b\n\x07ONE_MAP\x10\x02*\x1d\n\rRoundBehavior\x12\x0c\n\x08\x43ONTINUE\x10\x00*a\n\x0f\x42\x61lancingMethod\x12\x0f\n\x0bUNSPECIFIED\x10\x00\x12\x10\n\x0c\x45VEN_NUMBERS\x10\x01\x12\x13\n\x0f\x45VEN_PERCENTAGE\x10\x02\x12\x16\n\x12\x46ILL_IN_TEAM_ORDER\x10\x03\x32\x9b\t\n\x0e\x43ommunityGames\x12o\n\x10\x63reatePlayground\x12+.web.communitygames.CreatePlaygroundRequest\x1a,.web.communitygames.CreatePlaygroundResponse\"\x00\x12o\n\x10updatePlayground\x12+.web.communitygames.UpdatePlaygroundRequest\x1a,.web.communitygames.UpdatePlaygroundResponse\"\x00\x12o\n\x10\x64\x65letePlayground\x12+.web.communitygames.DeletePlaygroundRequest\x1a,.web.communitygames.DeletePlaygroundResponse\"\x00\x12g\n\rgetPlayground\x12(.web.communitygames.GetPlaygroundRequest\x1a*.web.communitygames.PlaygroundInfoResponse\"\x00\x12\x81\x01\n\x16listPlaygroundsByOwner\x12\x31.web.communitygames.ListPlaygroundsByOwnerRequest\x1a\x32.web.communitygames.ListPlaygroundsByOwnerResponse\"\x00\x12r\n\x11getBlueprintsById\x12,.web.communitygames.GetBlueprintsByIdRequest\x1a-.web.communitygames.GetBlueprintsByIdResponse\"\x00\x12\x81\x01\n\x16getScheduledBlueprints\x12\x31.web.communitygames.GetScheduledBlueprintsRequest\x1a\x32.web.communitygames.GetScheduledBlueprintsResponse\"\x00\x12i\n\x0egetConstraints\x12).web.communitygames.GetConstraintsRequest\x1a*.web.communitygames.GetConstraintsResponse\"\x00\x12l\n\x0fsharePlayground\x12*.web.communitygames.SharePlaygroundRequest\x1a+.web.communitygames.SharePlaygroundResponse\"\x00\x12x\n\x13getProgressionTypes\x12..web.communitygames.GetProgressionTypesRequest\x1a/.web.communitygames.GetProgressionTypesResponse\"\x00\x62\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'communitygames_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _TIMESTAMP.fields_by_name['seconds']._options = None
  _TIMESTAMP.fields_by_name['seconds']._serialized_options = b'0\001'
  _PLAYERINFO.fields_by_name['nucleusId']._options = None
  _PLAYERINFO.fields_by_name['nucleusId']._serialized_options = b'0\001'
  _PLAYERINFO.fields_by_name['personaId']._options = None
  _PLAYERINFO.fields_by_name['personaId']._serialized_options = b'0\001'
  _PLATFORM._serialized_start=11159
  _PLATFORM._serialized_end=11243
  _INPUTMETHODS._serialized_start=11245
  _INPUTMETHODS._serialized_end=11309
  _INCLUDEFIELDS._serialized_start=11311
  _INCLUDEFIELDS._serialized_end=11419
  _STATE._serialized_start=11421
  _STATE._serialized_end=11454
  _CATEGORY._serialized_start=11456
  _CATEGORY._serialized_end=11551
  _PHANTOMGAMESTATE._serialized_start=11553
  _PHANTOMGAMESTATE._serialized_end=11598
  _CAPACITYTYPE._serialized_start=11600
  _CAPACITYTYPE._serialized_end=11646
  _ROTATIONBEHAVIOR._serialized_start=11648
  _ROTATIONBEHAVIOR._serialized_end=11704
  _ROUNDBEHAVIOR._serialized_start=11706
  _ROUNDBEHAVIOR._serialized_end=11735
  _BALANCINGMETHOD._serialized_start=11737
  _BALANCINGMETHOD._serialized_end=11834
  _PROGRESSIONENTRY._serialized_start=44
  _PROGRESSIONENTRY._serialized_end=139
  _TRANSLATIONMETADATA._serialized_start=141
  _TRANSLATIONMETADATA._serialized_end=199
  _RESOURCELOCATION._serialized_start=201
  _RESOURCELOCATION._serialized_end=245
  _RESOURCE._serialized_start=247
  _RESOURCE._serialized_end=327
  _METADATA._serialized_start=329
  _METADATA._serialized_end=451
  _TAG._serialized_start=453
  _TAG._serialized_end=537
  _PROGRESSIONMODE._serialized_start=539
  _PROGRESSIONMODE._serialized_end=571
  _PLAYGROUNDRESPONSE._serialized_start=574
  _PLAYGROUNDRESPONSE._serialized_end=815
  _MAPINFO._serialized_start=818
  _MAPINFO._serialized_end=1026
  _MAPROTATION._serialized_start=1029
  _MAPROTATION._serialized_end=1207
  _TEAMSTRUCTURE._serialized_start=1209
  _TEAMSTRUCTURE._serialized_end=1258
  _INTERNALTEAMSTRUCTURE._serialized_start=1260
  _INTERNALTEAMSTRUCTURE._serialized_end=1373
  _MUTATORSPARSEFLOATENTRY._serialized_start=1375
  _MUTATORSPARSEFLOATENTRY._serialized_end=1430
  _MUTATORSPARSEFLOAT._serialized_start=1432
  _MUTATORSPARSEFLOAT._serialized_end=1555
  _MUTATORFLOAT._serialized_start=1557
  _MUTATORFLOAT._serialized_end=1586
  _MUTATORBOOLEAN._serialized_start=1588
  _MUTATORBOOLEAN._serialized_end=1623
  _MUTATORSTRING._serialized_start=1625
  _MUTATORSTRING._serialized_end=1661
  _MUTATORINT._serialized_start=1663
  _MUTATORINT._serialized_end=1690
  _MUTATORSPARSEBOOLEANENTRY._serialized_start=1692
  _MUTATORSPARSEBOOLEANENTRY._serialized_end=1749
  _MUTATORSPARSEBOOLEAN._serialized_start=1751
  _MUTATORSPARSEBOOLEAN._serialized_end=1878
  _SPARSEINTENTITY._serialized_start=1880
  _SPARSEINTENTITY._serialized_end=1913
  _MUTATORSPARSEINTENTRY._serialized_start=1915
  _MUTATORSPARSEINTENTRY._serialized_end=1968
  _MUTATORSPARSEINT._serialized_start=1970
  _MUTATORSPARSEINT._serialized_end=2089
  _MUTATORKIND._serialized_start=2092
  _MUTATORKIND._serialized_end=2535
  _TEAMCOMPOSITION._serialized_start=2538
  _TEAMCOMPOSITION._serialized_end=2733
  _MUTATOR._serialized_start=2735
  _MUTATOR._serialized_end=2835
  _TIMESTAMP._serialized_start=2837
  _TIMESTAMP._serialized_end=2884
  _STRINGVALUE._serialized_start=2886
  _STRINGVALUE._serialized_end=2914
  _GAMESERVERMESSAGE._serialized_start=2916
  _GAMESERVERMESSAGE._serialized_end=2963
  _GAMESERVERSETTINGS._serialized_start=2966
  _GAMESERVERSETTINGS._serialized_end=3297
  _PLAYERINFO._serialized_start=3299
  _PLAYERINFO._serialized_end=3407
  _PLATFORMRESTRICTIONS._serialized_start=3409
  _PLATFORMRESTRICTIONS._serialized_end=3480
  _INPUTMETHODRESRICTIONS._serialized_start=3482
  _INPUTMETHODRESRICTIONS._serialized_end=3562
  _RESTRICTIONS._serialized_start=3565
  _RESTRICTIONS._serialized_end=3729
  _COMPRESSED._serialized_start=3731
  _COMPRESSED._serialized_end=3813
  _UNCOMPRESSED._serialized_start=3815
  _UNCOMPRESSED._serialized_end=3877
  _COMPILEDRULES._serialized_start=3879
  _COMPILEDRULES._serialized_end=4002
  _COMPATIBLEMODRULES._serialized_start=4004
  _COMPATIBLEMODRULES._serialized_end=4114
  _INCOMPATIBLEMODRULES._serialized_start=4116
  _INCOMPATIBLEMODRULES._serialized_end=4206
  _ORIGINALMODRULES._serialized_start=4209
  _ORIGINALMODRULES._serialized_end=4361
  _ASSETCATEGORYTAGBOOLEANOVERRIDE._serialized_start=4363
  _ASSETCATEGORYTAGBOOLEANOVERRIDE._serialized_end=4438
  _ASSETCATEGORYTAGBOOLEANTEAMOVERRIDE._serialized_start=4440
  _ASSETCATEGORYTAGBOOLEANTEAMOVERRIDE._serialized_end=4535
  _ASSETCATEGORYBOOLEAN._serialized_start=4538
  _ASSETCATEGORYBOOLEAN._serialized_end=4734
  _ASSETCATEGORY._serialized_start=4736
  _ASSETCATEGORY._serialized_end=4825
  _PLAYGROUND._serialized_start=4828
  _PLAYGROUND._serialized_end=5542
  _LISTPLAYGROUNDSBYOWNERREQUEST._serialized_start=5544
  _LISTPLAYGROUNDSBYOWNERREQUEST._serialized_end=5598
  _GETCONSTRAINTSREQUEST._serialized_start=5600
  _GETCONSTRAINTSREQUEST._serialized_end=5623
  _GETBLUEPRINTSBYIDREQUEST._serialized_start=5625
  _GETBLUEPRINTSBYIDREQUEST._serialized_end=5731
  _GLOBALCONSTRAINTS._serialized_start=5733
  _GLOBALCONSTRAINTS._serialized_end=5852
  _INTRANGE._serialized_start=5854
  _INTRANGE._serialized_end=5900
  _AVAILABLEINTVALUES._serialized_start=5902
  _AVAILABLEINTVALUES._serialized_end=6026
  _AVAILABLEINTVALUE._serialized_start=6028
  _AVAILABLEINTVALUE._serialized_end=6134
  _SPARSEFLOATVALUES._serialized_start=6136
  _SPARSEFLOATVALUES._serialized_end=6171
  _FLOATRANGE._serialized_start=6173
  _FLOATRANGE._serialized_end=6221
  _AVAILABLEFLOATVALUES._serialized_start=6224
  _AVAILABLEFLOATVALUES._serialized_end=6354
  _AVAILABLEMUTATORFLOATVALUES._serialized_start=6357
  _AVAILABLEMUTATORFLOATVALUES._serialized_end=6504
  _AVAILABLEMUTATORINTVALUES._serialized_start=6507
  _AVAILABLEMUTATORINTVALUES._serialized_end=6648
  _AVAILABLEMUTATORSPARSEINTVALUES._serialized_start=6651
  _AVAILABLEMUTATORSPARSEINTVALUES._serialized_end=6804
  _AVAILABLEMUTATORSPARSEFLOATVALUES._serialized_start=6807
  _AVAILABLEMUTATORSPARSEFLOATVALUES._serialized_end=6966
  _AVAILABLEMUTATORKIND._serialized_start=6969
  _AVAILABLEMUTATORKIND._serialized_end=7505
  _AVAILABLEMUTATOR._serialized_start=7508
  _AVAILABLEMUTATOR._serialized_end=7674
  _AVAILABLEMAPENTRY._serialized_start=7677
  _AVAILABLEMAPENTRY._serialized_end=8158
  _AVAILABLETAG._serialized_start=8160
  _AVAILABLETAG._serialized_end=8282
  _AVAILABLEASSETCATEGORYTAG._serialized_start=8284
  _AVAILABLEASSETCATEGORYTAG._serialized_end=8410
  _AVAILABLEASSETCATEGORIES._serialized_start=8413
  _AVAILABLEASSETCATEGORIES._serialized_end=8565
  _PLAYGROUNDCONSTRAINTS._serialized_start=8568
  _PLAYGROUNDCONSTRAINTS._serialized_end=8772
  _MODRULESDEFINITION._serialized_start=8774
  _MODRULESDEFINITION._serialized_end=8836
  _AVAILABLEGAMEDATA._serialized_start=8839
  _AVAILABLEGAMEDATA._serialized_end=9096
  _BLUEPRINT._serialized_start=9099
  _BLUEPRINT._serialized_end=9412
  _SHORTCODE._serialized_start=9414
  _SHORTCODE._serialized_end=9439
  _GETPROGRESSIONTYPESREQUEST._serialized_start=9441
  _GETPROGRESSIONTYPESREQUEST._serialized_end=9469
  _BLUEPRINTINFO._serialized_start=9471
  _BLUEPRINTINFO._serialized_end=9530
  _GETPROGRESSIONTYPESRESPONSE._serialized_start=9532
  _GETPROGRESSIONTYPESRESPONSE._serialized_end=9616
  _GETSCHEDULEDBLUEPRINTSREQUEST._serialized_start=9618
  _GETSCHEDULEDBLUEPRINTSREQUEST._serialized_end=9649
  _GETSCHEDULEDBLUEPRINTSRESPONSE._serialized_start=9651
  _GETSCHEDULEDBLUEPRINTSRESPONSE._serialized_end=9738
  _GETBLUEPRINTSBYIDRESPONSE._serialized_start=9740
  _GETBLUEPRINTSBYIDRESPONSE._serialized_end=9817
  _GETCONSTRAINTSRESPONSE._serialized_start=9819
  _GETCONSTRAINTSRESPONSE._serialized_end=9909
  _LISTPLAYGROUNDSBYOWNERRESPONSE._serialized_start=9911
  _LISTPLAYGROUNDSBYOWNERRESPONSE._serialized_end=10012
  _CREATEPLAYGROUNDREQUEST._serialized_start=10015
  _CREATEPLAYGROUNDREQUEST._serialized_end=10549
  _UPDATEPLAYGROUNDREQUEST._serialized_start=10551
  _UPDATEPLAYGROUNDREQUEST._serialized_end=10631
  _DELETEPLAYGROUNDREQUEST._serialized_start=10633
  _DELETEPLAYGROUNDREQUEST._serialized_end=10680
  _GETPLAYGROUNDREQUEST._serialized_start=10682
  _GETPLAYGROUNDREQUEST._serialized_end=10726
  _SHAREPLAYGROUNDREQUEST._serialized_start=10728
  _SHAREPLAYGROUNDREQUEST._serialized_end=10774
  _SHAREPLAYGROUNDRESPONSE._serialized_start=10776
  _SHAREPLAYGROUNDRESPONSE._serialized_end=10851
  _CREATEPLAYGROUNDRESPONSE._serialized_start=10853
  _CREATEPLAYGROUNDRESPONSE._serialized_end=10947
  _UPDATEPLAYGROUNDRESPONSE._serialized_start=10949
  _UPDATEPLAYGROUNDRESPONSE._serialized_end=11043
  _DELETEPLAYGROUNDRESPONSE._serialized_start=11045
  _DELETEPLAYGROUNDRESPONSE._serialized_end=11071
  _PLAYGROUNDINFORESPONSE._serialized_start=11073
  _PLAYGROUNDINFORESPONSE._serialized_end=11157
  _COMMUNITYGAMES._serialized_start=11837
  _COMMUNITYGAMES._serialized_end=13016
# @@protoc_insertion_point(module_scope)

function CodeDefine() { 
this.def = new Array();
this.def["IsrOverrun"] = {file: "ert_main_c.html",line:24,type:"var"};this.def["OverrunFlag"] = {file: "ert_main_c.html",line:25,type:"var"};this.def["rt_OneStep"] = {file: "ert_main_c.html",line:26,type:"fcn"};this.def["stopRequested"] = {file: "ert_main_c.html",line:53,type:"var"};this.def["main"] = {file: "ert_main_c.html",line:54,type:"fcn"};this.def["arduino_test_M_"] = {file: "arduino_test_c.html",line:25,type:"var"};this.def["arduino_test_M"] = {file: "arduino_test_c.html",line:26,type:"var"};this.def["arduino_test_step"] = {file: "arduino_test_c.html",line:29,type:"fcn"};this.def["arduino_test_initialize"] = {file: "arduino_test_c.html",line:35,type:"fcn"};this.def["arduino_test_terminate"] = {file: "arduino_test_c.html",line:44,type:"fcn"};this.def["RT_MODEL_arduino_test_T"] = {file: "arduino_test_types_h.html",line:25,type:"type"};this.def["int8_T"] = {file: "rtwtypes_h.html",line:52,type:"type"};this.def["uint8_T"] = {file: "rtwtypes_h.html",line:53,type:"type"};this.def["int16_T"] = {file: "rtwtypes_h.html",line:54,type:"type"};this.def["uint16_T"] = {file: "rtwtypes_h.html",line:55,type:"type"};this.def["int32_T"] = {file: "rtwtypes_h.html",line:56,type:"type"};this.def["uint32_T"] = {file: "rtwtypes_h.html",line:57,type:"type"};this.def["real32_T"] = {file: "rtwtypes_h.html",line:58,type:"type"};this.def["real64_T"] = {file: "rtwtypes_h.html",line:59,type:"type"};this.def["real_T"] = {file: "rtwtypes_h.html",line:65,type:"type"};this.def["time_T"] = {file: "rtwtypes_h.html",line:66,type:"type"};this.def["boolean_T"] = {file: "rtwtypes_h.html",line:67,type:"type"};this.def["int_T"] = {file: "rtwtypes_h.html",line:68,type:"type"};this.def["uint_T"] = {file: "rtwtypes_h.html",line:69,type:"type"};this.def["ulong_T"] = {file: "rtwtypes_h.html",line:70,type:"type"};this.def["char_T"] = {file: "rtwtypes_h.html",line:71,type:"type"};this.def["uchar_T"] = {file: "rtwtypes_h.html",line:72,type:"type"};this.def["byte_T"] = {file: "rtwtypes_h.html",line:73,type:"type"};this.def["creal32_T"] = {file: "rtwtypes_h.html",line:83,type:"type"};this.def["creal64_T"] = {file: "rtwtypes_h.html",line:88,type:"type"};this.def["creal_T"] = {file: "rtwtypes_h.html",line:93,type:"type"};this.def["cint8_T"] = {file: "rtwtypes_h.html",line:100,type:"type"};this.def["cuint8_T"] = {file: "rtwtypes_h.html",line:107,type:"type"};this.def["cint16_T"] = {file: "rtwtypes_h.html",line:114,type:"type"};this.def["cuint16_T"] = {file: "rtwtypes_h.html",line:121,type:"type"};this.def["cint32_T"] = {file: "rtwtypes_h.html",line:128,type:"type"};this.def["cuint32_T"] = {file: "rtwtypes_h.html",line:135,type:"type"};this.def["pointer_T"] = {file: "rtwtypes_h.html",line:153,type:"type"};this.def["getLoopbackIP"] = {file: "MW_target_hardware_resources_h.html",line:11,type:"var"};}
CodeDefine.instance = new CodeDefine();
var testHarnessInfo = {OwnerFileName: "", HarnessOwner: "", HarnessName: "", IsTestHarness: "0"};
var relPathToBuildDir = "../ert_main.c";
var fileSep = "\\";
var isPC = true;
function Html2SrcLink() {
	this.html2SrcPath = new Array;
	this.html2Root = new Array;
	this.html2SrcPath["ert_main_c.html"] = "../ert_main.c";
	this.html2Root["ert_main_c.html"] = "ert_main_c.html";
	this.html2SrcPath["arduino_test_c.html"] = "../arduino_test.c";
	this.html2Root["arduino_test_c.html"] = "arduino_test_c.html";
	this.html2SrcPath["arduino_test_h.html"] = "../arduino_test.h";
	this.html2Root["arduino_test_h.html"] = "arduino_test_h.html";
	this.html2SrcPath["arduino_test_private_h.html"] = "../arduino_test_private.h";
	this.html2Root["arduino_test_private_h.html"] = "arduino_test_private_h.html";
	this.html2SrcPath["arduino_test_types_h.html"] = "../arduino_test_types.h";
	this.html2Root["arduino_test_types_h.html"] = "arduino_test_types_h.html";
	this.html2SrcPath["rtwtypes_h.html"] = "../rtwtypes.h";
	this.html2Root["rtwtypes_h.html"] = "rtwtypes_h.html";
	this.html2SrcPath["rtmodel_h.html"] = "../rtmodel.h";
	this.html2Root["rtmodel_h.html"] = "rtmodel_h.html";
	this.html2SrcPath["MW_target_hardware_resources_h.html"] = "../MW_target_hardware_resources.h";
	this.html2Root["MW_target_hardware_resources_h.html"] = "MW_target_hardware_resources_h.html";
	this.getLink2Src = function (htmlFileName) {
		 if (this.html2SrcPath[htmlFileName])
			 return this.html2SrcPath[htmlFileName];
		 else
			 return null;
	}
	this.getLinkFromRoot = function (htmlFileName) {
		 if (this.html2Root[htmlFileName])
			 return this.html2Root[htmlFileName];
		 else
			 return null;
	}
}
Html2SrcLink.instance = new Html2SrcLink();
var fileList = [
"ert_main_c.html","arduino_test_c.html","arduino_test_h.html","arduino_test_private_h.html","arduino_test_types_h.html","rtwtypes_h.html","rtmodel_h.html","MW_target_hardware_resources_h.html"];

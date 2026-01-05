/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/gl-matrix/esm/common.js"
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANGLE_ORDER: () => (/* binding */ ANGLE_ORDER),
/* harmony export */   ARRAY_TYPE: () => (/* binding */ ARRAY_TYPE),
/* harmony export */   EPSILON: () => (/* binding */ EPSILON),
/* harmony export */   RANDOM: () => (/* binding */ RANDOM),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   setMatrixArrayType: () => (/* binding */ setMatrixArrayType),
/* harmony export */   toDegree: () => (/* binding */ toDegree),
/* harmony export */   toRadian: () => (/* binding */ toRadian)
/* harmony export */ });
/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
var RANDOM = Math.random;
var ANGLE_ORDER = "zyx";

/**
 * Symmetric round
 * see https://www.npmjs.com/package/round-half-up-symmetric#user-content-detailed-background
 *
 * @param {Number} a value to round
 */
function round(a) {
  if (a >= 0) return Math.round(a);
  return a % 0.5 === 0 ? Math.floor(a) : Math.round(a);
}

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */
function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
var radian = 180 / Math.PI;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
function toRadian(a) {
  return a * degree;
}

/**
 * Convert Radian To Degree
 *
 * @param {Number} a Angle in Radians
 */
function toDegree(a) {
  return a * radian;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a          The first number to test.
 * @param {Number} b          The second number to test.
 * @param {Number} tolerance  Absolute or relative tolerance (default glMatrix.EPSILON)
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
function equals(a, b) {
  var tolerance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPSILON;
  return Math.abs(a - b) <= tolerance * Math.max(1, Math.abs(a), Math.abs(b));
}

/***/ },

/***/ "./node_modules/gl-matrix/esm/mat3.js"
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat3.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   adjoint: () => (/* binding */ adjoint),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   frob: () => (/* binding */ frob),
/* harmony export */   fromMat2d: () => (/* binding */ fromMat2d),
/* harmony export */   fromMat4: () => (/* binding */ fromMat4),
/* harmony export */   fromQuat: () => (/* binding */ fromQuat),
/* harmony export */   fromRotation: () => (/* binding */ fromRotation),
/* harmony export */   fromScaling: () => (/* binding */ fromScaling),
/* harmony export */   fromTranslation: () => (/* binding */ fromTranslation),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   multiplyScalarAndAdd: () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   normalFromMat4: () => (/* binding */ normalFromMat4),
/* harmony export */   projection: () => (/* binding */ projection),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   translate: () => (/* binding */ translate),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");


/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }
  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
      a02 = a[2],
      a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }
  return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3 | null} out, or null if source matrix is not invertible
 */
function invert(out, a) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  var a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  var a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20;

  // Calculate the determinant
  var det = a00 * b01 + a01 * b11 + a02 * b21;
  if (!det) {
    return null;
  }
  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */
function adjoint(out, a) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  var a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  var a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  var a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  var a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  var a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  var a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  var b00 = b[0],
    b01 = b[1],
    b02 = b[2];
  var b10 = b[3],
    b11 = b[4],
    b12 = b[5];
  var b20 = b[6],
    b21 = b[7],
    b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a10 = a[3],
    a11 = a[4],
    a12 = a[5],
    a20 = a[6],
    a21 = a[7],
    a22 = a[8],
    x = v[0],
    y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a10 = a[3],
    a11 = a[4],
    a12 = a[5],
    a20 = a[6],
    a21 = a[7],
    a22 = a[8],
    s = Math.sin(rad),
    c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
  var x = v[0],
    y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function fromRotation(out, rad) {
  var s = Math.sin(rad),
    c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/
function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}

/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */
function fromQuat(out, q) {
  var x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}

/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */
function normalFromMat4(out, a) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  var a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  var a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  var a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}

/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3] + a[4] * a[4] + a[5] * a[5] + a[6] * a[6] + a[7] * a[7] + a[8] * a[8]);
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3],
    a4 = a[4],
    a5 = a[5],
    a6 = a[6],
    a7 = a[7],
    a8 = a[8];
  var b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3],
    b4 = b[4],
    b5 = b[5],
    b6 = b[6],
    b7 = b[7],
    b8 = b[8];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link mat3.subtract}
 * @function
 */
var sub = subtract;

/***/ },

/***/ "./node_modules/gl-matrix/esm/mat4.js"
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat4.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   adjoint: () => (/* binding */ adjoint),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   decompose: () => (/* binding */ decompose),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   frob: () => (/* binding */ frob),
/* harmony export */   fromQuat: () => (/* binding */ fromQuat),
/* harmony export */   fromQuat2: () => (/* binding */ fromQuat2),
/* harmony export */   fromRotation: () => (/* binding */ fromRotation),
/* harmony export */   fromRotationTranslation: () => (/* binding */ fromRotationTranslation),
/* harmony export */   fromRotationTranslationScale: () => (/* binding */ fromRotationTranslationScale),
/* harmony export */   fromRotationTranslationScaleOrigin: () => (/* binding */ fromRotationTranslationScaleOrigin),
/* harmony export */   fromScaling: () => (/* binding */ fromScaling),
/* harmony export */   fromTranslation: () => (/* binding */ fromTranslation),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   fromXRotation: () => (/* binding */ fromXRotation),
/* harmony export */   fromYRotation: () => (/* binding */ fromYRotation),
/* harmony export */   fromZRotation: () => (/* binding */ fromZRotation),
/* harmony export */   frustum: () => (/* binding */ frustum),
/* harmony export */   getRotation: () => (/* binding */ getRotation),
/* harmony export */   getScaling: () => (/* binding */ getScaling),
/* harmony export */   getTranslation: () => (/* binding */ getTranslation),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   lookAt: () => (/* binding */ lookAt),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   multiplyScalarAndAdd: () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   ortho: () => (/* binding */ ortho),
/* harmony export */   orthoNO: () => (/* binding */ orthoNO),
/* harmony export */   orthoZO: () => (/* binding */ orthoZO),
/* harmony export */   perspective: () => (/* binding */ perspective),
/* harmony export */   perspectiveFromFieldOfView: () => (/* binding */ perspectiveFromFieldOfView),
/* harmony export */   perspectiveNO: () => (/* binding */ perspectiveNO),
/* harmony export */   perspectiveZO: () => (/* binding */ perspectiveZO),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   targetTo: () => (/* binding */ targetTo),
/* harmony export */   translate: () => (/* binding */ translate),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");


/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
      a02 = a[2],
      a03 = a[3];
    var a12 = a[6],
      a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }
  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4 | null} out, or null if source matrix is not invertible
 */
function invert(out, a) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  var a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  var a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  var a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  var a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  var a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  var a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;
  out[0] = a11 * b11 - a12 * b10 + a13 * b09;
  out[1] = a02 * b10 - a01 * b11 - a03 * b09;
  out[2] = a31 * b05 - a32 * b04 + a33 * b03;
  out[3] = a22 * b04 - a21 * b05 - a23 * b03;
  out[4] = a12 * b08 - a10 * b11 - a13 * b07;
  out[5] = a00 * b11 - a02 * b08 + a03 * b07;
  out[6] = a32 * b02 - a30 * b05 - a33 * b01;
  out[7] = a20 * b05 - a22 * b02 + a23 * b01;
  out[8] = a10 * b10 - a11 * b08 + a13 * b06;
  out[9] = a01 * b08 - a00 * b10 - a03 * b06;
  out[10] = a30 * b04 - a31 * b02 + a33 * b00;
  out[11] = a21 * b02 - a20 * b04 - a23 * b00;
  out[12] = a11 * b07 - a10 * b09 - a12 * b06;
  out[13] = a00 * b09 - a01 * b07 + a02 * b06;
  out[14] = a31 * b01 - a30 * b03 - a32 * b00;
  out[15] = a20 * b03 - a21 * b01 + a22 * b00;
  return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  var a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  var a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  var a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];
  var b0 = a00 * a11 - a01 * a10;
  var b1 = a00 * a12 - a02 * a10;
  var b2 = a01 * a12 - a02 * a11;
  var b3 = a20 * a31 - a21 * a30;
  var b4 = a20 * a32 - a22 * a30;
  var b5 = a21 * a32 - a22 * a31;
  var b6 = a00 * b5 - a01 * b4 + a02 * b3;
  var b7 = a10 * b5 - a11 * b4 + a12 * b3;
  var b8 = a20 * b2 - a21 * b1 + a22 * b0;
  var b9 = a30 * b2 - a31 * b1 + a32 * b0;

  // Calculate the determinant
  return a13 * b6 - a03 * b7 + a33 * b8 - a23 * b9;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  var a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  var a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  var a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];

  // Cache only the current line of the second matrix
  var b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
  var x = v[0],
    y = v[1],
    z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }
  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
  var x = v[0],
    y = v[1],
    z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
  var x = axis[0],
    y = axis[1],
    z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;
  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }
  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;
  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function fromRotation(out, rad, axis) {
  var x = axis[0],
    y = axis[1],
    z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s, c, t;
  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }
  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  // Perform rotation-specific matrix multiplication
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *     let quatMat = mat4.create();
 *     mat4.fromQuat(quatMat, quat);
 *     mat4.multiply(dest, dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */
function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  var bx = -a[0],
    by = -a[1],
    bz = -a[2],
    bw = a[3],
    ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw;
  //Only scale if it makes sense
  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }
  fromRotationTranslation(out, a, translation);
  return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion parameter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
  return out;
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
function getRotation(out, mat) {
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;
  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }
  return out;
}

/**
 * Decomposes a transformation matrix into its rotation, translation
 * and scale components. Returns only the rotation component
 * @param  {quat} out_r Quaternion to receive the rotation component
 * @param  {vec3} out_t Vector to receive the translation vector
 * @param  {vec3} out_s Vector to receive the scaling factor
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @returns {quat} out_r
 */
function decompose(out_r, out_t, out_s, mat) {
  out_t[0] = mat[12];
  out_t[1] = mat[13];
  out_t[2] = mat[14];
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out_s[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out_s[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out_s[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
  var is1 = 1 / out_s[0];
  var is2 = 1 / out_s[1];
  var is3 = 1 / out_s[2];
  var sm11 = m11 * is1;
  var sm12 = m12 * is2;
  var sm13 = m13 * is3;
  var sm21 = m21 * is1;
  var sm22 = m22 * is2;
  var sm23 = m23 * is3;
  var sm31 = m31 * is1;
  var sm32 = m32 * is2;
  var sm33 = m33 * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;
  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out_r[3] = 0.25 * S;
    out_r[0] = (sm23 - sm32) / S;
    out_r[1] = (sm31 - sm13) / S;
    out_r[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out_r[3] = (sm23 - sm32) / S;
    out_r[0] = 0.25 * S;
    out_r[1] = (sm12 + sm21) / S;
    out_r[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out_r[3] = (sm31 - sm13) / S;
    out_r[0] = (sm12 + sm21) / S;
    out_r[1] = 0.25 * S;
    out_r[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out_r[3] = (sm12 - sm21) / S;
    out_r[0] = (sm31 + sm13) / S;
    out_r[1] = (sm23 + sm32) / S;
    out_r[2] = 0.25 * S;
  }
  return out_r;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *     let quatMat = mat4.create();
 *     mat4.fromQuat(quatMat, quat);
 *     mat4.multiply(dest, dest, quatMat);
 *     mat4.scale(dest, dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *     mat4.translate(dest, dest, origin);
 *     let quatMat = mat4.create();
 *     mat4.fromQuat(quatMat, quat);
 *     mat4.multiply(dest, dest, quatMat);
 *     mat4.scale(dest, dest, scale)
 *     mat4.translate(dest, dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
  var x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */
function perspectiveNO(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    var nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }
  return out;
}

/**
 * Alias for {@link mat4.perspectiveNO}
 * @function
 */
var perspective = perspectiveNO;

/**
 * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */
function perspectiveZO(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    var nf = 1 / (near - far);
    out[10] = far * nf;
    out[14] = far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -near;
  }
  return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function orthoNO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Alias for {@link mat4.orthoNO}
 * @function
 */
var ortho = orthoNO;

/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function orthoZO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = near * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];
  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return identity(out);
  }
  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }
  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }
  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} target Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
  var eyex = eye[0],
    eyey = eye[1],
    eyez = eye[2],
    upx = up[0],
    upy = up[1],
    upz = up[2];
  var z0 = eyex - target[0],
    z1 = eyey - target[1],
    z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }
  var x0 = upy * z2 - upz * z1,
    x1 = upz * z0 - upx * z2,
    x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }
  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}

/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3] + a[4] * a[4] + a[5] * a[5] + a[6] * a[6] + a[7] * a[7] + a[8] * a[8] + a[9] * a[9] + a[10] * a[10] + a[11] * a[11] + a[12] * a[12] + a[13] * a[13] + a[14] * a[14] + a[15] * a[15]);
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3];
  var a4 = a[4],
    a5 = a[5],
    a6 = a[6],
    a7 = a[7];
  var a8 = a[8],
    a9 = a[9],
    a10 = a[10],
    a11 = a[11];
  var a12 = a[12],
    a13 = a[13],
    a14 = a[14],
    a15 = a[15];
  var b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3];
  var b4 = b[4],
    b5 = b[5],
    b6 = b[6],
    b7 = b[7];
  var b8 = b[8],
    b9 = b[9],
    b10 = b[10],
    b11 = b[11];
  var b12 = b[12],
    b13 = b[13],
    b14 = b[14],
    b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link mat4.subtract}
 * @function
 */
var sub = subtract;

/***/ },

/***/ "./node_modules/gl-matrix/esm/quat.js"
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/quat.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   calculateW: () => (/* binding */ calculateW),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   conjugate: () => (/* binding */ conjugate),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   exp: () => (/* binding */ exp),
/* harmony export */   fromEuler: () => (/* binding */ fromEuler),
/* harmony export */   fromMat3: () => (/* binding */ fromMat3),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   getAngle: () => (/* binding */ getAngle),
/* harmony export */   getAxisAngle: () => (/* binding */ getAxisAngle),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   ln: () => (/* binding */ ln),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   pow: () => (/* binding */ pow),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   rotationTo: () => (/* binding */ rotationTo),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   setAxes: () => (/* binding */ setAxes),
/* harmony export */   setAxisAngle: () => (/* binding */ setAxisAngle),
/* harmony export */   slerp: () => (/* binding */ slerp),
/* harmony export */   sqlerp: () => (/* binding */ sqlerp),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/esm/vec4.js");





/**
 * Quaternion in the format XYZW
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  out[3] = 1;
  return out;
}

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);
  if (s > _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}

/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat} a     Origin unit quaternion
 * @param  {ReadonlyQuat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */
function getAngle(a, b) {
  var dotproduct = dot(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  var bx = b[0],
    by = b[1],
    bz = b[2],
    bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  var bx = Math.sin(rad),
    bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  var by = Math.sin(rad),
    bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  var bz = Math.sin(rad),
    bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW(out, a) {
  var x = a[0],
    y = a[1],
    z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}

/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */
function exp(out, a) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}

/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */
function ln(out, a) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}

/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */
function pow(out, a, b) {
  ln(out, a);
  scale(out, out, b);
  exp(out, out);
  return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  var bx = b[0],
    by = b[1],
    bz = b[2],
    bw = b[3];
  var omega, cosom, sinom, scale0, scale1;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  // calculate coefficients
  if (1.0 - cosom > _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}

/**
 * Generates a random unit quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  var u2 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  var u3 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;
  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }
  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z using the provided intrinsic order for the conversion.
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x Angle to rotate around X axis in degrees.
 * @param {Number} y Angle to rotate around Y axis in degrees.
 * @param {Number} z Angle to rotate around Z axis in degrees.
 * @param {'xyz'|'xzy'|'yxz'|'yzx'|'zxy'|'zyx'} order Intrinsic order for conversion, default is zyx.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, x, y, z) {
  var order = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _common_js__WEBPACK_IMPORTED_MODULE_0__.ANGLE_ORDER;
  var halfToRad = Math.PI / 360;
  x *= halfToRad;
  z *= halfToRad;
  y *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  switch (order) {
    case "xyz":
      out[0] = sx * cy * cz + cx * sy * sz;
      out[1] = cx * sy * cz - sx * cy * sz;
      out[2] = cx * cy * sz + sx * sy * cz;
      out[3] = cx * cy * cz - sx * sy * sz;
      break;
    case "xzy":
      out[0] = sx * cy * cz - cx * sy * sz;
      out[1] = cx * sy * cz - sx * cy * sz;
      out[2] = cx * cy * sz + sx * sy * cz;
      out[3] = cx * cy * cz + sx * sy * sz;
      break;
    case "yxz":
      out[0] = sx * cy * cz + cx * sy * sz;
      out[1] = cx * sy * cz - sx * cy * sz;
      out[2] = cx * cy * sz - sx * sy * cz;
      out[3] = cx * cy * cz + sx * sy * sz;
      break;
    case "yzx":
      out[0] = sx * cy * cz + cx * sy * sz;
      out[1] = cx * sy * cz + sx * cy * sz;
      out[2] = cx * cy * sz - sx * sy * cz;
      out[3] = cx * cy * cz - sx * sy * sz;
      break;
    case "zxy":
      out[0] = sx * cy * cz - cx * sy * sz;
      out[1] = cx * sy * cz + sx * cy * sz;
      out[2] = cx * cy * sz + sx * sy * cz;
      out[3] = cx * cy * cz - sx * sy * sz;
      break;
    case "zyx":
      out[0] = sx * cy * cz - cx * sy * sz;
      out[1] = cx * sy * cz + sx * cy * sz;
      out[2] = cx * cy * sz - sx * sy * cz;
      out[3] = cx * cy * cz + sx * sy * sz;
      break;
    default:
      throw new Error('Unknown angle order ' + order);
  }
  return out;
}

/**
 * Returns a string representation of a quaternion
 *
 * @param {ReadonlyQuat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
var clone = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.clone;

/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
var fromValues = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.fromValues;

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the source quaternion
 * @returns {quat} out
 * @function
 */
var copy = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.copy;

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
var set = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.set;

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 * @function
 */
var add = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.add;

/**
 * Alias for {@link quat.multiply}
 * @function
 */
var mul = multiply;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {ReadonlyQuat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
var scale = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.scale;

/**
 * Calculates the dot product of two quat's
 *
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
var dot = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.dot;

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */
var lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.lerp;

/**
 * Calculates the length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate length of
 * @returns {Number} length of a
 */
var length = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.length;

/**
 * Alias for {@link quat.length}
 * @function
 */
var len = length;

/**
 * Calculates the squared length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
var squaredLength = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.squaredLength;

/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
var normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.normalize;

/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat} a The first quaternion.
 * @param {ReadonlyQuat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
var exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__.exactEquals;

/**
 * Returns whether or not the quaternions point approximately to the same direction.
 *
 * Both quaternions are assumed to be unit length.
 *
 * @param {ReadonlyQuat} a The first unit quaternion.
 * @param {ReadonlyQuat} b The second unit quaternion.
 * @returns {Boolean} True if the quaternions are equal, false otherwise.
 */
function equals(a, b) {
  return Math.abs(_vec4_js__WEBPACK_IMPORTED_MODULE_3__.dot(a, b)) >= 1 - _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON;
}

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {ReadonlyVec3} a the initial vector
 * @param {ReadonlyVec3} b the destination vector
 * @returns {quat} out
 */
var rotationTo = function () {
  var tmpvec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.create();
  var xUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.fromValues(1, 0, 0);
  var yUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.fromValues(0, 1, 0);
  return function (out, a, b) {
    var dot = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.dot(a, b);
    if (dot < -0.999999) {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, xUnitVec3, a);
      if (_vec3_js__WEBPACK_IMPORTED_MODULE_2__.len(tmpvec3) < 0.000001) _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, yUnitVec3, a);
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();

/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {ReadonlyQuat} c the third operand
 * @param {ReadonlyQuat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */
var sqlerp = function () {
  var temp1 = create();
  var temp2 = create();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();

/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {ReadonlyVec3} view  the vector representing the viewing direction
 * @param {ReadonlyVec3} right the vector representing the local "right" direction
 * @param {ReadonlyVec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
var setAxes = function () {
  var matr = _mat3_js__WEBPACK_IMPORTED_MODULE_1__.create();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize(out, fromMat3(out, matr));
  };
}();

/***/ },

/***/ "./node_modules/gl-matrix/esm/vec3.js"
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec3.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   angle: () => (/* binding */ angle),
/* harmony export */   bezier: () => (/* binding */ bezier),
/* harmony export */   ceil: () => (/* binding */ ceil),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   dist: () => (/* binding */ dist),
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   div: () => (/* binding */ div),
/* harmony export */   divide: () => (/* binding */ divide),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   hermite: () => (/* binding */ hermite),
/* harmony export */   inverse: () => (/* binding */ inverse),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   negate: () => (/* binding */ negate),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   scaleAndAdd: () => (/* binding */ scaleAndAdd),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   slerp: () => (/* binding */ slerp),
/* harmony export */   sqrDist: () => (/* binding */ sqrDist),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transformMat3: () => (/* binding */ transformMat3),
/* harmony export */   transformMat4: () => (/* binding */ transformMat4),
/* harmony export */   transformQuat: () => (/* binding */ transformQuat),
/* harmony export */   zero: () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");


/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}

/**
 * symmetric round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
  out[0] = _common_js__WEBPACK_IMPORTED_MODULE_0__.round(a[0]);
  out[1] = _common_js__WEBPACK_IMPORTED_MODULE_0__.round(a[1]);
  out[2] = _common_js__WEBPACK_IMPORTED_MODULE_0__.round(a[2]);
  return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }
  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var ax = a[0],
    ay = a[1],
    az = a[2];
  var bx = b[0],
    by = b[1],
    bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/**
 * Performs a spherical linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function slerp(out, a, b, t) {
  var angle = Math.acos(Math.min(Math.max(dot(a, b), -1), 1));
  var sinTotal = Math.sin(angle);
  var ratioA = Math.sin((1 - t) * angle) / sinTotal;
  var ratioB = Math.sin(t * angle) / sinTotal;
  out[0] = ratioA * a[0] + ratioB * b[0];
  out[1] = ratioA * a[1] + ratioB * b[1];
  out[2] = ratioA * a[2] + ratioB * b[2];
  return out;
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If omitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
  scale = scale === undefined ? 1.0 : scale;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
  var x = a[0],
    y = a[1],
    z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
    y = a[1],
    z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q normalized quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
  // Fast Vector Rotation using Quaternions by Robert Eisele
  // https://raw.org/proof/vector-rotation-using-quaternions/

  var qx = q[0],
    qy = q[1],
    qz = q[2],
    qw = q[3];
  var vx = a[0],
    vy = a[1],
    vz = a[2];

  // t = q x v
  var tx = qy * vz - qz * vy;
  var ty = qz * vx - qx * vz;
  var tz = qx * vy - qy * vx;

  // t = 2t
  tx = tx + tx;
  ty = ty + ty;
  tz = tz + tz;

  // v + w t + q x t
  out[0] = vx + qw * tx + qy * tz - qz * ty;
  out[1] = vy + qw * ty + qz * tx - qx * tz;
  out[2] = vz + qw * tz + qx * ty - qy * tx;
  return out;
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */
function rotateX(out, a, b, rad) {
  var p = [],
    r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */
function rotateY(out, a, b, rad) {
  var p = [],
    r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */
function rotateZ(out, a, b, rad) {
  var p = [],
    r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2];

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  var ax = a[0],
    ay = a[1],
    az = a[2],
    bx = b[0],
    by = b[1],
    bz = b[2],
    mag = Math.sqrt((ax * ax + ay * ay + az * az) * (bx * bx + by * by + bz * bz)),
    cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}

/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */
function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2];
  var b0 = b[0],
    b1 = b[1],
    b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
var sub = subtract;

/**
 * Alias for {@link vec3.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link vec3.divide}
 * @function
 */
var div = divide;

/**
 * Alias for {@link vec3.distance}
 * @function
 */
var dist = distance;

/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
var sqrDist = squaredDistance;

/**
 * Alias for {@link vec3.length}
 * @function
 */
var len = length;

/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 3;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }
    return a;
  };
}();

/***/ },

/***/ "./node_modules/gl-matrix/esm/vec4.js"
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec4.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   ceil: () => (/* binding */ ceil),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   dist: () => (/* binding */ dist),
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   div: () => (/* binding */ div),
/* harmony export */   divide: () => (/* binding */ divide),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   inverse: () => (/* binding */ inverse),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   negate: () => (/* binding */ negate),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   scaleAndAdd: () => (/* binding */ scaleAndAdd),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   sqrDist: () => (/* binding */ sqrDist),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transformMat4: () => (/* binding */ transformMat4),
/* harmony export */   transformQuat: () => (/* binding */ transformQuat),
/* harmony export */   zero: () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");


/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }
  return out;
}

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues(x, y, z, w) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to ceil
 * @returns {vec4} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to floor
 * @returns {vec4} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}

/**
 * symmetric round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to round
 * @returns {vec4} out
 */
function round(out, a) {
  out[0] = _common_js__WEBPACK_IMPORTED_MODULE_0__.round(a[0]);
  out[1] = _common_js__WEBPACK_IMPORTED_MODULE_0__.round(a[1]);
  out[2] = _common_js__WEBPACK_IMPORTED_MODULE_0__.round(a[2]);
  out[3] = _common_js__WEBPACK_IMPORTED_MODULE_0__.round(a[3]);
  return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}

/**
 * Calculates the length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Calculates the squared length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to negate
 * @returns {vec4} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to invert
 * @returns {vec4} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }
  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {ReadonlyVec4} out the receiving vector
 * @param {ReadonlyVec4} u the first vector
 * @param {ReadonlyVec4} v the second vector
 * @param {ReadonlyVec4} w the third vector
 * @returns {vec4} result
 */
function cross(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
    B = v[0] * w[2] - v[2] * w[0],
    C = v[0] * w[3] - v[3] * w[0],
    D = v[1] * w[2] - v[2] * w[1],
    E = v[1] * w[3] - v[3] * w[1],
    F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If omitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random(out, scale) {
  scale = scale === undefined ? 1.0 : scale;

  // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;
  var v1, v2, v3, v4;
  var s1, s2;
  var rand;
  rand = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  v1 = rand * 2 - 1;
  v2 = (4 * _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() - 2) * Math.sqrt(rand * -rand + rand);
  s1 = v1 * v1 + v2 * v2;
  rand = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  v3 = rand * 2 - 1;
  v4 = (4 * _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() - 2) * Math.sqrt(rand * -rand + rand);
  s2 = v3 * v3 + v4 * v4;
  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4(out, a, m) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyQuat} q normalized quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat(out, a, q) {
  // Fast Vector Rotation using Quaternions by Robert Eisele
  // https://raw.org/proof/vector-rotation-using-quaternions/

  var qx = q[0],
    qy = q[1],
    qz = q[2],
    qw = q[3];
  var vx = a[0],
    vy = a[1],
    vz = a[2];

  // t = q x v
  var tx = qy * vz - qz * vy;
  var ty = qz * vx - qx * vz;
  var tz = qx * vy - qy * vx;

  // t = 2t
  tx = tx + tx;
  ty = ty + ty;
  tz = tz + tz;

  // v + w t + q x t
  out[0] = vx + qw * tx + qy * tz - qz * ty;
  out[1] = vy + qw * ty + qz * tx - qx * tz;
  out[2] = vz + qw * tz + qx * ty - qy * tx;
  out[3] = a[3];
  return out;
}

/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */
function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3];
  var b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
var sub = subtract;

/**
 * Alias for {@link vec4.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link vec4.divide}
 * @function
 */
var div = divide;

/**
 * Alias for {@link vec4.distance}
 * @function
 */
var dist = distance;

/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
var sqrDist = squaredDistance;

/**
 * Alias for {@link vec4.length}
 * @function
 */
var len = length;

/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 4;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }
    return a;
  };
}();

/***/ },

/***/ "./src/assets/custom_texture.jpg"
/*!***************************************!*\
  !*** ./src/assets/custom_texture.jpg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dc9d7f9d0db1ab10becc.jpg";

/***/ },

/***/ "./src/assets/dirt.jpg"
/*!*****************************!*\
  !*** ./src/assets/dirt.jpg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "29c13e09d7e6f7b8a25b.jpg";

/***/ },

/***/ "./src/assets/grass_side.jpg"
/*!***********************************!*\
  !*** ./src/assets/grass_side.jpg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6a43cc631f653939b433.jpg";

/***/ },

/***/ "./src/assets/grass_top.png"
/*!**********************************!*\
  !*** ./src/assets/grass_top.png ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0c45fca65a680da2199e.png";

/***/ },

/***/ "./src/assets/tnt.png"
/*!****************************!*\
  !*** ./src/assets/tnt.png ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7d6ad7b9b63d742c814c.png";

/***/ },

/***/ "./src/assets/torch.png"
/*!******************************!*\
  !*** ./src/assets/torch.png ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d4c604f1b9014cb8aa9d.png";

/***/ },

/***/ "./src/ik.ts"
/*!*******************!*\
  !*** ./src/ik.ts ***!
  \*******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   solveIK: () => (/* binding */ solveIK)
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");

// Simple 2-Bone IK Solver (Analytic)
// Thigh -> Knee -> Foot
// Returns the positions of the Knee and the Adjusted Foot (if unreachable)
function solveIK(root, target, len1, len2, poleDir // Direction the knee should point
) {
    // 1. Vector from Root to Target
    const axis = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.subtract(axis, target, root);
    const dist = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.length(axis);
    // 2. Clamp target if out of reach
    const maxLen = len1 + len2;
    const finalFoot = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.clone(target);
    if (dist >= maxLen) {
        // Fully extended
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.normalize(axis, axis);
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.scaleAndAdd(finalFoot, root, axis, maxLen);
        const knee = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.scaleAndAdd(knee, root, axis, len1);
        return { knee, foot: finalFoot };
    }
    // 3. Law of Cosines to find knee angle
    // dist^2 = len1^2 + len2^2 - 2*len1*len2*cos(knee_angle) -> This is internal angle
    // We need the layout in 3D.
    // Analytic solution in 2D plane formed by Root, Target, and Pole
    // Alpha: Angle at Root (Thigh)
    // Cos Alpha = (len1^2 + dist^2 - len2^2) / (2 * len1 * dist)
    const cosAlpha = (len1 * len1 + dist * dist - len2 * len2) / (2 * len1 * dist);
    // Clamp for safety
    const clampedCosAlpha = Math.max(-1, Math.min(1, cosAlpha));
    const alpha = Math.acos(clampedCosAlpha);
    // 4. Construct the Coordinate System
    // Z-axis: Vector to Target (normalized)
    const zAxis = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.clone(axis);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.normalize(zAxis, zAxis);
    // X-axis: Perpendicular to Z and Pole (Knee bending direction)
    const xAxis = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.cross(xAxis, zAxis, poleDir);
    if (gl_matrix__WEBPACK_IMPORTED_MODULE_0__.length(xAxis) < 0.001) {
        // Pole is parallel to axis, pick generic up
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.cross(xAxis, zAxis, gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(0, 1, 0));
    }
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.normalize(xAxis, xAxis);
    // Y-axis: Up vector in the plane
    const yAxis = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.cross(yAxis, xAxis, zAxis);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.normalize(yAxis, yAxis);
    // 5. Calculate Knee Position
    // Rotate vector (len1, 0, 0) by alpha in the plane?
    // In our basis:
    // Root is (0,0)
    // Target is (dist, 0) along Z
    // Knee is at distance len1, rotated by alpha away from Z towards Y
    // Knee Local:
    // z = len1 * cos(alpha)
    // y = len1 * sin(alpha)
    const kneeZ = len1 * clampedCosAlpha;
    const kneeY = len1 * Math.sin(alpha);
    const knee = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.clone(root);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.scaleAndAdd(knee, knee, zAxis, kneeZ);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.scaleAndAdd(knee, knee, yAxis, kneeY);
    return { knee, foot: finalFoot };
}


/***/ },

/***/ "./src/logger.ts"
/*!***********************!*\
  !*** ./src/logger.ts ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
class Logger {
    static log(msg, ...args) {
        console.log(`[LOG] ${msg}`, ...args);
    }
    static error(msg, ...args) {
        console.error(`[ERR] ${msg}`, ...args);
    }
    static warn(msg, ...args) {
        console.warn(`[WARN] ${msg}`, ...args);
    }
}


/***/ },

/***/ "./src/main.ts"
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec4.js");
/* harmony import */ var _shaders_wgsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders.wgsl */ "./src/shaders.wgsl");
/* harmony import */ var _assets_custom_texture_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/custom_texture.jpg */ "./src/assets/custom_texture.jpg");
/* harmony import */ var _noise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./noise */ "./src/noise.ts");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderer */ "./src/renderer.ts");
/* harmony import */ var _spider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spider */ "./src/spider.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player */ "./src/player.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logger */ "./src/logger.ts");
/* harmony import */ var _particles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./particles */ "./src/particles.ts");
/* harmony import */ var _pickups__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pickups */ "./src/pickups.ts");
/* harmony import */ var _assets_dirt_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/dirt.jpg */ "./src/assets/dirt.jpg");
/* harmony import */ var _assets_grass_side_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/grass_side.jpg */ "./src/assets/grass_side.jpg");
/* harmony import */ var _assets_grass_top_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/grass_top.png */ "./src/assets/grass_top.png");
/* harmony import */ var _assets_tnt_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/tnt.png */ "./src/assets/tnt.png");
/* harmony import */ var _assets_torch_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/torch.png */ "./src/assets/torch.png");

// @ts-ignore

// @ts-ignore








const canvas = document.getElementById('gfx-main');
_logger__WEBPACK_IMPORTED_MODULE_9__.Logger.log('Canvas element:', canvas);
console.log('Canvas initial size:', canvas.width, 'x', canvas.height);
const adapter = await navigator.gpu.requestAdapter();
console.log('WebGPU Adapter:', adapter);
if (!adapter)
    throw new Error('WebGPU not supported.');
const device = await adapter.requestDevice();
console.log('WebGPU Device:', device);
const context = canvas.getContext('webgpu');
console.log('WebGPU Context:', context);
const format = navigator.gpu.getPreferredCanvasFormat();
console.log('Preferred format:', format);
// Shadow Map Constants
const SHADOW_SIZE = 2048;
// Global ID counter for instances
let nextId = 0;
context?.configure({ device, format, alphaMode: 'opaque' });
console.log('Context configured');
// --- Texture Loading ---
// --- Texture Loading ---
// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// @ts-ignore

// --- Texture Loading ---
async function loadAndResizeBitmap(src, width, height) {
    const img = new Image();
    img.src = src;
    await new Promise(resolve => img.onload = resolve);
    // Resize via Canvas
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx)
        throw new Error('Could not get 2d context');
    ctx.drawImage(img, 0, 0, width, height);
    return await createImageBitmap(canvas);
}
const TEXTURE_SIZE = 256;
console.log('Loading textures...');
console.log('Grass texture source:', _assets_custom_texture_jpg__WEBPACK_IMPORTED_MODULE_4__);
console.log('Dirt texture source:', _assets_dirt_jpg__WEBPACK_IMPORTED_MODULE_12__);
const [imgCobble, imgDirt, imgNewGrass, imgGrassTop, imgTNT, imgTorch] = await Promise.all([
    loadAndResizeBitmap(_assets_custom_texture_jpg__WEBPACK_IMPORTED_MODULE_4__, TEXTURE_SIZE, TEXTURE_SIZE),
    loadAndResizeBitmap(_assets_dirt_jpg__WEBPACK_IMPORTED_MODULE_12__, TEXTURE_SIZE, TEXTURE_SIZE),
    loadAndResizeBitmap(_assets_grass_side_jpg__WEBPACK_IMPORTED_MODULE_13__, TEXTURE_SIZE, TEXTURE_SIZE),
    loadAndResizeBitmap(_assets_grass_top_png__WEBPACK_IMPORTED_MODULE_14__, TEXTURE_SIZE, TEXTURE_SIZE),
    loadAndResizeBitmap(_assets_tnt_png__WEBPACK_IMPORTED_MODULE_15__, TEXTURE_SIZE, TEXTURE_SIZE),
    loadAndResizeBitmap(_assets_torch_png__WEBPACK_IMPORTED_MODULE_16__, TEXTURE_SIZE, TEXTURE_SIZE)
]);
console.log('Textures loaded successfully!');
const texture = device.createTexture({
    size: [TEXTURE_SIZE, TEXTURE_SIZE, 6], // Layer count 6 (added torch)
    format: 'rgba8unorm',
    usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
});
device.queue.copyExternalImageToTexture({ source: imgCobble }, { texture: texture, origin: { z: 0 } }, [TEXTURE_SIZE, TEXTURE_SIZE]);
device.queue.copyExternalImageToTexture({ source: imgDirt }, { texture: texture, origin: { z: 1 } }, [TEXTURE_SIZE, TEXTURE_SIZE]);
device.queue.copyExternalImageToTexture({ source: imgNewGrass }, { texture: texture, origin: { z: 2 } }, [TEXTURE_SIZE, TEXTURE_SIZE]);
device.queue.copyExternalImageToTexture({ source: imgGrassTop }, { texture: texture, origin: { z: 3 } }, [TEXTURE_SIZE, TEXTURE_SIZE]);
device.queue.copyExternalImageToTexture({ source: imgTNT }, { texture: texture, origin: { z: 4 } }, [TEXTURE_SIZE, TEXTURE_SIZE]);
device.queue.copyExternalImageToTexture({ source: imgTorch }, { texture: texture, origin: { z: 5 } }, [TEXTURE_SIZE, TEXTURE_SIZE]);
const sampler = device.createSampler({
    magFilter: 'nearest',
    minFilter: 'nearest',
});
const shadowSampler = device.createSampler({
    compare: 'less',
    magFilter: 'linear',
    minFilter: 'linear',
});
const shadowDepthTexture = device.createTexture({
    size: [SHADOW_SIZE, SHADOW_SIZE],
    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
    format: 'depth32float',
});
const activeTNTs = [];
let isRiding = false;
// --- Vertex Data (Pos + UV) ---
// 36 vertices (6 faces * 2 tris * 3 verts)
// X, Y, Z, U, V, NX, NY, NZ
const cubeVertices = new Float32Array([
    // Front (z=1)
    0, 0, 1, 0, 1, 0, 0, 1,
    1, 0, 1, 1, 1, 0, 0, 1,
    1, 1, 1, 1, 0, 0, 0, 1,
    0, 0, 1, 0, 1, 0, 0, 1,
    1, 1, 1, 1, 0, 0, 0, 1,
    0, 1, 1, 0, 0, 0, 0, 1,
    // Back (z=0)
    0, 0, 0, 1, 1, 0, 0, -1,
    0, 1, 0, 1, 0, 0, 0, -1,
    1, 1, 0, 0, 0, 0, 0, -1,
    0, 0, 0, 1, 1, 0, 0, -1,
    1, 1, 0, 0, 0, 0, 0, -1,
    1, 0, 0, 0, 1, 0, 0, -1,
    // Top (y=1)
    0, 1, 0, 0, 0, 0, 1, 0,
    0, 1, 1, 0, 1, 0, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 0,
    0, 1, 0, 0, 0, 0, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 0,
    1, 1, 0, 1, 0, 0, 1, 0,
    // Bottom (y=0)
    0, 0, 0, 0, 1, 0, -1, 0,
    1, 0, 0, 1, 1, 0, -1, 0,
    1, 0, 1, 1, 0, 0, -1, 0,
    0, 0, 0, 0, 1, 0, -1, 0,
    1, 0, 1, 1, 0, 0, -1, 0,
    0, 0, 1, 0, 0, 0, -1, 0,
    // Right (x=1)
    1, 0, 0, 1, 1, 1, 0, 0,
    1, 1, 0, 1, 0, 1, 0, 0,
    1, 1, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 1, 1, 0, 0,
    1, 1, 1, 0, 0, 1, 0, 0,
    1, 0, 1, 0, 1, 1, 0, 0,
    // Left (x=0)
    0, 0, 0, 0, 1, -1, 0, 0,
    0, 0, 1, 1, 1, -1, 0, 0,
    0, 1, 1, 1, 0, -1, 0, 0,
    0, 0, 0, 0, 1, -1, 0, 0,
    0, 1, 1, 1, 0, -1, 0, 0,
    0, 1, 0, 0, 0, -1, 0, 0,
]);
const vertexBuffer = device.createBuffer({
    size: cubeVertices.byteLength,
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
device.queue.writeBuffer(vertexBuffer, 0, cubeVertices);
// --- Chunk System ---
// Chunk Size: 16x16
// Height limit for grid: 256 (0 to 255). Logic Y offset: +64 (so -64 to 191)
const CHUNK_SIZE = 16;
const CHUNK_HEIGHT = 256;
const Y_OFFSET = 64;
const RENDER_DISTANCE = 14;
// Systems
const particleSystem = new _particles__WEBPACK_IMPORTED_MODULE_10__.ParticleSystem();
const pickupSystem = new _pickups__WEBPACK_IMPORTED_MODULE_11__.PickupSystem();
const spider = new _spider__WEBPACK_IMPORTED_MODULE_7__.Spider();
const playerModel = new _player__WEBPACK_IMPORTED_MODULE_8__.PlayerModel(); // Instantiate Player Model
const simpleRenderer = new _renderer__WEBPACK_IMPORTED_MODULE_6__.SimpleRenderer(device, format);
const chunks = new Map();
const chunkCache = new Map();
// Helper to get grid index
function getGridIndex(x, y, z) {
    x = Math.floor(x);
    y = Math.floor(y);
    z = Math.floor(z);
    if (x < 0 || x >= CHUNK_SIZE || z < 0 || z >= CHUNK_SIZE)
        return -1;
    const yIdx = y + Y_OFFSET;
    if (yIdx < 0 || yIdx >= CHUNK_HEIGHT)
        return -1;
    return x + z * CHUNK_SIZE + yIdx * (CHUNK_SIZE * CHUNK_SIZE);
}
// Global Instance List (Flat)
let allInstances = [];
// Removed blockMap (Deprecated)
function getOrGenerateChunk(cx, cz) {
    const key = `${cx},${cz}`;
    if (chunkCache.has(key)) {
        if (!chunks.has(key)) {
            chunks.set(key, chunkCache.get(key));
        }
        return;
    }
    const grid = new Uint8Array(CHUNK_SIZE * CHUNK_SIZE * CHUNK_HEIGHT);
    const visible = [];
    // 1. Generate Terrain (Populate GRID)
    for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let z = 0; z < CHUNK_SIZE; z++) {
            const wx = cx * CHUNK_SIZE + x;
            const wz = cz * CHUNK_SIZE + z;
            // Terrain Noise
            const scale = 0.05;
            const hRaw = (0,_noise__WEBPACK_IMPORTED_MODULE_5__.fbm)(wx * scale, wz * scale, 3);
            const terrainHeight = Math.floor(hRaw * 20 + 20); // Doubled Amplitude
            for (let y = -30; y <= terrainHeight; y++) {
                let type = 1; // Stone
                if (y === terrainHeight)
                    type = 3; // Grass
                else if (y >= terrainHeight - 7)
                    type = 2; // Dirt
                const idx = getGridIndex(x, y, z);
                if (idx !== -1) {
                    grid[idx] = type;
                }
            }
        }
    }
    // 2. Compute Visibility (Local Mesh)
    for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let z = 0; z < CHUNK_SIZE; z++) {
            const wx = cx * CHUNK_SIZE + x;
            const wz = cz * CHUNK_SIZE + z;
            // Scan bounds -Y_OFFSET to (CHUNK_HEIGHT - Y_OFFSET - 1)
            const minY = -Y_OFFSET;
            const maxY = CHUNK_HEIGHT - Y_OFFSET - 1;
            for (let y = minY; y <= maxY; y++) {
                const idx = getGridIndex(x, y, z);
                if (idx === -1)
                    continue;
                const type = grid[idx];
                if (type === 0)
                    continue;
                // Check neighbors in GRID
                let exposed = false;
                const isSolid = (nx, ny, nz) => {
                    const nIdx = getGridIndex(nx, ny, nz);
                    if (nIdx === -1)
                        return false; // Out of bounds -> Assume exposed
                    return grid[nIdx] !== 0;
                };
                if (!isSolid(x + 1, y, z))
                    exposed = true;
                else if (!isSolid(x - 1, y, z))
                    exposed = true;
                else if (!isSolid(x, y + 1, z))
                    exposed = true;
                else if (!isSolid(x, y - 1, z))
                    exposed = true;
                else if (!isSolid(x, y, z + 1))
                    exposed = true;
                else if (!isSolid(x, y, z - 1))
                    exposed = true;
                if (exposed) {
                    visible.push({
                        pos: new Float32Array([wx, y, wz]),
                        type: type - 1
                    });
                }
            }
        }
    }
    const chunkData = { grid, visible };
    chunkCache.set(key, chunkData);
    chunks.set(key, chunkData);
}
function updateChunks(playerPos) {
    const pCx = Math.floor(playerPos[0] / CHUNK_SIZE);
    const pCz = Math.floor(playerPos[2] / CHUNK_SIZE);
    const neededKeys = new Set();
    let changed = false;
    for (let x = -RENDER_DISTANCE; x <= RENDER_DISTANCE; x++) {
        for (let z = -RENDER_DISTANCE; z <= RENDER_DISTANCE; z++) {
            neededKeys.add(`${pCx + x},${pCz + z}`);
        }
    }
    for (const key of chunks.keys()) {
        if (!neededKeys.has(key)) {
            chunks.delete(key);
            chunkCache.delete(key); // Fix Memory Leak
            changed = true;
        }
    }
    let addedCount = 0;
    for (const key of neededKeys) {
        if (!chunks.has(key)) {
            const [cx, cz] = key.split(',').map(Number);
            getOrGenerateChunk(cx, cz);
            changed = true;
            addedCount++;
            if (addedCount >= 1)
                break;
        }
    }
    if (changed) {
        rebuildWorld();
    }
}
// User-placed blocks buffer? 
// For simplicity, we can just mix them into the current chunk logic or keep a separate list.
// If we want "Infinite" generation, user blocks should ideally be stored in the chunk data.
// For this demo: We will just NOT support saving user blocks to disk/persistence.
// But we need to make sure user placed blocks are kept if they are in range.
// Actually, `generateChunk` is called freshly. If we unload a chunk, user changes are lost.
// To fix this: `chunks` map should be the source of truth. We only Generate if `!chunks.has(key)`.
// But we just deleted keys in the loop above. 
// Fix: Don't delete from `chunks` map immediately if we want memory persistence (but then memory grows).
// Infinite usually implies unloading. 
// Let's assume for this MVP: Unloading = Reset. 
// Or better: Use a separate `userChanges` map? Too complex.
// Let's stick to: Unload = Lost. (User didn't ask for save/load).
// --- Optimized Rebuild & Memory Management ---
const maxInstances = 2000000;
const instanceBuffer = device.createBuffer({
    size: maxInstances * 16, // vec3 + f32 = 16 bytes
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
const stagingBuffer = new Float32Array(maxInstances * 4); // Persistent Buffer
// --- Frustum Class ---
class Frustum {
    planes;
    constructor() {
        this.planes = [gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create(), gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create(), gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create(), gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create(), gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create(), gl_matrix__WEBPACK_IMPORTED_MODULE_2__.create()];
    }
    update(m) {
        const p = this.planes;
        // Right
        gl_matrix__WEBPACK_IMPORTED_MODULE_2__.set(p[0], m[3] - m[0], m[7] - m[4], m[11] - m[8], m[15] - m[12]);
        // Left
        gl_matrix__WEBPACK_IMPORTED_MODULE_2__.set(p[1], m[3] + m[0], m[7] + m[4], m[11] + m[8], m[15] + m[12]);
        // Bottom
        gl_matrix__WEBPACK_IMPORTED_MODULE_2__.set(p[2], m[3] + m[1], m[7] + m[5], m[11] + m[9], m[15] + m[13]);
        // Top
        gl_matrix__WEBPACK_IMPORTED_MODULE_2__.set(p[3], m[3] - m[1], m[7] - m[5], m[11] - m[9], m[15] - m[13]);
        // Far (z <= w -> w - z >= 0)
        gl_matrix__WEBPACK_IMPORTED_MODULE_2__.set(p[4], m[3] - m[2], m[7] - m[6], m[11] - m[10], m[15] - m[14]);
        // Near (z >= 0 -> z >= 0) -- WebGPU 0..1 clip space
        gl_matrix__WEBPACK_IMPORTED_MODULE_2__.set(p[5], m[2], m[6], m[10], m[14]);
    }
    intersectsBox(min, max) {
        for (let i = 0; i < 6; i++) {
            const p = this.planes[i];
            const px = p[0] > 0 ? max[0] : min[0];
            const py = p[1] > 0 ? max[1] : min[1];
            const pz = p[2] > 0 ? max[2] : min[2];
            if (p[0] * px + p[1] * py + p[2] * pz + p[3] < 0)
                return false;
        }
        return true;
    }
}
const frustum = new Frustum();
let lastCullPos = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create(); // Track camera pos for culling
let lastCullYaw = 0;
let currentInstanceCount = 0; // GLOBAL SCOPE
// Optimization: Reusable temp vectors for frustum check
const tempChunkMin = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
const tempChunkMax = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
function rebuildWorld(force = false) {
    if (!force) {
        // Throttle: Only rebuild if camera moved > 4 blocks or rotated > 0.1 rad
        const distSq = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.sqrDist(cameraPosition, lastCullPos);
        const rotDiff = Math.abs(cameraYaw - lastCullYaw);
        if (distSq < 16.0 && rotDiff < 0.1) {
            return; // Skip update
        }
    }
    // Update Cache
    gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(lastCullPos, cameraPosition);
    lastCullYaw = cameraYaw;
    // Update Frustum
    frustum.update(viewProjectionMatrix);
    let instanceCount = 0;
    // Direct Loop with fast write
    for (const [key, chunk] of chunks) {
        const [cx, cz] = key.split(',').map(Number);
        // Chunk AABB - Optimized to avoid GC
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.set(tempChunkMin, cx * CHUNK_SIZE, -Y_OFFSET, cz * CHUNK_SIZE);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.set(tempChunkMax, (cx + 1) * CHUNK_SIZE, CHUNK_HEIGHT - Y_OFFSET, (cz + 1) * CHUNK_SIZE);
        if (frustum.intersectsBox(tempChunkMin, tempChunkMax)) {
            const visible = chunk.visible;
            const len = visible.length;
            // Safety check against maxInstances
            if (instanceCount + len > maxInstances) {
                break; // simple truncation
            }
            for (let i = 0; i < len; i++) {
                const block = visible[i];
                const offset = instanceCount * 4;
                stagingBuffer[offset] = block.pos[0];
                stagingBuffer[offset + 1] = block.pos[1];
                stagingBuffer[offset + 2] = block.pos[2];
                stagingBuffer[offset + 3] = block.type;
                instanceCount++;
            }
        }
    }
    // Write ONLY the used portion to GPU
    device.queue.writeBuffer(instanceBuffer, 0, stagingBuffer, 0, instanceCount * 4);
    currentInstanceCount = instanceCount;
    // console.log('rebuildWorld: instanceCount', instanceCount, 'Chunks:', chunks.size);
    if (instanceCount === 0 && chunks.size > 0) {
        console.warn('rebuildWorld: Chunks exist but 0 instances. Frustum issue?');
        // Debug Frustum
        // console.log('Cam:', cameraPosition, 'Min:', chunks.values().next().value?.min);
    }
}
function updateInstanceBuffer() {
    // Legacy wrapper if needed, but rebuildWorld handles it now.
}
// Initial update called in rebuildWorld
// Initialize world generation after buffers are ready
// --- Pipeline ---
const pipeline = device.createRenderPipeline({
    layout: 'auto',
    vertex: {
        module: device.createShaderModule({ code: _shaders_wgsl__WEBPACK_IMPORTED_MODULE_3__ }),
        entryPoint: 'main_vs',
        buffers: [
            // Vertex Attributes
            {
                arrayStride: 8 * 4,
                attributes: [
                    { shaderLocation: 0, offset: 0, format: 'float32x3' },
                    { shaderLocation: 1, offset: 3 * 4, format: 'float32x2' },
                    { shaderLocation: 2, offset: 5 * 4, format: 'float32x3' }, // Normal
                ]
            },
            // Instance Attributes
            {
                arrayStride: 4 * 4, // vec3 pos + f32 type
                stepMode: 'instance',
                attributes: [
                    { shaderLocation: 3, offset: 0, format: 'float32x3' }, // instancePosition
                    { shaderLocation: 4, offset: 3 * 4, format: 'float32' } // textureIndex
                ]
            }
        ]
    },
    fragment: {
        module: device.createShaderModule({ code: _shaders_wgsl__WEBPACK_IMPORTED_MODULE_3__ }),
        entryPoint: 'main_fs',
        targets: [{ format }]
    },
    primitive: { topology: 'triangle-list', cullMode: 'back' },
    depthStencil: {
        depthWriteEnabled: true,
        depthCompare: 'less',
        format: 'depth24plus',
    }
});
const shadowPipeline = device.createRenderPipeline({
    layout: 'auto',
    vertex: {
        module: device.createShaderModule({ code: _shaders_wgsl__WEBPACK_IMPORTED_MODULE_3__ }),
        entryPoint: 'shadow_vs',
        buffers: [
            {
                arrayStride: 8 * 4,
                attributes: [
                    { shaderLocation: 0, offset: 0, format: 'float32x3' },
                    { shaderLocation: 1, offset: 3 * 4, format: 'float32x2' },
                    { shaderLocation: 2, offset: 5 * 4, format: 'float32x3' },
                ]
            },
            {
                arrayStride: 4 * 4,
                stepMode: 'instance',
                attributes: [
                    { shaderLocation: 3, offset: 0, format: 'float32x3' },
                    { shaderLocation: 4, offset: 3 * 4, format: 'float32' }
                ]
            }
        ]
    },
    primitive: { topology: 'triangle-list', cullMode: 'back' },
    depthStencil: {
        depthWriteEnabled: true,
        depthCompare: 'less',
        format: 'depth32float',
    }
});
// --- Uniforms ---
// Increased to 560 to match shader requirements (and added safety padding)
const uniformBufferSize = 560; // Was 544
const uniformBuffer = device.createBuffer({
    size: uniformBufferSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
});
const bindGroup = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [
        { binding: 0, resource: { buffer: uniformBuffer } },
        { binding: 1, resource: sampler },
        { binding: 2, resource: texture.createView({ dimension: '2d-array' }) },
        { binding: 3, resource: shadowSampler },
        { binding: 4, resource: shadowDepthTexture.createView() },
    ]
});
// Re-correction: bind group layout for shadow pass.
// shadow_vs only accesses 'uniforms'. 
// So entries should be just binding 0.
const shadowBindGroupReal = device.createBindGroup({
    layout: shadowPipeline.getBindGroupLayout(0),
    entries: [
        { binding: 0, resource: { buffer: uniformBuffer } }
    ]
});
// --- Camera & Resize ---
const projectionMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
const viewMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
const modelViewProjectionMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create(); // unused in new shader logic generally, but can keep structure
const viewProjectionMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
let depthTexture;
function resize() {
    // Resize based on displayed size (CSS)
    const rect = canvas.getBoundingClientRect();
    let displayWidth = Math.floor(rect.width * devicePixelRatio);
    let displayHeight = Math.floor(rect.height * devicePixelRatio);
    // Force even
    if (displayWidth % 2 !== 0)
        displayWidth--;
    if (displayHeight % 2 !== 0)
        displayHeight--;
    console.log('Resize called:', displayWidth, 'x', displayHeight, 'devicePixelRatio:', devicePixelRatio);
    // Check if canvas matches
    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        console.log('Canvas resized to:', canvas.width, 'x', canvas.height);
        // Update projection with new aspect ratio (WebGPU ZO strict)
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.perspectiveZO(projectionMatrix, (2 * Math.PI) / 5, canvas.width / canvas.height, 0.1, 100.0);
        console.log('[DEBUG] Resize Proj:', [projectionMatrix[0], projectionMatrix[5], projectionMatrix[10], projectionMatrix[15]]);
    }
    // Always recreate depth texture if size changed OR if it doesn't exist
    // Check texture size match
    if (!depthTexture || depthTexture.width !== canvas.width || depthTexture.height !== canvas.height) {
        if (depthTexture)
            depthTexture.destroy();
        depthTexture = device.createTexture({
            size: [canvas.width, canvas.height],
            format: 'depth24plus',
            usage: GPUTextureUsage.RENDER_ATTACHMENT,
        });
    }
}
window.addEventListener('resize', resize);
resize();
// --- Controls ---
// CRITICAL: Separate player position from camera position
// playerPosition = actual player location (used for physics, collision, chunk loading)
// cameraPosition = calculated camera position (used for rendering view matrix)
const playerPosition = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0, 2, 5);
const cameraPosition = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create(); // Calculated from playerPosition in 3rd person
let cameraYaw = Math.PI;
let cameraPitch = -0.3;
// Tuned for Seconds
const cameraSpeed = 4.0;
const mouseSensitivity = 0.002;
// Physics
let verticalVelocity = 0;
const gravity = 20.0;
const jumpForce = 8.5; // Tuned for >1m jump
let isGrounded = false;
const playerHeight = 1.6; // Visual Body Height (Eyes are at +1.8 from feet roughly)
const playerRadius = 0.3; // Half-width
let cameraZoom = 6.0; // Distance for 3rd Person
const eyeLevel = 1.8; // Camera height above feet for First Person
// --- Torch Light System ---
const torchPositions = []; // All torches in the world
const MAX_TORCH_LIGHTS = 16; // Maximum torches to send to shader
function addTorch(x, y, z) {
    torchPositions.push(gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(x + 0.5, y + 0.5, z + 0.5)); // Center of block
}
function removeTorch(x, y, z) {
    const tx = x + 0.5, ty = y + 0.5, tz = z + 0.5;
    const index = torchPositions.findIndex(pos => Math.abs(pos[0] - tx) < 0.1 && Math.abs(pos[1] - ty) < 0.1 && Math.abs(pos[2] - tz) < 0.1);
    if (index !== -1) {
        torchPositions.splice(index, 1);
    }
}
function getNearestTorches(playerPos, maxCount) {
    return torchPositions
        .map(pos => ({ pos, dist: gl_matrix__WEBPACK_IMPORTED_MODULE_1__.distance(pos, playerPos) }))
        .sort((a, b) => a.dist - b.dist)
        .slice(0, maxCount)
        .map(t => t.pos);
}
// Returns the integer Y level of the highest block hit, or null if no collision
function checkCollision(pos) {
    const minX = Math.floor(pos[0] - playerRadius);
    const maxX = Math.floor(pos[0] + playerRadius);
    const minZ = Math.floor(pos[2] - playerRadius);
    const maxZ = Math.floor(pos[2] + playerRadius);
    const minY = Math.floor(pos[1] - playerHeight);
    const maxY = Math.floor(pos[1]);
    let hitY = null;
    // Iterate relevant blocks
    for (let x = minX; x <= maxX; x++) {
        for (let z = minZ; z <= maxZ; z++) {
            for (let y = minY; y <= maxY; y++) {
                const cx = Math.floor(x / CHUNK_SIZE);
                const cz = Math.floor(z / CHUNK_SIZE);
                const chunk = chunks.get(`${cx},${cz}`);
                if (chunk) {
                    const lx = x - cx * CHUNK_SIZE;
                    const lz = z - cz * CHUNK_SIZE;
                    const idx = getGridIndex(lx, y, lz);
                    if (idx !== -1 && chunk.grid[idx] !== 0) {
                        // Hit!
                        if (hitY === null || y > hitY) {
                            hitY = y;
                        }
                    }
                }
            }
        }
    }
    return hitY;
}
// --- Inventory & Hotbar ---
// Slots 0-8 (Keys 1-9)
// Inventory Mapping: Slot Index -> Texture Type
// Default: Slot 0 = Cobble (0), Slot 1 = Dirt (1), rest = Cobble
// --- Inventory & Hotbar ---
// Slots 0-8 (Keys 1-9)
// Inventory Mapping: Slot Index -> Texture Type
// Default: Slot 0 = Cobble (0), Slot 1 = Dirt (1), Slot 2 = Grass (2), Slot 3 = TNT (4), Slot 4 = Torch (5)
const inventory = [0, 1, 2, 4, 5, 0, 0, 0, 0];
// Initial Counts: 64 Cobble, 10 Dirt, 10 Grass, 100 TNT, 64 Torch
const inventoryCounts = [64, 10, 10, 100, 64, 0, 0, 0, 0];
// Pad to 36 is done below in UI setup
let selectedSlot = 0;
// Create UI
const gameContainer = document.getElementById('game-container');
if (!gameContainer)
    throw new Error("Game container not found");
const hotbarContainer = document.createElement('div');
hotbarContainer.style.position = 'absolute';
hotbarContainer.style.bottom = '10px';
hotbarContainer.style.left = '50%';
hotbarContainer.style.transform = 'translateX(-50%)';
hotbarContainer.style.display = 'flex';
hotbarContainer.style.gap = '4px';
hotbarContainer.style.backgroundColor = 'rgba(0,0,0,0.5)';
hotbarContainer.style.padding = '4px';
hotbarContainer.style.borderRadius = '4px';
// Disable drag/semantics
hotbarContainer.style.userSelect = 'none';
hotbarContainer.style.userSelect = 'none';
gameContainer.appendChild(hotbarContainer);
// Crosshair
const crosshair = document.createElement('div');
crosshair.style.position = 'absolute';
crosshair.style.top = '50%';
crosshair.style.left = '50%';
crosshair.style.width = '20px';
crosshair.style.height = '20px';
crosshair.style.transform = 'translate(-50%, -50%)';
crosshair.style.pointerEvents = 'none'; // Click through
// Draw simple cross
crosshair.innerHTML = `
<div style="position:absolute; left:9px; top:0; width:2px; height:20px; background:rgba(255,255,255,0.8);"></div>
<div style="position:absolute; left:0; top:9px; width:20px; height:2px; background:rgba(255,255,255,0.8);"></div>
`;
gameContainer.appendChild(crosshair);
const slots = [];
for (let i = 0; i < 9; i++) {
    const slot = document.createElement('div');
    slot.style.width = '40px';
    slot.style.height = '40px';
    slot.style.border = '2px solid gray';
    slot.style.backgroundColor = '#333';
    slot.style.position = 'relative'; // For absolute positioning of count
    slot.style.display = 'flex';
    slot.style.alignItems = 'center';
    slot.style.justifyContent = 'center';
    slot.style.color = 'white';
    slot.style.fontFamily = 'monospace';
    // slot.innerText = i < 2 ? (i === 0 ? 'C' : 'D') : ''; 
    // Icon
    const icon = document.createElement('div');
    icon.style.width = '20px';
    icon.style.height = '20px';
    const type = inventory[i];
    if (type === 0)
        icon.style.backgroundColor = '#888'; // Stone
    else if (type === 1)
        icon.style.backgroundColor = '#855'; // Dirt
    else if (type === 2)
        icon.style.backgroundColor = '#484'; // Grass
    else if (type === 4)
        icon.style.backgroundColor = '#F00'; // TNT
    else if (type === 5)
        icon.style.backgroundColor = '#FA0'; // Torch (bright orange)
    else
        icon.style.backgroundColor = '#888';
    slot.appendChild(icon);
    // Count
    const countSpan = document.createElement('div');
    countSpan.style.position = 'absolute';
    countSpan.style.bottom = '2px';
    countSpan.style.right = '2px';
    countSpan.style.fontSize = '12px';
    countSpan.style.fontWeight = 'bold';
    countSpan.style.textShadow = '1px 1px 0 #000';
    countSpan.innerText = inventoryCounts[i].toString();
    slot.appendChild(countSpan);
    slots.push({ div: slot, count: countSpan });
    hotbarContainer.appendChild(slot);
}
// --- Expanded Inventory Logic ---
// 4 Rows of 9. Row 0 is Hotbar. Rows 1-3 are Main Inventory.
const TOTAL_SLOTS = 36;
// Pad inventory to 36
while (inventory.length < TOTAL_SLOTS)
    inventory.push(0);
while (inventoryCounts.length < TOTAL_SLOTS)
    inventoryCounts.push(0);
// Inventory UI Overlay
const inventoryOverlay = document.createElement('div');
inventoryOverlay.style.position = 'absolute';
inventoryOverlay.style.top = '50%';
inventoryOverlay.style.left = '50%';
inventoryOverlay.style.transform = 'translate(-50%, -50%)';
inventoryOverlay.style.width = '400px';
inventoryOverlay.style.height = '300px';
inventoryOverlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
inventoryOverlay.style.display = 'none'; // Hidden by default
inventoryOverlay.style.flexWrap = 'wrap';
inventoryOverlay.style.gap = '4px';
inventoryOverlay.style.padding = '10px';
inventoryOverlay.style.borderRadius = '8px';
inventoryOverlay.style.zIndex = '100';
inventoryOverlay.style.border = '2px solid #555';
gameContainer.appendChild(inventoryOverlay);
const invSlots = [];
let swapSourceIndex = -1;
let draggedItem = null;
function createInventorySlots() {
    inventoryOverlay.innerHTML = '';
    invSlots.length = 0;
    // Create 36 slots
    for (let i = 0; i < TOTAL_SLOTS; i++) {
        const slot = document.createElement('div');
        slot.style.width = '40px';
        slot.style.height = '40px';
        slot.style.border = '2px solid gray';
        slot.style.backgroundColor = '#333';
        slot.style.position = 'relative';
        slot.style.display = 'flex';
        slot.style.alignItems = 'center';
        slot.style.justifyContent = 'center';
        slot.style.color = 'white';
        slot.style.fontFamily = 'monospace';
        slot.style.cursor = 'pointer';
        // Event: Drag Start
        slot.addEventListener('mousedown', (ev) => {
            if (inventoryCounts[i] === 0)
                return; // Nothing to drag
            draggedItem = {
                type: inventory[i],
                count: inventoryCounts[i],
                sourceIndex: i
            };
            // Visual feedback
            slot.style.opacity = '0.5';
            ev.preventDefault();
        });
        // Event: Swap
        slot.addEventListener('click', () => {
            if (swapSourceIndex === -1) {
                // Select
                swapSourceIndex = i;
                slot.style.borderColor = 'yellow';
            }
            else {
                // Swap
                const src = swapSourceIndex;
                const dst = i;
                // Swap Type
                const tempType = inventory[src];
                inventory[src] = inventory[dst];
                inventory[dst] = tempType;
                // Swap Count
                const tempCount = inventoryCounts[src];
                inventoryCounts[src] = inventoryCounts[dst];
                inventoryCounts[dst] = tempCount;
                swapSourceIndex = -1;
                updateInventoryUI();
                updateHotbarUI();
            }
        });
        // Icon
        const icon = document.createElement('div');
        icon.style.width = '20px';
        icon.style.height = '20px';
        slot.appendChild(icon);
        // Count
        const countSpan = document.createElement('div');
        countSpan.style.position = 'absolute';
        countSpan.style.bottom = '2px';
        countSpan.style.right = '2px';
        countSpan.style.fontSize = '12px';
        countSpan.style.fontWeight = 'bold';
        countSpan.style.textShadow = '1px 1px 0 #000';
        slot.appendChild(countSpan);
        invSlots.push({ div: slot, count: countSpan, icon: icon, index: i });
        inventoryOverlay.appendChild(slot);
    }
}
// Drag-and-drop handlers
inventoryOverlay.addEventListener('mousemove', (e) => {
    if (!draggedItem)
        return;
    // Find slot under cursor
    const target = document.elementFromPoint(e.clientX, e.clientY);
    if (!target)
        return;
    // Highlight drop target
    invSlots.forEach(s => {
        if (s.div.contains(target) && s.index !== draggedItem.sourceIndex) {
            s.div.style.borderColor = 'yellow';
        }
        else if (s.index !== draggedItem.sourceIndex) {
            s.div.style.borderColor = (s.index < 9) ? '#aaa' : '#555';
        }
    });
});
inventoryOverlay.addEventListener('mouseup', (e) => {
    if (!draggedItem)
        return;
    // Find target slot
    const target = document.elementFromPoint(e.clientX, e.clientY);
    const targetSlot = invSlots.find(s => s.div.contains(target));
    if (targetSlot && targetSlot.index !== draggedItem.sourceIndex) {
        // Swap items
        const src = draggedItem.sourceIndex;
        const dst = targetSlot.index;
        const tempType = inventory[src];
        inventory[src] = inventory[dst];
        inventory[dst] = tempType;
        const tempCount = inventoryCounts[src];
        inventoryCounts[src] = inventoryCounts[dst];
        inventoryCounts[dst] = tempCount;
    }
    // Reset drag state
    draggedItem = null;
    updateInventoryUI();
    updateHotbarUI();
});
createInventorySlots();
function updateInventoryUI() {
    for (let i = 0; i < TOTAL_SLOTS; i++) {
        const slot = invSlots[i];
        const type = inventory[i];
        const count = inventoryCounts[i];
        // Update Icon with actual texture representation
        const icon = slot.icon;
        if (type === 0)
            icon.style.backgroundColor = '#666'; // Stone
        else if (type === 1)
            icon.style.backgroundColor = '#855'; // Dirt  
        else if (type === 2) {
            // Grass - show green top
            icon.style.background = 'linear-gradient(to bottom, #4a4 0%, #4a4 60%, #855 60%, #855 100%)';
        }
        else if (type === 4)
            icon.style.backgroundColor = '#c22'; // TNT
        else
            icon.style.backgroundColor = 'transparent';
        // Update Count
        slot.count.innerText = count > 0 ? count.toString() : '';
        // Reset opacity and border
        slot.div.style.opacity = (draggedItem && draggedItem.sourceIndex === i) ? '0.5' : '1.0';
        slot.div.style.borderColor = (i < 9) ? '#aaa' : '#555';
    }
}
function toggleInventory() {
    if (inventoryOverlay.style.display === 'none') {
        inventoryOverlay.style.display = 'flex';
        document.exitPointerLock(); // Free mouse
        updateInventoryUI();
    }
    else {
        inventoryOverlay.style.display = 'none';
        canvas.requestPointerLock(); // Lock mouse
        swapSourceIndex = -1; // Cancel swap
    }
}
function updateHotbarUI() {
    for (let i = 0; i < 9; i++) {
        const type = inventory[i];
        const slotDiv = slots[i].div;
        const icon = slotDiv.firstElementChild;
        // Match inventory UI styling
        if (type === 0)
            icon.style.backgroundColor = '#666';
        else if (type === 1)
            icon.style.backgroundColor = '#855';
        else if (type === 2) {
            icon.style.background = 'linear-gradient(to bottom, #4a4 0%, #4a4 60%, #855 60%, #855 100%)';
        }
        else if (type === 4)
            icon.style.backgroundColor = '#c22';
        else
            icon.style.backgroundColor = 'transparent';
        slots[i].count.innerText = inventoryCounts[i].toString();
        if (i === selectedSlot) {
            slots[i].div.style.borderColor = 'white';
            slots[i].div.style.transform = 'scale(1.1)';
        }
        else {
            slots[i].div.style.borderColor = 'gray';
            slots[i].div.style.transform = 'scale(1.0)';
        }
    }
}
updateHotbarUI();
const keys = {};
window.addEventListener('keydown', (e) => {
    // Strict Input Blocking:
    // If Game Active: Block WASD/Space/Arrows/I/F/Numbers from scrolling/typing context.
    // If Game Paused: Allow EVERYTHING (default browser behavior).
    if (!isGameActive)
        return; // Allow typing/scrolling if paused
    if (e.code === 'Space' || e.code.startsWith('Arrow') || e.code === 'KeyW' || e.code === 'KeyS' || e.code === 'KeyA' || e.code === 'KeyD') {
        e.preventDefault();
    }
    // Toggle Inventory (I) - Only if active
    if (e.code === 'KeyI') {
        toggleInventory();
    }
    // Hotkeys/Actions only if active
    keys[e.code] = true;
    // Exit Inventory (Escape)
    if (e.code === 'Escape' && inventoryOverlay.style.display === 'flex') {
        toggleInventory();
    }
    // Hotkey 1-9
    if (e.code === 'KeyE') {
        const dist = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.distance(cameraPosition, spider.position);
        if (isRiding) {
            isRiding = false;
            // Dismount near spider position
        }
        else if (dist < 5.0) {
            isRiding = true;
        }
    }
    // Explosion (F)
    if (e.code === 'KeyF') {
        if (currentHit && currentHit.index !== -1) {
            // Unused -1 index in current implementation, but currentHit implies valid block
        }
        // Actually, check currentHit
        if (currentHit) {
            const px = Math.round(currentHit.point[0]);
            const py = Math.round(currentHit.point[1]);
            const pz = Math.round(currentHit.point[2]);
            const cx = Math.floor(px / CHUNK_SIZE);
            const cz = Math.floor(pz / CHUNK_SIZE);
            const key = `${cx},${cz}`;
            const chunk = chunks.get(key);
            if (chunk) {
                const lx = px - cx * CHUNK_SIZE;
                const lz = pz - cz * CHUNK_SIZE;
                const idx = getGridIndex(lx, py, lz);
                // Check if TNT
                if (idx !== -1 && chunk.grid[idx] === 5) {
                    // EXPLODE
                    _logger__WEBPACK_IMPORTED_MODULE_9__.Logger.log('BOOM!');
                    const radius = 3;
                    const minX = px - radius;
                    const maxX = px + radius;
                    const minY = py - radius;
                    const maxY = py + radius;
                    const minZ = pz - radius;
                    const maxZ = pz + radius;
                    // Helper to rebuild single chunk mesh
                    const rebuildChunkMesh = (chunk, cx, cz) => {
                        chunk.visible = [];
                        for (let x = 0; x < CHUNK_SIZE; x++) {
                            for (let z = 0; z < CHUNK_SIZE; z++) {
                                const wx = cx * CHUNK_SIZE + x;
                                const wz = cz * CHUNK_SIZE + z;
                                // Fast scan
                                for (let y = -30; y <= 30; y++) {
                                    const idx = getGridIndex(x, y, z);
                                    if (idx === -1)
                                        continue;
                                    const type = chunk.grid[idx];
                                    if (type === 0)
                                        continue;
                                    let exposed = false;
                                    const isSolid = (nx, ny, nz) => {
                                        const nIdx = getGridIndex(nx, ny, nz);
                                        if (nIdx === -1)
                                            return false;
                                        return chunk.grid[nIdx] !== 0; // Not 0 means solid
                                        // Wait, air is 0. 
                                    };
                                    if (!isSolid(x + 1, y, z))
                                        exposed = true;
                                    else if (!isSolid(x - 1, y, z))
                                        exposed = true;
                                    else if (!isSolid(x, y + 1, z))
                                        exposed = true;
                                    else if (!isSolid(x, y - 1, z))
                                        exposed = true;
                                    else if (!isSolid(x, y, z + 1))
                                        exposed = true;
                                    else if (!isSolid(x, y, z - 1))
                                        exposed = true;
                                    if (exposed) {
                                        chunk.visible.push({
                                            pos: new Float32Array([wx, y, wz]),
                                            type: type - 1
                                        });
                                    }
                                }
                            }
                        }
                    };
                    const chunksToUpdate = new Set();
                    for (let x = minX; x <= maxX; x++) {
                        for (let y = minY; y <= maxY; y++) {
                            for (let z = minZ; z <= maxZ; z++) {
                                const dx = x - px;
                                const dy = y - py;
                                const dz = z - pz;
                                if (dx * dx + dy * dy + dz * dz <= radius * radius) {
                                    // Destroy
                                    const tCx = Math.floor(x / CHUNK_SIZE);
                                    const tCz = Math.floor(z / CHUNK_SIZE);
                                    const tKey = `${tCx},${tCz}`;
                                    const tChunk = chunks.get(tKey);
                                    if (tChunk) {
                                        const tLx = x - tCx * CHUNK_SIZE;
                                        const tLz = z - tCz * CHUNK_SIZE;
                                        const tIdx = getGridIndex(tLx, y, tLz);
                                        if (tIdx !== -1) {
                                            tChunk.grid[tIdx] = 0; // Air
                                            chunksToUpdate.add(tKey);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    // Rebuild Chunks
                    for (const cKey of chunksToUpdate) {
                        const [ccx, ccz] = cKey.split(',').map(Number);
                        rebuildChunkMesh(chunks.get(cKey), ccx, ccz);
                    }
                    rebuildWorld();
                }
            }
        }
    }
    if (e.key >= '1' && e.key <= '9') {
        selectedSlot = parseInt(e.key) - 1;
        updateHotbarUI();
    }
});
// Mouse Wheel
window.addEventListener('wheel', (e) => {
    if (!isGameActive)
        return; // Strict Isolation: Allow scroll if paused
    e.preventDefault(); // Block page scroll if active
    if (isRiding) {
        // Zoom Camera
        cameraZoom += e.deltaY * 0.01;
        // Allow greater zoom when riding spider for better view
        const maxZoom = 40.0;
        cameraZoom = Math.max(2.0, Math.min(maxZoom, cameraZoom));
    }
    else {
        // Inventory Scroll
        if (e.deltaY > 0) {
            selectedSlot = (selectedSlot + 1) % 9;
        }
        else {
            selectedSlot = (selectedSlot - 1 + 9) % 9;
        }
        updateHotbarUI();
    }
}, { passive: false }); // REQUIRED for preventDefault to work on wheel events
window.addEventListener('keyup', (e) => { keys[e.code] = false; });
canvas.addEventListener('click', () => { canvas.requestPointerLock(); });
document.addEventListener('mousemove', (e) => {
    if (document.pointerLockElement === canvas) {
        cameraYaw -= e.movementX * mouseSensitivity;
        // Invert Pitch if 3rd Person On-Foot
        // Note: isThirdPersonOnFoot is local to frame(), so we check DOM element directly here.
        // Or better, check the global checkbox reference.
        // chkThirdPerson is global.
        let pitchDelta = e.movementY * mouseSensitivity;
        if (chkThirdPerson && chkThirdPerson.checked && !isRiding) {
            // Invert for "Mouse Down = Look Down" feel in 3rd person
            // Current: Pitch- = Up. Pitch+ = Down.
            // Mouse Down (Pos Y). We want Pitch+ (Down).
            // Originally: cameraPitch -= delta. (Pos Y -> Pitch- -> Up).
            // New: cameraPitch += delta. (Pos Y -> Pitch+ -> Down).
            // So we just flip delta sign? 
            // Logic: cameraPitch -= (flipped_delta). 
            // If we want +=, then flipped_delta must be negative of original.
            pitchDelta = -pitchDelta;
        }
        cameraPitch -= pitchDelta;
        cameraPitch = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, cameraPitch));
    }
});
// --- Raycasting ---
function getCameraForward() {
    const forward = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
    forward[0] = Math.cos(cameraPitch) * Math.sin(cameraYaw);
    forward[1] = Math.sin(cameraPitch);
    forward[2] = Math.cos(cameraPitch) * Math.cos(cameraYaw);
    gl_matrix__WEBPACK_IMPORTED_MODULE_1__.normalize(forward, forward);
    return forward;
}
// Ray vs AABB
function intersectRayAABB(origin, dir, boxMin, boxMax) {
    let tmin = (boxMin[0] - origin[0]) / dir[0];
    let tmax = (boxMax[0] - origin[0]) / dir[0];
    if (tmin > tmax)
        [tmin, tmax] = [tmax, tmin];
    let tymin = (boxMin[1] - origin[1]) / dir[1];
    let tymax = (boxMax[1] - origin[1]) / dir[1];
    if (tymin > tymax)
        [tymin, tymax] = [tymax, tymin];
    if ((tmin > tymax) || (tymin > tmax))
        return null;
    if (tymin > tmin)
        tmin = tymin;
    if (tymax < tmax)
        tmax = tymax;
    let tzmin = (boxMin[2] - origin[2]) / dir[2];
    let tzmax = (boxMax[2] - origin[2]) / dir[2];
    if (tzmin > tzmax)
        [tzmin, tzmax] = [tzmax, tzmin];
    if ((tmin > tzmax) || (tzmin > tmax))
        return null;
    if (tzmin > tmin)
        tmin = tzmin;
    if (tzmax < tmax)
        tmax = tzmax;
    if (tmax < 0)
        return null; // Behind
    // If tmin < 0 (inside block), return tmax? Or 0? Let's return tmin if valid (positive), else 0 if inside?
    // Actually standard implementation handles start inside.
    return tmin >= 0 ? tmin : tmax;
}
// --- Outline Renderer ---
// New shader for THICK BLACK LINES (Cage Effect)
const outlineShaderCode = `
struct Uniforms {
    modelViewProjectionMatrix : mat4x4<f32>,
    viewProjectionMatrix : mat4x4<f32>,
}
struct OutlineUniforms {
    position : vec4<f32>, 
}
@group(0) @binding(0) var<uniform> globalUniforms : Uniforms;
@group(0) @binding(1) var<uniform> outlineUniforms : OutlineUniforms;

struct VertexOutput {
    @builtin(position) Position : vec4<f32>,
    @location(0) uv : vec2<f32>,
}

@vertex
fn main_vs(@location(0) position : vec3<f32>, @location(1) uv : vec2<f32>) -> VertexOutput {
    var output : VertexOutput;
    // Move to block position
    let worldPos = position + outlineUniforms.position.xyz; 
    output.Position = globalUniforms.viewProjectionMatrix * vec4<f32>(worldPos, 1.0);
    output.uv = uv;
    return output;
}

@fragment
fn main_fs(input: VertexOutput) -> @location(0) vec4<f32> {
    // Thick black lines based on UV edge distance
    let thickness = 0.05; // 5% border thickness
    // Check if close to any edge
    let nearEdgeX = input.uv.x < thickness || input.uv.x > (1.0 - thickness);
    let nearEdgeY = input.uv.y < thickness || input.uv.y > (1.0 - thickness);
    
    if (nearEdgeX || nearEdgeY) {
        return vec4<f32>(0.0, 0.0, 0.0, 1.0); // Solid Black
    }
    
    discard; // Transparent center
    return vec4<f32>(0.0, 0.0, 0.0, 0.0);
}
`;
const outlineUniformBuffer = device.createBuffer({
    size: 16, // vec4
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
});
const outlinePipeline = device.createRenderPipeline({
    layout: 'auto',
    vertex: {
        module: device.createShaderModule({ code: outlineShaderCode }),
        entryPoint: 'main_vs',
        buffers: [{
                arrayStride: 8 * 4, // Match main vertex buffer stride (Pos+UV+Norm)
                attributes: [
                    { shaderLocation: 0, offset: 0, format: 'float32x3' }, // Pos
                    { shaderLocation: 1, offset: 12, format: 'float32x2' } // UV
                ]
            }]
    },
    fragment: {
        module: device.createShaderModule({ code: outlineShaderCode }),
        entryPoint: 'main_fs',
        targets: [{
                format: format,
                blend: {
                    color: { srcFactor: 'src-alpha', dstFactor: 'one-minus-src-alpha', operation: 'add' },
                    alpha: { srcFactor: 'src-alpha', dstFactor: 'one-minus-src-alpha', operation: 'add' }
                }
            }]
    },
    primitive: { topology: 'triangle-list', cullMode: 'back' },
    depthStencil: {
        depthWriteEnabled: true, // Write depth so lines occlude properly? Or false to see through?
        // User wants "clearly visible". If depthWrite is true, lines behind won't show.
        // But lines are on the face.
        // Let's keep depthCompare less (standard).
        depthCompare: 'less',
        format: 'depth24plus',
        // Bias to ensure lines draw ON TOP of the block
        depthBias: -1000,
        depthBiasSlopeScale: -2.0
    }
});
const outlineBindGroup = device.createBindGroup({
    layout: outlinePipeline.getBindGroupLayout(0),
    entries: [
        { binding: 0, resource: { buffer: uniformBuffer } },
        { binding: 1, resource: { buffer: outlineUniformBuffer } }
    ]
});
// State for raycast
let currentHit = null;
// ... (raycast logic unchanged) ...
function raycast() {
    const forward = getCameraForward();
    let x = Math.floor(cameraPosition[0]);
    let y = Math.floor(cameraPosition[1]);
    let z = Math.floor(cameraPosition[2]);
    const stepX = Math.sign(forward[0]);
    const stepY = Math.sign(forward[1]);
    const stepZ = Math.sign(forward[2]);
    const tDeltaX = stepX !== 0 ? 1 / Math.abs(forward[0]) : Infinity;
    const tDeltaY = stepY !== 0 ? 1 / Math.abs(forward[1]) : Infinity;
    const tDeltaZ = stepZ !== 0 ? 1 / Math.abs(forward[2]) : Infinity;
    let tMaxX = (stepX > 0 ? Math.floor(cameraPosition[0]) + 1 - cameraPosition[0] : cameraPosition[0] - Math.floor(cameraPosition[0])) * tDeltaX;
    let tMaxY = (stepY > 0 ? Math.floor(cameraPosition[1]) + 1 - cameraPosition[1] : cameraPosition[1] - Math.floor(cameraPosition[1])) * tDeltaY;
    let tMaxZ = (stepZ > 0 ? Math.floor(cameraPosition[2]) + 1 - cameraPosition[2] : cameraPosition[2] - Math.floor(cameraPosition[2])) * tDeltaZ;
    let lastX = x, lastY = y, lastZ = z;
    const range = 8;
    for (let i = 0; i < range * 2; i++) {
        const cx = Math.floor(x / CHUNK_SIZE);
        const cz = Math.floor(z / CHUNK_SIZE);
        const chunk = chunks.get(`${cx},${cz}`);
        let hit = false;
        if (chunk) {
            const lx = x - cx * CHUNK_SIZE;
            const lz = z - cz * CHUNK_SIZE;
            const idx = getGridIndex(lx, y, lz);
            if (idx !== -1 && chunk.grid[idx] !== 0) {
                hit = true;
            }
        }
        else {
            // Out of loaded chunks? Treat as air.
        }
        if (hit) {
            return {
                index: -1,
                point: gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(x, y, z),
                key: `${x},${y},${z}`, // Legacy key usage? Or unused.
                empty: gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(lastX, lastY, lastZ)
            };
        }
        lastX = x;
        lastY = y;
        lastZ = z;
        if (tMaxX < tMaxY) {
            if (tMaxX < tMaxZ) {
                x += stepX;
                tMaxX += tDeltaX;
            }
            else {
                z += stepZ;
                tMaxZ += tDeltaZ;
            }
        }
        else {
            if (tMaxY < tMaxZ) {
                y += stepY;
                tMaxY += tDeltaY;
            }
            else {
                z += stepZ;
                tMaxZ += tDeltaZ;
            }
        }
    }
    return null;
}
window.addEventListener('mousedown', (e) => {
    if (document.pointerLockElement !== canvas)
        return;
    if (!currentHit)
        return;
    // Helper to rebuild single chunk mesh
    const rebuildChunkMesh = (chunk, cx, cz) => {
        chunk.visible = [];
        for (let x = 0; x < CHUNK_SIZE; x++) {
            for (let z = 0; z < CHUNK_SIZE; z++) {
                const wx = cx * CHUNK_SIZE + x;
                const wz = cz * CHUNK_SIZE + z;
                // Full scan for correct culling
                const minY = -Y_OFFSET;
                const maxY = CHUNK_HEIGHT - Y_OFFSET - 1;
                for (let y = minY; y <= maxY; y++) {
                    const idx = getGridIndex(x, y, z);
                    if (idx === -1)
                        continue;
                    const type = chunk.grid[idx];
                    if (type === 0)
                        continue;
                    let exposed = false;
                    const isSolid = (nx, ny, nz) => {
                        const nIdx = getGridIndex(nx, ny, nz);
                        if (nIdx === -1)
                            return false;
                        return chunk.grid[nIdx] !== 0;
                    };
                    if (!isSolid(x + 1, y, z))
                        exposed = true;
                    else if (!isSolid(x - 1, y, z))
                        exposed = true;
                    else if (!isSolid(x, y + 1, z))
                        exposed = true;
                    else if (!isSolid(x, y - 1, z))
                        exposed = true;
                    else if (!isSolid(x, y, z + 1))
                        exposed = true;
                    else if (!isSolid(x, y, z - 1))
                        exposed = true;
                    if (exposed) {
                        chunk.visible.push({
                            pos: new Float32Array([wx, y, wz]),
                            type: type - 1
                        });
                    }
                }
            }
        }
    };
    if (e.button === 0) { // Mine (Left Click)
        const px = Math.round(currentHit.point[0]);
        const py = Math.round(currentHit.point[1]);
        const pz = Math.round(currentHit.point[2]);
        const cx = Math.floor(px / CHUNK_SIZE);
        const cz = Math.floor(pz / CHUNK_SIZE);
        const key = `${cx},${cz}`;
        const chunk = chunks.get(key);
        if (chunk) {
            const lx = px - cx * CHUNK_SIZE;
            const lz = pz - cz * CHUNK_SIZE;
            const idx = getGridIndex(lx, py, lz);
            if (idx !== -1 && chunk.grid[idx] !== 0) {
                const oldType = chunk.grid[idx];
                // Track torch removal
                if (oldType === 6) { // Torch
                    removeTorch(px, py, pz);
                }
                // Map block types to item types (what gets dropped)
                // Grid type 1 (stone) -> Item type 0 (cobblestone texture)
                // Grid type 2 (dirt) -> Item type 1 (dirt texture)
                // Grid type 3 (grass) -> Item type 2 (grass texture)
                // Grid type 5 (TNT) -> Item type 4 (TNT texture)
                let itemType = oldType - 1; // Default mapping
                if (oldType === 1)
                    itemType = 0; // Stone -> Cobblestone
                chunk.grid[idx] = 0; // AIR
                rebuildChunkMesh(chunk, cx, cz);
                rebuildWorld(true); // Force update to remove block instantly
                // Spawn Pickup at exact mined position (not surface)
                const pPos = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(px + 0.5, py + 0.5, pz + 0.5);
                pickupSystem.spawn(pPos, itemType);
                updateHotbarUI();
                updateInventoryUI(); // Update full inventory too
            }
        }
    }
    else if (e.button === 2) { // Place (Right Click)
        if (inventoryCounts[selectedSlot] > 0 && currentHit.empty) {
            const nx = currentHit.empty[0];
            const ny = currentHit.empty[1];
            const nz = currentHit.empty[2];
            const dx = nx - cameraPosition[0];
            const dy = ny - cameraPosition[1];
            const dz = nz - cameraPosition[2];
            if (dx * dx + dy * dy + dz * dz > 1.0) {
                const cx = Math.floor(nx / CHUNK_SIZE);
                const cz = Math.floor(nz / CHUNK_SIZE);
                const key = `${cx},${cz}`;
                let chunk = chunks.get(key);
                if (!chunk) {
                    // Optionally create new chunk data if needed
                }
                if (chunk) {
                    const lx = nx - cx * CHUNK_SIZE;
                    const lz = nz - cz * CHUNK_SIZE;
                    const idx = getGridIndex(lx, ny, lz);
                    if (idx !== -1 && chunk.grid[idx] === 0) {
                        chunk.grid[idx] = inventory[selectedSlot] + 1;
                        // Track torch placement
                        if (inventory[selectedSlot] + 1 === 6) { // Torch block type
                            addTorch(nx, ny, nz);
                        }
                        inventoryCounts[selectedSlot]--;
                        rebuildChunkMesh(chunk, cx, cz);
                        rebuildWorld(true); // Force update to show block instantly
                        updateHotbarUI();
                    }
                }
            }
        }
    }
});
// --- UI ---
// gameContainer defined above
const fpsDiv = document.createElement('div');
fpsDiv.style.position = 'absolute';
fpsDiv.style.top = '10px';
fpsDiv.style.left = '10px';
fpsDiv.style.color = 'white';
fpsDiv.style.fontFamily = 'monospace';
fpsDiv.style.fontSize = '16px';
fpsDiv.style.backgroundColor = 'rgba(0,0,0,0.5)';
fpsDiv.style.padding = '4px';
fpsDiv.style.pointerEvents = 'none'; // Don't block mouse
gameContainer.appendChild(fpsDiv);
// --- Mount Button ---
const mountBtn = document.createElement('button');
mountBtn.innerText = "Mount Spider";
mountBtn.style.position = 'absolute';
mountBtn.style.top = '10px';
mountBtn.style.right = '10px';
mountBtn.style.padding = '8px 16px';
mountBtn.style.backgroundColor = '#4CAF50';
mountBtn.style.color = 'white';
mountBtn.style.border = 'none';
mountBtn.style.borderRadius = '4px';
mountBtn.style.cursor = 'pointer';
mountBtn.style.fontWeight = 'bold';
mountBtn.style.zIndex = '1000'; // Ensure it's above everything
mountBtn.onclick = () => {
    isRiding = true;
    isGameActive = true; // Ensure game is active so controls work
    // Teleport to spider to ensure visual snap
    gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(playerPosition, spider.position);
    playerPosition[1] += 3.0; // Above spider
    // Also likely need to set focus/pointer lock if not active?
    // canvas.requestPointerLock(); // Optional, might annoy if strict
};
gameContainer.appendChild(mountBtn);
// --- Menu Logic ---
const menu = document.getElementById('main-menu');
const startBtn = document.getElementById('start-btn');
let isGameActive = false;
if (startBtn && menu) {
    startBtn.addEventListener('click', () => {
        if (!isWorldLoaded) {
            // Start Loading Process
            // Don't activate game yet, just enable loading loop
            isLoading = true;
            startBtn.innerText = "Loading World...";
            startBtn.disabled = true;
            canvas.style.cursor = 'progress';
            return;
        }
        // Resume Game
        // Force start immediately, don't wait for pointer lock event (which might fail)
        isGameActive = true;
        menu.style.display = 'none';
        canvas.requestPointerLock().catch(err => {
            console.warn("Pointer lock failed or suppressed:", err);
            // Fallback: Game is active, but mouse might wander.
        });
    });
    document.addEventListener('pointerlockchange', () => {
        if (document.pointerLockElement === canvas) {
            isGameActive = true;
            menu.style.display = 'none';
        }
        else {
            // Only pause if we explicitly lost lock (user pressed Esc).
            // But if we never HAD lock, this might not fire?
            // If it fires with null, we pause.
            // This is acceptable behavior for Esc.
            isGameActive = false;
            menu.style.display = 'flex';
            // Update Button Text based on state
            if (startBtn) {
                startBtn.innerText = "Resume Game";
                startBtn.disabled = false;
            }
        }
    });
}
// --- Auto-Pause Intersection Observer ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // Game scrolled out of view -> Pause
            if (isGameActive && isWorldLoaded) {
                document.exitPointerLock();
                isGameActive = false;
                if (menu)
                    menu.style.display = 'flex'; // Show menu
            }
        }
    });
}, { threshold: 0.1 }); // Pause if < 10% visible
observer.observe(gameContainer);
const chkShadows = document.getElementById('chk-shadows');
const chkLockTime = document.getElementById('chk-lock-time');
const chkThirdPerson = document.getElementById('chk-third-person');
if (chkThirdPerson) {
    chkThirdPerson.disabled = false;
    // Update label text safer way (Text Node sibling)
    if (chkThirdPerson.nextSibling) {
        chkThirdPerson.nextSibling.textContent = " On-Foot Third Person";
        // Fix Gray Color (was set in inline style)
        if (chkThirdPerson.parentElement) {
            chkThirdPerson.parentElement.style.color = 'white'; // Match parent #main-menu color
            chkThirdPerson.parentElement.style.cursor = 'pointer';
        }
    }
}
// --- Spawn Logic (Correctly Placed) ---
function getSurfaceHeight(x, z) {
    const cx = Math.floor(x / CHUNK_SIZE);
    const cz = Math.floor(z / CHUNK_SIZE);
    const chunk = chunks.get(`${cx},${cz}`);
    if (!chunk)
        return 0;
    const lx = Math.floor(x - cx * CHUNK_SIZE);
    const lz = Math.floor(z - cz * CHUNK_SIZE);
    // Scan down from reasonable height
    for (let y = 100; y >= -30; y--) {
        const idx = getGridIndex(lx, y, lz);
        if (idx !== -1 && chunk.grid[idx] !== 0) {
            return y;
        }
    }
    return 0;
}
function attemptSpawnPlayer() {
    updateChunks(gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0, 0, 0));
    const playerY = getSurfaceHeight(0, 0);
    // If chunk not generated (0) or too low (< -50), fail
    // getSurfaceHeight returns 0 if chunk missing.
    // We want to be sure it's a real block.
    // Let's modify getSurfaceHeight slightly in logic or just check if it's 0.
    // NOTE: 0 is distinct from "ground at 0". 
    // Wait, getSurfaceHeight returns 0 if missing. 
    // And loop returns 0 if nothing found.
    // Real ground is usually > 5. 
    // Let's assume ground must be > 0 to be valid for spawn.
    if (playerY <= 0)
        return false;
    // Found valid ground! Update UI and Spawn.
    const spiderGroundY = playerY; // Simplify for now, spider spawns near player
    // Spawn spider nearby but randomized
    const angle = Math.random() * Math.PI * 2;
    const dist = 5 + Math.random() * 5; // 5 to 10 blocks away
    const sx = Math.cos(angle) * dist;
    const sz = Math.sin(angle) * dist;
    // Ensure spider chunk
    const spCx = Math.floor(sx / CHUNK_SIZE);
    const spCz = Math.floor(sz / CHUNK_SIZE);
    getOrGenerateChunk(spCx, spCz);
    // Re-check spider height
    let maxY = -100;
    for (let ox = -1; ox <= 1; ox++) {
        for (let oz = -1; oz <= 1; oz++) {
            const y = getSurfaceHeight(sx + ox, sz + oz);
            if (y > maxY)
                maxY = y;
        }
    }
    const realSpiderY = maxY > -50 ? maxY : playerY; // Fallback
    cameraPosition[0] = 0;
    cameraPosition[1] = playerY + 5;
    cameraPosition[2] = 0;
    verticalVelocity = 0;
    isRiding = false;
    spider.position[0] = sx;
    spider.position[1] = realSpiderY + 5;
    spider.position[2] = sz;
    spider.velocity = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
    // Re-init legs?
    for (let i = 0; i < spider.legTargets.length; i++) {
        const ideal = spider.getIdealFootPos(i, spider.position, spider.yaw);
        const gy = getSurfaceHeight(ideal[0], ideal[2]);
        ideal[1] = (gy || realSpiderY) + 1.0;
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(spider.legTargets[i], ideal);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(spider.legStart[i], ideal);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(spider.legNext[i], ideal);
        spider.legMoving[i] = false;
        spider.legProgress[i] = 1.0;
    }
    _logger__WEBPACK_IMPORTED_MODULE_9__.Logger.log(`Spawned! Player Y: ${playerY}`);
    return true;
}
// Initial State
let isWorldLoaded = false;
let isLoading = false;
// Don't spawn immediately. Wait for user or load loop.
// --- Loop ---
let lastTime = performance.now();
let frames = 0;
let lastFpsTime = lastTime;
let frameCount = 0;
// Hoisted Render Variables
const globalSky = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
const globalLightColor = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
const globalAmbientColor = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
const globalLightViewMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
function frame() {
    const now = performance.now();
    let dt = (now - lastTime) / 1000;
    lastTime = now;
    // Defined at top of frame for scope visibility
    const isThirdPersonOnFoot = (chkThirdPerson && chkThirdPerson.checked);
    if (frameCount === 0) {
        // console.log('First frame rendering! Canvas size:', canvas.width, 'x', canvas.height);
        // console.log('Instance count:', allInstances.length);
    }
    frameCount++;
    if (isLoading) {
        // Attempt to spawn
        if (attemptSpawnPlayer()) {
            isWorldLoaded = true;
            isLoading = false;
            isGameActive = true; // Auto-start once loaded
            canvas.requestPointerLock();
            canvas.style.cursor = 'default';
            if (startBtn) {
                startBtn.innerText = "Resume Game";
                startBtn.disabled = false;
            }
            menu.style.display = 'none';
        }
        else {
            // Still loading... force chunk updates for 0,0
            updateChunks(gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0, 0, 0));
            // Maybe animate loading text?
        }
    }
    if (isGameActive && isWorldLoaded) {
        // Calculate player's chunk and update if needed
        // Done every 0.1s or so? Or every frame?
        // Every frame is safer for "infinite" but might be slow.
        // Optimization: Check dist moved.
        updateChunks(playerPosition); // Use PLAYER position for chunk loading, not camera!
        // Clamp dt to avoid physics explosions (e.g. max 0.1s)
        dt = Math.min(dt, 0.1);
        // FPS
        // FPS
        frames++;
        if (now - lastFpsTime >= 1000) {
            fpsDiv.innerText = `FPS: ${frames} | Instances: ${currentInstanceCount}`;
            frames = 0;
            lastFpsTime = now;
        }
        // Terrain Function for Spider
        const getTerrainHeight = (pos) => {
            const ix = Math.floor(pos[0]);
            const iz = Math.floor(pos[2]);
            // Check vertical column
            for (let y = Math.floor(pos[1] + 2); y >= Math.floor(pos[1] - 5); y--) {
                const cx = Math.floor(ix / CHUNK_SIZE);
                const cz = Math.floor(iz / CHUNK_SIZE);
                const chunk = chunks.get(`${cx},${cz}`);
                if (chunk) {
                    const lx = ix - cx * CHUNK_SIZE;
                    const lz = iz - cz * CHUNK_SIZE;
                    const idx = getGridIndex(lx, y, lz);
                    if (idx !== -1 && chunk.grid[idx] !== 0) {
                        return y;
                    }
                }
            }
            return null;
        };
        // Update Spider
        // If riding, pass keys. Else pass empty.
        const spiderInput = isRiding ? keys : {};
        spider.update(dt, spiderInput, getTerrainHeight);
        // Update Particles
        particleSystem.update(dt);
        // Update Pickups - Scan downward from item position for realistic gravity
        pickupSystem.update(dt, playerPosition, inventory, inventoryCounts, (pos) => {
            // Scan downward from item's current position to find ground
            const cx = Math.floor(pos[0] / CHUNK_SIZE);
            const cz = Math.floor(pos[2] / CHUNK_SIZE);
            const chunk = chunks.get(`${cx},${cz}`);
            if (!chunk)
                return null;
            const lx = Math.floor(pos[0] - cx * CHUNK_SIZE);
            const lz = Math.floor(pos[2] - cz * CHUNK_SIZE);
            // Scan DOWN from item's current Y position
            const startY = Math.floor(pos[1]);
            for (let y = startY; y >= -Y_OFFSET; y--) {
                const idx = getGridIndex(lx, y, lz);
                if (idx !== -1 && chunk.grid[idx] !== 0) {
                    return y; // Return Y of topmost solid block below item
                }
            }
            return null; // No ground found
        });
        // Update Active TNT
        for (let i = activeTNTs.length - 1; i >= 0; i--) {
            const tnt = activeTNTs[i];
            tnt.timer -= dt;
            // Pulse Scale
            const pulseSpeed = 10.0 + (3.0 - tnt.timer) * 5.0; // Faster as it gets closer
            const scaleAmt = 1.0 + Math.sin(performance.now() / 100 * pulseSpeed) * 0.1;
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.set(tnt.scale, scaleAmt, scaleAmt, scaleAmt);
            if (tnt.timer <= 0) {
                // EXPLODE
                activeTNTs.splice(i, 1);
                const px = Math.round(tnt.position[0]);
                const py = Math.round(tnt.position[1]);
                const pz = Math.round(tnt.position[2]);
                _logger__WEBPACK_IMPORTED_MODULE_9__.Logger.log('BOOM! (Particles)');
                // Spawn Particles
                particleSystem.emit(tnt.position, 100, gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(1, 0.5, 0, 1), 8.0); // Orange Fire
                particleSystem.emit(tnt.position, 50, gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(0.2, 0.2, 0.2, 1), 4.0); // Smoke
                const radius = 3;
                const minX = px - radius;
                const maxX = px + radius;
                const minY = py - radius;
                const maxY = py + radius;
                const minZ = pz - radius;
                const maxZ = pz + radius;
                // Helper to rebuild single chunk mesh
                const rebuildChunkMesh = (chunk, cx, cz) => {
                    chunk.visible = [];
                    for (let x = 0; x < CHUNK_SIZE; x++) {
                        for (let z = 0; z < CHUNK_SIZE; z++) {
                            const wx = cx * CHUNK_SIZE + x;
                            const wz = cz * CHUNK_SIZE + z;
                            // Fast scan
                            const minY = -Y_OFFSET;
                            const maxY = CHUNK_HEIGHT - Y_OFFSET - 1;
                            for (let y = minY; y <= maxY; y++) {
                                const idx = getGridIndex(x, y, z);
                                if (idx === -1)
                                    continue;
                                const type = chunk.grid[idx];
                                if (type === 0)
                                    continue;
                                let exposed = false;
                                const isSolid = (nx, ny, nz) => {
                                    const nIdx = getGridIndex(nx, ny, nz);
                                    if (nIdx === -1)
                                        return false;
                                    return chunk.grid[nIdx] !== 0;
                                };
                                if (!isSolid(x + 1, y, z))
                                    exposed = true;
                                else if (!isSolid(x - 1, y, z))
                                    exposed = true;
                                else if (!isSolid(x, y + 1, z))
                                    exposed = true;
                                else if (!isSolid(x, y - 1, z))
                                    exposed = true;
                                else if (!isSolid(x, y, z + 1))
                                    exposed = true;
                                else if (!isSolid(x, y, z - 1))
                                    exposed = true;
                                if (exposed) {
                                    chunk.visible.push({
                                        pos: new Float32Array([wx, y, wz]),
                                        type: type - 1
                                    });
                                }
                            }
                        }
                    }
                };
                const chunksToUpdate = new Set();
                for (let x = minX; x <= maxX; x++) {
                    for (let y = minY; y <= maxY; y++) {
                        for (let z = minZ; z <= maxZ; z++) {
                            const dx = x - px;
                            const dy = y - py;
                            const dz = z - pz;
                            if (dx * dx + dy * dy + dz * dz <= radius * radius) {
                                // Destroy
                                const tCx = Math.floor(x / CHUNK_SIZE);
                                const tCz = Math.floor(z / CHUNK_SIZE);
                                const tKey = `${tCx},${tCz}`;
                                const tChunk = chunks.get(tKey);
                                if (tChunk) {
                                    const tLx = x - tCx * CHUNK_SIZE;
                                    const tLz = z - tCz * CHUNK_SIZE;
                                    const tIdx = getGridIndex(tLx, y, tLz);
                                    if (tIdx !== -1) {
                                        tChunk.grid[tIdx] = 0; // Air
                                        chunksToUpdate.add(tKey);
                                    }
                                }
                            }
                        }
                    }
                }
                // Rebuild Chunks
                for (const cKey of chunksToUpdate) {
                    const [ccx, ccz] = cKey.split(',').map(Number);
                    rebuildChunkMesh(chunks.get(cKey), ccx, ccz);
                }
                rebuildWorld();
            }
        }
        if (isRiding) {
            // When riding spider: player position = spider position
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(playerPosition, spider.position);
            playerPosition[1] += 1.5; // Player sits on spider
            // 3rd Person Orbit Camera
            const camDist = cameraZoom;
            const horizontalDist = camDist * Math.cos(cameraPitch);
            const cx = playerPosition[0] - Math.sin(cameraYaw) * horizontalDist;
            const cz = playerPosition[2] - Math.cos(cameraYaw) * horizontalDist;
            const cy = playerPosition[1] - playerHeight + camDist * Math.sin(cameraPitch) + 2.0;
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.set(cameraPosition, cx, cy, cz);
        }
        // --- On-Foot Third Person Logic ---
        // isThirdPersonOnFoot is defined at top of frame
        if (!isRiding && isThirdPersonOnFoot) {
            // Orbit Camera
            const camDist = cameraZoom;
            // Calculate theoretical camera position
            const horizontalDist = camDist * Math.cos(cameraPitch);
            const cx = playerPosition[0] - Math.sin(cameraYaw) * horizontalDist;
            const cz = playerPosition[2] - Math.cos(cameraYaw) * horizontalDist;
            const cy = playerPosition[1] + eyeLevel + camDist * Math.sin(cameraPitch); // Pivot from eye level
            // Raycast for Camera Clipping (Anti-Clip)
            // Cast ray from Player Head -> Camera
            const headPos = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(playerPosition[0], playerPosition[1] + eyeLevel, playerPosition[2]);
            const camPos = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(cx, cy, cz);
            const camDir = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.subtract(camDir, camPos, headPos);
            const maxLen = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.length(camDir);
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.normalize(camDir, camDir);
            // Raycast check
            // We can reuse a simplified raycast or walk the ray
            let safeDist = maxLen;
            // Quick ray march
            const steps = 20;
            for (let i = 1; i <= steps; i++) {
                const d = (maxLen * i) / steps;
                const p = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
                gl_matrix__WEBPACK_IMPORTED_MODULE_1__.scaleAndAdd(p, headPos, camDir, d);
                // Check if inside solid block
                const ix = Math.floor(p[0]);
                const iy = Math.floor(p[1]);
                const iz = Math.floor(p[2]);
                const ccx = Math.floor(ix / CHUNK_SIZE);
                const ccz = Math.floor(iz / CHUNK_SIZE);
                const chunk = chunks.get(`${ccx},${ccz}`);
                if (chunk) {
                    const lx = ix - ccx * CHUNK_SIZE;
                    const lz = iz - ccz * CHUNK_SIZE;
                    const idx = getGridIndex(lx, iy, lz);
                    if (idx !== -1 && chunk.grid[idx] !== 0) {
                        // Hit!
                        safeDist = Math.max(0.5, d - 0.2); // Pull back slightly
                        break;
                    }
                }
            }
            // Set final camera pos
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.scaleAndAdd(cameraPosition, headPos, camDir, safeDist);
        }
        else if (!isRiding && !isThirdPersonOnFoot) {
            // 1st Person Camera (FPS)
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.set(cameraPosition, playerPosition[0], playerPosition[1] + eyeLevel, playerPosition[2]);
        }
        // Normal Physics (when not riding)
        if (!isRiding && keys['Space'] && isGrounded) {
            verticalVelocity = jumpForce;
            isGrounded = false;
        }
        // Physics & Collision Resolution
        // 1. Vertical Movement (Y)
        verticalVelocity -= gravity * dt;
        // Terminal velocity check? keeping it simple
        // Apply Y to PLAYER
        playerPosition[1] += verticalVelocity * dt;
        const hitY = checkCollision(playerPosition);
        if (hitY !== null) {
            // Detect if this is just the floor we are standing on
            // Block top is hitY + 1. If feet (pos[1]) are above that, it's floor.
            // FIX: Only treat as floor if it is reasonably close to feet (step height)
            // If it's way above feet, it's a ceiling or header, not a valid floor to snap to.
            // FIX: Step Height Limit to 0.6 prevents wall teleport (steppable)
            // But we need a separate "Landing" check for falling, which should be lenient.
            const distToTop = (hitY + 1.0) - playerPosition[1];
            // Stepping: Strict limit (climbing stairs/slabs)
            const isSteppable = (distToTop <= 0.6 && distToTop >= -0.1);
            // Landing: Lenient limit (falling from height)
            // If falling, we want to snap to ground even if we penetrated deep into it (due to speed).
            // But we don't want to snap to a "Ceiling" far above us.
            // If distToTop is positive (feet below top), we are inside/below the block top.
            // If distToTop is massive (e.g. 5.0), we are way deep? No, distToTop = Top - Feet.
            // If feet = 0, Top = 5. dist = 5. We are below it.
            // So for landing, basically anything where feet <= top.
            const isLandable = (distToTop > -0.1); // Allow slight hover (epsilon), but mainly just "am I below the top?"
            if (verticalVelocity < 0) {
                // Falling/Landing
                if (isLandable) {
                    playerPosition[1] = hitY + 1.0 + 0.01;
                    verticalVelocity = 0;
                    isGrounded = true;
                }
            }
            else {
                // Moving Up (Jumping)
                // Use strict Steppable check for interruptions? Or Ceiling check?
                // Ceiling Check: Only block if hitY is ABOVE player head
                const playerTop = playerPosition[1] + playerHeight;
                const hitBottom = hitY; // Bottom of block is hitY? No, hitY is "Top of block Y" or "Bottom"? 
                // checkCollision returns Y (integer coordinate).
                // Solid block occupies [y, y+1].
                // So hitY is the `y` index. Bottom is `y`. Top is `y+1`.
                // If we hit a block ABOVE us. Block Y > Player Y + Height.
                // Wait, checkCollision returns the highest block Y at that X,Z?
                // Yes, "Hit!" -> y.
                // If not steppable, treat as wall/ceiling depending on relative pos.
                if (!isSteppable) {
                    // Only stop if it's actually blocking us (Ceiling) OR if it's a Wall we can't step up.
                    // For Jumping: We want to slide UP walls.
                    // So we should ONLY stop if we hit a CEILING.
                    // A wall (side) is handled by X/Z collision. 
                    // Y Collision usually means "I am inside this block".
                    // If I am inside a block that is NOT steppable, and I am moving UP...
                    // It might be a header.
                    // If block Y > player head, it's a ceiling.
                    if (hitY > playerPosition[1] + 1.0) {
                        playerPosition[1] -= verticalVelocity * dt; // Push back
                        verticalVelocity = 0;
                    }
                    // Else: It's a wall we are sliding up? Ignore Y collision (allow slide).
                }
            }
        }
        else {
            isGrounded = false;
        }
        // Floor "death plane" fallback
        if (playerPosition[1] < -10) {
            playerPosition[0] = 0;
            playerPosition[1] = 5;
            playerPosition[2] = 5;
            verticalVelocity = 0;
        }
        // Camera Logic (for movement direction)
        const forward = getCameraForward();
        // Flatten forward for movement (so you don't fly up/down when looking up/down)
        const moveDirForward = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(forward[0], 0, forward[2]);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.normalize(moveDirForward, moveDirForward);
        const right = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.cross(right, forward, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0, 1, 0));
        const moveDirRight = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(right[0], 0, right[2]);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.normalize(moveDirRight, moveDirRight);
        // Calculate intended movement
        const moveVec = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
        const moveAmount = cameraSpeed * dt;
        if (keys['KeyW'])
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.scaleAndAdd(moveVec, moveVec, moveDirForward, moveAmount);
        if (keys['KeyS'])
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.scaleAndAdd(moveVec, moveVec, moveDirForward, -moveAmount);
        if (keys['KeyA'])
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.scaleAndAdd(moveVec, moveVec, moveDirRight, -moveAmount);
        if (keys['KeyD'])
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.scaleAndAdd(moveVec, moveVec, moveDirRight, moveAmount);
        // X Axis - move PLAYER
        playerPosition[0] += moveVec[0];
        const hitX = checkCollision(playerPosition);
        if (hitX !== null) {
            // Same logic: If it's just the floor, allow movement.
            // If it's a wall (higher than floor), block.
            if (hitX + 1.0 > playerPosition[1] + 0.05) {
                playerPosition[0] -= moveVec[0];
            }
        }
        // Z Axis - move PLAYER
        playerPosition[2] += moveVec[2];
        const hitZ = checkCollision(playerPosition);
        if (hitZ !== null) {
            if (hitZ + 1.0 > playerPosition[1] + 0.05) {
                playerPosition[2] -= moveVec[2];
            }
        }
    }
    // --- Camera Updates Completed ---
    // CRITICAL FIX: Raycast moved to END of frame, after camera position is final.
    // This ensures highlight exactly matches the crosshair for the current frame.
    currentHit = raycast();
    // Recalculate forward for rendering if needed, though viewMatrix uses targets.
    // Otherwise the selection lags 1 frame behind the crosshair during movement, feeling "off-centered".
    // Raycast was here (line 2141), moved to end of loop (line 2246)
    // currentHit = raycast();
    const forward = getCameraForward();
    const target = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
    // --- Target Calculation (For LookAt) ---
    // Camera Position is already set in the block above (with Anti-Clip / Orbit logic)
    // Here we just determine what the camera is LOOKING AT.
    if (isRiding) {
        // Look at spider center when riding
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(target, spider.position);
        target[1] += 1.5; // Look at spider center height
    }
    else if (isThirdPersonOnFoot) {
        // Look at Player Center (not head)
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(target, playerPosition);
        target[1] += 1.0;
    }
    else {
        // First Person: Look Forward from Camera Position
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.add(target, cameraPosition, forward);
    }
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.lookAt(viewMatrix, cameraPosition, target, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0, 1, 0));
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.multiply(viewProjectionMatrix, projectionMatrix, viewMatrix);
    // Update Uniforms
    // Structure: modelViewProjection (64), viewProjection (64)
    // We only strictly need viewProjection for the new shader, but let's just write offsets
    // Shader expects:
    // struct Uniforms {
    //     modelViewProjectionMatrix : mat4x4<f32>, (unused in vertex shader now, but kept for alignment/compat)
    //     viewProjectionMatrix : mat4x4<f32>,
    // }
    // --- Day/Night Cycle ---
    const cycleDuration = 120.0;
    // Check Settings
    let effectiveTime = now / 1000;
    if (chkLockTime && chkLockTime.checked) {
        effectiveTime = 60.0; // Noon (halfway through first cycle roughly?)
        // Or specific constant. Let's say cycle starts at 0 (dawn?). 
        // 120s total. 30s = Noon? 
        // Let's stick to logic below: sin(time / duration * PI * 2)
        // Noon is when sun is high. sin = 1. time = duration / 4 = 30s.
        effectiveTime = 30.0;
    }
    const time = effectiveTime; // Use effective time
    const angle = (time / cycleDuration) * Math.PI * 2;
    const timeOfDay = effectiveTime % cycleDuration;
    const cycleProgress = timeOfDay / cycleDuration;
    const sunAngle = cycleProgress * Math.PI * 2;
    const sunDir = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(Math.cos(sunAngle), Math.sin(sunAngle), 0.2);
    gl_matrix__WEBPACK_IMPORTED_MODULE_1__.normalize(sunDir, sunDir);
    const dayColor = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(1.0, 0.95, 0.9);
    const sunSetColor = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(1.0, 0.6, 0.3);
    const nightColor = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.1, 0.1, 0.3);
    const ambDay = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.3, 0.3, 0.4);
    const ambNight = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.05, 0.05, 0.1);
    // Variables (Hoisted)
    const currentSky = globalSky;
    const lightColor = globalLightColor;
    const ambientColor = globalAmbientColor;
    // Sky Constants
    const skyDay = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.5, 0.7, 1.0);
    const skyNight = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.05, 0.05, 0.1);
    const skySunset = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(1.0, 0.5, 0.2);
    if (sunDir[1] > 0.2) { // Full Day
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(currentSky, skyDay);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(lightColor, dayColor);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(ambientColor, ambDay);
    }
    else if (sunDir[1] < -0.2) { // Full Night
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(currentSky, skyNight);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(lightColor, nightColor);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(ambientColor, ambNight);
    }
    else {
        // Smooth Transition (-0.2 to 0.2)
        const t = (sunDir[1] + 0.2) / 0.4;
        // Ease in/out
        const tSmooth = t * t * (3 - 2 * t);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.lerp(currentSky, skyNight, skyDay, tSmooth);
        // Add sunset tint around 0.5
        const sunsetStr = 1.0 - Math.abs(tSmooth - 0.5) * 2;
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.lerp(currentSky, currentSky, skySunset, sunsetStr * 0.8);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.lerp(lightColor, nightColor, dayColor, tSmooth);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.lerp(ambientColor, ambNight, ambDay, tSmooth);
    }
    // Shadow Camera Logic
    // Follow player
    // Reuse globalLightViewMatrix
    const lightViewMatrix = globalLightViewMatrix;
    const shadowDist = 50;
    const lightCamPos = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(cameraPosition[0] + sunDir[0] * shadowDist, cameraPosition[1] + sunDir[1] * shadowDist, cameraPosition[2] + sunDir[2] * shadowDist);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.lookAt(lightViewMatrix, lightCamPos, cameraPosition, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0, 1, 0));
    const lightProjectionMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
    const orthoSize = 60;
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.ortho(lightProjectionMatrix, -orthoSize, orthoSize, -orthoSize, orthoSize, 1.0, 200);
    const lightViewProjectionMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.multiply(lightViewProjectionMatrix, lightProjectionMatrix, lightViewMatrix);
    // Update Uniforms
    const uniformData = new Float32Array(uniformBufferSize / 4);
    // 0-15: MVP (Unused)
    // 16-31: Cam ViewProj
    uniformData.set(viewProjectionMatrix, 16);
    // 32-47: Light ViewProj
    uniformData.set(lightViewProjectionMatrix, 32);
    // 48-51: Light Dir (xyz, pad)
    uniformData.set([sunDir[0], sunDir[1], sunDir[2], 0], 48);
    // 52-55: Light Color
    uniformData.set([lightColor[0], lightColor[1], lightColor[2], 1.0], 52);
    // 56-59: Ambient Color
    uniformData.set([ambientColor[0], ambientColor[1], ambientColor[2], 1.0], 56);
    // 60-63: Sky Color (for fog)
    uniformData.set([currentSky[0], currentSky[1], currentSky[2], 1.0], 60);
    // 64-67: Camera Position
    uniformData.set([cameraPosition[0], cameraPosition[1], cameraPosition[2], 1.0], 64);
    // 68-71: numTorches (u32) + padding (vec3<u32>)
    const nearestTorches = getNearestTorches(playerPosition, MAX_TORCH_LIGHTS);
    uniformData.set([nearestTorches.length, 0, 0, 0], 68); // numTorches + padding
    // 72+: Torch positions (16 * vec4<f32> = 64 floats)
    for (let i = 0; i < MAX_TORCH_LIGHTS; i++) {
        const offset = 72 + (i * 4);
        if (i < nearestTorches.length) {
            const torch = nearestTorches[i];
            uniformData.set([torch[0], torch[1], torch[2], 1.0], offset);
        }
        else {
            uniformData.set([0, 0, 0, 0], offset); // Empty slot
        }
    }
    device.queue.writeBuffer(uniformBuffer, 0, uniformData);
    // Culling Update Trigger
    // Rebuild world if camera moved/rotated significantly?
    // Using internal throttle of 4 blocks distance or 0.1 rad rotation.
    rebuildWorld(false);
    // Draw Sky Sprites (Sun/Moon)
    const skyDist = 80.0;
    const sunPos = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
    gl_matrix__WEBPACK_IMPORTED_MODULE_1__.scale(sunPos, sunDir, skyDist);
    gl_matrix__WEBPACK_IMPORTED_MODULE_1__.add(sunPos, sunPos, cameraPosition);
    const moonPos = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
    gl_matrix__WEBPACK_IMPORTED_MODULE_1__.scale(moonPos, sunDir, -skyDist); // Opposite to sun
    gl_matrix__WEBPACK_IMPORTED_MODULE_1__.add(moonPos, moonPos, cameraPosition);
    const commandEncoder = device.createCommandEncoder();
    // 1. Shadow Pass
    if (!chkShadows || chkShadows.checked) {
        const shadowPass = commandEncoder.beginRenderPass({
            colorAttachments: [],
            depthStencilAttachment: {
                view: shadowDepthTexture.createView(),
                depthClearValue: 1.0,
                depthLoadOp: 'clear',
                depthStoreOp: 'store',
            }
        });
        shadowPass.setPipeline(shadowPipeline);
        shadowPass.setBindGroup(0, shadowBindGroupReal);
        shadowPass.setVertexBuffer(0, vertexBuffer);
        shadowPass.setVertexBuffer(1, instanceBuffer);
        shadowPass.draw(36, Math.min(currentInstanceCount, maxInstances));
        shadowPass.end();
    }
    // 2. Main Pass
    const textureView = context?.getCurrentTexture().createView();
    const renderPassDescriptor = {
        colorAttachments: [{
                view: textureView,
                // clearValue: { r: 1.0, g: 0.0, b: 1.0, a: 1.0 },
                clearValue: { r: currentSky[0], g: currentSky[1], b: currentSky[2], a: 1.0 },
                loadOp: 'clear', storeOp: 'store',
            }],
        depthStencilAttachment: {
            view: depthTexture.createView(),
            depthClearValue: 1.0, depthLoadOp: 'clear', depthStoreOp: 'store',
        }
    };
    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    // Draw World (Terrain)
    passEncoder.setPipeline(pipeline);
    passEncoder.setBindGroup(0, bindGroup);
    passEncoder.setVertexBuffer(0, vertexBuffer);
    passEncoder.setVertexBuffer(1, instanceBuffer);
    passEncoder.draw(36, Math.min(currentInstanceCount, maxInstances));
    // Draw Outline - REMOVED (Duplicate pass, causing visual glitches)
    // We use the Highight Box logic below instead.
    // Draw Entities (Sun/Moon/Spider/Particles/TNT)
    const qId = [0, 0, 0, 1];
    simpleRenderer.startFrame(passEncoder, viewProjectionMatrix);
    // Sun & Moon
    simpleRenderer.drawCube(device, passEncoder, sunPos, qId, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(5, 5, 5), gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(1, 1, 0, 1));
    simpleRenderer.drawCube(device, passEncoder, moonPos, qId, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(4, 4, 4), gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(0.9, 0.9, 1, 1));
    // Spider
    spider.draw(device, passEncoder, simpleRenderer, isRiding);
    // Player Model
    if (isRiding || isThirdPersonOnFoot) {
        // Draw Player
        if (isRiding) {
            // Constant snap to spider back
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(playerPosition, spider.position);
            playerPosition[1] += 0.8; // Sit on back (Lowered from 1.8)
        }
        // Logic fix: When riding, FORCE isMoving to false to stop walking animation
        const isWalkingInput = (keys['KeyW'] || keys['KeyS'] || keys['KeyA'] || keys['KeyD']);
        const shouldAnimateWalk = isRiding ? false : isWalkingInput;
        playerModel.draw(device, passEncoder, simpleRenderer, playerPosition, cameraYaw, cameraPitch, shouldAnimateWalk, performance.now() / 1000, isRiding);
    }
    // Particles
    particleSystem.draw(device, passEncoder, simpleRenderer);
    // TNT
    const whiteColor = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(10, 10, 10, 1);
    const tntColor = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(1, 1, 1, 1);
    for (let tnt of activeTNTs) {
        const flash = Math.sin(performance.now() / 50 * (4.0 - tnt.timer)) > 0.5;
        simpleRenderer.drawCube(device, passEncoder, tnt.position, qId, tnt.scale, flash ? whiteColor : tntColor);
    }
    // Draw Pickups
    pickupSystem.draw(device, passEncoder, simpleRenderer);
    // Highlight Box (Outline) - using SimpleRenderer as transparent black box
    if (currentHit) {
        // Slightly larger than block to prevent Z-fighting
        const scale = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(1.01, 1.01, 1.01);
        const pos = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.clone(currentHit.point); // This is usually the center if raycast returns center? 
        // Wait, Raycast.point is the INTERSECTION point or BLOCK center?
        // Raycast usually returns Hit Point. 
        // We need the BLOCK center for the box.
        // currentHit logic in `raycast` usually returns `point` as intersection, but we need the block coordinate.
        // Let's assume for now we need to round `point`? 
        // Checking raycast usage: `const px = Math.round(currentHit.point[0])`.
        // Actually, let's look at `raycast` logic later if needed. 
        // For now, let's assume `currentHit.point` IS the hit point, which might be on the face.
        // We want the block cube center.
        // If `currentHit.point` is the face-hit, we need to floor/round to get block center?
        // Usually raycast returns { point, normal, ... }.
        // Let's check how the old outline worked: `outlineData.set(currentHit.point)`.
        // The shader probably expanded it? 
        // Let's assume `currentHit.point` is the block center for now, or use the `empty` property neighbor?
        // Let's just use `currentHit.point` but assume it needs to be block-aligned?
        // Actually, raycasting usually populates `currentHit` with the `point` of intersection.
        // To highlight the block, we need `floor(point - normal * 0.01) + 0.5`.
        // Let's just try using the point for now.
        // Use a black semi-transparent box
        const outlineColor = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(0, 0, 0, 0.5);
        // We need to snap to block center.
        // Based on `checkCollision`, blocks are at integer coords.
        // So center is `floor(x)+0.5`.
        // Let's snap it.
        // But `currentHit.point` might be the specific HIT point.
        // The text earlier said `const px = Math.round(currentHit.point[0])`.
        // If we want to highlight the block *containing* the hit (or the block *hit*):
        // Typically: blockPos = floor(hitPos - normal * epsilon).
        // Let's approximate by `Math.round` but 0.5 offset?
        // Standard Minecraft blocks are centered at X.5, Y.5, Z.5? Or X.0?
        // My `makeCube` vertices are 0..1 range. Centered optionally?
        // `cubeVertices` (lines 147+) are 0..1. 
        // So block at integer `(x,y,z)` occupies `[x, x+1]`. Center is `x+0.5`.
        // SimpleRenderer draws centered cubes?
        // `SimpleRenderer` vertices: `-0.5` to `0.5` (Lines 70+ in renderer.ts).
        // So yes, it draws centered at `position`.
        // So we need to pass `floor(hit) + 0.5`.
        const bx = currentHit.point[0] + 0.5;
        const by = currentHit.point[1] + 0.5;
        const bz = currentHit.point[2] + 0.5;
        const boxPos = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(bx, by, bz);
        simpleRenderer.drawCube(device, passEncoder, boxPos, qId, scale, outlineColor);
    }
    passEncoder.end();
    device.queue.submit([commandEncoder.finish()]);
    requestAnimationFrame(frame);
}
// Update Crosshair to a DOT
crosshair.innerHTML = `
<div style="position:absolute; left:8px; top:8px; width:4px; height:4px; background:rgba(255,255,255,1.0); border-radius:50%; box-shadow: 0 0 2px #000;"></div>
`;
frame();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ },

/***/ "./src/noise.ts"
/*!**********************!*\
  !*** ./src/noise.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fbm: () => (/* binding */ fbm),
/* harmony export */   frac: () => (/* binding */ frac),
/* harmony export */   hash: () => (/* binding */ hash),
/* harmony export */   mix: () => (/* binding */ mix),
/* harmony export */   noise: () => (/* binding */ noise)
/* harmony export */ });
// Simple 2D Noise Implementation
// Based on a simple value noise or perlin approximation
function frac(x) { return x - Math.floor(x); }
function mix(a, b, t) { return a + (b - a) * t; }
// Hash function
function hash(x, y) {
    let a = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    return a - Math.floor(a);
}
// 2D Noise
function noise(x, y) {
    const ix = Math.floor(x);
    const iy = Math.floor(y);
    const fx = frac(x);
    const fy = frac(y);
    // Smoothstep interpolation
    const tx = fx * fx * (3.0 - 2.0 * fx);
    const ty = fy * fy * (3.0 - 2.0 * fy);
    const a = hash(ix, iy);
    const b = hash(ix + 1, iy);
    const c = hash(ix, iy + 1);
    const d = hash(ix + 1, iy + 1);
    return mix(mix(a, b, tx), mix(c, d, tx), ty);
}
// FBM (Fractal Brownian Motion) for better terrain
function fbm(x, y, octaves) {
    let value = 0;
    let amplitude = 0.5;
    let frequency = 1.0;
    for (let i = 0; i < octaves; i++) {
        value += noise(x * frequency, y * frequency) * amplitude;
        amplitude *= 0.5;
        frequency *= 2.0;
    }
    return value;
}


/***/ },

/***/ "./src/particles.ts"
/*!**************************!*\
  !*** ./src/particles.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParticleSystem: () => (/* binding */ ParticleSystem)
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec4.js");

class Particle {
    position = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
    velocity = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
    color = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
    life = 0;
    maxLife = 0;
    size = 0.2;
    active = false;
}
class ParticleSystem {
    particles = [];
    maxParticles = 1000;
    constructor() {
        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push(new Particle());
        }
    }
    emit(pos, count, colorBase, speed = 5.0) {
        let spawned = 0;
        for (let p of this.particles) {
            if (!p.active) {
                p.active = true;
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__.copy(p.position, pos);
                // Random Velocity
                const rx = (Math.random() - 0.5) * 2;
                const ry = (Math.random() - 0.5) * 2;
                const rz = (Math.random() - 0.5) * 2;
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__.set(p.velocity, rx, ry, rz);
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__.normalize(p.velocity, p.velocity);
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__.scale(p.velocity, p.velocity, Math.random() * speed);
                // Color variation
                gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(p.color, colorBase);
                p.color[0] += (Math.random() - 0.5) * 0.1;
                p.color[1] += (Math.random() - 0.5) * 0.1;
                p.color[2] += (Math.random() - 0.5) * 0.1;
                p.maxLife = 1.0 + Math.random();
                p.life = p.maxLife;
                p.size = 0.1 + Math.random() * 0.2;
                spawned++;
                if (spawned >= count)
                    break;
            }
        }
    }
    update(dt) {
        for (let p of this.particles) {
            if (p.active) {
                p.life -= dt;
                if (p.life <= 0) {
                    p.active = false;
                    continue;
                }
                // Gravity
                p.velocity[1] -= 9.8 * dt;
                // Move
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__.scaleAndAdd(p.position, p.position, p.velocity, dt);
                // Floor check (simple)
                // if(p.position[1] < -60) p.active = false;
            }
        }
    }
    draw(device, passEncoder, renderer) {
        // Use a temp quat for no rotation
        const q = [0, 0, 0, 1]; // quat.create()
        const s = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
        for (let p of this.particles) {
            if (p.active) {
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__.set(s, p.size, p.size, p.size);
                // Alpha fade
                p.color[3] = p.life / p.maxLife;
                renderer.drawCube(device, passEncoder, p.position, q, s, p.color);
            }
        }
    }
}


/***/ },

/***/ "./src/pickups.ts"
/*!************************!*\
  !*** ./src/pickups.ts ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PickupSystem: () => (/* binding */ PickupSystem)
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec4.js");

class PickupSystem {
    pickups = [];
    // Physics Config
    gravity = 20.0;
    bounceY = 0.5;
    collectionRadius = 1.5;
    spawn(position, type) {
        // Random velocity spread
        const vel = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues((Math.random() - 0.5) * 4.0, 4.0 + Math.random() * 2.0, // Upward pop
        (Math.random() - 0.5) * 4.0);
        this.pickups.push({
            position: gl_matrix__WEBPACK_IMPORTED_MODULE_0__.clone(position),
            velocity: vel,
            type: type,
            rotation: gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(Math.random() * Math.PI, Math.random() * Math.PI, 0),
            timer: 0
        });
    }
    update(dt, playerPos, inventory, inventoryCounts, getTerrainHeight) {
        // Reverse loop for removal
        for (let i = this.pickups.length - 1; i >= 0; i--) {
            const p = this.pickups[i];
            // 1. Physics
            p.velocity[1] -= this.gravity * dt;
            // Move
            gl_matrix__WEBPACK_IMPORTED_MODULE_0__.scaleAndAdd(p.position, p.position, p.velocity, dt);
            // Friction/Damping
            p.velocity[0] *= 0.95;
            p.velocity[2] *= 0.95;
            // Rotation
            p.rotation[1] += 2.0 * dt;
            // Collision with Ground
            // groundY returns the Y coordinate of the topmost solid block
            // The top surface is at groundY + 1.0
            const groundY = getTerrainHeight(p.position);
            if (groundY !== null) {
                const surfaceY = groundY + 1.0;
                if (p.position[1] < surfaceY + 0.125) { // 0.125 = half of pickup size (0.25)
                    p.position[1] = surfaceY + 0.125;
                    p.velocity[1] *= -0.5; // Bounce
                    if (Math.abs(p.velocity[1]) < 1.0)
                        p.velocity[1] = 0;
                }
            }
            // 2. Collection
            const dist = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.distance(p.position, playerPos);
            // Magnet effect if close
            if (dist < 5.0) {
                const dir = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__.subtract(dir, playerPos, p.position);
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__.normalize(dir, dir);
                const magnetStrength = (5.0 - dist) * 10.0;
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__.scaleAndAdd(p.velocity, p.velocity, dir, magnetStrength * dt);
            }
            if (dist < this.collectionRadius) {
                // Collect!
                this.addToInventory(p.type, inventory, inventoryCounts);
                this.pickups.splice(i, 1);
            }
        }
    }
    addToInventory(type, inventory, counts) {
        // 1. Check for existing stack
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i] === type && counts[i] < 64) {
                counts[i]++;
                return;
            }
        }
        // 2. Empty slot
        for (let i = 0; i < inventory.length; i++) {
            if (counts[i] === 0) {
                inventory[i] = type;
                counts[i] = 1;
                return;
            }
        }
        // Full? discard.
    }
    draw(device, passEncoder, renderer) {
        const scale = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromValues(0.25, 0.25, 0.25);
        for (const p of this.pickups) {
            let color = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.5, 0.5, 0.5, 1);
            // Match exact block textures from 3D world
            if (p.type === 0)
                color = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.53, 0.53, 0.53, 1); // Stone (cobblestone gray)
            else if (p.type === 1)
                color = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.55, 0.35, 0.25, 1); // Dirt (brown)
            else if (p.type === 2)
                color = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.45, 0.7, 0.3, 1); // Grass (bright green)
            else if (p.type === 4)
                color = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.9, 0.15, 0.15, 1); // TNT (bright red)
            else if (p.type === 5)
                color = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(1.0, 0.65, 0.0, 1); // Torch (bright orange)
            renderer.drawCubeEuler(device, passEncoder, p.position, p.rotation, scale, color);
        }
    }
}


/***/ },

/***/ "./src/player.ts"
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerModel: () => (/* binding */ PlayerModel)
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/quat.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec4.js");

class PlayerModel {
    // Body Parts (Relative to player origin)
    // Simple Steve:
    // Head: 8x8x8
    // Body: 8x12x4
    // Arms: 4x12x4
    // Legs: 4x12x4
    // Using simple boxes. 
    // Scale factor: 1 unit = 1 meter approx. 
    // Player height ~1.8m. 
    // Head ~0.25m, Body ~0.75m, Legs ~0.75m.
    draw(device, passEncoder, renderer, position, yaw, pitch, isMoving, time, isRiding = false) {
        // Colors
        const skinColor = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(0.9, 0.7, 0.6, 1.0);
        const shirtColor = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(0.2, 0.6, 0.8, 1.0); // Cyan shirt
        const pantsColor = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(0.2, 0.2, 0.6, 1.0); // Blue pants
        const qId = [0, 0, 0, 1]; // Identity Quaternion (we'll do rotations manually via positions/matrices if needed, or just pass qId if we pre-calc world pos)
        // Helper to transform local part to world
        // But SimpleRenderer takes world Position and Scale. Rotation is limited (AABB).
        // Wait, SimpleRenderer `drawCube` takes `position`, `rotation` (quat), `scale`.
        // So we can rotate parts!
        // Player Quaternion (Yaw)
        const qPlayer = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromEuler(qPlayer, 0, yaw * (180 / Math.PI), 0); // yaw in radians to degrees? gl-matrix uses degrees? 
        // Wait, gl-matrix fromEuler usually takes degrees. `yaw` is radians in main.ts? 
        // In main.ts: `cameraYaw += e.movementX * mouseSensitivity;`. It's radians.
        // So convert to degrees.
        // Actually, let's check SimpleRenderer. It takes a stored rotation?
        // Renderer signature: `drawCube(device, passEncoder, pos, rot, scale, color)`
        // `rot` is a quaternion.
        // Animation
        const walkSpeed = 10.0;
        const swing = isMoving ? Math.sin(time * walkSpeed) * 0.5 : 0;
        // --- HEAD ---
        // 0.25 size
        const headPosLocal = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0, 1.5, 0); // 1.5m off ground
        const headPosWorld = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.transformQuat(headPosWorld, headPosLocal, qPlayer);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.add(headPosWorld, headPosWorld, position);
        // Head Rotation (Yaw + Pitch)
        const qHead = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromEuler(qHead, pitch * (180 / Math.PI), yaw * (180 / Math.PI), 0);
        // Pitch is X, Yaw is Y.
        renderer.drawCube(device, passEncoder, headPosWorld, qHead, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.5, 0.5, 0.5), skinColor);
        // --- BODY ---
        const bodyPosLocal = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0, 0.9, 0);
        const bodyPosWorld = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.transformQuat(bodyPosWorld, bodyPosLocal, qPlayer);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.add(bodyPosWorld, bodyPosWorld, position);
        renderer.drawCube(device, passEncoder, bodyPosWorld, qPlayer, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.5, 0.7, 0.25), shirtColor);
        // --- RIGHT ARM ---
        const rArmLoc = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.5, 0.9, 0);
        const rArmWorld = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
        // Swing
        const qRArm = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromEuler(qRArm, swing * (180 / Math.PI), yaw * (180 / Math.PI), 0);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.transformQuat(rArmWorld, rArmLoc, qPlayer); // Start at shoulder
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.add(rArmWorld, rArmWorld, position);
        renderer.drawCube(device, passEncoder, rArmWorld, qRArm, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.2, 0.7, 0.2), skinColor);
        // --- LEFT ARM ---
        const lArmLoc = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(-0.5, 0.9, 0);
        const lArmWorld = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
        const qLArm = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromEuler(qLArm, -swing * (180 / Math.PI), yaw * (180 / Math.PI), 0); // Opposite swing
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.transformQuat(lArmWorld, lArmLoc, qPlayer);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.add(lArmWorld, lArmWorld, position);
        renderer.drawCube(device, passEncoder, lArmWorld, qLArm, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.2, 0.7, 0.2), skinColor);
        if (isRiding) {
            // Sitting Pose
            // Rotate legs forward 80 degrees
            // Pitch is X.
            // But we also need to respect Yaw (Player Rotation).
            // So we want: Rotate by Yaw First (Y), then Pitch (X).
            // gl-matrix fromEuler order is usually X, Y, Z or Z, Y, X. Defaults to ZYX usually?
            // Let's manually construct:
            // Leg should be forward relative to body.
            // Right Leg
            const rLegLoc = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.15, 0.5, 0.4); // Higher and forward
            const rLegWorld = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
            // Sitting rotation: -80 deg X (local)
            const qSit = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
            gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromEuler(qSit, -80, 0, 0);
            const qLegFinal = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
            gl_matrix__WEBPACK_IMPORTED_MODULE_0__.multiply(qLegFinal, qPlayer, qSit); // Apply Player Yaw, then Sit Pitch
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.transformQuat(rLegWorld, rLegLoc, qPlayer);
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.add(rLegWorld, rLegWorld, position);
            renderer.drawCube(device, passEncoder, rLegWorld, qLegFinal, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.2, 0.6, 0.2), pantsColor);
            // Left Leg
            const lLegLoc = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(-0.15, 0.5, 0.4);
            const lLegWorld = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.transformQuat(lLegWorld, lLegLoc, qPlayer);
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.add(lLegWorld, lLegWorld, position);
            renderer.drawCube(device, passEncoder, lLegWorld, qLegFinal, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.2, 0.6, 0.2), pantsColor);
        }
        else {
            // Walking / Standing Pose (Existing)
            // --- RIGHT LEG ---
            const rLegLoc = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.15, 0.3, 0); // Center of leg
            const rLegWorld = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
            const qRLeg = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
            gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromEuler(qRLeg, -swing * (180 / Math.PI), yaw * (180 / Math.PI), 0); // Opposite to Right Arm
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.transformQuat(rLegWorld, rLegLoc, qPlayer);
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.add(rLegWorld, rLegWorld, position);
            renderer.drawCube(device, passEncoder, rLegWorld, qRLeg, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.2, 0.6, 0.2), pantsColor);
            // --- LEFT LEG ---
            const lLegLoc = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(-0.15, 0.3, 0);
            const lLegWorld = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
            const qLLeg = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
            gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromEuler(qLLeg, swing * (180 / Math.PI), yaw * (180 / Math.PI), 0);
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.transformQuat(lLegWorld, lLegLoc, qPlayer);
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.add(lLegWorld, lLegWorld, position);
            renderer.drawCube(device, passEncoder, lLegWorld, qLLeg, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.2, 0.6, 0.2), pantsColor);
        }
    }
}


/***/ },

/***/ "./src/renderer.ts"
/*!*************************!*\
  !*** ./src/renderer.ts ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleRenderer: () => (/* binding */ SimpleRenderer)
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/quat.js");
/* harmony import */ var _shaders_wgsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders.wgsl */ "./src/shaders.wgsl");

// @ts-ignore

class SimpleRenderer {
    device;
    pipeline;
    vertexBuffer;
    uniformBuffer;
    bindGroup;
    // Temp matrices to avoid GC
    modelMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
    viewProjectionMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
    // Temp Float32Array to avoid GC
    uniformData = new Float32Array(36); // 16 + 16 + 4
    tempQuat = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
    currentOffset = 0;
    maxDraws = 256;
    uniformStride = 256;
    constructor(device, format) {
        this.device = device;
        // 1. Explicit Bind Group Layout (Required for Dynamic Offsets)
        const bindGroupLayout = device.createBindGroupLayout({
            entries: [{
                    binding: 0,
                    visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
                    buffer: {
                        type: 'uniform',
                        hasDynamicOffset: true,
                        minBindingSize: 256
                    }
                }]
        });
        // 2. Pipeline
        this.pipeline = device.createRenderPipeline({
            layout: device.createPipelineLayout({
                bindGroupLayouts: [bindGroupLayout]
            }),
            vertex: {
                module: device.createShaderModule({ code: _shaders_wgsl__WEBPACK_IMPORTED_MODULE_2__ }),
                entryPoint: 'entity_vs',
                buffers: [{
                        arrayStride: 12, // vec3 pos
                        attributes: [{ shaderLocation: 0, offset: 0, format: 'float32x3' }]
                    }]
            },
            fragment: {
                module: device.createShaderModule({ code: _shaders_wgsl__WEBPACK_IMPORTED_MODULE_2__ }),
                entryPoint: 'entity_fs',
                targets: [{
                        format: format,
                        blend: {
                            color: { srcFactor: 'src-alpha', dstFactor: 'one-minus-src-alpha', operation: 'add' },
                            alpha: { srcFactor: 'one', dstFactor: 'one-minus-src-alpha', operation: 'add' }
                        }
                    }]
            },
            primitive: { topology: 'triangle-list', cullMode: 'back' },
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: 'less',
                format: 'depth24plus',
            }
        });
        // 3. Vertex Buffer
        const vertices = new Float32Array([
            // Front
            -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5,
            -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5,
            // Back
            -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5,
            -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
            // Top
            -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
            -0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5,
            // Bottom
            -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
            -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5,
            // Right
            0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
            0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5,
            // Left
            -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
            -0.5, -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5,
        ]);
        this.vertexBuffer = device.createBuffer({
            size: vertices.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
        });
        device.queue.writeBuffer(this.vertexBuffer, 0, vertices);
        // 4. Uniform Buffer (Large)
        // 256 bytes per entity * 256 entities max = 64KB
        this.uniformBuffer = device.createBuffer({
            size: this.uniformStride * this.maxDraws,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });
        // 5. BindGroup (Window: 256 bytes)
        this.bindGroup = device.createBindGroup({
            layout: bindGroupLayout,
            entries: [{
                    binding: 0,
                    resource: {
                        buffer: this.uniformBuffer,
                        offset: 0,
                        size: 256 // The size of ONE window
                    }
                }]
        });
    }
    startFrame(passEncoder, viewProjectionMatrix) {
        passEncoder.setPipeline(this.pipeline);
        passEncoder.setVertexBuffer(0, this.vertexBuffer);
        // Cache VP
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.copy(this.viewProjectionMatrix, viewProjectionMatrix);
        // Reset Offset
        this.currentOffset = 0;
    }
    drawCube(device, passEncoder, position, rotation, scale, color) {
        if (this.currentOffset >= this.maxDraws) {
            console.warn("Max entity draws exceeded");
            return;
        }
        // Update Uniforms
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromRotationTranslationScale(this.modelMatrix, rotation, position, scale);
        // Reuse persistent Float32Array
        this.uniformData.set(this.viewProjectionMatrix, 0);
        this.uniformData.set(this.modelMatrix, 16);
        this.uniformData.set(color, 32);
        // Write to current slot
        const byteOffset = this.currentOffset * this.uniformStride;
        device.queue.writeBuffer(this.uniformBuffer, byteOffset, this.uniformData);
        // Bind with Dynamic Offset
        passEncoder.setBindGroup(0, this.bindGroup, [byteOffset]);
        passEncoder.draw(36, 1);
        this.currentOffset++;
    }
    // Helper for simple Euler rotation
    drawCubeEuler(device, passEncoder, position, rotEuler, scale, color) {
        // Reuse tempQuat
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromEuler(this.tempQuat, rotEuler[0] * 180 / Math.PI, rotEuler[1] * 180 / Math.PI, rotEuler[2] * 180 / Math.PI);
        this.drawCube(device, passEncoder, position, this.tempQuat, scale, color);
    }
}


/***/ },

/***/ "./src/shaders.wgsl"
/*!**************************!*\
  !*** ./src/shaders.wgsl ***!
  \**************************/
(module) {

module.exports = "struct Uniforms {\r\n    modelViewProjectionMatrix : mat4x4<f32>,\r\n    viewProjectionMatrix : mat4x4<f32>,\r\n    lightViewProjectionMatrix : mat4x4<f32>, \r\n    lightDir : vec4<f32>,\r\n    lightColor : vec4<f32>,\r\n    ambientColor : vec4<f32>,\r\n    skyColor : vec4<f32>,\r\n    cameraPosition : vec4<f32>,\r\n    numTorches : u32,\r\n    _padding : vec3<u32>, // Padding for alignment\r\n    torchPositions : array<vec4<f32>, 16>, // Max 16 torches\r\n}\r\n\r\n@group(0) @binding(0) var<uniform> uniforms : Uniforms;\r\n@group(0) @binding(1) var mySampler: sampler;\r\n@group(0) @binding(2) var myTexture: texture_2d_array<f32>;\r\n@group(0) @binding(3) var shadowSampler: sampler_comparison; \r\n@group(0) @binding(4) var shadowMap: texture_depth_2d;\r\n\r\nstruct VertexInput {\r\n    @location(0) position : vec3<f32>,\r\n    @location(1) uv : vec2<f32>,\r\n    @location(2) normal : vec3<f32>, \r\n}\r\n\r\nstruct InstanceInput {\r\n    @location(3) instancePosition : vec3<f32>,\r\n    @location(4) textureIndex : f32, \r\n}\r\n\r\nstruct VertexOutput {\r\n    @builtin(position) Position : vec4<f32>,\r\n    @location(0) uv : vec2<f32>,\r\n    @location(1) @interpolate(flat) textureIndex : u32,\r\n    @location(2) shadowPos : vec3<f32>,\r\n    @location(3) normal : vec3<f32>, \r\n    @location(4) worldPos : vec3<f32>,\r\n}\r\n\r\n@vertex\r\nfn main_vs(input : VertexInput, instance : InstanceInput) -> VertexOutput {\r\n    var output : VertexOutput;\r\n    let worldPosition = input.position + instance.instancePosition;\r\n    output.Position = uniforms.viewProjectionMatrix * vec4<f32>(worldPosition, 1.0);\r\n    output.uv = input.uv;\r\n    output.textureIndex = u32(instance.textureIndex);\r\n    \r\n    // Shadow Coord\r\n    let posFromLight = uniforms.lightViewProjectionMatrix * vec4<f32>(worldPosition, 1.0);\r\n    output.shadowPos = posFromLight.xyz / posFromLight.w;\r\n    \r\n    // Pass precise normal\r\n    output.normal = input.normal; \r\n    \r\n    // Pass world position for fog\r\n    output.worldPos = worldPosition;\r\n    \r\n    return output;\r\n}\r\n\r\n@fragment\r\nfn main_fs(input: VertexOutput) -> @location(0) vec4<f32> {\r\n    // Grass Top Logic\r\n    var finalIndex = input.textureIndex;\r\n    if (finalIndex == 2u && input.normal.y > 0.9) {\r\n        finalIndex = 3u;\r\n    }\r\n\r\n    let texColor = textureSample(myTexture, mySampler, input.uv, finalIndex);\r\n    \r\n    // Shadow Calculation (must stay in uniform control flow)\r\n    let shadowUV = vec2<f32>(\r\n        input.shadowPos.x * 0.5 + 0.5,\r\n        -input.shadowPos.y * 0.5 + 0.5\r\n    );\r\n    \r\n    // Bias to prevent acne\r\n    let currentDepth = input.shadowPos.z - 0.003;\r\n    \r\n    let shadowSample = textureSampleCompare(shadowMap, shadowSampler, shadowUV, currentDepth);\r\n    \r\n    var visibility = 1.0;\r\n    if (shadowUV.x >= 0.0 && shadowUV.x <= 1.0 && shadowUV.y >= 0.0 && shadowUV.y <= 1.0 && input.shadowPos.z >= 0.0 && input.shadowPos.z <= 1.0) {\r\n        visibility = shadowSample;\r\n    }\r\n    \r\n    // Dynamic Lighting\r\n    let lightDir = normalize(uniforms.lightDir.xyz);\r\n    let N = normalize(input.normal);\r\n    let diff = max(dot(N, lightDir), 0.0);\r\n    \r\n    // Combine Ambient + Diffuse * Shadow * LightColor\r\n    let ambient = uniforms.ambientColor.rgb;\r\n    let diffuse = uniforms.lightColor.rgb * diff * visibility;\r\n    \r\n    let lighting = ambient + diffuse;\r\n    \r\n    // Torch Point Lights\r\n    var torchLight = vec3<f32>(0.0, 0.0, 0.0);\r\n    for (var i = 0u; i < uniforms.numTorches; i++) {\r\n        let torchPos = uniforms.torchPositions[i].xyz;\r\n        let toLight = torchPos - input.worldPos;\r\n        let dist = length(toLight);\r\n        \r\n        // Attenuation (light fades with distance)\r\n        let maxDist = 12.0; // Torch light radius\r\n        if (dist < maxDist) {\r\n            var attenuation = 1.0 - (dist / maxDist);\r\n            attenuation = attenuation * attenuation; // Squared falloff for more realistic drop-off\r\n            \r\n            let torchColor = vec3<f32>(1.0, 0.7, 0.4); // Warm orange torch light\r\n            torchLight += torchColor * attenuation;\r\n        }\r\n    }\r\n    \r\n    // Emissive Torch Rendering (after shadow calc, skip lighting and fog)\r\n    if (finalIndex == 5u) {\r\n        return vec4<f32>(texColor.rgb, texColor.a);\r\n    }\r\n    \r\n    // Distance Fog\r\n    let camDist = distance(input.worldPos, uniforms.cameraPosition.xyz);\r\n    let fogStart = 140.0; // Start fading fog (within 224 block render distance)\r\n    let fogEnd = 200.0;   // Full fog\r\n    let fogFactor = clamp((camDist - fogStart) / (fogEnd - fogStart), 0.0, 1.0);\r\n    \r\n    let finalColor = mix(texColor.rgb * (lighting + torchLight), uniforms.skyColor.rgb, fogFactor);\r\n    \r\n    return vec4<f32>(finalColor, texColor.a);\r\n}\r\n\r\n@vertex\r\nfn shadow_vs(input : VertexInput, instance : InstanceInput) -> @builtin(position) vec4<f32> {\r\n    let worldPosition = input.position + instance.instancePosition;\r\n    return uniforms.lightViewProjectionMatrix * vec4<f32>(worldPosition, 1.0);\r\n}\r\n\r\n// --- Entity Renderer (Spider/Player) ---\r\n\r\nstruct EntityUniforms {\r\n    viewProjectionMatrix : mat4x4<f32>,\r\n    modelMatrix : mat4x4<f32>,\r\n    color : vec4<f32>,\r\n}\r\n\r\n@group(0) @binding(0) var<uniform> entityUniforms : EntityUniforms;\r\n\r\nstruct EntityVertexInput {\r\n    @location(0) position : vec3<f32>,\r\n    // No UV/Normal needed for flat colored cubes\r\n}\r\n\r\nstruct EntityVertexOutput {\r\n    @builtin(position) Position : vec4<f32>,\r\n    @location(0) color : vec4<f32>,\r\n}\r\n\r\n@vertex\r\nfn entity_vs(input : EntityVertexInput) -> EntityVertexOutput {\r\n    var output : EntityVertexOutput;\r\n    let worldPos = entityUniforms.modelMatrix * vec4<f32>(input.position, 1.0);\r\n    output.Position = entityUniforms.viewProjectionMatrix * worldPos;\r\n    \r\n    // Simple directional lighting simulation based on normal?\r\n    // For a cube, we can infer normal from model matrix if we passed it, but let's just use constant color\r\n    // Or simpler: generic lighting.\r\n    // Let's stick to flat color for now, maybe slight tint based on Y?\r\n    output.color = entityUniforms.color;\r\n    return output;\r\n}\r\n\r\n@fragment\r\nfn entity_fs(input: EntityVertexOutput) -> @location(0) vec4<f32> {\r\n    return input.color;\r\n}\r\n";

/***/ },

/***/ "./src/spider.ts"
/*!***********************!*\
  !*** ./src/spider.ts ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Spider: () => (/* binding */ Spider)
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/quat.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/vec4.js");
/* harmony import */ var _ik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ik */ "./src/ik.ts");


// Constants (Scaled down by ~20% from previous giant size)
const LEG_COUNT = 8;
const BODY_HEIGHT = 3.2; // 4.0 * 0.8
const STEP_DISTANCE = 3.2; // 4.0 * 0.8
const STEP_HEIGHT = 1.6; // 2.0 * 0.8
const STEP_SPEED = 4.0; // Keep speed multiplier (visually faster stride)
// Leg Dimensions (Scaled 0.8)
const COXA_LEN = 0.8;
const FEMUR_LEN = 2.4;
const TIBIA_LEN = 3.6;
class Spider {
    position = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0, 10, 0);
    velocity = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
    rotation = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
    yaw = 0;
    // Leg State
    legTargets = []; // Current world position of feet
    legStart = []; // Where foot sort of started (for lerp)
    legNext = []; // Where foot is going
    legProgress = []; // 0 to 1
    legMoving = [];
    // Physics
    gravity = 20.0;
    constructor() {
        // Init legs
        for (let i = 0; i < LEG_COUNT; i++) {
            this.legTargets.push(gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0, 0, 0));
            this.legStart.push(gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0, 0, 0));
            this.legNext.push(gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0, 0, 0));
            this.legProgress.push(0);
            this.legMoving.push(false);
        }
    }
    // Calculate ideal foot position based on current body + layout
    getIdealFootPos(index, currentPos, currentYaw) {
        const row = Math.floor(index / 2); // 0 to 3 (Front to Back)
        const side = index % 2 === 0 ? 1 : -1; // 1 = Left (+X), -1 = Right (-X)
        // Layout (Local to Center)
        // Scaled values (0.8x)
        // Z local: Forward/Back
        // X local: Left/Right (Reach)
        // Z Spacing: Front legs in front of head, more spacing between all legs
        // Front legs should be in front of the thorax, back legs behind
        const zVals = [4.5, 1.5, -1.5, -4.0];
        // Reach: Much wider to prevent collisions, especially middle legs
        // Front and back slightly narrower, middle legs extended for spider appearance
        const xDist = [4.0, 5.5, 5.5, 4.0];
        const lx = side * xDist[row];
        const lz = zVals[row];
        // Rotate local to world aligned with body
        // CRITICAL FIX: Ensure rotation is applied to the offset correctly
        const q = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromEuler(q, 0, currentYaw * 180 / Math.PI, 0);
        const offset = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(lx, 0, lz);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.transformQuat(offset, offset, q);
        // Ideal ground plane
        const final = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.add(final, currentPos, offset);
        final[1] -= BODY_HEIGHT;
        return final;
    }
    update(dt, keys, terrainFn) {
        // Controls
        const speed = 5.0; // Scaled down slightly from 6.0
        const rotSpeed = 1.5;
        let move = 0;
        let turn = 0;
        if (keys['KeyW'])
            move += 1;
        if (keys['KeyS'])
            move -= 1;
        if (keys['KeyA'])
            turn += 1;
        if (keys['KeyD'])
            turn -= 1;
        this.yaw += turn * rotSpeed * dt;
        const forward = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(Math.sin(this.yaw), 0, Math.cos(this.yaw));
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.scaleAndAdd(this.velocity, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create(), forward, move * speed);
        // Update Position
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.scaleAndAdd(this.position, this.position, this.velocity, dt);
        // Damp
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.scale(this.velocity, this.velocity, 0.0); // Full damp
        // Leg Logic (Gait)
        let movingCount = 0;
        for (let i = 0; i < LEG_COUNT; i++) {
            if (this.legMoving[i])
                movingCount++;
        }
        for (let i = 0; i < LEG_COUNT; i++) {
            const ideal = this.getIdealFootPos(i, this.position, this.yaw);
            // Raycast terrain for ideal
            const groundY = terrainFn(ideal);
            if (groundY !== null) {
                ideal[1] = groundY + 1.0;
            }
            else {
                ideal[1] = 0; // Fallback
            }
            const dist = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.distance(this.legTargets[i], ideal);
            // Trigger Step
            // If distance is too far, or if the leg is "behind" the ideal position too much relative to movement
            if (!this.legMoving[i] && dist > STEP_DISTANCE) {
                // Allow max 4 legs moving, but try to keep stable pairs
                if (movingCount < 4) {
                    this.legMoving[i] = true;
                    this.legProgress[i] = 0;
                    gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(this.legStart[i], this.legTargets[i]);
                    gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(this.legNext[i], ideal);
                    movingCount++;
                }
            }
            // Animate Step
            if (this.legMoving[i]) {
                this.legProgress[i] += dt * STEP_SPEED;
                if (this.legProgress[i] >= 1.0) {
                    this.legProgress[i] = 1.0;
                    this.legMoving[i] = false;
                    gl_matrix__WEBPACK_IMPORTED_MODULE_1__.copy(this.legTargets[i], this.legNext[i]);
                }
                else {
                    const t = this.legProgress[i];
                    // Lerp X/Z
                    gl_matrix__WEBPACK_IMPORTED_MODULE_1__.lerp(this.legTargets[i], this.legStart[i], this.legNext[i], t);
                    // Arc Y (Parabola)
                    const h = Math.max(0, Math.sin(t * Math.PI)) * STEP_HEIGHT;
                    // Using current Y target base
                    const baseHeight = (1 - t) * this.legStart[i][1] + t * this.legNext[i][1];
                    this.legTargets[i][1] = baseHeight + h;
                }
            }
        }
        // Body Height Adjustment (Average of legs)
        let avgY = 0;
        for (let p of this.legTargets)
            avgY += p[1];
        avgY /= LEG_COUNT;
        // Smooth body Y
        const targetBodyY = avgY + BODY_HEIGHT;
        this.position[1] = this.position[1] * 0.9 + targetBodyY * 0.1;
        // Update Rotation Quaternion
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromEuler(this.rotation, 0, this.yaw * 180 / Math.PI, 0);
    }
    draw(device, passEncoder, renderer, isRiding) {
        // Body Colors
        const colBody = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(0.1, 0.1, 0.1, 1.0); // Black/Grey
        const colLeg = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(0.2, 0.05, 0.05, 1.0); // Dark Red
        const colJoint = gl_matrix__WEBPACK_IMPORTED_MODULE_2__.fromValues(0.5, 0.0, 0.0, 1.0); // Red
        // 1. Draw Body
        // Thorax (Cephalothorax) - Scaled 0.8
        // Original: 3.0, 2.5, 4.0 -> Scaled: 2.4, 2.0, 3.2
        renderer.drawCubeEuler(device, passEncoder, this.position, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0, this.yaw, 0), gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(2.4, 2.0, 3.2), colBody);
        // Abdomen (Behind)
        const abdPos = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
        const backward = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.scaleAndAdd(abdPos, this.position, backward, 3.2); // Offset scaled (was 4.0)
        // Tilt slightly
        // We'll construct a rotation matrix/quat for the abdomen
        const abdRot = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.2, this.yaw, 0); // 0.2 rad tilt X, + yaw Y
        renderer.drawCubeEuler(device, passEncoder, abdPos, abdRot, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(4.0, 3.2, 4.8), // Scaled 0.8 (was 5.0, 4.0, 6.0)
        colBody);
        // 2. Draw Legs
        for (let i = 0; i < LEG_COUNT; i++) {
            const side = i % 2 === 0 ? 1 : -1;
            const row = Math.floor(i / 2);
            // Body Attachment Points (Relative to Body Center)
            // Scaled 0.8
            // Z offsets (local)
            const zOff = [1.2, 0.4, -0.4, -1.2][row];
            const xOff = side * 1.2; // Width is 2.4, so 1.2 is edge
            const attachLocal = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(xOff, 0, zOff);
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.transformQuat(attachLocal, attachLocal, this.rotation);
            const attachWorld = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.add(attachWorld, this.position, attachLocal);
            // Coxa Endpoint (The hip joint)
            // Points outwards
            const coxaDirLocal = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(side, -0.2, 0); // Slight down angle
            const coxaDir = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.transformQuat(coxaDir, coxaDirLocal, this.rotation);
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.normalize(coxaDir, coxaDir);
            const coxaEnd = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
            gl_matrix__WEBPACK_IMPORTED_MODULE_1__.scaleAndAdd(coxaEnd, attachWorld, coxaDir, COXA_LEN);
            // Draw Coxa
            this.drawLimb(device, passEncoder, renderer, attachWorld, coxaEnd, 0.48, colBody); // Thinner
            // Target Foot
            const foot = this.legTargets[i];
            // IK Solve from CoxaEnd to Foot
            // Knees generally point UP
            const pole = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0, 1, 0);
            const sol = (0,_ik__WEBPACK_IMPORTED_MODULE_3__.solveIK)(coxaEnd, foot, FEMUR_LEN, TIBIA_LEN, pole);
            const knee = sol.knee;
            // Draw Femur (Coxa -> Knee)
            this.drawLimb(device, passEncoder, renderer, coxaEnd, knee, 0.4, colLeg);
            // Draw Tibia (Knee -> Foot)
            this.drawLimb(device, passEncoder, renderer, knee, foot, 0.28, colLeg);
            // Knee Joint
            renderer.drawCubeEuler(device, passEncoder, knee, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create(), gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0.56, 0.56, 0.56), colJoint);
        }
        // 3. Draw Rider (Removed - Handled by PlayerModel)
    }
    drawLimb(device, passEncoder, renderer, start, end, thickness, color) {
        const center = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.lerp(center, start, end, 0.5);
        const len = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.distance(start, end);
        const dir = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.subtract(dir, end, start);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__.normalize(dir, dir);
        // Rotation Quat: From Up (0,1,0) to Dir
        const q = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
        const up = gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(0, 1, 0);
        // Handle parallel case
        if (Math.abs(gl_matrix__WEBPACK_IMPORTED_MODULE_1__.dot(dir, up)) > 0.99) {
            // Just use identity or flip
            if (dir[1] < 0)
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__.fromEuler(q, 180, 0, 0);
        }
        else {
            gl_matrix__WEBPACK_IMPORTED_MODULE_0__.rotationTo(q, up, dir);
        }
        renderer.drawCube(device, passEncoder, center, q, gl_matrix__WEBPACK_IMPORTED_MODULE_1__.fromValues(thickness, len, thickness), color);
    }
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var hasSymbol = typeof Symbol === "function";
/******/ 		var webpackQueues = hasSymbol ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = hasSymbol ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = hasSymbol ? Symbol("webpack error") : "__webpack_error__";
/******/ 		
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 		
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 		
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			var handle = (deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 		
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}
/******/ 			var done = (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue))
/******/ 			body(handle, done);
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFFLENBQUMsQ0FBQztJQUN2QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkIsWUFBWTtJQUNaLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLGVBQWU7SUFDZixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3ZCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3ZCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2QixjQUFjO0lBQ2QsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEIsYUFBYTtJQUNiLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdkIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN2QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3ZCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdkIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN2QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0NBQzFCLENBQUMsQ0FBQztBQUVILE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDckMsSUFBSSxFQUFFLFlBQVksQ0FBQyxVQUFVO0lBQzdCLEtBQUssRUFBRSxjQUFjLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxRQUFRO0NBQ3pELENBQUMsQ0FBQztBQUNILE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUs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QUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEUsT0FBTztRQUNQLDBDQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RSxTQUFTO1FBQ1QsMENBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLE1BQU07UUFDTiwwQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMs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LENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLElBQUksSUFBSSxHQUFHLElBQUk7UUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUU3QyxJQUFJLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsSUFBSSxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLElBQUksS0FBSyxHQUFHLEtBQUs7UUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVuRCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ2xELElBQUksS0FBSyxHQUFHLElBQUk7UUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQy9CLElBQUksS0FBSyxHQUFHLElBQUk7UUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBRS9CLElBQUksS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxJQUFJLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFN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LENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDbEUsTUFBTSxPQUFPLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUNsRSxNQUFNLE9BQU8sR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBRWxFLElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUM5SSxJQUFJLEtBQUssR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDOUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxjQUFj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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0EsSUFBSTtXQUNKOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxDQUFDO1dBQ0Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBLHNHQUFzRztXQUN0RztXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0N2RUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7O1VFbEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VvcmdlLWNzLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vY29tbW9uLmpzIiwid2VicGFjazovL2dlb3JnZS1jcy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL21hdDMuanMiLCJ3ZWJwYWNrOi8vZ2VvcmdlLWNzLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vbWF0NC5qcyIsIndlYnBhY2s6Ly9nZW9yZ2UtY3MvLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L2VzbS9xdWF0LmpzIiwid2VicGFjazovL2dlb3JnZS1jcy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL3ZlYzMuanMiLCJ3ZWJwYWNrOi8vZ2VvcmdlLWNzLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vdmVjNC5qcyIsIndlYnBhY2s6Ly9nZW9yZ2UtY3MvLi9zcmMvaWsudHMiLCJ3ZWJwYWNrOi8vZ2VvcmdlLWNzLy4vc3JjL2xvZ2dlci50cyIsIndlYnBhY2s6Ly9nZW9yZ2UtY3MvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9nZW9yZ2UtY3MvLi9zcmMvbm9pc2UudHMiLCJ3ZWJwYWNrOi8vZ2VvcmdlLWNzLy4vc3JjL3BhcnRpY2xlcy50cyIsIndlYnBhY2s6Ly9nZW9yZ2UtY3MvLi9zcmMvcGlja3Vwcy50cyIsIndlYnBhY2s6Ly9nZW9yZ2UtY3MvLi9zcmMvcGxheWVyLnRzIiwid2VicGFjazovL2dlb3JnZS1jcy8uL3NyYy9yZW5kZXJlci50cyIsIndlYnBhY2s6Ly9nZW9yZ2UtY3MvLi9zcmMvc3BpZGVyLnRzIiwid2VicGFjazovL2dlb3JnZS1jcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nZW9yZ2UtY3Mvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly9nZW9yZ2UtY3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dlb3JnZS1jcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2dlb3JnZS1jcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dlb3JnZS1jcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dlb3JnZS1jcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9nZW9yZ2UtY3Mvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9nZW9yZ2UtY3Mvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2dlb3JnZS1jcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb21tb24gdXRpbGl0aWVzXG4gKiBAbW9kdWxlIGdsTWF0cml4XG4gKi9cblxuLy8gQ29uZmlndXJhdGlvbiBDb25zdGFudHNcbmV4cG9ydCB2YXIgRVBTSUxPTiA9IDAuMDAwMDAxO1xuZXhwb3J0IHZhciBBUlJBWV9UWVBFID0gdHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gXCJ1bmRlZmluZWRcIiA/IEZsb2F0MzJBcnJheSA6IEFycmF5O1xuZXhwb3J0IHZhciBSQU5ET00gPSBNYXRoLnJhbmRvbTtcbmV4cG9ydCB2YXIgQU5HTEVfT1JERVIgPSBcInp5eFwiO1xuXG4vKipcbiAqIFN5bW1ldHJpYyByb3VuZFxuICogc2VlIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JvdW5kLWhhbGYtdXAtc3ltbWV0cmljI3VzZXItY29udGVudC1kZXRhaWxlZC1iYWNrZ3JvdW5kXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGEgdmFsdWUgdG8gcm91bmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kKGEpIHtcbiAgaWYgKGEgPj0gMCkgcmV0dXJuIE1hdGgucm91bmQoYSk7XG4gIHJldHVybiBhICUgMC41ID09PSAwID8gTWF0aC5mbG9vcihhKSA6IE1hdGgucm91bmQoYSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgdHlwZSBvZiBhcnJheSB1c2VkIHdoZW4gY3JlYXRpbmcgbmV3IHZlY3RvcnMgYW5kIG1hdHJpY2VzXG4gKlxuICogQHBhcmFtIHtGbG9hdDMyQXJyYXlDb25zdHJ1Y3RvciB8IEFycmF5Q29uc3RydWN0b3J9IHR5cGUgQXJyYXkgdHlwZSwgc3VjaCBhcyBGbG9hdDMyQXJyYXkgb3IgQXJyYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldE1hdHJpeEFycmF5VHlwZSh0eXBlKSB7XG4gIEFSUkFZX1RZUEUgPSB0eXBlO1xufVxudmFyIGRlZ3JlZSA9IE1hdGguUEkgLyAxODA7XG52YXIgcmFkaWFuID0gMTgwIC8gTWF0aC5QSTtcblxuLyoqXG4gKiBDb252ZXJ0IERlZ3JlZSBUbyBSYWRpYW5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gYSBBbmdsZSBpbiBEZWdyZWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhKSB7XG4gIHJldHVybiBhICogZGVncmVlO1xufVxuXG4vKipcbiAqIENvbnZlcnQgUmFkaWFuIFRvIERlZ3JlZVxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBhIEFuZ2xlIGluIFJhZGlhbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGEpIHtcbiAgcmV0dXJuIGEgKiByYWRpYW47XG59XG5cbi8qKlxuICogVGVzdHMgd2hldGhlciBvciBub3QgdGhlIGFyZ3VtZW50cyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgdmFsdWUsIHdpdGhpbiBhbiBhYnNvbHV0ZVxuICogb3IgcmVsYXRpdmUgdG9sZXJhbmNlIG9mIGdsTWF0cml4LkVQU0lMT04gKGFuIGFic29sdXRlIHRvbGVyYW5jZSBpcyB1c2VkIGZvciB2YWx1ZXMgbGVzc1xuICogdGhhbiBvciBlcXVhbCB0byAxLjAsIGFuZCBhIHJlbGF0aXZlIHRvbGVyYW5jZSBpcyB1c2VkIGZvciBsYXJnZXIgdmFsdWVzKVxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBhICAgICAgICAgIFRoZSBmaXJzdCBudW1iZXIgdG8gdGVzdC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBiICAgICAgICAgIFRoZSBzZWNvbmQgbnVtYmVyIHRvIHRlc3QuXG4gKiBAcGFyYW0ge051bWJlcn0gdG9sZXJhbmNlICBBYnNvbHV0ZSBvciByZWxhdGl2ZSB0b2xlcmFuY2UgKGRlZmF1bHQgZ2xNYXRyaXguRVBTSUxPTilcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgdG9sZXJhbmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBFUFNJTE9OO1xuICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpIDw9IHRvbGVyYW5jZSAqIE1hdGgubWF4KDEsIE1hdGguYWJzKGEpLCBNYXRoLmFicyhiKSk7XG59IiwiaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uLmpzXCI7XG5cbi8qKlxuICogM3gzIE1hdHJpeFxuICogQG1vZHVsZSBtYXQzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDNcbiAqXG4gKiBAcmV0dXJucyB7bWF0M30gYSBuZXcgM3gzIG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoOSk7XG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs1XSA9IDA7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICB9XG4gIG91dFswXSA9IDE7XG4gIG91dFs0XSA9IDE7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB1cHBlci1sZWZ0IDN4MyB2YWx1ZXMgaW50byB0aGUgZ2l2ZW4gbWF0My5cbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIDN4MyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhICAgdGhlIHNvdXJjZSA0eDQgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTWF0NChvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVs0XTtcbiAgb3V0WzRdID0gYVs1XTtcbiAgb3V0WzVdID0gYVs2XTtcbiAgb3V0WzZdID0gYVs4XTtcbiAgb3V0WzddID0gYVs5XTtcbiAgb3V0WzhdID0gYVsxMF07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBtYXQzIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XG4gKlxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgbWF0cml4IHRvIGNsb25lXG4gKiBAcmV0dXJucyB7bWF0M30gYSBuZXcgM3gzIG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoOSk7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDMgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgbWF0MyB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTAyIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDIgcG9zaXRpb24gKGluZGV4IDIpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDMpXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDUpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIwIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDAgcG9zaXRpb24gKGluZGV4IDYpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDcpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIyIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDIgcG9zaXRpb24gKGluZGV4IDgpXG4gKiBAcmV0dXJucyB7bWF0M30gQSBuZXcgbWF0M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyhtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg5KTtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTEwO1xuICBvdXRbNF0gPSBtMTE7XG4gIG91dFs1XSA9IG0xMjtcbiAgb3V0WzZdID0gbTIwO1xuICBvdXRbN10gPSBtMjE7XG4gIG91dFs4XSA9IG0yMjtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQzIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA1KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA2KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA3KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA4KVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMikge1xuICBvdXRbMF0gPSBtMDA7XG4gIG91dFsxXSA9IG0wMTtcbiAgb3V0WzJdID0gbTAyO1xuICBvdXRbM10gPSBtMTA7XG4gIG91dFs0XSA9IG0xMTtcbiAgb3V0WzVdID0gbTEyO1xuICBvdXRbNl0gPSBtMjA7XG4gIG91dFs3XSA9IG0yMTtcbiAgb3V0WzhdID0gbTIyO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCBhIG1hdDMgdG8gdGhlIGlkZW50aXR5IG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMTtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc3Bvc2UgdGhlIHZhbHVlcyBvZiBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZShvdXQsIGEpIHtcbiAgLy8gSWYgd2UgYXJlIHRyYW5zcG9zaW5nIG91cnNlbHZlcyB3ZSBjYW4gc2tpcCBhIGZldyBzdGVwcyBidXQgaGF2ZSB0byBjYWNoZSBzb21lIHZhbHVlc1xuICBpZiAob3V0ID09PSBhKSB7XG4gICAgdmFyIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdLFxuICAgICAgYTEyID0gYVs1XTtcbiAgICBvdXRbMV0gPSBhWzNdO1xuICAgIG91dFsyXSA9IGFbNl07XG4gICAgb3V0WzNdID0gYTAxO1xuICAgIG91dFs1XSA9IGFbN107XG4gICAgb3V0WzZdID0gYTAyO1xuICAgIG91dFs3XSA9IGExMjtcbiAgfSBlbHNlIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbM107XG4gICAgb3V0WzJdID0gYVs2XTtcbiAgICBvdXRbM10gPSBhWzFdO1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs3XTtcbiAgICBvdXRbNl0gPSBhWzJdO1xuICAgIG91dFs3XSA9IGFbNV07XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEludmVydHMgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0MyB8IG51bGx9IG91dCwgb3IgbnVsbCBpZiBzb3VyY2UgbWF0cml4IGlzIG5vdCBpbnZlcnRpYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgIGEwMSA9IGFbMV0sXG4gICAgYTAyID0gYVsyXTtcbiAgdmFyIGExMCA9IGFbM10sXG4gICAgYTExID0gYVs0XSxcbiAgICBhMTIgPSBhWzVdO1xuICB2YXIgYTIwID0gYVs2XSxcbiAgICBhMjEgPSBhWzddLFxuICAgIGEyMiA9IGFbOF07XG4gIHZhciBiMDEgPSBhMjIgKiBhMTEgLSBhMTIgKiBhMjE7XG4gIHZhciBiMTEgPSAtYTIyICogYTEwICsgYTEyICogYTIwO1xuICB2YXIgYjIxID0gYTIxICogYTEwIC0gYTExICogYTIwO1xuXG4gIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgdmFyIGRldCA9IGEwMCAqIGIwMSArIGEwMSAqIGIxMSArIGEwMiAqIGIyMTtcbiAgaWYgKCFkZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBkZXQgPSAxLjAgLyBkZXQ7XG4gIG91dFswXSA9IGIwMSAqIGRldDtcbiAgb3V0WzFdID0gKC1hMjIgKiBhMDEgKyBhMDIgKiBhMjEpICogZGV0O1xuICBvdXRbMl0gPSAoYTEyICogYTAxIC0gYTAyICogYTExKSAqIGRldDtcbiAgb3V0WzNdID0gYjExICogZGV0O1xuICBvdXRbNF0gPSAoYTIyICogYTAwIC0gYTAyICogYTIwKSAqIGRldDtcbiAgb3V0WzVdID0gKC1hMTIgKiBhMDAgKyBhMDIgKiBhMTApICogZGV0O1xuICBvdXRbNl0gPSBiMjEgKiBkZXQ7XG4gIG91dFs3XSA9ICgtYTIxICogYTAwICsgYTAxICogYTIwKSAqIGRldDtcbiAgb3V0WzhdID0gKGExMSAqIGEwMCAtIGEwMSAqIGExMCkgKiBkZXQ7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYWRqdWdhdGUgb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGpvaW50KG91dCwgYSkge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICBhMDEgPSBhWzFdLFxuICAgIGEwMiA9IGFbMl07XG4gIHZhciBhMTAgPSBhWzNdLFxuICAgIGExMSA9IGFbNF0sXG4gICAgYTEyID0gYVs1XTtcbiAgdmFyIGEyMCA9IGFbNl0sXG4gICAgYTIxID0gYVs3XSxcbiAgICBhMjIgPSBhWzhdO1xuICBvdXRbMF0gPSBhMTEgKiBhMjIgLSBhMTIgKiBhMjE7XG4gIG91dFsxXSA9IGEwMiAqIGEyMSAtIGEwMSAqIGEyMjtcbiAgb3V0WzJdID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICBvdXRbM10gPSBhMTIgKiBhMjAgLSBhMTAgKiBhMjI7XG4gIG91dFs0XSA9IGEwMCAqIGEyMiAtIGEwMiAqIGEyMDtcbiAgb3V0WzVdID0gYTAyICogYTEwIC0gYTAwICogYTEyO1xuICBvdXRbNl0gPSBhMTAgKiBhMjEgLSBhMTEgKiBhMjA7XG4gIG91dFs3XSA9IGEwMSAqIGEyMCAtIGEwMCAqIGEyMTtcbiAgb3V0WzhdID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkZXRlcm1pbmFudCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudChhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgIGEwMSA9IGFbMV0sXG4gICAgYTAyID0gYVsyXTtcbiAgdmFyIGExMCA9IGFbM10sXG4gICAgYTExID0gYVs0XSxcbiAgICBhMTIgPSBhWzVdO1xuICB2YXIgYTIwID0gYVs2XSxcbiAgICBhMjEgPSBhWzddLFxuICAgIGEyMiA9IGFbOF07XG4gIHJldHVybiBhMDAgKiAoYTIyICogYTExIC0gYTEyICogYTIxKSArIGEwMSAqICgtYTIyICogYTEwICsgYTEyICogYTIwKSArIGEwMiAqIChhMjEgKiBhMTAgLSBhMTEgKiBhMjApO1xufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDMnc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgYTAxID0gYVsxXSxcbiAgICBhMDIgPSBhWzJdO1xuICB2YXIgYTEwID0gYVszXSxcbiAgICBhMTEgPSBhWzRdLFxuICAgIGExMiA9IGFbNV07XG4gIHZhciBhMjAgPSBhWzZdLFxuICAgIGEyMSA9IGFbN10sXG4gICAgYTIyID0gYVs4XTtcbiAgdmFyIGIwMCA9IGJbMF0sXG4gICAgYjAxID0gYlsxXSxcbiAgICBiMDIgPSBiWzJdO1xuICB2YXIgYjEwID0gYlszXSxcbiAgICBiMTEgPSBiWzRdLFxuICAgIGIxMiA9IGJbNV07XG4gIHZhciBiMjAgPSBiWzZdLFxuICAgIGIyMSA9IGJbN10sXG4gICAgYjIyID0gYls4XTtcbiAgb3V0WzBdID0gYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwO1xuICBvdXRbMV0gPSBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjE7XG4gIG91dFsyXSA9IGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMjtcbiAgb3V0WzNdID0gYjEwICogYTAwICsgYjExICogYTEwICsgYjEyICogYTIwO1xuICBvdXRbNF0gPSBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjE7XG4gIG91dFs1XSA9IGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMjtcbiAgb3V0WzZdID0gYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwO1xuICBvdXRbN10gPSBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBiMjIgKiBhMjE7XG4gIG91dFs4XSA9IGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMjtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQzIGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSB2IHZlY3RvciB0byB0cmFuc2xhdGUgYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgYTAxID0gYVsxXSxcbiAgICBhMDIgPSBhWzJdLFxuICAgIGExMCA9IGFbM10sXG4gICAgYTExID0gYVs0XSxcbiAgICBhMTIgPSBhWzVdLFxuICAgIGEyMCA9IGFbNl0sXG4gICAgYTIxID0gYVs3XSxcbiAgICBhMjIgPSBhWzhdLFxuICAgIHggPSB2WzBdLFxuICAgIHkgPSB2WzFdO1xuICBvdXRbMF0gPSBhMDA7XG4gIG91dFsxXSA9IGEwMTtcbiAgb3V0WzJdID0gYTAyO1xuICBvdXRbM10gPSBhMTA7XG4gIG91dFs0XSA9IGExMTtcbiAgb3V0WzVdID0gYTEyO1xuICBvdXRbNl0gPSB4ICogYTAwICsgeSAqIGExMCArIGEyMDtcbiAgb3V0WzddID0geCAqIGEwMSArIHkgKiBhMTEgKyBhMjE7XG4gIG91dFs4XSA9IHggKiBhMDIgKyB5ICogYTEyICsgYTIyO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXQzIGJ5IHRoZSBnaXZlbiBhbmdsZVxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCkge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICBhMDEgPSBhWzFdLFxuICAgIGEwMiA9IGFbMl0sXG4gICAgYTEwID0gYVszXSxcbiAgICBhMTEgPSBhWzRdLFxuICAgIGExMiA9IGFbNV0sXG4gICAgYTIwID0gYVs2XSxcbiAgICBhMjEgPSBhWzddLFxuICAgIGEyMiA9IGFbOF0sXG4gICAgcyA9IE1hdGguc2luKHJhZCksXG4gICAgYyA9IE1hdGguY29zKHJhZCk7XG4gIG91dFswXSA9IGMgKiBhMDAgKyBzICogYTEwO1xuICBvdXRbMV0gPSBjICogYTAxICsgcyAqIGExMTtcbiAgb3V0WzJdID0gYyAqIGEwMiArIHMgKiBhMTI7XG4gIG91dFszXSA9IGMgKiBhMTAgLSBzICogYTAwO1xuICBvdXRbNF0gPSBjICogYTExIC0gcyAqIGEwMTtcbiAgb3V0WzVdID0gYyAqIGExMiAtIHMgKiBhMDI7XG4gIG91dFs2XSA9IGEyMDtcbiAgb3V0WzddID0gYTIxO1xuICBvdXRbOF0gPSBhMjI7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2NhbGVzIHRoZSBtYXQzIGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMyXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSB2IHRoZSB2ZWMyIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgdmFyIHggPSB2WzBdLFxuICAgIHkgPSB2WzFdO1xuICBvdXRbMF0gPSB4ICogYVswXTtcbiAgb3V0WzFdID0geCAqIGFbMV07XG4gIG91dFsyXSA9IHggKiBhWzJdO1xuICBvdXRbM10gPSB5ICogYVszXTtcbiAgb3V0WzRdID0geSAqIGFbNF07XG4gIG91dFs1XSA9IHkgKiBhWzVdO1xuICBvdXRbNl0gPSBhWzZdO1xuICBvdXRbN10gPSBhWzddO1xuICBvdXRbOF0gPSBhWzhdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDMuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0My50cmFuc2xhdGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21UcmFuc2xhdGlvbihvdXQsIHYpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMTtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gdlswXTtcbiAgb3V0WzddID0gdlsxXTtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBnaXZlbiBhbmdsZVxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDMuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0My5yb3RhdGUoZGVzdCwgZGVzdCwgcmFkKTtcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICBjID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYztcbiAgb3V0WzFdID0gcztcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gLXM7XG4gIG91dFs0XSA9IGM7XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHNjYWxpbmdcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQzLmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDMuc2NhbGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gdiBTY2FsaW5nIHZlY3RvclxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVNjYWxpbmcob3V0LCB2KSB7XG4gIG91dFswXSA9IHZbMF07XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHZbMV07XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgZnJvbSBhIG1hdDJkIGludG8gYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQyZH0gYSB0aGUgbWF0cml4IHRvIGNvcHlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTWF0MmQob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IGFbMl07XG4gIG91dFs0XSA9IGFbM107XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IGFbNF07XG4gIG91dFs3XSA9IGFbNV07XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyBhIDN4MyBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gcXVhdGVybmlvblxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBxIFF1YXRlcm5pb24gdG8gY3JlYXRlIG1hdHJpeCBmcm9tXG4gKlxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gIHZhciB4ID0gcVswXSxcbiAgICB5ID0gcVsxXSxcbiAgICB6ID0gcVsyXSxcbiAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeXggPSB5ICogeDI7XG4gIHZhciB5eSA9IHkgKiB5MjtcbiAgdmFyIHp4ID0geiAqIHgyO1xuICB2YXIgenkgPSB6ICogeTI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gIG91dFszXSA9IHl4IC0gd3o7XG4gIG91dFs2XSA9IHp4ICsgd3k7XG4gIG91dFsxXSA9IHl4ICsgd3o7XG4gIG91dFs0XSA9IDEgLSB4eCAtIHp6O1xuICBvdXRbN10gPSB6eSAtIHd4O1xuICBvdXRbMl0gPSB6eCAtIHd5O1xuICBvdXRbNV0gPSB6eSArIHd4O1xuICBvdXRbOF0gPSAxIC0geHggLSB5eTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIGEgM3gzIG5vcm1hbCBtYXRyaXggKHRyYW5zcG9zZSBpbnZlcnNlKSBmcm9tIHRoZSA0eDQgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgTWF0NCB0byBkZXJpdmUgdGhlIG5vcm1hbCBtYXRyaXggZnJvbVxuICpcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbEZyb21NYXQ0KG91dCwgYSkge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICBhMDEgPSBhWzFdLFxuICAgIGEwMiA9IGFbMl0sXG4gICAgYTAzID0gYVszXTtcbiAgdmFyIGExMCA9IGFbNF0sXG4gICAgYTExID0gYVs1XSxcbiAgICBhMTIgPSBhWzZdLFxuICAgIGExMyA9IGFbN107XG4gIHZhciBhMjAgPSBhWzhdLFxuICAgIGEyMSA9IGFbOV0sXG4gICAgYTIyID0gYVsxMF0sXG4gICAgYTIzID0gYVsxMV07XG4gIHZhciBhMzAgPSBhWzEyXSxcbiAgICBhMzEgPSBhWzEzXSxcbiAgICBhMzIgPSBhWzE0XSxcbiAgICBhMzMgPSBhWzE1XTtcbiAgdmFyIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcbiAgdmFyIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcbiAgdmFyIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcbiAgdmFyIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcbiAgdmFyIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcbiAgdmFyIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcbiAgdmFyIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcbiAgdmFyIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcbiAgdmFyIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcbiAgdmFyIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcbiAgdmFyIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcbiAgdmFyIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcblxuICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gIHZhciBkZXQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG4gIGlmICghZGV0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZGV0ID0gMS4wIC8gZGV0O1xuICBvdXRbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcbiAgb3V0WzFdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gIG91dFsyXSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xuICBvdXRbM10gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgb3V0WzRdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XG4gIG91dFs1XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuICBvdXRbNl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcbiAgb3V0WzddID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gIG91dFs4XSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIDJEIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBXaWR0aCBvZiB5b3VyIGdsIGNvbnRleHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIGdsIGNvbnRleHRcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3Rpb24ob3V0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIG91dFswXSA9IDIgLyB3aWR0aDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gLTIgLyBoZWlnaHQ7XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IC0xO1xuICBvdXRbN10gPSAxO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiBcIm1hdDMoXCIgKyBhWzBdICsgXCIsIFwiICsgYVsxXSArIFwiLCBcIiArIGFbMl0gKyBcIiwgXCIgKyBhWzNdICsgXCIsIFwiICsgYVs0XSArIFwiLCBcIiArIGFbNV0gKyBcIiwgXCIgKyBhWzZdICsgXCIsIFwiICsgYVs3XSArIFwiLCBcIiArIGFbOF0gKyBcIilcIjtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIEZyb2Jlbml1cyBub3JtIG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBtYXRyaXggdG8gY2FsY3VsYXRlIEZyb2Jlbml1cyBub3JtIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBGcm9iZW5pdXMgbm9ybVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvYihhKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoYVswXSAqIGFbMF0gKyBhWzFdICogYVsxXSArIGFbMl0gKiBhWzJdICsgYVszXSAqIGFbM10gKyBhWzRdICogYVs0XSArIGFbNV0gKiBhWzVdICsgYVs2XSAqIGFbNl0gKyBhWzddICogYVs3XSArIGFbOF0gKiBhWzhdKTtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byBtYXQzJ3NcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgb3V0WzRdID0gYVs0XSArIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gKyBiWzVdO1xuICBvdXRbNl0gPSBhWzZdICsgYls2XTtcbiAgb3V0WzddID0gYVs3XSArIGJbN107XG4gIG91dFs4XSA9IGFbOF0gKyBiWzhdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFN1YnRyYWN0cyBtYXRyaXggYiBmcm9tIG1hdHJpeCBhXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgb3V0WzRdID0gYVs0XSAtIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gLSBiWzVdO1xuICBvdXRbNl0gPSBhWzZdIC0gYls2XTtcbiAgb3V0WzddID0gYVs3XSAtIGJbN107XG4gIG91dFs4XSA9IGFbOF0gLSBiWzhdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE11bHRpcGx5IGVhY2ggZWxlbWVudCBvZiB0aGUgbWF0cml4IGJ5IGEgc2NhbGFyLlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIG1hdHJpeCdzIGVsZW1lbnRzIGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhcihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgb3V0WzNdID0gYVszXSAqIGI7XG4gIG91dFs0XSA9IGFbNF0gKiBiO1xuICBvdXRbNV0gPSBhWzVdICogYjtcbiAgb3V0WzZdID0gYVs2XSAqIGI7XG4gIG91dFs3XSA9IGFbN10gKiBiO1xuICBvdXRbOF0gPSBhWzhdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byBtYXQzJ3MgYWZ0ZXIgbXVsdGlwbHlpbmcgZWFjaCBlbGVtZW50IG9mIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYidzIGVsZW1lbnRzIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF0gKiBzY2FsZTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV0gKiBzY2FsZTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl0gKiBzY2FsZTtcbiAgb3V0WzNdID0gYVszXSArIGJbM10gKiBzY2FsZTtcbiAgb3V0WzRdID0gYVs0XSArIGJbNF0gKiBzY2FsZTtcbiAgb3V0WzVdID0gYVs1XSArIGJbNV0gKiBzY2FsZTtcbiAgb3V0WzZdID0gYVs2XSArIGJbNl0gKiBzY2FsZTtcbiAgb3V0WzddID0gYVs3XSArIGJbN10gKiBzY2FsZTtcbiAgb3V0WzhdID0gYVs4XSArIGJbOF0gKiBzY2FsZTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgVGhlIGZpcnN0IG1hdHJpeC5cbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBiIFRoZSBzZWNvbmQgbWF0cml4LlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1hdHJpY2VzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdICYmIGFbMl0gPT09IGJbMl0gJiYgYVszXSA9PT0gYlszXSAmJiBhWzRdID09PSBiWzRdICYmIGFbNV0gPT09IGJbNV0gJiYgYVs2XSA9PT0gYls2XSAmJiBhWzddID09PSBiWzddICYmIGFbOF0gPT09IGJbOF07XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgbWF0cmljZXMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIFRoZSBmaXJzdCBtYXRyaXguXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYiBUaGUgc2Vjb25kIG1hdHJpeC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHZhciBhMCA9IGFbMF0sXG4gICAgYTEgPSBhWzFdLFxuICAgIGEyID0gYVsyXSxcbiAgICBhMyA9IGFbM10sXG4gICAgYTQgPSBhWzRdLFxuICAgIGE1ID0gYVs1XSxcbiAgICBhNiA9IGFbNl0sXG4gICAgYTcgPSBhWzddLFxuICAgIGE4ID0gYVs4XTtcbiAgdmFyIGIwID0gYlswXSxcbiAgICBiMSA9IGJbMV0sXG4gICAgYjIgPSBiWzJdLFxuICAgIGIzID0gYlszXSxcbiAgICBiNCA9IGJbNF0sXG4gICAgYjUgPSBiWzVdLFxuICAgIGI2ID0gYls2XSxcbiAgICBiNyA9IGJbN10sXG4gICAgYjggPSBiWzhdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJiBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiYgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpICYmIE1hdGguYWJzKGE0IC0gYjQpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE0KSwgTWF0aC5hYnMoYjQpKSAmJiBNYXRoLmFicyhhNSAtIGI1KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNSksIE1hdGguYWJzKGI1KSkgJiYgTWF0aC5hYnMoYTYgLSBiNikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTYpLCBNYXRoLmFicyhiNikpICYmIE1hdGguYWJzKGE3IC0gYjcpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE3KSwgTWF0aC5hYnMoYjcpKSAmJiBNYXRoLmFicyhhOCAtIGI4KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhOCksIE1hdGguYWJzKGI4KSk7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQzLm11bHRpcGx5fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgbXVsID0gbXVsdGlwbHk7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQzLnN1YnRyYWN0fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgc3ViID0gc3VidHJhY3Q7IiwiaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uLmpzXCI7XG5cbi8qKlxuICogNHg0IE1hdHJpeDxicj5Gb3JtYXQ6IGNvbHVtbi1tYWpvciwgd2hlbiB0eXBlZCBvdXQgaXQgbG9va3MgbGlrZSByb3ctbWFqb3I8YnI+VGhlIG1hdHJpY2VzIGFyZSBiZWluZyBwb3N0IG11bHRpcGxpZWQuXG4gKiBAbW9kdWxlIG1hdDRcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0NFxuICpcbiAqIEByZXR1cm5zIHttYXQ0fSBhIG5ldyA0eDQgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgxNik7XG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgfVxuICBvdXRbMF0gPSAxO1xuICBvdXRbNV0gPSAxO1xuICBvdXRbMTBdID0gMTtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBtYXQ0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XG4gKlxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgbWF0cml4IHRvIGNsb25lXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMTYpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICBvdXRbNF0gPSBhWzRdO1xuICBvdXRbNV0gPSBhWzVdO1xuICBvdXRbNl0gPSBhWzZdO1xuICBvdXRbN10gPSBhWzddO1xuICBvdXRbOF0gPSBhWzhdO1xuICBvdXRbOV0gPSBhWzldO1xuICBvdXRbMTBdID0gYVsxMF07XG4gIG91dFsxMV0gPSBhWzExXTtcbiAgb3V0WzEyXSA9IGFbMTJdO1xuICBvdXRbMTNdID0gYVsxM107XG4gIG91dFsxNF0gPSBhWzE0XTtcbiAgb3V0WzE1XSA9IGFbMTVdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBtYXQ0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIG91dFs5XSA9IGFbOV07XG4gIG91dFsxMF0gPSBhWzEwXTtcbiAgb3V0WzExXSA9IGFbMTFdO1xuICBvdXRbMTJdID0gYVsxMl07XG4gIG91dFsxM10gPSBhWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdO1xuICBvdXRbMTVdID0gYVsxNV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG1hdDQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMyBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA1KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA2KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMyBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAzIHBvc2l0aW9uIChpbmRleCA3KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA4KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA5KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxMClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjMgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMwIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDAgcG9zaXRpb24gKGluZGV4IDEyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMSBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxMylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzIgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMzIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDMgcG9zaXRpb24gKGluZGV4IDE1KVxuICogQHJldHVybnMge21hdDR9IEEgbmV3IG1hdDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMobTAwLCBtMDEsIG0wMiwgbTAzLCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0yMCwgbTIxLCBtMjIsIG0yMywgbTMwLCBtMzEsIG0zMiwgbTMzKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgxNik7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMDI7XG4gIG91dFszXSA9IG0wMztcbiAgb3V0WzRdID0gbTEwO1xuICBvdXRbNV0gPSBtMTE7XG4gIG91dFs2XSA9IG0xMjtcbiAgb3V0WzddID0gbTEzO1xuICBvdXRbOF0gPSBtMjA7XG4gIG91dFs5XSA9IG0yMTtcbiAgb3V0WzEwXSA9IG0yMjtcbiAgb3V0WzExXSA9IG0yMztcbiAgb3V0WzEyXSA9IG0zMDtcbiAgb3V0WzEzXSA9IG0zMTtcbiAgb3V0WzE0XSA9IG0zMjtcbiAgb3V0WzE1XSA9IG0zMztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQ0IHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMyBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA1KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA2KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMyBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAzIHBvc2l0aW9uIChpbmRleCA3KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA4KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA5KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxMClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjMgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMwIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDAgcG9zaXRpb24gKGluZGV4IDEyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMSBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxMylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzIgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMzIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDMgcG9zaXRpb24gKGluZGV4IDE1KVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0wMiwgbTAzLCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0yMCwgbTIxLCBtMjIsIG0yMywgbTMwLCBtMzEsIG0zMiwgbTMzKSB7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMDI7XG4gIG91dFszXSA9IG0wMztcbiAgb3V0WzRdID0gbTEwO1xuICBvdXRbNV0gPSBtMTE7XG4gIG91dFs2XSA9IG0xMjtcbiAgb3V0WzddID0gbTEzO1xuICBvdXRbOF0gPSBtMjA7XG4gIG91dFs5XSA9IG0yMTtcbiAgb3V0WzEwXSA9IG0yMjtcbiAgb3V0WzExXSA9IG0yMztcbiAgb3V0WzEyXSA9IG0zMDtcbiAgb3V0WzEzXSA9IG0zMTtcbiAgb3V0WzE0XSA9IG0zMjtcbiAgb3V0WzE1XSA9IG0zMztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgYSBtYXQ0IHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDE7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSAxO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgaWYgKG91dCA9PT0gYSkge1xuICAgIHZhciBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGEwMyA9IGFbM107XG4gICAgdmFyIGExMiA9IGFbNl0sXG4gICAgICBhMTMgPSBhWzddO1xuICAgIHZhciBhMjMgPSBhWzExXTtcbiAgICBvdXRbMV0gPSBhWzRdO1xuICAgIG91dFsyXSA9IGFbOF07XG4gICAgb3V0WzNdID0gYVsxMl07XG4gICAgb3V0WzRdID0gYTAxO1xuICAgIG91dFs2XSA9IGFbOV07XG4gICAgb3V0WzddID0gYVsxM107XG4gICAgb3V0WzhdID0gYTAyO1xuICAgIG91dFs5XSA9IGExMjtcbiAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgb3V0WzEyXSA9IGEwMztcbiAgICBvdXRbMTNdID0gYTEzO1xuICAgIG91dFsxNF0gPSBhMjM7XG4gIH0gZWxzZSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzRdO1xuICAgIG91dFsyXSA9IGFbOF07XG4gICAgb3V0WzNdID0gYVsxMl07XG4gICAgb3V0WzRdID0gYVsxXTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbOV07XG4gICAgb3V0WzddID0gYVsxM107XG4gICAgb3V0WzhdID0gYVsyXTtcbiAgICBvdXRbOV0gPSBhWzZdO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgb3V0WzEyXSA9IGFbM107XG4gICAgb3V0WzEzXSA9IGFbN107XG4gICAgb3V0WzE0XSA9IGFbMTFdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEludmVydHMgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NCB8IG51bGx9IG91dCwgb3IgbnVsbCBpZiBzb3VyY2UgbWF0cml4IGlzIG5vdCBpbnZlcnRpYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgIGEwMSA9IGFbMV0sXG4gICAgYTAyID0gYVsyXSxcbiAgICBhMDMgPSBhWzNdO1xuICB2YXIgYTEwID0gYVs0XSxcbiAgICBhMTEgPSBhWzVdLFxuICAgIGExMiA9IGFbNl0sXG4gICAgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF0sXG4gICAgYTIxID0gYVs5XSxcbiAgICBhMjIgPSBhWzEwXSxcbiAgICBhMjMgPSBhWzExXTtcbiAgdmFyIGEzMCA9IGFbMTJdLFxuICAgIGEzMSA9IGFbMTNdLFxuICAgIGEzMiA9IGFbMTRdLFxuICAgIGEzMyA9IGFbMTVdO1xuICB2YXIgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICB2YXIgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xuICB2YXIgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xuICB2YXIgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICB2YXIgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xuICB2YXIgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xuICB2YXIgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xuICB2YXIgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xuICB2YXIgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xuICB2YXIgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xuICB2YXIgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xuICB2YXIgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xuXG4gIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgdmFyIGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcbiAgaWYgKCFkZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBkZXQgPSAxLjAgLyBkZXQ7XG4gIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xuICBvdXRbMV0gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgb3V0WzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XG4gIG91dFszXSA9IChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0O1xuICBvdXRbNF0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcbiAgb3V0WzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XG4gIG91dFs2XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICBvdXRbN10gPSAoYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxKSAqIGRldDtcbiAgb3V0WzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XG4gIG91dFs5XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuICBvdXRbMTBdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XG4gIG91dFsxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcbiAgb3V0WzEyXSA9IChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0O1xuICBvdXRbMTNdID0gKGEwMCAqIGIwOSAtIGEwMSAqIGIwNyArIGEwMiAqIGIwNikgKiBkZXQ7XG4gIG91dFsxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcbiAgb3V0WzE1XSA9IChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRqb2ludChvdXQsIGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgYTAxID0gYVsxXSxcbiAgICBhMDIgPSBhWzJdLFxuICAgIGEwMyA9IGFbM107XG4gIHZhciBhMTAgPSBhWzRdLFxuICAgIGExMSA9IGFbNV0sXG4gICAgYTEyID0gYVs2XSxcbiAgICBhMTMgPSBhWzddO1xuICB2YXIgYTIwID0gYVs4XSxcbiAgICBhMjEgPSBhWzldLFxuICAgIGEyMiA9IGFbMTBdLFxuICAgIGEyMyA9IGFbMTFdO1xuICB2YXIgYTMwID0gYVsxMl0sXG4gICAgYTMxID0gYVsxM10sXG4gICAgYTMyID0gYVsxNF0sXG4gICAgYTMzID0gYVsxNV07XG4gIHZhciBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gIHZhciBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XG4gIHZhciBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XG4gIHZhciBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gIHZhciBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XG4gIHZhciBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XG4gIHZhciBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XG4gIHZhciBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XG4gIHZhciBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XG4gIHZhciBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XG4gIHZhciBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XG4gIHZhciBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XG4gIG91dFswXSA9IGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOTtcbiAgb3V0WzFdID0gYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5O1xuICBvdXRbMl0gPSBhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDM7XG4gIG91dFszXSA9IGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMztcbiAgb3V0WzRdID0gYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3O1xuICBvdXRbNV0gPSBhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDc7XG4gIG91dFs2XSA9IGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMTtcbiAgb3V0WzddID0gYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxO1xuICBvdXRbOF0gPSBhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDY7XG4gIG91dFs5XSA9IGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNjtcbiAgb3V0WzEwXSA9IGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMDtcbiAgb3V0WzExXSA9IGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMDtcbiAgb3V0WzEyXSA9IGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNjtcbiAgb3V0WzEzXSA9IGEwMCAqIGIwOSAtIGEwMSAqIGIwNyArIGEwMiAqIGIwNjtcbiAgb3V0WzE0XSA9IGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMDtcbiAgb3V0WzE1XSA9IGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICBhMDEgPSBhWzFdLFxuICAgIGEwMiA9IGFbMl0sXG4gICAgYTAzID0gYVszXTtcbiAgdmFyIGExMCA9IGFbNF0sXG4gICAgYTExID0gYVs1XSxcbiAgICBhMTIgPSBhWzZdLFxuICAgIGExMyA9IGFbN107XG4gIHZhciBhMjAgPSBhWzhdLFxuICAgIGEyMSA9IGFbOV0sXG4gICAgYTIyID0gYVsxMF0sXG4gICAgYTIzID0gYVsxMV07XG4gIHZhciBhMzAgPSBhWzEyXSxcbiAgICBhMzEgPSBhWzEzXSxcbiAgICBhMzIgPSBhWzE0XSxcbiAgICBhMzMgPSBhWzE1XTtcbiAgdmFyIGIwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICB2YXIgYjEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XG4gIHZhciBiMiA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcbiAgdmFyIGIzID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xuICB2YXIgYjQgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XG4gIHZhciBiNSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcbiAgdmFyIGI2ID0gYTAwICogYjUgLSBhMDEgKiBiNCArIGEwMiAqIGIzO1xuICB2YXIgYjcgPSBhMTAgKiBiNSAtIGExMSAqIGI0ICsgYTEyICogYjM7XG4gIHZhciBiOCA9IGEyMCAqIGIyIC0gYTIxICogYjEgKyBhMjIgKiBiMDtcbiAgdmFyIGI5ID0gYTMwICogYjIgLSBhMzEgKiBiMSArIGEzMiAqIGIwO1xuXG4gIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgcmV0dXJuIGExMyAqIGI2IC0gYTAzICogYjcgKyBhMzMgKiBiOCAtIGEyMyAqIGI5O1xufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICBhMDEgPSBhWzFdLFxuICAgIGEwMiA9IGFbMl0sXG4gICAgYTAzID0gYVszXTtcbiAgdmFyIGExMCA9IGFbNF0sXG4gICAgYTExID0gYVs1XSxcbiAgICBhMTIgPSBhWzZdLFxuICAgIGExMyA9IGFbN107XG4gIHZhciBhMjAgPSBhWzhdLFxuICAgIGEyMSA9IGFbOV0sXG4gICAgYTIyID0gYVsxMF0sXG4gICAgYTIzID0gYVsxMV07XG4gIHZhciBhMzAgPSBhWzEyXSxcbiAgICBhMzEgPSBhWzEzXSxcbiAgICBhMzIgPSBhWzE0XSxcbiAgICBhMzMgPSBhWzE1XTtcblxuICAvLyBDYWNoZSBvbmx5IHRoZSBjdXJyZW50IGxpbmUgb2YgdGhlIHNlY29uZCBtYXRyaXhcbiAgdmFyIGIwID0gYlswXSxcbiAgICBiMSA9IGJbMV0sXG4gICAgYjIgPSBiWzJdLFxuICAgIGIzID0gYlszXTtcbiAgb3V0WzBdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XG4gIG91dFsxXSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xuICBvdXRbMl0gPSBiMCAqIGEwMiArIGIxICogYTEyICsgYjIgKiBhMjIgKyBiMyAqIGEzMjtcbiAgb3V0WzNdID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XG4gIGIwID0gYls0XTtcbiAgYjEgPSBiWzVdO1xuICBiMiA9IGJbNl07XG4gIGIzID0gYls3XTtcbiAgb3V0WzRdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XG4gIG91dFs1XSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xuICBvdXRbNl0gPSBiMCAqIGEwMiArIGIxICogYTEyICsgYjIgKiBhMjIgKyBiMyAqIGEzMjtcbiAgb3V0WzddID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XG4gIGIwID0gYls4XTtcbiAgYjEgPSBiWzldO1xuICBiMiA9IGJbMTBdO1xuICBiMyA9IGJbMTFdO1xuICBvdXRbOF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgb3V0WzldID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gIG91dFsxMF0gPSBiMCAqIGEwMiArIGIxICogYTEyICsgYjIgKiBhMjIgKyBiMyAqIGEzMjtcbiAgb3V0WzExXSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xuICBiMCA9IGJbMTJdO1xuICBiMSA9IGJbMTNdO1xuICBiMiA9IGJbMTRdO1xuICBiMyA9IGJbMTVdO1xuICBvdXRbMTJdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XG4gIG91dFsxM10gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcbiAgb3V0WzE0XSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICBvdXRbMTVdID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNsYXRlIGEgbWF0NCBieSB0aGUgZ2l2ZW4gdmVjdG9yXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdiB2ZWN0b3IgdG8gdHJhbnNsYXRlIGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUob3V0LCBhLCB2KSB7XG4gIHZhciB4ID0gdlswXSxcbiAgICB5ID0gdlsxXSxcbiAgICB6ID0gdlsyXTtcbiAgdmFyIGEwMCwgYTAxLCBhMDIsIGEwMztcbiAgdmFyIGExMCwgYTExLCBhMTIsIGExMztcbiAgdmFyIGEyMCwgYTIxLCBhMjIsIGEyMztcbiAgaWYgKGEgPT09IG91dCkge1xuICAgIG91dFsxMl0gPSBhWzBdICogeCArIGFbNF0gKiB5ICsgYVs4XSAqIHogKyBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxXSAqIHggKyBhWzVdICogeSArIGFbOV0gKiB6ICsgYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMl0gKiB4ICsgYVs2XSAqIHkgKyBhWzEwXSAqIHogKyBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVszXSAqIHggKyBhWzddICogeSArIGFbMTFdICogeiArIGFbMTVdO1xuICB9IGVsc2Uge1xuICAgIGEwMCA9IGFbMF07XG4gICAgYTAxID0gYVsxXTtcbiAgICBhMDIgPSBhWzJdO1xuICAgIGEwMyA9IGFbM107XG4gICAgYTEwID0gYVs0XTtcbiAgICBhMTEgPSBhWzVdO1xuICAgIGExMiA9IGFbNl07XG4gICAgYTEzID0gYVs3XTtcbiAgICBhMjAgPSBhWzhdO1xuICAgIGEyMSA9IGFbOV07XG4gICAgYTIyID0gYVsxMF07XG4gICAgYTIzID0gYVsxMV07XG4gICAgb3V0WzBdID0gYTAwO1xuICAgIG91dFsxXSA9IGEwMTtcbiAgICBvdXRbMl0gPSBhMDI7XG4gICAgb3V0WzNdID0gYTAzO1xuICAgIG91dFs0XSA9IGExMDtcbiAgICBvdXRbNV0gPSBhMTE7XG4gICAgb3V0WzZdID0gYTEyO1xuICAgIG91dFs3XSA9IGExMztcbiAgICBvdXRbOF0gPSBhMjA7XG4gICAgb3V0WzldID0gYTIxO1xuICAgIG91dFsxMF0gPSBhMjI7XG4gICAgb3V0WzExXSA9IGEyMztcbiAgICBvdXRbMTJdID0gYTAwICogeCArIGExMCAqIHkgKyBhMjAgKiB6ICsgYVsxMl07XG4gICAgb3V0WzEzXSA9IGEwMSAqIHggKyBhMTEgKiB5ICsgYTIxICogeiArIGFbMTNdO1xuICAgIG91dFsxNF0gPSBhMDIgKiB4ICsgYTEyICogeSArIGEyMiAqIHogKyBhWzE0XTtcbiAgICBvdXRbMTVdID0gYTAzICogeCArIGExMyAqIHkgKyBhMjMgKiB6ICsgYVsxNV07XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTY2FsZXMgdGhlIG1hdDQgYnkgdGhlIGRpbWVuc2lvbnMgaW4gdGhlIGdpdmVuIHZlYzMgbm90IHVzaW5nIHZlY3Rvcml6YXRpb25cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgdGhlIHZlYzMgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgdikge1xuICB2YXIgeCA9IHZbMF0sXG4gICAgeSA9IHZbMV0sXG4gICAgeiA9IHZbMl07XG4gIG91dFswXSA9IGFbMF0gKiB4O1xuICBvdXRbMV0gPSBhWzFdICogeDtcbiAgb3V0WzJdID0gYVsyXSAqIHg7XG4gIG91dFszXSA9IGFbM10gKiB4O1xuICBvdXRbNF0gPSBhWzRdICogeTtcbiAgb3V0WzVdID0gYVs1XSAqIHk7XG4gIG91dFs2XSA9IGFbNl0gKiB5O1xuICBvdXRbN10gPSBhWzddICogeTtcbiAgb3V0WzhdID0gYVs4XSAqIHo7XG4gIG91dFs5XSA9IGFbOV0gKiB6O1xuICBvdXRbMTBdID0gYVsxMF0gKiB6O1xuICBvdXRbMTFdID0gYVsxMV0gKiB6O1xuICBvdXRbMTJdID0gYVsxMl07XG4gIG91dFsxM10gPSBhWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdO1xuICBvdXRbMTVdID0gYVsxNV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDQgYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgZ2l2ZW4gYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBheGlzIHRoZSBheGlzIHRvIHJvdGF0ZSBhcm91bmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCwgYXhpcykge1xuICB2YXIgeCA9IGF4aXNbMF0sXG4gICAgeSA9IGF4aXNbMV0sXG4gICAgeiA9IGF4aXNbMl07XG4gIHZhciBsZW4gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcbiAgdmFyIHMsIGMsIHQ7XG4gIHZhciBhMDAsIGEwMSwgYTAyLCBhMDM7XG4gIHZhciBhMTAsIGExMSwgYTEyLCBhMTM7XG4gIHZhciBhMjAsIGEyMSwgYTIyLCBhMjM7XG4gIHZhciBiMDAsIGIwMSwgYjAyO1xuICB2YXIgYjEwLCBiMTEsIGIxMjtcbiAgdmFyIGIyMCwgYjIxLCBiMjI7XG4gIGlmIChsZW4gPCBnbE1hdHJpeC5FUFNJTE9OKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgbGVuID0gMSAvIGxlbjtcbiAgeCAqPSBsZW47XG4gIHkgKj0gbGVuO1xuICB6ICo9IGxlbjtcbiAgcyA9IE1hdGguc2luKHJhZCk7XG4gIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB0ID0gMSAtIGM7XG4gIGEwMCA9IGFbMF07XG4gIGEwMSA9IGFbMV07XG4gIGEwMiA9IGFbMl07XG4gIGEwMyA9IGFbM107XG4gIGExMCA9IGFbNF07XG4gIGExMSA9IGFbNV07XG4gIGExMiA9IGFbNl07XG4gIGExMyA9IGFbN107XG4gIGEyMCA9IGFbOF07XG4gIGEyMSA9IGFbOV07XG4gIGEyMiA9IGFbMTBdO1xuICBhMjMgPSBhWzExXTtcblxuICAvLyBDb25zdHJ1Y3QgdGhlIGVsZW1lbnRzIG9mIHRoZSByb3RhdGlvbiBtYXRyaXhcbiAgYjAwID0geCAqIHggKiB0ICsgYztcbiAgYjAxID0geSAqIHggKiB0ICsgeiAqIHM7XG4gIGIwMiA9IHogKiB4ICogdCAtIHkgKiBzO1xuICBiMTAgPSB4ICogeSAqIHQgLSB6ICogcztcbiAgYjExID0geSAqIHkgKiB0ICsgYztcbiAgYjEyID0geiAqIHkgKiB0ICsgeCAqIHM7XG4gIGIyMCA9IHggKiB6ICogdCArIHkgKiBzO1xuICBiMjEgPSB5ICogeiAqIHQgLSB4ICogcztcbiAgYjIyID0geiAqIHogKiB0ICsgYztcblxuICAvLyBQZXJmb3JtIHJvdGF0aW9uLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICBvdXRbMF0gPSBhMDAgKiBiMDAgKyBhMTAgKiBiMDEgKyBhMjAgKiBiMDI7XG4gIG91dFsxXSA9IGEwMSAqIGIwMCArIGExMSAqIGIwMSArIGEyMSAqIGIwMjtcbiAgb3V0WzJdID0gYTAyICogYjAwICsgYTEyICogYjAxICsgYTIyICogYjAyO1xuICBvdXRbM10gPSBhMDMgKiBiMDAgKyBhMTMgKiBiMDEgKyBhMjMgKiBiMDI7XG4gIG91dFs0XSA9IGEwMCAqIGIxMCArIGExMCAqIGIxMSArIGEyMCAqIGIxMjtcbiAgb3V0WzVdID0gYTAxICogYjEwICsgYTExICogYjExICsgYTIxICogYjEyO1xuICBvdXRbNl0gPSBhMDIgKiBiMTAgKyBhMTIgKiBiMTEgKyBhMjIgKiBiMTI7XG4gIG91dFs3XSA9IGEwMyAqIGIxMCArIGExMyAqIGIxMSArIGEyMyAqIGIxMjtcbiAgb3V0WzhdID0gYTAwICogYjIwICsgYTEwICogYjIxICsgYTIwICogYjIyO1xuICBvdXRbOV0gPSBhMDEgKiBiMjAgKyBhMTEgKiBiMjEgKyBhMjEgKiBiMjI7XG4gIG91dFsxMF0gPSBhMDIgKiBiMjAgKyBhMTIgKiBiMjEgKyBhMjIgKiBiMjI7XG4gIG91dFsxMV0gPSBhMDMgKiBiMjAgKyBhMTMgKiBiMjEgKyBhMjMgKiBiMjI7XG4gIGlmIChhICE9PSBvdXQpIHtcbiAgICAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCBsYXN0IHJvd1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWCBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTtcbiAgdmFyIGExMCA9IGFbNF07XG4gIHZhciBhMTEgPSBhWzVdO1xuICB2YXIgYTEyID0gYVs2XTtcbiAgdmFyIGExMyA9IGFbN107XG4gIHZhciBhMjAgPSBhWzhdO1xuICB2YXIgYTIxID0gYVs5XTtcbiAgdmFyIGEyMiA9IGFbMTBdO1xuICB2YXIgYTIzID0gYVsxMV07XG4gIGlmIChhICE9PSBvdXQpIHtcbiAgICAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gIH1cblxuICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gIG91dFs0XSA9IGExMCAqIGMgKyBhMjAgKiBzO1xuICBvdXRbNV0gPSBhMTEgKiBjICsgYTIxICogcztcbiAgb3V0WzZdID0gYTEyICogYyArIGEyMiAqIHM7XG4gIG91dFs3XSA9IGExMyAqIGMgKyBhMjMgKiBzO1xuICBvdXRbOF0gPSBhMjAgKiBjIC0gYTEwICogcztcbiAgb3V0WzldID0gYTIxICogYyAtIGExMSAqIHM7XG4gIG91dFsxMF0gPSBhMjIgKiBjIC0gYTEyICogcztcbiAgb3V0WzExXSA9IGEyMyAqIGMgLSBhMTMgKiBzO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTtcbiAgdmFyIGEwMCA9IGFbMF07XG4gIHZhciBhMDEgPSBhWzFdO1xuICB2YXIgYTAyID0gYVsyXTtcbiAgdmFyIGEwMyA9IGFbM107XG4gIHZhciBhMjAgPSBhWzhdO1xuICB2YXIgYTIxID0gYVs5XTtcbiAgdmFyIGEyMiA9IGFbMTBdO1xuICB2YXIgYTIzID0gYVsxMV07XG4gIGlmIChhICE9PSBvdXQpIHtcbiAgICAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbNl07XG4gICAgb3V0WzddID0gYVs3XTtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gIH1cblxuICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gIG91dFswXSA9IGEwMCAqIGMgLSBhMjAgKiBzO1xuICBvdXRbMV0gPSBhMDEgKiBjIC0gYTIxICogcztcbiAgb3V0WzJdID0gYTAyICogYyAtIGEyMiAqIHM7XG4gIG91dFszXSA9IGEwMyAqIGMgLSBhMjMgKiBzO1xuICBvdXRbOF0gPSBhMDAgKiBzICsgYTIwICogYztcbiAgb3V0WzldID0gYTAxICogcyArIGEyMSAqIGM7XG4gIG91dFsxMF0gPSBhMDIgKiBzICsgYTIyICogYztcbiAgb3V0WzExXSA9IGEwMyAqIHMgKyBhMjMgKiBjO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWiBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTtcbiAgdmFyIGEwMCA9IGFbMF07XG4gIHZhciBhMDEgPSBhWzFdO1xuICB2YXIgYTAyID0gYVsyXTtcbiAgdmFyIGEwMyA9IGFbM107XG4gIHZhciBhMTAgPSBhWzRdO1xuICB2YXIgYTExID0gYVs1XTtcbiAgdmFyIGExMiA9IGFbNl07XG4gIHZhciBhMTMgPSBhWzddO1xuICBpZiAoYSAhPT0gb3V0KSB7XG4gICAgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICBvdXRbOF0gPSBhWzhdO1xuICAgIG91dFs5XSA9IGFbOV07XG4gICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgIG91dFsxMV0gPSBhWzExXTtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gIH1cblxuICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gIG91dFswXSA9IGEwMCAqIGMgKyBhMTAgKiBzO1xuICBvdXRbMV0gPSBhMDEgKiBjICsgYTExICogcztcbiAgb3V0WzJdID0gYTAyICogYyArIGExMiAqIHM7XG4gIG91dFszXSA9IGEwMyAqIGMgKyBhMTMgKiBzO1xuICBvdXRbNF0gPSBhMTAgKiBjIC0gYTAwICogcztcbiAgb3V0WzVdID0gYTExICogYyAtIGEwMSAqIHM7XG4gIG91dFs2XSA9IGExMiAqIGMgLSBhMDIgKiBzO1xuICBvdXRbN10gPSBhMTMgKiBjIC0gYTAzICogcztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3IgdHJhbnNsYXRpb25cbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIGRlc3QsIHZlYyk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVHJhbnNsYXRpb24ob3V0LCB2KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDE7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSAxO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF07XG4gIG91dFsxM10gPSB2WzFdO1xuICBvdXRbMTRdID0gdlsyXTtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHNjYWxpbmdcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQuc2NhbGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdiBTY2FsaW5nIHZlY3RvclxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVNjYWxpbmcob3V0LCB2KSB7XG4gIG91dFswXSA9IHZbMF07XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IHZbMV07XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSB2WzJdO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgZ2l2ZW4gYW5nbGUgYXJvdW5kIGEgZ2l2ZW4gYXhpc1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC5yb3RhdGUoZGVzdCwgZGVzdCwgcmFkLCBheGlzKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGF4aXMgdGhlIGF4aXMgdG8gcm90YXRlIGFyb3VuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uKG91dCwgcmFkLCBheGlzKSB7XG4gIHZhciB4ID0gYXhpc1swXSxcbiAgICB5ID0gYXhpc1sxXSxcbiAgICB6ID0gYXhpc1syXTtcbiAgdmFyIGxlbiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICB2YXIgcywgYywgdDtcbiAgaWYgKGxlbiA8IGdsTWF0cml4LkVQU0lMT04pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBsZW4gPSAxIC8gbGVuO1xuICB4ICo9IGxlbjtcbiAgeSAqPSBsZW47XG4gIHogKj0gbGVuO1xuICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgYyA9IE1hdGguY29zKHJhZCk7XG4gIHQgPSAxIC0gYztcblxuICAvLyBQZXJmb3JtIHJvdGF0aW9uLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICBvdXRbMF0gPSB4ICogeCAqIHQgKyBjO1xuICBvdXRbMV0gPSB5ICogeCAqIHQgKyB6ICogcztcbiAgb3V0WzJdID0geiAqIHggKiB0IC0geSAqIHM7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHggKiB5ICogdCAtIHogKiBzO1xuICBvdXRbNV0gPSB5ICogeSAqIHQgKyBjO1xuICBvdXRbNl0gPSB6ICogeSAqIHQgKyB4ICogcztcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0geCAqIHogKiB0ICsgeSAqIHM7XG4gIG91dFs5XSA9IHkgKiB6ICogdCAtIHggKiBzO1xuICBvdXRbMTBdID0geiAqIHogKiB0ICsgYztcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBYIGF4aXNcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQucm90YXRlWChkZXN0LCBkZXN0LCByYWQpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tWFJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpO1xuXG4gIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gYztcbiAgb3V0WzZdID0gcztcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gLXM7XG4gIG91dFsxMF0gPSBjO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFkgYXhpc1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC5yb3RhdGVZKGRlc3QsIGRlc3QsIHJhZCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21ZUm90YXRpb24ob3V0LCByYWQpIHtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQpO1xuICB2YXIgYyA9IE1hdGguY29zKHJhZCk7XG5cbiAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICBvdXRbMF0gPSBjO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAtcztcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gMTtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gcztcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IGM7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWiBheGlzXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnJvdGF0ZVooZGVzdCwgZGVzdCwgcmFkKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVpSb3RhdGlvbihvdXQsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTtcblxuICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gIG91dFswXSA9IGM7XG4gIG91dFsxXSA9IHM7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IC1zO1xuICBvdXRbNV0gPSBjO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gMTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24gYW5kIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqICAgICBsZXQgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgbWF0NC5mcm9tUXVhdChxdWF0TWF0LCBxdWF0KTtcbiAqICAgICBtYXQ0Lm11bHRpcGx5KGRlc3QsIGRlc3QsIHF1YXRNYXQpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uKG91dCwgcSwgdikge1xuICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgdmFyIHggPSBxWzBdLFxuICAgIHkgPSBxWzFdLFxuICAgIHogPSBxWzJdLFxuICAgIHcgPSBxWzNdO1xuICB2YXIgeDIgPSB4ICsgeDtcbiAgdmFyIHkyID0geSArIHk7XG4gIHZhciB6MiA9IHogKyB6O1xuICB2YXIgeHggPSB4ICogeDI7XG4gIHZhciB4eSA9IHggKiB5MjtcbiAgdmFyIHh6ID0geCAqIHoyO1xuICB2YXIgeXkgPSB5ICogeTI7XG4gIHZhciB5eiA9IHkgKiB6MjtcbiAgdmFyIHp6ID0geiAqIHoyO1xuICB2YXIgd3ggPSB3ICogeDI7XG4gIHZhciB3eSA9IHcgKiB5MjtcbiAgdmFyIHd6ID0gdyAqIHoyO1xuICBvdXRbMF0gPSAxIC0gKHl5ICsgenopO1xuICBvdXRbMV0gPSB4eSArIHd6O1xuICBvdXRbMl0gPSB4eiAtIHd5O1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB4eSAtIHd6O1xuICBvdXRbNV0gPSAxIC0gKHh4ICsgenopO1xuICBvdXRbNl0gPSB5eiArIHd4O1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB4eiArIHd5O1xuICBvdXRbOV0gPSB5eiAtIHd4O1xuICBvdXRbMTBdID0gMSAtICh4eCArIHl5KTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSB2WzBdO1xuICBvdXRbMTNdID0gdlsxXTtcbiAgb3V0WzE0XSA9IHZbMl07XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgbWF0NCBmcm9tIGEgZHVhbCBxdWF0LlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IE1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seVF1YXQyfSBhIER1YWwgUXVhdGVybmlvblxuICogQHJldHVybnMge21hdDR9IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21RdWF0MihvdXQsIGEpIHtcbiAgdmFyIHRyYW5zbGF0aW9uID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIHZhciBieCA9IC1hWzBdLFxuICAgIGJ5ID0gLWFbMV0sXG4gICAgYnogPSAtYVsyXSxcbiAgICBidyA9IGFbM10sXG4gICAgYXggPSBhWzRdLFxuICAgIGF5ID0gYVs1XSxcbiAgICBheiA9IGFbNl0sXG4gICAgYXcgPSBhWzddO1xuICB2YXIgbWFnbml0dWRlID0gYnggKiBieCArIGJ5ICogYnkgKyBieiAqIGJ6ICsgYncgKiBidztcbiAgLy9Pbmx5IHNjYWxlIGlmIGl0IG1ha2VzIHNlbnNlXG4gIGlmIChtYWduaXR1ZGUgPiAwKSB7XG4gICAgdHJhbnNsYXRpb25bMF0gPSAoYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieSkgKiAyIC8gbWFnbml0dWRlO1xuICAgIHRyYW5zbGF0aW9uWzFdID0gKGF5ICogYncgKyBhdyAqIGJ5ICsgYXogKiBieCAtIGF4ICogYnopICogMiAvIG1hZ25pdHVkZTtcbiAgICB0cmFuc2xhdGlvblsyXSA9IChheiAqIGJ3ICsgYXcgKiBieiArIGF4ICogYnkgLSBheSAqIGJ4KSAqIDIgLyBtYWduaXR1ZGU7XG4gIH0gZWxzZSB7XG4gICAgdHJhbnNsYXRpb25bMF0gPSAoYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieSkgKiAyO1xuICAgIHRyYW5zbGF0aW9uWzFdID0gKGF5ICogYncgKyBhdyAqIGJ5ICsgYXogKiBieCAtIGF4ICogYnopICogMjtcbiAgICB0cmFuc2xhdGlvblsyXSA9IChheiAqIGJ3ICsgYXcgKiBieiArIGF4ICogYnkgLSBheSAqIGJ4KSAqIDI7XG4gIH1cbiAgZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24ob3V0LCBhLCB0cmFuc2xhdGlvbik7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdHJhbnNsYXRpb24gdmVjdG9yIGNvbXBvbmVudCBvZiBhIHRyYW5zZm9ybWF0aW9uXG4gKiAgbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uLFxuICogIHRoZSByZXR1cm5lZCB2ZWN0b3Igd2lsbCBiZSB0aGUgc2FtZSBhcyB0aGUgdHJhbnNsYXRpb24gdmVjdG9yXG4gKiAgb3JpZ2luYWxseSBzdXBwbGllZC5cbiAqIEBwYXJhbSAge3ZlYzN9IG91dCBWZWN0b3IgdG8gcmVjZWl2ZSB0cmFuc2xhdGlvbiBjb21wb25lbnRcbiAqIEBwYXJhbSAge1JlYWRvbmx5TWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcbiAqIEByZXR1cm4ge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb24ob3V0LCBtYXQpIHtcbiAgb3V0WzBdID0gbWF0WzEyXTtcbiAgb3V0WzFdID0gbWF0WzEzXTtcbiAgb3V0WzJdID0gbWF0WzE0XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzY2FsaW5nIGZhY3RvciBjb21wb25lbnQgb2YgYSB0cmFuc2Zvcm1hdGlvblxuICogIG1hdHJpeC4gSWYgYSBtYXRyaXggaXMgYnVpbHQgd2l0aCBmcm9tUm90YXRpb25UcmFuc2xhdGlvblNjYWxlXG4gKiAgd2l0aCBhIG5vcm1hbGl6ZWQgUXVhdGVybmlvbiBwYXJhbWV0ZXIsIHRoZSByZXR1cm5lZCB2ZWN0b3Igd2lsbCBiZVxuICogIHRoZSBzYW1lIGFzIHRoZSBzY2FsaW5nIHZlY3RvclxuICogIG9yaWdpbmFsbHkgc3VwcGxpZWQuXG4gKiBAcGFyYW0gIHt2ZWMzfSBvdXQgVmVjdG9yIHRvIHJlY2VpdmUgc2NhbGluZyBmYWN0b3IgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtSZWFkb25seU1hdDR9IG1hdCBNYXRyaXggdG8gYmUgZGVjb21wb3NlZCAoaW5wdXQpXG4gKiBAcmV0dXJuIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNjYWxpbmcob3V0LCBtYXQpIHtcbiAgdmFyIG0xMSA9IG1hdFswXTtcbiAgdmFyIG0xMiA9IG1hdFsxXTtcbiAgdmFyIG0xMyA9IG1hdFsyXTtcbiAgdmFyIG0yMSA9IG1hdFs0XTtcbiAgdmFyIG0yMiA9IG1hdFs1XTtcbiAgdmFyIG0yMyA9IG1hdFs2XTtcbiAgdmFyIG0zMSA9IG1hdFs4XTtcbiAgdmFyIG0zMiA9IG1hdFs5XTtcbiAgdmFyIG0zMyA9IG1hdFsxMF07XG4gIG91dFswXSA9IE1hdGguc3FydChtMTEgKiBtMTEgKyBtMTIgKiBtMTIgKyBtMTMgKiBtMTMpO1xuICBvdXRbMV0gPSBNYXRoLnNxcnQobTIxICogbTIxICsgbTIyICogbTIyICsgbTIzICogbTIzKTtcbiAgb3V0WzJdID0gTWF0aC5zcXJ0KG0zMSAqIG0zMSArIG0zMiAqIG0zMiArIG0zMyAqIG0zMyk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHF1YXRlcm5pb24gcmVwcmVzZW50aW5nIHRoZSByb3RhdGlvbmFsIGNvbXBvbmVudFxuICogIG9mIGEgdHJhbnNmb3JtYXRpb24gbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoXG4gKiAgZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24sIHRoZSByZXR1cm5lZCBxdWF0ZXJuaW9uIHdpbGwgYmUgdGhlXG4gKiAgc2FtZSBhcyB0aGUgcXVhdGVybmlvbiBvcmlnaW5hbGx5IHN1cHBsaWVkLlxuICogQHBhcmFtIHtxdWF0fSBvdXQgUXVhdGVybmlvbiB0byByZWNlaXZlIHRoZSByb3RhdGlvbiBjb21wb25lbnRcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxuICogQHJldHVybiB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3RhdGlvbihvdXQsIG1hdCkge1xuICB2YXIgc2NhbGluZyA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICBnZXRTY2FsaW5nKHNjYWxpbmcsIG1hdCk7XG4gIHZhciBpczEgPSAxIC8gc2NhbGluZ1swXTtcbiAgdmFyIGlzMiA9IDEgLyBzY2FsaW5nWzFdO1xuICB2YXIgaXMzID0gMSAvIHNjYWxpbmdbMl07XG4gIHZhciBzbTExID0gbWF0WzBdICogaXMxO1xuICB2YXIgc20xMiA9IG1hdFsxXSAqIGlzMjtcbiAgdmFyIHNtMTMgPSBtYXRbMl0gKiBpczM7XG4gIHZhciBzbTIxID0gbWF0WzRdICogaXMxO1xuICB2YXIgc20yMiA9IG1hdFs1XSAqIGlzMjtcbiAgdmFyIHNtMjMgPSBtYXRbNl0gKiBpczM7XG4gIHZhciBzbTMxID0gbWF0WzhdICogaXMxO1xuICB2YXIgc20zMiA9IG1hdFs5XSAqIGlzMjtcbiAgdmFyIHNtMzMgPSBtYXRbMTBdICogaXMzO1xuICB2YXIgdHJhY2UgPSBzbTExICsgc20yMiArIHNtMzM7XG4gIHZhciBTID0gMDtcbiAgaWYgKHRyYWNlID4gMCkge1xuICAgIFMgPSBNYXRoLnNxcnQodHJhY2UgKyAxLjApICogMjtcbiAgICBvdXRbM10gPSAwLjI1ICogUztcbiAgICBvdXRbMF0gPSAoc20yMyAtIHNtMzIpIC8gUztcbiAgICBvdXRbMV0gPSAoc20zMSAtIHNtMTMpIC8gUztcbiAgICBvdXRbMl0gPSAoc20xMiAtIHNtMjEpIC8gUztcbiAgfSBlbHNlIGlmIChzbTExID4gc20yMiAmJiBzbTExID4gc20zMykge1xuICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgc20xMSAtIHNtMjIgLSBzbTMzKSAqIDI7XG4gICAgb3V0WzNdID0gKHNtMjMgLSBzbTMyKSAvIFM7XG4gICAgb3V0WzBdID0gMC4yNSAqIFM7XG4gICAgb3V0WzFdID0gKHNtMTIgKyBzbTIxKSAvIFM7XG4gICAgb3V0WzJdID0gKHNtMzEgKyBzbTEzKSAvIFM7XG4gIH0gZWxzZSBpZiAoc20yMiA+IHNtMzMpIHtcbiAgICBTID0gTWF0aC5zcXJ0KDEuMCArIHNtMjIgLSBzbTExIC0gc20zMykgKiAyO1xuICAgIG91dFszXSA9IChzbTMxIC0gc20xMykgLyBTO1xuICAgIG91dFswXSA9IChzbTEyICsgc20yMSkgLyBTO1xuICAgIG91dFsxXSA9IDAuMjUgKiBTO1xuICAgIG91dFsyXSA9IChzbTIzICsgc20zMikgLyBTO1xuICB9IGVsc2Uge1xuICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgc20zMyAtIHNtMTEgLSBzbTIyKSAqIDI7XG4gICAgb3V0WzNdID0gKHNtMTIgLSBzbTIxKSAvIFM7XG4gICAgb3V0WzBdID0gKHNtMzEgKyBzbTEzKSAvIFM7XG4gICAgb3V0WzFdID0gKHNtMjMgKyBzbTMyKSAvIFM7XG4gICAgb3V0WzJdID0gMC4yNSAqIFM7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBEZWNvbXBvc2VzIGEgdHJhbnNmb3JtYXRpb24gbWF0cml4IGludG8gaXRzIHJvdGF0aW9uLCB0cmFuc2xhdGlvblxuICogYW5kIHNjYWxlIGNvbXBvbmVudHMuIFJldHVybnMgb25seSB0aGUgcm90YXRpb24gY29tcG9uZW50XG4gKiBAcGFyYW0gIHtxdWF0fSBvdXRfciBRdWF0ZXJuaW9uIHRvIHJlY2VpdmUgdGhlIHJvdGF0aW9uIGNvbXBvbmVudFxuICogQHBhcmFtICB7dmVjM30gb3V0X3QgVmVjdG9yIHRvIHJlY2VpdmUgdGhlIHRyYW5zbGF0aW9uIHZlY3RvclxuICogQHBhcmFtICB7dmVjM30gb3V0X3MgVmVjdG9yIHRvIHJlY2VpdmUgdGhlIHNjYWxpbmcgZmFjdG9yXG4gKiBAcGFyYW0gIHtSZWFkb25seU1hdDR9IG1hdCBNYXRyaXggdG8gYmUgZGVjb21wb3NlZCAoaW5wdXQpXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0X3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29tcG9zZShvdXRfciwgb3V0X3QsIG91dF9zLCBtYXQpIHtcbiAgb3V0X3RbMF0gPSBtYXRbMTJdO1xuICBvdXRfdFsxXSA9IG1hdFsxM107XG4gIG91dF90WzJdID0gbWF0WzE0XTtcbiAgdmFyIG0xMSA9IG1hdFswXTtcbiAgdmFyIG0xMiA9IG1hdFsxXTtcbiAgdmFyIG0xMyA9IG1hdFsyXTtcbiAgdmFyIG0yMSA9IG1hdFs0XTtcbiAgdmFyIG0yMiA9IG1hdFs1XTtcbiAgdmFyIG0yMyA9IG1hdFs2XTtcbiAgdmFyIG0zMSA9IG1hdFs4XTtcbiAgdmFyIG0zMiA9IG1hdFs5XTtcbiAgdmFyIG0zMyA9IG1hdFsxMF07XG4gIG91dF9zWzBdID0gTWF0aC5zcXJ0KG0xMSAqIG0xMSArIG0xMiAqIG0xMiArIG0xMyAqIG0xMyk7XG4gIG91dF9zWzFdID0gTWF0aC5zcXJ0KG0yMSAqIG0yMSArIG0yMiAqIG0yMiArIG0yMyAqIG0yMyk7XG4gIG91dF9zWzJdID0gTWF0aC5zcXJ0KG0zMSAqIG0zMSArIG0zMiAqIG0zMiArIG0zMyAqIG0zMyk7XG4gIHZhciBpczEgPSAxIC8gb3V0X3NbMF07XG4gIHZhciBpczIgPSAxIC8gb3V0X3NbMV07XG4gIHZhciBpczMgPSAxIC8gb3V0X3NbMl07XG4gIHZhciBzbTExID0gbTExICogaXMxO1xuICB2YXIgc20xMiA9IG0xMiAqIGlzMjtcbiAgdmFyIHNtMTMgPSBtMTMgKiBpczM7XG4gIHZhciBzbTIxID0gbTIxICogaXMxO1xuICB2YXIgc20yMiA9IG0yMiAqIGlzMjtcbiAgdmFyIHNtMjMgPSBtMjMgKiBpczM7XG4gIHZhciBzbTMxID0gbTMxICogaXMxO1xuICB2YXIgc20zMiA9IG0zMiAqIGlzMjtcbiAgdmFyIHNtMzMgPSBtMzMgKiBpczM7XG4gIHZhciB0cmFjZSA9IHNtMTEgKyBzbTIyICsgc20zMztcbiAgdmFyIFMgPSAwO1xuICBpZiAodHJhY2UgPiAwKSB7XG4gICAgUyA9IE1hdGguc3FydCh0cmFjZSArIDEuMCkgKiAyO1xuICAgIG91dF9yWzNdID0gMC4yNSAqIFM7XG4gICAgb3V0X3JbMF0gPSAoc20yMyAtIHNtMzIpIC8gUztcbiAgICBvdXRfclsxXSA9IChzbTMxIC0gc20xMykgLyBTO1xuICAgIG91dF9yWzJdID0gKHNtMTIgLSBzbTIxKSAvIFM7XG4gIH0gZWxzZSBpZiAoc20xMSA+IHNtMjIgJiYgc20xMSA+IHNtMzMpIHtcbiAgICBTID0gTWF0aC5zcXJ0KDEuMCArIHNtMTEgLSBzbTIyIC0gc20zMykgKiAyO1xuICAgIG91dF9yWzNdID0gKHNtMjMgLSBzbTMyKSAvIFM7XG4gICAgb3V0X3JbMF0gPSAwLjI1ICogUztcbiAgICBvdXRfclsxXSA9IChzbTEyICsgc20yMSkgLyBTO1xuICAgIG91dF9yWzJdID0gKHNtMzEgKyBzbTEzKSAvIFM7XG4gIH0gZWxzZSBpZiAoc20yMiA+IHNtMzMpIHtcbiAgICBTID0gTWF0aC5zcXJ0KDEuMCArIHNtMjIgLSBzbTExIC0gc20zMykgKiAyO1xuICAgIG91dF9yWzNdID0gKHNtMzEgLSBzbTEzKSAvIFM7XG4gICAgb3V0X3JbMF0gPSAoc20xMiArIHNtMjEpIC8gUztcbiAgICBvdXRfclsxXSA9IDAuMjUgKiBTO1xuICAgIG91dF9yWzJdID0gKHNtMjMgKyBzbTMyKSAvIFM7XG4gIH0gZWxzZSB7XG4gICAgUyA9IE1hdGguc3FydCgxLjAgKyBzbTMzIC0gc20xMSAtIHNtMjIpICogMjtcbiAgICBvdXRfclszXSA9IChzbTEyIC0gc20yMSkgLyBTO1xuICAgIG91dF9yWzBdID0gKHNtMzEgKyBzbTEzKSAvIFM7XG4gICAgb3V0X3JbMV0gPSAoc20yMyArIHNtMzIpIC8gUztcbiAgICBvdXRfclsyXSA9IDAuMjUgKiBTO1xuICB9XG4gIHJldHVybiBvdXRfcjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLCB2ZWN0b3IgdHJhbnNsYXRpb24gYW5kIHZlY3RvciBzY2FsZVxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqICAgICBsZXQgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgbWF0NC5mcm9tUXVhdChxdWF0TWF0LCBxdWF0KTtcbiAqICAgICBtYXQ0Lm11bHRpcGx5KGRlc3QsIGRlc3QsIHF1YXRNYXQpO1xuICogICAgIG1hdDQuc2NhbGUoZGVzdCwgZGVzdCwgc2NhbGUpXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHMgU2NhbGluZyB2ZWN0b3JcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uU2NhbGUob3V0LCBxLCB2LCBzKSB7XG4gIC8vIFF1YXRlcm5pb24gbWF0aFxuICB2YXIgeCA9IHFbMF0sXG4gICAgeSA9IHFbMV0sXG4gICAgeiA9IHFbMl0sXG4gICAgdyA9IHFbM107XG4gIHZhciB4MiA9IHggKyB4O1xuICB2YXIgeTIgPSB5ICsgeTtcbiAgdmFyIHoyID0geiArIHo7XG4gIHZhciB4eCA9IHggKiB4MjtcbiAgdmFyIHh5ID0geCAqIHkyO1xuICB2YXIgeHogPSB4ICogejI7XG4gIHZhciB5eSA9IHkgKiB5MjtcbiAgdmFyIHl6ID0geSAqIHoyO1xuICB2YXIgenogPSB6ICogejI7XG4gIHZhciB3eCA9IHcgKiB4MjtcbiAgdmFyIHd5ID0gdyAqIHkyO1xuICB2YXIgd3ogPSB3ICogejI7XG4gIHZhciBzeCA9IHNbMF07XG4gIHZhciBzeSA9IHNbMV07XG4gIHZhciBzeiA9IHNbMl07XG4gIG91dFswXSA9ICgxIC0gKHl5ICsgenopKSAqIHN4O1xuICBvdXRbMV0gPSAoeHkgKyB3eikgKiBzeDtcbiAgb3V0WzJdID0gKHh6IC0gd3kpICogc3g7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9ICh4eSAtIHd6KSAqIHN5O1xuICBvdXRbNV0gPSAoMSAtICh4eCArIHp6KSkgKiBzeTtcbiAgb3V0WzZdID0gKHl6ICsgd3gpICogc3k7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9ICh4eiArIHd5KSAqIHN6O1xuICBvdXRbOV0gPSAoeXogLSB3eCkgKiBzejtcbiAgb3V0WzEwXSA9ICgxIC0gKHh4ICsgeXkpKSAqIHN6O1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF07XG4gIG91dFsxM10gPSB2WzFdO1xuICBvdXRbMTRdID0gdlsyXTtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgcXVhdGVybmlvbiByb3RhdGlvbiwgdmVjdG9yIHRyYW5zbGF0aW9uIGFuZCB2ZWN0b3Igc2NhbGUsIHJvdGF0aW5nIGFuZCBzY2FsaW5nIGFyb3VuZCB0aGUgZ2l2ZW4gb3JpZ2luXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCBkZXN0LCB2ZWMpO1xuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIGRlc3QsIG9yaWdpbik7XG4gKiAgICAgbGV0IHF1YXRNYXQgPSBtYXQ0LmNyZWF0ZSgpO1xuICogICAgIG1hdDQuZnJvbVF1YXQocXVhdE1hdCwgcXVhdCk7XG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBkZXN0LCBxdWF0TWF0KTtcbiAqICAgICBtYXQ0LnNjYWxlKGRlc3QsIGRlc3QsIHNjYWxlKVxuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIGRlc3QsIG5lZ2F0aXZlT3JpZ2luKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gcyBTY2FsaW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IG8gVGhlIG9yaWdpbiB2ZWN0b3IgYXJvdW5kIHdoaWNoIHRvIHNjYWxlIGFuZCByb3RhdGVcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uU2NhbGVPcmlnaW4ob3V0LCBxLCB2LCBzLCBvKSB7XG4gIC8vIFF1YXRlcm5pb24gbWF0aFxuICB2YXIgeCA9IHFbMF0sXG4gICAgeSA9IHFbMV0sXG4gICAgeiA9IHFbMl0sXG4gICAgdyA9IHFbM107XG4gIHZhciB4MiA9IHggKyB4O1xuICB2YXIgeTIgPSB5ICsgeTtcbiAgdmFyIHoyID0geiArIHo7XG4gIHZhciB4eCA9IHggKiB4MjtcbiAgdmFyIHh5ID0geCAqIHkyO1xuICB2YXIgeHogPSB4ICogejI7XG4gIHZhciB5eSA9IHkgKiB5MjtcbiAgdmFyIHl6ID0geSAqIHoyO1xuICB2YXIgenogPSB6ICogejI7XG4gIHZhciB3eCA9IHcgKiB4MjtcbiAgdmFyIHd5ID0gdyAqIHkyO1xuICB2YXIgd3ogPSB3ICogejI7XG4gIHZhciBzeCA9IHNbMF07XG4gIHZhciBzeSA9IHNbMV07XG4gIHZhciBzeiA9IHNbMl07XG4gIHZhciBveCA9IG9bMF07XG4gIHZhciBveSA9IG9bMV07XG4gIHZhciBveiA9IG9bMl07XG4gIHZhciBvdXQwID0gKDEgLSAoeXkgKyB6eikpICogc3g7XG4gIHZhciBvdXQxID0gKHh5ICsgd3opICogc3g7XG4gIHZhciBvdXQyID0gKHh6IC0gd3kpICogc3g7XG4gIHZhciBvdXQ0ID0gKHh5IC0gd3opICogc3k7XG4gIHZhciBvdXQ1ID0gKDEgLSAoeHggKyB6eikpICogc3k7XG4gIHZhciBvdXQ2ID0gKHl6ICsgd3gpICogc3k7XG4gIHZhciBvdXQ4ID0gKHh6ICsgd3kpICogc3o7XG4gIHZhciBvdXQ5ID0gKHl6IC0gd3gpICogc3o7XG4gIHZhciBvdXQxMCA9ICgxIC0gKHh4ICsgeXkpKSAqIHN6O1xuICBvdXRbMF0gPSBvdXQwO1xuICBvdXRbMV0gPSBvdXQxO1xuICBvdXRbMl0gPSBvdXQyO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSBvdXQ0O1xuICBvdXRbNV0gPSBvdXQ1O1xuICBvdXRbNl0gPSBvdXQ2O1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSBvdXQ4O1xuICBvdXRbOV0gPSBvdXQ5O1xuICBvdXRbMTBdID0gb3V0MTA7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gdlswXSArIG94IC0gKG91dDAgKiBveCArIG91dDQgKiBveSArIG91dDggKiBveik7XG4gIG91dFsxM10gPSB2WzFdICsgb3kgLSAob3V0MSAqIG94ICsgb3V0NSAqIG95ICsgb3V0OSAqIG96KTtcbiAgb3V0WzE0XSA9IHZbMl0gKyBveiAtIChvdXQyICogb3ggKyBvdXQ2ICogb3kgKyBvdXQxMCAqIG96KTtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyBhIDR4NCBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gcXVhdGVybmlvblxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBxIFF1YXRlcm5pb24gdG8gY3JlYXRlIG1hdHJpeCBmcm9tXG4gKlxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gIHZhciB4ID0gcVswXSxcbiAgICB5ID0gcVsxXSxcbiAgICB6ID0gcVsyXSxcbiAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeXggPSB5ICogeDI7XG4gIHZhciB5eSA9IHkgKiB5MjtcbiAgdmFyIHp4ID0geiAqIHgyO1xuICB2YXIgenkgPSB6ICogeTI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gIG91dFsxXSA9IHl4ICsgd3o7XG4gIG91dFsyXSA9IHp4IC0gd3k7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHl4IC0gd3o7XG4gIG91dFs1XSA9IDEgLSB4eCAtIHp6O1xuICBvdXRbNl0gPSB6eSArIHd4O1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB6eCArIHd5O1xuICBvdXRbOV0gPSB6eSAtIHd4O1xuICBvdXRbMTBdID0gMSAtIHh4IC0geXk7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBmcnVzdHVtIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge051bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBib3R0b20gQm90dG9tIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZydXN0dW0ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICB2YXIgcmwgPSAxIC8gKHJpZ2h0IC0gbGVmdCk7XG4gIHZhciB0YiA9IDEgLyAodG9wIC0gYm90dG9tKTtcbiAgdmFyIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzBdID0gbmVhciAqIDIgKiBybDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gbmVhciAqIDIgKiB0YjtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gKHJpZ2h0ICsgbGVmdCkgKiBybDtcbiAgb3V0WzldID0gKHRvcCArIGJvdHRvbSkgKiB0YjtcbiAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICBvdXRbMTFdID0gLTE7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IGZhciAqIG5lYXIgKiAyICogbmY7XG4gIG91dFsxNV0gPSAwO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHBlcnNwZWN0aXZlIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kcy5cbiAqIFRoZSBuZWFyL2ZhciBjbGlwIHBsYW5lcyBjb3JyZXNwb25kIHRvIGEgbm9ybWFsaXplZCBkZXZpY2UgY29vcmRpbmF0ZSBaIHJhbmdlIG9mIFstMSwgMV0sXG4gKiB3aGljaCBtYXRjaGVzIFdlYkdML09wZW5HTCdzIGNsaXAgdm9sdW1lLlxuICogUGFzc2luZyBudWxsL3VuZGVmaW5lZC9ubyB2YWx1ZSBmb3IgZmFyIHdpbGwgZ2VuZXJhdGUgaW5maW5pdGUgcHJvamVjdGlvbiBtYXRyaXguXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGZvdnkgVmVydGljYWwgZmllbGQgb2YgdmlldyBpbiByYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0IEFzcGVjdCByYXRpby4gdHlwaWNhbGx5IHZpZXdwb3J0IHdpZHRoL2hlaWdodFxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW0sIGNhbiBiZSBudWxsIG9yIEluZmluaXR5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZXJzcGVjdGl2ZU5PKG91dCwgZm92eSwgYXNwZWN0LCBuZWFyLCBmYXIpIHtcbiAgdmFyIGYgPSAxLjAgLyBNYXRoLnRhbihmb3Z5IC8gMik7XG4gIG91dFswXSA9IGYgLyBhc3BlY3Q7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IGY7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMV0gPSAtMTtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTVdID0gMDtcbiAgaWYgKGZhciAhPSBudWxsICYmIGZhciAhPT0gSW5maW5pdHkpIHtcbiAgICB2YXIgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICBvdXRbMTRdID0gMiAqIGZhciAqIG5lYXIgKiBuZjtcbiAgfSBlbHNlIHtcbiAgICBvdXRbMTBdID0gLTE7XG4gICAgb3V0WzE0XSA9IC0yICogbmVhcjtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0NC5wZXJzcGVjdGl2ZU5PfVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgcGVyc3BlY3RpdmUgPSBwZXJzcGVjdGl2ZU5PO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHBlcnNwZWN0aXZlIHByb2plY3Rpb24gbWF0cml4IHN1aXRhYmxlIGZvciBXZWJHUFUgd2l0aCB0aGUgZ2l2ZW4gYm91bmRzLlxuICogVGhlIG5lYXIvZmFyIGNsaXAgcGxhbmVzIGNvcnJlc3BvbmQgdG8gYSBub3JtYWxpemVkIGRldmljZSBjb29yZGluYXRlIFogcmFuZ2Ugb2YgWzAsIDFdLFxuICogd2hpY2ggbWF0Y2hlcyBXZWJHUFUvVnVsa2FuL0RpcmVjdFgvTWV0YWwncyBjbGlwIHZvbHVtZS5cbiAqIFBhc3NpbmcgbnVsbC91bmRlZmluZWQvbm8gdmFsdWUgZm9yIGZhciB3aWxsIGdlbmVyYXRlIGluZmluaXRlIHByb2plY3Rpb24gbWF0cml4LlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBmb3Z5IFZlcnRpY2FsIGZpZWxkIG9mIHZpZXcgaW4gcmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGFzcGVjdCBBc3BlY3QgcmF0aW8uIHR5cGljYWxseSB2aWV3cG9ydCB3aWR0aC9oZWlnaHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtLCBjYW4gYmUgbnVsbCBvciBJbmZpbml0eVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmVaTyhvdXQsIGZvdnksIGFzcGVjdCwgbmVhciwgZmFyKSB7XG4gIHZhciBmID0gMS4wIC8gTWF0aC50YW4oZm92eSAvIDIpO1xuICBvdXRbMF0gPSBmIC8gYXNwZWN0O1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSBmO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTFdID0gLTE7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE1XSA9IDA7XG4gIGlmIChmYXIgIT0gbnVsbCAmJiBmYXIgIT09IEluZmluaXR5KSB7XG4gICAgdmFyIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMTBdID0gZmFyICogbmY7XG4gICAgb3V0WzE0XSA9IGZhciAqIG5lYXIgKiBuZjtcbiAgfSBlbHNlIHtcbiAgICBvdXRbMTBdID0gLTE7XG4gICAgb3V0WzE0XSA9IC1uZWFyO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZmllbGQgb2Ygdmlldy5cbiAqIFRoaXMgaXMgcHJpbWFyaWx5IHVzZWZ1bCBmb3IgZ2VuZXJhdGluZyBwcm9qZWN0aW9uIG1hdHJpY2VzIHRvIGJlIHVzZWRcbiAqIHdpdGggdGhlIHN0aWxsIGV4cGVyaWVtZW50YWwgV2ViVlIgQVBJLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7T2JqZWN0fSBmb3YgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyB2YWx1ZXM6IHVwRGVncmVlcywgZG93bkRlZ3JlZXMsIGxlZnREZWdyZWVzLCByaWdodERlZ3JlZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldyhvdXQsIGZvdiwgbmVhciwgZmFyKSB7XG4gIHZhciB1cFRhbiA9IE1hdGgudGFuKGZvdi51cERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLjApO1xuICB2YXIgZG93blRhbiA9IE1hdGgudGFuKGZvdi5kb3duRGVncmVlcyAqIE1hdGguUEkgLyAxODAuMCk7XG4gIHZhciBsZWZ0VGFuID0gTWF0aC50YW4oZm92LmxlZnREZWdyZWVzICogTWF0aC5QSSAvIDE4MC4wKTtcbiAgdmFyIHJpZ2h0VGFuID0gTWF0aC50YW4oZm92LnJpZ2h0RGVncmVlcyAqIE1hdGguUEkgLyAxODAuMCk7XG4gIHZhciB4U2NhbGUgPSAyLjAgLyAobGVmdFRhbiArIHJpZ2h0VGFuKTtcbiAgdmFyIHlTY2FsZSA9IDIuMCAvICh1cFRhbiArIGRvd25UYW4pO1xuICBvdXRbMF0gPSB4U2NhbGU7XG4gIG91dFsxXSA9IDAuMDtcbiAgb3V0WzJdID0gMC4wO1xuICBvdXRbM10gPSAwLjA7XG4gIG91dFs0XSA9IDAuMDtcbiAgb3V0WzVdID0geVNjYWxlO1xuICBvdXRbNl0gPSAwLjA7XG4gIG91dFs3XSA9IDAuMDtcbiAgb3V0WzhdID0gLSgobGVmdFRhbiAtIHJpZ2h0VGFuKSAqIHhTY2FsZSAqIDAuNSk7XG4gIG91dFs5XSA9ICh1cFRhbiAtIGRvd25UYW4pICogeVNjYWxlICogMC41O1xuICBvdXRbMTBdID0gZmFyIC8gKG5lYXIgLSBmYXIpO1xuICBvdXRbMTFdID0gLTEuMDtcbiAgb3V0WzEyXSA9IDAuMDtcbiAgb3V0WzEzXSA9IDAuMDtcbiAgb3V0WzE0XSA9IGZhciAqIG5lYXIgLyAobmVhciAtIGZhcik7XG4gIG91dFsxNV0gPSAwLjA7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgb3J0aG9nb25hbCBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHMuXG4gKiBUaGUgbmVhci9mYXIgY2xpcCBwbGFuZXMgY29ycmVzcG9uZCB0byBhIG5vcm1hbGl6ZWQgZGV2aWNlIGNvb3JkaW5hdGUgWiByYW5nZSBvZiBbLTEsIDFdLFxuICogd2hpY2ggbWF0Y2hlcyBXZWJHTC9PcGVuR0wncyBjbGlwIHZvbHVtZS5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b20gQm90dG9tIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9ydGhvTk8ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICB2YXIgbHIgPSAxIC8gKGxlZnQgLSByaWdodCk7XG4gIHZhciBidCA9IDEgLyAoYm90dG9tIC0gdG9wKTtcbiAgdmFyIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzBdID0gLTIgKiBscjtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gLTIgKiBidDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDIgKiBuZjtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xuICBvdXRbMTNdID0gKHRvcCArIGJvdHRvbSkgKiBidDtcbiAgb3V0WzE0XSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDQub3J0aG9OT31cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIG9ydGhvID0gb3J0aG9OTztcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBvcnRob2dvbmFsIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kcy5cbiAqIFRoZSBuZWFyL2ZhciBjbGlwIHBsYW5lcyBjb3JyZXNwb25kIHRvIGEgbm9ybWFsaXplZCBkZXZpY2UgY29vcmRpbmF0ZSBaIHJhbmdlIG9mIFswLCAxXSxcbiAqIHdoaWNoIG1hdGNoZXMgV2ViR1BVL1Z1bGthbi9EaXJlY3RYL01ldGFsJ3MgY2xpcCB2b2x1bWUuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IHJpZ2h0IFJpZ2h0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gYm90dG9tIEJvdHRvbSBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcnRob1pPKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgdmFyIGxyID0gMSAvIChsZWZ0IC0gcmlnaHQpO1xuICB2YXIgYnQgPSAxIC8gKGJvdHRvbSAtIHRvcCk7XG4gIHZhciBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gIG91dFswXSA9IC0yICogbHI7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IC0yICogYnQ7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSBuZjtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xuICBvdXRbMTNdID0gKHRvcCArIGJvdHRvbSkgKiBidDtcbiAgb3V0WzE0XSA9IG5lYXIgKiBuZjtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbG9vay1hdCBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZXllIHBvc2l0aW9uLCBmb2NhbCBwb2ludCwgYW5kIHVwIGF4aXMuXG4gKiBJZiB5b3Ugd2FudCBhIG1hdHJpeCB0aGF0IGFjdHVhbGx5IG1ha2VzIGFuIG9iamVjdCBsb29rIGF0IGFub3RoZXIgb2JqZWN0LCB5b3Ugc2hvdWxkIHVzZSB0YXJnZXRUbyBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBleWUgUG9zaXRpb24gb2YgdGhlIHZpZXdlclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGNlbnRlciBQb2ludCB0aGUgdmlld2VyIGlzIGxvb2tpbmcgYXRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB1cCB2ZWMzIHBvaW50aW5nIHVwXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb29rQXQob3V0LCBleWUsIGNlbnRlciwgdXApIHtcbiAgdmFyIHgwLCB4MSwgeDIsIHkwLCB5MSwgeTIsIHowLCB6MSwgejIsIGxlbjtcbiAgdmFyIGV5ZXggPSBleWVbMF07XG4gIHZhciBleWV5ID0gZXllWzFdO1xuICB2YXIgZXlleiA9IGV5ZVsyXTtcbiAgdmFyIHVweCA9IHVwWzBdO1xuICB2YXIgdXB5ID0gdXBbMV07XG4gIHZhciB1cHogPSB1cFsyXTtcbiAgdmFyIGNlbnRlcnggPSBjZW50ZXJbMF07XG4gIHZhciBjZW50ZXJ5ID0gY2VudGVyWzFdO1xuICB2YXIgY2VudGVyeiA9IGNlbnRlclsyXTtcbiAgaWYgKE1hdGguYWJzKGV5ZXggLSBjZW50ZXJ4KSA8IGdsTWF0cml4LkVQU0lMT04gJiYgTWF0aC5hYnMoZXlleSAtIGNlbnRlcnkpIDwgZ2xNYXRyaXguRVBTSUxPTiAmJiBNYXRoLmFicyhleWV6IC0gY2VudGVyeikgPCBnbE1hdHJpeC5FUFNJTE9OKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5KG91dCk7XG4gIH1cbiAgejAgPSBleWV4IC0gY2VudGVyeDtcbiAgejEgPSBleWV5IC0gY2VudGVyeTtcbiAgejIgPSBleWV6IC0gY2VudGVyejtcbiAgbGVuID0gMSAvIE1hdGguc3FydCh6MCAqIHowICsgejEgKiB6MSArIHoyICogejIpO1xuICB6MCAqPSBsZW47XG4gIHoxICo9IGxlbjtcbiAgejIgKj0gbGVuO1xuICB4MCA9IHVweSAqIHoyIC0gdXB6ICogejE7XG4gIHgxID0gdXB6ICogejAgLSB1cHggKiB6MjtcbiAgeDIgPSB1cHggKiB6MSAtIHVweSAqIHowO1xuICBsZW4gPSBNYXRoLnNxcnQoeDAgKiB4MCArIHgxICogeDEgKyB4MiAqIHgyKTtcbiAgaWYgKCFsZW4pIHtcbiAgICB4MCA9IDA7XG4gICAgeDEgPSAwO1xuICAgIHgyID0gMDtcbiAgfSBlbHNlIHtcbiAgICBsZW4gPSAxIC8gbGVuO1xuICAgIHgwICo9IGxlbjtcbiAgICB4MSAqPSBsZW47XG4gICAgeDIgKj0gbGVuO1xuICB9XG4gIHkwID0gejEgKiB4MiAtIHoyICogeDE7XG4gIHkxID0gejIgKiB4MCAtIHowICogeDI7XG4gIHkyID0gejAgKiB4MSAtIHoxICogeDA7XG4gIGxlbiA9IE1hdGguc3FydCh5MCAqIHkwICsgeTEgKiB5MSArIHkyICogeTIpO1xuICBpZiAoIWxlbikge1xuICAgIHkwID0gMDtcbiAgICB5MSA9IDA7XG4gICAgeTIgPSAwO1xuICB9IGVsc2Uge1xuICAgIGxlbiA9IDEgLyBsZW47XG4gICAgeTAgKj0gbGVuO1xuICAgIHkxICo9IGxlbjtcbiAgICB5MiAqPSBsZW47XG4gIH1cbiAgb3V0WzBdID0geDA7XG4gIG91dFsxXSA9IHkwO1xuICBvdXRbMl0gPSB6MDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0geDE7XG4gIG91dFs1XSA9IHkxO1xuICBvdXRbNl0gPSB6MTtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0geDI7XG4gIG91dFs5XSA9IHkyO1xuICBvdXRbMTBdID0gejI7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gLSh4MCAqIGV5ZXggKyB4MSAqIGV5ZXkgKyB4MiAqIGV5ZXopO1xuICBvdXRbMTNdID0gLSh5MCAqIGV5ZXggKyB5MSAqIGV5ZXkgKyB5MiAqIGV5ZXopO1xuICBvdXRbMTRdID0gLSh6MCAqIGV5ZXggKyB6MSAqIGV5ZXkgKyB6MiAqIGV5ZXopO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBtYXRyaXggdGhhdCBtYWtlcyBzb21ldGhpbmcgbG9vayBhdCBzb21ldGhpbmcgZWxzZS5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gZXllIFBvc2l0aW9uIG9mIHRoZSB2aWV3ZXJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB0YXJnZXQgUG9pbnQgdGhlIHZpZXdlciBpcyBsb29raW5nIGF0XG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdXAgdmVjMyBwb2ludGluZyB1cFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0VG8ob3V0LCBleWUsIHRhcmdldCwgdXApIHtcbiAgdmFyIGV5ZXggPSBleWVbMF0sXG4gICAgZXlleSA9IGV5ZVsxXSxcbiAgICBleWV6ID0gZXllWzJdLFxuICAgIHVweCA9IHVwWzBdLFxuICAgIHVweSA9IHVwWzFdLFxuICAgIHVweiA9IHVwWzJdO1xuICB2YXIgejAgPSBleWV4IC0gdGFyZ2V0WzBdLFxuICAgIHoxID0gZXlleSAtIHRhcmdldFsxXSxcbiAgICB6MiA9IGV5ZXogLSB0YXJnZXRbMl07XG4gIHZhciBsZW4gPSB6MCAqIHowICsgejEgKiB6MSArIHoyICogejI7XG4gIGlmIChsZW4gPiAwKSB7XG4gICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICAgIHowICo9IGxlbjtcbiAgICB6MSAqPSBsZW47XG4gICAgejIgKj0gbGVuO1xuICB9XG4gIHZhciB4MCA9IHVweSAqIHoyIC0gdXB6ICogejEsXG4gICAgeDEgPSB1cHogKiB6MCAtIHVweCAqIHoyLFxuICAgIHgyID0gdXB4ICogejEgLSB1cHkgKiB6MDtcbiAgbGVuID0geDAgKiB4MCArIHgxICogeDEgKyB4MiAqIHgyO1xuICBpZiAobGVuID4gMCkge1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICB4MCAqPSBsZW47XG4gICAgeDEgKj0gbGVuO1xuICAgIHgyICo9IGxlbjtcbiAgfVxuICBvdXRbMF0gPSB4MDtcbiAgb3V0WzFdID0geDE7XG4gIG91dFsyXSA9IHgyO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgb3V0WzVdID0gejIgKiB4MCAtIHowICogeDI7XG4gIG91dFs2XSA9IHowICogeDEgLSB6MSAqIHgwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB6MDtcbiAgb3V0WzldID0gejE7XG4gIG91dFsxMF0gPSB6MjtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSBleWV4O1xuICBvdXRbMTNdID0gZXlleTtcbiAgb3V0WzE0XSA9IGV5ZXo7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiBcIm1hdDQoXCIgKyBhWzBdICsgXCIsIFwiICsgYVsxXSArIFwiLCBcIiArIGFbMl0gKyBcIiwgXCIgKyBhWzNdICsgXCIsIFwiICsgYVs0XSArIFwiLCBcIiArIGFbNV0gKyBcIiwgXCIgKyBhWzZdICsgXCIsIFwiICsgYVs3XSArIFwiLCBcIiArIGFbOF0gKyBcIiwgXCIgKyBhWzldICsgXCIsIFwiICsgYVsxMF0gKyBcIiwgXCIgKyBhWzExXSArIFwiLCBcIiArIGFbMTJdICsgXCIsIFwiICsgYVsxM10gKyBcIiwgXCIgKyBhWzE0XSArIFwiLCBcIiArIGFbMTVdICsgXCIpXCI7XG59XG5cbi8qKlxuICogUmV0dXJucyBGcm9iZW5pdXMgbm9ybSBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgbWF0cml4IHRvIGNhbGN1bGF0ZSBGcm9iZW5pdXMgbm9ybSBvZlxuICogQHJldHVybnMge051bWJlcn0gRnJvYmVuaXVzIG5vcm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb2IoYSkge1xuICByZXR1cm4gTWF0aC5zcXJ0KGFbMF0gKiBhWzBdICsgYVsxXSAqIGFbMV0gKyBhWzJdICogYVsyXSArIGFbM10gKiBhWzNdICsgYVs0XSAqIGFbNF0gKyBhWzVdICogYVs1XSArIGFbNl0gKiBhWzZdICsgYVs3XSAqIGFbN10gKyBhWzhdICogYVs4XSArIGFbOV0gKiBhWzldICsgYVsxMF0gKiBhWzEwXSArIGFbMTFdICogYVsxMV0gKyBhWzEyXSAqIGFbMTJdICsgYVsxM10gKiBhWzEzXSArIGFbMTRdICogYVsxNF0gKyBhWzE1XSAqIGFbMTVdKTtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byBtYXQ0J3NcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgb3V0WzRdID0gYVs0XSArIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gKyBiWzVdO1xuICBvdXRbNl0gPSBhWzZdICsgYls2XTtcbiAgb3V0WzddID0gYVs3XSArIGJbN107XG4gIG91dFs4XSA9IGFbOF0gKyBiWzhdO1xuICBvdXRbOV0gPSBhWzldICsgYls5XTtcbiAgb3V0WzEwXSA9IGFbMTBdICsgYlsxMF07XG4gIG91dFsxMV0gPSBhWzExXSArIGJbMTFdO1xuICBvdXRbMTJdID0gYVsxMl0gKyBiWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdICsgYlsxM107XG4gIG91dFsxNF0gPSBhWzE0XSArIGJbMTRdO1xuICBvdXRbMTVdID0gYVsxNV0gKyBiWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgbWF0cml4IGIgZnJvbSBtYXRyaXggYVxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgb3V0WzNdID0gYVszXSAtIGJbM107XG4gIG91dFs0XSA9IGFbNF0gLSBiWzRdO1xuICBvdXRbNV0gPSBhWzVdIC0gYls1XTtcbiAgb3V0WzZdID0gYVs2XSAtIGJbNl07XG4gIG91dFs3XSA9IGFbN10gLSBiWzddO1xuICBvdXRbOF0gPSBhWzhdIC0gYls4XTtcbiAgb3V0WzldID0gYVs5XSAtIGJbOV07XG4gIG91dFsxMF0gPSBhWzEwXSAtIGJbMTBdO1xuICBvdXRbMTFdID0gYVsxMV0gLSBiWzExXTtcbiAgb3V0WzEyXSA9IGFbMTJdIC0gYlsxMl07XG4gIG91dFsxM10gPSBhWzEzXSAtIGJbMTNdO1xuICBvdXRbMTRdID0gYVsxNF0gLSBiWzE0XTtcbiAgb3V0WzE1XSA9IGFbMTVdIC0gYlsxNV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTXVsdGlwbHkgZWFjaCBlbGVtZW50IG9mIHRoZSBtYXRyaXggYnkgYSBzY2FsYXIuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgbWF0cml4J3MgZWxlbWVudHMgYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICBvdXRbM10gPSBhWzNdICogYjtcbiAgb3V0WzRdID0gYVs0XSAqIGI7XG4gIG91dFs1XSA9IGFbNV0gKiBiO1xuICBvdXRbNl0gPSBhWzZdICogYjtcbiAgb3V0WzddID0gYVs3XSAqIGI7XG4gIG91dFs4XSA9IGFbOF0gKiBiO1xuICBvdXRbOV0gPSBhWzldICogYjtcbiAgb3V0WzEwXSA9IGFbMTBdICogYjtcbiAgb3V0WzExXSA9IGFbMTFdICogYjtcbiAgb3V0WzEyXSA9IGFbMTJdICogYjtcbiAgb3V0WzEzXSA9IGFbMTNdICogYjtcbiAgb3V0WzE0XSA9IGFbMTRdICogYjtcbiAgb3V0WzE1XSA9IGFbMTVdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byBtYXQ0J3MgYWZ0ZXIgbXVsdGlwbHlpbmcgZWFjaCBlbGVtZW50IG9mIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYidzIGVsZW1lbnRzIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF0gKiBzY2FsZTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV0gKiBzY2FsZTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl0gKiBzY2FsZTtcbiAgb3V0WzNdID0gYVszXSArIGJbM10gKiBzY2FsZTtcbiAgb3V0WzRdID0gYVs0XSArIGJbNF0gKiBzY2FsZTtcbiAgb3V0WzVdID0gYVs1XSArIGJbNV0gKiBzY2FsZTtcbiAgb3V0WzZdID0gYVs2XSArIGJbNl0gKiBzY2FsZTtcbiAgb3V0WzddID0gYVs3XSArIGJbN10gKiBzY2FsZTtcbiAgb3V0WzhdID0gYVs4XSArIGJbOF0gKiBzY2FsZTtcbiAgb3V0WzldID0gYVs5XSArIGJbOV0gKiBzY2FsZTtcbiAgb3V0WzEwXSA9IGFbMTBdICsgYlsxMF0gKiBzY2FsZTtcbiAgb3V0WzExXSA9IGFbMTFdICsgYlsxMV0gKiBzY2FsZTtcbiAgb3V0WzEyXSA9IGFbMTJdICsgYlsxMl0gKiBzY2FsZTtcbiAgb3V0WzEzXSA9IGFbMTNdICsgYlsxM10gKiBzY2FsZTtcbiAgb3V0WzE0XSA9IGFbMTRdICsgYlsxNF0gKiBzY2FsZTtcbiAgb3V0WzE1XSA9IGFbMTVdICsgYlsxNV0gKiBzY2FsZTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgVGhlIGZpcnN0IG1hdHJpeC5cbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBiIFRoZSBzZWNvbmQgbWF0cml4LlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1hdHJpY2VzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdICYmIGFbMl0gPT09IGJbMl0gJiYgYVszXSA9PT0gYlszXSAmJiBhWzRdID09PSBiWzRdICYmIGFbNV0gPT09IGJbNV0gJiYgYVs2XSA9PT0gYls2XSAmJiBhWzddID09PSBiWzddICYmIGFbOF0gPT09IGJbOF0gJiYgYVs5XSA9PT0gYls5XSAmJiBhWzEwXSA9PT0gYlsxMF0gJiYgYVsxMV0gPT09IGJbMTFdICYmIGFbMTJdID09PSBiWzEyXSAmJiBhWzEzXSA9PT0gYlsxM10gJiYgYVsxNF0gPT09IGJbMTRdICYmIGFbMTVdID09PSBiWzE1XTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgVGhlIGZpcnN0IG1hdHJpeC5cbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBiIFRoZSBzZWNvbmQgbWF0cml4LlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1hdHJpY2VzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICBhMSA9IGFbMV0sXG4gICAgYTIgPSBhWzJdLFxuICAgIGEzID0gYVszXTtcbiAgdmFyIGE0ID0gYVs0XSxcbiAgICBhNSA9IGFbNV0sXG4gICAgYTYgPSBhWzZdLFxuICAgIGE3ID0gYVs3XTtcbiAgdmFyIGE4ID0gYVs4XSxcbiAgICBhOSA9IGFbOV0sXG4gICAgYTEwID0gYVsxMF0sXG4gICAgYTExID0gYVsxMV07XG4gIHZhciBhMTIgPSBhWzEyXSxcbiAgICBhMTMgPSBhWzEzXSxcbiAgICBhMTQgPSBhWzE0XSxcbiAgICBhMTUgPSBhWzE1XTtcbiAgdmFyIGIwID0gYlswXSxcbiAgICBiMSA9IGJbMV0sXG4gICAgYjIgPSBiWzJdLFxuICAgIGIzID0gYlszXTtcbiAgdmFyIGI0ID0gYls0XSxcbiAgICBiNSA9IGJbNV0sXG4gICAgYjYgPSBiWzZdLFxuICAgIGI3ID0gYls3XTtcbiAgdmFyIGI4ID0gYls4XSxcbiAgICBiOSA9IGJbOV0sXG4gICAgYjEwID0gYlsxMF0sXG4gICAgYjExID0gYlsxMV07XG4gIHZhciBiMTIgPSBiWzEyXSxcbiAgICBiMTMgPSBiWzEzXSxcbiAgICBiMTQgPSBiWzE0XSxcbiAgICBiMTUgPSBiWzE1XTtcbiAgcmV0dXJuIE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJiBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiYgTWF0aC5hYnMoYTIgLSBiMikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpICYmIE1hdGguYWJzKGEzIC0gYjMpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEzKSwgTWF0aC5hYnMoYjMpKSAmJiBNYXRoLmFicyhhNCAtIGI0KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNCksIE1hdGguYWJzKGI0KSkgJiYgTWF0aC5hYnMoYTUgLSBiNSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTUpLCBNYXRoLmFicyhiNSkpICYmIE1hdGguYWJzKGE2IC0gYjYpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE2KSwgTWF0aC5hYnMoYjYpKSAmJiBNYXRoLmFicyhhNyAtIGI3KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNyksIE1hdGguYWJzKGI3KSkgJiYgTWF0aC5hYnMoYTggLSBiOCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTgpLCBNYXRoLmFicyhiOCkpICYmIE1hdGguYWJzKGE5IC0gYjkpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE5KSwgTWF0aC5hYnMoYjkpKSAmJiBNYXRoLmFicyhhMTAgLSBiMTApIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExMCksIE1hdGguYWJzKGIxMCkpICYmIE1hdGguYWJzKGExMSAtIGIxMSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTExKSwgTWF0aC5hYnMoYjExKSkgJiYgTWF0aC5hYnMoYTEyIC0gYjEyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTIpLCBNYXRoLmFicyhiMTIpKSAmJiBNYXRoLmFicyhhMTMgLSBiMTMpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExMyksIE1hdGguYWJzKGIxMykpICYmIE1hdGguYWJzKGExNCAtIGIxNCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTE0KSwgTWF0aC5hYnMoYjE0KSkgJiYgTWF0aC5hYnMoYTE1IC0gYjE1KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTUpLCBNYXRoLmFicyhiMTUpKTtcbn1cblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDQubXVsdGlwbHl9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBtdWwgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDQuc3VidHJhY3R9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBzdWIgPSBzdWJ0cmFjdDsiLCJpbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb24uanNcIjtcbmltcG9ydCAqIGFzIG1hdDMgZnJvbSBcIi4vbWF0My5qc1wiO1xuaW1wb3J0ICogYXMgdmVjMyBmcm9tIFwiLi92ZWMzLmpzXCI7XG5pbXBvcnQgKiBhcyB2ZWM0IGZyb20gXCIuL3ZlYzQuanNcIjtcblxuLyoqXG4gKiBRdWF0ZXJuaW9uIGluIHRoZSBmb3JtYXQgWFlaV1xuICogQG1vZHVsZSBxdWF0XG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IHF1YXRcbiAqXG4gKiBAcmV0dXJucyB7cXVhdH0gYSBuZXcgcXVhdGVybmlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFswXSA9IDA7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICB9XG4gIG91dFszXSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IGEgcXVhdCB0byB0aGUgaWRlbnRpdHkgcXVhdGVybmlvblxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gIG91dFswXSA9IDA7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0cyBhIHF1YXQgZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYW5kIHJvdGF0aW9uIGF4aXMsXG4gKiB0aGVuIHJldHVybnMgaXQuXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYXhpcyB0aGUgYXhpcyBhcm91bmQgd2hpY2ggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gc2V0QXhpc0FuZ2xlKG91dCwgYXhpcywgcmFkKSB7XG4gIHJhZCA9IHJhZCAqIDAuNTtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQpO1xuICBvdXRbMF0gPSBzICogYXhpc1swXTtcbiAgb3V0WzFdID0gcyAqIGF4aXNbMV07XG4gIG91dFsyXSA9IHMgKiBheGlzWzJdO1xuICBvdXRbM10gPSBNYXRoLmNvcyhyYWQpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHJvdGF0aW9uIGF4aXMgYW5kIGFuZ2xlIGZvciBhIGdpdmVuXG4gKiAgcXVhdGVybmlvbi4gSWYgYSBxdWF0ZXJuaW9uIGlzIGNyZWF0ZWQgd2l0aFxuICogIHNldEF4aXNBbmdsZSwgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gdGhlIHNhbWVcbiAqICB2YWx1ZXMgYXMgcHJvdmlkaWVkIGluIHRoZSBvcmlnaW5hbCBwYXJhbWV0ZXIgbGlzdFxuICogIE9SIGZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHZhbHVlcy5cbiAqIEV4YW1wbGU6IFRoZSBxdWF0ZXJuaW9uIGZvcm1lZCBieSBheGlzIFswLCAwLCAxXSBhbmRcbiAqICBhbmdsZSAtOTAgaXMgdGhlIHNhbWUgYXMgdGhlIHF1YXRlcm5pb24gZm9ybWVkIGJ5XG4gKiAgWzAsIDAsIDFdIGFuZCAyNzAuIFRoaXMgbWV0aG9kIGZhdm9ycyB0aGUgbGF0dGVyLlxuICogQHBhcmFtICB7dmVjM30gb3V0X2F4aXMgIFZlY3RvciByZWNlaXZpbmcgdGhlIGF4aXMgb2Ygcm90YXRpb25cbiAqIEBwYXJhbSAge1JlYWRvbmx5UXVhdH0gcSAgICAgUXVhdGVybmlvbiB0byBiZSBkZWNvbXBvc2VkXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICBBbmdsZSwgaW4gcmFkaWFucywgb2YgdGhlIHJvdGF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBeGlzQW5nbGUob3V0X2F4aXMsIHEpIHtcbiAgdmFyIHJhZCA9IE1hdGguYWNvcyhxWzNdKSAqIDIuMDtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQgLyAyLjApO1xuICBpZiAocyA+IGdsTWF0cml4LkVQU0lMT04pIHtcbiAgICBvdXRfYXhpc1swXSA9IHFbMF0gLyBzO1xuICAgIG91dF9heGlzWzFdID0gcVsxXSAvIHM7XG4gICAgb3V0X2F4aXNbMl0gPSBxWzJdIC8gcztcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBzIGlzIHplcm8sIHJldHVybiBhbnkgYXhpcyAobm8gcm90YXRpb24gLSBheGlzIGRvZXMgbm90IG1hdHRlcilcbiAgICBvdXRfYXhpc1swXSA9IDE7XG4gICAgb3V0X2F4aXNbMV0gPSAwO1xuICAgIG91dF9heGlzWzJdID0gMDtcbiAgfVxuICByZXR1cm4gcmFkO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGFuZ3VsYXIgZGlzdGFuY2UgYmV0d2VlbiB0d28gdW5pdCBxdWF0ZXJuaW9uc1xuICpcbiAqIEBwYXJhbSAge1JlYWRvbmx5UXVhdH0gYSAgICAgT3JpZ2luIHVuaXQgcXVhdGVybmlvblxuICogQHBhcmFtICB7UmVhZG9ubHlRdWF0fSBiICAgICBEZXN0aW5hdGlvbiB1bml0IHF1YXRlcm5pb25cbiAqIEByZXR1cm4ge051bWJlcn0gICAgIEFuZ2xlLCBpbiByYWRpYW5zLCBiZXR3ZWVuIHRoZSB0d28gcXVhdGVybmlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKGEsIGIpIHtcbiAgdmFyIGRvdHByb2R1Y3QgPSBkb3QoYSwgYik7XG4gIHJldHVybiBNYXRoLmFjb3MoMiAqIGRvdHByb2R1Y3QgKiBkb3Rwcm9kdWN0IC0gMSk7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gcXVhdCdzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICBheSA9IGFbMV0sXG4gICAgYXogPSBhWzJdLFxuICAgIGF3ID0gYVszXTtcbiAgdmFyIGJ4ID0gYlswXSxcbiAgICBieSA9IGJbMV0sXG4gICAgYnogPSBiWzJdLFxuICAgIGJ3ID0gYlszXTtcbiAgb3V0WzBdID0gYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieTtcbiAgb3V0WzFdID0gYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBiejtcbiAgb3V0WzJdID0gYXogKiBidyArIGF3ICogYnogKyBheCAqIGJ5IC0gYXkgKiBieDtcbiAgb3V0WzNdID0gYXcgKiBidyAtIGF4ICogYnggLSBheSAqIGJ5IC0gYXogKiBiejtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgcXVhdGVybmlvbiBieSB0aGUgZ2l2ZW4gYW5nbGUgYWJvdXQgdGhlIFggYXhpc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHF1YXQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVgob3V0LCBhLCByYWQpIHtcbiAgcmFkICo9IDAuNTtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICBheSA9IGFbMV0sXG4gICAgYXogPSBhWzJdLFxuICAgIGF3ID0gYVszXTtcbiAgdmFyIGJ4ID0gTWF0aC5zaW4ocmFkKSxcbiAgICBidyA9IE1hdGguY29zKHJhZCk7XG4gIG91dFswXSA9IGF4ICogYncgKyBhdyAqIGJ4O1xuICBvdXRbMV0gPSBheSAqIGJ3ICsgYXogKiBieDtcbiAgb3V0WzJdID0gYXogKiBidyAtIGF5ICogYng7XG4gIG91dFszXSA9IGF3ICogYncgLSBheCAqIGJ4O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBxdWF0ZXJuaW9uIGJ5IHRoZSBnaXZlbiBhbmdsZSBhYm91dCB0aGUgWSBheGlzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgcXVhdCB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIHJhZCkge1xuICByYWQgKj0gMC41O1xuICB2YXIgYXggPSBhWzBdLFxuICAgIGF5ID0gYVsxXSxcbiAgICBheiA9IGFbMl0sXG4gICAgYXcgPSBhWzNdO1xuICB2YXIgYnkgPSBNYXRoLnNpbihyYWQpLFxuICAgIGJ3ID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYXggKiBidyAtIGF6ICogYnk7XG4gIG91dFsxXSA9IGF5ICogYncgKyBhdyAqIGJ5O1xuICBvdXRbMl0gPSBheiAqIGJ3ICsgYXggKiBieTtcbiAgb3V0WzNdID0gYXcgKiBidyAtIGF5ICogYnk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBaIGF4aXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHJhZCBhbmdsZSAoaW4gcmFkaWFucykgdG8gcm90YXRlXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgcmFkKSB7XG4gIHJhZCAqPSAwLjU7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgYXkgPSBhWzFdLFxuICAgIGF6ID0gYVsyXSxcbiAgICBhdyA9IGFbM107XG4gIHZhciBieiA9IE1hdGguc2luKHJhZCksXG4gICAgYncgPSBNYXRoLmNvcyhyYWQpO1xuICBvdXRbMF0gPSBheCAqIGJ3ICsgYXkgKiBiejtcbiAgb3V0WzFdID0gYXkgKiBidyAtIGF4ICogYno7XG4gIG91dFsyXSA9IGF6ICogYncgKyBhdyAqIGJ6O1xuICBvdXRbM10gPSBhdyAqIGJ3IC0gYXogKiBiejtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBXIGNvbXBvbmVudCBvZiBhIHF1YXQgZnJvbSB0aGUgWCwgWSwgYW5kIFogY29tcG9uZW50cy5cbiAqIEFzc3VtZXMgdGhhdCBxdWF0ZXJuaW9uIGlzIDEgdW5pdCBpbiBsZW5ndGguXG4gKiBBbnkgZXhpc3RpbmcgVyBjb21wb25lbnQgd2lsbCBiZSBpZ25vcmVkLlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgVyBjb21wb25lbnQgb2ZcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVcob3V0LCBhKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICB5ID0gYVsxXSxcbiAgICB6ID0gYVsyXTtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgb3V0WzNdID0gTWF0aC5zcXJ0KE1hdGguYWJzKDEuMCAtIHggKiB4IC0geSAqIHkgLSB6ICogeikpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgZXhwb25lbnRpYWwgb2YgYSB1bml0IHF1YXRlcm5pb24uXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSB0aGUgZXhwb25lbnRpYWwgb2ZcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4cChvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgIHkgPSBhWzFdLFxuICAgIHogPSBhWzJdLFxuICAgIHcgPSBhWzNdO1xuICB2YXIgciA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICB2YXIgZXQgPSBNYXRoLmV4cCh3KTtcbiAgdmFyIHMgPSByID4gMCA/IGV0ICogTWF0aC5zaW4ocikgLyByIDogMDtcbiAgb3V0WzBdID0geCAqIHM7XG4gIG91dFsxXSA9IHkgKiBzO1xuICBvdXRbMl0gPSB6ICogcztcbiAgb3V0WzNdID0gZXQgKiBNYXRoLmNvcyhyKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIG5hdHVyYWwgbG9nYXJpdGhtIG9mIGEgdW5pdCBxdWF0ZXJuaW9uLlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgdGhlIGV4cG9uZW50aWFsIG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsbihvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgIHkgPSBhWzFdLFxuICAgIHogPSBhWzJdLFxuICAgIHcgPSBhWzNdO1xuICB2YXIgciA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICB2YXIgdCA9IHIgPiAwID8gTWF0aC5hdGFuMihyLCB3KSAvIHIgOiAwO1xuICBvdXRbMF0gPSB4ICogdDtcbiAgb3V0WzFdID0geSAqIHQ7XG4gIG91dFsyXSA9IHogKiB0O1xuICBvdXRbM10gPSAwLjUgKiBNYXRoLmxvZyh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBzY2FsYXIgcG93ZXIgb2YgYSB1bml0IHF1YXRlcm5pb24uXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSB0aGUgZXhwb25lbnRpYWwgb2ZcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgcXVhdGVybmlvbiBieVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcG93KG91dCwgYSwgYikge1xuICBsbihvdXQsIGEpO1xuICBzY2FsZShvdXQsIG91dCwgYik7XG4gIGV4cChvdXQsIG91dCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYSBzcGhlcmljYWwgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gcXVhdFxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xlcnAob3V0LCBhLCBiLCB0KSB7XG4gIC8vIGJlbmNobWFya3M6XG4gIC8vICAgIGh0dHA6Ly9qc3BlcmYuY29tL3F1YXRlcm5pb24tc2xlcnAtaW1wbGVtZW50YXRpb25zXG4gIHZhciBheCA9IGFbMF0sXG4gICAgYXkgPSBhWzFdLFxuICAgIGF6ID0gYVsyXSxcbiAgICBhdyA9IGFbM107XG4gIHZhciBieCA9IGJbMF0sXG4gICAgYnkgPSBiWzFdLFxuICAgIGJ6ID0gYlsyXSxcbiAgICBidyA9IGJbM107XG4gIHZhciBvbWVnYSwgY29zb20sIHNpbm9tLCBzY2FsZTAsIHNjYWxlMTtcblxuICAvLyBjYWxjIGNvc2luZVxuICBjb3NvbSA9IGF4ICogYnggKyBheSAqIGJ5ICsgYXogKiBieiArIGF3ICogYnc7XG4gIC8vIGFkanVzdCBzaWducyAoaWYgbmVjZXNzYXJ5KVxuICBpZiAoY29zb20gPCAwLjApIHtcbiAgICBjb3NvbSA9IC1jb3NvbTtcbiAgICBieCA9IC1ieDtcbiAgICBieSA9IC1ieTtcbiAgICBieiA9IC1iejtcbiAgICBidyA9IC1idztcbiAgfVxuICAvLyBjYWxjdWxhdGUgY29lZmZpY2llbnRzXG4gIGlmICgxLjAgLSBjb3NvbSA+IGdsTWF0cml4LkVQU0lMT04pIHtcbiAgICAvLyBzdGFuZGFyZCBjYXNlIChzbGVycClcbiAgICBvbWVnYSA9IE1hdGguYWNvcyhjb3NvbSk7XG4gICAgc2lub20gPSBNYXRoLnNpbihvbWVnYSk7XG4gICAgc2NhbGUwID0gTWF0aC5zaW4oKDEuMCAtIHQpICogb21lZ2EpIC8gc2lub207XG4gICAgc2NhbGUxID0gTWF0aC5zaW4odCAqIG9tZWdhKSAvIHNpbm9tO1xuICB9IGVsc2Uge1xuICAgIC8vIFwiZnJvbVwiIGFuZCBcInRvXCIgcXVhdGVybmlvbnMgYXJlIHZlcnkgY2xvc2VcbiAgICAvLyAgLi4uIHNvIHdlIGNhbiBkbyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uXG4gICAgc2NhbGUwID0gMS4wIC0gdDtcbiAgICBzY2FsZTEgPSB0O1xuICB9XG4gIC8vIGNhbGN1bGF0ZSBmaW5hbCB2YWx1ZXNcbiAgb3V0WzBdID0gc2NhbGUwICogYXggKyBzY2FsZTEgKiBieDtcbiAgb3V0WzFdID0gc2NhbGUwICogYXkgKyBzY2FsZTEgKiBieTtcbiAgb3V0WzJdID0gc2NhbGUwICogYXogKyBzY2FsZTEgKiBiejtcbiAgb3V0WzNdID0gc2NhbGUwICogYXcgKyBzY2FsZTEgKiBidztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdW5pdCBxdWF0ZXJuaW9uXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20ob3V0KSB7XG4gIC8vIEltcGxlbWVudGF0aW9uIG9mIGh0dHA6Ly9wbGFubmluZy5jcy51aXVjLmVkdS9ub2RlMTk4Lmh0bWxcbiAgLy8gVE9ETzogQ2FsbGluZyByYW5kb20gMyB0aW1lcyBpcyBwcm9iYWJseSBub3QgdGhlIGZhc3Rlc3Qgc29sdXRpb25cbiAgdmFyIHUxID0gZ2xNYXRyaXguUkFORE9NKCk7XG4gIHZhciB1MiA9IGdsTWF0cml4LlJBTkRPTSgpO1xuICB2YXIgdTMgPSBnbE1hdHJpeC5SQU5ET00oKTtcbiAgdmFyIHNxcnQxTWludXNVMSA9IE1hdGguc3FydCgxIC0gdTEpO1xuICB2YXIgc3FydFUxID0gTWF0aC5zcXJ0KHUxKTtcbiAgb3V0WzBdID0gc3FydDFNaW51c1UxICogTWF0aC5zaW4oMi4wICogTWF0aC5QSSAqIHUyKTtcbiAgb3V0WzFdID0gc3FydDFNaW51c1UxICogTWF0aC5jb3MoMi4wICogTWF0aC5QSSAqIHUyKTtcbiAgb3V0WzJdID0gc3FydFUxICogTWF0aC5zaW4oMi4wICogTWF0aC5QSSAqIHUzKTtcbiAgb3V0WzNdID0gc3FydFUxICogTWF0aC5jb3MoMi4wICogTWF0aC5QSSAqIHUzKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBpbnZlcnNlIG9mIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgaW52ZXJzZSBvZlxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgIGExID0gYVsxXSxcbiAgICBhMiA9IGFbMl0sXG4gICAgYTMgPSBhWzNdO1xuICB2YXIgZG90ID0gYTAgKiBhMCArIGExICogYTEgKyBhMiAqIGEyICsgYTMgKiBhMztcbiAgdmFyIGludkRvdCA9IGRvdCA/IDEuMCAvIGRvdCA6IDA7XG5cbiAgLy8gVE9ETzogV291bGQgYmUgZmFzdGVyIHRvIHJldHVybiBbMCwwLDAsMF0gaW1tZWRpYXRlbHkgaWYgZG90ID09IDBcblxuICBvdXRbMF0gPSAtYTAgKiBpbnZEb3Q7XG4gIG91dFsxXSA9IC1hMSAqIGludkRvdDtcbiAgb3V0WzJdID0gLWEyICogaW52RG90O1xuICBvdXRbM10gPSBhMyAqIGludkRvdDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBjb25qdWdhdGUgb2YgYSBxdWF0XG4gKiBJZiB0aGUgcXVhdGVybmlvbiBpcyBub3JtYWxpemVkLCB0aGlzIGZ1bmN0aW9uIGlzIGZhc3RlciB0aGFuIHF1YXQuaW52ZXJzZSBhbmQgcHJvZHVjZXMgdGhlIHNhbWUgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgY29uanVnYXRlIG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25qdWdhdGUob3V0LCBhKSB7XG4gIG91dFswXSA9IC1hWzBdO1xuICBvdXRbMV0gPSAtYVsxXTtcbiAgb3V0WzJdID0gLWFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHF1YXRlcm5pb24gZnJvbSB0aGUgZ2l2ZW4gM3gzIHJvdGF0aW9uIG1hdHJpeC5cbiAqXG4gKiBOT1RFOiBUaGUgcmVzdWx0YW50IHF1YXRlcm5pb24gaXMgbm90IG5vcm1hbGl6ZWQsIHNvIHlvdSBzaG91bGQgYmUgc3VyZVxuICogdG8gcmVub3JtYWxpemUgdGhlIHF1YXRlcm5pb24geW91cnNlbGYgd2hlcmUgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IG0gcm90YXRpb24gbWF0cml4XG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21NYXQzKG91dCwgbSkge1xuICAvLyBBbGdvcml0aG0gaW4gS2VuIFNob2VtYWtlJ3MgYXJ0aWNsZSBpbiAxOTg3IFNJR0dSQVBIIGNvdXJzZSBub3Rlc1xuICAvLyBhcnRpY2xlIFwiUXVhdGVybmlvbiBDYWxjdWx1cyBhbmQgRmFzdCBBbmltYXRpb25cIi5cbiAgdmFyIGZUcmFjZSA9IG1bMF0gKyBtWzRdICsgbVs4XTtcbiAgdmFyIGZSb290O1xuICBpZiAoZlRyYWNlID4gMC4wKSB7XG4gICAgLy8gfHd8ID4gMS8yLCBtYXkgYXMgd2VsbCBjaG9vc2UgdyA+IDEvMlxuICAgIGZSb290ID0gTWF0aC5zcXJ0KGZUcmFjZSArIDEuMCk7IC8vIDJ3XG4gICAgb3V0WzNdID0gMC41ICogZlJvb3Q7XG4gICAgZlJvb3QgPSAwLjUgLyBmUm9vdDsgLy8gMS8oNHcpXG4gICAgb3V0WzBdID0gKG1bNV0gLSBtWzddKSAqIGZSb290O1xuICAgIG91dFsxXSA9IChtWzZdIC0gbVsyXSkgKiBmUm9vdDtcbiAgICBvdXRbMl0gPSAobVsxXSAtIG1bM10pICogZlJvb3Q7XG4gIH0gZWxzZSB7XG4gICAgLy8gfHd8IDw9IDEvMlxuICAgIHZhciBpID0gMDtcbiAgICBpZiAobVs0XSA+IG1bMF0pIGkgPSAxO1xuICAgIGlmIChtWzhdID4gbVtpICogMyArIGldKSBpID0gMjtcbiAgICB2YXIgaiA9IChpICsgMSkgJSAzO1xuICAgIHZhciBrID0gKGkgKyAyKSAlIDM7XG4gICAgZlJvb3QgPSBNYXRoLnNxcnQobVtpICogMyArIGldIC0gbVtqICogMyArIGpdIC0gbVtrICogMyArIGtdICsgMS4wKTtcbiAgICBvdXRbaV0gPSAwLjUgKiBmUm9vdDtcbiAgICBmUm9vdCA9IDAuNSAvIGZSb290O1xuICAgIG91dFszXSA9IChtW2ogKiAzICsga10gLSBtW2sgKiAzICsgal0pICogZlJvb3Q7XG4gICAgb3V0W2pdID0gKG1baiAqIDMgKyBpXSArIG1baSAqIDMgKyBqXSkgKiBmUm9vdDtcbiAgICBvdXRba10gPSAobVtrICogMyArIGldICsgbVtpICogMyArIGtdKSAqIGZSb290O1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHF1YXRlcm5pb24gZnJvbSB0aGUgZ2l2ZW4gZXVsZXIgYW5nbGUgeCwgeSwgeiB1c2luZyB0aGUgcHJvdmlkZWQgaW50cmluc2ljIG9yZGVyIGZvciB0aGUgY29udmVyc2lvbi5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7TnVtYmVyfSB4IEFuZ2xlIHRvIHJvdGF0ZSBhcm91bmQgWCBheGlzIGluIGRlZ3JlZXMuXG4gKiBAcGFyYW0ge051bWJlcn0geSBBbmdsZSB0byByb3RhdGUgYXJvdW5kIFkgYXhpcyBpbiBkZWdyZWVzLlxuICogQHBhcmFtIHtOdW1iZXJ9IHogQW5nbGUgdG8gcm90YXRlIGFyb3VuZCBaIGF4aXMgaW4gZGVncmVlcy5cbiAqIEBwYXJhbSB7J3h5eid8J3h6eSd8J3l4eid8J3l6eCd8J3p4eSd8J3p5eCd9IG9yZGVyIEludHJpbnNpYyBvcmRlciBmb3IgY29udmVyc2lvbiwgZGVmYXVsdCBpcyB6eXguXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21FdWxlcihvdXQsIHgsIHksIHopIHtcbiAgdmFyIG9yZGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBnbE1hdHJpeC5BTkdMRV9PUkRFUjtcbiAgdmFyIGhhbGZUb1JhZCA9IE1hdGguUEkgLyAzNjA7XG4gIHggKj0gaGFsZlRvUmFkO1xuICB6ICo9IGhhbGZUb1JhZDtcbiAgeSAqPSBoYWxmVG9SYWQ7XG4gIHZhciBzeCA9IE1hdGguc2luKHgpO1xuICB2YXIgY3ggPSBNYXRoLmNvcyh4KTtcbiAgdmFyIHN5ID0gTWF0aC5zaW4oeSk7XG4gIHZhciBjeSA9IE1hdGguY29zKHkpO1xuICB2YXIgc3ogPSBNYXRoLnNpbih6KTtcbiAgdmFyIGN6ID0gTWF0aC5jb3Moeik7XG4gIHN3aXRjaCAob3JkZXIpIHtcbiAgICBjYXNlIFwieHl6XCI6XG4gICAgICBvdXRbMF0gPSBzeCAqIGN5ICogY3ogKyBjeCAqIHN5ICogc3o7XG4gICAgICBvdXRbMV0gPSBjeCAqIHN5ICogY3ogLSBzeCAqIGN5ICogc3o7XG4gICAgICBvdXRbMl0gPSBjeCAqIGN5ICogc3ogKyBzeCAqIHN5ICogY3o7XG4gICAgICBvdXRbM10gPSBjeCAqIGN5ICogY3ogLSBzeCAqIHN5ICogc3o7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwieHp5XCI6XG4gICAgICBvdXRbMF0gPSBzeCAqIGN5ICogY3ogLSBjeCAqIHN5ICogc3o7XG4gICAgICBvdXRbMV0gPSBjeCAqIHN5ICogY3ogLSBzeCAqIGN5ICogc3o7XG4gICAgICBvdXRbMl0gPSBjeCAqIGN5ICogc3ogKyBzeCAqIHN5ICogY3o7XG4gICAgICBvdXRbM10gPSBjeCAqIGN5ICogY3ogKyBzeCAqIHN5ICogc3o7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwieXh6XCI6XG4gICAgICBvdXRbMF0gPSBzeCAqIGN5ICogY3ogKyBjeCAqIHN5ICogc3o7XG4gICAgICBvdXRbMV0gPSBjeCAqIHN5ICogY3ogLSBzeCAqIGN5ICogc3o7XG4gICAgICBvdXRbMl0gPSBjeCAqIGN5ICogc3ogLSBzeCAqIHN5ICogY3o7XG4gICAgICBvdXRbM10gPSBjeCAqIGN5ICogY3ogKyBzeCAqIHN5ICogc3o7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwieXp4XCI6XG4gICAgICBvdXRbMF0gPSBzeCAqIGN5ICogY3ogKyBjeCAqIHN5ICogc3o7XG4gICAgICBvdXRbMV0gPSBjeCAqIHN5ICogY3ogKyBzeCAqIGN5ICogc3o7XG4gICAgICBvdXRbMl0gPSBjeCAqIGN5ICogc3ogLSBzeCAqIHN5ICogY3o7XG4gICAgICBvdXRbM10gPSBjeCAqIGN5ICogY3ogLSBzeCAqIHN5ICogc3o7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwienh5XCI6XG4gICAgICBvdXRbMF0gPSBzeCAqIGN5ICogY3ogLSBjeCAqIHN5ICogc3o7XG4gICAgICBvdXRbMV0gPSBjeCAqIHN5ICogY3ogKyBzeCAqIGN5ICogc3o7XG4gICAgICBvdXRbMl0gPSBjeCAqIGN5ICogc3ogKyBzeCAqIHN5ICogY3o7XG4gICAgICBvdXRbM10gPSBjeCAqIGN5ICogY3ogLSBzeCAqIHN5ICogc3o7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwienl4XCI6XG4gICAgICBvdXRbMF0gPSBzeCAqIGN5ICogY3ogLSBjeCAqIHN5ICogc3o7XG4gICAgICBvdXRbMV0gPSBjeCAqIHN5ICogY3ogKyBzeCAqIGN5ICogc3o7XG4gICAgICBvdXRbMl0gPSBjeCAqIGN5ICogc3ogLSBzeCAqIHN5ICogY3o7XG4gICAgICBvdXRbM10gPSBjeCAqIGN5ICogY3ogKyBzeCAqIHN5ICogc3o7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGFuZ2xlIG9yZGVyICcgKyBvcmRlcik7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgcXVhdGVybmlvblxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHZlY3RvciB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gXCJxdWF0KFwiICsgYVswXSArIFwiLCBcIiArIGFbMV0gKyBcIiwgXCIgKyBhWzJdICsgXCIsIFwiICsgYVszXSArIFwiKVwiO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcXVhdCBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHF1YXRlcm5pb25cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0ZXJuaW9uIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7cXVhdH0gYSBuZXcgcXVhdGVybmlvblxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgY2xvbmUgPSB2ZWM0LmNsb25lO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcXVhdCBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3F1YXR9IGEgbmV3IHF1YXRlcm5pb25cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIGZyb21WYWx1ZXMgPSB2ZWM0LmZyb21WYWx1ZXM7XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHF1YXQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdGhlIHNvdXJjZSBxdWF0ZXJuaW9uXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBjb3B5ID0gdmVjNC5jb3B5O1xuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHF1YXQgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIHNldCA9IHZlYzQuc2V0O1xuXG4vKipcbiAqIEFkZHMgdHdvIHF1YXQnc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgYWRkID0gdmVjNC5hZGQ7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBxdWF0Lm11bHRpcGx5fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgbXVsID0gbXVsdGlwbHk7XG5cbi8qKlxuICogU2NhbGVzIGEgcXVhdCBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIHNjYWxlID0gdmVjNC5zY2FsZTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gcXVhdCdzXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgZG90ID0gdmVjNC5kb3Q7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIGxlcnAgPSB2ZWM0LmxlcnA7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgdmFyIGxlbmd0aCA9IHZlYzQubGVuZ3RoO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgcXVhdC5sZW5ndGh9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBsZW4gPSBsZW5ndGg7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSBxdWF0XG4gKlxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBzcXVhcmVkIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBsZW5ndGggb2YgYVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgc3F1YXJlZExlbmd0aCA9IHZlYzQuc3F1YXJlZExlbmd0aDtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHF1YXQuc3F1YXJlZExlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIHNxckxlbiA9IHNxdWFyZWRMZW5ndGg7XG5cbi8qKlxuICogTm9ybWFsaXplIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgcXVhdGVybmlvbiB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIG5vcm1hbGl6ZSA9IHZlYzQubm9ybWFsaXplO1xuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHF1YXRlcm5pb25zIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBUaGUgZmlyc3QgcXVhdGVybmlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIFRoZSBzZWNvbmQgcXVhdGVybmlvbi5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgdmFyIGV4YWN0RXF1YWxzID0gdmVjNC5leGFjdEVxdWFscztcblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBxdWF0ZXJuaW9ucyBwb2ludCBhcHByb3hpbWF0ZWx5IHRvIHRoZSBzYW1lIGRpcmVjdGlvbi5cbiAqXG4gKiBCb3RoIHF1YXRlcm5pb25zIGFyZSBhc3N1bWVkIHRvIGJlIHVuaXQgbGVuZ3RoLlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIFRoZSBmaXJzdCB1bml0IHF1YXRlcm5pb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYiBUaGUgc2Vjb25kIHVuaXQgcXVhdGVybmlvbi5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBxdWF0ZXJuaW9ucyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyh2ZWM0LmRvdChhLCBiKSkgPj0gMSAtIGdsTWF0cml4LkVQU0lMT047XG59XG5cbi8qKlxuICogU2V0cyBhIHF1YXRlcm5pb24gdG8gcmVwcmVzZW50IHRoZSBzaG9ydGVzdCByb3RhdGlvbiBmcm9tIG9uZVxuICogdmVjdG9yIHRvIGFub3RoZXIuXG4gKlxuICogQm90aCB2ZWN0b3JzIGFyZSBhc3N1bWVkIHRvIGJlIHVuaXQgbGVuZ3RoLlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBpbml0aWFsIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIGRlc3RpbmF0aW9uIHZlY3RvclxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgdmFyIHJvdGF0aW9uVG8gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0bXB2ZWMzID0gdmVjMy5jcmVhdGUoKTtcbiAgdmFyIHhVbml0VmVjMyA9IHZlYzMuZnJvbVZhbHVlcygxLCAwLCAwKTtcbiAgdmFyIHlVbml0VmVjMyA9IHZlYzMuZnJvbVZhbHVlcygwLCAxLCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvdXQsIGEsIGIpIHtcbiAgICB2YXIgZG90ID0gdmVjMy5kb3QoYSwgYik7XG4gICAgaWYgKGRvdCA8IC0wLjk5OTk5OSkge1xuICAgICAgdmVjMy5jcm9zcyh0bXB2ZWMzLCB4VW5pdFZlYzMsIGEpO1xuICAgICAgaWYgKHZlYzMubGVuKHRtcHZlYzMpIDwgMC4wMDAwMDEpIHZlYzMuY3Jvc3ModG1wdmVjMywgeVVuaXRWZWMzLCBhKTtcbiAgICAgIHZlYzMubm9ybWFsaXplKHRtcHZlYzMsIHRtcHZlYzMpO1xuICAgICAgc2V0QXhpc0FuZ2xlKG91dCwgdG1wdmVjMywgTWF0aC5QSSk7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH0gZWxzZSBpZiAoZG90ID4gMC45OTk5OTkpIHtcbiAgICAgIG91dFswXSA9IDA7XG4gICAgICBvdXRbMV0gPSAwO1xuICAgICAgb3V0WzJdID0gMDtcbiAgICAgIG91dFszXSA9IDE7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZWMzLmNyb3NzKHRtcHZlYzMsIGEsIGIpO1xuICAgICAgb3V0WzBdID0gdG1wdmVjM1swXTtcbiAgICAgIG91dFsxXSA9IHRtcHZlYzNbMV07XG4gICAgICBvdXRbMl0gPSB0bXB2ZWMzWzJdO1xuICAgICAgb3V0WzNdID0gMSArIGRvdDtcbiAgICAgIHJldHVybiBub3JtYWxpemUob3V0LCBvdXQpO1xuICAgIH1cbiAgfTtcbn0oKTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIHNwaGVyaWNhbCBsaW5lYXIgaW50ZXJwb2xhdGlvbiB3aXRoIHR3byBjb250cm9sIHBvaW50c1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGMgdGhlIHRoaXJkIG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBkIHRoZSBmb3VydGggb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgdmFyIHNxbGVycCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRlbXAxID0gY3JlYXRlKCk7XG4gIHZhciB0ZW1wMiA9IGNyZWF0ZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gKG91dCwgYSwgYiwgYywgZCwgdCkge1xuICAgIHNsZXJwKHRlbXAxLCBhLCBkLCB0KTtcbiAgICBzbGVycCh0ZW1wMiwgYiwgYywgdCk7XG4gICAgc2xlcnAob3V0LCB0ZW1wMSwgdGVtcDIsIDIgKiB0ICogKDEgLSB0KSk7XG4gICAgcmV0dXJuIG91dDtcbiAgfTtcbn0oKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBzcGVjaWZpZWQgcXVhdGVybmlvbiB3aXRoIHZhbHVlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlblxuICogYXhlcy4gRWFjaCBheGlzIGlzIGEgdmVjMyBhbmQgaXMgZXhwZWN0ZWQgdG8gYmUgdW5pdCBsZW5ndGggYW5kXG4gKiBwZXJwZW5kaWN1bGFyIHRvIGFsbCBvdGhlciBzcGVjaWZpZWQgYXhlcy5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdmlldyAgdGhlIHZlY3RvciByZXByZXNlbnRpbmcgdGhlIHZpZXdpbmcgZGlyZWN0aW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gcmlnaHQgdGhlIHZlY3RvciByZXByZXNlbnRpbmcgdGhlIGxvY2FsIFwicmlnaHRcIiBkaXJlY3Rpb25cbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB1cCAgICB0aGUgdmVjdG9yIHJlcHJlc2VudGluZyB0aGUgbG9jYWwgXCJ1cFwiIGRpcmVjdGlvblxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgdmFyIHNldEF4ZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtYXRyID0gbWF0My5jcmVhdGUoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvdXQsIHZpZXcsIHJpZ2h0LCB1cCkge1xuICAgIG1hdHJbMF0gPSByaWdodFswXTtcbiAgICBtYXRyWzNdID0gcmlnaHRbMV07XG4gICAgbWF0cls2XSA9IHJpZ2h0WzJdO1xuICAgIG1hdHJbMV0gPSB1cFswXTtcbiAgICBtYXRyWzRdID0gdXBbMV07XG4gICAgbWF0cls3XSA9IHVwWzJdO1xuICAgIG1hdHJbMl0gPSAtdmlld1swXTtcbiAgICBtYXRyWzVdID0gLXZpZXdbMV07XG4gICAgbWF0cls4XSA9IC12aWV3WzJdO1xuICAgIHJldHVybiBub3JtYWxpemUob3V0LCBmcm9tTWF0MyhvdXQsIG1hdHIpKTtcbiAgfTtcbn0oKTsiLCJpbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb24uanNcIjtcblxuLyoqXG4gKiAzIERpbWVuc2lvbmFsIFZlY3RvclxuICogQG1vZHVsZSB2ZWMzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWMzXG4gKlxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFswXSA9IDA7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMzIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgzKTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgoYSkge1xuICB2YXIgeCA9IGFbMF07XG4gIHZhciB5ID0gYVsxXTtcbiAgdmFyIHogPSBhWzJdO1xuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMzIGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSwgeikge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzMgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgc291cmNlIHZlY3RvclxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgeCwgeSwgeikge1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYlswXTtcbiAgb3V0WzFdID0gYVsxXSAqIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKiBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIERpdmlkZXMgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAvIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTWF0aC5jZWlsIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gY2VpbFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2VpbChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5jZWlsKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmNlaWwoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguY2VpbChhWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gZmxvb3JcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsb29yKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmZsb29yKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmZsb29yKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmZsb29yKGFbMl0pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaW4ob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWluKGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1pbihhWzFdLCBiWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5taW4oYVsyXSwgYlsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pO1xuICBvdXRbMl0gPSBNYXRoLm1heChhWzJdLCBiWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBzeW1tZXRyaWMgcm91bmQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byByb3VuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmQob3V0LCBhKSB7XG4gIG91dFswXSA9IGdsTWF0cml4LnJvdW5kKGFbMF0pO1xuICBvdXRbMV0gPSBnbE1hdHJpeC5yb3VuZChhWzFdKTtcbiAgb3V0WzJdID0gZ2xNYXRyaXgucm91bmQoYVsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2NhbGVzIGEgdmVjMyBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzMncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF0gKiBzY2FsZTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV0gKiBzY2FsZTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl0gKiBzY2FsZTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF07XG4gIHZhciB5ID0gYlsxXSAtIGFbMV07XG4gIHZhciB6ID0gYlsyXSAtIGFbMl07XG4gIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXTtcbiAgdmFyIHkgPSBiWzFdIC0gYVsxXTtcbiAgdmFyIHogPSBiWzJdIC0gYVsyXTtcbiAgcmV0dXJuIHggKiB4ICsgeSAqIHkgKyB6ICogejtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGxlbmd0aCBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkTGVuZ3RoKGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgcmV0dXJuIHggKiB4ICsgeSAqIHkgKyB6ICogejtcbn1cblxuLyoqXG4gKiBOZWdhdGVzIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gbmVnYXRlXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGUob3V0LCBhKSB7XG4gIG91dFswXSA9IC1hWzBdO1xuICBvdXRbMV0gPSAtYVsxXTtcbiAgb3V0WzJdID0gLWFbMl07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIGludmVydFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gMS4wIC8gYVswXTtcbiAgb3V0WzFdID0gMS4wIC8gYVsxXTtcbiAgb3V0WzJdID0gMS4wIC8gYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgdmFyIGxlbiA9IHggKiB4ICsgeSAqIHkgKyB6ICogejtcbiAgaWYgKGxlbiA+IDApIHtcbiAgICAvL1RPRE86IGV2YWx1YXRlIHVzZSBvZiBnbG1faW52c3FydCBoZXJlP1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgfVxuICBvdXRbMF0gPSBhWzBdICogbGVuO1xuICBvdXRbMV0gPSBhWzFdICogbGVuO1xuICBvdXRbMl0gPSBhWzJdICogbGVuO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3QoYSwgYikge1xuICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdO1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3Mob3V0LCBhLCBiKSB7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgYXkgPSBhWzFdLFxuICAgIGF6ID0gYVsyXTtcbiAgdmFyIGJ4ID0gYlswXSxcbiAgICBieSA9IGJbMV0sXG4gICAgYnogPSBiWzJdO1xuICBvdXRbMF0gPSBheSAqIGJ6IC0gYXogKiBieTtcbiAgb3V0WzFdID0gYXogKiBieCAtIGF4ICogYno7XG4gIG91dFsyXSA9IGF4ICogYnkgLSBheSAqIGJ4O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gIHZhciBheCA9IGFbMF07XG4gIHZhciBheSA9IGFbMV07XG4gIHZhciBheiA9IGFbMl07XG4gIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpO1xuICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KTtcbiAgb3V0WzJdID0gYXogKyB0ICogKGJbMl0gLSBheik7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYSBzcGhlcmljYWwgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsZXJwKG91dCwgYSwgYiwgdCkge1xuICB2YXIgYW5nbGUgPSBNYXRoLmFjb3MoTWF0aC5taW4oTWF0aC5tYXgoZG90KGEsIGIpLCAtMSksIDEpKTtcbiAgdmFyIHNpblRvdGFsID0gTWF0aC5zaW4oYW5nbGUpO1xuICB2YXIgcmF0aW9BID0gTWF0aC5zaW4oKDEgLSB0KSAqIGFuZ2xlKSAvIHNpblRvdGFsO1xuICB2YXIgcmF0aW9CID0gTWF0aC5zaW4odCAqIGFuZ2xlKSAvIHNpblRvdGFsO1xuICBvdXRbMF0gPSByYXRpb0EgKiBhWzBdICsgcmF0aW9CICogYlswXTtcbiAgb3V0WzFdID0gcmF0aW9BICogYVsxXSArIHJhdGlvQiAqIGJbMV07XG4gIG91dFsyXSA9IHJhdGlvQSAqIGFbMl0gKyByYXRpb0IgKiBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgaGVybWl0ZSBpbnRlcnBvbGF0aW9uIHdpdGggdHdvIGNvbnRyb2wgcG9pbnRzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBjIHRoZSB0aGlyZCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gZCB0aGUgZm91cnRoIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhlcm1pdGUob3V0LCBhLCBiLCBjLCBkLCB0KSB7XG4gIHZhciBmYWN0b3JUaW1lczIgPSB0ICogdDtcbiAgdmFyIGZhY3RvcjEgPSBmYWN0b3JUaW1lczIgKiAoMiAqIHQgLSAzKSArIDE7XG4gIHZhciBmYWN0b3IyID0gZmFjdG9yVGltZXMyICogKHQgLSAyKSArIHQ7XG4gIHZhciBmYWN0b3IzID0gZmFjdG9yVGltZXMyICogKHQgLSAxKTtcbiAgdmFyIGZhY3RvcjQgPSBmYWN0b3JUaW1lczIgKiAoMyAtIDIgKiB0KTtcbiAgb3V0WzBdID0gYVswXSAqIGZhY3RvcjEgKyBiWzBdICogZmFjdG9yMiArIGNbMF0gKiBmYWN0b3IzICsgZFswXSAqIGZhY3RvcjQ7XG4gIG91dFsxXSA9IGFbMV0gKiBmYWN0b3IxICsgYlsxXSAqIGZhY3RvcjIgKyBjWzFdICogZmFjdG9yMyArIGRbMV0gKiBmYWN0b3I0O1xuICBvdXRbMl0gPSBhWzJdICogZmFjdG9yMSArIGJbMl0gKiBmYWN0b3IyICsgY1syXSAqIGZhY3RvcjMgKyBkWzJdICogZmFjdG9yNDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhIGJlemllciBpbnRlcnBvbGF0aW9uIHdpdGggdHdvIGNvbnRyb2wgcG9pbnRzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBjIHRoZSB0aGlyZCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gZCB0aGUgZm91cnRoIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJlemllcihvdXQsIGEsIGIsIGMsIGQsIHQpIHtcbiAgdmFyIGludmVyc2VGYWN0b3IgPSAxIC0gdDtcbiAgdmFyIGludmVyc2VGYWN0b3JUaW1lc1R3byA9IGludmVyc2VGYWN0b3IgKiBpbnZlcnNlRmFjdG9yO1xuICB2YXIgZmFjdG9yVGltZXMyID0gdCAqIHQ7XG4gIHZhciBmYWN0b3IxID0gaW52ZXJzZUZhY3RvclRpbWVzVHdvICogaW52ZXJzZUZhY3RvcjtcbiAgdmFyIGZhY3RvcjIgPSAzICogdCAqIGludmVyc2VGYWN0b3JUaW1lc1R3bztcbiAgdmFyIGZhY3RvcjMgPSAzICogZmFjdG9yVGltZXMyICogaW52ZXJzZUZhY3RvcjtcbiAgdmFyIGZhY3RvcjQgPSBmYWN0b3JUaW1lczIgKiB0O1xuICBvdXRbMF0gPSBhWzBdICogZmFjdG9yMSArIGJbMF0gKiBmYWN0b3IyICsgY1swXSAqIGZhY3RvcjMgKyBkWzBdICogZmFjdG9yNDtcbiAgb3V0WzFdID0gYVsxXSAqIGZhY3RvcjEgKyBiWzFdICogZmFjdG9yMiArIGNbMV0gKiBmYWN0b3IzICsgZFsxXSAqIGZhY3RvcjQ7XG4gIG91dFsyXSA9IGFbMl0gKiBmYWN0b3IxICsgYlsyXSAqIGZhY3RvcjIgKyBjWzJdICogZmFjdG9yMyArIGRbMl0gKiBmYWN0b3I0O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbWl0dGVkLCBhIHVuaXQgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShvdXQsIHNjYWxlKSB7XG4gIHNjYWxlID0gc2NhbGUgPT09IHVuZGVmaW5lZCA/IDEuMCA6IHNjYWxlO1xuICB2YXIgciA9IGdsTWF0cml4LlJBTkRPTSgpICogMi4wICogTWF0aC5QSTtcbiAgdmFyIHogPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIuMCAtIDEuMDtcbiAgdmFyIHpTY2FsZSA9IE1hdGguc3FydCgxLjAgLSB6ICogeikgKiBzY2FsZTtcbiAgb3V0WzBdID0gTWF0aC5jb3MocikgKiB6U2NhbGU7XG4gIG91dFsxXSA9IE1hdGguc2luKHIpICogelNjYWxlO1xuICBvdXRbMl0gPSB6ICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0NC5cbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQob3V0LCBhLCBtKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICB5ID0gYVsxXSxcbiAgICB6ID0gYVsyXTtcbiAgdmFyIHcgPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6ICsgbVsxNV07XG4gIHcgPSB3IHx8IDEuMDtcbiAgb3V0WzBdID0gKG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdKSAvIHc7XG4gIG91dFsxXSA9IChtWzFdICogeCArIG1bNV0gKiB5ICsgbVs5XSAqIHogKyBtWzEzXSkgLyB3O1xuICBvdXRbMl0gPSAobVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdKSAvIHc7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0My5cbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBtIHRoZSAzeDMgbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQzKG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV0sXG4gICAgeiA9IGFbMl07XG4gIG91dFswXSA9IHggKiBtWzBdICsgeSAqIG1bM10gKyB6ICogbVs2XTtcbiAgb3V0WzFdID0geCAqIG1bMV0gKyB5ICogbVs0XSArIHogKiBtWzddO1xuICBvdXRbMl0gPSB4ICogbVsyXSArIHkgKiBtWzVdICsgeiAqIG1bOF07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgcXVhdFxuICogQ2FuIGFsc28gYmUgdXNlZCBmb3IgZHVhbCBxdWF0ZXJuaW9ucy4gKE11bHRpcGx5IGl0IHdpdGggdGhlIHJlYWwgcGFydClcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBxIG5vcm1hbGl6ZWQgcXVhdGVybmlvbiB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtUXVhdChvdXQsIGEsIHEpIHtcbiAgLy8gRmFzdCBWZWN0b3IgUm90YXRpb24gdXNpbmcgUXVhdGVybmlvbnMgYnkgUm9iZXJ0IEVpc2VsZVxuICAvLyBodHRwczovL3Jhdy5vcmcvcHJvb2YvdmVjdG9yLXJvdGF0aW9uLXVzaW5nLXF1YXRlcm5pb25zL1xuXG4gIHZhciBxeCA9IHFbMF0sXG4gICAgcXkgPSBxWzFdLFxuICAgIHF6ID0gcVsyXSxcbiAgICBxdyA9IHFbM107XG4gIHZhciB2eCA9IGFbMF0sXG4gICAgdnkgPSBhWzFdLFxuICAgIHZ6ID0gYVsyXTtcblxuICAvLyB0ID0gcSB4IHZcbiAgdmFyIHR4ID0gcXkgKiB2eiAtIHF6ICogdnk7XG4gIHZhciB0eSA9IHF6ICogdnggLSBxeCAqIHZ6O1xuICB2YXIgdHogPSBxeCAqIHZ5IC0gcXkgKiB2eDtcblxuICAvLyB0ID0gMnRcbiAgdHggPSB0eCArIHR4O1xuICB0eSA9IHR5ICsgdHk7XG4gIHR6ID0gdHogKyB0ejtcblxuICAvLyB2ICsgdyB0ICsgcSB4IHRcbiAgb3V0WzBdID0gdnggKyBxdyAqIHR4ICsgcXkgKiB0eiAtIHF6ICogdHk7XG4gIG91dFsxXSA9IHZ5ICsgcXcgKiB0eSArIHF6ICogdHggLSBxeCAqIHR6O1xuICBvdXRbMl0gPSB2eiArIHF3ICogdHogKyBxeCAqIHR5IC0gcXkgKiB0eDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB4LWF4aXNcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCBUaGUgYW5nbGUgb2Ygcm90YXRpb24gaW4gcmFkaWFuc1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIGIsIHJhZCkge1xuICB2YXIgcCA9IFtdLFxuICAgIHIgPSBbXTtcbiAgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuICBwWzBdID0gYVswXSAtIGJbMF07XG4gIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcFsyXSA9IGFbMl0gLSBiWzJdO1xuXG4gIC8vcGVyZm9ybSByb3RhdGlvblxuICByWzBdID0gcFswXTtcbiAgclsxXSA9IHBbMV0gKiBNYXRoLmNvcyhyYWQpIC0gcFsyXSAqIE1hdGguc2luKHJhZCk7XG4gIHJbMl0gPSBwWzFdICogTWF0aC5zaW4ocmFkKSArIHBbMl0gKiBNYXRoLmNvcyhyYWQpO1xuXG4gIC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB5LWF4aXNcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCBUaGUgYW5nbGUgb2Ygcm90YXRpb24gaW4gcmFkaWFuc1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIGIsIHJhZCkge1xuICB2YXIgcCA9IFtdLFxuICAgIHIgPSBbXTtcbiAgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuICBwWzBdID0gYVswXSAtIGJbMF07XG4gIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcFsyXSA9IGFbMl0gLSBiWzJdO1xuXG4gIC8vcGVyZm9ybSByb3RhdGlvblxuICByWzBdID0gcFsyXSAqIE1hdGguc2luKHJhZCkgKyBwWzBdICogTWF0aC5jb3MocmFkKTtcbiAgclsxXSA9IHBbMV07XG4gIHJbMl0gPSBwWzJdICogTWF0aC5jb3MocmFkKSAtIHBbMF0gKiBNYXRoLnNpbihyYWQpO1xuXG4gIC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB6LWF4aXNcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCBUaGUgYW5nbGUgb2Ygcm90YXRpb24gaW4gcmFkaWFuc1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIGIsIHJhZCkge1xuICB2YXIgcCA9IFtdLFxuICAgIHIgPSBbXTtcbiAgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuICBwWzBdID0gYVswXSAtIGJbMF07XG4gIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcFsyXSA9IGFbMl0gLSBiWzJdO1xuXG4gIC8vcGVyZm9ybSByb3RhdGlvblxuICByWzBdID0gcFswXSAqIE1hdGguY29zKHJhZCkgLSBwWzFdICogTWF0aC5zaW4ocmFkKTtcbiAgclsxXSA9IHBbMF0gKiBNYXRoLnNpbihyYWQpICsgcFsxXSAqIE1hdGguY29zKHJhZCk7XG4gIHJbMl0gPSBwWzJdO1xuXG4gIC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIDNEIHZlY3RvcnNcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIFRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbmdsZShhLCBiKSB7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgYXkgPSBhWzFdLFxuICAgIGF6ID0gYVsyXSxcbiAgICBieCA9IGJbMF0sXG4gICAgYnkgPSBiWzFdLFxuICAgIGJ6ID0gYlsyXSxcbiAgICBtYWcgPSBNYXRoLnNxcnQoKGF4ICogYXggKyBheSAqIGF5ICsgYXogKiBheikgKiAoYnggKiBieCArIGJ5ICogYnkgKyBieiAqIGJ6KSksXG4gICAgY29zaW5lID0gbWFnICYmIGRvdChhLCBiKSAvIG1hZztcbiAgcmV0dXJuIE1hdGguYWNvcyhNYXRoLm1pbihNYXRoLm1heChjb3NpbmUsIC0xKSwgMSkpO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzMgdG8gemVyb1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvKG91dCkge1xuICBvdXRbMF0gPSAwLjA7XG4gIG91dFsxXSA9IDAuMDtcbiAgb3V0WzJdID0gMC4wO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuIFwidmVjMyhcIiArIGFbMF0gKyBcIiwgXCIgKyBhWzFdICsgXCIsIFwiICsgYVsyXSArIFwiKVwiO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIFRoZSBmaXJzdCB2ZWN0b3IuXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgc2Vjb25kIHZlY3Rvci5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdICYmIGFbMl0gPT09IGJbMl07XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIGZpcnN0IHZlY3Rvci5cbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgIGExID0gYVsxXSxcbiAgICBhMiA9IGFbMl07XG4gIHZhciBiMCA9IGJbMF0sXG4gICAgYjEgPSBiWzFdLFxuICAgIGIyID0gYlsyXTtcbiAgcmV0dXJuIE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJiBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiYgTWF0aC5hYnMoYTIgLSBiMikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpO1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zdWJ0cmFjdH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0O1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5kaXZpZGV9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBkaXYgPSBkaXZpZGU7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLmRpc3RhbmNlfVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgZGlzdCA9IGRpc3RhbmNlO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zcXVhcmVkRGlzdGFuY2V9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBzcXJEaXN0ID0gc3F1YXJlZERpc3RhbmNlO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5sZW5ndGh9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBsZW4gPSBsZW5ndGg7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLnNxdWFyZWRMZW5ndGh9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuXG4vKipcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWMzcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWMzLiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjM3MgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm5cbiAqIEByZXR1cm5zIHtBcnJheX0gYVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgZm9yRWFjaCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZlYyA9IGNyZWF0ZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIHZhciBpLCBsO1xuICAgIGlmICghc3RyaWRlKSB7XG4gICAgICBzdHJpZGUgPSAzO1xuICAgIH1cbiAgICBpZiAoIW9mZnNldCkge1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgaWYgKGNvdW50KSB7XG4gICAgICBsID0gTWF0aC5taW4oY291bnQgKiBzdHJpZGUgKyBvZmZzZXQsIGEubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbCA9IGEubGVuZ3RoO1xuICAgIH1cbiAgICBmb3IgKGkgPSBvZmZzZXQ7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgdmVjWzBdID0gYVtpXTtcbiAgICAgIHZlY1sxXSA9IGFbaSArIDFdO1xuICAgICAgdmVjWzJdID0gYVtpICsgMl07XG4gICAgICBmbih2ZWMsIHZlYywgYXJnKTtcbiAgICAgIGFbaV0gPSB2ZWNbMF07XG4gICAgICBhW2kgKyAxXSA9IHZlY1sxXTtcbiAgICAgIGFbaSArIDJdID0gdmVjWzJdO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfTtcbn0oKTsiLCJpbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb24uanNcIjtcblxuLyoqXG4gKiA0IERpbWVuc2lvbmFsIFZlY3RvclxuICogQG1vZHVsZSB2ZWM0XG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWM0XG4gKlxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFswXSA9IDA7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gY2xvbmVcbiAqIEByZXR1cm5zIHt2ZWM0fSBhIG5ldyA0RCB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjNCBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyh4LCB5LCB6LCB3KSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg0KTtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgb3V0WzNdID0gdztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjNCB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzQgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgeCwgeSwgeiwgdykge1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICBvdXRbM10gPSB3O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAqIGJbMl07XG4gIG91dFszXSA9IGFbM10gKiBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIERpdmlkZXMgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAvIGJbMl07XG4gIG91dFszXSA9IGFbM10gLyBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE1hdGguY2VpbCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIGNlaWxcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNlaWwob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguY2VpbChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5jZWlsKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmNlaWwoYVsyXSk7XG4gIG91dFszXSA9IE1hdGguY2VpbChhWzNdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gZmxvb3JcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsb29yKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmZsb29yKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmZsb29yKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmZsb29yKGFbMl0pO1xuICBvdXRbM10gPSBNYXRoLmZsb29yKGFbM10pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaW4ob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWluKGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1pbihhWzFdLCBiWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5taW4oYVsyXSwgYlsyXSk7XG4gIG91dFszXSA9IE1hdGgubWluKGFbM10sIGJbM10pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG1heGltdW0gb2YgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5tYXgoYVsyXSwgYlsyXSk7XG4gIG91dFszXSA9IE1hdGgubWF4KGFbM10sIGJbM10pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIHN5bW1ldHJpYyByb3VuZCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIHJvdW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChvdXQsIGEpIHtcbiAgb3V0WzBdID0gZ2xNYXRyaXgucm91bmQoYVswXSk7XG4gIG91dFsxXSA9IGdsTWF0cml4LnJvdW5kKGFbMV0pO1xuICBvdXRbMl0gPSBnbE1hdHJpeC5yb3VuZChhWzJdKTtcbiAgb3V0WzNdID0gZ2xNYXRyaXgucm91bmQoYVszXSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2NhbGVzIGEgdmVjNCBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICBvdXRbM10gPSBhWzNdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byB2ZWM0J3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZUFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdICogc2NhbGU7XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdICogc2NhbGU7XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdICogc2NhbGU7XG4gIG91dFszXSA9IGFbM10gKyBiWzNdICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICB2YXIgeCA9IGJbMF0gLSBhWzBdO1xuICB2YXIgeSA9IGJbMV0gLSBhWzFdO1xuICB2YXIgeiA9IGJbMl0gLSBhWzJdO1xuICB2YXIgdyA9IGJbM10gLSBhWzNdO1xuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXTtcbiAgdmFyIHkgPSBiWzFdIC0gYVsxXTtcbiAgdmFyIHogPSBiWzJdIC0gYVsyXTtcbiAgdmFyIHcgPSBiWzNdIC0gYVszXTtcbiAgcmV0dXJuIHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gIHZhciB4ID0gYVswXTtcbiAgdmFyIHkgPSBhWzFdO1xuICB2YXIgeiA9IGFbMl07XG4gIHZhciB3ID0gYVszXTtcbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBzcXVhcmVkIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZExlbmd0aChhKSB7XG4gIHZhciB4ID0gYVswXTtcbiAgdmFyIHkgPSBhWzFdO1xuICB2YXIgeiA9IGFbMl07XG4gIHZhciB3ID0gYVszXTtcbiAgcmV0dXJuIHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3O1xufVxuXG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byBuZWdhdGVcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICBvdXRbMl0gPSAtYVsyXTtcbiAgb3V0WzNdID0gLWFbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIGludmVydFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gMS4wIC8gYVswXTtcbiAgb3V0WzFdID0gMS4wIC8gYVsxXTtcbiAgb3V0WzJdID0gMS4wIC8gYVsyXTtcbiAgb3V0WzNdID0gMS4wIC8gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgdmFyIHcgPSBhWzNdO1xuICB2YXIgbGVuID0geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHc7XG4gIGlmIChsZW4gPiAwKSB7XG4gICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICB9XG4gIG91dFswXSA9IHggKiBsZW47XG4gIG91dFsxXSA9IHkgKiBsZW47XG4gIG91dFsyXSA9IHogKiBsZW47XG4gIG91dFszXSA9IHcgKiBsZW47XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl0gKyBhWzNdICogYlszXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjcm9zcy1wcm9kdWN0IG9mIHRocmVlIHZlY3RvcnMgaW4gYSA0LWRpbWVuc2lvbmFsIHNwYWNlXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IHUgdGhlIGZpcnN0IHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IHYgdGhlIHNlY29uZCB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSB3IHRoZSB0aGlyZCB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWM0fSByZXN1bHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzKG91dCwgdSwgdiwgdykge1xuICB2YXIgQSA9IHZbMF0gKiB3WzFdIC0gdlsxXSAqIHdbMF0sXG4gICAgQiA9IHZbMF0gKiB3WzJdIC0gdlsyXSAqIHdbMF0sXG4gICAgQyA9IHZbMF0gKiB3WzNdIC0gdlszXSAqIHdbMF0sXG4gICAgRCA9IHZbMV0gKiB3WzJdIC0gdlsyXSAqIHdbMV0sXG4gICAgRSA9IHZbMV0gKiB3WzNdIC0gdlszXSAqIHdbMV0sXG4gICAgRiA9IHZbMl0gKiB3WzNdIC0gdlszXSAqIHdbMl07XG4gIHZhciBHID0gdVswXTtcbiAgdmFyIEggPSB1WzFdO1xuICB2YXIgSSA9IHVbMl07XG4gIHZhciBKID0gdVszXTtcbiAgb3V0WzBdID0gSCAqIEYgLSBJICogRSArIEogKiBEO1xuICBvdXRbMV0gPSAtKEcgKiBGKSArIEkgKiBDIC0gSiAqIEI7XG4gIG91dFsyXSA9IEcgKiBFIC0gSCAqIEMgKyBKICogQTtcbiAgb3V0WzNdID0gLShHICogRCkgKyBIICogQiAtIEkgKiBBO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gIHZhciBheCA9IGFbMF07XG4gIHZhciBheSA9IGFbMV07XG4gIHZhciBheiA9IGFbMl07XG4gIHZhciBhdyA9IGFbM107XG4gIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpO1xuICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KTtcbiAgb3V0WzJdID0gYXogKyB0ICogKGJbMl0gLSBheik7XG4gIG91dFszXSA9IGF3ICsgdCAqIChiWzNdIC0gYXcpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbWl0dGVkLCBhIHVuaXQgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShvdXQsIHNjYWxlKSB7XG4gIHNjYWxlID0gc2NhbGUgPT09IHVuZGVmaW5lZCA/IDEuMCA6IHNjYWxlO1xuXG4gIC8vIE1hcnNhZ2xpYSwgR2VvcmdlLiBDaG9vc2luZyBhIFBvaW50IGZyb20gdGhlIFN1cmZhY2Ugb2YgYVxuICAvLyBTcGhlcmUuIEFubi4gTWF0aC4gU3RhdGlzdC4gNDMgKDE5NzIpLCBuby4gMiwgNjQ1LS02NDYuXG4gIC8vIGh0dHA6Ly9wcm9qZWN0ZXVjbGlkLm9yZy9ldWNsaWQuYW9tcy8xMTc3NjkyNjQ0O1xuICB2YXIgdjEsIHYyLCB2MywgdjQ7XG4gIHZhciBzMSwgczI7XG4gIHZhciByYW5kO1xuICByYW5kID0gZ2xNYXRyaXguUkFORE9NKCk7XG4gIHYxID0gcmFuZCAqIDIgLSAxO1xuICB2MiA9ICg0ICogZ2xNYXRyaXguUkFORE9NKCkgLSAyKSAqIE1hdGguc3FydChyYW5kICogLXJhbmQgKyByYW5kKTtcbiAgczEgPSB2MSAqIHYxICsgdjIgKiB2MjtcbiAgcmFuZCA9IGdsTWF0cml4LlJBTkRPTSgpO1xuICB2MyA9IHJhbmQgKiAyIC0gMTtcbiAgdjQgPSAoNCAqIGdsTWF0cml4LlJBTkRPTSgpIC0gMikgKiBNYXRoLnNxcnQocmFuZCAqIC1yYW5kICsgcmFuZCk7XG4gIHMyID0gdjMgKiB2MyArIHY0ICogdjQ7XG4gIHZhciBkID0gTWF0aC5zcXJ0KCgxIC0gczEpIC8gczIpO1xuICBvdXRbMF0gPSBzY2FsZSAqIHYxO1xuICBvdXRbMV0gPSBzY2FsZSAqIHYyO1xuICBvdXRbMl0gPSBzY2FsZSAqIHYzICogZDtcbiAgb3V0WzNdID0gc2NhbGUgKiB2NCAqIGQ7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjNCB3aXRoIGEgbWF0NC5cbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgIHkgPSBhWzFdLFxuICAgIHogPSBhWzJdLFxuICAgIHcgPSBhWzNdO1xuICBvdXRbMF0gPSBtWzBdICogeCArIG1bNF0gKiB5ICsgbVs4XSAqIHogKyBtWzEyXSAqIHc7XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdICogdztcbiAgb3V0WzJdID0gbVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdICogdztcbiAgb3V0WzNdID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdICogdztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWM0IHdpdGggYSBxdWF0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gcSBub3JtYWxpemVkIHF1YXRlcm5pb24gdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQob3V0LCBhLCBxKSB7XG4gIC8vIEZhc3QgVmVjdG9yIFJvdGF0aW9uIHVzaW5nIFF1YXRlcm5pb25zIGJ5IFJvYmVydCBFaXNlbGVcbiAgLy8gaHR0cHM6Ly9yYXcub3JnL3Byb29mL3ZlY3Rvci1yb3RhdGlvbi11c2luZy1xdWF0ZXJuaW9ucy9cblxuICB2YXIgcXggPSBxWzBdLFxuICAgIHF5ID0gcVsxXSxcbiAgICBxeiA9IHFbMl0sXG4gICAgcXcgPSBxWzNdO1xuICB2YXIgdnggPSBhWzBdLFxuICAgIHZ5ID0gYVsxXSxcbiAgICB2eiA9IGFbMl07XG5cbiAgLy8gdCA9IHEgeCB2XG4gIHZhciB0eCA9IHF5ICogdnogLSBxeiAqIHZ5O1xuICB2YXIgdHkgPSBxeiAqIHZ4IC0gcXggKiB2ejtcbiAgdmFyIHR6ID0gcXggKiB2eSAtIHF5ICogdng7XG5cbiAgLy8gdCA9IDJ0XG4gIHR4ID0gdHggKyB0eDtcbiAgdHkgPSB0eSArIHR5O1xuICB0eiA9IHR6ICsgdHo7XG5cbiAgLy8gdiArIHcgdCArIHEgeCB0XG4gIG91dFswXSA9IHZ4ICsgcXcgKiB0eCArIHF5ICogdHogLSBxeiAqIHR5O1xuICBvdXRbMV0gPSB2eSArIHF3ICogdHkgKyBxeiAqIHR4IC0gcXggKiB0ejtcbiAgb3V0WzJdID0gdnogKyBxdyAqIHR6ICsgcXggKiB0eSAtIHF5ICogdHg7XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNCB0byB6ZXJvXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHplcm8ob3V0KSB7XG4gIG91dFswXSA9IDAuMDtcbiAgb3V0WzFdID0gMC4wO1xuICBvdXRbMl0gPSAwLjA7XG4gIG91dFszXSA9IDAuMDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmVjdG9yXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiBcInZlYzQoXCIgKyBhWzBdICsgXCIsIFwiICsgYVsxXSArIFwiLCBcIiArIGFbMl0gKyBcIiwgXCIgKyBhWzNdICsgXCIpXCI7XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgVGhlIGZpcnN0IHZlY3Rvci5cbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJiBhWzNdID09PSBiWzNdO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIFRoZSBmaXJzdCB2ZWN0b3IuXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiBUaGUgc2Vjb25kIHZlY3Rvci5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICBhMSA9IGFbMV0sXG4gICAgYTIgPSBhWzJdLFxuICAgIGEzID0gYVszXTtcbiAgdmFyIGIwID0gYlswXSxcbiAgICBiMSA9IGJbMV0sXG4gICAgYjIgPSBiWzJdLFxuICAgIGIzID0gYlszXTtcbiAgcmV0dXJuIE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJiBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiYgTWF0aC5hYnMoYTIgLSBiMikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpICYmIE1hdGguYWJzKGEzIC0gYjMpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEzKSwgTWF0aC5hYnMoYjMpKTtcbn1cblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQuc3VidHJhY3R9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBzdWIgPSBzdWJ0cmFjdDtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQubXVsdGlwbHl9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBtdWwgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQuZGl2aWRlfVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgZGl2ID0gZGl2aWRlO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5kaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIGRpc3QgPSBkaXN0YW5jZTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQuc3F1YXJlZERpc3RhbmNlfVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgc3FyRGlzdCA9IHNxdWFyZWREaXN0YW5jZTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQubGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgbGVuID0gbGVuZ3RoO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5zcXVhcmVkTGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgc3FyTGVuID0gc3F1YXJlZExlbmd0aDtcblxuLyoqXG4gKiBQZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG92ZXIgYW4gYXJyYXkgb2YgdmVjNHMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdHJpZGUgTnVtYmVyIG9mIGVsZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0IG9mIGVhY2ggdmVjNC4gSWYgMCBhc3N1bWVzIHRpZ2h0bHkgcGFja2VkXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IE51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzRzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCB2ZWN0b3IgaW4gdGhlIGFycmF5XG4gKiBAcGFyYW0ge09iamVjdH0gW2FyZ10gYWRkaXRpb25hbCBhcmd1bWVudCB0byBwYXNzIHRvIGZuXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIGZvckVhY2ggPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB2ZWMgPSBjcmVhdGUoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBzdHJpZGUsIG9mZnNldCwgY291bnQsIGZuLCBhcmcpIHtcbiAgICB2YXIgaSwgbDtcbiAgICBpZiAoIXN0cmlkZSkge1xuICAgICAgc3RyaWRlID0gNDtcbiAgICB9XG4gICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuICAgIGlmIChjb3VudCkge1xuICAgICAgbCA9IE1hdGgubWluKGNvdW50ICogc3RyaWRlICsgb2Zmc2V0LCBhLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGwgPSBhLmxlbmd0aDtcbiAgICB9XG4gICAgZm9yIChpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgIHZlY1swXSA9IGFbaV07XG4gICAgICB2ZWNbMV0gPSBhW2kgKyAxXTtcbiAgICAgIHZlY1syXSA9IGFbaSArIDJdO1xuICAgICAgdmVjWzNdID0gYVtpICsgM107XG4gICAgICBmbih2ZWMsIHZlYywgYXJnKTtcbiAgICAgIGFbaV0gPSB2ZWNbMF07XG4gICAgICBhW2kgKyAxXSA9IHZlY1sxXTtcbiAgICAgIGFbaSArIDJdID0gdmVjWzJdO1xuICAgICAgYVtpICsgM10gPSB2ZWNbM107XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9O1xufSgpOyIsImltcG9ydCB7IHZlYzMgfSBmcm9tICdnbC1tYXRyaXgnO1xyXG5cclxuLy8gU2ltcGxlIDItQm9uZSBJSyBTb2x2ZXIgKEFuYWx5dGljKVxyXG4vLyBUaGlnaCAtPiBLbmVlIC0+IEZvb3RcclxuLy8gUmV0dXJucyB0aGUgcG9zaXRpb25zIG9mIHRoZSBLbmVlIGFuZCB0aGUgQWRqdXN0ZWQgRm9vdCAoaWYgdW5yZWFjaGFibGUpXHJcbmV4cG9ydCBmdW5jdGlvbiBzb2x2ZUlLKFxyXG4gICAgcm9vdDogdmVjMyxcclxuICAgIHRhcmdldDogdmVjMyxcclxuICAgIGxlbjE6IG51bWJlcixcclxuICAgIGxlbjI6IG51bWJlcixcclxuICAgIHBvbGVEaXI6IHZlYzMgLy8gRGlyZWN0aW9uIHRoZSBrbmVlIHNob3VsZCBwb2ludFxyXG4pOiB7IGtuZWU6IHZlYzMsIGZvb3Q6IHZlYzMgfSB7XHJcblxyXG4gICAgLy8gMS4gVmVjdG9yIGZyb20gUm9vdCB0byBUYXJnZXRcclxuICAgIGNvbnN0IGF4aXMgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgdmVjMy5zdWJ0cmFjdChheGlzLCB0YXJnZXQsIHJvb3QpO1xyXG4gICAgY29uc3QgZGlzdCA9IHZlYzMubGVuZ3RoKGF4aXMpO1xyXG5cclxuICAgIC8vIDIuIENsYW1wIHRhcmdldCBpZiBvdXQgb2YgcmVhY2hcclxuICAgIGNvbnN0IG1heExlbiA9IGxlbjEgKyBsZW4yO1xyXG4gICAgY29uc3QgZmluYWxGb290ID0gdmVjMy5jbG9uZSh0YXJnZXQpO1xyXG5cclxuICAgIGlmIChkaXN0ID49IG1heExlbikge1xyXG4gICAgICAgIC8vIEZ1bGx5IGV4dGVuZGVkXHJcbiAgICAgICAgdmVjMy5ub3JtYWxpemUoYXhpcywgYXhpcyk7XHJcbiAgICAgICAgdmVjMy5zY2FsZUFuZEFkZChmaW5hbEZvb3QsIHJvb3QsIGF4aXMsIG1heExlbik7XHJcblxyXG4gICAgICAgIGNvbnN0IGtuZWUgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgICAgIHZlYzMuc2NhbGVBbmRBZGQoa25lZSwgcm9vdCwgYXhpcywgbGVuMSk7XHJcbiAgICAgICAgcmV0dXJuIHsga25lZSwgZm9vdDogZmluYWxGb290IH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMy4gTGF3IG9mIENvc2luZXMgdG8gZmluZCBrbmVlIGFuZ2xlXHJcbiAgICAvLyBkaXN0XjIgPSBsZW4xXjIgKyBsZW4yXjIgLSAyKmxlbjEqbGVuMipjb3Moa25lZV9hbmdsZSkgLT4gVGhpcyBpcyBpbnRlcm5hbCBhbmdsZVxyXG4gICAgLy8gV2UgbmVlZCB0aGUgbGF5b3V0IGluIDNELlxyXG5cclxuICAgIC8vIEFuYWx5dGljIHNvbHV0aW9uIGluIDJEIHBsYW5lIGZvcm1lZCBieSBSb290LCBUYXJnZXQsIGFuZCBQb2xlXHJcblxyXG4gICAgLy8gQWxwaGE6IEFuZ2xlIGF0IFJvb3QgKFRoaWdoKVxyXG4gICAgLy8gQ29zIEFscGhhID0gKGxlbjFeMiArIGRpc3ReMiAtIGxlbjJeMikgLyAoMiAqIGxlbjEgKiBkaXN0KVxyXG4gICAgY29uc3QgY29zQWxwaGEgPSAobGVuMSAqIGxlbjEgKyBkaXN0ICogZGlzdCAtIGxlbjIgKiBsZW4yKSAvICgyICogbGVuMSAqIGRpc3QpO1xyXG4gICAgLy8gQ2xhbXAgZm9yIHNhZmV0eVxyXG4gICAgY29uc3QgY2xhbXBlZENvc0FscGhhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGNvc0FscGhhKSk7XHJcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYWNvcyhjbGFtcGVkQ29zQWxwaGEpO1xyXG5cclxuICAgIC8vIDQuIENvbnN0cnVjdCB0aGUgQ29vcmRpbmF0ZSBTeXN0ZW1cclxuICAgIC8vIFotYXhpczogVmVjdG9yIHRvIFRhcmdldCAobm9ybWFsaXplZClcclxuICAgIGNvbnN0IHpBeGlzID0gdmVjMy5jbG9uZShheGlzKTtcclxuICAgIHZlYzMubm9ybWFsaXplKHpBeGlzLCB6QXhpcyk7XHJcblxyXG4gICAgLy8gWC1heGlzOiBQZXJwZW5kaWN1bGFyIHRvIFogYW5kIFBvbGUgKEtuZWUgYmVuZGluZyBkaXJlY3Rpb24pXHJcbiAgICBjb25zdCB4QXhpcyA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICB2ZWMzLmNyb3NzKHhBeGlzLCB6QXhpcywgcG9sZURpcik7XHJcbiAgICBpZiAodmVjMy5sZW5ndGgoeEF4aXMpIDwgMC4wMDEpIHtcclxuICAgICAgICAvLyBQb2xlIGlzIHBhcmFsbGVsIHRvIGF4aXMsIHBpY2sgZ2VuZXJpYyB1cFxyXG4gICAgICAgIHZlYzMuY3Jvc3MoeEF4aXMsIHpBeGlzLCB2ZWMzLmZyb21WYWx1ZXMoMCwgMSwgMCkpO1xyXG4gICAgfVxyXG4gICAgdmVjMy5ub3JtYWxpemUoeEF4aXMsIHhBeGlzKTtcclxuXHJcbiAgICAvLyBZLWF4aXM6IFVwIHZlY3RvciBpbiB0aGUgcGxhbmVcclxuICAgIGNvbnN0IHlBeGlzID0gdmVjMy5jcmVhdGUoKTtcclxuICAgIHZlYzMuY3Jvc3MoeUF4aXMsIHhBeGlzLCB6QXhpcyk7XHJcbiAgICB2ZWMzLm5vcm1hbGl6ZSh5QXhpcywgeUF4aXMpO1xyXG5cclxuICAgIC8vIDUuIENhbGN1bGF0ZSBLbmVlIFBvc2l0aW9uXHJcbiAgICAvLyBSb3RhdGUgdmVjdG9yIChsZW4xLCAwLCAwKSBieSBhbHBoYSBpbiB0aGUgcGxhbmU/XHJcbiAgICAvLyBJbiBvdXIgYmFzaXM6XHJcbiAgICAvLyBSb290IGlzICgwLDApXHJcbiAgICAvLyBUYXJnZXQgaXMgKGRpc3QsIDApIGFsb25nIFpcclxuICAgIC8vIEtuZWUgaXMgYXQgZGlzdGFuY2UgbGVuMSwgcm90YXRlZCBieSBhbHBoYSBhd2F5IGZyb20gWiB0b3dhcmRzIFlcclxuXHJcbiAgICAvLyBLbmVlIExvY2FsOlxyXG4gICAgLy8geiA9IGxlbjEgKiBjb3MoYWxwaGEpXHJcbiAgICAvLyB5ID0gbGVuMSAqIHNpbihhbHBoYSlcclxuXHJcbiAgICBjb25zdCBrbmVlWiA9IGxlbjEgKiBjbGFtcGVkQ29zQWxwaGE7XHJcbiAgICBjb25zdCBrbmVlWSA9IGxlbjEgKiBNYXRoLnNpbihhbHBoYSk7XHJcblxyXG4gICAgY29uc3Qga25lZSA9IHZlYzMuY2xvbmUocm9vdCk7XHJcbiAgICB2ZWMzLnNjYWxlQW5kQWRkKGtuZWUsIGtuZWUsIHpBeGlzLCBrbmVlWik7XHJcbiAgICB2ZWMzLnNjYWxlQW5kQWRkKGtuZWUsIGtuZWUsIHlBeGlzLCBrbmVlWSk7XHJcblxyXG4gICAgcmV0dXJuIHsga25lZSwgZm9vdDogZmluYWxGb290IH07XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIExvZ2dlciB7XHJcbiAgICBzdGF0aWMgbG9nKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBbTE9HXSAke21zZ31gLCAuLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZXJyb3IobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgW0VSUl0gJHttc2d9YCwgLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHdhcm4obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBbV0FSTl0gJHttc2d9YCwgLi4uYXJncyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgbWF0NCwgdmVjMywgdmVjNCB9IGZyb20gJ2dsLW1hdHJpeCc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHNoYWRlckNvZGUgZnJvbSAnLi9zaGFkZXJzLndnc2wnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCBncmFzc0ltYWdlU3JjIGZyb20gJy4vYXNzZXRzL2N1c3RvbV90ZXh0dXJlLmpwZyc7XHJcbmltcG9ydCB7IGZibSB9IGZyb20gJy4vbm9pc2UnO1xyXG5pbXBvcnQgeyBTaW1wbGVSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyZXInO1xyXG5pbXBvcnQgeyBTcGlkZXIgfSBmcm9tICcuL3NwaWRlcic7XHJcbmltcG9ydCB7IFBsYXllck1vZGVsIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XHJcbmltcG9ydCB7IFBhcnRpY2xlU3lzdGVtIH0gZnJvbSAnLi9wYXJ0aWNsZXMnO1xyXG5pbXBvcnQgeyBQaWNrdXBTeXN0ZW0gfSBmcm9tICcuL3BpY2t1cHMnO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dmeC1tYWluJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbkxvZ2dlci5sb2coJ0NhbnZhcyBlbGVtZW50OicsIGNhbnZhcyk7XHJcbmNvbnNvbGUubG9nKCdDYW52YXMgaW5pdGlhbCBzaXplOicsIGNhbnZhcy53aWR0aCwgJ3gnLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbmNvbnN0IGFkYXB0ZXIgPSBhd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKCk7XHJcbmNvbnNvbGUubG9nKCdXZWJHUFUgQWRhcHRlcjonLCBhZGFwdGVyKTtcclxuaWYgKCFhZGFwdGVyKSB0aHJvdyBuZXcgRXJyb3IoJ1dlYkdQVSBub3Qgc3VwcG9ydGVkLicpO1xyXG5cclxuY29uc3QgZGV2aWNlID0gYXdhaXQgYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XHJcbmNvbnNvbGUubG9nKCdXZWJHUFUgRGV2aWNlOicsIGRldmljZSk7XHJcblxyXG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdwdScpO1xyXG5jb25zb2xlLmxvZygnV2ViR1BVIENvbnRleHQ6JywgY29udGV4dCk7XHJcblxyXG5jb25zdCBmb3JtYXQgPSBuYXZpZ2F0b3IuZ3B1LmdldFByZWZlcnJlZENhbnZhc0Zvcm1hdCgpO1xyXG5jb25zb2xlLmxvZygnUHJlZmVycmVkIGZvcm1hdDonLCBmb3JtYXQpO1xyXG5cclxuLy8gU2hhZG93IE1hcCBDb25zdGFudHNcclxuY29uc3QgU0hBRE9XX1NJWkUgPSAyMDQ4O1xyXG5cclxuLy8gR2xvYmFsIElEIGNvdW50ZXIgZm9yIGluc3RhbmNlc1xyXG5sZXQgbmV4dElkID0gMDtcclxuXHJcbmNvbnRleHQ/LmNvbmZpZ3VyZSh7IGRldmljZSwgZm9ybWF0LCBhbHBoYU1vZGU6ICdvcGFxdWUnIH0pO1xyXG5jb25zb2xlLmxvZygnQ29udGV4dCBjb25maWd1cmVkJyk7XHJcblxyXG4vLyAtLS0gVGV4dHVyZSBMb2FkaW5nIC0tLVxyXG4vLyAtLS0gVGV4dHVyZSBMb2FkaW5nIC0tLVxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCBkaXJ0SW1hZ2VTcmMgZnJvbSAnLi9hc3NldHMvZGlydC5qcGcnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCBuZXdHcmFzc0ltYWdlU3JjIGZyb20gJy4vYXNzZXRzL2dyYXNzX3NpZGUuanBnJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgZ3Jhc3NUb3BJbWFnZVNyYyBmcm9tICcuL2Fzc2V0cy9ncmFzc190b3AucG5nJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgdG50SW1hZ2VTcmMgZnJvbSAnLi9hc3NldHMvdG50LnBuZyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHRvcmNoSW1hZ2VTcmMgZnJvbSAnLi9hc3NldHMvdG9yY2gucG5nJztcclxuXHJcbi8vIC0tLSBUZXh0dXJlIExvYWRpbmcgLS0tXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRBbmRSZXNpemVCaXRtYXAoc3JjOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGltZy5vbmxvYWQgPSByZXNvbHZlKTtcclxuXHJcbiAgICAvLyBSZXNpemUgdmlhIENhbnZhc1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGlmICghY3R4KSB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBnZXQgMmQgY29udGV4dCcpO1xyXG5cclxuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHJldHVybiBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChjYW52YXMpO1xyXG59XHJcblxyXG5jb25zdCBURVhUVVJFX1NJWkUgPSAyNTY7XHJcbmNvbnNvbGUubG9nKCdMb2FkaW5nIHRleHR1cmVzLi4uJyk7XHJcbmNvbnNvbGUubG9nKCdHcmFzcyB0ZXh0dXJlIHNvdXJjZTonLCBncmFzc0ltYWdlU3JjKTtcclxuY29uc29sZS5sb2coJ0RpcnQgdGV4dHVyZSBzb3VyY2U6JywgZGlydEltYWdlU3JjKTtcclxuXHJcbmNvbnN0IFtpbWdDb2JibGUsIGltZ0RpcnQsIGltZ05ld0dyYXNzLCBpbWdHcmFzc1RvcCwgaW1nVE5ULCBpbWdUb3JjaF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICBsb2FkQW5kUmVzaXplQml0bWFwKGdyYXNzSW1hZ2VTcmMsIFRFWFRVUkVfU0laRSwgVEVYVFVSRV9TSVpFKSxcclxuICAgIGxvYWRBbmRSZXNpemVCaXRtYXAoZGlydEltYWdlU3JjLCBURVhUVVJFX1NJWkUsIFRFWFRVUkVfU0laRSksXHJcbiAgICBsb2FkQW5kUmVzaXplQml0bWFwKG5ld0dyYXNzSW1hZ2VTcmMsIFRFWFRVUkVfU0laRSwgVEVYVFVSRV9TSVpFKSxcclxuICAgIGxvYWRBbmRSZXNpemVCaXRtYXAoZ3Jhc3NUb3BJbWFnZVNyYywgVEVYVFVSRV9TSVpFLCBURVhUVVJFX1NJWkUpLFxyXG4gICAgbG9hZEFuZFJlc2l6ZUJpdG1hcCh0bnRJbWFnZVNyYywgVEVYVFVSRV9TSVpFLCBURVhUVVJFX1NJWkUpLFxyXG4gICAgbG9hZEFuZFJlc2l6ZUJpdG1hcCh0b3JjaEltYWdlU3JjLCBURVhUVVJFX1NJWkUsIFRFWFRVUkVfU0laRSlcclxuXSk7XHJcbmNvbnNvbGUubG9nKCdUZXh0dXJlcyBsb2FkZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG5cclxuY29uc3QgdGV4dHVyZSA9IGRldmljZS5jcmVhdGVUZXh0dXJlKHtcclxuICAgIHNpemU6IFtURVhUVVJFX1NJWkUsIFRFWFRVUkVfU0laRSwgNl0sIC8vIExheWVyIGNvdW50IDYgKGFkZGVkIHRvcmNoKVxyXG4gICAgZm9ybWF0OiAncmdiYTh1bm9ybScsXHJcbiAgICB1c2FnZTogR1BVVGV4dHVyZVVzYWdlLlRFWFRVUkVfQklORElORyB8IEdQVVRleHR1cmVVc2FnZS5DT1BZX0RTVCB8IEdQVVRleHR1cmVVc2FnZS5SRU5ERVJfQVRUQUNITUVOVCxcclxufSk7XHJcblxyXG5kZXZpY2UucXVldWUuY29weUV4dGVybmFsSW1hZ2VUb1RleHR1cmUoXHJcbiAgICB7IHNvdXJjZTogaW1nQ29iYmxlIH0sXHJcbiAgICB7IHRleHR1cmU6IHRleHR1cmUsIG9yaWdpbjogeyB6OiAwIH0gfSxcclxuICAgIFtURVhUVVJFX1NJWkUsIFRFWFRVUkVfU0laRV1cclxuKTtcclxuZGV2aWNlLnF1ZXVlLmNvcHlFeHRlcm5hbEltYWdlVG9UZXh0dXJlKFxyXG4gICAgeyBzb3VyY2U6IGltZ0RpcnQgfSxcclxuICAgIHsgdGV4dHVyZTogdGV4dHVyZSwgb3JpZ2luOiB7IHo6IDEgfSB9LFxyXG4gICAgW1RFWFRVUkVfU0laRSwgVEVYVFVSRV9TSVpFXVxyXG4pO1xyXG5kZXZpY2UucXVldWUuY29weUV4dGVybmFsSW1hZ2VUb1RleHR1cmUoXHJcbiAgICB7IHNvdXJjZTogaW1nTmV3R3Jhc3MgfSxcclxuICAgIHsgdGV4dHVyZTogdGV4dHVyZSwgb3JpZ2luOiB7IHo6IDIgfSB9LFxyXG4gICAgW1RFWFRVUkVfU0laRSwgVEVYVFVSRV9TSVpFXVxyXG4pO1xyXG5kZXZpY2UucXVldWUuY29weUV4dGVybmFsSW1hZ2VUb1RleHR1cmUoXHJcbiAgICB7IHNvdXJjZTogaW1nR3Jhc3NUb3AgfSxcclxuICAgIHsgdGV4dHVyZTogdGV4dHVyZSwgb3JpZ2luOiB7IHo6IDMgfSB9LFxyXG4gICAgW1RFWFRVUkVfU0laRSwgVEVYVFVSRV9TSVpFXVxyXG4pO1xyXG5kZXZpY2UucXVldWUuY29weUV4dGVybmFsSW1hZ2VUb1RleHR1cmUoXHJcbiAgICB7IHNvdXJjZTogaW1nVE5UIH0sXHJcbiAgICB7IHRleHR1cmU6IHRleHR1cmUsIG9yaWdpbjogeyB6OiA0IH0gfSxcclxuICAgIFtURVhUVVJFX1NJWkUsIFRFWFRVUkVfU0laRV1cclxuKTtcclxuZGV2aWNlLnF1ZXVlLmNvcHlFeHRlcm5hbEltYWdlVG9UZXh0dXJlKFxyXG4gICAgeyBzb3VyY2U6IGltZ1RvcmNoIH0sXHJcbiAgICB7IHRleHR1cmU6IHRleHR1cmUsIG9yaWdpbjogeyB6OiA1IH0gfSxcclxuICAgIFtURVhUVVJFX1NJWkUsIFRFWFRVUkVfU0laRV1cclxuKTtcclxuXHJcbmNvbnN0IHNhbXBsZXIgPSBkZXZpY2UuY3JlYXRlU2FtcGxlcih7XHJcbiAgICBtYWdGaWx0ZXI6ICduZWFyZXN0JyxcclxuICAgIG1pbkZpbHRlcjogJ25lYXJlc3QnLFxyXG59KTtcclxuXHJcbmNvbnN0IHNoYWRvd1NhbXBsZXIgPSBkZXZpY2UuY3JlYXRlU2FtcGxlcih7XHJcbiAgICBjb21wYXJlOiAnbGVzcycsXHJcbiAgICBtYWdGaWx0ZXI6ICdsaW5lYXInLFxyXG4gICAgbWluRmlsdGVyOiAnbGluZWFyJyxcclxufSk7XHJcblxyXG5jb25zdCBzaGFkb3dEZXB0aFRleHR1cmUgPSBkZXZpY2UuY3JlYXRlVGV4dHVyZSh7XHJcbiAgICBzaXplOiBbU0hBRE9XX1NJWkUsIFNIQURPV19TSVpFXSxcclxuICAgIHVzYWdlOiBHUFVUZXh0dXJlVXNhZ2UuUkVOREVSX0FUVEFDSE1FTlQgfCBHUFVUZXh0dXJlVXNhZ2UuVEVYVFVSRV9CSU5ESU5HLFxyXG4gICAgZm9ybWF0OiAnZGVwdGgzMmZsb2F0JyxcclxufSk7XHJcblxyXG4vLyAtLS0gRW50aXRpZXMgLS0tXHJcbi8vIFN5c3RlbXMgYXJlIG5vdyBpbnN0YW50aWF0ZWQgYWZ0ZXIgQ0hVTksgY29uc3RhbnRzIChsaW5lIH4yMDcpXHJcblxyXG5pbnRlcmZhY2UgQWN0aXZlVE5UIHtcclxuICAgIHBvc2l0aW9uOiB2ZWMzO1xyXG4gICAgc2NhbGU6IHZlYzM7XHJcbiAgICBzY2FsZURpcjogbnVtYmVyO1xyXG4gICAgdGltZXI6IG51bWJlcjtcclxufVxyXG5jb25zdCBhY3RpdmVUTlRzOiBBY3RpdmVUTlRbXSA9IFtdO1xyXG5cclxubGV0IGlzUmlkaW5nID0gZmFsc2U7XHJcblxyXG4vLyAtLS0gVmVydGV4IERhdGEgKFBvcyArIFVWKSAtLS1cclxuLy8gMzYgdmVydGljZXMgKDYgZmFjZXMgKiAyIHRyaXMgKiAzIHZlcnRzKVxyXG4vLyBYLCBZLCBaLCBVLCBWLCBOWCwgTlksIE5aXHJcbmNvbnN0IGN1YmVWZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgLy8gRnJvbnQgKHo9MSlcclxuICAgIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDEsXHJcbiAgICAxLCAwLCAxLCAxLCAxLCAwLCAwLCAxLFxyXG4gICAgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSxcclxuICAgIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDEsXHJcbiAgICAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLFxyXG4gICAgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSxcclxuICAgIC8vIEJhY2sgKHo9MClcclxuICAgIDAsIDAsIDAsIDEsIDEsIDAsIDAsIC0xLFxyXG4gICAgMCwgMSwgMCwgMSwgMCwgMCwgMCwgLTEsXHJcbiAgICAxLCAxLCAwLCAwLCAwLCAwLCAwLCAtMSxcclxuICAgIDAsIDAsIDAsIDEsIDEsIDAsIDAsIC0xLFxyXG4gICAgMSwgMSwgMCwgMCwgMCwgMCwgMCwgLTEsXHJcbiAgICAxLCAwLCAwLCAwLCAxLCAwLCAwLCAtMSxcclxuICAgIC8vIFRvcCAoeT0xKVxyXG4gICAgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCxcclxuICAgIDAsIDEsIDEsIDAsIDEsIDAsIDEsIDAsXHJcbiAgICAxLCAxLCAxLCAxLCAxLCAwLCAxLCAwLFxyXG4gICAgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCxcclxuICAgIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDAsXHJcbiAgICAxLCAxLCAwLCAxLCAwLCAwLCAxLCAwLFxyXG4gICAgLy8gQm90dG9tICh5PTApXHJcbiAgICAwLCAwLCAwLCAwLCAxLCAwLCAtMSwgMCxcclxuICAgIDEsIDAsIDAsIDEsIDEsIDAsIC0xLCAwLFxyXG4gICAgMSwgMCwgMSwgMSwgMCwgMCwgLTEsIDAsXHJcbiAgICAwLCAwLCAwLCAwLCAxLCAwLCAtMSwgMCxcclxuICAgIDEsIDAsIDEsIDEsIDAsIDAsIC0xLCAwLFxyXG4gICAgMCwgMCwgMSwgMCwgMCwgMCwgLTEsIDAsXHJcbiAgICAvLyBSaWdodCAoeD0xKVxyXG4gICAgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMCxcclxuICAgIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDAsXHJcbiAgICAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLFxyXG4gICAgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMCxcclxuICAgIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsXHJcbiAgICAxLCAwLCAxLCAwLCAxLCAxLCAwLCAwLFxyXG4gICAgLy8gTGVmdCAoeD0wKVxyXG4gICAgMCwgMCwgMCwgMCwgMSwgLTEsIDAsIDAsXHJcbiAgICAwLCAwLCAxLCAxLCAxLCAtMSwgMCwgMCxcclxuICAgIDAsIDEsIDEsIDEsIDAsIC0xLCAwLCAwLFxyXG4gICAgMCwgMCwgMCwgMCwgMSwgLTEsIDAsIDAsXHJcbiAgICAwLCAxLCAxLCAxLCAwLCAtMSwgMCwgMCxcclxuICAgIDAsIDEsIDAsIDAsIDAsIC0xLCAwLCAwLFxyXG5dKTtcclxuXHJcbmNvbnN0IHZlcnRleEJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xyXG4gICAgc2l6ZTogY3ViZVZlcnRpY2VzLmJ5dGVMZW5ndGgsXHJcbiAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVkVSVEVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QsXHJcbn0pO1xyXG5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodmVydGV4QnVmZmVyLCAwLCBjdWJlVmVydGljZXMpO1xyXG5cclxuLy8gLS0tIENodW5rIFN5c3RlbSAtLS1cclxuLy8gQ2h1bmsgU2l6ZTogMTZ4MTZcclxuLy8gSGVpZ2h0IGxpbWl0IGZvciBncmlkOiAyNTYgKDAgdG8gMjU1KS4gTG9naWMgWSBvZmZzZXQ6ICs2NCAoc28gLTY0IHRvIDE5MSlcclxuY29uc3QgQ0hVTktfU0laRSA9IDE2O1xyXG5jb25zdCBDSFVOS19IRUlHSFQgPSAyNTY7XHJcbmNvbnN0IFlfT0ZGU0VUID0gNjQ7XHJcbmNvbnN0IFJFTkRFUl9ESVNUQU5DRSA9IDE0O1xyXG5cclxuLy8gU3lzdGVtc1xyXG5jb25zdCBwYXJ0aWNsZVN5c3RlbSA9IG5ldyBQYXJ0aWNsZVN5c3RlbSgpO1xyXG5jb25zdCBwaWNrdXBTeXN0ZW0gPSBuZXcgUGlja3VwU3lzdGVtKCk7XHJcbmNvbnN0IHNwaWRlciA9IG5ldyBTcGlkZXIoKTtcclxuY29uc3QgcGxheWVyTW9kZWwgPSBuZXcgUGxheWVyTW9kZWwoKTsgLy8gSW5zdGFudGlhdGUgUGxheWVyIE1vZGVsXHJcbmNvbnN0IHNpbXBsZVJlbmRlcmVyID0gbmV3IFNpbXBsZVJlbmRlcmVyKGRldmljZSwgZm9ybWF0KTtcclxuXHJcbi8vIFZhbHVlcyBmb3IgR3JpZCBMb2dpY1xyXG4vLyAwID0gQWlyXHJcbi8vIDEgPSBTdG9uZSAoVGV4IDApXHJcbi8vIDIgPSBEaXJ0IChUZXggMSlcclxuLy8gMyA9IEdyYXNzIFNpZGUgKFRleCAyKVxyXG4vLyA0ID0gR3Jhc3MgVG9wIChUZXggMykgLSBMb2dpYyB1c2VzIDMgZm9yIEdyYXNzIEJsb2NrLlxyXG4vLyA1ID0gVE5UIChUZXggNClcclxuLy8gNiA9IFRvcmNoIChUZXggNSlcclxuXHJcbnR5cGUgQmxvY2tJbnN0YW5jZSA9IHsgcG9zOiBGbG9hdDMyQXJyYXksIHR5cGU6IG51bWJlciB9O1xyXG50eXBlIENodW5rRGF0YSA9IHtcclxuICAgIGdyaWQ6IFVpbnQ4QXJyYXk7IC8vIFNpemUgMTZ4MTZ4MjU2LiBJbmRleDogeCArIHoqMTYgKyAoeStPRkZTRVQpKjI1NlxyXG4gICAgdmlzaWJsZTogQmxvY2tJbnN0YW5jZVtdOyAvLyBQcmUtY2FsY3VsYXRlZCB2aXNpYmxlIGluc3RhbmNlc1xyXG59O1xyXG5cclxuY29uc3QgY2h1bmtzID0gbmV3IE1hcDxzdHJpbmcsIENodW5rRGF0YT4oKTtcclxuY29uc3QgY2h1bmtDYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBDaHVua0RhdGE+KCk7XHJcblxyXG4vLyBIZWxwZXIgdG8gZ2V0IGdyaWQgaW5kZXhcclxuZnVuY3Rpb24gZ2V0R3JpZEluZGV4KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpIHtcclxuICAgIHggPSBNYXRoLmZsb29yKHgpO1xyXG4gICAgeSA9IE1hdGguZmxvb3IoeSk7XHJcbiAgICB6ID0gTWF0aC5mbG9vcih6KTtcclxuICAgIGlmICh4IDwgMCB8fCB4ID49IENIVU5LX1NJWkUgfHwgeiA8IDAgfHwgeiA+PSBDSFVOS19TSVpFKSByZXR1cm4gLTE7XHJcbiAgICBjb25zdCB5SWR4ID0geSArIFlfT0ZGU0VUO1xyXG4gICAgaWYgKHlJZHggPCAwIHx8IHlJZHggPj0gQ0hVTktfSEVJR0hUKSByZXR1cm4gLTE7XHJcbiAgICByZXR1cm4geCArIHogKiBDSFVOS19TSVpFICsgeUlkeCAqIChDSFVOS19TSVpFICogQ0hVTktfU0laRSk7XHJcbn1cclxuXHJcbi8vIEdsb2JhbCBJbnN0YW5jZSBMaXN0IChGbGF0KVxyXG5sZXQgYWxsSW5zdGFuY2VzOiBCbG9ja0luc3RhbmNlW10gPSBbXTtcclxuXHJcbi8vIFJlbW92ZWQgYmxvY2tNYXAgKERlcHJlY2F0ZWQpXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldE9yR2VuZXJhdGVDaHVuayhjeDogbnVtYmVyLCBjejogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBrZXkgPSBgJHtjeH0sJHtjen1gO1xyXG4gICAgaWYgKGNodW5rQ2FjaGUuaGFzKGtleSkpIHtcclxuICAgICAgICBpZiAoIWNodW5rcy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICBjaHVua3Muc2V0KGtleSwgY2h1bmtDYWNoZS5nZXQoa2V5KSEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ3JpZCA9IG5ldyBVaW50OEFycmF5KENIVU5LX1NJWkUgKiBDSFVOS19TSVpFICogQ0hVTktfSEVJR0hUKTtcclxuICAgIGNvbnN0IHZpc2libGU6IEJsb2NrSW5zdGFuY2VbXSA9IFtdO1xyXG5cclxuICAgIC8vIDEuIEdlbmVyYXRlIFRlcnJhaW4gKFBvcHVsYXRlIEdSSUQpXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IENIVU5LX1NJWkU7IHgrKykge1xyXG4gICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgQ0hVTktfU0laRTsgeisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHd4ID0gY3ggKiBDSFVOS19TSVpFICsgeDtcclxuICAgICAgICAgICAgY29uc3Qgd3ogPSBjeiAqIENIVU5LX1NJWkUgKyB6O1xyXG5cclxuICAgICAgICAgICAgLy8gVGVycmFpbiBOb2lzZVxyXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IGhSYXcgPSBmYm0od3ggKiBzY2FsZSwgd3ogKiBzY2FsZSwgMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlcnJhaW5IZWlnaHQgPSBNYXRoLmZsb29yKGhSYXcgKiAyMCArIDIwKTsgLy8gRG91YmxlZCBBbXBsaXR1ZGVcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAtMzA7IHkgPD0gdGVycmFpbkhlaWdodDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IDE7IC8vIFN0b25lXHJcbiAgICAgICAgICAgICAgICBpZiAoeSA9PT0gdGVycmFpbkhlaWdodCkgdHlwZSA9IDM7IC8vIEdyYXNzXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh5ID49IHRlcnJhaW5IZWlnaHQgLSA3KSB0eXBlID0gMjsgLy8gRGlydFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IGdldEdyaWRJbmRleCh4LCB5LCB6KTtcclxuICAgICAgICAgICAgICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFtpZHhdID0gdHlwZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAyLiBDb21wdXRlIFZpc2liaWxpdHkgKExvY2FsIE1lc2gpXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IENIVU5LX1NJWkU7IHgrKykge1xyXG4gICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgQ0hVTktfU0laRTsgeisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHd4ID0gY3ggKiBDSFVOS19TSVpFICsgeDtcclxuICAgICAgICAgICAgY29uc3Qgd3ogPSBjeiAqIENIVU5LX1NJWkUgKyB6O1xyXG5cclxuICAgICAgICAgICAgLy8gU2NhbiBib3VuZHMgLVlfT0ZGU0VUIHRvIChDSFVOS19IRUlHSFQgLSBZX09GRlNFVCAtIDEpXHJcbiAgICAgICAgICAgIGNvbnN0IG1pblkgPSAtWV9PRkZTRVQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFkgPSBDSFVOS19IRUlHSFQgLSBZX09GRlNFVCAtIDE7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSBtaW5ZOyB5IDw9IG1heFk7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gZ2V0R3JpZEluZGV4KHgsIHksIHopO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkeCA9PT0gLTEpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IGdyaWRbaWR4XTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBuZWlnaGJvcnMgaW4gR1JJRFxyXG4gICAgICAgICAgICAgICAgbGV0IGV4cG9zZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NvbGlkID0gKG54OiBudW1iZXIsIG55OiBudW1iZXIsIG56OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuSWR4ID0gZ2V0R3JpZEluZGV4KG54LCBueSwgbnopO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuSWR4ID09PSAtMSkgcmV0dXJuIGZhbHNlOyAvLyBPdXQgb2YgYm91bmRzIC0+IEFzc3VtZSBleHBvc2VkXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdyaWRbbklkeF0gIT09IDA7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaXNTb2xpZCh4ICsgMSwgeSwgeikpIGV4cG9zZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzU29saWQoeCAtIDEsIHksIHopKSBleHBvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1NvbGlkKHgsIHkgKyAxLCB6KSkgZXhwb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNTb2xpZCh4LCB5IC0gMSwgeikpIGV4cG9zZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzU29saWQoeCwgeSwgeiArIDEpKSBleHBvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1NvbGlkKHgsIHksIHogLSAxKSkgZXhwb3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGV4cG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IG5ldyBGbG9hdDMyQXJyYXkoW3d4LCB5LCB3el0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNodW5rRGF0YSA9IHsgZ3JpZCwgdmlzaWJsZSB9O1xyXG4gICAgY2h1bmtDYWNoZS5zZXQoa2V5LCBjaHVua0RhdGEpO1xyXG4gICAgY2h1bmtzLnNldChrZXksIGNodW5rRGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNodW5rcyhwbGF5ZXJQb3M6IHZlYzMpIHtcclxuICAgIGNvbnN0IHBDeCA9IE1hdGguZmxvb3IocGxheWVyUG9zWzBdIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBwQ3ogPSBNYXRoLmZsb29yKHBsYXllclBvc1syXSAvIENIVU5LX1NJWkUpO1xyXG5cclxuICAgIGNvbnN0IG5lZWRlZEtleXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XHJcblxyXG4gICAgZm9yIChsZXQgeCA9IC1SRU5ERVJfRElTVEFOQ0U7IHggPD0gUkVOREVSX0RJU1RBTkNFOyB4KyspIHtcclxuICAgICAgICBmb3IgKGxldCB6ID0gLVJFTkRFUl9ESVNUQU5DRTsgeiA8PSBSRU5ERVJfRElTVEFOQ0U7IHorKykge1xyXG4gICAgICAgICAgICBuZWVkZWRLZXlzLmFkZChgJHtwQ3ggKyB4fSwke3BDeiArIHp9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IG9mIGNodW5rcy5rZXlzKCkpIHtcclxuICAgICAgICBpZiAoIW5lZWRlZEtleXMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgY2h1bmtzLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICBjaHVua0NhY2hlLmRlbGV0ZShrZXkpOyAvLyBGaXggTWVtb3J5IExlYWtcclxuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBhZGRlZENvdW50ID0gMDtcclxuICAgIGZvciAoY29uc3Qga2V5IG9mIG5lZWRlZEtleXMpIHtcclxuICAgICAgICBpZiAoIWNodW5rcy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBbY3gsIGN6XSA9IGtleS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgICAgICBnZXRPckdlbmVyYXRlQ2h1bmsoY3gsIGN6KTtcclxuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGFkZGVkQ291bnQrKztcclxuICAgICAgICAgICAgaWYgKGFkZGVkQ291bnQgPj0gMSkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VkKSB7XHJcbiAgICAgICAgcmVidWlsZFdvcmxkKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFVzZXItcGxhY2VkIGJsb2NrcyBidWZmZXI/IFxyXG4vLyBGb3Igc2ltcGxpY2l0eSwgd2UgY2FuIGp1c3QgbWl4IHRoZW0gaW50byB0aGUgY3VycmVudCBjaHVuayBsb2dpYyBvciBrZWVwIGEgc2VwYXJhdGUgbGlzdC5cclxuLy8gSWYgd2Ugd2FudCBcIkluZmluaXRlXCIgZ2VuZXJhdGlvbiwgdXNlciBibG9ja3Mgc2hvdWxkIGlkZWFsbHkgYmUgc3RvcmVkIGluIHRoZSBjaHVuayBkYXRhLlxyXG4vLyBGb3IgdGhpcyBkZW1vOiBXZSB3aWxsIGp1c3QgTk9UIHN1cHBvcnQgc2F2aW5nIHVzZXIgYmxvY2tzIHRvIGRpc2svcGVyc2lzdGVuY2UuXHJcbi8vIEJ1dCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB1c2VyIHBsYWNlZCBibG9ja3MgYXJlIGtlcHQgaWYgdGhleSBhcmUgaW4gcmFuZ2UuXHJcbi8vIEFjdHVhbGx5LCBgZ2VuZXJhdGVDaHVua2AgaXMgY2FsbGVkIGZyZXNobHkuIElmIHdlIHVubG9hZCBhIGNodW5rLCB1c2VyIGNoYW5nZXMgYXJlIGxvc3QuXHJcbi8vIFRvIGZpeCB0aGlzOiBgY2h1bmtzYCBtYXAgc2hvdWxkIGJlIHRoZSBzb3VyY2Ugb2YgdHJ1dGguIFdlIG9ubHkgR2VuZXJhdGUgaWYgYCFjaHVua3MuaGFzKGtleSlgLlxyXG4vLyBCdXQgd2UganVzdCBkZWxldGVkIGtleXMgaW4gdGhlIGxvb3AgYWJvdmUuIFxyXG4vLyBGaXg6IERvbid0IGRlbGV0ZSBmcm9tIGBjaHVua3NgIG1hcCBpbW1lZGlhdGVseSBpZiB3ZSB3YW50IG1lbW9yeSBwZXJzaXN0ZW5jZSAoYnV0IHRoZW4gbWVtb3J5IGdyb3dzKS5cclxuLy8gSW5maW5pdGUgdXN1YWxseSBpbXBsaWVzIHVubG9hZGluZy4gXHJcbi8vIExldCdzIGFzc3VtZSBmb3IgdGhpcyBNVlA6IFVubG9hZGluZyA9IFJlc2V0LiBcclxuLy8gT3IgYmV0dGVyOiBVc2UgYSBzZXBhcmF0ZSBgdXNlckNoYW5nZXNgIG1hcD8gVG9vIGNvbXBsZXguXHJcbi8vIExldCdzIHN0aWNrIHRvOiBVbmxvYWQgPSBMb3N0LiAoVXNlciBkaWRuJ3QgYXNrIGZvciBzYXZlL2xvYWQpLlxyXG5cclxuLy8gLS0tIE9wdGltaXplZCBSZWJ1aWxkICYgTWVtb3J5IE1hbmFnZW1lbnQgLS0tXHJcbmNvbnN0IG1heEluc3RhbmNlcyA9IDIwMDAwMDA7XHJcbmNvbnN0IGluc3RhbmNlQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XHJcbiAgICBzaXplOiBtYXhJbnN0YW5jZXMgKiAxNiwgLy8gdmVjMyArIGYzMiA9IDE2IGJ5dGVzXHJcbiAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVkVSVEVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QsXHJcbn0pO1xyXG5jb25zdCBzdGFnaW5nQnVmZmVyID0gbmV3IEZsb2F0MzJBcnJheShtYXhJbnN0YW5jZXMgKiA0KTsgLy8gUGVyc2lzdGVudCBCdWZmZXJcclxuXHJcbi8vIC0tLSBGcnVzdHVtIENsYXNzIC0tLVxyXG5jbGFzcyBGcnVzdHVtIHtcclxuICAgIHBsYW5lczogdmVjNFtdO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wbGFuZXMgPSBbdmVjNC5jcmVhdGUoKSwgdmVjNC5jcmVhdGUoKSwgdmVjNC5jcmVhdGUoKSwgdmVjNC5jcmVhdGUoKSwgdmVjNC5jcmVhdGUoKSwgdmVjNC5jcmVhdGUoKV07XHJcbiAgICB9XHJcbiAgICB1cGRhdGUobTogbWF0NCkge1xyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLnBsYW5lcztcclxuICAgICAgICAvLyBSaWdodFxyXG4gICAgICAgIHZlYzQuc2V0KHBbMF0sIG1bM10gLSBtWzBdLCBtWzddIC0gbVs0XSwgbVsxMV0gLSBtWzhdLCBtWzE1XSAtIG1bMTJdKTtcclxuICAgICAgICAvLyBMZWZ0XHJcbiAgICAgICAgdmVjNC5zZXQocFsxXSwgbVszXSArIG1bMF0sIG1bN10gKyBtWzRdLCBtWzExXSArIG1bOF0sIG1bMTVdICsgbVsxMl0pO1xyXG4gICAgICAgIC8vIEJvdHRvbVxyXG4gICAgICAgIHZlYzQuc2V0KHBbMl0sIG1bM10gKyBtWzFdLCBtWzddICsgbVs1XSwgbVsxMV0gKyBtWzldLCBtWzE1XSArIG1bMTNdKTtcclxuICAgICAgICAvLyBUb3BcclxuICAgICAgICB2ZWM0LnNldChwWzNdLCBtWzNdIC0gbVsxXSwgbVs3XSAtIG1bNV0sIG1bMTFdIC0gbVs5XSwgbVsxNV0gLSBtWzEzXSk7XHJcbiAgICAgICAgLy8gRmFyICh6IDw9IHcgLT4gdyAtIHogPj0gMClcclxuICAgICAgICB2ZWM0LnNldChwWzRdLCBtWzNdIC0gbVsyXSwgbVs3XSAtIG1bNl0sIG1bMTFdIC0gbVsxMF0sIG1bMTVdIC0gbVsxNF0pO1xyXG4gICAgICAgIC8vIE5lYXIgKHogPj0gMCAtPiB6ID49IDApIC0tIFdlYkdQVSAwLi4xIGNsaXAgc3BhY2VcclxuICAgICAgICB2ZWM0LnNldChwWzVdLCBtWzJdLCBtWzZdLCBtWzEwXSwgbVsxNF0pO1xyXG4gICAgfVxyXG4gICAgaW50ZXJzZWN0c0JveChtaW46IHZlYzMsIG1heDogdmVjMykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLnBsYW5lc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgcHggPSBwWzBdID4gMCA/IG1heFswXSA6IG1pblswXTtcclxuICAgICAgICAgICAgY29uc3QgcHkgPSBwWzFdID4gMCA/IG1heFsxXSA6IG1pblsxXTtcclxuICAgICAgICAgICAgY29uc3QgcHogPSBwWzJdID4gMCA/IG1heFsyXSA6IG1pblsyXTtcclxuICAgICAgICAgICAgaWYgKHBbMF0gKiBweCArIHBbMV0gKiBweSArIHBbMl0gKiBweiArIHBbM10gPCAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IGZydXN0dW0gPSBuZXcgRnJ1c3R1bSgpO1xyXG5cclxubGV0IGxhc3RDdWxsUG9zID0gdmVjMy5jcmVhdGUoKTsgLy8gVHJhY2sgY2FtZXJhIHBvcyBmb3IgY3VsbGluZ1xyXG5sZXQgbGFzdEN1bGxZYXcgPSAwO1xyXG5sZXQgY3VycmVudEluc3RhbmNlQ291bnQgPSAwOyAvLyBHTE9CQUwgU0NPUEVcclxuXHJcbi8vIE9wdGltaXphdGlvbjogUmV1c2FibGUgdGVtcCB2ZWN0b3JzIGZvciBmcnVzdHVtIGNoZWNrXHJcbmNvbnN0IHRlbXBDaHVua01pbiA9IHZlYzMuY3JlYXRlKCk7XHJcbmNvbnN0IHRlbXBDaHVua01heCA9IHZlYzMuY3JlYXRlKCk7XHJcblxyXG5mdW5jdGlvbiByZWJ1aWxkV29ybGQoZm9yY2UgPSBmYWxzZSkge1xyXG4gICAgaWYgKCFmb3JjZSkge1xyXG4gICAgICAgIC8vIFRocm90dGxlOiBPbmx5IHJlYnVpbGQgaWYgY2FtZXJhIG1vdmVkID4gNCBibG9ja3Mgb3Igcm90YXRlZCA+IDAuMSByYWRcclxuICAgICAgICBjb25zdCBkaXN0U3EgPSB2ZWMzLnNxckRpc3QoY2FtZXJhUG9zaXRpb24sIGxhc3RDdWxsUG9zKTtcclxuICAgICAgICBjb25zdCByb3REaWZmID0gTWF0aC5hYnMoY2FtZXJhWWF3IC0gbGFzdEN1bGxZYXcpO1xyXG5cclxuICAgICAgICBpZiAoZGlzdFNxIDwgMTYuMCAmJiByb3REaWZmIDwgMC4xKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gU2tpcCB1cGRhdGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIENhY2hlXHJcbiAgICB2ZWMzLmNvcHkobGFzdEN1bGxQb3MsIGNhbWVyYVBvc2l0aW9uKTtcclxuICAgIGxhc3RDdWxsWWF3ID0gY2FtZXJhWWF3O1xyXG5cclxuICAgIC8vIFVwZGF0ZSBGcnVzdHVtXHJcbiAgICBmcnVzdHVtLnVwZGF0ZSh2aWV3UHJvamVjdGlvbk1hdHJpeCk7XHJcblxyXG4gICAgbGV0IGluc3RhbmNlQ291bnQgPSAwO1xyXG5cclxuICAgIC8vIERpcmVjdCBMb29wIHdpdGggZmFzdCB3cml0ZVxyXG4gICAgZm9yIChjb25zdCBba2V5LCBjaHVua10gb2YgY2h1bmtzKSB7XHJcbiAgICAgICAgY29uc3QgW2N4LCBjel0gPSBrZXkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKTtcclxuXHJcbiAgICAgICAgLy8gQ2h1bmsgQUFCQiAtIE9wdGltaXplZCB0byBhdm9pZCBHQ1xyXG4gICAgICAgIHZlYzMuc2V0KHRlbXBDaHVua01pbiwgY3ggKiBDSFVOS19TSVpFLCAtWV9PRkZTRVQsIGN6ICogQ0hVTktfU0laRSk7XHJcbiAgICAgICAgdmVjMy5zZXQodGVtcENodW5rTWF4LCAoY3ggKyAxKSAqIENIVU5LX1NJWkUsIENIVU5LX0hFSUdIVCAtIFlfT0ZGU0VULCAoY3ogKyAxKSAqIENIVU5LX1NJWkUpO1xyXG5cclxuICAgICAgICBpZiAoZnJ1c3R1bS5pbnRlcnNlY3RzQm94KHRlbXBDaHVua01pbiwgdGVtcENodW5rTWF4KSkge1xyXG4gICAgICAgICAgICBjb25zdCB2aXNpYmxlID0gY2h1bmsudmlzaWJsZTtcclxuICAgICAgICAgICAgY29uc3QgbGVuID0gdmlzaWJsZS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAvLyBTYWZldHkgY2hlY2sgYWdhaW5zdCBtYXhJbnN0YW5jZXNcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlQ291bnQgKyBsZW4gPiBtYXhJbnN0YW5jZXMpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBzaW1wbGUgdHJ1bmNhdGlvblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IHZpc2libGVbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBpbnN0YW5jZUNvdW50ICogNDtcclxuICAgICAgICAgICAgICAgIHN0YWdpbmdCdWZmZXJbb2Zmc2V0XSA9IGJsb2NrLnBvc1swXTtcclxuICAgICAgICAgICAgICAgIHN0YWdpbmdCdWZmZXJbb2Zmc2V0ICsgMV0gPSBibG9jay5wb3NbMV07XHJcbiAgICAgICAgICAgICAgICBzdGFnaW5nQnVmZmVyW29mZnNldCArIDJdID0gYmxvY2sucG9zWzJdO1xyXG4gICAgICAgICAgICAgICAgc3RhZ2luZ0J1ZmZlcltvZmZzZXQgKyAzXSA9IGJsb2NrLnR5cGU7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZUNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV3JpdGUgT05MWSB0aGUgdXNlZCBwb3J0aW9uIHRvIEdQVVxyXG4gICAgZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKGluc3RhbmNlQnVmZmVyLCAwLCBzdGFnaW5nQnVmZmVyLCAwLCBpbnN0YW5jZUNvdW50ICogNCk7XHJcblxyXG4gICAgY3VycmVudEluc3RhbmNlQ291bnQgPSBpbnN0YW5jZUNvdW50O1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlYnVpbGRXb3JsZDogaW5zdGFuY2VDb3VudCcsIGluc3RhbmNlQ291bnQsICdDaHVua3M6JywgY2h1bmtzLnNpemUpO1xyXG4gICAgaWYgKGluc3RhbmNlQ291bnQgPT09IDAgJiYgY2h1bmtzLnNpemUgPiAwKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdyZWJ1aWxkV29ybGQ6IENodW5rcyBleGlzdCBidXQgMCBpbnN0YW5jZXMuIEZydXN0dW0gaXNzdWU/Jyk7XHJcbiAgICAgICAgLy8gRGVidWcgRnJ1c3R1bVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDYW06JywgY2FtZXJhUG9zaXRpb24sICdNaW46JywgY2h1bmtzLnZhbHVlcygpLm5leHQoKS52YWx1ZT8ubWluKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlSW5zdGFuY2VCdWZmZXIoKSB7XHJcbiAgICAvLyBMZWdhY3kgd3JhcHBlciBpZiBuZWVkZWQsIGJ1dCByZWJ1aWxkV29ybGQgaGFuZGxlcyBpdCBub3cuXHJcbn1cclxuLy8gSW5pdGlhbCB1cGRhdGUgY2FsbGVkIGluIHJlYnVpbGRXb3JsZFxyXG4vLyBJbml0aWFsaXplIHdvcmxkIGdlbmVyYXRpb24gYWZ0ZXIgYnVmZmVycyBhcmUgcmVhZHlcclxuXHJcblxyXG5cclxuLy8gLS0tIFBpcGVsaW5lIC0tLVxyXG5jb25zdCBwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XHJcbiAgICBsYXlvdXQ6ICdhdXRvJyxcclxuICAgIHZlcnRleDoge1xyXG4gICAgICAgIG1vZHVsZTogZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlckNvZGUgfSksXHJcbiAgICAgICAgZW50cnlQb2ludDogJ21haW5fdnMnLFxyXG4gICAgICAgIGJ1ZmZlcnM6IFtcclxuICAgICAgICAgICAgLy8gVmVydGV4IEF0dHJpYnV0ZXNcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlTdHJpZGU6IDggKiA0LFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDAsIG9mZnNldDogMCwgZm9ybWF0OiAnZmxvYXQzMngzJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDEsIG9mZnNldDogMyAqIDQsIGZvcm1hdDogJ2Zsb2F0MzJ4MicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAyLCBvZmZzZXQ6IDUgKiA0LCBmb3JtYXQ6ICdmbG9hdDMyeDMnIH0sIC8vIE5vcm1hbFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBJbnN0YW5jZSBBdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFycmF5U3RyaWRlOiA0ICogNCwgLy8gdmVjMyBwb3MgKyBmMzIgdHlwZVxyXG4gICAgICAgICAgICAgICAgc3RlcE1vZGU6ICdpbnN0YW5jZScsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMywgb2Zmc2V0OiAwLCBmb3JtYXQ6ICdmbG9hdDMyeDMnIH0sIC8vIGluc3RhbmNlUG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiA0LCBvZmZzZXQ6IDMgKiA0LCBmb3JtYXQ6ICdmbG9hdDMyJyB9IC8vIHRleHR1cmVJbmRleFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIGZyYWdtZW50OiB7XHJcbiAgICAgICAgbW9kdWxlOiBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyQ29kZSB9KSxcclxuICAgICAgICBlbnRyeVBvaW50OiAnbWFpbl9mcycsXHJcbiAgICAgICAgdGFyZ2V0czogW3sgZm9ybWF0IH1dXHJcbiAgICB9LFxyXG4gICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiAndHJpYW5nbGUtbGlzdCcsIGN1bGxNb2RlOiAnYmFjaycgfSxcclxuICAgIGRlcHRoU3RlbmNpbDoge1xyXG4gICAgICAgIGRlcHRoV3JpdGVFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIGRlcHRoQ29tcGFyZTogJ2xlc3MnLFxyXG4gICAgICAgIGZvcm1hdDogJ2RlcHRoMjRwbHVzJyxcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBzaGFkb3dQaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XHJcbiAgICBsYXlvdXQ6ICdhdXRvJyxcclxuICAgIHZlcnRleDoge1xyXG4gICAgICAgIG1vZHVsZTogZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlckNvZGUgfSksXHJcbiAgICAgICAgZW50cnlQb2ludDogJ3NoYWRvd192cycsXHJcbiAgICAgICAgYnVmZmVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnJheVN0cmlkZTogOCAqIDQsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMCwgb2Zmc2V0OiAwLCBmb3JtYXQ6ICdmbG9hdDMyeDMnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMSwgb2Zmc2V0OiAzICogNCwgZm9ybWF0OiAnZmxvYXQzMngyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDIsIG9mZnNldDogNSAqIDQsIGZvcm1hdDogJ2Zsb2F0MzJ4MycgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlTdHJpZGU6IDQgKiA0LFxyXG4gICAgICAgICAgICAgICAgc3RlcE1vZGU6ICdpbnN0YW5jZScsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMywgb2Zmc2V0OiAwLCBmb3JtYXQ6ICdmbG9hdDMyeDMnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogNCwgb2Zmc2V0OiAzICogNCwgZm9ybWF0OiAnZmxvYXQzMicgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogJ3RyaWFuZ2xlLWxpc3QnLCBjdWxsTW9kZTogJ2JhY2snIH0sXHJcbiAgICBkZXB0aFN0ZW5jaWw6IHtcclxuICAgICAgICBkZXB0aFdyaXRlRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBkZXB0aENvbXBhcmU6ICdsZXNzJyxcclxuICAgICAgICBmb3JtYXQ6ICdkZXB0aDMyZmxvYXQnLFxyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIC0tLSBVbmlmb3JtcyAtLS1cclxuLy8gSW5jcmVhc2VkIHRvIDU2MCB0byBtYXRjaCBzaGFkZXIgcmVxdWlyZW1lbnRzIChhbmQgYWRkZWQgc2FmZXR5IHBhZGRpbmcpXHJcbmNvbnN0IHVuaWZvcm1CdWZmZXJTaXplID0gNTYwOyAvLyBXYXMgNTQ0XHJcbmNvbnN0IHVuaWZvcm1CdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcclxuICAgIHNpemU6IHVuaWZvcm1CdWZmZXJTaXplLFxyXG4gICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCxcclxufSk7XHJcblxyXG5jb25zdCBiaW5kR3JvdXAgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcclxuICAgIGxheW91dDogcGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLFxyXG4gICAgZW50cmllczogW1xyXG4gICAgICAgIHsgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB1bmlmb3JtQnVmZmVyIH0gfSxcclxuICAgICAgICB7IGJpbmRpbmc6IDEsIHJlc291cmNlOiBzYW1wbGVyIH0sXHJcbiAgICAgICAgeyBiaW5kaW5nOiAyLCByZXNvdXJjZTogdGV4dHVyZS5jcmVhdGVWaWV3KHsgZGltZW5zaW9uOiAnMmQtYXJyYXknIH0pIH0sXHJcbiAgICAgICAgeyBiaW5kaW5nOiAzLCByZXNvdXJjZTogc2hhZG93U2FtcGxlciB9LFxyXG4gICAgICAgIHsgYmluZGluZzogNCwgcmVzb3VyY2U6IHNoYWRvd0RlcHRoVGV4dHVyZS5jcmVhdGVWaWV3KCkgfSxcclxuICAgIF1cclxufSk7XHJcblxyXG5cclxuLy8gUmUtY29ycmVjdGlvbjogYmluZCBncm91cCBsYXlvdXQgZm9yIHNoYWRvdyBwYXNzLlxyXG4vLyBzaGFkb3dfdnMgb25seSBhY2Nlc3NlcyAndW5pZm9ybXMnLiBcclxuLy8gU28gZW50cmllcyBzaG91bGQgYmUganVzdCBiaW5kaW5nIDAuXHJcbmNvbnN0IHNoYWRvd0JpbmRHcm91cFJlYWwgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcclxuICAgIGxheW91dDogc2hhZG93UGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLFxyXG4gICAgZW50cmllczogW1xyXG4gICAgICAgIHsgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB1bmlmb3JtQnVmZmVyIH0gfVxyXG4gICAgXVxyXG59KTtcclxuXHJcbi8vIC0tLSBDYW1lcmEgJiBSZXNpemUgLS0tXHJcbmNvbnN0IHByb2plY3Rpb25NYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xyXG5jb25zdCB2aWV3TWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcclxuY29uc3QgbW9kZWxWaWV3UHJvamVjdGlvbk1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7IC8vIHVudXNlZCBpbiBuZXcgc2hhZGVyIGxvZ2ljIGdlbmVyYWxseSwgYnV0IGNhbiBrZWVwIHN0cnVjdHVyZVxyXG5jb25zdCB2aWV3UHJvamVjdGlvbk1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XHJcblxyXG5sZXQgZGVwdGhUZXh0dXJlOiBHUFVUZXh0dXJlO1xyXG5cclxuZnVuY3Rpb24gcmVzaXplKCkge1xyXG4gICAgLy8gUmVzaXplIGJhc2VkIG9uIGRpc3BsYXllZCBzaXplIChDU1MpXHJcbiAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IGRpc3BsYXlXaWR0aCA9IE1hdGguZmxvb3IocmVjdC53aWR0aCAqIGRldmljZVBpeGVsUmF0aW8pO1xyXG4gICAgbGV0IGRpc3BsYXlIZWlnaHQgPSBNYXRoLmZsb29yKHJlY3QuaGVpZ2h0ICogZGV2aWNlUGl4ZWxSYXRpbyk7XHJcblxyXG4gICAgLy8gRm9yY2UgZXZlblxyXG4gICAgaWYgKGRpc3BsYXlXaWR0aCAlIDIgIT09IDApIGRpc3BsYXlXaWR0aC0tO1xyXG4gICAgaWYgKGRpc3BsYXlIZWlnaHQgJSAyICE9PSAwKSBkaXNwbGF5SGVpZ2h0LS07XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1Jlc2l6ZSBjYWxsZWQ6JywgZGlzcGxheVdpZHRoLCAneCcsIGRpc3BsYXlIZWlnaHQsICdkZXZpY2VQaXhlbFJhdGlvOicsIGRldmljZVBpeGVsUmF0aW8pO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIGNhbnZhcyBtYXRjaGVzXHJcbiAgICBpZiAoY2FudmFzLndpZHRoICE9PSBkaXNwbGF5V2lkdGggfHwgY2FudmFzLmhlaWdodCAhPT0gZGlzcGxheUhlaWdodCkge1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRpc3BsYXlXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gZGlzcGxheUhlaWdodDtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ2FudmFzIHJlc2l6ZWQgdG86JywgY2FudmFzLndpZHRoLCAneCcsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgcHJvamVjdGlvbiB3aXRoIG5ldyBhc3BlY3QgcmF0aW8gKFdlYkdQVSBaTyBzdHJpY3QpXHJcbiAgICAgICAgbWF0NC5wZXJzcGVjdGl2ZVpPKHByb2plY3Rpb25NYXRyaXgsICgyICogTWF0aC5QSSkgLyA1LCBjYW52YXMud2lkdGggLyBjYW52YXMuaGVpZ2h0LCAwLjEsIDEwMC4wKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnW0RFQlVHXSBSZXNpemUgUHJvajonLCBbcHJvamVjdGlvbk1hdHJpeFswXSwgcHJvamVjdGlvbk1hdHJpeFs1XSwgcHJvamVjdGlvbk1hdHJpeFsxMF0sIHByb2plY3Rpb25NYXRyaXhbMTVdXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWx3YXlzIHJlY3JlYXRlIGRlcHRoIHRleHR1cmUgaWYgc2l6ZSBjaGFuZ2VkIE9SIGlmIGl0IGRvZXNuJ3QgZXhpc3RcclxuICAgIC8vIENoZWNrIHRleHR1cmUgc2l6ZSBtYXRjaFxyXG4gICAgaWYgKCFkZXB0aFRleHR1cmUgfHwgZGVwdGhUZXh0dXJlLndpZHRoICE9PSBjYW52YXMud2lkdGggfHwgZGVwdGhUZXh0dXJlLmhlaWdodCAhPT0gY2FudmFzLmhlaWdodCkge1xyXG4gICAgICAgIGlmIChkZXB0aFRleHR1cmUpIGRlcHRoVGV4dHVyZS5kZXN0cm95KCk7XHJcbiAgICAgICAgZGVwdGhUZXh0dXJlID0gZGV2aWNlLmNyZWF0ZVRleHR1cmUoe1xyXG4gICAgICAgICAgICBzaXplOiBbY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XSxcclxuICAgICAgICAgICAgZm9ybWF0OiAnZGVwdGgyNHBsdXMnLFxyXG4gICAgICAgICAgICB1c2FnZTogR1BVVGV4dHVyZVVzYWdlLlJFTkRFUl9BVFRBQ0hNRU5ULFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUpO1xyXG5yZXNpemUoKTtcclxuXHJcblxyXG4vLyAtLS0gQ29udHJvbHMgLS0tXHJcbi8vIENSSVRJQ0FMOiBTZXBhcmF0ZSBwbGF5ZXIgcG9zaXRpb24gZnJvbSBjYW1lcmEgcG9zaXRpb25cclxuLy8gcGxheWVyUG9zaXRpb24gPSBhY3R1YWwgcGxheWVyIGxvY2F0aW9uICh1c2VkIGZvciBwaHlzaWNzLCBjb2xsaXNpb24sIGNodW5rIGxvYWRpbmcpXHJcbi8vIGNhbWVyYVBvc2l0aW9uID0gY2FsY3VsYXRlZCBjYW1lcmEgcG9zaXRpb24gKHVzZWQgZm9yIHJlbmRlcmluZyB2aWV3IG1hdHJpeClcclxuY29uc3QgcGxheWVyUG9zaXRpb24gPSB2ZWMzLmZyb21WYWx1ZXMoMCwgMiwgNSk7XHJcbmNvbnN0IGNhbWVyYVBvc2l0aW9uID0gdmVjMy5jcmVhdGUoKTsgLy8gQ2FsY3VsYXRlZCBmcm9tIHBsYXllclBvc2l0aW9uIGluIDNyZCBwZXJzb25cclxubGV0IGNhbWVyYVlhdyA9IE1hdGguUEk7XHJcbmxldCBjYW1lcmFQaXRjaCA9IC0wLjM7XHJcbi8vIFR1bmVkIGZvciBTZWNvbmRzXHJcbmNvbnN0IGNhbWVyYVNwZWVkID0gNC4wO1xyXG5jb25zdCBtb3VzZVNlbnNpdGl2aXR5ID0gMC4wMDI7XHJcbi8vIFBoeXNpY3NcclxubGV0IHZlcnRpY2FsVmVsb2NpdHkgPSAwO1xyXG5jb25zdCBncmF2aXR5ID0gMjAuMDtcclxuY29uc3QganVtcEZvcmNlID0gOC41OyAvLyBUdW5lZCBmb3IgPjFtIGp1bXBcclxubGV0IGlzR3JvdW5kZWQgPSBmYWxzZTtcclxuY29uc3QgcGxheWVySGVpZ2h0ID0gMS42OyAvLyBWaXN1YWwgQm9keSBIZWlnaHQgKEV5ZXMgYXJlIGF0ICsxLjggZnJvbSBmZWV0IHJvdWdobHkpXHJcbmNvbnN0IHBsYXllclJhZGl1cyA9IDAuMzsgLy8gSGFsZi13aWR0aFxyXG5sZXQgY2FtZXJhWm9vbSA9IDYuMDsgLy8gRGlzdGFuY2UgZm9yIDNyZCBQZXJzb25cclxuY29uc3QgZXllTGV2ZWwgPSAxLjg7IC8vIENhbWVyYSBoZWlnaHQgYWJvdmUgZmVldCBmb3IgRmlyc3QgUGVyc29uXHJcblxyXG4vLyAtLS0gVG9yY2ggTGlnaHQgU3lzdGVtIC0tLVxyXG5jb25zdCB0b3JjaFBvc2l0aW9uczogdmVjM1tdID0gW107IC8vIEFsbCB0b3JjaGVzIGluIHRoZSB3b3JsZFxyXG5jb25zdCBNQVhfVE9SQ0hfTElHSFRTID0gMTY7IC8vIE1heGltdW0gdG9yY2hlcyB0byBzZW5kIHRvIHNoYWRlclxyXG5cclxuZnVuY3Rpb24gYWRkVG9yY2goeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcikge1xyXG4gICAgdG9yY2hQb3NpdGlvbnMucHVzaCh2ZWMzLmZyb21WYWx1ZXMoeCArIDAuNSwgeSArIDAuNSwgeiArIDAuNSkpOyAvLyBDZW50ZXIgb2YgYmxvY2tcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVG9yY2goeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcikge1xyXG4gICAgY29uc3QgdHggPSB4ICsgMC41LCB0eSA9IHkgKyAwLjUsIHR6ID0geiArIDAuNTtcclxuICAgIGNvbnN0IGluZGV4ID0gdG9yY2hQb3NpdGlvbnMuZmluZEluZGV4KHBvcyA9PlxyXG4gICAgICAgIE1hdGguYWJzKHBvc1swXSAtIHR4KSA8IDAuMSAmJiBNYXRoLmFicyhwb3NbMV0gLSB0eSkgPCAwLjEgJiYgTWF0aC5hYnMocG9zWzJdIC0gdHopIDwgMC4xXHJcbiAgICApO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIHRvcmNoUG9zaXRpb25zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5lYXJlc3RUb3JjaGVzKHBsYXllclBvczogdmVjMywgbWF4Q291bnQ6IG51bWJlcik6IHZlYzNbXSB7XHJcbiAgICByZXR1cm4gdG9yY2hQb3NpdGlvbnNcclxuICAgICAgICAubWFwKHBvcyA9PiAoeyBwb3MsIGRpc3Q6IHZlYzMuZGlzdGFuY2UocG9zLCBwbGF5ZXJQb3MpIH0pKVxyXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmRpc3QgLSBiLmRpc3QpXHJcbiAgICAgICAgLnNsaWNlKDAsIG1heENvdW50KVxyXG4gICAgICAgIC5tYXAodCA9PiB0LnBvcyk7XHJcbn1cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBpbnRlZ2VyIFkgbGV2ZWwgb2YgdGhlIGhpZ2hlc3QgYmxvY2sgaGl0LCBvciBudWxsIGlmIG5vIGNvbGxpc2lvblxyXG5mdW5jdGlvbiBjaGVja0NvbGxpc2lvbihwb3M6IHZlYzMpOiBudW1iZXIgfCBudWxsIHtcclxuICAgIGNvbnN0IG1pblggPSBNYXRoLmZsb29yKHBvc1swXSAtIHBsYXllclJhZGl1cyk7XHJcbiAgICBjb25zdCBtYXhYID0gTWF0aC5mbG9vcihwb3NbMF0gKyBwbGF5ZXJSYWRpdXMpO1xyXG4gICAgY29uc3QgbWluWiA9IE1hdGguZmxvb3IocG9zWzJdIC0gcGxheWVyUmFkaXVzKTtcclxuICAgIGNvbnN0IG1heFogPSBNYXRoLmZsb29yKHBvc1syXSArIHBsYXllclJhZGl1cyk7XHJcblxyXG4gICAgY29uc3QgbWluWSA9IE1hdGguZmxvb3IocG9zWzFdIC0gcGxheWVySGVpZ2h0KTtcclxuICAgIGNvbnN0IG1heFkgPSBNYXRoLmZsb29yKHBvc1sxXSk7XHJcblxyXG4gICAgbGV0IGhpdFk6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIC8vIEl0ZXJhdGUgcmVsZXZhbnQgYmxvY2tzXHJcbiAgICBmb3IgKGxldCB4ID0gbWluWDsgeCA8PSBtYXhYOyB4KyspIHtcclxuICAgICAgICBmb3IgKGxldCB6ID0gbWluWjsgeiA8PSBtYXhaOyB6KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjeCA9IE1hdGguZmxvb3IoeCAvIENIVU5LX1NJWkUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3ogPSBNYXRoLmZsb29yKHogLyBDSFVOS19TSVpFKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rID0gY2h1bmtzLmdldChgJHtjeH0sJHtjen1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2h1bmspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBseCA9IHggLSBjeCAqIENIVU5LX1NJWkU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbHogPSB6IC0gY3ogKiBDSFVOS19TSVpFO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IGdldEdyaWRJbmRleChseCwgeSwgbHopO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggIT09IC0xICYmIGNodW5rLmdyaWRbaWR4XSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIaXQhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoaXRZID09PSBudWxsIHx8IHkgPiBoaXRZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXRZID0geTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBoaXRZO1xyXG59XHJcblxyXG4vLyAtLS0gSW52ZW50b3J5ICYgSG90YmFyIC0tLVxyXG4vLyBTbG90cyAwLTggKEtleXMgMS05KVxyXG4vLyBJbnZlbnRvcnkgTWFwcGluZzogU2xvdCBJbmRleCAtPiBUZXh0dXJlIFR5cGVcclxuLy8gRGVmYXVsdDogU2xvdCAwID0gQ29iYmxlICgwKSwgU2xvdCAxID0gRGlydCAoMSksIHJlc3QgPSBDb2JibGVcclxuLy8gLS0tIEludmVudG9yeSAmIEhvdGJhciAtLS1cclxuLy8gU2xvdHMgMC04IChLZXlzIDEtOSlcclxuLy8gSW52ZW50b3J5IE1hcHBpbmc6IFNsb3QgSW5kZXggLT4gVGV4dHVyZSBUeXBlXHJcbi8vIERlZmF1bHQ6IFNsb3QgMCA9IENvYmJsZSAoMCksIFNsb3QgMSA9IERpcnQgKDEpLCBTbG90IDIgPSBHcmFzcyAoMiksIFNsb3QgMyA9IFROVCAoNCksIFNsb3QgNCA9IFRvcmNoICg1KVxyXG5jb25zdCBpbnZlbnRvcnkgPSBbMCwgMSwgMiwgNCwgNSwgMCwgMCwgMCwgMF07XHJcbi8vIEluaXRpYWwgQ291bnRzOiA2NCBDb2JibGUsIDEwIERpcnQsIDEwIEdyYXNzLCAxMDAgVE5ULCA2NCBUb3JjaFxyXG5jb25zdCBpbnZlbnRvcnlDb3VudHMgPSBbNjQsIDEwLCAxMCwgMTAwLCA2NCwgMCwgMCwgMCwgMF07XHJcbi8vIFBhZCB0byAzNiBpcyBkb25lIGJlbG93IGluIFVJIHNldHVwXHJcbmxldCBzZWxlY3RlZFNsb3QgPSAwO1xyXG5cclxuLy8gQ3JlYXRlIFVJXHJcbmNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jb250YWluZXInKTtcclxuaWYgKCFnYW1lQ29udGFpbmVyKSB0aHJvdyBuZXcgRXJyb3IoXCJHYW1lIGNvbnRhaW5lciBub3QgZm91bmRcIik7XHJcblxyXG5jb25zdCBob3RiYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuaG90YmFyQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuaG90YmFyQ29udGFpbmVyLnN0eWxlLmJvdHRvbSA9ICcxMHB4JztcclxuaG90YmFyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSAnNTAlJztcclxuaG90YmFyQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC01MCUpJztcclxuaG90YmFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbmhvdGJhckNvbnRhaW5lci5zdHlsZS5nYXAgPSAnNHB4JztcclxuaG90YmFyQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsMCwwLDAuNSknO1xyXG5ob3RiYXJDb250YWluZXIuc3R5bGUucGFkZGluZyA9ICc0cHgnO1xyXG5ob3RiYXJDb250YWluZXIuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzRweCc7XHJcbi8vIERpc2FibGUgZHJhZy9zZW1hbnRpY3NcclxuaG90YmFyQ29udGFpbmVyLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XHJcbmhvdGJhckNvbnRhaW5lci5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xyXG5nYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdGJhckNvbnRhaW5lcik7XHJcblxyXG4vLyBDcm9zc2hhaXJcclxuY29uc3QgY3Jvc3NoYWlyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNyb3NzaGFpci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbmNyb3NzaGFpci5zdHlsZS50b3AgPSAnNTAlJztcclxuY3Jvc3NoYWlyLnN0eWxlLmxlZnQgPSAnNTAlJztcclxuY3Jvc3NoYWlyLnN0eWxlLndpZHRoID0gJzIwcHgnO1xyXG5jcm9zc2hhaXIuc3R5bGUuaGVpZ2h0ID0gJzIwcHgnO1xyXG5jcm9zc2hhaXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSc7XHJcbmNyb3NzaGFpci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnOyAvLyBDbGljayB0aHJvdWdoXHJcbi8vIERyYXcgc2ltcGxlIGNyb3NzXHJcbmNyb3NzaGFpci5pbm5lckhUTUwgPSBgXHJcbjxkaXYgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDo5cHg7IHRvcDowOyB3aWR0aDoycHg7IGhlaWdodDoyMHB4OyBiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMC44KTtcIj48L2Rpdj5cclxuPGRpdiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OjA7IHRvcDo5cHg7IHdpZHRoOjIwcHg7IGhlaWdodDoycHg7IGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwwLjgpO1wiPjwvZGl2PlxyXG5gO1xyXG5nYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyb3NzaGFpcik7XHJcblxyXG5jb25zdCBzbG90czogeyBkaXY6IEhUTUxFbGVtZW50LCBjb3VudDogSFRNTEVsZW1lbnQgfVtdID0gW107XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcbiAgICBjb25zdCBzbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzbG90LnN0eWxlLndpZHRoID0gJzQwcHgnO1xyXG4gICAgc2xvdC5zdHlsZS5oZWlnaHQgPSAnNDBweCc7XHJcbiAgICBzbG90LnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgZ3JheSc7XHJcbiAgICBzbG90LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMzMzJztcclxuICAgIHNsb3Quc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnOyAvLyBGb3IgYWJzb2x1dGUgcG9zaXRpb25pbmcgb2YgY291bnRcclxuICAgIHNsb3Quc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIHNsb3Quc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xyXG4gICAgc2xvdC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xyXG4gICAgc2xvdC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICBzbG90LnN0eWxlLmZvbnRGYW1pbHkgPSAnbW9ub3NwYWNlJztcclxuICAgIC8vIHNsb3QuaW5uZXJUZXh0ID0gaSA8IDIgPyAoaSA9PT0gMCA/ICdDJyA6ICdEJykgOiAnJzsgXHJcblxyXG4gICAgLy8gSWNvblxyXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaWNvbi5zdHlsZS53aWR0aCA9ICcyMHB4JztcclxuICAgIGljb24uc3R5bGUuaGVpZ2h0ID0gJzIwcHgnO1xyXG4gICAgY29uc3QgdHlwZSA9IGludmVudG9yeVtpXTtcclxuICAgIGlmICh0eXBlID09PSAwKSBpY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODg4JzsgLy8gU3RvbmVcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09IDEpIGljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4NTUnOyAvLyBEaXJ0XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAyKSBpY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNDg0JzsgLy8gR3Jhc3NcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09IDQpIGljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGMDAnOyAvLyBUTlRcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09IDUpIGljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGQTAnOyAvLyBUb3JjaCAoYnJpZ2h0IG9yYW5nZSlcclxuICAgIGVsc2UgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzg4OCc7XHJcbiAgICBzbG90LmFwcGVuZENoaWxkKGljb24pO1xyXG5cclxuICAgIC8vIENvdW50XHJcbiAgICBjb25zdCBjb3VudFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvdW50U3Bhbi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBjb3VudFNwYW4uc3R5bGUuYm90dG9tID0gJzJweCc7XHJcbiAgICBjb3VudFNwYW4uc3R5bGUucmlnaHQgPSAnMnB4JztcclxuICAgIGNvdW50U3Bhbi5zdHlsZS5mb250U2l6ZSA9ICcxMnB4JztcclxuICAgIGNvdW50U3Bhbi5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xyXG4gICAgY291bnRTcGFuLnN0eWxlLnRleHRTaGFkb3cgPSAnMXB4IDFweCAwICMwMDAnO1xyXG4gICAgY291bnRTcGFuLmlubmVyVGV4dCA9IGludmVudG9yeUNvdW50c1tpXS50b1N0cmluZygpO1xyXG4gICAgc2xvdC5hcHBlbmRDaGlsZChjb3VudFNwYW4pO1xyXG5cclxuICAgIHNsb3RzLnB1c2goeyBkaXY6IHNsb3QsIGNvdW50OiBjb3VudFNwYW4gfSk7XHJcbiAgICBob3RiYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2xvdCk7XHJcbn1cclxuXHJcbi8vIC0tLSBFeHBhbmRlZCBJbnZlbnRvcnkgTG9naWMgLS0tXHJcbi8vIDQgUm93cyBvZiA5LiBSb3cgMCBpcyBIb3RiYXIuIFJvd3MgMS0zIGFyZSBNYWluIEludmVudG9yeS5cclxuY29uc3QgVE9UQUxfU0xPVFMgPSAzNjtcclxuLy8gUGFkIGludmVudG9yeSB0byAzNlxyXG53aGlsZSAoaW52ZW50b3J5Lmxlbmd0aCA8IFRPVEFMX1NMT1RTKSBpbnZlbnRvcnkucHVzaCgwKTtcclxud2hpbGUgKGludmVudG9yeUNvdW50cy5sZW5ndGggPCBUT1RBTF9TTE9UUykgaW52ZW50b3J5Q291bnRzLnB1c2goMCk7XHJcblxyXG4vLyBJbnZlbnRvcnkgVUkgT3ZlcmxheVxyXG5jb25zdCBpbnZlbnRvcnlPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmludmVudG9yeU92ZXJsYXkuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5pbnZlbnRvcnlPdmVybGF5LnN0eWxlLnRvcCA9ICc1MCUnO1xyXG5pbnZlbnRvcnlPdmVybGF5LnN0eWxlLmxlZnQgPSAnNTAlJztcclxuaW52ZW50b3J5T3ZlcmxheS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKC01MCUsIC01MCUpJztcclxuaW52ZW50b3J5T3ZlcmxheS5zdHlsZS53aWR0aCA9ICc0MDBweCc7XHJcbmludmVudG9yeU92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gJzMwMHB4JztcclxuaW52ZW50b3J5T3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwwLjgpJztcclxuaW52ZW50b3J5T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyBIaWRkZW4gYnkgZGVmYXVsdFxyXG5pbnZlbnRvcnlPdmVybGF5LnN0eWxlLmZsZXhXcmFwID0gJ3dyYXAnO1xyXG5pbnZlbnRvcnlPdmVybGF5LnN0eWxlLmdhcCA9ICc0cHgnO1xyXG5pbnZlbnRvcnlPdmVybGF5LnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XHJcbmludmVudG9yeU92ZXJsYXkuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzhweCc7XHJcbmludmVudG9yeU92ZXJsYXkuc3R5bGUuekluZGV4ID0gJzEwMCc7XHJcbmludmVudG9yeU92ZXJsYXkuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCAjNTU1JztcclxuZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnZlbnRvcnlPdmVybGF5KTtcclxuXHJcbmNvbnN0IGludlNsb3RzOiB7IGRpdjogSFRNTEVsZW1lbnQsIGNvdW50OiBIVE1MRWxlbWVudCwgaWNvbjogSFRNTEVsZW1lbnQsIGluZGV4OiBudW1iZXIgfVtdID0gW107XHJcbmxldCBzd2FwU291cmNlSW5kZXggPSAtMTtcclxubGV0IGRyYWdnZWRJdGVtOiB7IHR5cGU6IG51bWJlciwgY291bnQ6IG51bWJlciwgc291cmNlSW5kZXg6IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVJbnZlbnRvcnlTbG90cygpIHtcclxuICAgIGludmVudG9yeU92ZXJsYXkuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBpbnZTbG90cy5sZW5ndGggPSAwO1xyXG5cclxuICAgIC8vIENyZWF0ZSAzNiBzbG90c1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBUT1RBTF9TTE9UUzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgc2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNsb3Quc3R5bGUud2lkdGggPSAnNDBweCc7XHJcbiAgICAgICAgc2xvdC5zdHlsZS5oZWlnaHQgPSAnNDBweCc7XHJcbiAgICAgICAgc2xvdC5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkIGdyYXknO1xyXG4gICAgICAgIHNsb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzMzMnO1xyXG4gICAgICAgIHNsb3Quc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgICAgIHNsb3Quc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBzbG90LnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcclxuICAgICAgICBzbG90LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XHJcbiAgICAgICAgc2xvdC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgc2xvdC5zdHlsZS5mb250RmFtaWx5ID0gJ21vbm9zcGFjZSc7XHJcbiAgICAgICAgc2xvdC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblxyXG4gICAgICAgIC8vIEV2ZW50OiBEcmFnIFN0YXJ0XHJcbiAgICAgICAgc2xvdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXYpID0+IHtcclxuICAgICAgICAgICAgaWYgKGludmVudG9yeUNvdW50c1tpXSA9PT0gMCkgcmV0dXJuOyAvLyBOb3RoaW5nIHRvIGRyYWdcclxuXHJcbiAgICAgICAgICAgIGRyYWdnZWRJdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogaW52ZW50b3J5W2ldLFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IGludmVudG9yeUNvdW50c1tpXSxcclxuICAgICAgICAgICAgICAgIHNvdXJjZUluZGV4OiBpXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBWaXN1YWwgZmVlZGJhY2tcclxuICAgICAgICAgICAgc2xvdC5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEV2ZW50OiBTd2FwXHJcbiAgICAgICAgc2xvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHN3YXBTb3VyY2VJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8vIFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgc3dhcFNvdXJjZUluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIHNsb3Quc3R5bGUuYm9yZGVyQ29sb3IgPSAneWVsbG93JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFN3YXBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IHN3YXBTb3VyY2VJbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRzdCA9IGk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3dhcCBUeXBlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wVHlwZSA9IGludmVudG9yeVtzcmNdO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5W3NyY10gPSBpbnZlbnRvcnlbZHN0XTtcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVtkc3RdID0gdGVtcFR5cGU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3dhcCBDb3VudFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcENvdW50ID0gaW52ZW50b3J5Q291bnRzW3NyY107XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlDb3VudHNbc3JjXSA9IGludmVudG9yeUNvdW50c1tkc3RdO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5Q291bnRzW2RzdF0gPSB0ZW1wQ291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dhcFNvdXJjZUluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVJbnZlbnRvcnlVSSgpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlSG90YmFyVUkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBJY29uXHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGljb24uc3R5bGUud2lkdGggPSAnMjBweCc7XHJcbiAgICAgICAgaWNvbi5zdHlsZS5oZWlnaHQgPSAnMjBweCc7XHJcbiAgICAgICAgc2xvdC5hcHBlbmRDaGlsZChpY29uKTtcclxuXHJcbiAgICAgICAgLy8gQ291bnRcclxuICAgICAgICBjb25zdCBjb3VudFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb3VudFNwYW4uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIGNvdW50U3Bhbi5zdHlsZS5ib3R0b20gPSAnMnB4JztcclxuICAgICAgICBjb3VudFNwYW4uc3R5bGUucmlnaHQgPSAnMnB4JztcclxuICAgICAgICBjb3VudFNwYW4uc3R5bGUuZm9udFNpemUgPSAnMTJweCc7XHJcbiAgICAgICAgY291bnRTcGFuLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XHJcbiAgICAgICAgY291bnRTcGFuLnN0eWxlLnRleHRTaGFkb3cgPSAnMXB4IDFweCAwICMwMDAnO1xyXG4gICAgICAgIHNsb3QuYXBwZW5kQ2hpbGQoY291bnRTcGFuKTtcclxuXHJcbiAgICAgICAgaW52U2xvdHMucHVzaCh7IGRpdjogc2xvdCwgY291bnQ6IGNvdW50U3BhbiwgaWNvbjogaWNvbiwgaW5kZXg6IGkgfSk7XHJcbiAgICAgICAgaW52ZW50b3J5T3ZlcmxheS5hcHBlbmRDaGlsZChzbG90KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gRHJhZy1hbmQtZHJvcCBoYW5kbGVyc1xyXG5pbnZlbnRvcnlPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICBpZiAoIWRyYWdnZWRJdGVtKSByZXR1cm47XHJcblxyXG4gICAgLy8gRmluZCBzbG90IHVuZGVyIGN1cnNvclxyXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xyXG5cclxuICAgIC8vIEhpZ2hsaWdodCBkcm9wIHRhcmdldFxyXG4gICAgaW52U2xvdHMuZm9yRWFjaChzID0+IHtcclxuICAgICAgICBpZiAocy5kaXYuY29udGFpbnModGFyZ2V0IGFzIE5vZGUpICYmIHMuaW5kZXggIT09IGRyYWdnZWRJdGVtIS5zb3VyY2VJbmRleCkge1xyXG4gICAgICAgICAgICBzLmRpdi5zdHlsZS5ib3JkZXJDb2xvciA9ICd5ZWxsb3cnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocy5pbmRleCAhPT0gZHJhZ2dlZEl0ZW0hLnNvdXJjZUluZGV4KSB7XHJcbiAgICAgICAgICAgIHMuZGl2LnN0eWxlLmJvcmRlckNvbG9yID0gKHMuaW5kZXggPCA5KSA/ICcjYWFhJyA6ICcjNTU1JztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5pbnZlbnRvcnlPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZSkgPT4ge1xyXG4gICAgaWYgKCFkcmFnZ2VkSXRlbSkgcmV0dXJuO1xyXG5cclxuICAgIC8vIEZpbmQgdGFyZ2V0IHNsb3RcclxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xyXG4gICAgY29uc3QgdGFyZ2V0U2xvdCA9IGludlNsb3RzLmZpbmQocyA9PiBzLmRpdi5jb250YWlucyh0YXJnZXQgYXMgTm9kZSkpO1xyXG5cclxuICAgIGlmICh0YXJnZXRTbG90ICYmIHRhcmdldFNsb3QuaW5kZXggIT09IGRyYWdnZWRJdGVtLnNvdXJjZUluZGV4KSB7XHJcbiAgICAgICAgLy8gU3dhcCBpdGVtc1xyXG4gICAgICAgIGNvbnN0IHNyYyA9IGRyYWdnZWRJdGVtLnNvdXJjZUluZGV4O1xyXG4gICAgICAgIGNvbnN0IGRzdCA9IHRhcmdldFNsb3QuaW5kZXg7XHJcblxyXG4gICAgICAgIGNvbnN0IHRlbXBUeXBlID0gaW52ZW50b3J5W3NyY107XHJcbiAgICAgICAgaW52ZW50b3J5W3NyY10gPSBpbnZlbnRvcnlbZHN0XTtcclxuICAgICAgICBpbnZlbnRvcnlbZHN0XSA9IHRlbXBUeXBlO1xyXG5cclxuICAgICAgICBjb25zdCB0ZW1wQ291bnQgPSBpbnZlbnRvcnlDb3VudHNbc3JjXTtcclxuICAgICAgICBpbnZlbnRvcnlDb3VudHNbc3JjXSA9IGludmVudG9yeUNvdW50c1tkc3RdO1xyXG4gICAgICAgIGludmVudG9yeUNvdW50c1tkc3RdID0gdGVtcENvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlc2V0IGRyYWcgc3RhdGVcclxuICAgIGRyYWdnZWRJdGVtID0gbnVsbDtcclxuICAgIHVwZGF0ZUludmVudG9yeVVJKCk7XHJcbiAgICB1cGRhdGVIb3RiYXJVSSgpO1xyXG59KTtcclxuXHJcbmNyZWF0ZUludmVudG9yeVNsb3RzKCk7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVJbnZlbnRvcnlVSSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVE9UQUxfU0xPVFM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHNsb3QgPSBpbnZTbG90c1tpXTtcclxuICAgICAgICBjb25zdCB0eXBlID0gaW52ZW50b3J5W2ldO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gaW52ZW50b3J5Q291bnRzW2ldO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgSWNvbiB3aXRoIGFjdHVhbCB0ZXh0dXJlIHJlcHJlc2VudGF0aW9uXHJcbiAgICAgICAgY29uc3QgaWNvbiA9IHNsb3QuaWNvbjtcclxuICAgICAgICBpZiAodHlwZSA9PT0gMCkgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzY2Nic7IC8vIFN0b25lXHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gMSkgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzg1NSc7IC8vIERpcnQgIFxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IDIpIHtcclxuICAgICAgICAgICAgLy8gR3Jhc3MgLSBzaG93IGdyZWVuIHRvcFxyXG4gICAgICAgICAgICBpY29uLnN0eWxlLmJhY2tncm91bmQgPSAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzRhNCAwJSwgIzRhNCA2MCUsICM4NTUgNjAlLCAjODU1IDEwMCUpJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gNCkgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2MyMic7IC8vIFROVFxyXG4gICAgICAgIGVsc2UgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgQ291bnRcclxuICAgICAgICBzbG90LmNvdW50LmlubmVyVGV4dCA9IGNvdW50ID4gMCA/IGNvdW50LnRvU3RyaW5nKCkgOiAnJztcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgb3BhY2l0eSBhbmQgYm9yZGVyXHJcbiAgICAgICAgc2xvdC5kaXYuc3R5bGUub3BhY2l0eSA9IChkcmFnZ2VkSXRlbSAmJiBkcmFnZ2VkSXRlbS5zb3VyY2VJbmRleCA9PT0gaSkgPyAnMC41JyA6ICcxLjAnO1xyXG4gICAgICAgIHNsb3QuZGl2LnN0eWxlLmJvcmRlckNvbG9yID0gKGkgPCA5KSA/ICcjYWFhJyA6ICcjNTU1JztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlSW52ZW50b3J5KCkge1xyXG4gICAgaWYgKGludmVudG9yeU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgaW52ZW50b3J5T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIGRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpOyAvLyBGcmVlIG1vdXNlXHJcbiAgICAgICAgdXBkYXRlSW52ZW50b3J5VUkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW52ZW50b3J5T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGNhbnZhcy5yZXF1ZXN0UG9pbnRlckxvY2soKTsgLy8gTG9jayBtb3VzZVxyXG4gICAgICAgIHN3YXBTb3VyY2VJbmRleCA9IC0xOyAvLyBDYW5jZWwgc3dhcFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVIb3RiYXJVSSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGludmVudG9yeVtpXTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2xvdERpdiA9IHNsb3RzW2ldLmRpdjtcclxuICAgICAgICBjb25zdCBpY29uID0gc2xvdERpdi5maXJzdEVsZW1lbnRDaGlsZCBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgLy8gTWF0Y2ggaW52ZW50b3J5IFVJIHN0eWxpbmdcclxuICAgICAgICBpZiAodHlwZSA9PT0gMCkgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzY2Nic7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gMSkgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzg1NSc7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gMikge1xyXG4gICAgICAgICAgICBpY29uLnN0eWxlLmJhY2tncm91bmQgPSAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzRhNCAwJSwgIzRhNCA2MCUsICM4NTUgNjAlLCAjODU1IDEwMCUpJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gNCkgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2MyMic7XHJcbiAgICAgICAgZWxzZSBpY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcblxyXG4gICAgICAgIHNsb3RzW2ldLmNvdW50LmlubmVyVGV4dCA9IGludmVudG9yeUNvdW50c1tpXS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBpZiAoaSA9PT0gc2VsZWN0ZWRTbG90KSB7XHJcbiAgICAgICAgICAgIHNsb3RzW2ldLmRpdi5zdHlsZS5ib3JkZXJDb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICAgIHNsb3RzW2ldLmRpdi5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMS4xKSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2xvdHNbaV0uZGl2LnN0eWxlLmJvcmRlckNvbG9yID0gJ2dyYXknO1xyXG4gICAgICAgICAgICBzbG90c1tpXS5kaXYuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEuMCknO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG51cGRhdGVIb3RiYXJVSSgpO1xyXG5cclxuY29uc3Qga2V5czogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgIC8vIFN0cmljdCBJbnB1dCBCbG9ja2luZzpcclxuICAgIC8vIElmIEdhbWUgQWN0aXZlOiBCbG9jayBXQVNEL1NwYWNlL0Fycm93cy9JL0YvTnVtYmVycyBmcm9tIHNjcm9sbGluZy90eXBpbmcgY29udGV4dC5cclxuICAgIC8vIElmIEdhbWUgUGF1c2VkOiBBbGxvdyBFVkVSWVRISU5HIChkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3IpLlxyXG5cclxuICAgIGlmICghaXNHYW1lQWN0aXZlKSByZXR1cm47IC8vIEFsbG93IHR5cGluZy9zY3JvbGxpbmcgaWYgcGF1c2VkXHJcblxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ1NwYWNlJyB8fCBlLmNvZGUuc3RhcnRzV2l0aCgnQXJyb3cnKSB8fCBlLmNvZGUgPT09ICdLZXlXJyB8fCBlLmNvZGUgPT09ICdLZXlTJyB8fCBlLmNvZGUgPT09ICdLZXlBJyB8fCBlLmNvZGUgPT09ICdLZXlEJykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUb2dnbGUgSW52ZW50b3J5IChJKSAtIE9ubHkgaWYgYWN0aXZlXHJcbiAgICBpZiAoZS5jb2RlID09PSAnS2V5SScpIHtcclxuICAgICAgICB0b2dnbGVJbnZlbnRvcnkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIb3RrZXlzL0FjdGlvbnMgb25seSBpZiBhY3RpdmVcclxuICAgIGtleXNbZS5jb2RlXSA9IHRydWU7XHJcblxyXG4gICAgLy8gRXhpdCBJbnZlbnRvcnkgKEVzY2FwZSlcclxuICAgIGlmIChlLmNvZGUgPT09ICdFc2NhcGUnICYmIGludmVudG9yeU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XHJcbiAgICAgICAgdG9nZ2xlSW52ZW50b3J5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSG90a2V5IDEtOVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ0tleUUnKSB7XHJcbiAgICAgICAgY29uc3QgZGlzdCA9IHZlYzMuZGlzdGFuY2UoY2FtZXJhUG9zaXRpb24sIHNwaWRlci5wb3NpdGlvbik7XHJcbiAgICAgICAgaWYgKGlzUmlkaW5nKSB7XHJcbiAgICAgICAgICAgIGlzUmlkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIERpc21vdW50IG5lYXIgc3BpZGVyIHBvc2l0aW9uXHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXN0IDwgNS4wKSB7XHJcbiAgICAgICAgICAgIGlzUmlkaW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRXhwbG9zaW9uIChGKVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ0tleUYnKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRIaXQgJiYgY3VycmVudEhpdC5pbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgLy8gVW51c2VkIC0xIGluZGV4IGluIGN1cnJlbnQgaW1wbGVtZW50YXRpb24sIGJ1dCBjdXJyZW50SGl0IGltcGxpZXMgdmFsaWQgYmxvY2tcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWN0dWFsbHksIGNoZWNrIGN1cnJlbnRIaXRcclxuICAgICAgICBpZiAoY3VycmVudEhpdCkge1xyXG4gICAgICAgICAgICBjb25zdCBweCA9IE1hdGgucm91bmQoY3VycmVudEhpdC5wb2ludFswXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHB5ID0gTWF0aC5yb3VuZChjdXJyZW50SGl0LnBvaW50WzFdKTtcclxuICAgICAgICAgICAgY29uc3QgcHogPSBNYXRoLnJvdW5kKGN1cnJlbnRIaXQucG9pbnRbMl0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3ggPSBNYXRoLmZsb29yKHB4IC8gQ0hVTktfU0laRSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN6ID0gTWF0aC5mbG9vcihweiAvIENIVU5LX1NJWkUpO1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBgJHtjeH0sJHtjen1gO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2h1bmsgPSBjaHVua3MuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgIGlmIChjaHVuaykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbHggPSBweCAtIGN4ICogQ0hVTktfU0laRTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGx6ID0gcHogLSBjeiAqIENIVU5LX1NJWkU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBnZXRHcmlkSW5kZXgobHgsIHB5LCBseik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgVE5UXHJcbiAgICAgICAgICAgICAgICBpZiAoaWR4ICE9PSAtMSAmJiBjaHVuay5ncmlkW2lkeF0gPT09IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBFWFBMT0RFXHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmxvZygnQk9PTSEnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYWRpdXMgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pblggPSBweCAtIHJhZGl1czsgY29uc3QgbWF4WCA9IHB4ICsgcmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pblkgPSBweSAtIHJhZGl1czsgY29uc3QgbWF4WSA9IHB5ICsgcmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pblogPSBweiAtIHJhZGl1czsgY29uc3QgbWF4WiA9IHB6ICsgcmFkaXVzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBIZWxwZXIgdG8gcmVidWlsZCBzaW5nbGUgY2h1bmsgbWVzaFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYnVpbGRDaHVua01lc2ggPSAoY2h1bms6IENodW5rRGF0YSwgY3g6IG51bWJlciwgY3o6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaHVuay52aXNpYmxlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgQ0hVTktfU0laRTsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IENIVU5LX1NJWkU7IHorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHd4ID0gY3ggKiBDSFVOS19TSVpFICsgeDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3eiA9IGN6ICogQ0hVTktfU0laRSArIHo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmFzdCBzY2FuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IC0zMDsgeSA8PSAzMDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IGdldEdyaWRJbmRleCh4LCB5LCB6KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCA9PT0gLTEpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gY2h1bmsuZ3JpZFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gMCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXhwb3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NvbGlkID0gKG54OiBudW1iZXIsIG55OiBudW1iZXIsIG56OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5JZHggPSBnZXRHcmlkSW5kZXgobngsIG55LCBueik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobklkeCA9PT0gLTEpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaHVuay5ncmlkW25JZHhdICE9PSAwOyAvLyBOb3QgMCBtZWFucyBzb2xpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2FpdCwgYWlyIGlzIDAuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1NvbGlkKHggKyAxLCB5LCB6KSkgZXhwb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1NvbGlkKHggLSAxLCB5LCB6KSkgZXhwb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1NvbGlkKHgsIHkgKyAxLCB6KSkgZXhwb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1NvbGlkKHgsIHkgLSAxLCB6KSkgZXhwb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1NvbGlkKHgsIHksIHogKyAxKSkgZXhwb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1NvbGlkKHgsIHksIHogLSAxKSkgZXhwb3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhwb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmsudmlzaWJsZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IG5ldyBGbG9hdDMyQXJyYXkoW3d4LCB5LCB3el0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUgLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rc1RvVXBkYXRlID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSBtaW5YOyB4IDw9IG1heFg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gbWluWTsgeSA8PSBtYXhZOyB5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHogPSBtaW5aOyB6IDw9IG1heFo7IHorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0geCAtIHB4OyBjb25zdCBkeSA9IHkgLSBweTsgY29uc3QgZHogPSB6IC0gcHo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGR4ICogZHggKyBkeSAqIGR5ICsgZHogKiBkeiA8PSByYWRpdXMgKiByYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVzdHJveVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0Q3ggPSBNYXRoLmZsb29yKHggLyBDSFVOS19TSVpFKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdEN6ID0gTWF0aC5mbG9vcih6IC8gQ0hVTktfU0laRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRLZXkgPSBgJHt0Q3h9LCR7dEN6fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRDaHVuayA9IGNodW5rcy5nZXQodEtleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodENodW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0THggPSB4IC0gdEN4ICogQ0hVTktfU0laRTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRMeiA9IHogLSB0Q3ogKiBDSFVOS19TSVpFO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdElkeCA9IGdldEdyaWRJbmRleCh0THgsIHksIHRMeik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodElkeCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Q2h1bmsuZ3JpZFt0SWR4XSA9IDA7IC8vIEFpclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNodW5rc1RvVXBkYXRlLmFkZCh0S2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVidWlsZCBDaHVua3NcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNLZXkgb2YgY2h1bmtzVG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgW2NjeCwgY2N6XSA9IGNLZXkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVidWlsZENodW5rTWVzaChjaHVua3MuZ2V0KGNLZXkpISwgY2N4LCBjY3opO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZWJ1aWxkV29ybGQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChlLmtleSA+PSAnMScgJiYgZS5rZXkgPD0gJzknKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRTbG90ID0gcGFyc2VJbnQoZS5rZXkpIC0gMTtcclxuICAgICAgICB1cGRhdGVIb3RiYXJVSSgpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIE1vdXNlIFdoZWVsXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChlKSA9PiB7XHJcbiAgICBpZiAoIWlzR2FtZUFjdGl2ZSkgcmV0dXJuOyAvLyBTdHJpY3QgSXNvbGF0aW9uOiBBbGxvdyBzY3JvbGwgaWYgcGF1c2VkXHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBCbG9jayBwYWdlIHNjcm9sbCBpZiBhY3RpdmVcclxuXHJcbiAgICBpZiAoaXNSaWRpbmcpIHtcclxuICAgICAgICAvLyBab29tIENhbWVyYVxyXG4gICAgICAgIGNhbWVyYVpvb20gKz0gZS5kZWx0YVkgKiAwLjAxO1xyXG4gICAgICAgIC8vIEFsbG93IGdyZWF0ZXIgem9vbSB3aGVuIHJpZGluZyBzcGlkZXIgZm9yIGJldHRlciB2aWV3XHJcbiAgICAgICAgY29uc3QgbWF4Wm9vbSA9IDQwLjA7XHJcbiAgICAgICAgY2FtZXJhWm9vbSA9IE1hdGgubWF4KDIuMCwgTWF0aC5taW4obWF4Wm9vbSwgY2FtZXJhWm9vbSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBJbnZlbnRvcnkgU2Nyb2xsXHJcbiAgICAgICAgaWYgKGUuZGVsdGFZID4gMCkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZFNsb3QgPSAoc2VsZWN0ZWRTbG90ICsgMSkgJSA5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkU2xvdCA9IChzZWxlY3RlZFNsb3QgLSAxICsgOSkgJSA5O1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVIb3RiYXJVSSgpO1xyXG4gICAgfVxyXG59LCB7IHBhc3NpdmU6IGZhbHNlIH0pOyAvLyBSRVFVSVJFRCBmb3IgcHJldmVudERlZmF1bHQgdG8gd29yayBvbiB3aGVlbCBldmVudHNcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7IGtleXNbZS5jb2RlXSA9IGZhbHNlOyB9KTtcclxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBjYW52YXMucmVxdWVzdFBvaW50ZXJMb2NrKCk7IH0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQgPT09IGNhbnZhcykge1xyXG4gICAgICAgIGNhbWVyYVlhdyAtPSBlLm1vdmVtZW50WCAqIG1vdXNlU2Vuc2l0aXZpdHk7XHJcblxyXG4gICAgICAgIC8vIEludmVydCBQaXRjaCBpZiAzcmQgUGVyc29uIE9uLUZvb3RcclxuICAgICAgICAvLyBOb3RlOiBpc1RoaXJkUGVyc29uT25Gb290IGlzIGxvY2FsIHRvIGZyYW1lKCksIHNvIHdlIGNoZWNrIERPTSBlbGVtZW50IGRpcmVjdGx5IGhlcmUuXHJcbiAgICAgICAgLy8gT3IgYmV0dGVyLCBjaGVjayB0aGUgZ2xvYmFsIGNoZWNrYm94IHJlZmVyZW5jZS5cclxuICAgICAgICAvLyBjaGtUaGlyZFBlcnNvbiBpcyBnbG9iYWwuXHJcblxyXG4gICAgICAgIGxldCBwaXRjaERlbHRhID0gZS5tb3ZlbWVudFkgKiBtb3VzZVNlbnNpdGl2aXR5O1xyXG4gICAgICAgIGlmIChjaGtUaGlyZFBlcnNvbiAmJiBjaGtUaGlyZFBlcnNvbi5jaGVja2VkICYmICFpc1JpZGluZykge1xyXG4gICAgICAgICAgICAvLyBJbnZlcnQgZm9yIFwiTW91c2UgRG93biA9IExvb2sgRG93blwiIGZlZWwgaW4gM3JkIHBlcnNvblxyXG4gICAgICAgICAgICAvLyBDdXJyZW50OiBQaXRjaC0gPSBVcC4gUGl0Y2grID0gRG93bi5cclxuICAgICAgICAgICAgLy8gTW91c2UgRG93biAoUG9zIFkpLiBXZSB3YW50IFBpdGNoKyAoRG93bikuXHJcbiAgICAgICAgICAgIC8vIE9yaWdpbmFsbHk6IGNhbWVyYVBpdGNoIC09IGRlbHRhLiAoUG9zIFkgLT4gUGl0Y2gtIC0+IFVwKS5cclxuICAgICAgICAgICAgLy8gTmV3OiBjYW1lcmFQaXRjaCArPSBkZWx0YS4gKFBvcyBZIC0+IFBpdGNoKyAtPiBEb3duKS5cclxuICAgICAgICAgICAgLy8gU28gd2UganVzdCBmbGlwIGRlbHRhIHNpZ24/IFxyXG4gICAgICAgICAgICAvLyBMb2dpYzogY2FtZXJhUGl0Y2ggLT0gKGZsaXBwZWRfZGVsdGEpLiBcclxuICAgICAgICAgICAgLy8gSWYgd2Ugd2FudCArPSwgdGhlbiBmbGlwcGVkX2RlbHRhIG11c3QgYmUgbmVnYXRpdmUgb2Ygb3JpZ2luYWwuXHJcblxyXG4gICAgICAgICAgICBwaXRjaERlbHRhID0gLXBpdGNoRGVsdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYW1lcmFQaXRjaCAtPSBwaXRjaERlbHRhO1xyXG4gICAgICAgIGNhbWVyYVBpdGNoID0gTWF0aC5tYXgoLU1hdGguUEkgLyAyICsgMC4xLCBNYXRoLm1pbihNYXRoLlBJIC8gMiAtIDAuMSwgY2FtZXJhUGl0Y2gpKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyAtLS0gUmF5Y2FzdGluZyAtLS1cclxuZnVuY3Rpb24gZ2V0Q2FtZXJhRm9yd2FyZCgpIHtcclxuICAgIGNvbnN0IGZvcndhcmQgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgZm9yd2FyZFswXSA9IE1hdGguY29zKGNhbWVyYVBpdGNoKSAqIE1hdGguc2luKGNhbWVyYVlhdyk7XHJcbiAgICBmb3J3YXJkWzFdID0gTWF0aC5zaW4oY2FtZXJhUGl0Y2gpO1xyXG4gICAgZm9yd2FyZFsyXSA9IE1hdGguY29zKGNhbWVyYVBpdGNoKSAqIE1hdGguY29zKGNhbWVyYVlhdyk7XHJcbiAgICB2ZWMzLm5vcm1hbGl6ZShmb3J3YXJkLCBmb3J3YXJkKTtcclxuICAgIHJldHVybiBmb3J3YXJkO1xyXG59XHJcblxyXG4vLyBSYXkgdnMgQUFCQlxyXG5mdW5jdGlvbiBpbnRlcnNlY3RSYXlBQUJCKG9yaWdpbjogdmVjMywgZGlyOiB2ZWMzLCBib3hNaW46IHZlYzMsIGJveE1heDogdmVjMyk6IG51bWJlciB8IG51bGwge1xyXG4gICAgbGV0IHRtaW4gPSAoYm94TWluWzBdIC0gb3JpZ2luWzBdKSAvIGRpclswXTtcclxuICAgIGxldCB0bWF4ID0gKGJveE1heFswXSAtIG9yaWdpblswXSkgLyBkaXJbMF07XHJcbiAgICBpZiAodG1pbiA+IHRtYXgpIFt0bWluLCB0bWF4XSA9IFt0bWF4LCB0bWluXTtcclxuXHJcbiAgICBsZXQgdHltaW4gPSAoYm94TWluWzFdIC0gb3JpZ2luWzFdKSAvIGRpclsxXTtcclxuICAgIGxldCB0eW1heCA9IChib3hNYXhbMV0gLSBvcmlnaW5bMV0pIC8gZGlyWzFdO1xyXG4gICAgaWYgKHR5bWluID4gdHltYXgpIFt0eW1pbiwgdHltYXhdID0gW3R5bWF4LCB0eW1pbl07XHJcblxyXG4gICAgaWYgKCh0bWluID4gdHltYXgpIHx8ICh0eW1pbiA+IHRtYXgpKSByZXR1cm4gbnVsbDtcclxuICAgIGlmICh0eW1pbiA+IHRtaW4pIHRtaW4gPSB0eW1pbjtcclxuICAgIGlmICh0eW1heCA8IHRtYXgpIHRtYXggPSB0eW1heDtcclxuXHJcbiAgICBsZXQgdHptaW4gPSAoYm94TWluWzJdIC0gb3JpZ2luWzJdKSAvIGRpclsyXTtcclxuICAgIGxldCB0em1heCA9IChib3hNYXhbMl0gLSBvcmlnaW5bMl0pIC8gZGlyWzJdO1xyXG4gICAgaWYgKHR6bWluID4gdHptYXgpIFt0em1pbiwgdHptYXhdID0gW3R6bWF4LCB0em1pbl07XHJcblxyXG4gICAgaWYgKCh0bWluID4gdHptYXgpIHx8ICh0em1pbiA+IHRtYXgpKSByZXR1cm4gbnVsbDtcclxuICAgIGlmICh0em1pbiA+IHRtaW4pIHRtaW4gPSB0em1pbjtcclxuICAgIGlmICh0em1heCA8IHRtYXgpIHRtYXggPSB0em1heDtcclxuXHJcbiAgICBpZiAodG1heCA8IDApIHJldHVybiBudWxsOyAvLyBCZWhpbmRcclxuICAgIC8vIElmIHRtaW4gPCAwIChpbnNpZGUgYmxvY2spLCByZXR1cm4gdG1heD8gT3IgMD8gTGV0J3MgcmV0dXJuIHRtaW4gaWYgdmFsaWQgKHBvc2l0aXZlKSwgZWxzZSAwIGlmIGluc2lkZT9cclxuICAgIC8vIEFjdHVhbGx5IHN0YW5kYXJkIGltcGxlbWVudGF0aW9uIGhhbmRsZXMgc3RhcnQgaW5zaWRlLlxyXG4gICAgcmV0dXJuIHRtaW4gPj0gMCA/IHRtaW4gOiB0bWF4O1xyXG59XHJcblxyXG5cclxuLy8gLS0tIE91dGxpbmUgUmVuZGVyZXIgLS0tXHJcbi8vIE5ldyBzaGFkZXIgZm9yIFRISUNLIEJMQUNLIExJTkVTIChDYWdlIEVmZmVjdClcclxuY29uc3Qgb3V0bGluZVNoYWRlckNvZGUgPSBgXHJcbnN0cnVjdCBVbmlmb3JtcyB7XHJcbiAgICBtb2RlbFZpZXdQcm9qZWN0aW9uTWF0cml4IDogbWF0NHg0PGYzMj4sXHJcbiAgICB2aWV3UHJvamVjdGlvbk1hdHJpeCA6IG1hdDR4NDxmMzI+LFxyXG59XHJcbnN0cnVjdCBPdXRsaW5lVW5pZm9ybXMge1xyXG4gICAgcG9zaXRpb24gOiB2ZWM0PGYzMj4sIFxyXG59XHJcbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gZ2xvYmFsVW5pZm9ybXMgOiBVbmlmb3JtcztcclxuQGdyb3VwKDApIEBiaW5kaW5nKDEpIHZhcjx1bmlmb3JtPiBvdXRsaW5lVW5pZm9ybXMgOiBPdXRsaW5lVW5pZm9ybXM7XHJcblxyXG5zdHJ1Y3QgVmVydGV4T3V0cHV0IHtcclxuICAgIEBidWlsdGluKHBvc2l0aW9uKSBQb3NpdGlvbiA6IHZlYzQ8ZjMyPixcclxuICAgIEBsb2NhdGlvbigwKSB1diA6IHZlYzI8ZjMyPixcclxufVxyXG5cclxuQHZlcnRleFxyXG5mbiBtYWluX3ZzKEBsb2NhdGlvbigwKSBwb3NpdGlvbiA6IHZlYzM8ZjMyPiwgQGxvY2F0aW9uKDEpIHV2IDogdmVjMjxmMzI+KSAtPiBWZXJ0ZXhPdXRwdXQge1xyXG4gICAgdmFyIG91dHB1dCA6IFZlcnRleE91dHB1dDtcclxuICAgIC8vIE1vdmUgdG8gYmxvY2sgcG9zaXRpb25cclxuICAgIGxldCB3b3JsZFBvcyA9IHBvc2l0aW9uICsgb3V0bGluZVVuaWZvcm1zLnBvc2l0aW9uLnh5ejsgXHJcbiAgICBvdXRwdXQuUG9zaXRpb24gPSBnbG9iYWxVbmlmb3Jtcy52aWV3UHJvamVjdGlvbk1hdHJpeCAqIHZlYzQ8ZjMyPih3b3JsZFBvcywgMS4wKTtcclxuICAgIG91dHB1dC51diA9IHV2O1xyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5cclxuQGZyYWdtZW50XHJcbmZuIG1haW5fZnMoaW5wdXQ6IFZlcnRleE91dHB1dCkgLT4gQGxvY2F0aW9uKDApIHZlYzQ8ZjMyPiB7XHJcbiAgICAvLyBUaGljayBibGFjayBsaW5lcyBiYXNlZCBvbiBVViBlZGdlIGRpc3RhbmNlXHJcbiAgICBsZXQgdGhpY2tuZXNzID0gMC4wNTsgLy8gNSUgYm9yZGVyIHRoaWNrbmVzc1xyXG4gICAgLy8gQ2hlY2sgaWYgY2xvc2UgdG8gYW55IGVkZ2VcclxuICAgIGxldCBuZWFyRWRnZVggPSBpbnB1dC51di54IDwgdGhpY2tuZXNzIHx8IGlucHV0LnV2LnggPiAoMS4wIC0gdGhpY2tuZXNzKTtcclxuICAgIGxldCBuZWFyRWRnZVkgPSBpbnB1dC51di55IDwgdGhpY2tuZXNzIHx8IGlucHV0LnV2LnkgPiAoMS4wIC0gdGhpY2tuZXNzKTtcclxuICAgIFxyXG4gICAgaWYgKG5lYXJFZGdlWCB8fCBuZWFyRWRnZVkpIHtcclxuICAgICAgICByZXR1cm4gdmVjNDxmMzI+KDAuMCwgMC4wLCAwLjAsIDEuMCk7IC8vIFNvbGlkIEJsYWNrXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpc2NhcmQ7IC8vIFRyYW5zcGFyZW50IGNlbnRlclxyXG4gICAgcmV0dXJuIHZlYzQ8ZjMyPigwLjAsIDAuMCwgMC4wLCAwLjApO1xyXG59XHJcbmA7XHJcblxyXG5jb25zdCBvdXRsaW5lVW5pZm9ybUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xyXG4gICAgc2l6ZTogMTYsIC8vIHZlYzRcclxuICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QsXHJcbn0pO1xyXG5cclxuY29uc3Qgb3V0bGluZVBpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcclxuICAgIGxheW91dDogJ2F1dG8nLFxyXG4gICAgdmVydGV4OiB7XHJcbiAgICAgICAgbW9kdWxlOiBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogb3V0bGluZVNoYWRlckNvZGUgfSksXHJcbiAgICAgICAgZW50cnlQb2ludDogJ21haW5fdnMnLFxyXG4gICAgICAgIGJ1ZmZlcnM6IFt7XHJcbiAgICAgICAgICAgIGFycmF5U3RyaWRlOiA4ICogNCwgLy8gTWF0Y2ggbWFpbiB2ZXJ0ZXggYnVmZmVyIHN0cmlkZSAoUG9zK1VWK05vcm0pXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcclxuICAgICAgICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDAsIG9mZnNldDogMCwgZm9ybWF0OiAnZmxvYXQzMngzJyB9LCAvLyBQb3NcclxuICAgICAgICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDEsIG9mZnNldDogMTIsIGZvcm1hdDogJ2Zsb2F0MzJ4MicgfSAvLyBVVlxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfV1cclxuICAgIH0sXHJcbiAgICBmcmFnbWVudDoge1xyXG4gICAgICAgIG1vZHVsZTogZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IG91dGxpbmVTaGFkZXJDb2RlIH0pLFxyXG4gICAgICAgIGVudHJ5UG9pbnQ6ICdtYWluX2ZzJyxcclxuICAgICAgICB0YXJnZXRzOiBbe1xyXG4gICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdCxcclxuICAgICAgICAgICAgYmxlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB7IHNyY0ZhY3RvcjogJ3NyYy1hbHBoYScsIGRzdEZhY3RvcjogJ29uZS1taW51cy1zcmMtYWxwaGEnLCBvcGVyYXRpb246ICdhZGQnIH0sXHJcbiAgICAgICAgICAgICAgICBhbHBoYTogeyBzcmNGYWN0b3I6ICdzcmMtYWxwaGEnLCBkc3RGYWN0b3I6ICdvbmUtbWludXMtc3JjLWFscGhhJywgb3BlcmF0aW9uOiAnYWRkJyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XVxyXG4gICAgfSxcclxuICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogJ3RyaWFuZ2xlLWxpc3QnLCBjdWxsTW9kZTogJ2JhY2snIH0sXHJcbiAgICBkZXB0aFN0ZW5jaWw6IHtcclxuICAgICAgICBkZXB0aFdyaXRlRW5hYmxlZDogdHJ1ZSwgLy8gV3JpdGUgZGVwdGggc28gbGluZXMgb2NjbHVkZSBwcm9wZXJseT8gT3IgZmFsc2UgdG8gc2VlIHRocm91Z2g/XHJcbiAgICAgICAgLy8gVXNlciB3YW50cyBcImNsZWFybHkgdmlzaWJsZVwiLiBJZiBkZXB0aFdyaXRlIGlzIHRydWUsIGxpbmVzIGJlaGluZCB3b24ndCBzaG93LlxyXG4gICAgICAgIC8vIEJ1dCBsaW5lcyBhcmUgb24gdGhlIGZhY2UuXHJcbiAgICAgICAgLy8gTGV0J3Mga2VlcCBkZXB0aENvbXBhcmUgbGVzcyAoc3RhbmRhcmQpLlxyXG4gICAgICAgIGRlcHRoQ29tcGFyZTogJ2xlc3MnLFxyXG4gICAgICAgIGZvcm1hdDogJ2RlcHRoMjRwbHVzJyxcclxuICAgICAgICAvLyBCaWFzIHRvIGVuc3VyZSBsaW5lcyBkcmF3IE9OIFRPUCBvZiB0aGUgYmxvY2tcclxuICAgICAgICBkZXB0aEJpYXM6IC0xMDAwLFxyXG4gICAgICAgIGRlcHRoQmlhc1Nsb3BlU2NhbGU6IC0yLjBcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBvdXRsaW5lQmluZEdyb3VwID0gZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7XHJcbiAgICBsYXlvdXQ6IG91dGxpbmVQaXBlbGluZS5nZXRCaW5kR3JvdXBMYXlvdXQoMCksXHJcbiAgICBlbnRyaWVzOiBbXHJcbiAgICAgICAgeyBiaW5kaW5nOiAwLCByZXNvdXJjZTogeyBidWZmZXI6IHVuaWZvcm1CdWZmZXIgfSB9LFxyXG4gICAgICAgIHsgYmluZGluZzogMSwgcmVzb3VyY2U6IHsgYnVmZmVyOiBvdXRsaW5lVW5pZm9ybUJ1ZmZlciB9IH1cclxuICAgIF1cclxufSk7XHJcblxyXG4vLyBTdGF0ZSBmb3IgcmF5Y2FzdFxyXG5sZXQgY3VycmVudEhpdDogeyBpbmRleDogbnVtYmVyLCBwb2ludDogdmVjMywga2V5OiBzdHJpbmcsIGVtcHR5OiB2ZWMzIHwgbnVsbCB9IHwgbnVsbCA9IG51bGw7XHJcbi8vIC4uLiAocmF5Y2FzdCBsb2dpYyB1bmNoYW5nZWQpIC4uLlxyXG5cclxuXHJcbmZ1bmN0aW9uIHJheWNhc3QoKSB7XHJcbiAgICBjb25zdCBmb3J3YXJkID0gZ2V0Q2FtZXJhRm9yd2FyZCgpO1xyXG5cclxuICAgIGxldCB4ID0gTWF0aC5mbG9vcihjYW1lcmFQb3NpdGlvblswXSk7XHJcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IoY2FtZXJhUG9zaXRpb25bMV0pO1xyXG4gICAgbGV0IHogPSBNYXRoLmZsb29yKGNhbWVyYVBvc2l0aW9uWzJdKTtcclxuXHJcbiAgICBjb25zdCBzdGVwWCA9IE1hdGguc2lnbihmb3J3YXJkWzBdKTtcclxuICAgIGNvbnN0IHN0ZXBZID0gTWF0aC5zaWduKGZvcndhcmRbMV0pO1xyXG4gICAgY29uc3Qgc3RlcFogPSBNYXRoLnNpZ24oZm9yd2FyZFsyXSk7XHJcblxyXG4gICAgY29uc3QgdERlbHRhWCA9IHN0ZXBYICE9PSAwID8gMSAvIE1hdGguYWJzKGZvcndhcmRbMF0pIDogSW5maW5pdHk7XHJcbiAgICBjb25zdCB0RGVsdGFZID0gc3RlcFkgIT09IDAgPyAxIC8gTWF0aC5hYnMoZm9yd2FyZFsxXSkgOiBJbmZpbml0eTtcclxuICAgIGNvbnN0IHREZWx0YVogPSBzdGVwWiAhPT0gMCA/IDEgLyBNYXRoLmFicyhmb3J3YXJkWzJdKSA6IEluZmluaXR5O1xyXG5cclxuICAgIGxldCB0TWF4WCA9IChzdGVwWCA+IDAgPyBNYXRoLmZsb29yKGNhbWVyYVBvc2l0aW9uWzBdKSArIDEgLSBjYW1lcmFQb3NpdGlvblswXSA6IGNhbWVyYVBvc2l0aW9uWzBdIC0gTWF0aC5mbG9vcihjYW1lcmFQb3NpdGlvblswXSkpICogdERlbHRhWDtcclxuICAgIGxldCB0TWF4WSA9IChzdGVwWSA+IDAgPyBNYXRoLmZsb29yKGNhbWVyYVBvc2l0aW9uWzFdKSArIDEgLSBjYW1lcmFQb3NpdGlvblsxXSA6IGNhbWVyYVBvc2l0aW9uWzFdIC0gTWF0aC5mbG9vcihjYW1lcmFQb3NpdGlvblsxXSkpICogdERlbHRhWTtcclxuICAgIGxldCB0TWF4WiA9IChzdGVwWiA+IDAgPyBNYXRoLmZsb29yKGNhbWVyYVBvc2l0aW9uWzJdKSArIDEgLSBjYW1lcmFQb3NpdGlvblsyXSA6IGNhbWVyYVBvc2l0aW9uWzJdIC0gTWF0aC5mbG9vcihjYW1lcmFQb3NpdGlvblsyXSkpICogdERlbHRhWjtcclxuXHJcbiAgICBsZXQgbGFzdFggPSB4LCBsYXN0WSA9IHksIGxhc3RaID0gejtcclxuXHJcbiAgICBjb25zdCByYW5nZSA9IDg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlICogMjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY3ggPSBNYXRoLmZsb29yKHggLyBDSFVOS19TSVpFKTtcclxuICAgICAgICBjb25zdCBjeiA9IE1hdGguZmxvb3IoeiAvIENIVU5LX1NJWkUpO1xyXG4gICAgICAgIGNvbnN0IGNodW5rID0gY2h1bmtzLmdldChgJHtjeH0sJHtjen1gKTtcclxuXHJcbiAgICAgICAgbGV0IGhpdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChjaHVuaykge1xyXG4gICAgICAgICAgICBjb25zdCBseCA9IHggLSBjeCAqIENIVU5LX1NJWkU7XHJcbiAgICAgICAgICAgIGNvbnN0IGx6ID0geiAtIGN6ICogQ0hVTktfU0laRTtcclxuICAgICAgICAgICAgY29uc3QgaWR4ID0gZ2V0R3JpZEluZGV4KGx4LCB5LCBseik7XHJcbiAgICAgICAgICAgIGlmIChpZHggIT09IC0xICYmIGNodW5rLmdyaWRbaWR4XSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIE91dCBvZiBsb2FkZWQgY2h1bmtzPyBUcmVhdCBhcyBhaXIuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogLTEsXHJcbiAgICAgICAgICAgICAgICBwb2ludDogdmVjMy5mcm9tVmFsdWVzKHgsIHksIHopLFxyXG4gICAgICAgICAgICAgICAga2V5OiBgJHt4fSwke3l9LCR7en1gLCAvLyBMZWdhY3kga2V5IHVzYWdlPyBPciB1bnVzZWQuXHJcbiAgICAgICAgICAgICAgICBlbXB0eTogdmVjMy5mcm9tVmFsdWVzKGxhc3RYLCBsYXN0WSwgbGFzdFopXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYXN0WCA9IHg7XHJcbiAgICAgICAgbGFzdFkgPSB5O1xyXG4gICAgICAgIGxhc3RaID0gejtcclxuXHJcbiAgICAgICAgaWYgKHRNYXhYIDwgdE1heFkpIHtcclxuICAgICAgICAgICAgaWYgKHRNYXhYIDwgdE1heFopIHtcclxuICAgICAgICAgICAgICAgIHggKz0gc3RlcFg7XHJcbiAgICAgICAgICAgICAgICB0TWF4WCArPSB0RGVsdGFYO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgeiArPSBzdGVwWjtcclxuICAgICAgICAgICAgICAgIHRNYXhaICs9IHREZWx0YVo7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodE1heFkgPCB0TWF4Wikge1xyXG4gICAgICAgICAgICAgICAgeSArPSBzdGVwWTtcclxuICAgICAgICAgICAgICAgIHRNYXhZICs9IHREZWx0YVk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB6ICs9IHN0ZXBaO1xyXG4gICAgICAgICAgICAgICAgdE1heFogKz0gdERlbHRhWjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQgIT09IGNhbnZhcykgcmV0dXJuO1xyXG4gICAgaWYgKCFjdXJyZW50SGl0KSByZXR1cm47XHJcblxyXG4gICAgLy8gSGVscGVyIHRvIHJlYnVpbGQgc2luZ2xlIGNodW5rIG1lc2hcclxuICAgIGNvbnN0IHJlYnVpbGRDaHVua01lc2ggPSAoY2h1bms6IENodW5rRGF0YSwgY3g6IG51bWJlciwgY3o6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNodW5rLnZpc2libGUgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IENIVU5LX1NJWkU7IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IENIVU5LX1NJWkU7IHorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd3ggPSBjeCAqIENIVU5LX1NJWkUgKyB4O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd3ogPSBjeiAqIENIVU5LX1NJWkUgKyB6O1xyXG4gICAgICAgICAgICAgICAgLy8gRnVsbCBzY2FuIGZvciBjb3JyZWN0IGN1bGxpbmdcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pblkgPSAtWV9PRkZTRVQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhZID0gQ0hVTktfSEVJR0hUIC0gWV9PRkZTRVQgLSAxO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gZ2V0R3JpZEluZGV4KHgsIHksIHopO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggPT09IC0xKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gY2h1bmsuZ3JpZFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV4cG9zZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NvbGlkID0gKG54OiBudW1iZXIsIG55OiBudW1iZXIsIG56OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbklkeCA9IGdldEdyaWRJbmRleChueCwgbnksIG56KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5JZHggPT09IC0xKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaHVuay5ncmlkW25JZHhdICE9PSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNTb2xpZCh4ICsgMSwgeSwgeikpIGV4cG9zZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1NvbGlkKHggLSAxLCB5LCB6KSkgZXhwb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzU29saWQoeCwgeSArIDEsIHopKSBleHBvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNTb2xpZCh4LCB5IC0gMSwgeikpIGV4cG9zZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1NvbGlkKHgsIHksIHogKyAxKSkgZXhwb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzU29saWQoeCwgeSwgeiAtIDEpKSBleHBvc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmsudmlzaWJsZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogbmV3IEZsb2F0MzJBcnJheShbd3gsIHksIHd6XSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChlLmJ1dHRvbiA9PT0gMCkgeyAvLyBNaW5lIChMZWZ0IENsaWNrKVxyXG4gICAgICAgIGNvbnN0IHB4ID0gTWF0aC5yb3VuZChjdXJyZW50SGl0LnBvaW50WzBdKTtcclxuICAgICAgICBjb25zdCBweSA9IE1hdGgucm91bmQoY3VycmVudEhpdC5wb2ludFsxXSk7XHJcbiAgICAgICAgY29uc3QgcHogPSBNYXRoLnJvdW5kKGN1cnJlbnRIaXQucG9pbnRbMl0pO1xyXG5cclxuICAgICAgICBjb25zdCBjeCA9IE1hdGguZmxvb3IocHggLyBDSFVOS19TSVpFKTtcclxuICAgICAgICBjb25zdCBjeiA9IE1hdGguZmxvb3IocHogLyBDSFVOS19TSVpFKTtcclxuICAgICAgICBjb25zdCBrZXkgPSBgJHtjeH0sJHtjen1gO1xyXG5cclxuICAgICAgICBjb25zdCBjaHVuayA9IGNodW5rcy5nZXQoa2V5KTtcclxuICAgICAgICBpZiAoY2h1bmspIHtcclxuICAgICAgICAgICAgY29uc3QgbHggPSBweCAtIGN4ICogQ0hVTktfU0laRTtcclxuICAgICAgICAgICAgY29uc3QgbHogPSBweiAtIGN6ICogQ0hVTktfU0laRTtcclxuICAgICAgICAgICAgY29uc3QgaWR4ID0gZ2V0R3JpZEluZGV4KGx4LCBweSwgbHopO1xyXG4gICAgICAgICAgICBpZiAoaWR4ICE9PSAtMSAmJiBjaHVuay5ncmlkW2lkeF0gIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFR5cGUgPSBjaHVuay5ncmlkW2lkeF07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVHJhY2sgdG9yY2ggcmVtb3ZhbFxyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFR5cGUgPT09IDYpIHsgLy8gVG9yY2hcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVUb3JjaChweCwgcHksIHB6KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBNYXAgYmxvY2sgdHlwZXMgdG8gaXRlbSB0eXBlcyAod2hhdCBnZXRzIGRyb3BwZWQpXHJcbiAgICAgICAgICAgICAgICAvLyBHcmlkIHR5cGUgMSAoc3RvbmUpIC0+IEl0ZW0gdHlwZSAwIChjb2JibGVzdG9uZSB0ZXh0dXJlKVxyXG4gICAgICAgICAgICAgICAgLy8gR3JpZCB0eXBlIDIgKGRpcnQpIC0+IEl0ZW0gdHlwZSAxIChkaXJ0IHRleHR1cmUpXHJcbiAgICAgICAgICAgICAgICAvLyBHcmlkIHR5cGUgMyAoZ3Jhc3MpIC0+IEl0ZW0gdHlwZSAyIChncmFzcyB0ZXh0dXJlKVxyXG4gICAgICAgICAgICAgICAgLy8gR3JpZCB0eXBlIDUgKFROVCkgLT4gSXRlbSB0eXBlIDQgKFROVCB0ZXh0dXJlKVxyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1UeXBlID0gb2xkVHlwZSAtIDE7IC8vIERlZmF1bHQgbWFwcGluZ1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFR5cGUgPT09IDEpIGl0ZW1UeXBlID0gMDsgLy8gU3RvbmUgLT4gQ29iYmxlc3RvbmVcclxuXHJcbiAgICAgICAgICAgICAgICBjaHVuay5ncmlkW2lkeF0gPSAwOyAvLyBBSVJcclxuXHJcbiAgICAgICAgICAgICAgICByZWJ1aWxkQ2h1bmtNZXNoKGNodW5rLCBjeCwgY3opO1xyXG4gICAgICAgICAgICAgICAgcmVidWlsZFdvcmxkKHRydWUpOyAvLyBGb3JjZSB1cGRhdGUgdG8gcmVtb3ZlIGJsb2NrIGluc3RhbnRseVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNwYXduIFBpY2t1cCBhdCBleGFjdCBtaW5lZCBwb3NpdGlvbiAobm90IHN1cmZhY2UpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwUG9zID0gdmVjMy5mcm9tVmFsdWVzKHB4ICsgMC41LCBweSArIDAuNSwgcHogKyAwLjUpO1xyXG4gICAgICAgICAgICAgICAgcGlja3VwU3lzdGVtLnNwYXduKHBQb3MsIGl0ZW1UeXBlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVIb3RiYXJVSSgpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlSW52ZW50b3J5VUkoKTsgLy8gVXBkYXRlIGZ1bGwgaW52ZW50b3J5IHRvb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChlLmJ1dHRvbiA9PT0gMikgeyAvLyBQbGFjZSAoUmlnaHQgQ2xpY2spXHJcbiAgICAgICAgaWYgKGludmVudG9yeUNvdW50c1tzZWxlY3RlZFNsb3RdID4gMCAmJiBjdXJyZW50SGl0LmVtcHR5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG54ID0gY3VycmVudEhpdC5lbXB0eVswXTtcclxuICAgICAgICAgICAgY29uc3QgbnkgPSBjdXJyZW50SGl0LmVtcHR5WzFdO1xyXG4gICAgICAgICAgICBjb25zdCBueiA9IGN1cnJlbnRIaXQuZW1wdHlbMl07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkeCA9IG54IC0gY2FtZXJhUG9zaXRpb25bMF07XHJcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gbnkgLSBjYW1lcmFQb3NpdGlvblsxXTtcclxuICAgICAgICAgICAgY29uc3QgZHogPSBueiAtIGNhbWVyYVBvc2l0aW9uWzJdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGR4ICogZHggKyBkeSAqIGR5ICsgZHogKiBkeiA+IDEuMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3ggPSBNYXRoLmZsb29yKG54IC8gQ0hVTktfU0laRSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjeiA9IE1hdGguZmxvb3IobnogLyBDSFVOS19TSVpFKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGAke2N4fSwke2N6fWA7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNodW5rID0gY2h1bmtzLmdldChrZXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaHVuaykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9wdGlvbmFsbHkgY3JlYXRlIG5ldyBjaHVuayBkYXRhIGlmIG5lZWRlZFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaHVuaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGx4ID0gbnggLSBjeCAqIENIVU5LX1NJWkU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbHogPSBueiAtIGN6ICogQ0hVTktfU0laRTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBnZXRHcmlkSW5kZXgobHgsIG55LCBseik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggIT09IC0xICYmIGNodW5rLmdyaWRbaWR4XSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaHVuay5ncmlkW2lkeF0gPSBpbnZlbnRvcnlbc2VsZWN0ZWRTbG90XSArIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmFjayB0b3JjaCBwbGFjZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludmVudG9yeVtzZWxlY3RlZFNsb3RdICsgMSA9PT0gNikgeyAvLyBUb3JjaCBibG9jayB0eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb3JjaChueCwgbnksIG56KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnlDb3VudHNbc2VsZWN0ZWRTbG90XS0tO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVidWlsZENodW5rTWVzaChjaHVuaywgY3gsIGN6KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVidWlsZFdvcmxkKHRydWUpOyAvLyBGb3JjZSB1cGRhdGUgdG8gc2hvdyBibG9jayBpbnN0YW50bHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlSG90YmFyVUkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gLS0tIFVJIC0tLVxyXG4vLyBnYW1lQ29udGFpbmVyIGRlZmluZWQgYWJvdmVcclxuXHJcbmNvbnN0IGZwc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5mcHNEaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5mcHNEaXYuc3R5bGUudG9wID0gJzEwcHgnO1xyXG5mcHNEaXYuc3R5bGUubGVmdCA9ICcxMHB4JztcclxuZnBzRGl2LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuZnBzRGl2LnN0eWxlLmZvbnRGYW1pbHkgPSAnbW9ub3NwYWNlJztcclxuZnBzRGl2LnN0eWxlLmZvbnRTaXplID0gJzE2cHgnO1xyXG5mcHNEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwwLDAsMC41KSc7XHJcbmZwc0Rpdi5zdHlsZS5wYWRkaW5nID0gJzRweCc7XHJcbmZwc0Rpdi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnOyAvLyBEb24ndCBibG9jayBtb3VzZVxyXG5nYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGZwc0Rpdik7XHJcblxyXG4vLyAtLS0gTW91bnQgQnV0dG9uIC0tLVxyXG5jb25zdCBtb3VudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5tb3VudEJ0bi5pbm5lclRleHQgPSBcIk1vdW50IFNwaWRlclwiO1xyXG5tb3VudEJ0bi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbm1vdW50QnRuLnN0eWxlLnRvcCA9ICcxMHB4JztcclxubW91bnRCdG4uc3R5bGUucmlnaHQgPSAnMTBweCc7XHJcbm1vdW50QnRuLnN0eWxlLnBhZGRpbmcgPSAnOHB4IDE2cHgnO1xyXG5tb3VudEJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzRDQUY1MCc7XHJcbm1vdW50QnRuLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxubW91bnRCdG4uc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xyXG5tb3VudEJ0bi5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNHB4JztcclxubW91bnRCdG4uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG5tb3VudEJ0bi5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xyXG5tb3VudEJ0bi5zdHlsZS56SW5kZXggPSAnMTAwMCc7IC8vIEVuc3VyZSBpdCdzIGFib3ZlIGV2ZXJ5dGhpbmdcclxubW91bnRCdG4ub25jbGljayA9ICgpID0+IHtcclxuICAgIGlzUmlkaW5nID0gdHJ1ZTtcclxuICAgIGlzR2FtZUFjdGl2ZSA9IHRydWU7IC8vIEVuc3VyZSBnYW1lIGlzIGFjdGl2ZSBzbyBjb250cm9scyB3b3JrXHJcbiAgICAvLyBUZWxlcG9ydCB0byBzcGlkZXIgdG8gZW5zdXJlIHZpc3VhbCBzbmFwXHJcbiAgICB2ZWMzLmNvcHkocGxheWVyUG9zaXRpb24sIHNwaWRlci5wb3NpdGlvbik7XHJcbiAgICBwbGF5ZXJQb3NpdGlvblsxXSArPSAzLjA7IC8vIEFib3ZlIHNwaWRlclxyXG4gICAgLy8gQWxzbyBsaWtlbHkgbmVlZCB0byBzZXQgZm9jdXMvcG9pbnRlciBsb2NrIGlmIG5vdCBhY3RpdmU/XHJcbiAgICAvLyBjYW52YXMucmVxdWVzdFBvaW50ZXJMb2NrKCk7IC8vIE9wdGlvbmFsLCBtaWdodCBhbm5veSBpZiBzdHJpY3RcclxufTtcclxuZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3VudEJ0bik7XHJcblxyXG4vLyAtLS0gTWVudSBMb2dpYyAtLS1cclxuY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLW1lbnUnKTtcclxuY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsO1xyXG5sZXQgaXNHYW1lQWN0aXZlID0gZmFsc2U7XHJcblxyXG5pZiAoc3RhcnRCdG4gJiYgbWVudSkge1xyXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc1dvcmxkTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIC8vIFN0YXJ0IExvYWRpbmcgUHJvY2Vzc1xyXG4gICAgICAgICAgICAvLyBEb24ndCBhY3RpdmF0ZSBnYW1lIHlldCwganVzdCBlbmFibGUgbG9hZGluZyBsb29wXHJcbiAgICAgICAgICAgIGlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHN0YXJ0QnRuLmlubmVyVGV4dCA9IFwiTG9hZGluZyBXb3JsZC4uLlwiO1xyXG4gICAgICAgICAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSAncHJvZ3Jlc3MnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZXN1bWUgR2FtZVxyXG4gICAgICAgIC8vIEZvcmNlIHN0YXJ0IGltbWVkaWF0ZWx5LCBkb24ndCB3YWl0IGZvciBwb2ludGVyIGxvY2sgZXZlbnQgKHdoaWNoIG1pZ2h0IGZhaWwpXHJcbiAgICAgICAgaXNHYW1lQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgY2FudmFzLnJlcXVlc3RQb2ludGVyTG9jaygpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlBvaW50ZXIgbG9jayBmYWlsZWQgb3Igc3VwcHJlc3NlZDpcIiwgZXJyKTtcclxuICAgICAgICAgICAgLy8gRmFsbGJhY2s6IEdhbWUgaXMgYWN0aXZlLCBidXQgbW91c2UgbWlnaHQgd2FuZGVyLlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxvY2tjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnBvaW50ZXJMb2NrRWxlbWVudCA9PT0gY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGlzR2FtZUFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBPbmx5IHBhdXNlIGlmIHdlIGV4cGxpY2l0bHkgbG9zdCBsb2NrICh1c2VyIHByZXNzZWQgRXNjKS5cclxuICAgICAgICAgICAgLy8gQnV0IGlmIHdlIG5ldmVyIEhBRCBsb2NrLCB0aGlzIG1pZ2h0IG5vdCBmaXJlP1xyXG4gICAgICAgICAgICAvLyBJZiBpdCBmaXJlcyB3aXRoIG51bGwsIHdlIHBhdXNlLlxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGFjY2VwdGFibGUgYmVoYXZpb3IgZm9yIEVzYy5cclxuICAgICAgICAgICAgaXNHYW1lQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBCdXR0b24gVGV4dCBiYXNlZCBvbiBzdGF0ZVxyXG4gICAgICAgICAgICBpZiAoc3RhcnRCdG4pIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0QnRuLmlubmVyVGV4dCA9IFwiUmVzdW1lIEdhbWVcIjtcclxuICAgICAgICAgICAgICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gLS0tIEF1dG8tUGF1c2UgSW50ZXJzZWN0aW9uIE9ic2VydmVyIC0tLVxyXG5jb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIC8vIEdhbWUgc2Nyb2xsZWQgb3V0IG9mIHZpZXcgLT4gUGF1c2VcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoaXNHYW1lQWN0aXZlICYmIGlzV29ybGRMb2FkZWQpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpO1xyXG4gICAgICAgICAgICAgICAgaXNHYW1lQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVudSkgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOyAvLyBTaG93IG1lbnVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59LCB7IHRocmVzaG9sZDogMC4xIH0pOyAvLyBQYXVzZSBpZiA8IDEwJSB2aXNpYmxlXHJcbm9ic2VydmVyLm9ic2VydmUoZ2FtZUNvbnRhaW5lcik7XHJcbmNvbnN0IGNoa1NoYWRvd3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hrLXNoYWRvd3MnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBjaGtMb2NrVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGstbG9jay10aW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgY2hrVGhpcmRQZXJzb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hrLXRoaXJkLXBlcnNvbicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmlmIChjaGtUaGlyZFBlcnNvbikge1xyXG4gICAgY2hrVGhpcmRQZXJzb24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIC8vIFVwZGF0ZSBsYWJlbCB0ZXh0IHNhZmVyIHdheSAoVGV4dCBOb2RlIHNpYmxpbmcpXHJcbiAgICBpZiAoY2hrVGhpcmRQZXJzb24ubmV4dFNpYmxpbmcpIHtcclxuICAgICAgICBjaGtUaGlyZFBlcnNvbi5uZXh0U2libGluZy50ZXh0Q29udGVudCA9IFwiIE9uLUZvb3QgVGhpcmQgUGVyc29uXCI7XHJcbiAgICAgICAgLy8gRml4IEdyYXkgQ29sb3IgKHdhcyBzZXQgaW4gaW5saW5lIHN0eWxlKVxyXG4gICAgICAgIGlmIChjaGtUaGlyZFBlcnNvbi5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNoa1RoaXJkUGVyc29uLnBhcmVudEVsZW1lbnQuc3R5bGUuY29sb3IgPSAnd2hpdGUnOyAvLyBNYXRjaCBwYXJlbnQgI21haW4tbWVudSBjb2xvclxyXG4gICAgICAgICAgICBjaGtUaGlyZFBlcnNvbi5wYXJlbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBTcGF3biBMb2dpYyAoQ29ycmVjdGx5IFBsYWNlZCkgLS0tXHJcbmZ1bmN0aW9uIGdldFN1cmZhY2VIZWlnaHQoeDogbnVtYmVyLCB6OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgY3ggPSBNYXRoLmZsb29yKHggLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IGN6ID0gTWF0aC5mbG9vcih6IC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBjaHVuayA9IGNodW5rcy5nZXQoYCR7Y3h9LCR7Y3p9YCk7XHJcbiAgICBpZiAoIWNodW5rKSByZXR1cm4gMDtcclxuXHJcbiAgICBjb25zdCBseCA9IE1hdGguZmxvb3IoeCAtIGN4ICogQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBseiA9IE1hdGguZmxvb3IoeiAtIGN6ICogQ0hVTktfU0laRSk7XHJcblxyXG4gICAgLy8gU2NhbiBkb3duIGZyb20gcmVhc29uYWJsZSBoZWlnaHRcclxuICAgIGZvciAobGV0IHkgPSAxMDA7IHkgPj0gLTMwOyB5LS0pIHtcclxuICAgICAgICBjb25zdCBpZHggPSBnZXRHcmlkSW5kZXgobHgsIHksIGx6KTtcclxuICAgICAgICBpZiAoaWR4ICE9PSAtMSAmJiBjaHVuay5ncmlkW2lkeF0gIT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGVtcHRTcGF3blBsYXllcigpOiBib29sZWFuIHtcclxuICAgIHVwZGF0ZUNodW5rcyh2ZWMzLmZyb21WYWx1ZXMoMCwgMCwgMCkpO1xyXG4gICAgY29uc3QgcGxheWVyWSA9IGdldFN1cmZhY2VIZWlnaHQoMCwgMCk7XHJcblxyXG4gICAgLy8gSWYgY2h1bmsgbm90IGdlbmVyYXRlZCAoMCkgb3IgdG9vIGxvdyAoPCAtNTApLCBmYWlsXHJcbiAgICAvLyBnZXRTdXJmYWNlSGVpZ2h0IHJldHVybnMgMCBpZiBjaHVuayBtaXNzaW5nLlxyXG4gICAgLy8gV2Ugd2FudCB0byBiZSBzdXJlIGl0J3MgYSByZWFsIGJsb2NrLlxyXG4gICAgLy8gTGV0J3MgbW9kaWZ5IGdldFN1cmZhY2VIZWlnaHQgc2xpZ2h0bHkgaW4gbG9naWMgb3IganVzdCBjaGVjayBpZiBpdCdzIDAuXHJcbiAgICAvLyBOT1RFOiAwIGlzIGRpc3RpbmN0IGZyb20gXCJncm91bmQgYXQgMFwiLiBcclxuICAgIC8vIFdhaXQsIGdldFN1cmZhY2VIZWlnaHQgcmV0dXJucyAwIGlmIG1pc3NpbmcuIFxyXG4gICAgLy8gQW5kIGxvb3AgcmV0dXJucyAwIGlmIG5vdGhpbmcgZm91bmQuXHJcbiAgICAvLyBSZWFsIGdyb3VuZCBpcyB1c3VhbGx5ID4gNS4gXHJcbiAgICAvLyBMZXQncyBhc3N1bWUgZ3JvdW5kIG11c3QgYmUgPiAwIHRvIGJlIHZhbGlkIGZvciBzcGF3bi5cclxuXHJcbiAgICBpZiAocGxheWVyWSA8PSAwKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgLy8gRm91bmQgdmFsaWQgZ3JvdW5kISBVcGRhdGUgVUkgYW5kIFNwYXduLlxyXG4gICAgY29uc3Qgc3BpZGVyR3JvdW5kWSA9IHBsYXllclk7IC8vIFNpbXBsaWZ5IGZvciBub3csIHNwaWRlciBzcGF3bnMgbmVhciBwbGF5ZXJcclxuXHJcbiAgICAvLyBTcGF3biBzcGlkZXIgbmVhcmJ5IGJ1dCByYW5kb21pemVkXHJcbiAgICBjb25zdCBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcclxuICAgIGNvbnN0IGRpc3QgPSA1ICsgTWF0aC5yYW5kb20oKSAqIDU7IC8vIDUgdG8gMTAgYmxvY2tzIGF3YXlcclxuICAgIGNvbnN0IHN4ID0gTWF0aC5jb3MoYW5nbGUpICogZGlzdDtcclxuICAgIGNvbnN0IHN6ID0gTWF0aC5zaW4oYW5nbGUpICogZGlzdDtcclxuXHJcbiAgICAvLyBFbnN1cmUgc3BpZGVyIGNodW5rXHJcbiAgICBjb25zdCBzcEN4ID0gTWF0aC5mbG9vcihzeCAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3Qgc3BDeiA9IE1hdGguZmxvb3Ioc3ogLyBDSFVOS19TSVpFKTtcclxuICAgIGdldE9yR2VuZXJhdGVDaHVuayhzcEN4LCBzcEN6KTtcclxuXHJcbiAgICAvLyBSZS1jaGVjayBzcGlkZXIgaGVpZ2h0XHJcbiAgICBsZXQgbWF4WSA9IC0xMDA7XHJcbiAgICBmb3IgKGxldCBveCA9IC0xOyBveCA8PSAxOyBveCsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgb3ogPSAtMTsgb3ogPD0gMTsgb3orKykge1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gZ2V0U3VyZmFjZUhlaWdodChzeCArIG94LCBzeiArIG96KTtcclxuICAgICAgICAgICAgaWYgKHkgPiBtYXhZKSBtYXhZID0geTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWFsU3BpZGVyWSA9IG1heFkgPiAtNTAgPyBtYXhZIDogcGxheWVyWTsgLy8gRmFsbGJhY2tcclxuXHJcbiAgICBjYW1lcmFQb3NpdGlvblswXSA9IDA7XHJcbiAgICBjYW1lcmFQb3NpdGlvblsxXSA9IHBsYXllclkgKyA1O1xyXG4gICAgY2FtZXJhUG9zaXRpb25bMl0gPSAwO1xyXG4gICAgdmVydGljYWxWZWxvY2l0eSA9IDA7XHJcbiAgICBpc1JpZGluZyA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBzcGlkZXIucG9zaXRpb25bMF0gPSBzeDtcclxuICAgIHNwaWRlci5wb3NpdGlvblsxXSA9IHJlYWxTcGlkZXJZICsgNTtcclxuICAgIHNwaWRlci5wb3NpdGlvblsyXSA9IHN6O1xyXG4gICAgc3BpZGVyLnZlbG9jaXR5ID0gdmVjMy5jcmVhdGUoKTtcclxuXHJcbiAgICAvLyBSZS1pbml0IGxlZ3M/XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwaWRlci5sZWdUYXJnZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaWRlYWwgPSBzcGlkZXIuZ2V0SWRlYWxGb290UG9zKGksIHNwaWRlci5wb3NpdGlvbiwgc3BpZGVyLnlhdyk7XHJcbiAgICAgICAgY29uc3QgZ3kgPSBnZXRTdXJmYWNlSGVpZ2h0KGlkZWFsWzBdLCBpZGVhbFsyXSk7XHJcbiAgICAgICAgaWRlYWxbMV0gPSAoZ3kgfHwgcmVhbFNwaWRlclkpICsgMS4wO1xyXG4gICAgICAgIHZlYzMuY29weShzcGlkZXIubGVnVGFyZ2V0c1tpXSwgaWRlYWwpO1xyXG4gICAgICAgIHZlYzMuY29weShzcGlkZXIubGVnU3RhcnRbaV0sIGlkZWFsKTtcclxuICAgICAgICB2ZWMzLmNvcHkoc3BpZGVyLmxlZ05leHRbaV0sIGlkZWFsKTtcclxuICAgICAgICBzcGlkZXIubGVnTW92aW5nW2ldID0gZmFsc2U7XHJcbiAgICAgICAgc3BpZGVyLmxlZ1Byb2dyZXNzW2ldID0gMS4wO1xyXG4gICAgfVxyXG4gICAgTG9nZ2VyLmxvZyhgU3Bhd25lZCEgUGxheWVyIFk6ICR7cGxheWVyWX1gKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vLyBJbml0aWFsIFN0YXRlXHJcbmxldCBpc1dvcmxkTG9hZGVkID0gZmFsc2U7XHJcbmxldCBpc0xvYWRpbmcgPSBmYWxzZTtcclxuLy8gRG9uJ3Qgc3Bhd24gaW1tZWRpYXRlbHkuIFdhaXQgZm9yIHVzZXIgb3IgbG9hZCBsb29wLlxyXG5cclxuLy8gLS0tIExvb3AgLS0tXHJcbmxldCBsYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5sZXQgZnJhbWVzID0gMDtcclxubGV0IGxhc3RGcHNUaW1lID0gbGFzdFRpbWU7XHJcbmxldCBmcmFtZUNvdW50ID0gMDtcclxuXHJcbi8vIEhvaXN0ZWQgUmVuZGVyIFZhcmlhYmxlc1xyXG5jb25zdCBnbG9iYWxTa3kgPSB2ZWMzLmNyZWF0ZSgpO1xyXG5jb25zdCBnbG9iYWxMaWdodENvbG9yID0gdmVjMy5jcmVhdGUoKTtcclxuY29uc3QgZ2xvYmFsQW1iaWVudENvbG9yID0gdmVjMy5jcmVhdGUoKTtcclxuY29uc3QgZ2xvYmFsTGlnaHRWaWV3TWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcclxuXHJcbmZ1bmN0aW9uIGZyYW1lKCkge1xyXG4gICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICBsZXQgZHQgPSAobm93IC0gbGFzdFRpbWUpIC8gMTAwMDtcclxuICAgIGxhc3RUaW1lID0gbm93O1xyXG5cclxuICAgIC8vIERlZmluZWQgYXQgdG9wIG9mIGZyYW1lIGZvciBzY29wZSB2aXNpYmlsaXR5XHJcbiAgICBjb25zdCBpc1RoaXJkUGVyc29uT25Gb290ID0gKGNoa1RoaXJkUGVyc29uICYmIGNoa1RoaXJkUGVyc29uLmNoZWNrZWQpO1xyXG5cclxuICAgIGlmIChmcmFtZUNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0ZpcnN0IGZyYW1lIHJlbmRlcmluZyEgQ2FudmFzIHNpemU6JywgY2FudmFzLndpZHRoLCAneCcsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdJbnN0YW5jZSBjb3VudDonLCBhbGxJbnN0YW5jZXMubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIGZyYW1lQ291bnQrKztcclxuXHJcbiAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBzcGF3blxyXG4gICAgICAgIGlmIChhdHRlbXB0U3Bhd25QbGF5ZXIoKSkge1xyXG4gICAgICAgICAgICBpc1dvcmxkTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlzR2FtZUFjdGl2ZSA9IHRydWU7IC8vIEF1dG8tc3RhcnQgb25jZSBsb2FkZWRcclxuICAgICAgICAgICAgY2FudmFzLnJlcXVlc3RQb2ludGVyTG9jaygpO1xyXG4gICAgICAgICAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRCdG4pIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0QnRuLmlubmVyVGV4dCA9IFwiUmVzdW1lIEdhbWVcIjtcclxuICAgICAgICAgICAgICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFN0aWxsIGxvYWRpbmcuLi4gZm9yY2UgY2h1bmsgdXBkYXRlcyBmb3IgMCwwXHJcbiAgICAgICAgICAgIHVwZGF0ZUNodW5rcyh2ZWMzLmZyb21WYWx1ZXMoMCwgMCwgMCkpO1xyXG4gICAgICAgICAgICAvLyBNYXliZSBhbmltYXRlIGxvYWRpbmcgdGV4dD9cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzR2FtZUFjdGl2ZSAmJiBpc1dvcmxkTG9hZGVkKSB7XHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHBsYXllcidzIGNodW5rIGFuZCB1cGRhdGUgaWYgbmVlZGVkXHJcbiAgICAgICAgLy8gRG9uZSBldmVyeSAwLjFzIG9yIHNvPyBPciBldmVyeSBmcmFtZT9cclxuICAgICAgICAvLyBFdmVyeSBmcmFtZSBpcyBzYWZlciBmb3IgXCJpbmZpbml0ZVwiIGJ1dCBtaWdodCBiZSBzbG93LlxyXG4gICAgICAgIC8vIE9wdGltaXphdGlvbjogQ2hlY2sgZGlzdCBtb3ZlZC5cclxuICAgICAgICB1cGRhdGVDaHVua3MocGxheWVyUG9zaXRpb24pOyAvLyBVc2UgUExBWUVSIHBvc2l0aW9uIGZvciBjaHVuayBsb2FkaW5nLCBub3QgY2FtZXJhIVxyXG5cclxuICAgICAgICAvLyBDbGFtcCBkdCB0byBhdm9pZCBwaHlzaWNzIGV4cGxvc2lvbnMgKGUuZy4gbWF4IDAuMXMpXHJcbiAgICAgICAgZHQgPSBNYXRoLm1pbihkdCwgMC4xKTtcclxuXHJcbiAgICAgICAgLy8gRlBTXHJcbiAgICAgICAgLy8gRlBTXHJcbiAgICAgICAgZnJhbWVzKys7XHJcbiAgICAgICAgaWYgKG5vdyAtIGxhc3RGcHNUaW1lID49IDEwMDApIHtcclxuICAgICAgICAgICAgZnBzRGl2LmlubmVyVGV4dCA9IGBGUFM6ICR7ZnJhbWVzfSB8IEluc3RhbmNlczogJHtjdXJyZW50SW5zdGFuY2VDb3VudH1gO1xyXG4gICAgICAgICAgICBmcmFtZXMgPSAwO1xyXG4gICAgICAgICAgICBsYXN0RnBzVGltZSA9IG5vdztcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyBUZXJyYWluIEZ1bmN0aW9uIGZvciBTcGlkZXJcclxuICAgICAgICBjb25zdCBnZXRUZXJyYWluSGVpZ2h0ID0gKHBvczogdmVjMyk6IG51bWJlciB8IG51bGwgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpeCA9IE1hdGguZmxvb3IocG9zWzBdKTtcclxuICAgICAgICAgICAgY29uc3QgaXogPSBNYXRoLmZsb29yKHBvc1syXSk7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIHZlcnRpY2FsIGNvbHVtblxyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gTWF0aC5mbG9vcihwb3NbMV0gKyAyKTsgeSA+PSBNYXRoLmZsb29yKHBvc1sxXSAtIDUpOyB5LS0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN4ID0gTWF0aC5mbG9vcihpeCAvIENIVU5LX1NJWkUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3ogPSBNYXRoLmZsb29yKGl6IC8gQ0hVTktfU0laRSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVuayA9IGNodW5rcy5nZXQoYCR7Y3h9LCR7Y3p9YCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2h1bmspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBseCA9IGl4IC0gY3ggKiBDSFVOS19TSVpFO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGx6ID0gaXogLSBjeiAqIENIVU5LX1NJWkU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gZ2V0R3JpZEluZGV4KGx4LCB5LCBseik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCAhPT0gLTEgJiYgY2h1bmsuZ3JpZFtpZHhdICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgU3BpZGVyXHJcbiAgICAgICAgLy8gSWYgcmlkaW5nLCBwYXNzIGtleXMuIEVsc2UgcGFzcyBlbXB0eS5cclxuICAgICAgICBjb25zdCBzcGlkZXJJbnB1dCA9IGlzUmlkaW5nID8ga2V5cyA6IHt9O1xyXG4gICAgICAgIHNwaWRlci51cGRhdGUoZHQsIHNwaWRlcklucHV0LCBnZXRUZXJyYWluSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIFBhcnRpY2xlc1xyXG4gICAgICAgIHBhcnRpY2xlU3lzdGVtLnVwZGF0ZShkdCk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBQaWNrdXBzIC0gU2NhbiBkb3dud2FyZCBmcm9tIGl0ZW0gcG9zaXRpb24gZm9yIHJlYWxpc3RpYyBncmF2aXR5XHJcbiAgICAgICAgcGlja3VwU3lzdGVtLnVwZGF0ZShkdCwgcGxheWVyUG9zaXRpb24sIGludmVudG9yeSwgaW52ZW50b3J5Q291bnRzLCAocG9zOiB2ZWMzKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFNjYW4gZG93bndhcmQgZnJvbSBpdGVtJ3MgY3VycmVudCBwb3NpdGlvbiB0byBmaW5kIGdyb3VuZFxyXG4gICAgICAgICAgICBjb25zdCBjeCA9IE1hdGguZmxvb3IocG9zWzBdIC8gQ0hVTktfU0laRSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN6ID0gTWF0aC5mbG9vcihwb3NbMl0gLyBDSFVOS19TSVpFKTtcclxuICAgICAgICAgICAgY29uc3QgY2h1bmsgPSBjaHVua3MuZ2V0KGAke2N4fSwke2N6fWApO1xyXG4gICAgICAgICAgICBpZiAoIWNodW5rKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGx4ID0gTWF0aC5mbG9vcihwb3NbMF0gLSBjeCAqIENIVU5LX1NJWkUpO1xyXG4gICAgICAgICAgICBjb25zdCBseiA9IE1hdGguZmxvb3IocG9zWzJdIC0gY3ogKiBDSFVOS19TSVpFKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNjYW4gRE9XTiBmcm9tIGl0ZW0ncyBjdXJyZW50IFkgcG9zaXRpb25cclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRZID0gTWF0aC5mbG9vcihwb3NbMV0pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gc3RhcnRZOyB5ID49IC1ZX09GRlNFVDsgeS0tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBnZXRHcmlkSW5kZXgobHgsIHksIGx6KTtcclxuICAgICAgICAgICAgICAgIGlmIChpZHggIT09IC0xICYmIGNodW5rLmdyaWRbaWR4XSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5OyAvLyBSZXR1cm4gWSBvZiB0b3Btb3N0IHNvbGlkIGJsb2NrIGJlbG93IGl0ZW1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gTm8gZ3JvdW5kIGZvdW5kXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBBY3RpdmUgVE5UXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGFjdGl2ZVROVHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgdG50ID0gYWN0aXZlVE5Uc1tpXTtcclxuICAgICAgICAgICAgdG50LnRpbWVyIC09IGR0O1xyXG5cclxuICAgICAgICAgICAgLy8gUHVsc2UgU2NhbGVcclxuICAgICAgICAgICAgY29uc3QgcHVsc2VTcGVlZCA9IDEwLjAgKyAoMy4wIC0gdG50LnRpbWVyKSAqIDUuMDsgLy8gRmFzdGVyIGFzIGl0IGdldHMgY2xvc2VyXHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlQW10ID0gMS4wICsgTWF0aC5zaW4ocGVyZm9ybWFuY2Uubm93KCkgLyAxMDAgKiBwdWxzZVNwZWVkKSAqIDAuMTtcclxuICAgICAgICAgICAgdmVjMy5zZXQodG50LnNjYWxlLCBzY2FsZUFtdCwgc2NhbGVBbXQsIHNjYWxlQW10KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0bnQudGltZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRVhQTE9ERVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlVE5Ucy5zcGxpY2UoaSwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHggPSBNYXRoLnJvdW5kKHRudC5wb3NpdGlvblswXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBweSA9IE1hdGgucm91bmQodG50LnBvc2l0aW9uWzFdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHB6ID0gTWF0aC5yb3VuZCh0bnQucG9zaXRpb25bMl0pO1xyXG5cclxuICAgICAgICAgICAgICAgIExvZ2dlci5sb2coJ0JPT00hIChQYXJ0aWNsZXMpJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBTcGF3biBQYXJ0aWNsZXNcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLmVtaXQodG50LnBvc2l0aW9uLCAxMDAsIHZlYzQuZnJvbVZhbHVlcygxLCAwLjUsIDAsIDEpLCA4LjApOyAvLyBPcmFuZ2UgRmlyZVxyXG4gICAgICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0uZW1pdCh0bnQucG9zaXRpb24sIDUwLCB2ZWM0LmZyb21WYWx1ZXMoMC4yLCAwLjIsIDAuMiwgMSksIDQuMCk7IC8vIFNtb2tlXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gMztcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pblggPSBweCAtIHJhZGl1czsgY29uc3QgbWF4WCA9IHB4ICsgcmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWluWSA9IHB5IC0gcmFkaXVzOyBjb25zdCBtYXhZID0gcHkgKyByYWRpdXM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW5aID0gcHogLSByYWRpdXM7IGNvbnN0IG1heFogPSBweiArIHJhZGl1cztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBIZWxwZXIgdG8gcmVidWlsZCBzaW5nbGUgY2h1bmsgbWVzaFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVidWlsZENodW5rTWVzaCA9IChjaHVuazogQ2h1bmtEYXRhLCBjeDogbnVtYmVyLCBjejogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2h1bmsudmlzaWJsZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgQ0hVTktfU0laRTsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgQ0hVTktfU0laRTsgeisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3eCA9IGN4ICogQ0hVTktfU0laRSArIHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3eiA9IGN6ICogQ0hVTktfU0laRSArIHo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGYXN0IHNjYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pblkgPSAtWV9PRkZTRVQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhZID0gQ0hVTktfSEVJR0hUIC0gWV9PRkZTRVQgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gZ2V0R3JpZEluZGV4KHgsIHksIHopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZHggPT09IC0xKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gY2h1bmsuZ3JpZFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4cG9zZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NvbGlkID0gKG54OiBudW1iZXIsIG55OiBudW1iZXIsIG56OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbklkeCA9IGdldEdyaWRJbmRleChueCwgbnksIG56KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5JZHggPT09IC0xKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaHVuay5ncmlkW25JZHhdICE9PSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNTb2xpZCh4ICsgMSwgeSwgeikpIGV4cG9zZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1NvbGlkKHggLSAxLCB5LCB6KSkgZXhwb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzU29saWQoeCwgeSArIDEsIHopKSBleHBvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNTb2xpZCh4LCB5IC0gMSwgeikpIGV4cG9zZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1NvbGlkKHgsIHksIHogKyAxKSkgZXhwb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzU29saWQoeCwgeSwgeiAtIDEpKSBleHBvc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4cG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmsudmlzaWJsZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogbmV3IEZsb2F0MzJBcnJheShbd3gsIHksIHd6XSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rc1RvVXBkYXRlID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IG1pblg7IHggPD0gbWF4WDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHogPSBtaW5aOyB6IDw9IG1heFo7IHorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHggPSB4IC0gcHg7IGNvbnN0IGR5ID0geSAtIHB5OyBjb25zdCBkeiA9IHogLSBwejtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkeCAqIGR4ICsgZHkgKiBkeSArIGR6ICogZHogPD0gcmFkaXVzICogcmFkaXVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVzdHJveVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRDeCA9IE1hdGguZmxvb3IoeCAvIENIVU5LX1NJWkUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRDeiA9IE1hdGguZmxvb3IoeiAvIENIVU5LX1NJWkUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRLZXkgPSBgJHt0Q3h9LCR7dEN6fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdENodW5rID0gY2h1bmtzLmdldCh0S2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRDaHVuaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0THggPSB4IC0gdEN4ICogQ0hVTktfU0laRTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdEx6ID0geiAtIHRDeiAqIENIVU5LX1NJWkU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRJZHggPSBnZXRHcmlkSW5kZXgodEx4LCB5LCB0THopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodElkeCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRDaHVuay5ncmlkW3RJZHhdID0gMDsgLy8gQWlyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaHVua3NUb1VwZGF0ZS5hZGQodEtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVidWlsZCBDaHVua3NcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY0tleSBvZiBjaHVua3NUb1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtjY3gsIGNjel0gPSBjS2V5LnNwbGl0KCcsJykubWFwKE51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVidWlsZENodW5rTWVzaChjaHVua3MuZ2V0KGNLZXkpISwgY2N4LCBjY3opO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVidWlsZFdvcmxkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoaXNSaWRpbmcpIHtcclxuICAgICAgICAgICAgLy8gV2hlbiByaWRpbmcgc3BpZGVyOiBwbGF5ZXIgcG9zaXRpb24gPSBzcGlkZXIgcG9zaXRpb25cclxuICAgICAgICAgICAgdmVjMy5jb3B5KHBsYXllclBvc2l0aW9uLCBzcGlkZXIucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBwbGF5ZXJQb3NpdGlvblsxXSArPSAxLjU7IC8vIFBsYXllciBzaXRzIG9uIHNwaWRlclxyXG5cclxuICAgICAgICAgICAgLy8gM3JkIFBlcnNvbiBPcmJpdCBDYW1lcmFcclxuICAgICAgICAgICAgY29uc3QgY2FtRGlzdCA9IGNhbWVyYVpvb207XHJcbiAgICAgICAgICAgIGNvbnN0IGhvcml6b250YWxEaXN0ID0gY2FtRGlzdCAqIE1hdGguY29zKGNhbWVyYVBpdGNoKTtcclxuICAgICAgICAgICAgY29uc3QgY3ggPSBwbGF5ZXJQb3NpdGlvblswXSAtIE1hdGguc2luKGNhbWVyYVlhdykgKiBob3Jpem9udGFsRGlzdDtcclxuICAgICAgICAgICAgY29uc3QgY3ogPSBwbGF5ZXJQb3NpdGlvblsyXSAtIE1hdGguY29zKGNhbWVyYVlhdykgKiBob3Jpem9udGFsRGlzdDtcclxuICAgICAgICAgICAgY29uc3QgY3kgPSBwbGF5ZXJQb3NpdGlvblsxXSAtIHBsYXllckhlaWdodCArIGNhbURpc3QgKiBNYXRoLnNpbihjYW1lcmFQaXRjaCkgKyAyLjA7XHJcbiAgICAgICAgICAgIHZlYzMuc2V0KGNhbWVyYVBvc2l0aW9uLCBjeCwgY3ksIGN6KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIC0tLSBPbi1Gb290IFRoaXJkIFBlcnNvbiBMb2dpYyAtLS1cclxuICAgICAgICAvLyBpc1RoaXJkUGVyc29uT25Gb290IGlzIGRlZmluZWQgYXQgdG9wIG9mIGZyYW1lXHJcbiAgICAgICAgaWYgKCFpc1JpZGluZyAmJiBpc1RoaXJkUGVyc29uT25Gb290KSB7XHJcbiAgICAgICAgICAgIC8vIE9yYml0IENhbWVyYVxyXG4gICAgICAgICAgICBjb25zdCBjYW1EaXN0ID0gY2FtZXJhWm9vbTtcclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZW9yZXRpY2FsIGNhbWVyYSBwb3NpdGlvblxyXG4gICAgICAgICAgICBjb25zdCBob3Jpem9udGFsRGlzdCA9IGNhbURpc3QgKiBNYXRoLmNvcyhjYW1lcmFQaXRjaCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN4ID0gcGxheWVyUG9zaXRpb25bMF0gLSBNYXRoLnNpbihjYW1lcmFZYXcpICogaG9yaXpvbnRhbERpc3Q7XHJcbiAgICAgICAgICAgIGNvbnN0IGN6ID0gcGxheWVyUG9zaXRpb25bMl0gLSBNYXRoLmNvcyhjYW1lcmFZYXcpICogaG9yaXpvbnRhbERpc3Q7XHJcbiAgICAgICAgICAgIGNvbnN0IGN5ID0gcGxheWVyUG9zaXRpb25bMV0gKyBleWVMZXZlbCArIGNhbURpc3QgKiBNYXRoLnNpbihjYW1lcmFQaXRjaCk7IC8vIFBpdm90IGZyb20gZXllIGxldmVsXHJcblxyXG4gICAgICAgICAgICAvLyBSYXljYXN0IGZvciBDYW1lcmEgQ2xpcHBpbmcgKEFudGktQ2xpcClcclxuICAgICAgICAgICAgLy8gQ2FzdCByYXkgZnJvbSBQbGF5ZXIgSGVhZCAtPiBDYW1lcmFcclxuICAgICAgICAgICAgY29uc3QgaGVhZFBvcyA9IHZlYzMuZnJvbVZhbHVlcyhwbGF5ZXJQb3NpdGlvblswXSwgcGxheWVyUG9zaXRpb25bMV0gKyBleWVMZXZlbCwgcGxheWVyUG9zaXRpb25bMl0pO1xyXG4gICAgICAgICAgICBjb25zdCBjYW1Qb3MgPSB2ZWMzLmZyb21WYWx1ZXMoY3gsIGN5LCBjeik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbURpciA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIHZlYzMuc3VidHJhY3QoY2FtRGlyLCBjYW1Qb3MsIGhlYWRQb3MpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXhMZW4gPSB2ZWMzLmxlbmd0aChjYW1EaXIpO1xyXG4gICAgICAgICAgICB2ZWMzLm5vcm1hbGl6ZShjYW1EaXIsIGNhbURpcik7XHJcblxyXG4gICAgICAgICAgICAvLyBSYXljYXN0IGNoZWNrXHJcbiAgICAgICAgICAgIC8vIFdlIGNhbiByZXVzZSBhIHNpbXBsaWZpZWQgcmF5Y2FzdCBvciB3YWxrIHRoZSByYXlcclxuICAgICAgICAgICAgbGV0IHNhZmVEaXN0ID0gbWF4TGVuO1xyXG4gICAgICAgICAgICAvLyBRdWljayByYXkgbWFyY2hcclxuICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSAyMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IChtYXhMZW4gKiBpKSAvIHN0ZXBzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB2ZWMzLnNjYWxlQW5kQWRkKHAsIGhlYWRQb3MsIGNhbURpciwgZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBpbnNpZGUgc29saWQgYmxvY2tcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl4ID0gTWF0aC5mbG9vcihwWzBdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl5ID0gTWF0aC5mbG9vcihwWzFdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl6ID0gTWF0aC5mbG9vcihwWzJdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjY3ggPSBNYXRoLmZsb29yKGl4IC8gQ0hVTktfU0laRSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjY3ogPSBNYXRoLmZsb29yKGl6IC8gQ0hVTktfU0laRSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVuayA9IGNodW5rcy5nZXQoYCR7Y2N4fSwke2Njen1gKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaHVuaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGx4ID0gaXggLSBjY3ggKiBDSFVOS19TSVpFO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGx6ID0gaXogLSBjY3ogKiBDSFVOS19TSVpFO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IGdldEdyaWRJbmRleChseCwgaXksIGx6KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ICE9PSAtMSAmJiBjaHVuay5ncmlkW2lkeF0gIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGl0IVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYWZlRGlzdCA9IE1hdGgubWF4KDAuNSwgZCAtIDAuMik7IC8vIFB1bGwgYmFjayBzbGlnaHRseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBmaW5hbCBjYW1lcmEgcG9zXHJcbiAgICAgICAgICAgIHZlYzMuc2NhbGVBbmRBZGQoY2FtZXJhUG9zaXRpb24sIGhlYWRQb3MsIGNhbURpciwgc2FmZURpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghaXNSaWRpbmcgJiYgIWlzVGhpcmRQZXJzb25PbkZvb3QpIHtcclxuICAgICAgICAgICAgLy8gMXN0IFBlcnNvbiBDYW1lcmEgKEZQUylcclxuICAgICAgICAgICAgdmVjMy5zZXQoY2FtZXJhUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJQb3NpdGlvblswXSxcclxuICAgICAgICAgICAgICAgIHBsYXllclBvc2l0aW9uWzFdICsgZXllTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJQb3NpdGlvblsyXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTm9ybWFsIFBoeXNpY3MgKHdoZW4gbm90IHJpZGluZylcclxuICAgICAgICBpZiAoIWlzUmlkaW5nICYmIGtleXNbJ1NwYWNlJ10gJiYgaXNHcm91bmRlZCkge1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbFZlbG9jaXR5ID0ganVtcEZvcmNlO1xyXG4gICAgICAgICAgICBpc0dyb3VuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQaHlzaWNzICYgQ29sbGlzaW9uIFJlc29sdXRpb25cclxuXHJcbiAgICAgICAgLy8gMS4gVmVydGljYWwgTW92ZW1lbnQgKFkpXHJcbiAgICAgICAgdmVydGljYWxWZWxvY2l0eSAtPSBncmF2aXR5ICogZHQ7XHJcbiAgICAgICAgLy8gVGVybWluYWwgdmVsb2NpdHkgY2hlY2s/IGtlZXBpbmcgaXQgc2ltcGxlXHJcblxyXG4gICAgICAgIC8vIEFwcGx5IFkgdG8gUExBWUVSXHJcbiAgICAgICAgcGxheWVyUG9zaXRpb25bMV0gKz0gdmVydGljYWxWZWxvY2l0eSAqIGR0O1xyXG5cclxuICAgICAgICBjb25zdCBoaXRZID0gY2hlY2tDb2xsaXNpb24ocGxheWVyUG9zaXRpb24pO1xyXG4gICAgICAgIGlmIChoaXRZICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIERldGVjdCBpZiB0aGlzIGlzIGp1c3QgdGhlIGZsb29yIHdlIGFyZSBzdGFuZGluZyBvblxyXG4gICAgICAgICAgICAvLyBCbG9jayB0b3AgaXMgaGl0WSArIDEuIElmIGZlZXQgKHBvc1sxXSkgYXJlIGFib3ZlIHRoYXQsIGl0J3MgZmxvb3IuXHJcblxyXG4gICAgICAgICAgICAvLyBGSVg6IE9ubHkgdHJlYXQgYXMgZmxvb3IgaWYgaXQgaXMgcmVhc29uYWJseSBjbG9zZSB0byBmZWV0IChzdGVwIGhlaWdodClcclxuICAgICAgICAgICAgLy8gSWYgaXQncyB3YXkgYWJvdmUgZmVldCwgaXQncyBhIGNlaWxpbmcgb3IgaGVhZGVyLCBub3QgYSB2YWxpZCBmbG9vciB0byBzbmFwIHRvLlxyXG4gICAgICAgICAgICAvLyBGSVg6IFN0ZXAgSGVpZ2h0IExpbWl0IHRvIDAuNiBwcmV2ZW50cyB3YWxsIHRlbGVwb3J0IChzdGVwcGFibGUpXHJcbiAgICAgICAgICAgIC8vIEJ1dCB3ZSBuZWVkIGEgc2VwYXJhdGUgXCJMYW5kaW5nXCIgY2hlY2sgZm9yIGZhbGxpbmcsIHdoaWNoIHNob3VsZCBiZSBsZW5pZW50LlxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlzdFRvVG9wID0gKGhpdFkgKyAxLjApIC0gcGxheWVyUG9zaXRpb25bMV07XHJcblxyXG4gICAgICAgICAgICAvLyBTdGVwcGluZzogU3RyaWN0IGxpbWl0IChjbGltYmluZyBzdGFpcnMvc2xhYnMpXHJcbiAgICAgICAgICAgIGNvbnN0IGlzU3RlcHBhYmxlID0gKGRpc3RUb1RvcCA8PSAwLjYgJiYgZGlzdFRvVG9wID49IC0wLjEpO1xyXG5cclxuICAgICAgICAgICAgLy8gTGFuZGluZzogTGVuaWVudCBsaW1pdCAoZmFsbGluZyBmcm9tIGhlaWdodClcclxuICAgICAgICAgICAgLy8gSWYgZmFsbGluZywgd2Ugd2FudCB0byBzbmFwIHRvIGdyb3VuZCBldmVuIGlmIHdlIHBlbmV0cmF0ZWQgZGVlcCBpbnRvIGl0IChkdWUgdG8gc3BlZWQpLlxyXG4gICAgICAgICAgICAvLyBCdXQgd2UgZG9uJ3Qgd2FudCB0byBzbmFwIHRvIGEgXCJDZWlsaW5nXCIgZmFyIGFib3ZlIHVzLlxyXG4gICAgICAgICAgICAvLyBJZiBkaXN0VG9Ub3AgaXMgcG9zaXRpdmUgKGZlZXQgYmVsb3cgdG9wKSwgd2UgYXJlIGluc2lkZS9iZWxvdyB0aGUgYmxvY2sgdG9wLlxyXG4gICAgICAgICAgICAvLyBJZiBkaXN0VG9Ub3AgaXMgbWFzc2l2ZSAoZS5nLiA1LjApLCB3ZSBhcmUgd2F5IGRlZXA/IE5vLCBkaXN0VG9Ub3AgPSBUb3AgLSBGZWV0LlxyXG4gICAgICAgICAgICAvLyBJZiBmZWV0ID0gMCwgVG9wID0gNS4gZGlzdCA9IDUuIFdlIGFyZSBiZWxvdyBpdC5cclxuICAgICAgICAgICAgLy8gU28gZm9yIGxhbmRpbmcsIGJhc2ljYWxseSBhbnl0aGluZyB3aGVyZSBmZWV0IDw9IHRvcC5cclxuICAgICAgICAgICAgY29uc3QgaXNMYW5kYWJsZSA9IChkaXN0VG9Ub3AgPiAtMC4xKTsgLy8gQWxsb3cgc2xpZ2h0IGhvdmVyIChlcHNpbG9uKSwgYnV0IG1haW5seSBqdXN0IFwiYW0gSSBiZWxvdyB0aGUgdG9wP1wiXHJcblxyXG4gICAgICAgICAgICBpZiAodmVydGljYWxWZWxvY2l0eSA8IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIEZhbGxpbmcvTGFuZGluZ1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTGFuZGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJQb3NpdGlvblsxXSA9IGhpdFkgKyAxLjAgKyAwLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzR3JvdW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gTW92aW5nIFVwIChKdW1waW5nKVxyXG4gICAgICAgICAgICAgICAgLy8gVXNlIHN0cmljdCBTdGVwcGFibGUgY2hlY2sgZm9yIGludGVycnVwdGlvbnM/IE9yIENlaWxpbmcgY2hlY2s/XHJcbiAgICAgICAgICAgICAgICAvLyBDZWlsaW5nIENoZWNrOiBPbmx5IGJsb2NrIGlmIGhpdFkgaXMgQUJPVkUgcGxheWVyIGhlYWRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllclRvcCA9IHBsYXllclBvc2l0aW9uWzFdICsgcGxheWVySGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGl0Qm90dG9tID0gaGl0WTsgLy8gQm90dG9tIG9mIGJsb2NrIGlzIGhpdFk/IE5vLCBoaXRZIGlzIFwiVG9wIG9mIGJsb2NrIFlcIiBvciBcIkJvdHRvbVwiPyBcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrQ29sbGlzaW9uIHJldHVybnMgWSAoaW50ZWdlciBjb29yZGluYXRlKS5cclxuICAgICAgICAgICAgICAgIC8vIFNvbGlkIGJsb2NrIG9jY3VwaWVzIFt5LCB5KzFdLlxyXG4gICAgICAgICAgICAgICAgLy8gU28gaGl0WSBpcyB0aGUgYHlgIGluZGV4LiBCb3R0b20gaXMgYHlgLiBUb3AgaXMgYHkrMWAuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgaGl0IGEgYmxvY2sgQUJPVkUgdXMuIEJsb2NrIFkgPiBQbGF5ZXIgWSArIEhlaWdodC5cclxuICAgICAgICAgICAgICAgIC8vIFdhaXQsIGNoZWNrQ29sbGlzaW9uIHJldHVybnMgdGhlIGhpZ2hlc3QgYmxvY2sgWSBhdCB0aGF0IFgsWj9cclxuICAgICAgICAgICAgICAgIC8vIFllcywgXCJIaXQhXCIgLT4geS5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBub3Qgc3RlcHBhYmxlLCB0cmVhdCBhcyB3YWxsL2NlaWxpbmcgZGVwZW5kaW5nIG9uIHJlbGF0aXZlIHBvcy5cclxuICAgICAgICAgICAgICAgIGlmICghaXNTdGVwcGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IHN0b3AgaWYgaXQncyBhY3R1YWxseSBibG9ja2luZyB1cyAoQ2VpbGluZykgT1IgaWYgaXQncyBhIFdhbGwgd2UgY2FuJ3Qgc3RlcCB1cC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgSnVtcGluZzogV2Ugd2FudCB0byBzbGlkZSBVUCB3YWxscy5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTbyB3ZSBzaG91bGQgT05MWSBzdG9wIGlmIHdlIGhpdCBhIENFSUxJTkcuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQSB3YWxsIChzaWRlKSBpcyBoYW5kbGVkIGJ5IFgvWiBjb2xsaXNpb24uIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFkgQ29sbGlzaW9uIHVzdWFsbHkgbWVhbnMgXCJJIGFtIGluc2lkZSB0aGlzIGJsb2NrXCIuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgSSBhbSBpbnNpZGUgYSBibG9jayB0aGF0IGlzIE5PVCBzdGVwcGFibGUsIGFuZCBJIGFtIG1vdmluZyBVUC4uLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEl0IG1pZ2h0IGJlIGEgaGVhZGVyLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBibG9jayBZID4gcGxheWVyIGhlYWQsIGl0J3MgYSBjZWlsaW5nLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoaXRZID4gcGxheWVyUG9zaXRpb25bMV0gKyAxLjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyUG9zaXRpb25bMV0gLT0gdmVydGljYWxWZWxvY2l0eSAqIGR0OyAvLyBQdXNoIGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVsc2U6IEl0J3MgYSB3YWxsIHdlIGFyZSBzbGlkaW5nIHVwPyBJZ25vcmUgWSBjb2xsaXNpb24gKGFsbG93IHNsaWRlKS5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlzR3JvdW5kZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZsb29yIFwiZGVhdGggcGxhbmVcIiBmYWxsYmFja1xyXG4gICAgICAgIGlmIChwbGF5ZXJQb3NpdGlvblsxXSA8IC0xMCkge1xyXG4gICAgICAgICAgICBwbGF5ZXJQb3NpdGlvblswXSA9IDA7XHJcbiAgICAgICAgICAgIHBsYXllclBvc2l0aW9uWzFdID0gNTtcclxuICAgICAgICAgICAgcGxheWVyUG9zaXRpb25bMl0gPSA1O1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbFZlbG9jaXR5ID0gMDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBDYW1lcmEgTG9naWMgKGZvciBtb3ZlbWVudCBkaXJlY3Rpb24pXHJcbiAgICAgICAgY29uc3QgZm9yd2FyZCA9IGdldENhbWVyYUZvcndhcmQoKTtcclxuICAgICAgICAvLyBGbGF0dGVuIGZvcndhcmQgZm9yIG1vdmVtZW50IChzbyB5b3UgZG9uJ3QgZmx5IHVwL2Rvd24gd2hlbiBsb29raW5nIHVwL2Rvd24pXHJcbiAgICAgICAgY29uc3QgbW92ZURpckZvcndhcmQgPSB2ZWMzLmZyb21WYWx1ZXMoZm9yd2FyZFswXSwgMCwgZm9yd2FyZFsyXSk7XHJcbiAgICAgICAgdmVjMy5ub3JtYWxpemUobW92ZURpckZvcndhcmQsIG1vdmVEaXJGb3J3YXJkKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgICAgIHZlYzMuY3Jvc3MocmlnaHQsIGZvcndhcmQsIHZlYzMuZnJvbVZhbHVlcygwLCAxLCAwKSk7XHJcbiAgICAgICAgY29uc3QgbW92ZURpclJpZ2h0ID0gdmVjMy5mcm9tVmFsdWVzKHJpZ2h0WzBdLCAwLCByaWdodFsyXSk7XHJcbiAgICAgICAgdmVjMy5ub3JtYWxpemUobW92ZURpclJpZ2h0LCBtb3ZlRGlyUmlnaHQpO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgaW50ZW5kZWQgbW92ZW1lbnRcclxuICAgICAgICBjb25zdCBtb3ZlVmVjID0gdmVjMy5jcmVhdGUoKTtcclxuICAgICAgICBjb25zdCBtb3ZlQW1vdW50ID0gY2FtZXJhU3BlZWQgKiBkdDtcclxuXHJcbiAgICAgICAgaWYgKGtleXNbJ0tleVcnXSkgdmVjMy5zY2FsZUFuZEFkZChtb3ZlVmVjLCBtb3ZlVmVjLCBtb3ZlRGlyRm9yd2FyZCwgbW92ZUFtb3VudCk7XHJcbiAgICAgICAgaWYgKGtleXNbJ0tleVMnXSkgdmVjMy5zY2FsZUFuZEFkZChtb3ZlVmVjLCBtb3ZlVmVjLCBtb3ZlRGlyRm9yd2FyZCwgLW1vdmVBbW91bnQpO1xyXG4gICAgICAgIGlmIChrZXlzWydLZXlBJ10pIHZlYzMuc2NhbGVBbmRBZGQobW92ZVZlYywgbW92ZVZlYywgbW92ZURpclJpZ2h0LCAtbW92ZUFtb3VudCk7XHJcbiAgICAgICAgaWYgKGtleXNbJ0tleUQnXSkgdmVjMy5zY2FsZUFuZEFkZChtb3ZlVmVjLCBtb3ZlVmVjLCBtb3ZlRGlyUmlnaHQsIG1vdmVBbW91bnQpO1xyXG5cclxuICAgICAgICAvLyBYIEF4aXMgLSBtb3ZlIFBMQVlFUlxyXG4gICAgICAgIHBsYXllclBvc2l0aW9uWzBdICs9IG1vdmVWZWNbMF07XHJcbiAgICAgICAgY29uc3QgaGl0WCA9IGNoZWNrQ29sbGlzaW9uKHBsYXllclBvc2l0aW9uKTtcclxuICAgICAgICBpZiAoaGl0WCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBTYW1lIGxvZ2ljOiBJZiBpdCdzIGp1c3QgdGhlIGZsb29yLCBhbGxvdyBtb3ZlbWVudC5cclxuICAgICAgICAgICAgLy8gSWYgaXQncyBhIHdhbGwgKGhpZ2hlciB0aGFuIGZsb29yKSwgYmxvY2suXHJcbiAgICAgICAgICAgIGlmIChoaXRYICsgMS4wID4gcGxheWVyUG9zaXRpb25bMV0gKyAwLjA1KSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJQb3NpdGlvblswXSAtPSBtb3ZlVmVjWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBaIEF4aXMgLSBtb3ZlIFBMQVlFUlxyXG4gICAgICAgIHBsYXllclBvc2l0aW9uWzJdICs9IG1vdmVWZWNbMl07XHJcbiAgICAgICAgY29uc3QgaGl0WiA9IGNoZWNrQ29sbGlzaW9uKHBsYXllclBvc2l0aW9uKTtcclxuICAgICAgICBpZiAoaGl0WiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoaGl0WiArIDEuMCA+IHBsYXllclBvc2l0aW9uWzFdICsgMC4wNSkge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyUG9zaXRpb25bMl0gLT0gbW92ZVZlY1syXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0gQ2FtZXJhIFVwZGF0ZXMgQ29tcGxldGVkIC0tLVxyXG5cclxuICAgIC8vIENSSVRJQ0FMIEZJWDogUmF5Y2FzdCBtb3ZlZCB0byBFTkQgb2YgZnJhbWUsIGFmdGVyIGNhbWVyYSBwb3NpdGlvbiBpcyBmaW5hbC5cclxuICAgIC8vIFRoaXMgZW5zdXJlcyBoaWdobGlnaHQgZXhhY3RseSBtYXRjaGVzIHRoZSBjcm9zc2hhaXIgZm9yIHRoZSBjdXJyZW50IGZyYW1lLlxyXG4gICAgY3VycmVudEhpdCA9IHJheWNhc3QoKTtcclxuXHJcbiAgICAvLyBSZWNhbGN1bGF0ZSBmb3J3YXJkIGZvciByZW5kZXJpbmcgaWYgbmVlZGVkLCB0aG91Z2ggdmlld01hdHJpeCB1c2VzIHRhcmdldHMuXHJcbiAgICAvLyBPdGhlcndpc2UgdGhlIHNlbGVjdGlvbiBsYWdzIDEgZnJhbWUgYmVoaW5kIHRoZSBjcm9zc2hhaXIgZHVyaW5nIG1vdmVtZW50LCBmZWVsaW5nIFwib2ZmLWNlbnRlcmVkXCIuXHJcbiAgICAvLyBSYXljYXN0IHdhcyBoZXJlIChsaW5lIDIxNDEpLCBtb3ZlZCB0byBlbmQgb2YgbG9vcCAobGluZSAyMjQ2KVxyXG4gICAgLy8gY3VycmVudEhpdCA9IHJheWNhc3QoKTtcclxuICAgIGNvbnN0IGZvcndhcmQgPSBnZXRDYW1lcmFGb3J3YXJkKCk7XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0ID0gdmVjMy5jcmVhdGUoKTtcclxuXHJcbiAgICAvLyAtLS0gVGFyZ2V0IENhbGN1bGF0aW9uIChGb3IgTG9va0F0KSAtLS1cclxuICAgIC8vIENhbWVyYSBQb3NpdGlvbiBpcyBhbHJlYWR5IHNldCBpbiB0aGUgYmxvY2sgYWJvdmUgKHdpdGggQW50aS1DbGlwIC8gT3JiaXQgbG9naWMpXHJcbiAgICAvLyBIZXJlIHdlIGp1c3QgZGV0ZXJtaW5lIHdoYXQgdGhlIGNhbWVyYSBpcyBMT09LSU5HIEFULlxyXG5cclxuICAgIGlmIChpc1JpZGluZykge1xyXG4gICAgICAgIC8vIExvb2sgYXQgc3BpZGVyIGNlbnRlciB3aGVuIHJpZGluZ1xyXG4gICAgICAgIHZlYzMuY29weSh0YXJnZXQsIHNwaWRlci5wb3NpdGlvbik7XHJcbiAgICAgICAgdGFyZ2V0WzFdICs9IDEuNTsgLy8gTG9vayBhdCBzcGlkZXIgY2VudGVyIGhlaWdodFxyXG4gICAgfSBlbHNlIGlmIChpc1RoaXJkUGVyc29uT25Gb290KSB7XHJcbiAgICAgICAgLy8gTG9vayBhdCBQbGF5ZXIgQ2VudGVyIChub3QgaGVhZClcclxuICAgICAgICB2ZWMzLmNvcHkodGFyZ2V0LCBwbGF5ZXJQb3NpdGlvbik7XHJcbiAgICAgICAgdGFyZ2V0WzFdICs9IDEuMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gRmlyc3QgUGVyc29uOiBMb29rIEZvcndhcmQgZnJvbSBDYW1lcmEgUG9zaXRpb25cclxuICAgICAgICB2ZWMzLmFkZCh0YXJnZXQsIGNhbWVyYVBvc2l0aW9uLCBmb3J3YXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXQ0Lmxvb2tBdCh2aWV3TWF0cml4LCBjYW1lcmFQb3NpdGlvbiwgdGFyZ2V0LCB2ZWMzLmZyb21WYWx1ZXMoMCwgMSwgMCkpO1xyXG5cclxuICAgIG1hdDQubXVsdGlwbHkodmlld1Byb2plY3Rpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIHZpZXdNYXRyaXgpO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBVbmlmb3Jtc1xyXG4gICAgLy8gU3RydWN0dXJlOiBtb2RlbFZpZXdQcm9qZWN0aW9uICg2NCksIHZpZXdQcm9qZWN0aW9uICg2NClcclxuICAgIC8vIFdlIG9ubHkgc3RyaWN0bHkgbmVlZCB2aWV3UHJvamVjdGlvbiBmb3IgdGhlIG5ldyBzaGFkZXIsIGJ1dCBsZXQncyBqdXN0IHdyaXRlIG9mZnNldHNcclxuICAgIC8vIFNoYWRlciBleHBlY3RzOlxyXG4gICAgLy8gc3RydWN0IFVuaWZvcm1zIHtcclxuICAgIC8vICAgICBtb2RlbFZpZXdQcm9qZWN0aW9uTWF0cml4IDogbWF0NHg0PGYzMj4sICh1bnVzZWQgaW4gdmVydGV4IHNoYWRlciBub3csIGJ1dCBrZXB0IGZvciBhbGlnbm1lbnQvY29tcGF0KVxyXG4gICAgLy8gICAgIHZpZXdQcm9qZWN0aW9uTWF0cml4IDogbWF0NHg0PGYzMj4sXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gLS0tIERheS9OaWdodCBDeWNsZSAtLS1cclxuICAgIGNvbnN0IGN5Y2xlRHVyYXRpb24gPSAxMjAuMDtcclxuXHJcbiAgICAvLyBDaGVjayBTZXR0aW5nc1xyXG4gICAgbGV0IGVmZmVjdGl2ZVRpbWUgPSBub3cgLyAxMDAwO1xyXG4gICAgaWYgKGNoa0xvY2tUaW1lICYmIGNoa0xvY2tUaW1lLmNoZWNrZWQpIHtcclxuICAgICAgICBlZmZlY3RpdmVUaW1lID0gNjAuMDsgLy8gTm9vbiAoaGFsZndheSB0aHJvdWdoIGZpcnN0IGN5Y2xlIHJvdWdobHk/KVxyXG4gICAgICAgIC8vIE9yIHNwZWNpZmljIGNvbnN0YW50LiBMZXQncyBzYXkgY3ljbGUgc3RhcnRzIGF0IDAgKGRhd24/KS4gXHJcbiAgICAgICAgLy8gMTIwcyB0b3RhbC4gMzBzID0gTm9vbj8gXHJcbiAgICAgICAgLy8gTGV0J3Mgc3RpY2sgdG8gbG9naWMgYmVsb3c6IHNpbih0aW1lIC8gZHVyYXRpb24gKiBQSSAqIDIpXHJcbiAgICAgICAgLy8gTm9vbiBpcyB3aGVuIHN1biBpcyBoaWdoLiBzaW4gPSAxLiB0aW1lID0gZHVyYXRpb24gLyA0ID0gMzBzLlxyXG4gICAgICAgIGVmZmVjdGl2ZVRpbWUgPSAzMC4wO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpbWUgPSBlZmZlY3RpdmVUaW1lOyAvLyBVc2UgZWZmZWN0aXZlIHRpbWVcclxuICAgIGNvbnN0IGFuZ2xlID0gKHRpbWUgLyBjeWNsZUR1cmF0aW9uKSAqIE1hdGguUEkgKiAyO1xyXG4gICAgY29uc3QgdGltZU9mRGF5ID0gZWZmZWN0aXZlVGltZSAlIGN5Y2xlRHVyYXRpb247XHJcbiAgICBjb25zdCBjeWNsZVByb2dyZXNzID0gdGltZU9mRGF5IC8gY3ljbGVEdXJhdGlvbjtcclxuICAgIGNvbnN0IHN1bkFuZ2xlID0gY3ljbGVQcm9ncmVzcyAqIE1hdGguUEkgKiAyO1xyXG4gICAgY29uc3Qgc3VuRGlyID0gdmVjMy5mcm9tVmFsdWVzKE1hdGguY29zKHN1bkFuZ2xlKSwgTWF0aC5zaW4oc3VuQW5nbGUpLCAwLjIpO1xyXG4gICAgdmVjMy5ub3JtYWxpemUoc3VuRGlyLCBzdW5EaXIpO1xyXG5cclxuICAgIGNvbnN0IGRheUNvbG9yID0gdmVjMy5mcm9tVmFsdWVzKDEuMCwgMC45NSwgMC45KTtcclxuICAgIGNvbnN0IHN1blNldENvbG9yID0gdmVjMy5mcm9tVmFsdWVzKDEuMCwgMC42LCAwLjMpO1xyXG4gICAgY29uc3QgbmlnaHRDb2xvciA9IHZlYzMuZnJvbVZhbHVlcygwLjEsIDAuMSwgMC4zKTtcclxuICAgIGNvbnN0IGFtYkRheSA9IHZlYzMuZnJvbVZhbHVlcygwLjMsIDAuMywgMC40KTtcclxuICAgIGNvbnN0IGFtYk5pZ2h0ID0gdmVjMy5mcm9tVmFsdWVzKDAuMDUsIDAuMDUsIDAuMSk7XHJcblxyXG4gICAgLy8gVmFyaWFibGVzIChIb2lzdGVkKVxyXG4gICAgY29uc3QgY3VycmVudFNreSA9IGdsb2JhbFNreTtcclxuICAgIGNvbnN0IGxpZ2h0Q29sb3IgPSBnbG9iYWxMaWdodENvbG9yO1xyXG4gICAgY29uc3QgYW1iaWVudENvbG9yID0gZ2xvYmFsQW1iaWVudENvbG9yO1xyXG5cclxuICAgIC8vIFNreSBDb25zdGFudHNcclxuICAgIGNvbnN0IHNreURheSA9IHZlYzMuZnJvbVZhbHVlcygwLjUsIDAuNywgMS4wKTtcclxuICAgIGNvbnN0IHNreU5pZ2h0ID0gdmVjMy5mcm9tVmFsdWVzKDAuMDUsIDAuMDUsIDAuMSk7XHJcbiAgICBjb25zdCBza3lTdW5zZXQgPSB2ZWMzLmZyb21WYWx1ZXMoMS4wLCAwLjUsIDAuMik7XHJcblxyXG4gICAgaWYgKHN1bkRpclsxXSA+IDAuMikgeyAvLyBGdWxsIERheVxyXG4gICAgICAgIHZlYzMuY29weShjdXJyZW50U2t5LCBza3lEYXkpO1xyXG4gICAgICAgIHZlYzMuY29weShsaWdodENvbG9yLCBkYXlDb2xvcik7XHJcbiAgICAgICAgdmVjMy5jb3B5KGFtYmllbnRDb2xvciwgYW1iRGF5KTtcclxuICAgIH0gZWxzZSBpZiAoc3VuRGlyWzFdIDwgLTAuMikgeyAvLyBGdWxsIE5pZ2h0XHJcbiAgICAgICAgdmVjMy5jb3B5KGN1cnJlbnRTa3ksIHNreU5pZ2h0KTtcclxuICAgICAgICB2ZWMzLmNvcHkobGlnaHRDb2xvciwgbmlnaHRDb2xvcik7XHJcbiAgICAgICAgdmVjMy5jb3B5KGFtYmllbnRDb2xvciwgYW1iTmlnaHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBTbW9vdGggVHJhbnNpdGlvbiAoLTAuMiB0byAwLjIpXHJcbiAgICAgICAgY29uc3QgdCA9IChzdW5EaXJbMV0gKyAwLjIpIC8gMC40O1xyXG4gICAgICAgIC8vIEVhc2UgaW4vb3V0XHJcbiAgICAgICAgY29uc3QgdFNtb290aCA9IHQgKiB0ICogKDMgLSAyICogdCk7XHJcblxyXG4gICAgICAgIHZlYzMubGVycChjdXJyZW50U2t5LCBza3lOaWdodCwgc2t5RGF5LCB0U21vb3RoKTtcclxuICAgICAgICAvLyBBZGQgc3Vuc2V0IHRpbnQgYXJvdW5kIDAuNVxyXG4gICAgICAgIGNvbnN0IHN1bnNldFN0ciA9IDEuMCAtIE1hdGguYWJzKHRTbW9vdGggLSAwLjUpICogMjtcclxuICAgICAgICB2ZWMzLmxlcnAoY3VycmVudFNreSwgY3VycmVudFNreSwgc2t5U3Vuc2V0LCBzdW5zZXRTdHIgKiAwLjgpO1xyXG5cclxuICAgICAgICB2ZWMzLmxlcnAobGlnaHRDb2xvciwgbmlnaHRDb2xvciwgZGF5Q29sb3IsIHRTbW9vdGgpO1xyXG4gICAgICAgIHZlYzMubGVycChhbWJpZW50Q29sb3IsIGFtYk5pZ2h0LCBhbWJEYXksIHRTbW9vdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNoYWRvdyBDYW1lcmEgTG9naWNcclxuICAgIC8vIEZvbGxvdyBwbGF5ZXJcclxuICAgIC8vIFJldXNlIGdsb2JhbExpZ2h0Vmlld01hdHJpeFxyXG4gICAgY29uc3QgbGlnaHRWaWV3TWF0cml4ID0gZ2xvYmFsTGlnaHRWaWV3TWF0cml4O1xyXG4gICAgY29uc3Qgc2hhZG93RGlzdCA9IDUwO1xyXG4gICAgY29uc3QgbGlnaHRDYW1Qb3MgPSB2ZWMzLmZyb21WYWx1ZXMoXHJcbiAgICAgICAgY2FtZXJhUG9zaXRpb25bMF0gKyBzdW5EaXJbMF0gKiBzaGFkb3dEaXN0LFxyXG4gICAgICAgIGNhbWVyYVBvc2l0aW9uWzFdICsgc3VuRGlyWzFdICogc2hhZG93RGlzdCxcclxuICAgICAgICBjYW1lcmFQb3NpdGlvblsyXSArIHN1bkRpclsyXSAqIHNoYWRvd0Rpc3RcclxuICAgICk7XHJcbiAgICBtYXQ0Lmxvb2tBdChsaWdodFZpZXdNYXRyaXgsIGxpZ2h0Q2FtUG9zLCBjYW1lcmFQb3NpdGlvbiwgdmVjMy5mcm9tVmFsdWVzKDAsIDEsIDApKTtcclxuXHJcbiAgICBjb25zdCBsaWdodFByb2plY3Rpb25NYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xyXG4gICAgY29uc3Qgb3J0aG9TaXplID0gNjA7XHJcbiAgICBtYXQ0Lm9ydGhvKGxpZ2h0UHJvamVjdGlvbk1hdHJpeCwgLW9ydGhvU2l6ZSwgb3J0aG9TaXplLCAtb3J0aG9TaXplLCBvcnRob1NpemUsIDEuMCwgMjAwKTtcclxuXHJcbiAgICBjb25zdCBsaWdodFZpZXdQcm9qZWN0aW9uTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcclxuICAgIG1hdDQubXVsdGlwbHkobGlnaHRWaWV3UHJvamVjdGlvbk1hdHJpeCwgbGlnaHRQcm9qZWN0aW9uTWF0cml4LCBsaWdodFZpZXdNYXRyaXgpO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBVbmlmb3Jtc1xyXG4gICAgY29uc3QgdW5pZm9ybURhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHVuaWZvcm1CdWZmZXJTaXplIC8gNCk7XHJcbiAgICAvLyAwLTE1OiBNVlAgKFVudXNlZClcclxuICAgIC8vIDE2LTMxOiBDYW0gVmlld1Byb2pcclxuICAgIHVuaWZvcm1EYXRhLnNldCh2aWV3UHJvamVjdGlvbk1hdHJpeCwgMTYpO1xyXG4gICAgLy8gMzItNDc6IExpZ2h0IFZpZXdQcm9qXHJcbiAgICB1bmlmb3JtRGF0YS5zZXQobGlnaHRWaWV3UHJvamVjdGlvbk1hdHJpeCwgMzIpO1xyXG4gICAgLy8gNDgtNTE6IExpZ2h0IERpciAoeHl6LCBwYWQpXHJcbiAgICB1bmlmb3JtRGF0YS5zZXQoW3N1bkRpclswXSwgc3VuRGlyWzFdLCBzdW5EaXJbMl0sIDBdLCA0OCk7XHJcbiAgICAvLyA1Mi01NTogTGlnaHQgQ29sb3JcclxuICAgIHVuaWZvcm1EYXRhLnNldChbbGlnaHRDb2xvclswXSwgbGlnaHRDb2xvclsxXSwgbGlnaHRDb2xvclsyXSwgMS4wXSwgNTIpO1xyXG4gICAgLy8gNTYtNTk6IEFtYmllbnQgQ29sb3JcclxuICAgIHVuaWZvcm1EYXRhLnNldChbYW1iaWVudENvbG9yWzBdLCBhbWJpZW50Q29sb3JbMV0sIGFtYmllbnRDb2xvclsyXSwgMS4wXSwgNTYpO1xyXG4gICAgLy8gNjAtNjM6IFNreSBDb2xvciAoZm9yIGZvZylcclxuICAgIHVuaWZvcm1EYXRhLnNldChbY3VycmVudFNreVswXSwgY3VycmVudFNreVsxXSwgY3VycmVudFNreVsyXSwgMS4wXSwgNjApO1xyXG4gICAgLy8gNjQtNjc6IENhbWVyYSBQb3NpdGlvblxyXG4gICAgdW5pZm9ybURhdGEuc2V0KFtjYW1lcmFQb3NpdGlvblswXSwgY2FtZXJhUG9zaXRpb25bMV0sIGNhbWVyYVBvc2l0aW9uWzJdLCAxLjBdLCA2NCk7XHJcblxyXG4gICAgLy8gNjgtNzE6IG51bVRvcmNoZXMgKHUzMikgKyBwYWRkaW5nICh2ZWMzPHUzMj4pXHJcbiAgICBjb25zdCBuZWFyZXN0VG9yY2hlcyA9IGdldE5lYXJlc3RUb3JjaGVzKHBsYXllclBvc2l0aW9uLCBNQVhfVE9SQ0hfTElHSFRTKTtcclxuICAgIHVuaWZvcm1EYXRhLnNldChbbmVhcmVzdFRvcmNoZXMubGVuZ3RoLCAwLCAwLCAwXSwgNjgpOyAvLyBudW1Ub3JjaGVzICsgcGFkZGluZ1xyXG5cclxuICAgIC8vIDcyKzogVG9yY2ggcG9zaXRpb25zICgxNiAqIHZlYzQ8ZjMyPiA9IDY0IGZsb2F0cylcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTUFYX1RPUkNIX0xJR0hUUzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gNzIgKyAoaSAqIDQpO1xyXG4gICAgICAgIGlmIChpIDwgbmVhcmVzdFRvcmNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvcmNoID0gbmVhcmVzdFRvcmNoZXNbaV07XHJcbiAgICAgICAgICAgIHVuaWZvcm1EYXRhLnNldChbdG9yY2hbMF0sIHRvcmNoWzFdLCB0b3JjaFsyXSwgMS4wXSwgb2Zmc2V0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1bmlmb3JtRGF0YS5zZXQoWzAsIDAsIDAsIDBdLCBvZmZzZXQpOyAvLyBFbXB0eSBzbG90XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih1bmlmb3JtQnVmZmVyLCAwLCB1bmlmb3JtRGF0YSk7XHJcblxyXG4gICAgLy8gQ3VsbGluZyBVcGRhdGUgVHJpZ2dlclxyXG4gICAgLy8gUmVidWlsZCB3b3JsZCBpZiBjYW1lcmEgbW92ZWQvcm90YXRlZCBzaWduaWZpY2FudGx5P1xyXG4gICAgLy8gVXNpbmcgaW50ZXJuYWwgdGhyb3R0bGUgb2YgNCBibG9ja3MgZGlzdGFuY2Ugb3IgMC4xIHJhZCByb3RhdGlvbi5cclxuICAgIHJlYnVpbGRXb3JsZChmYWxzZSk7XHJcblxyXG5cclxuICAgIC8vIERyYXcgU2t5IFNwcml0ZXMgKFN1bi9Nb29uKVxyXG4gICAgY29uc3Qgc2t5RGlzdCA9IDgwLjA7XHJcbiAgICBjb25zdCBzdW5Qb3MgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgdmVjMy5zY2FsZShzdW5Qb3MsIHN1bkRpciwgc2t5RGlzdCk7XHJcbiAgICB2ZWMzLmFkZChzdW5Qb3MsIHN1blBvcywgY2FtZXJhUG9zaXRpb24pO1xyXG5cclxuICAgIGNvbnN0IG1vb25Qb3MgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgdmVjMy5zY2FsZShtb29uUG9zLCBzdW5EaXIsIC1za3lEaXN0KTsgLy8gT3Bwb3NpdGUgdG8gc3VuXHJcbiAgICB2ZWMzLmFkZChtb29uUG9zLCBtb29uUG9zLCBjYW1lcmFQb3NpdGlvbik7XHJcblxyXG4gICAgY29uc3QgY29tbWFuZEVuY29kZXIgPSBkZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcclxuXHJcbiAgICAvLyAxLiBTaGFkb3cgUGFzc1xyXG4gICAgaWYgKCFjaGtTaGFkb3dzIHx8IGNoa1NoYWRvd3MuY2hlY2tlZCkge1xyXG4gICAgICAgIGNvbnN0IHNoYWRvd1Bhc3MgPSBjb21tYW5kRW5jb2Rlci5iZWdpblJlbmRlclBhc3Moe1xyXG4gICAgICAgICAgICBjb2xvckF0dGFjaG1lbnRzOiBbXSxcclxuICAgICAgICAgICAgZGVwdGhTdGVuY2lsQXR0YWNobWVudDoge1xyXG4gICAgICAgICAgICAgICAgdmlldzogc2hhZG93RGVwdGhUZXh0dXJlLmNyZWF0ZVZpZXcoKSxcclxuICAgICAgICAgICAgICAgIGRlcHRoQ2xlYXJWYWx1ZTogMS4wLFxyXG4gICAgICAgICAgICAgICAgZGVwdGhMb2FkT3A6ICdjbGVhcicsXHJcbiAgICAgICAgICAgICAgICBkZXB0aFN0b3JlT3A6ICdzdG9yZScsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzaGFkb3dQYXNzLnNldFBpcGVsaW5lKHNoYWRvd1BpcGVsaW5lKTtcclxuICAgICAgICBzaGFkb3dQYXNzLnNldEJpbmRHcm91cCgwLCBzaGFkb3dCaW5kR3JvdXBSZWFsKTtcclxuICAgICAgICBzaGFkb3dQYXNzLnNldFZlcnRleEJ1ZmZlcigwLCB2ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICAgIHNoYWRvd1Bhc3Muc2V0VmVydGV4QnVmZmVyKDEsIGluc3RhbmNlQnVmZmVyKTtcclxuICAgICAgICBzaGFkb3dQYXNzLmRyYXcoMzYsIE1hdGgubWluKGN1cnJlbnRJbnN0YW5jZUNvdW50LCBtYXhJbnN0YW5jZXMpKTtcclxuICAgICAgICBzaGFkb3dQYXNzLmVuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIE1haW4gUGFzc1xyXG4gICAgY29uc3QgdGV4dHVyZVZpZXcgPSBjb250ZXh0Py5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKTtcclxuICAgIGNvbnN0IHJlbmRlclBhc3NEZXNjcmlwdG9yOiBHUFVSZW5kZXJQYXNzRGVzY3JpcHRvciA9IHtcclxuICAgICAgICBjb2xvckF0dGFjaG1lbnRzOiBbe1xyXG4gICAgICAgICAgICB2aWV3OiB0ZXh0dXJlVmlldyEsXHJcbiAgICAgICAgICAgIC8vIGNsZWFyVmFsdWU6IHsgcjogMS4wLCBnOiAwLjAsIGI6IDEuMCwgYTogMS4wIH0sXHJcbiAgICAgICAgICAgIGNsZWFyVmFsdWU6IHsgcjogY3VycmVudFNreVswXSwgZzogY3VycmVudFNreVsxXSwgYjogY3VycmVudFNreVsyXSwgYTogMS4wIH0sXHJcbiAgICAgICAgICAgIGxvYWRPcDogJ2NsZWFyJywgc3RvcmVPcDogJ3N0b3JlJyxcclxuICAgICAgICB9XSxcclxuICAgICAgICBkZXB0aFN0ZW5jaWxBdHRhY2htZW50OiB7XHJcbiAgICAgICAgICAgIHZpZXc6IGRlcHRoVGV4dHVyZS5jcmVhdGVWaWV3KCksXHJcbiAgICAgICAgICAgIGRlcHRoQ2xlYXJWYWx1ZTogMS4wLCBkZXB0aExvYWRPcDogJ2NsZWFyJywgZGVwdGhTdG9yZU9wOiAnc3RvcmUnLFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGFzc0VuY29kZXIgPSBjb21tYW5kRW5jb2Rlci5iZWdpblJlbmRlclBhc3MocmVuZGVyUGFzc0Rlc2NyaXB0b3IpO1xyXG5cclxuICAgIC8vIERyYXcgV29ybGQgKFRlcnJhaW4pXHJcbiAgICBwYXNzRW5jb2Rlci5zZXRQaXBlbGluZShwaXBlbGluZSk7XHJcbiAgICBwYXNzRW5jb2Rlci5zZXRCaW5kR3JvdXAoMCwgYmluZEdyb3VwKTtcclxuICAgIHBhc3NFbmNvZGVyLnNldFZlcnRleEJ1ZmZlcigwLCB2ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgcGFzc0VuY29kZXIuc2V0VmVydGV4QnVmZmVyKDEsIGluc3RhbmNlQnVmZmVyKTtcclxuICAgIHBhc3NFbmNvZGVyLmRyYXcoMzYsIE1hdGgubWluKGN1cnJlbnRJbnN0YW5jZUNvdW50LCBtYXhJbnN0YW5jZXMpKTtcclxuXHJcbiAgICAvLyBEcmF3IE91dGxpbmUgLSBSRU1PVkVEIChEdXBsaWNhdGUgcGFzcywgY2F1c2luZyB2aXN1YWwgZ2xpdGNoZXMpXHJcbiAgICAvLyBXZSB1c2UgdGhlIEhpZ2hpZ2h0IEJveCBsb2dpYyBiZWxvdyBpbnN0ZWFkLlxyXG5cclxuICAgIC8vIERyYXcgRW50aXRpZXMgKFN1bi9Nb29uL1NwaWRlci9QYXJ0aWNsZXMvVE5UKVxyXG4gICAgY29uc3QgcUlkID0gWzAsIDAsIDAsIDFdIGFzIHVua25vd24gYXMgYW55O1xyXG5cclxuICAgIHNpbXBsZVJlbmRlcmVyLnN0YXJ0RnJhbWUocGFzc0VuY29kZXIsIHZpZXdQcm9qZWN0aW9uTWF0cml4KTtcclxuICAgIC8vIFN1biAmIE1vb25cclxuICAgIHNpbXBsZVJlbmRlcmVyLmRyYXdDdWJlKGRldmljZSwgcGFzc0VuY29kZXIsIHN1blBvcywgcUlkLCB2ZWMzLmZyb21WYWx1ZXMoNSwgNSwgNSksIHZlYzQuZnJvbVZhbHVlcygxLCAxLCAwLCAxKSk7XHJcbiAgICBzaW1wbGVSZW5kZXJlci5kcmF3Q3ViZShkZXZpY2UsIHBhc3NFbmNvZGVyLCBtb29uUG9zLCBxSWQsIHZlYzMuZnJvbVZhbHVlcyg0LCA0LCA0KSwgdmVjNC5mcm9tVmFsdWVzKDAuOSwgMC45LCAxLCAxKSk7XHJcblxyXG4gICAgLy8gU3BpZGVyXHJcbiAgICBzcGlkZXIuZHJhdyhkZXZpY2UsIHBhc3NFbmNvZGVyLCBzaW1wbGVSZW5kZXJlciwgaXNSaWRpbmcpO1xyXG5cclxuICAgIC8vIFBsYXllciBNb2RlbFxyXG4gICAgaWYgKGlzUmlkaW5nIHx8IGlzVGhpcmRQZXJzb25PbkZvb3QpIHtcclxuICAgICAgICAvLyBEcmF3IFBsYXllclxyXG4gICAgICAgIGlmIChpc1JpZGluZykge1xyXG4gICAgICAgICAgICAvLyBDb25zdGFudCBzbmFwIHRvIHNwaWRlciBiYWNrXHJcbiAgICAgICAgICAgIHZlYzMuY29weShwbGF5ZXJQb3NpdGlvbiwgc3BpZGVyLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgcGxheWVyUG9zaXRpb25bMV0gKz0gMC44OyAvLyBTaXQgb24gYmFjayAoTG93ZXJlZCBmcm9tIDEuOClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExvZ2ljIGZpeDogV2hlbiByaWRpbmcsIEZPUkNFIGlzTW92aW5nIHRvIGZhbHNlIHRvIHN0b3Agd2Fsa2luZyBhbmltYXRpb25cclxuICAgICAgICBjb25zdCBpc1dhbGtpbmdJbnB1dCA9IChrZXlzWydLZXlXJ10gfHwga2V5c1snS2V5UyddIHx8IGtleXNbJ0tleUEnXSB8fCBrZXlzWydLZXlEJ10pO1xyXG4gICAgICAgIGNvbnN0IHNob3VsZEFuaW1hdGVXYWxrID0gaXNSaWRpbmcgPyBmYWxzZSA6IGlzV2Fsa2luZ0lucHV0O1xyXG5cclxuICAgICAgICBwbGF5ZXJNb2RlbC5kcmF3KGRldmljZSwgcGFzc0VuY29kZXIsIHNpbXBsZVJlbmRlcmVyLCBwbGF5ZXJQb3NpdGlvbiwgY2FtZXJhWWF3LCBjYW1lcmFQaXRjaCwgc2hvdWxkQW5pbWF0ZVdhbGssIHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCwgaXNSaWRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnRpY2xlc1xyXG4gICAgcGFydGljbGVTeXN0ZW0uZHJhdyhkZXZpY2UsIHBhc3NFbmNvZGVyLCBzaW1wbGVSZW5kZXJlcik7XHJcblxyXG4gICAgLy8gVE5UXHJcbiAgICBjb25zdCB3aGl0ZUNvbG9yID0gdmVjNC5mcm9tVmFsdWVzKDEwLCAxMCwgMTAsIDEpO1xyXG4gICAgY29uc3QgdG50Q29sb3IgPSB2ZWM0LmZyb21WYWx1ZXMoMSwgMSwgMSwgMSk7XHJcbiAgICBmb3IgKGxldCB0bnQgb2YgYWN0aXZlVE5Ucykge1xyXG4gICAgICAgIGNvbnN0IGZsYXNoID0gTWF0aC5zaW4ocGVyZm9ybWFuY2Uubm93KCkgLyA1MCAqICg0LjAgLSB0bnQudGltZXIpKSA+IDAuNTtcclxuICAgICAgICBzaW1wbGVSZW5kZXJlci5kcmF3Q3ViZShkZXZpY2UsIHBhc3NFbmNvZGVyLCB0bnQucG9zaXRpb24sIHFJZCwgdG50LnNjYWxlLCBmbGFzaCA/IHdoaXRlQ29sb3IgOiB0bnRDb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyBQaWNrdXBzXHJcbiAgICBwaWNrdXBTeXN0ZW0uZHJhdyhkZXZpY2UsIHBhc3NFbmNvZGVyLCBzaW1wbGVSZW5kZXJlcik7XHJcblxyXG4gICAgLy8gSGlnaGxpZ2h0IEJveCAoT3V0bGluZSkgLSB1c2luZyBTaW1wbGVSZW5kZXJlciBhcyB0cmFuc3BhcmVudCBibGFjayBib3hcclxuICAgIGlmIChjdXJyZW50SGl0KSB7XHJcbiAgICAgICAgLy8gU2xpZ2h0bHkgbGFyZ2VyIHRoYW4gYmxvY2sgdG8gcHJldmVudCBaLWZpZ2h0aW5nXHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSB2ZWMzLmZyb21WYWx1ZXMoMS4wMSwgMS4wMSwgMS4wMSk7XHJcbiAgICAgICAgY29uc3QgcG9zID0gdmVjMy5jbG9uZShjdXJyZW50SGl0LnBvaW50KTsgLy8gVGhpcyBpcyB1c3VhbGx5IHRoZSBjZW50ZXIgaWYgcmF5Y2FzdCByZXR1cm5zIGNlbnRlcj8gXHJcbiAgICAgICAgLy8gV2FpdCwgUmF5Y2FzdC5wb2ludCBpcyB0aGUgSU5URVJTRUNUSU9OIHBvaW50IG9yIEJMT0NLIGNlbnRlcj9cclxuICAgICAgICAvLyBSYXljYXN0IHVzdWFsbHkgcmV0dXJucyBIaXQgUG9pbnQuIFxyXG4gICAgICAgIC8vIFdlIG5lZWQgdGhlIEJMT0NLIGNlbnRlciBmb3IgdGhlIGJveC5cclxuICAgICAgICAvLyBjdXJyZW50SGl0IGxvZ2ljIGluIGByYXljYXN0YCB1c3VhbGx5IHJldHVybnMgYHBvaW50YCBhcyBpbnRlcnNlY3Rpb24sIGJ1dCB3ZSBuZWVkIHRoZSBibG9jayBjb29yZGluYXRlLlxyXG4gICAgICAgIC8vIExldCdzIGFzc3VtZSBmb3Igbm93IHdlIG5lZWQgdG8gcm91bmQgYHBvaW50YD8gXHJcbiAgICAgICAgLy8gQ2hlY2tpbmcgcmF5Y2FzdCB1c2FnZTogYGNvbnN0IHB4ID0gTWF0aC5yb3VuZChjdXJyZW50SGl0LnBvaW50WzBdKWAuXHJcbiAgICAgICAgLy8gQWN0dWFsbHksIGxldCdzIGxvb2sgYXQgYHJheWNhc3RgIGxvZ2ljIGxhdGVyIGlmIG5lZWRlZC4gXHJcbiAgICAgICAgLy8gRm9yIG5vdywgbGV0J3MgYXNzdW1lIGBjdXJyZW50SGl0LnBvaW50YCBJUyB0aGUgaGl0IHBvaW50LCB3aGljaCBtaWdodCBiZSBvbiB0aGUgZmFjZS5cclxuICAgICAgICAvLyBXZSB3YW50IHRoZSBibG9jayBjdWJlIGNlbnRlci5cclxuICAgICAgICAvLyBJZiBgY3VycmVudEhpdC5wb2ludGAgaXMgdGhlIGZhY2UtaGl0LCB3ZSBuZWVkIHRvIGZsb29yL3JvdW5kIHRvIGdldCBibG9jayBjZW50ZXI/XHJcbiAgICAgICAgLy8gVXN1YWxseSByYXljYXN0IHJldHVybnMgeyBwb2ludCwgbm9ybWFsLCAuLi4gfS5cclxuICAgICAgICAvLyBMZXQncyBjaGVjayBob3cgdGhlIG9sZCBvdXRsaW5lIHdvcmtlZDogYG91dGxpbmVEYXRhLnNldChjdXJyZW50SGl0LnBvaW50KWAuXHJcbiAgICAgICAgLy8gVGhlIHNoYWRlciBwcm9iYWJseSBleHBhbmRlZCBpdD8gXHJcbiAgICAgICAgLy8gTGV0J3MgYXNzdW1lIGBjdXJyZW50SGl0LnBvaW50YCBpcyB0aGUgYmxvY2sgY2VudGVyIGZvciBub3csIG9yIHVzZSB0aGUgYGVtcHR5YCBwcm9wZXJ0eSBuZWlnaGJvcj9cclxuICAgICAgICAvLyBMZXQncyBqdXN0IHVzZSBgY3VycmVudEhpdC5wb2ludGAgYnV0IGFzc3VtZSBpdCBuZWVkcyB0byBiZSBibG9jay1hbGlnbmVkP1xyXG4gICAgICAgIC8vIEFjdHVhbGx5LCByYXljYXN0aW5nIHVzdWFsbHkgcG9wdWxhdGVzIGBjdXJyZW50SGl0YCB3aXRoIHRoZSBgcG9pbnRgIG9mIGludGVyc2VjdGlvbi5cclxuICAgICAgICAvLyBUbyBoaWdobGlnaHQgdGhlIGJsb2NrLCB3ZSBuZWVkIGBmbG9vcihwb2ludCAtIG5vcm1hbCAqIDAuMDEpICsgMC41YC5cclxuICAgICAgICAvLyBMZXQncyBqdXN0IHRyeSB1c2luZyB0aGUgcG9pbnQgZm9yIG5vdy5cclxuXHJcbiAgICAgICAgLy8gVXNlIGEgYmxhY2sgc2VtaS10cmFuc3BhcmVudCBib3hcclxuICAgICAgICBjb25zdCBvdXRsaW5lQ29sb3IgPSB2ZWM0LmZyb21WYWx1ZXMoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAvLyBXZSBuZWVkIHRvIHNuYXAgdG8gYmxvY2sgY2VudGVyLlxyXG4gICAgICAgIC8vIEJhc2VkIG9uIGBjaGVja0NvbGxpc2lvbmAsIGJsb2NrcyBhcmUgYXQgaW50ZWdlciBjb29yZHMuXHJcbiAgICAgICAgLy8gU28gY2VudGVyIGlzIGBmbG9vcih4KSswLjVgLlxyXG4gICAgICAgIC8vIExldCdzIHNuYXAgaXQuXHJcbiAgICAgICAgLy8gQnV0IGBjdXJyZW50SGl0LnBvaW50YCBtaWdodCBiZSB0aGUgc3BlY2lmaWMgSElUIHBvaW50LlxyXG4gICAgICAgIC8vIFRoZSB0ZXh0IGVhcmxpZXIgc2FpZCBgY29uc3QgcHggPSBNYXRoLnJvdW5kKGN1cnJlbnRIaXQucG9pbnRbMF0pYC5cclxuICAgICAgICAvLyBJZiB3ZSB3YW50IHRvIGhpZ2hsaWdodCB0aGUgYmxvY2sgKmNvbnRhaW5pbmcqIHRoZSBoaXQgKG9yIHRoZSBibG9jayAqaGl0Kik6XHJcbiAgICAgICAgLy8gVHlwaWNhbGx5OiBibG9ja1BvcyA9IGZsb29yKGhpdFBvcyAtIG5vcm1hbCAqIGVwc2lsb24pLlxyXG4gICAgICAgIC8vIExldCdzIGFwcHJveGltYXRlIGJ5IGBNYXRoLnJvdW5kYCBidXQgMC41IG9mZnNldD9cclxuICAgICAgICAvLyBTdGFuZGFyZCBNaW5lY3JhZnQgYmxvY2tzIGFyZSBjZW50ZXJlZCBhdCBYLjUsIFkuNSwgWi41PyBPciBYLjA/XHJcbiAgICAgICAgLy8gTXkgYG1ha2VDdWJlYCB2ZXJ0aWNlcyBhcmUgMC4uMSByYW5nZS4gQ2VudGVyZWQgb3B0aW9uYWxseT9cclxuICAgICAgICAvLyBgY3ViZVZlcnRpY2VzYCAobGluZXMgMTQ3KykgYXJlIDAuLjEuIFxyXG4gICAgICAgIC8vIFNvIGJsb2NrIGF0IGludGVnZXIgYCh4LHkseilgIG9jY3VwaWVzIGBbeCwgeCsxXWAuIENlbnRlciBpcyBgeCswLjVgLlxyXG4gICAgICAgIC8vIFNpbXBsZVJlbmRlcmVyIGRyYXdzIGNlbnRlcmVkIGN1YmVzP1xyXG4gICAgICAgIC8vIGBTaW1wbGVSZW5kZXJlcmAgdmVydGljZXM6IGAtMC41YCB0byBgMC41YCAoTGluZXMgNzArIGluIHJlbmRlcmVyLnRzKS5cclxuICAgICAgICAvLyBTbyB5ZXMsIGl0IGRyYXdzIGNlbnRlcmVkIGF0IGBwb3NpdGlvbmAuXHJcbiAgICAgICAgLy8gU28gd2UgbmVlZCB0byBwYXNzIGBmbG9vcihoaXQpICsgMC41YC5cclxuXHJcbiAgICAgICAgY29uc3QgYnggPSBjdXJyZW50SGl0LnBvaW50WzBdICsgMC41O1xyXG4gICAgICAgIGNvbnN0IGJ5ID0gY3VycmVudEhpdC5wb2ludFsxXSArIDAuNTtcclxuICAgICAgICBjb25zdCBieiA9IGN1cnJlbnRIaXQucG9pbnRbMl0gKyAwLjU7XHJcblxyXG4gICAgICAgIGNvbnN0IGJveFBvcyA9IHZlYzMuZnJvbVZhbHVlcyhieCwgYnksIGJ6KTtcclxuICAgICAgICBzaW1wbGVSZW5kZXJlci5kcmF3Q3ViZShkZXZpY2UsIHBhc3NFbmNvZGVyLCBib3hQb3MsIHFJZCwgc2NhbGUsIG91dGxpbmVDb2xvcik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwYXNzRW5jb2Rlci5lbmQoKTtcclxuXHJcbiAgICBkZXZpY2UucXVldWUuc3VibWl0KFtjb21tYW5kRW5jb2Rlci5maW5pc2goKV0pO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcclxufVxyXG5cclxuLy8gVXBkYXRlIENyb3NzaGFpciB0byBhIERPVFxyXG5jcm9zc2hhaXIuaW5uZXJIVE1MID0gYFxyXG48ZGl2IHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6OHB4OyB0b3A6OHB4OyB3aWR0aDo0cHg7IGhlaWdodDo0cHg7IGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwxLjApOyBib3JkZXItcmFkaXVzOjUwJTsgYm94LXNoYWRvdzogMCAwIDJweCAjMDAwO1wiPjwvZGl2PlxyXG5gO1xyXG5cclxuZnJhbWUoKTtcclxuIiwiLy8gU2ltcGxlIDJEIE5vaXNlIEltcGxlbWVudGF0aW9uXHJcbi8vIEJhc2VkIG9uIGEgc2ltcGxlIHZhbHVlIG5vaXNlIG9yIHBlcmxpbiBhcHByb3hpbWF0aW9uXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZnJhYyh4OiBudW1iZXIpIHsgcmV0dXJuIHggLSBNYXRoLmZsb29yKHgpOyB9XHJcbmV4cG9ydCBmdW5jdGlvbiBtaXgoYTogbnVtYmVyLCBiOiBudW1iZXIsIHQ6IG51bWJlcikgeyByZXR1cm4gYSArIChiIC0gYSkgKiB0OyB9XHJcblxyXG4vLyBIYXNoIGZ1bmN0aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNoKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCBhID0gTWF0aC5zaW4oeCAqIDEyLjk4OTggKyB5ICogNzguMjMzKSAqIDQzNzU4LjU0NTM7XHJcbiAgICByZXR1cm4gYSAtIE1hdGguZmxvb3IoYSk7XHJcbn1cclxuXHJcbi8vIDJEIE5vaXNlXHJcbmV4cG9ydCBmdW5jdGlvbiBub2lzZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBpeCA9IE1hdGguZmxvb3IoeCk7XHJcbiAgICBjb25zdCBpeSA9IE1hdGguZmxvb3IoeSk7XHJcbiAgICBjb25zdCBmeCA9IGZyYWMoeCk7XHJcbiAgICBjb25zdCBmeSA9IGZyYWMoeSk7XHJcblxyXG4gICAgLy8gU21vb3Roc3RlcCBpbnRlcnBvbGF0aW9uXHJcbiAgICBjb25zdCB0eCA9IGZ4ICogZnggKiAoMy4wIC0gMi4wICogZngpO1xyXG4gICAgY29uc3QgdHkgPSBmeSAqIGZ5ICogKDMuMCAtIDIuMCAqIGZ5KTtcclxuXHJcbiAgICBjb25zdCBhID0gaGFzaChpeCwgaXkpO1xyXG4gICAgY29uc3QgYiA9IGhhc2goaXggKyAxLCBpeSk7XHJcbiAgICBjb25zdCBjID0gaGFzaChpeCwgaXkgKyAxKTtcclxuICAgIGNvbnN0IGQgPSBoYXNoKGl4ICsgMSwgaXkgKyAxKTtcclxuXHJcbiAgICByZXR1cm4gbWl4KG1peChhLCBiLCB0eCksIG1peChjLCBkLCB0eCksIHR5KTtcclxufVxyXG5cclxuLy8gRkJNIChGcmFjdGFsIEJyb3duaWFuIE1vdGlvbikgZm9yIGJldHRlciB0ZXJyYWluXHJcbmV4cG9ydCBmdW5jdGlvbiBmYm0oeDogbnVtYmVyLCB5OiBudW1iZXIsIG9jdGF2ZXM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBsZXQgdmFsdWUgPSAwO1xyXG4gICAgbGV0IGFtcGxpdHVkZSA9IDAuNTtcclxuICAgIGxldCBmcmVxdWVuY3kgPSAxLjA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvY3RhdmVzOyBpKyspIHtcclxuICAgICAgICB2YWx1ZSArPSBub2lzZSh4ICogZnJlcXVlbmN5LCB5ICogZnJlcXVlbmN5KSAqIGFtcGxpdHVkZTtcclxuICAgICAgICBhbXBsaXR1ZGUgKj0gMC41O1xyXG4gICAgICAgIGZyZXF1ZW5jeSAqPSAyLjA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgdmVjMywgdmVjNCB9IGZyb20gJ2dsLW1hdHJpeCc7XHJcbmltcG9ydCB7IFNpbXBsZVJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXJlcic7XHJcblxyXG5jbGFzcyBQYXJ0aWNsZSB7XHJcbiAgICBwb3NpdGlvbjogdmVjMyA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICB2ZWxvY2l0eTogdmVjMyA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICBjb2xvcjogdmVjNCA9IHZlYzQuY3JlYXRlKCk7XHJcbiAgICBsaWZlOiBudW1iZXIgPSAwO1xyXG4gICAgbWF4TGlmZTogbnVtYmVyID0gMDtcclxuICAgIHNpemU6IG51bWJlciA9IDAuMjtcclxuICAgIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFydGljbGVTeXN0ZW0ge1xyXG4gICAgcHJpdmF0ZSBwYXJ0aWNsZXM6IFBhcnRpY2xlW10gPSBbXTtcclxuICAgIHByaXZhdGUgbWF4UGFydGljbGVzID0gMTAwMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4UGFydGljbGVzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVtaXQocG9zOiB2ZWMzLCBjb3VudDogbnVtYmVyLCBjb2xvckJhc2U6IHZlYzQsIHNwZWVkOiBudW1iZXIgPSA1LjApIHtcclxuICAgICAgICBsZXQgc3Bhd25lZCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnBhcnRpY2xlcykge1xyXG4gICAgICAgICAgICBpZiAoIXAuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2ZWMzLmNvcHkocC5wb3NpdGlvbiwgcG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSYW5kb20gVmVsb2NpdHlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ4ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ5ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ6ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMjtcclxuICAgICAgICAgICAgICAgIHZlYzMuc2V0KHAudmVsb2NpdHksIHJ4LCByeSwgcnopO1xyXG4gICAgICAgICAgICAgICAgdmVjMy5ub3JtYWxpemUocC52ZWxvY2l0eSwgcC52ZWxvY2l0eSk7XHJcbiAgICAgICAgICAgICAgICB2ZWMzLnNjYWxlKHAudmVsb2NpdHksIHAudmVsb2NpdHksIE1hdGgucmFuZG9tKCkgKiBzcGVlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ29sb3IgdmFyaWF0aW9uXHJcbiAgICAgICAgICAgICAgICB2ZWM0LmNvcHkocC5jb2xvciwgY29sb3JCYXNlKTtcclxuICAgICAgICAgICAgICAgIHAuY29sb3JbMF0gKz0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4xO1xyXG4gICAgICAgICAgICAgICAgcC5jb2xvclsxXSArPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjE7XHJcbiAgICAgICAgICAgICAgICBwLmNvbG9yWzJdICs9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuMTtcclxuXHJcbiAgICAgICAgICAgICAgICBwLm1heExpZmUgPSAxLjAgKyBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgcC5saWZlID0gcC5tYXhMaWZlO1xyXG4gICAgICAgICAgICAgICAgcC5zaXplID0gMC4xICsgTWF0aC5yYW5kb20oKSAqIDAuMjtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGF3bmVkKys7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3Bhd25lZCA+PSBjb3VudCkgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucGFydGljbGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChwLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgcC5saWZlIC09IGR0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHAubGlmZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBHcmF2aXR5XHJcbiAgICAgICAgICAgICAgICBwLnZlbG9jaXR5WzFdIC09IDkuOCAqIGR0O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1vdmVcclxuICAgICAgICAgICAgICAgIHZlYzMuc2NhbGVBbmRBZGQocC5wb3NpdGlvbiwgcC5wb3NpdGlvbiwgcC52ZWxvY2l0eSwgZHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZsb29yIGNoZWNrIChzaW1wbGUpXHJcbiAgICAgICAgICAgICAgICAvLyBpZihwLnBvc2l0aW9uWzFdIDwgLTYwKSBwLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoZGV2aWNlOiBHUFVEZXZpY2UsIHBhc3NFbmNvZGVyOiBHUFVSZW5kZXJQYXNzRW5jb2RlciwgcmVuZGVyZXI6IFNpbXBsZVJlbmRlcmVyKSB7XHJcbiAgICAgICAgLy8gVXNlIGEgdGVtcCBxdWF0IGZvciBubyByb3RhdGlvblxyXG4gICAgICAgIGNvbnN0IHEgPSBbMCwgMCwgMCwgMV0gYXMgdW5rbm93biBhcyBhbnk7IC8vIHF1YXQuY3JlYXRlKClcclxuICAgICAgICBjb25zdCBzID0gdmVjMy5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnBhcnRpY2xlcykge1xyXG4gICAgICAgICAgICBpZiAocC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHZlYzMuc2V0KHMsIHAuc2l6ZSwgcC5zaXplLCBwLnNpemUpO1xyXG4gICAgICAgICAgICAgICAgLy8gQWxwaGEgZmFkZVxyXG4gICAgICAgICAgICAgICAgcC5jb2xvclszXSA9IHAubGlmZSAvIHAubWF4TGlmZTtcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLmRyYXdDdWJlKGRldmljZSwgcGFzc0VuY29kZXIsIHAucG9zaXRpb24sIHEsIHMsIHAuY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHZlYzMsIHZlYzQsIHF1YXQgfSBmcm9tICdnbC1tYXRyaXgnO1xyXG5pbXBvcnQgeyBTaW1wbGVSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyZXInO1xyXG5cclxuaW50ZXJmYWNlIFBpY2t1cCB7XHJcbiAgICBwb3NpdGlvbjogdmVjMztcclxuICAgIHZlbG9jaXR5OiB2ZWMzO1xyXG4gICAgdHlwZTogbnVtYmVyOyAvLyBCbG9jayB0eXBlICgwPUNvYmJsZSwgMT1EaXJ0LCBldGMuKVxyXG4gICAgcm90YXRpb246IHZlYzM7IC8vIEV1bGVyIGFuZ2xlc1xyXG4gICAgdGltZXI6IG51bWJlcjsgLy8gTGlmZXNwYW4gb3IgYm91bmNlIHRpbWVyXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQaWNrdXBTeXN0ZW0ge1xyXG4gICAgcGlja3VwczogUGlja3VwW10gPSBbXTtcclxuXHJcbiAgICAvLyBQaHlzaWNzIENvbmZpZ1xyXG4gICAgcHJpdmF0ZSBncmF2aXR5ID0gMjAuMDtcclxuICAgIHByaXZhdGUgYm91bmNlWSA9IDAuNTtcclxuICAgIHByaXZhdGUgY29sbGVjdGlvblJhZGl1cyA9IDEuNTtcclxuXHJcbiAgICBzcGF3bihwb3NpdGlvbjogdmVjMywgdHlwZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gUmFuZG9tIHZlbG9jaXR5IHNwcmVhZFxyXG4gICAgICAgIGNvbnN0IHZlbCA9IHZlYzMuZnJvbVZhbHVlcyhcclxuICAgICAgICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNC4wLFxyXG4gICAgICAgICAgICA0LjAgKyBNYXRoLnJhbmRvbSgpICogMi4wLCAvLyBVcHdhcmQgcG9wXHJcbiAgICAgICAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDQuMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMucGlja3Vwcy5wdXNoKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHZlYzMuY2xvbmUocG9zaXRpb24pLFxyXG4gICAgICAgICAgICB2ZWxvY2l0eTogdmVsLFxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICByb3RhdGlvbjogdmVjMy5mcm9tVmFsdWVzKE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJLCBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSwgMCksXHJcbiAgICAgICAgICAgIHRpbWVyOiAwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIsIHBsYXllclBvczogdmVjMywgaW52ZW50b3J5OiBudW1iZXJbXSwgaW52ZW50b3J5Q291bnRzOiBudW1iZXJbXSwgZ2V0VGVycmFpbkhlaWdodDogKHBvczogdmVjMykgPT4gbnVtYmVyIHwgbnVsbCkge1xyXG4gICAgICAgIC8vIFJldmVyc2UgbG9vcCBmb3IgcmVtb3ZhbFxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnBpY2t1cHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMucGlja3Vwc1tpXTtcclxuXHJcbiAgICAgICAgICAgIC8vIDEuIFBoeXNpY3NcclxuICAgICAgICAgICAgcC52ZWxvY2l0eVsxXSAtPSB0aGlzLmdyYXZpdHkgKiBkdDtcclxuXHJcbiAgICAgICAgICAgIC8vIE1vdmVcclxuICAgICAgICAgICAgdmVjMy5zY2FsZUFuZEFkZChwLnBvc2l0aW9uLCBwLnBvc2l0aW9uLCBwLnZlbG9jaXR5LCBkdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBGcmljdGlvbi9EYW1waW5nXHJcbiAgICAgICAgICAgIHAudmVsb2NpdHlbMF0gKj0gMC45NTtcclxuICAgICAgICAgICAgcC52ZWxvY2l0eVsyXSAqPSAwLjk1O1xyXG5cclxuICAgICAgICAgICAgLy8gUm90YXRpb25cclxuICAgICAgICAgICAgcC5yb3RhdGlvblsxXSArPSAyLjAgKiBkdDtcclxuXHJcbiAgICAgICAgICAgIC8vIENvbGxpc2lvbiB3aXRoIEdyb3VuZFxyXG4gICAgICAgICAgICAvLyBncm91bmRZIHJldHVybnMgdGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgdG9wbW9zdCBzb2xpZCBibG9ja1xyXG4gICAgICAgICAgICAvLyBUaGUgdG9wIHN1cmZhY2UgaXMgYXQgZ3JvdW5kWSArIDEuMFxyXG4gICAgICAgICAgICBjb25zdCBncm91bmRZID0gZ2V0VGVycmFpbkhlaWdodChwLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgaWYgKGdyb3VuZFkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1cmZhY2VZID0gZ3JvdW5kWSArIDEuMDtcclxuICAgICAgICAgICAgICAgIGlmIChwLnBvc2l0aW9uWzFdIDwgc3VyZmFjZVkgKyAwLjEyNSkgeyAvLyAwLjEyNSA9IGhhbGYgb2YgcGlja3VwIHNpemUgKDAuMjUpXHJcbiAgICAgICAgICAgICAgICAgICAgcC5wb3NpdGlvblsxXSA9IHN1cmZhY2VZICsgMC4xMjU7XHJcbiAgICAgICAgICAgICAgICAgICAgcC52ZWxvY2l0eVsxXSAqPSAtMC41OyAvLyBCb3VuY2VcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMocC52ZWxvY2l0eVsxXSkgPCAxLjApIHAudmVsb2NpdHlbMV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAyLiBDb2xsZWN0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSB2ZWMzLmRpc3RhbmNlKHAucG9zaXRpb24sIHBsYXllclBvcyk7XHJcbiAgICAgICAgICAgIC8vIE1hZ25ldCBlZmZlY3QgaWYgY2xvc2VcclxuICAgICAgICAgICAgaWYgKGRpc3QgPCA1LjApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpciA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB2ZWMzLnN1YnRyYWN0KGRpciwgcGxheWVyUG9zLCBwLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIHZlYzMubm9ybWFsaXplKGRpciwgZGlyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hZ25ldFN0cmVuZ3RoID0gKDUuMCAtIGRpc3QpICogMTAuMDtcclxuICAgICAgICAgICAgICAgIHZlYzMuc2NhbGVBbmRBZGQocC52ZWxvY2l0eSwgcC52ZWxvY2l0eSwgZGlyLCBtYWduZXRTdHJlbmd0aCAqIGR0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3QgPCB0aGlzLmNvbGxlY3Rpb25SYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIENvbGxlY3QhXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRvSW52ZW50b3J5KHAudHlwZSwgaW52ZW50b3J5LCBpbnZlbnRvcnlDb3VudHMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrdXBzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRUb0ludmVudG9yeSh0eXBlOiBudW1iZXIsIGludmVudG9yeTogbnVtYmVyW10sIGNvdW50czogbnVtYmVyW10pIHtcclxuICAgICAgICAvLyAxLiBDaGVjayBmb3IgZXhpc3Rpbmcgc3RhY2tcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludmVudG9yeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaW52ZW50b3J5W2ldID09PSB0eXBlICYmIGNvdW50c1tpXSA8IDY0KSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHNbaV0rKztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAyLiBFbXB0eSBzbG90XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnZlbnRvcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvdW50c1tpXSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5W2ldID0gdHlwZTtcclxuICAgICAgICAgICAgICAgIGNvdW50c1tpXSA9IDE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRnVsbD8gZGlzY2FyZC5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGRldmljZTogR1BVRGV2aWNlLCBwYXNzRW5jb2RlcjogR1BVUmVuZGVyUGFzc0VuY29kZXIsIHJlbmRlcmVyOiBTaW1wbGVSZW5kZXJlcikge1xyXG4gICAgICAgIGNvbnN0IHNjYWxlID0gdmVjMy5mcm9tVmFsdWVzKDAuMjUsIDAuMjUsIDAuMjUpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgdGhpcy5waWNrdXBzKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvciA9IHZlYzQuZnJvbVZhbHVlcygwLjUsIDAuNSwgMC41LCAxKTtcclxuICAgICAgICAgICAgLy8gTWF0Y2ggZXhhY3QgYmxvY2sgdGV4dHVyZXMgZnJvbSAzRCB3b3JsZFxyXG4gICAgICAgICAgICBpZiAocC50eXBlID09PSAwKSBjb2xvciA9IHZlYzQuZnJvbVZhbHVlcygwLjUzLCAwLjUzLCAwLjUzLCAxKTsgLy8gU3RvbmUgKGNvYmJsZXN0b25lIGdyYXkpXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHAudHlwZSA9PT0gMSkgY29sb3IgPSB2ZWM0LmZyb21WYWx1ZXMoMC41NSwgMC4zNSwgMC4yNSwgMSk7IC8vIERpcnQgKGJyb3duKVxyXG4gICAgICAgICAgICBlbHNlIGlmIChwLnR5cGUgPT09IDIpIGNvbG9yID0gdmVjNC5mcm9tVmFsdWVzKDAuNDUsIDAuNywgMC4zLCAxKTsgLy8gR3Jhc3MgKGJyaWdodCBncmVlbilcclxuICAgICAgICAgICAgZWxzZSBpZiAocC50eXBlID09PSA0KSBjb2xvciA9IHZlYzQuZnJvbVZhbHVlcygwLjksIDAuMTUsIDAuMTUsIDEpOyAvLyBUTlQgKGJyaWdodCByZWQpXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHAudHlwZSA9PT0gNSkgY29sb3IgPSB2ZWM0LmZyb21WYWx1ZXMoMS4wLCAwLjY1LCAwLjAsIDEpOyAvLyBUb3JjaCAoYnJpZ2h0IG9yYW5nZSlcclxuXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLmRyYXdDdWJlRXVsZXIoZGV2aWNlLCBwYXNzRW5jb2RlciwgcC5wb3NpdGlvbiwgcC5yb3RhdGlvbiwgc2NhbGUsIGNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbmltcG9ydCB7IHZlYzMsIG1hdDQsIHZlYzQsIHF1YXQgfSBmcm9tICdnbC1tYXRyaXgnO1xyXG5pbXBvcnQgeyBTaW1wbGVSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllck1vZGVsIHtcclxuICAgIC8vIEJvZHkgUGFydHMgKFJlbGF0aXZlIHRvIHBsYXllciBvcmlnaW4pXHJcbiAgICAvLyBTaW1wbGUgU3RldmU6XHJcbiAgICAvLyBIZWFkOiA4eDh4OFxyXG4gICAgLy8gQm9keTogOHgxMng0XHJcbiAgICAvLyBBcm1zOiA0eDEyeDRcclxuICAgIC8vIExlZ3M6IDR4MTJ4NFxyXG5cclxuICAgIC8vIFVzaW5nIHNpbXBsZSBib3hlcy4gXHJcbiAgICAvLyBTY2FsZSBmYWN0b3I6IDEgdW5pdCA9IDEgbWV0ZXIgYXBwcm94LiBcclxuICAgIC8vIFBsYXllciBoZWlnaHQgfjEuOG0uIFxyXG4gICAgLy8gSGVhZCB+MC4yNW0sIEJvZHkgfjAuNzVtLCBMZWdzIH4wLjc1bS5cclxuXHJcbiAgICBkcmF3KGRldmljZTogR1BVRGV2aWNlLCBwYXNzRW5jb2RlcjogR1BVUmVuZGVyUGFzc0VuY29kZXIsIHJlbmRlcmVyOiBTaW1wbGVSZW5kZXJlciwgcG9zaXRpb246IHZlYzMsIHlhdzogbnVtYmVyLCBwaXRjaDogbnVtYmVyLCBpc01vdmluZzogYm9vbGVhbiwgdGltZTogbnVtYmVyLCBpc1JpZGluZzogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgLy8gQ29sb3JzXHJcbiAgICAgICAgY29uc3Qgc2tpbkNvbG9yID0gdmVjNC5mcm9tVmFsdWVzKDAuOSwgMC43LCAwLjYsIDEuMCk7XHJcbiAgICAgICAgY29uc3Qgc2hpcnRDb2xvciA9IHZlYzQuZnJvbVZhbHVlcygwLjIsIDAuNiwgMC44LCAxLjApOyAvLyBDeWFuIHNoaXJ0XHJcbiAgICAgICAgY29uc3QgcGFudHNDb2xvciA9IHZlYzQuZnJvbVZhbHVlcygwLjIsIDAuMiwgMC42LCAxLjApOyAvLyBCbHVlIHBhbnRzXHJcblxyXG4gICAgICAgIGNvbnN0IHFJZCA9IFswLCAwLCAwLCAxXSBhcyB1bmtub3duIGFzIGFueTsgLy8gSWRlbnRpdHkgUXVhdGVybmlvbiAod2UnbGwgZG8gcm90YXRpb25zIG1hbnVhbGx5IHZpYSBwb3NpdGlvbnMvbWF0cmljZXMgaWYgbmVlZGVkLCBvciBqdXN0IHBhc3MgcUlkIGlmIHdlIHByZS1jYWxjIHdvcmxkIHBvcylcclxuXHJcbiAgICAgICAgLy8gSGVscGVyIHRvIHRyYW5zZm9ybSBsb2NhbCBwYXJ0IHRvIHdvcmxkXHJcbiAgICAgICAgLy8gQnV0IFNpbXBsZVJlbmRlcmVyIHRha2VzIHdvcmxkIFBvc2l0aW9uIGFuZCBTY2FsZS4gUm90YXRpb24gaXMgbGltaXRlZCAoQUFCQikuXHJcbiAgICAgICAgLy8gV2FpdCwgU2ltcGxlUmVuZGVyZXIgYGRyYXdDdWJlYCB0YWtlcyBgcG9zaXRpb25gLCBgcm90YXRpb25gIChxdWF0KSwgYHNjYWxlYC5cclxuICAgICAgICAvLyBTbyB3ZSBjYW4gcm90YXRlIHBhcnRzIVxyXG5cclxuICAgICAgICAvLyBQbGF5ZXIgUXVhdGVybmlvbiAoWWF3KVxyXG4gICAgICAgIGNvbnN0IHFQbGF5ZXIgPSBxdWF0LmNyZWF0ZSgpO1xyXG4gICAgICAgIHF1YXQuZnJvbUV1bGVyKHFQbGF5ZXIsIDAsIHlhdyAqICgxODAgLyBNYXRoLlBJKSwgMCk7IC8vIHlhdyBpbiByYWRpYW5zIHRvIGRlZ3JlZXM/IGdsLW1hdHJpeCB1c2VzIGRlZ3JlZXM/IFxyXG4gICAgICAgIC8vIFdhaXQsIGdsLW1hdHJpeCBmcm9tRXVsZXIgdXN1YWxseSB0YWtlcyBkZWdyZWVzLiBgeWF3YCBpcyByYWRpYW5zIGluIG1haW4udHM/IFxyXG4gICAgICAgIC8vIEluIG1haW4udHM6IGBjYW1lcmFZYXcgKz0gZS5tb3ZlbWVudFggKiBtb3VzZVNlbnNpdGl2aXR5O2AuIEl0J3MgcmFkaWFucy5cclxuICAgICAgICAvLyBTbyBjb252ZXJ0IHRvIGRlZ3JlZXMuXHJcblxyXG4gICAgICAgIC8vIEFjdHVhbGx5LCBsZXQncyBjaGVjayBTaW1wbGVSZW5kZXJlci4gSXQgdGFrZXMgYSBzdG9yZWQgcm90YXRpb24/XHJcbiAgICAgICAgLy8gUmVuZGVyZXIgc2lnbmF0dXJlOiBgZHJhd0N1YmUoZGV2aWNlLCBwYXNzRW5jb2RlciwgcG9zLCByb3QsIHNjYWxlLCBjb2xvcilgXHJcbiAgICAgICAgLy8gYHJvdGAgaXMgYSBxdWF0ZXJuaW9uLlxyXG5cclxuICAgICAgICAvLyBBbmltYXRpb25cclxuICAgICAgICBjb25zdCB3YWxrU3BlZWQgPSAxMC4wO1xyXG4gICAgICAgIGNvbnN0IHN3aW5nID0gaXNNb3ZpbmcgPyBNYXRoLnNpbih0aW1lICogd2Fsa1NwZWVkKSAqIDAuNSA6IDA7XHJcblxyXG4gICAgICAgIC8vIC0tLSBIRUFEIC0tLVxyXG4gICAgICAgIC8vIDAuMjUgc2l6ZVxyXG4gICAgICAgIGNvbnN0IGhlYWRQb3NMb2NhbCA9IHZlYzMuZnJvbVZhbHVlcygwLCAxLjUsIDApOyAvLyAxLjVtIG9mZiBncm91bmRcclxuICAgICAgICBjb25zdCBoZWFkUG9zV29ybGQgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgICAgIHZlYzMudHJhbnNmb3JtUXVhdChoZWFkUG9zV29ybGQsIGhlYWRQb3NMb2NhbCwgcVBsYXllcik7XHJcbiAgICAgICAgdmVjMy5hZGQoaGVhZFBvc1dvcmxkLCBoZWFkUG9zV29ybGQsIHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gSGVhZCBSb3RhdGlvbiAoWWF3ICsgUGl0Y2gpXHJcbiAgICAgICAgY29uc3QgcUhlYWQgPSBxdWF0LmNyZWF0ZSgpO1xyXG4gICAgICAgIHF1YXQuZnJvbUV1bGVyKHFIZWFkLCBwaXRjaCAqICgxODAgLyBNYXRoLlBJKSwgeWF3ICogKDE4MCAvIE1hdGguUEkpLCAwKTtcclxuICAgICAgICAvLyBQaXRjaCBpcyBYLCBZYXcgaXMgWS5cclxuXHJcbiAgICAgICAgcmVuZGVyZXIuZHJhd0N1YmUoZGV2aWNlLCBwYXNzRW5jb2RlciwgaGVhZFBvc1dvcmxkLCBxSGVhZCwgdmVjMy5mcm9tVmFsdWVzKDAuNSwgMC41LCAwLjUpLCBza2luQ29sb3IpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gLS0tIEJPRFkgLS0tXHJcbiAgICAgICAgY29uc3QgYm9keVBvc0xvY2FsID0gdmVjMy5mcm9tVmFsdWVzKDAsIDAuOSwgMCk7XHJcbiAgICAgICAgY29uc3QgYm9keVBvc1dvcmxkID0gdmVjMy5jcmVhdGUoKTtcclxuICAgICAgICB2ZWMzLnRyYW5zZm9ybVF1YXQoYm9keVBvc1dvcmxkLCBib2R5UG9zTG9jYWwsIHFQbGF5ZXIpO1xyXG4gICAgICAgIHZlYzMuYWRkKGJvZHlQb3NXb3JsZCwgYm9keVBvc1dvcmxkLCBwb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLmRyYXdDdWJlKGRldmljZSwgcGFzc0VuY29kZXIsIGJvZHlQb3NXb3JsZCwgcVBsYXllciwgdmVjMy5mcm9tVmFsdWVzKDAuNSwgMC43LCAwLjI1KSwgc2hpcnRDb2xvcik7XHJcblxyXG5cclxuICAgICAgICAvLyAtLS0gUklHSFQgQVJNIC0tLVxyXG4gICAgICAgIGNvbnN0IHJBcm1Mb2MgPSB2ZWMzLmZyb21WYWx1ZXMoMC41LCAwLjksIDApO1xyXG4gICAgICAgIGNvbnN0IHJBcm1Xb3JsZCA9IHZlYzMuY3JlYXRlKCk7XHJcblxyXG4gICAgICAgIC8vIFN3aW5nXHJcbiAgICAgICAgY29uc3QgcVJBcm0gPSBxdWF0LmNyZWF0ZSgpO1xyXG4gICAgICAgIHF1YXQuZnJvbUV1bGVyKHFSQXJtLCBzd2luZyAqICgxODAgLyBNYXRoLlBJKSwgeWF3ICogKDE4MCAvIE1hdGguUEkpLCAwKTtcclxuXHJcbiAgICAgICAgdmVjMy50cmFuc2Zvcm1RdWF0KHJBcm1Xb3JsZCwgckFybUxvYywgcVBsYXllcik7IC8vIFN0YXJ0IGF0IHNob3VsZGVyXHJcbiAgICAgICAgdmVjMy5hZGQockFybVdvcmxkLCByQXJtV29ybGQsIHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIuZHJhd0N1YmUoZGV2aWNlLCBwYXNzRW5jb2RlciwgckFybVdvcmxkLCBxUkFybSwgdmVjMy5mcm9tVmFsdWVzKDAuMiwgMC43LCAwLjIpLCBza2luQ29sb3IpO1xyXG5cclxuICAgICAgICAvLyAtLS0gTEVGVCBBUk0gLS0tXHJcbiAgICAgICAgY29uc3QgbEFybUxvYyA9IHZlYzMuZnJvbVZhbHVlcygtMC41LCAwLjksIDApO1xyXG4gICAgICAgIGNvbnN0IGxBcm1Xb3JsZCA9IHZlYzMuY3JlYXRlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHFMQXJtID0gcXVhdC5jcmVhdGUoKTtcclxuICAgICAgICBxdWF0LmZyb21FdWxlcihxTEFybSwgLXN3aW5nICogKDE4MCAvIE1hdGguUEkpLCB5YXcgKiAoMTgwIC8gTWF0aC5QSSksIDApOyAvLyBPcHBvc2l0ZSBzd2luZ1xyXG5cclxuICAgICAgICB2ZWMzLnRyYW5zZm9ybVF1YXQobEFybVdvcmxkLCBsQXJtTG9jLCBxUGxheWVyKTtcclxuICAgICAgICB2ZWMzLmFkZChsQXJtV29ybGQsIGxBcm1Xb3JsZCwgcG9zaXRpb24pO1xyXG5cclxuICAgICAgICByZW5kZXJlci5kcmF3Q3ViZShkZXZpY2UsIHBhc3NFbmNvZGVyLCBsQXJtV29ybGQsIHFMQXJtLCB2ZWMzLmZyb21WYWx1ZXMoMC4yLCAwLjcsIDAuMiksIHNraW5Db2xvcik7XHJcblxyXG5cclxuICAgICAgICBpZiAoaXNSaWRpbmcpIHtcclxuICAgICAgICAgICAgLy8gU2l0dGluZyBQb3NlXHJcbiAgICAgICAgICAgIC8vIFJvdGF0ZSBsZWdzIGZvcndhcmQgODAgZGVncmVlc1xyXG4gICAgICAgICAgICAvLyBQaXRjaCBpcyBYLlxyXG4gICAgICAgICAgICAvLyBCdXQgd2UgYWxzbyBuZWVkIHRvIHJlc3BlY3QgWWF3IChQbGF5ZXIgUm90YXRpb24pLlxyXG4gICAgICAgICAgICAvLyBTbyB3ZSB3YW50OiBSb3RhdGUgYnkgWWF3IEZpcnN0IChZKSwgdGhlbiBQaXRjaCAoWCkuXHJcbiAgICAgICAgICAgIC8vIGdsLW1hdHJpeCBmcm9tRXVsZXIgb3JkZXIgaXMgdXN1YWxseSBYLCBZLCBaIG9yIFosIFksIFguIERlZmF1bHRzIHRvIFpZWCB1c3VhbGx5P1xyXG4gICAgICAgICAgICAvLyBMZXQncyBtYW51YWxseSBjb25zdHJ1Y3Q6XHJcbiAgICAgICAgICAgIC8vIExlZyBzaG91bGQgYmUgZm9yd2FyZCByZWxhdGl2ZSB0byBib2R5LlxyXG5cclxuICAgICAgICAgICAgLy8gUmlnaHQgTGVnXHJcbiAgICAgICAgICAgIGNvbnN0IHJMZWdMb2MgPSB2ZWMzLmZyb21WYWx1ZXMoMC4xNSwgMC41LCAwLjQpOyAvLyBIaWdoZXIgYW5kIGZvcndhcmRcclxuICAgICAgICAgICAgY29uc3QgckxlZ1dvcmxkID0gdmVjMy5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNpdHRpbmcgcm90YXRpb246IC04MCBkZWcgWCAobG9jYWwpXHJcbiAgICAgICAgICAgIGNvbnN0IHFTaXQgPSBxdWF0LmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICBxdWF0LmZyb21FdWxlcihxU2l0LCAtODAsIDAsIDApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcUxlZ0ZpbmFsID0gcXVhdC5jcmVhdGUoKTtcclxuICAgICAgICAgICAgcXVhdC5tdWx0aXBseShxTGVnRmluYWwsIHFQbGF5ZXIsIHFTaXQpOyAvLyBBcHBseSBQbGF5ZXIgWWF3LCB0aGVuIFNpdCBQaXRjaFxyXG5cclxuICAgICAgICAgICAgdmVjMy50cmFuc2Zvcm1RdWF0KHJMZWdXb3JsZCwgckxlZ0xvYywgcVBsYXllcik7XHJcbiAgICAgICAgICAgIHZlYzMuYWRkKHJMZWdXb3JsZCwgckxlZ1dvcmxkLCBwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICByZW5kZXJlci5kcmF3Q3ViZShkZXZpY2UsIHBhc3NFbmNvZGVyLCByTGVnV29ybGQsIHFMZWdGaW5hbCwgdmVjMy5mcm9tVmFsdWVzKDAuMiwgMC42LCAwLjIpLCBwYW50c0NvbG9yKTtcclxuXHJcbiAgICAgICAgICAgIC8vIExlZnQgTGVnXHJcbiAgICAgICAgICAgIGNvbnN0IGxMZWdMb2MgPSB2ZWMzLmZyb21WYWx1ZXMoLTAuMTUsIDAuNSwgMC40KTtcclxuICAgICAgICAgICAgY29uc3QgbExlZ1dvcmxkID0gdmVjMy5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHZlYzMudHJhbnNmb3JtUXVhdChsTGVnV29ybGQsIGxMZWdMb2MsIHFQbGF5ZXIpO1xyXG4gICAgICAgICAgICB2ZWMzLmFkZChsTGVnV29ybGQsIGxMZWdXb3JsZCwgcG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgcmVuZGVyZXIuZHJhd0N1YmUoZGV2aWNlLCBwYXNzRW5jb2RlciwgbExlZ1dvcmxkLCBxTGVnRmluYWwsIHZlYzMuZnJvbVZhbHVlcygwLjIsIDAuNiwgMC4yKSwgcGFudHNDb2xvcik7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFdhbGtpbmcgLyBTdGFuZGluZyBQb3NlIChFeGlzdGluZylcclxuICAgICAgICAgICAgLy8gLS0tIFJJR0hUIExFRyAtLS1cclxuICAgICAgICAgICAgY29uc3QgckxlZ0xvYyA9IHZlYzMuZnJvbVZhbHVlcygwLjE1LCAwLjMsIDApOyAvLyBDZW50ZXIgb2YgbGVnXHJcbiAgICAgICAgICAgIGNvbnN0IHJMZWdXb3JsZCA9IHZlYzMuY3JlYXRlKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBxUkxlZyA9IHF1YXQuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIHF1YXQuZnJvbUV1bGVyKHFSTGVnLCAtc3dpbmcgKiAoMTgwIC8gTWF0aC5QSSksIHlhdyAqICgxODAgLyBNYXRoLlBJKSwgMCk7IC8vIE9wcG9zaXRlIHRvIFJpZ2h0IEFybVxyXG5cclxuICAgICAgICAgICAgdmVjMy50cmFuc2Zvcm1RdWF0KHJMZWdXb3JsZCwgckxlZ0xvYywgcVBsYXllcik7XHJcbiAgICAgICAgICAgIHZlYzMuYWRkKHJMZWdXb3JsZCwgckxlZ1dvcmxkLCBwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICByZW5kZXJlci5kcmF3Q3ViZShkZXZpY2UsIHBhc3NFbmNvZGVyLCByTGVnV29ybGQsIHFSTGVnLCB2ZWMzLmZyb21WYWx1ZXMoMC4yLCAwLjYsIDAuMiksIHBhbnRzQ29sb3IpO1xyXG5cclxuICAgICAgICAgICAgLy8gLS0tIExFRlQgTEVHIC0tLVxyXG4gICAgICAgICAgICBjb25zdCBsTGVnTG9jID0gdmVjMy5mcm9tVmFsdWVzKC0wLjE1LCAwLjMsIDApO1xyXG4gICAgICAgICAgICBjb25zdCBsTGVnV29ybGQgPSB2ZWMzLmNyZWF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcUxMZWcgPSBxdWF0LmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICBxdWF0LmZyb21FdWxlcihxTExlZywgc3dpbmcgKiAoMTgwIC8gTWF0aC5QSSksIHlhdyAqICgxODAgLyBNYXRoLlBJKSwgMCk7XHJcblxyXG4gICAgICAgICAgICB2ZWMzLnRyYW5zZm9ybVF1YXQobExlZ1dvcmxkLCBsTGVnTG9jLCBxUGxheWVyKTtcclxuICAgICAgICAgICAgdmVjMy5hZGQobExlZ1dvcmxkLCBsTGVnV29ybGQsIHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLmRyYXdDdWJlKGRldmljZSwgcGFzc0VuY29kZXIsIGxMZWdXb3JsZCwgcUxMZWcsIHZlYzMuZnJvbVZhbHVlcygwLjIsIDAuNiwgMC4yKSwgcGFudHNDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IG1hdDQsIHZlYzMsIHZlYzQsIHF1YXQgfSBmcm9tICdnbC1tYXRyaXgnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCBzaGFkZXJDb2RlIGZyb20gJy4vc2hhZGVycy53Z3NsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVSZW5kZXJlciB7XHJcbiAgICBkZXZpY2U6IEdQVURldmljZTtcclxuICAgIHBpcGVsaW5lOiBHUFVSZW5kZXJQaXBlbGluZTtcclxuICAgIHZlcnRleEJ1ZmZlcjogR1BVQnVmZmVyO1xyXG4gICAgdW5pZm9ybUJ1ZmZlcjogR1BVQnVmZmVyO1xyXG4gICAgYmluZEdyb3VwOiBHUFVCaW5kR3JvdXA7XHJcblxyXG4gICAgLy8gVGVtcCBtYXRyaWNlcyB0byBhdm9pZCBHQ1xyXG4gICAgcHJpdmF0ZSBtb2RlbE1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XHJcbiAgICBwcml2YXRlIHZpZXdQcm9qZWN0aW9uTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcclxuXHJcbiAgICAvLyBUZW1wIEZsb2F0MzJBcnJheSB0byBhdm9pZCBHQ1xyXG4gICAgcHJpdmF0ZSB1bmlmb3JtRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoMzYpOyAvLyAxNiArIDE2ICsgNFxyXG4gICAgcHJpdmF0ZSB0ZW1wUXVhdCA9IHF1YXQuY3JlYXRlKCk7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50T2Zmc2V0ID0gMDtcclxuICAgIHByaXZhdGUgbWF4RHJhd3MgPSAyNTY7XHJcbiAgICBwcml2YXRlIHVuaWZvcm1TdHJpZGUgPSAyNTY7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGV2aWNlOiBHUFVEZXZpY2UsIGZvcm1hdDogR1BVVGV4dHVyZUZvcm1hdCkge1xyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gZGV2aWNlO1xyXG5cclxuICAgICAgICAvLyAxLiBFeHBsaWNpdCBCaW5kIEdyb3VwIExheW91dCAoUmVxdWlyZWQgZm9yIER5bmFtaWMgT2Zmc2V0cylcclxuICAgICAgICBjb25zdCBiaW5kR3JvdXBMYXlvdXQgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwTGF5b3V0KHtcclxuICAgICAgICAgICAgZW50cmllczogW3tcclxuICAgICAgICAgICAgICAgIGJpbmRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBHUFVTaGFkZXJTdGFnZS5WRVJURVggfCBHUFVTaGFkZXJTdGFnZS5GUkFHTUVOVCxcclxuICAgICAgICAgICAgICAgIGJ1ZmZlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd1bmlmb3JtJyxcclxuICAgICAgICAgICAgICAgICAgICBoYXNEeW5hbWljT2Zmc2V0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkJpbmRpbmdTaXplOiAyNTZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gMi4gUGlwZWxpbmVcclxuICAgICAgICB0aGlzLnBpcGVsaW5lID0gZGV2aWNlLmNyZWF0ZVJlbmRlclBpcGVsaW5lKHtcclxuICAgICAgICAgICAgbGF5b3V0OiBkZXZpY2UuY3JlYXRlUGlwZWxpbmVMYXlvdXQoe1xyXG4gICAgICAgICAgICAgICAgYmluZEdyb3VwTGF5b3V0czogW2JpbmRHcm91cExheW91dF1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHZlcnRleDoge1xyXG4gICAgICAgICAgICAgICAgbW9kdWxlOiBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyQ29kZSB9KSxcclxuICAgICAgICAgICAgICAgIGVudHJ5UG9pbnQ6ICdlbnRpdHlfdnMnLFxyXG4gICAgICAgICAgICAgICAgYnVmZmVyczogW3tcclxuICAgICAgICAgICAgICAgICAgICBhcnJheVN0cmlkZTogMTIsIC8vIHZlYzMgcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogW3sgc2hhZGVyTG9jYXRpb246IDAsIG9mZnNldDogMCwgZm9ybWF0OiAnZmxvYXQzMngzJyB9XVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnJhZ21lbnQ6IHtcclxuICAgICAgICAgICAgICAgIG1vZHVsZTogZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlckNvZGUgfSksXHJcbiAgICAgICAgICAgICAgICBlbnRyeVBvaW50OiAnZW50aXR5X2ZzJyxcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHsgc3JjRmFjdG9yOiAnc3JjLWFscGhhJywgZHN0RmFjdG9yOiAnb25lLW1pbnVzLXNyYy1hbHBoYScsIG9wZXJhdGlvbjogJ2FkZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGE6IHsgc3JjRmFjdG9yOiAnb25lJywgZHN0RmFjdG9yOiAnb25lLW1pbnVzLXNyYy1hbHBoYScsIG9wZXJhdGlvbjogJ2FkZCcgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogJ3RyaWFuZ2xlLWxpc3QnLCBjdWxsTW9kZTogJ2JhY2snIH0sXHJcbiAgICAgICAgICAgIGRlcHRoU3RlbmNpbDoge1xyXG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZUVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkZXB0aENvbXBhcmU6ICdsZXNzJyxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ2RlcHRoMjRwbHVzJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAzLiBWZXJ0ZXggQnVmZmVyXHJcbiAgICAgICAgY29uc3QgdmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgLy8gRnJvbnRcclxuICAgICAgICAgICAgLTAuNSwgLTAuNSwgMC41LCAwLjUsIC0wLjUsIDAuNSwgMC41LCAwLjUsIDAuNSxcclxuICAgICAgICAgICAgLTAuNSwgLTAuNSwgMC41LCAwLjUsIDAuNSwgMC41LCAtMC41LCAwLjUsIDAuNSxcclxuICAgICAgICAgICAgLy8gQmFja1xyXG4gICAgICAgICAgICAtMC41LCAtMC41LCAtMC41LCAtMC41LCAwLjUsIC0wLjUsIDAuNSwgMC41LCAtMC41LFxyXG4gICAgICAgICAgICAtMC41LCAtMC41LCAtMC41LCAwLjUsIDAuNSwgLTAuNSwgMC41LCAtMC41LCAtMC41LFxyXG4gICAgICAgICAgICAvLyBUb3BcclxuICAgICAgICAgICAgLTAuNSwgMC41LCAtMC41LCAtMC41LCAwLjUsIDAuNSwgMC41LCAwLjUsIDAuNSxcclxuICAgICAgICAgICAgLTAuNSwgMC41LCAtMC41LCAwLjUsIDAuNSwgMC41LCAwLjUsIDAuNSwgLTAuNSxcclxuICAgICAgICAgICAgLy8gQm90dG9tXHJcbiAgICAgICAgICAgIC0wLjUsIC0wLjUsIC0wLjUsIDAuNSwgLTAuNSwgLTAuNSwgMC41LCAtMC41LCAwLjUsXHJcbiAgICAgICAgICAgIC0wLjUsIC0wLjUsIC0wLjUsIDAuNSwgLTAuNSwgMC41LCAtMC41LCAtMC41LCAwLjUsXHJcbiAgICAgICAgICAgIC8vIFJpZ2h0XHJcbiAgICAgICAgICAgIDAuNSwgLTAuNSwgLTAuNSwgMC41LCAwLjUsIC0wLjUsIDAuNSwgMC41LCAwLjUsXHJcbiAgICAgICAgICAgIDAuNSwgLTAuNSwgLTAuNSwgMC41LCAwLjUsIDAuNSwgMC41LCAtMC41LCAwLjUsXHJcbiAgICAgICAgICAgIC8vIExlZnRcclxuICAgICAgICAgICAgLTAuNSwgLTAuNSwgLTAuNSwgLTAuNSwgLTAuNSwgMC41LCAtMC41LCAwLjUsIDAuNSxcclxuICAgICAgICAgICAgLTAuNSwgLTAuNSwgLTAuNSwgLTAuNSwgMC41LCAwLjUsIC0wLjUsIDAuNSwgLTAuNSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcclxuICAgICAgICAgICAgc2l6ZTogdmVydGljZXMuYnl0ZUxlbmd0aCxcclxuICAgICAgICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlZFUlRFWCB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNULFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLnZlcnRleEJ1ZmZlciwgMCwgdmVydGljZXMpO1xyXG5cclxuICAgICAgICAvLyA0LiBVbmlmb3JtIEJ1ZmZlciAoTGFyZ2UpXHJcbiAgICAgICAgLy8gMjU2IGJ5dGVzIHBlciBlbnRpdHkgKiAyNTYgZW50aXRpZXMgbWF4ID0gNjRLQlxyXG4gICAgICAgIHRoaXMudW5pZm9ybUJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xyXG4gICAgICAgICAgICBzaXplOiB0aGlzLnVuaWZvcm1TdHJpZGUgKiB0aGlzLm1heERyYXdzLFxyXG4gICAgICAgICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNULFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyA1LiBCaW5kR3JvdXAgKFdpbmRvdzogMjU2IGJ5dGVzKVxyXG4gICAgICAgIHRoaXMuYmluZEdyb3VwID0gZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh7XHJcbiAgICAgICAgICAgIGxheW91dDogYmluZEdyb3VwTGF5b3V0LFxyXG4gICAgICAgICAgICBlbnRyaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgYmluZGluZzogMCxcclxuICAgICAgICAgICAgICAgIHJlc291cmNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiB0aGlzLnVuaWZvcm1CdWZmZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDI1NiAvLyBUaGUgc2l6ZSBvZiBPTkUgd2luZG93XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRGcmFtZShwYXNzRW5jb2RlcjogR1BVUmVuZGVyUGFzc0VuY29kZXIsIHZpZXdQcm9qZWN0aW9uTWF0cml4OiBtYXQ0KSB7XHJcbiAgICAgICAgcGFzc0VuY29kZXIuc2V0UGlwZWxpbmUodGhpcy5waXBlbGluZSk7XHJcbiAgICAgICAgcGFzc0VuY29kZXIuc2V0VmVydGV4QnVmZmVyKDAsIHRoaXMudmVydGV4QnVmZmVyKTtcclxuXHJcbiAgICAgICAgLy8gQ2FjaGUgVlBcclxuICAgICAgICBtYXQ0LmNvcHkodGhpcy52aWV3UHJvamVjdGlvbk1hdHJpeCwgdmlld1Byb2plY3Rpb25NYXRyaXgpO1xyXG5cclxuICAgICAgICAvLyBSZXNldCBPZmZzZXRcclxuICAgICAgICB0aGlzLmN1cnJlbnRPZmZzZXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdDdWJlKGRldmljZTogR1BVRGV2aWNlLCBwYXNzRW5jb2RlcjogR1BVUmVuZGVyUGFzc0VuY29kZXIsXHJcbiAgICAgICAgcG9zaXRpb246IHZlYzMsIHJvdGF0aW9uOiBxdWF0LCBzY2FsZTogdmVjMywgY29sb3I6IHZlYzQpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9mZnNldCA+PSB0aGlzLm1heERyYXdzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk1heCBlbnRpdHkgZHJhd3MgZXhjZWVkZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBVbmlmb3Jtc1xyXG4gICAgICAgIG1hdDQuZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZSh0aGlzLm1vZGVsTWF0cml4LCByb3RhdGlvbiwgcG9zaXRpb24sIHNjYWxlKTtcclxuXHJcbiAgICAgICAgLy8gUmV1c2UgcGVyc2lzdGVudCBGbG9hdDMyQXJyYXlcclxuICAgICAgICB0aGlzLnVuaWZvcm1EYXRhLnNldCh0aGlzLnZpZXdQcm9qZWN0aW9uTWF0cml4LCAwKTtcclxuICAgICAgICB0aGlzLnVuaWZvcm1EYXRhLnNldCh0aGlzLm1vZGVsTWF0cml4LCAxNik7XHJcbiAgICAgICAgdGhpcy51bmlmb3JtRGF0YS5zZXQoY29sb3IsIDMyKTtcclxuXHJcbiAgICAgICAgLy8gV3JpdGUgdG8gY3VycmVudCBzbG90XHJcbiAgICAgICAgY29uc3QgYnl0ZU9mZnNldCA9IHRoaXMuY3VycmVudE9mZnNldCAqIHRoaXMudW5pZm9ybVN0cmlkZTtcclxuICAgICAgICBkZXZpY2UucXVldWUud3JpdGVCdWZmZXIodGhpcy51bmlmb3JtQnVmZmVyLCBieXRlT2Zmc2V0LCB0aGlzLnVuaWZvcm1EYXRhKTtcclxuXHJcbiAgICAgICAgLy8gQmluZCB3aXRoIER5bmFtaWMgT2Zmc2V0XHJcbiAgICAgICAgcGFzc0VuY29kZXIuc2V0QmluZEdyb3VwKDAsIHRoaXMuYmluZEdyb3VwLCBbYnl0ZU9mZnNldF0pO1xyXG5cclxuICAgICAgICBwYXNzRW5jb2Rlci5kcmF3KDM2LCAxKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50T2Zmc2V0Kys7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGVscGVyIGZvciBzaW1wbGUgRXVsZXIgcm90YXRpb25cclxuICAgIGRyYXdDdWJlRXVsZXIoZGV2aWNlOiBHUFVEZXZpY2UsIHBhc3NFbmNvZGVyOiBHUFVSZW5kZXJQYXNzRW5jb2RlcixcclxuICAgICAgICBwb3NpdGlvbjogdmVjMywgcm90RXVsZXI6IHZlYzMsIHNjYWxlOiB2ZWMzLCBjb2xvcjogdmVjNCkge1xyXG4gICAgICAgIC8vIFJldXNlIHRlbXBRdWF0XHJcbiAgICAgICAgcXVhdC5mcm9tRXVsZXIodGhpcy50ZW1wUXVhdCwgcm90RXVsZXJbMF0gKiAxODAgLyBNYXRoLlBJLCByb3RFdWxlclsxXSAqIDE4MCAvIE1hdGguUEksIHJvdEV1bGVyWzJdICogMTgwIC8gTWF0aC5QSSk7XHJcbiAgICAgICAgdGhpcy5kcmF3Q3ViZShkZXZpY2UsIHBhc3NFbmNvZGVyLCBwb3NpdGlvbiwgdGhpcy50ZW1wUXVhdCwgc2NhbGUsIGNvbG9yKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuaW1wb3J0IHsgdmVjMywgcXVhdCwgbWF0NCwgdmVjNCB9IGZyb20gJ2dsLW1hdHJpeCc7XHJcbmltcG9ydCB7IHNvbHZlSUsgfSBmcm9tICcuL2lrJztcclxuaW1wb3J0IHsgU2ltcGxlUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcmVyJztcclxuXHJcbi8vIENvbnN0YW50cyAoU2NhbGVkIGRvd24gYnkgfjIwJSBmcm9tIHByZXZpb3VzIGdpYW50IHNpemUpXHJcbmNvbnN0IExFR19DT1VOVCA9IDg7XHJcbmNvbnN0IEJPRFlfSEVJR0hUID0gMy4yOyAgICAgLy8gNC4wICogMC44XHJcbmNvbnN0IFNURVBfRElTVEFOQ0UgPSAzLjI7ICAgLy8gNC4wICogMC44XHJcbmNvbnN0IFNURVBfSEVJR0hUID0gMS42OyAgICAgLy8gMi4wICogMC44XHJcbmNvbnN0IFNURVBfU1BFRUQgPSA0LjA7ICAgICAgLy8gS2VlcCBzcGVlZCBtdWx0aXBsaWVyICh2aXN1YWxseSBmYXN0ZXIgc3RyaWRlKVxyXG5cclxuLy8gTGVnIERpbWVuc2lvbnMgKFNjYWxlZCAwLjgpXHJcbmNvbnN0IENPWEFfTEVOID0gMC44O1xyXG5jb25zdCBGRU1VUl9MRU4gPSAyLjQ7XHJcbmNvbnN0IFRJQklBX0xFTiA9IDMuNjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGlkZXIge1xyXG4gICAgcG9zaXRpb246IHZlYzMgPSB2ZWMzLmZyb21WYWx1ZXMoMCwgMTAsIDApO1xyXG4gICAgdmVsb2NpdHk6IHZlYzMgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgcm90YXRpb246IHF1YXQgPSBxdWF0LmNyZWF0ZSgpO1xyXG4gICAgeWF3OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIExlZyBTdGF0ZVxyXG4gICAgbGVnVGFyZ2V0czogdmVjM1tdID0gW107IC8vIEN1cnJlbnQgd29ybGQgcG9zaXRpb24gb2YgZmVldFxyXG4gICAgbGVnU3RhcnQ6IHZlYzNbXSA9IFtdOyAgIC8vIFdoZXJlIGZvb3Qgc29ydCBvZiBzdGFydGVkIChmb3IgbGVycClcclxuICAgIGxlZ05leHQ6IHZlYzNbXSA9IFtdOyAgICAvLyBXaGVyZSBmb290IGlzIGdvaW5nXHJcbiAgICBsZWdQcm9ncmVzczogbnVtYmVyW10gPSBbXTsgLy8gMCB0byAxXHJcbiAgICBsZWdNb3Zpbmc6IGJvb2xlYW5bXSA9IFtdO1xyXG5cclxuICAgIC8vIFBoeXNpY3NcclxuICAgIGdyYXZpdHk6IG51bWJlciA9IDIwLjA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gSW5pdCBsZWdzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBMRUdfQ09VTlQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxlZ1RhcmdldHMucHVzaCh2ZWMzLmZyb21WYWx1ZXMoMCwgMCwgMCkpO1xyXG4gICAgICAgICAgICB0aGlzLmxlZ1N0YXJ0LnB1c2godmVjMy5mcm9tVmFsdWVzKDAsIDAsIDApKTtcclxuICAgICAgICAgICAgdGhpcy5sZWdOZXh0LnB1c2godmVjMy5mcm9tVmFsdWVzKDAsIDAsIDApKTtcclxuICAgICAgICAgICAgdGhpcy5sZWdQcm9ncmVzcy5wdXNoKDApO1xyXG4gICAgICAgICAgICB0aGlzLmxlZ01vdmluZy5wdXNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGlkZWFsIGZvb3QgcG9zaXRpb24gYmFzZWQgb24gY3VycmVudCBib2R5ICsgbGF5b3V0XHJcbiAgICBnZXRJZGVhbEZvb3RQb3MoaW5kZXg6IG51bWJlciwgY3VycmVudFBvczogdmVjMywgY3VycmVudFlhdzogbnVtYmVyKTogdmVjMyB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIDIpOyAvLyAwIHRvIDMgKEZyb250IHRvIEJhY2spXHJcbiAgICAgICAgY29uc3Qgc2lkZSA9IGluZGV4ICUgMiA9PT0gMCA/IDEgOiAtMTsgLy8gMSA9IExlZnQgKCtYKSwgLTEgPSBSaWdodCAoLVgpXHJcblxyXG4gICAgICAgIC8vIExheW91dCAoTG9jYWwgdG8gQ2VudGVyKVxyXG4gICAgICAgIC8vIFNjYWxlZCB2YWx1ZXMgKDAuOHgpXHJcbiAgICAgICAgLy8gWiBsb2NhbDogRm9yd2FyZC9CYWNrXHJcbiAgICAgICAgLy8gWCBsb2NhbDogTGVmdC9SaWdodCAoUmVhY2gpXHJcblxyXG4gICAgICAgIC8vIFogU3BhY2luZzogRnJvbnQgbGVncyBpbiBmcm9udCBvZiBoZWFkLCBtb3JlIHNwYWNpbmcgYmV0d2VlbiBhbGwgbGVnc1xyXG4gICAgICAgIC8vIEZyb250IGxlZ3Mgc2hvdWxkIGJlIGluIGZyb250IG9mIHRoZSB0aG9yYXgsIGJhY2sgbGVncyBiZWhpbmRcclxuICAgICAgICBjb25zdCB6VmFscyA9IFs0LjUsIDEuNSwgLTEuNSwgLTQuMF07XHJcblxyXG4gICAgICAgIC8vIFJlYWNoOiBNdWNoIHdpZGVyIHRvIHByZXZlbnQgY29sbGlzaW9ucywgZXNwZWNpYWxseSBtaWRkbGUgbGVnc1xyXG4gICAgICAgIC8vIEZyb250IGFuZCBiYWNrIHNsaWdodGx5IG5hcnJvd2VyLCBtaWRkbGUgbGVncyBleHRlbmRlZCBmb3Igc3BpZGVyIGFwcGVhcmFuY2VcclxuICAgICAgICBjb25zdCB4RGlzdCA9IFs0LjAsIDUuNSwgNS41LCA0LjBdO1xyXG5cclxuICAgICAgICBjb25zdCBseCA9IHNpZGUgKiB4RGlzdFtyb3ddO1xyXG4gICAgICAgIGNvbnN0IGx6ID0gelZhbHNbcm93XTtcclxuXHJcbiAgICAgICAgLy8gUm90YXRlIGxvY2FsIHRvIHdvcmxkIGFsaWduZWQgd2l0aCBib2R5XHJcbiAgICAgICAgLy8gQ1JJVElDQUwgRklYOiBFbnN1cmUgcm90YXRpb24gaXMgYXBwbGllZCB0byB0aGUgb2Zmc2V0IGNvcnJlY3RseVxyXG4gICAgICAgIGNvbnN0IHEgPSBxdWF0LmNyZWF0ZSgpO1xyXG4gICAgICAgIHF1YXQuZnJvbUV1bGVyKHEsIDAsIGN1cnJlbnRZYXcgKiAxODAgLyBNYXRoLlBJLCAwKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdmVjMy5mcm9tVmFsdWVzKGx4LCAwLCBseik7XHJcbiAgICAgICAgdmVjMy50cmFuc2Zvcm1RdWF0KG9mZnNldCwgb2Zmc2V0LCBxKTtcclxuXHJcbiAgICAgICAgLy8gSWRlYWwgZ3JvdW5kIHBsYW5lXHJcbiAgICAgICAgY29uc3QgZmluYWwgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgICAgIHZlYzMuYWRkKGZpbmFsLCBjdXJyZW50UG9zLCBvZmZzZXQpO1xyXG4gICAgICAgIGZpbmFsWzFdIC09IEJPRFlfSEVJR0hUO1xyXG4gICAgICAgIHJldHVybiBmaW5hbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlciwga2V5czogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0sIHRlcnJhaW5GbjogKHA6IHZlYzMpID0+IG51bWJlciB8IG51bGwpIHtcclxuICAgICAgICAvLyBDb250cm9sc1xyXG4gICAgICAgIGNvbnN0IHNwZWVkID0gNS4wOyAvLyBTY2FsZWQgZG93biBzbGlnaHRseSBmcm9tIDYuMFxyXG4gICAgICAgIGNvbnN0IHJvdFNwZWVkID0gMS41O1xyXG5cclxuICAgICAgICBsZXQgbW92ZSA9IDA7XHJcbiAgICAgICAgbGV0IHR1cm4gPSAwO1xyXG5cclxuICAgICAgICBpZiAoa2V5c1snS2V5VyddKSBtb3ZlICs9IDE7XHJcbiAgICAgICAgaWYgKGtleXNbJ0tleVMnXSkgbW92ZSAtPSAxO1xyXG4gICAgICAgIGlmIChrZXlzWydLZXlBJ10pIHR1cm4gKz0gMTtcclxuICAgICAgICBpZiAoa2V5c1snS2V5RCddKSB0dXJuIC09IDE7XHJcblxyXG4gICAgICAgIHRoaXMueWF3ICs9IHR1cm4gKiByb3RTcGVlZCAqIGR0O1xyXG5cclxuICAgICAgICBjb25zdCBmb3J3YXJkID0gdmVjMy5mcm9tVmFsdWVzKE1hdGguc2luKHRoaXMueWF3KSwgMCwgTWF0aC5jb3ModGhpcy55YXcpKTtcclxuICAgICAgICB2ZWMzLnNjYWxlQW5kQWRkKHRoaXMudmVsb2NpdHksIHZlYzMuY3JlYXRlKCksIGZvcndhcmQsIG1vdmUgKiBzcGVlZCk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBQb3NpdGlvblxyXG4gICAgICAgIHZlYzMuc2NhbGVBbmRBZGQodGhpcy5wb3NpdGlvbiwgdGhpcy5wb3NpdGlvbiwgdGhpcy52ZWxvY2l0eSwgZHQpO1xyXG5cclxuICAgICAgICAvLyBEYW1wXHJcbiAgICAgICAgdmVjMy5zY2FsZSh0aGlzLnZlbG9jaXR5LCB0aGlzLnZlbG9jaXR5LCAwLjApOyAvLyBGdWxsIGRhbXBcclxuXHJcbiAgICAgICAgLy8gTGVnIExvZ2ljIChHYWl0KVxyXG4gICAgICAgIGxldCBtb3ZpbmdDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBMRUdfQ09VTlQ7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZWdNb3ZpbmdbaV0pIG1vdmluZ0NvdW50Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IExFR19DT1VOVDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkZWFsID0gdGhpcy5nZXRJZGVhbEZvb3RQb3MoaSwgdGhpcy5wb3NpdGlvbiwgdGhpcy55YXcpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmF5Y2FzdCB0ZXJyYWluIGZvciBpZGVhbFxyXG4gICAgICAgICAgICBjb25zdCBncm91bmRZID0gdGVycmFpbkZuKGlkZWFsKTtcclxuICAgICAgICAgICAgaWYgKGdyb3VuZFkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlkZWFsWzFdID0gZ3JvdW5kWSArIDEuMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlkZWFsWzFdID0gMDsgLy8gRmFsbGJhY2tcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlzdCA9IHZlYzMuZGlzdGFuY2UodGhpcy5sZWdUYXJnZXRzW2ldLCBpZGVhbCk7XHJcblxyXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIFN0ZXBcclxuICAgICAgICAgICAgLy8gSWYgZGlzdGFuY2UgaXMgdG9vIGZhciwgb3IgaWYgdGhlIGxlZyBpcyBcImJlaGluZFwiIHRoZSBpZGVhbCBwb3NpdGlvbiB0b28gbXVjaCByZWxhdGl2ZSB0byBtb3ZlbWVudFxyXG4gICAgICAgICAgICBpZiAoIXRoaXMubGVnTW92aW5nW2ldICYmIGRpc3QgPiBTVEVQX0RJU1RBTkNFKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBbGxvdyBtYXggNCBsZWdzIG1vdmluZywgYnV0IHRyeSB0byBrZWVwIHN0YWJsZSBwYWlyc1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vdmluZ0NvdW50IDwgNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVnTW92aW5nW2ldID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZ1Byb2dyZXNzW2ldID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB2ZWMzLmNvcHkodGhpcy5sZWdTdGFydFtpXSwgdGhpcy5sZWdUYXJnZXRzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB2ZWMzLmNvcHkodGhpcy5sZWdOZXh0W2ldLCBpZGVhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92aW5nQ291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQW5pbWF0ZSBTdGVwXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxlZ01vdmluZ1tpXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWdQcm9ncmVzc1tpXSArPSBkdCAqIFNURVBfU1BFRUQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZWdQcm9ncmVzc1tpXSA+PSAxLjApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZ1Byb2dyZXNzW2ldID0gMS4wO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVnTW92aW5nW2ldID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVjMy5jb3B5KHRoaXMubGVnVGFyZ2V0c1tpXSwgdGhpcy5sZWdOZXh0W2ldKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IHRoaXMubGVnUHJvZ3Jlc3NbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTGVycCBYL1pcclxuICAgICAgICAgICAgICAgICAgICB2ZWMzLmxlcnAodGhpcy5sZWdUYXJnZXRzW2ldLCB0aGlzLmxlZ1N0YXJ0W2ldLCB0aGlzLmxlZ05leHRbaV0sIHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFyYyBZIChQYXJhYm9sYSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoID0gTWF0aC5tYXgoMCwgTWF0aC5zaW4odCAqIE1hdGguUEkpKSAqIFNURVBfSEVJR0hUO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVzaW5nIGN1cnJlbnQgWSB0YXJnZXQgYmFzZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VIZWlnaHQgPSAoMSAtIHQpICogdGhpcy5sZWdTdGFydFtpXVsxXSArIHQgKiB0aGlzLmxlZ05leHRbaV1bMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWdUYXJnZXRzW2ldWzFdID0gYmFzZUhlaWdodCArIGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJvZHkgSGVpZ2h0IEFkanVzdG1lbnQgKEF2ZXJhZ2Ugb2YgbGVncylcclxuICAgICAgICBsZXQgYXZnWSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLmxlZ1RhcmdldHMpIGF2Z1kgKz0gcFsxXTtcclxuICAgICAgICBhdmdZIC89IExFR19DT1VOVDtcclxuXHJcbiAgICAgICAgLy8gU21vb3RoIGJvZHkgWVxyXG4gICAgICAgIGNvbnN0IHRhcmdldEJvZHlZID0gYXZnWSArIEJPRFlfSEVJR0hUO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25bMV0gPSB0aGlzLnBvc2l0aW9uWzFdICogMC45ICsgdGFyZ2V0Qm9keVkgKiAwLjE7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBSb3RhdGlvbiBRdWF0ZXJuaW9uXHJcbiAgICAgICAgcXVhdC5mcm9tRXVsZXIodGhpcy5yb3RhdGlvbiwgMCwgdGhpcy55YXcgKiAxODAgLyBNYXRoLlBJLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGRldmljZTogR1BVRGV2aWNlLCBwYXNzRW5jb2RlcjogR1BVUmVuZGVyUGFzc0VuY29kZXIsIHJlbmRlcmVyOiBTaW1wbGVSZW5kZXJlciwgaXNSaWRpbmc6IGJvb2xlYW4pIHtcclxuICAgICAgICAvLyBCb2R5IENvbG9yc1xyXG4gICAgICAgIGNvbnN0IGNvbEJvZHkgPSB2ZWM0LmZyb21WYWx1ZXMoMC4xLCAwLjEsIDAuMSwgMS4wKTsgLy8gQmxhY2svR3JleVxyXG4gICAgICAgIGNvbnN0IGNvbExlZyA9IHZlYzQuZnJvbVZhbHVlcygwLjIsIDAuMDUsIDAuMDUsIDEuMCk7IC8vIERhcmsgUmVkXHJcbiAgICAgICAgY29uc3QgY29sSm9pbnQgPSB2ZWM0LmZyb21WYWx1ZXMoMC41LCAwLjAsIDAuMCwgMS4wKTsgLy8gUmVkXHJcblxyXG4gICAgICAgIC8vIDEuIERyYXcgQm9keVxyXG4gICAgICAgIC8vIFRob3JheCAoQ2VwaGFsb3Rob3JheCkgLSBTY2FsZWQgMC44XHJcbiAgICAgICAgLy8gT3JpZ2luYWw6IDMuMCwgMi41LCA0LjAgLT4gU2NhbGVkOiAyLjQsIDIuMCwgMy4yXHJcbiAgICAgICAgcmVuZGVyZXIuZHJhd0N1YmVFdWxlcihkZXZpY2UsIHBhc3NFbmNvZGVyLCB0aGlzLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICB2ZWMzLmZyb21WYWx1ZXMoMCwgdGhpcy55YXcsIDApLFxyXG4gICAgICAgICAgICB2ZWMzLmZyb21WYWx1ZXMoMi40LCAyLjAsIDMuMiksXHJcbiAgICAgICAgICAgIGNvbEJvZHlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBBYmRvbWVuIChCZWhpbmQpXHJcbiAgICAgICAgY29uc3QgYWJkUG9zID0gdmVjMy5jcmVhdGUoKTtcclxuICAgICAgICBjb25zdCBiYWNrd2FyZCA9IHZlYzMuZnJvbVZhbHVlcygtTWF0aC5zaW4odGhpcy55YXcpLCAwLCAtTWF0aC5jb3ModGhpcy55YXcpKTtcclxuICAgICAgICB2ZWMzLnNjYWxlQW5kQWRkKGFiZFBvcywgdGhpcy5wb3NpdGlvbiwgYmFja3dhcmQsIDMuMik7IC8vIE9mZnNldCBzY2FsZWQgKHdhcyA0LjApXHJcblxyXG4gICAgICAgIC8vIFRpbHQgc2xpZ2h0bHlcclxuICAgICAgICAvLyBXZSdsbCBjb25zdHJ1Y3QgYSByb3RhdGlvbiBtYXRyaXgvcXVhdCBmb3IgdGhlIGFiZG9tZW5cclxuICAgICAgICBjb25zdCBhYmRSb3QgPSB2ZWMzLmZyb21WYWx1ZXMoMC4yLCB0aGlzLnlhdywgMCk7IC8vIDAuMiByYWQgdGlsdCBYLCArIHlhdyBZXHJcblxyXG4gICAgICAgIHJlbmRlcmVyLmRyYXdDdWJlRXVsZXIoZGV2aWNlLCBwYXNzRW5jb2RlciwgYWJkUG9zLFxyXG4gICAgICAgICAgICBhYmRSb3QsXHJcbiAgICAgICAgICAgIHZlYzMuZnJvbVZhbHVlcyg0LjAsIDMuMiwgNC44KSwgLy8gU2NhbGVkIDAuOCAod2FzIDUuMCwgNC4wLCA2LjApXHJcbiAgICAgICAgICAgIGNvbEJvZHlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyAyLiBEcmF3IExlZ3NcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IExFR19DT1VOVDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZGUgPSBpICUgMiA9PT0gMCA/IDEgOiAtMTtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpIC8gMik7XHJcblxyXG4gICAgICAgICAgICAvLyBCb2R5IEF0dGFjaG1lbnQgUG9pbnRzIChSZWxhdGl2ZSB0byBCb2R5IENlbnRlcilcclxuICAgICAgICAgICAgLy8gU2NhbGVkIDAuOFxyXG4gICAgICAgICAgICAvLyBaIG9mZnNldHMgKGxvY2FsKVxyXG4gICAgICAgICAgICBjb25zdCB6T2ZmID0gWzEuMiwgMC40LCAtMC40LCAtMS4yXVtyb3ddO1xyXG4gICAgICAgICAgICBjb25zdCB4T2ZmID0gc2lkZSAqIDEuMjsgLy8gV2lkdGggaXMgMi40LCBzbyAxLjIgaXMgZWRnZVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYXR0YWNoTG9jYWwgPSB2ZWMzLmZyb21WYWx1ZXMoeE9mZiwgMCwgek9mZik7XHJcbiAgICAgICAgICAgIHZlYzMudHJhbnNmb3JtUXVhdChhdHRhY2hMb2NhbCwgYXR0YWNoTG9jYWwsIHRoaXMucm90YXRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBhdHRhY2hXb3JsZCA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIHZlYzMuYWRkKGF0dGFjaFdvcmxkLCB0aGlzLnBvc2l0aW9uLCBhdHRhY2hMb2NhbCk7XHJcblxyXG4gICAgICAgICAgICAvLyBDb3hhIEVuZHBvaW50IChUaGUgaGlwIGpvaW50KVxyXG4gICAgICAgICAgICAvLyBQb2ludHMgb3V0d2FyZHNcclxuICAgICAgICAgICAgY29uc3QgY294YURpckxvY2FsID0gdmVjMy5mcm9tVmFsdWVzKHNpZGUsIC0wLjIsIDApOyAvLyBTbGlnaHQgZG93biBhbmdsZVxyXG4gICAgICAgICAgICBjb25zdCBjb3hhRGlyID0gdmVjMy5jcmVhdGUoKTtcclxuICAgICAgICAgICAgdmVjMy50cmFuc2Zvcm1RdWF0KGNveGFEaXIsIGNveGFEaXJMb2NhbCwgdGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgICAgIHZlYzMubm9ybWFsaXplKGNveGFEaXIsIGNveGFEaXIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY294YUVuZCA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIHZlYzMuc2NhbGVBbmRBZGQoY294YUVuZCwgYXR0YWNoV29ybGQsIGNveGFEaXIsIENPWEFfTEVOKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERyYXcgQ294YVxyXG4gICAgICAgICAgICB0aGlzLmRyYXdMaW1iKGRldmljZSwgcGFzc0VuY29kZXIsIHJlbmRlcmVyLCBhdHRhY2hXb3JsZCwgY294YUVuZCwgMC40OCwgY29sQm9keSk7IC8vIFRoaW5uZXJcclxuXHJcbiAgICAgICAgICAgIC8vIFRhcmdldCBGb290XHJcbiAgICAgICAgICAgIGNvbnN0IGZvb3QgPSB0aGlzLmxlZ1RhcmdldHNbaV07XHJcblxyXG4gICAgICAgICAgICAvLyBJSyBTb2x2ZSBmcm9tIENveGFFbmQgdG8gRm9vdFxyXG4gICAgICAgICAgICAvLyBLbmVlcyBnZW5lcmFsbHkgcG9pbnQgVVBcclxuICAgICAgICAgICAgY29uc3QgcG9sZSA9IHZlYzMuZnJvbVZhbHVlcygwLCAxLCAwKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNvbCA9IHNvbHZlSUsoY294YUVuZCwgZm9vdCwgRkVNVVJfTEVOLCBUSUJJQV9MRU4sIHBvbGUpO1xyXG4gICAgICAgICAgICBjb25zdCBrbmVlID0gc29sLmtuZWU7XHJcblxyXG4gICAgICAgICAgICAvLyBEcmF3IEZlbXVyIChDb3hhIC0+IEtuZWUpXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0xpbWIoZGV2aWNlLCBwYXNzRW5jb2RlciwgcmVuZGVyZXIsIGNveGFFbmQsIGtuZWUsIDAuNCwgY29sTGVnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERyYXcgVGliaWEgKEtuZWUgLT4gRm9vdClcclxuICAgICAgICAgICAgdGhpcy5kcmF3TGltYihkZXZpY2UsIHBhc3NFbmNvZGVyLCByZW5kZXJlciwga25lZSwgZm9vdCwgMC4yOCwgY29sTGVnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEtuZWUgSm9pbnRcclxuICAgICAgICAgICAgcmVuZGVyZXIuZHJhd0N1YmVFdWxlcihkZXZpY2UsIHBhc3NFbmNvZGVyLCBrbmVlLCB2ZWMzLmNyZWF0ZSgpLCB2ZWMzLmZyb21WYWx1ZXMoMC41NiwgMC41NiwgMC41NiksIGNvbEpvaW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDMuIERyYXcgUmlkZXIgKFJlbW92ZWQgLSBIYW5kbGVkIGJ5IFBsYXllck1vZGVsKVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdMaW1iKGRldmljZTogR1BVRGV2aWNlLCBwYXNzRW5jb2RlcjogR1BVUmVuZGVyUGFzc0VuY29kZXIsIHJlbmRlcmVyOiBTaW1wbGVSZW5kZXJlcixcclxuICAgICAgICBzdGFydDogdmVjMywgZW5kOiB2ZWMzLCB0aGlja25lc3M6IG51bWJlciwgY29sb3I6IHZlYzQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgY2VudGVyID0gdmVjMy5jcmVhdGUoKTtcclxuICAgICAgICB2ZWMzLmxlcnAoY2VudGVyLCBzdGFydCwgZW5kLCAwLjUpO1xyXG5cclxuICAgICAgICBjb25zdCBsZW4gPSB2ZWMzLmRpc3RhbmNlKHN0YXJ0LCBlbmQpO1xyXG5cclxuICAgICAgICBjb25zdCBkaXIgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgICAgIHZlYzMuc3VidHJhY3QoZGlyLCBlbmQsIHN0YXJ0KTtcclxuICAgICAgICB2ZWMzLm5vcm1hbGl6ZShkaXIsIGRpcik7XHJcblxyXG4gICAgICAgIC8vIFJvdGF0aW9uIFF1YXQ6IEZyb20gVXAgKDAsMSwwKSB0byBEaXJcclxuICAgICAgICBjb25zdCBxID0gcXVhdC5jcmVhdGUoKTtcclxuICAgICAgICBjb25zdCB1cCA9IHZlYzMuZnJvbVZhbHVlcygwLCAxLCAwKTtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIHBhcmFsbGVsIGNhc2VcclxuICAgICAgICBpZiAoTWF0aC5hYnModmVjMy5kb3QoZGlyLCB1cCkpID4gMC45OSkge1xyXG4gICAgICAgICAgICAvLyBKdXN0IHVzZSBpZGVudGl0eSBvciBmbGlwXHJcbiAgICAgICAgICAgIGlmIChkaXJbMV0gPCAwKSBxdWF0LmZyb21FdWxlcihxLCAxODAsIDAsIDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHF1YXQucm90YXRpb25UbyhxLCB1cCwgZGlyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLmRyYXdDdWJlKGRldmljZSwgcGFzc0VuY29kZXIsIGNlbnRlciwgcSwgdmVjMy5mcm9tVmFsdWVzKHRoaWNrbmVzcywgbGVuLCB0aGlja25lc3MpLCBjb2xvcik7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwidmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIjtcbnZhciB3ZWJwYWNrUXVldWVzID0gaGFzU3ltYm9sID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gaGFzU3ltYm9sID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gaGFzU3ltYm9sID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcblxudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiBxdWV1ZS5kIDwgMSkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXG5cdFx0aWYoZGVwW3dlYnBhY2tRdWV1ZXNdKSByZXR1cm4gZGVwO1xuXHRcdGlmKGRlcC50aGVuKSB7XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHRcdHF1ZXVlLmQgPSAwO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0Vycm9yXSA9IGU7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblxuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gLTEpO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0dmFyIGhhbmRsZSA9IChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblxuXHRcdFx0aWYoZFt3ZWJwYWNrRXJyb3JdKSB0aHJvdyBkW3dlYnBhY2tFcnJvcl07XG5cdFx0XHRyZXR1cm4gZFt3ZWJwYWNrRXhwb3J0c107XG5cdFx0fSkpXG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0Zm4gPSAoKSA9PiAocmVzb2x2ZShnZXRSZXN1bHQpKTtcblx0XHRcdGZuLnIgPSAwO1xuXHRcdFx0dmFyIGZuUXVldWUgPSAocSkgPT4gKHEgIT09IHF1ZXVlICYmICFkZXBRdWV1ZXMuaGFzKHEpICYmIChkZXBRdWV1ZXMuYWRkKHEpLCBxICYmICFxLmQgJiYgKGZuLnIrKywgcS5wdXNoKGZuKSkpKTtcblx0XHRcdGN1cnJlbnREZXBzLm1hcCgoZGVwKSA9PiAoZGVwW3dlYnBhY2tRdWV1ZXNdKGZuUXVldWUpKSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZuLnIgPyBwcm9taXNlIDogZ2V0UmVzdWx0KCk7XG5cdH1cblx0dmFyIGRvbmUgPSAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSlcblx0Ym9keShoYW5kbGUsIGRvbmUpO1xuXHRxdWV1ZSAmJiBxdWV1ZS5kIDwgMCAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=
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
const [imgCobble, imgDirt, imgNewGrass, imgGrassTop, imgTNT] = await Promise.all([
    loadAndResizeBitmap(_assets_custom_texture_jpg__WEBPACK_IMPORTED_MODULE_4__, TEXTURE_SIZE, TEXTURE_SIZE),
    loadAndResizeBitmap(_assets_dirt_jpg__WEBPACK_IMPORTED_MODULE_12__, TEXTURE_SIZE, TEXTURE_SIZE),
    loadAndResizeBitmap(_assets_grass_side_jpg__WEBPACK_IMPORTED_MODULE_13__, TEXTURE_SIZE, TEXTURE_SIZE),
    loadAndResizeBitmap(_assets_grass_top_png__WEBPACK_IMPORTED_MODULE_14__, TEXTURE_SIZE, TEXTURE_SIZE),
    loadAndResizeBitmap(_assets_tnt_png__WEBPACK_IMPORTED_MODULE_15__, TEXTURE_SIZE, TEXTURE_SIZE),
]);
console.log('Textures loaded successfully!');
const texture = device.createTexture({
    size: [TEXTURE_SIZE, TEXTURE_SIZE, 5], // Layer count 5 (removed torch)
    format: 'rgba8unorm',
    usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
});
device.queue.copyExternalImageToTexture({ source: imgCobble }, { texture: texture, origin: { z: 0 } }, [TEXTURE_SIZE, TEXTURE_SIZE]);
device.queue.copyExternalImageToTexture({ source: imgDirt }, { texture: texture, origin: { z: 1 } }, [TEXTURE_SIZE, TEXTURE_SIZE]);
device.queue.copyExternalImageToTexture({ source: imgNewGrass }, { texture: texture, origin: { z: 2 } }, [TEXTURE_SIZE, TEXTURE_SIZE]);
device.queue.copyExternalImageToTexture({ source: imgGrassTop }, { texture: texture, origin: { z: 3 } }, [TEXTURE_SIZE, TEXTURE_SIZE]);
device.queue.copyExternalImageToTexture({ source: imgTNT }, { texture: texture, origin: { z: 4 } }, [TEXTURE_SIZE, TEXTURE_SIZE]);
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
// Default: Slot 0 = Cobble (0), Slot 1 = Dirt (1), Slot 2 = Grass (2), Slot 3 = TNT (4)
const inventory = [0, 1, 2, 4, 0, 0, 0, 0, 0];
// Initial Counts: 64 Cobble, 10 Dirt, 10 Grass, 100 TNT
const inventoryCounts = [64, 10, 10, 100, 0, 0, 0, 0, 0];
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
// Helper function to set a block and update its chunk
function setBlock(x, y, z, type) {
    const cx = Math.floor(x / CHUNK_SIZE);
    const cz = Math.floor(z / CHUNK_SIZE);
    const key = `${cx},${cz}`;
    const chunk = chunks.get(key);
    if (chunk) {
        const lx = x - cx * CHUNK_SIZE;
        const lz = z - cz * CHUNK_SIZE;
        const idx = getGridIndex(lx, y, lz);
        if (idx !== -1) {
            chunk.grid[idx] = type;
            rebuildChunkMesh(chunk, cx, cz);
        }
    }
}
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
window.addEventListener('mousedown', (e) => {
    if (document.pointerLockElement !== canvas)
        return;
    if (!currentHit)
        return;
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
                // Map block types to item types (what gets dropped)
                // Grid type 1 (stone) -> Item type 0 (cobblestone texture)
                // Grid type 2 (dirt) -> Item type 1 (dirt texture)
                // Grid type 3 (grass) -> Item type 2 (grass texture)
                // Grid type 5 (TNT) -> Item type 4 (TNT texture)
                let itemType = oldType - 1; // Default mapping
                if (oldType === 1)
                    itemType = 0; // Stone -> Cobblestone
                setBlock(px, py, pz, 0); // Set to Air
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
                        setBlock(nx, ny, nz, inventory[selectedSlot] + 1);
                        if (inventoryCounts[selectedSlot] !== Infinity) {
                            inventoryCounts[selectedSlot]--;
                            if (inventoryCounts[selectedSlot] <= 0) {
                                inventory[selectedSlot] = 0; // Clear slot (set to air block type)
                                inventoryCounts[selectedSlot] = 0;
                            }
                            updateInventoryUI();
                        }
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
            // Scan downward from item's current position for realistic gravity
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
    // Torches removed
    uniformData.set([0, 0, 0, 0], 68);
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

module.exports = "struct Uniforms {\r\n    modelViewProjectionMatrix : mat4x4<f32>,\r\n    viewProjectionMatrix : mat4x4<f32>,\r\n    lightViewProjectionMatrix : mat4x4<f32>,\r\n    lightDir : vec4<f32>,\r\n    lightColor : vec4<f32>,\r\n    ambientColor : vec4<f32>,\r\n    skyColor : vec4<f32>,\r\n    cameraPosition : vec4<f32>,\r\n}\r\n\r\n@group(0) @binding(0) var<uniform> uniforms : Uniforms;\r\n@group(0) @binding(1) var mySampler: sampler;\r\n@group(0) @binding(2) var myTexture: texture_2d_array<f32>;\r\n@group(0) @binding(3) var shadowSampler: sampler_comparison;\r\n@group(0) @binding(4) var shadowMap: texture_depth_2d;\r\n\r\nstruct VertexInput {\r\n    @location(0) position : vec3<f32>,\r\n    @location(1) uv : vec2<f32>,\r\n    @location(2) normal : vec3<f32>,\r\n}\r\n\r\nstruct InstanceInput {\r\n    @location(3) instancePosition : vec3<f32>,\r\n    @location(4) textureIndex : f32,\r\n}\r\n\r\nstruct VertexOutput {\r\n    @builtin(position) Position : vec4<f32>,\r\n    @location(0) uv : vec2<f32>,\r\n    @location(1) @interpolate(flat) textureIndex : u32,\r\n    @location(2) shadowPos : vec3<f32>,\r\n    @location(3) normal : vec3<f32>,\r\n    @location(4) worldPos : vec3<f32>,\r\n}\r\n\r\n@vertex\r\nfn main_vs(input : VertexInput, instance : InstanceInput) -> VertexOutput {\r\n    var output : VertexOutput;\r\n    let worldPosition = input.position + instance.instancePosition;\r\n    output.Position = uniforms.viewProjectionMatrix * vec4<f32>(worldPosition, 1.0);\r\n    output.uv = input.uv;\r\n    output.textureIndex = u32(instance.textureIndex);\r\n\r\n    // Shadow Coord\r\n    let posFromLight = uniforms.lightViewProjectionMatrix * vec4<f32>(worldPosition, 1.0);\r\n    output.shadowPos = posFromLight.xyz / posFromLight.w;\r\n\r\n    // Pass precise normal\r\n    output.normal = input.normal;\r\n\r\n    // Pass world position for fog\r\n    output.worldPos = worldPosition;\r\n\r\n    return output;\r\n}\r\n\r\n@fragment\r\nfn main_fs(input: VertexOutput) -> @location(0) vec4<f32> {\r\n    // Grass Top Logic\r\n    var finalIndex = input.textureIndex;\r\n    if (finalIndex == 2u && input.normal.y > 0.9) {\r\n        finalIndex = 3u;\r\n    }\r\n\r\n    let texColor = textureSample(myTexture, mySampler, input.uv, finalIndex);\r\n\r\n    // Shadow Calculation (must stay in uniform control flow)\r\n    let shadowUV = vec2<f32>(\r\n        input.shadowPos.x * 0.5 + 0.5,\r\n        -input.shadowPos.y * 0.5 + 0.5\r\n    );\r\n\r\n    // Bias to prevent acne\r\n    let currentDepth = input.shadowPos.z - 0.003;\r\n\r\n    let shadowSample = textureSampleCompare(shadowMap, shadowSampler, shadowUV, currentDepth);\r\n\r\n    var visibility = 1.0;\r\n    if (shadowUV.x >= 0.0 && shadowUV.x <= 1.0 && shadowUV.y >= 0.0 && shadowUV.y <= 1.0 && input.shadowPos.z >= 0.0 && input.shadowPos.z <= 1.0) {\r\n        visibility = shadowSample;\r\n    }\r\n\r\n    // Dynamic Lighting\r\n    let lightDir = normalize(uniforms.lightDir.xyz);\r\n    let N = normalize(input.normal);\r\n    let diff = max(dot(N, lightDir), 0.0);\r\n\r\n    // Combine Ambient + Diffuse * Shadow * LightColor\r\n    let ambient = uniforms.ambientColor.rgb;\r\n    let diffuse = uniforms.lightColor.rgb * diff * visibility;\r\n\r\n    let lighting = ambient + diffuse;\r\n\r\n\r\n    // Emissive Torch Rendering (after shadow calc, skip lighting and fog)\r\n    if (finalIndex == 5u) {\r\n        return vec4<f32>(texColor.rgb, texColor.a);\r\n    }\r\n\r\n    // Distance Fog\r\n    let camDist = distance(input.worldPos, uniforms.cameraPosition.xyz);\r\n    let fogStart = 140.0; // Start fading fog (within 224 block render distance)\r\n    let fogEnd = 200.0;   // Full fog\r\n    let fogFactor = clamp((camDist - fogStart) / (fogEnd - fogStart), 0.0, 1.0);\r\n    \r\n    let finalColor = mix(texColor.rgb * lighting, uniforms.skyColor.rgb, fogFactor);\r\n    \r\n    return vec4<f32>(finalColor, texColor.a);\r\n}\r\n\r\n@vertex\r\nfn shadow_vs(input : VertexInput, instance : InstanceInput) -> @builtin(position) vec4<f32> {\r\n    let worldPosition = input.position + instance.instancePosition;\r\n    return uniforms.lightViewProjectionMatrix * vec4<f32>(worldPosition, 1.0);\r\n}\r\n\r\n// --- Entity Renderer (Spider/Player) ---\r\n\r\nstruct EntityUniforms {\r\n    viewProjectionMatrix : mat4x4<f32>,\r\n    modelMatrix : mat4x4<f32>,\r\n    color : vec4<f32>,\r\n}\r\n\r\n@group(0) @binding(0) var<uniform> entityUniforms : EntityUniforms;\r\n\r\nstruct EntityVertexInput {\r\n    @location(0) position : vec3<f32>,\r\n    // No UV/Normal needed for flat colored cubes\r\n}\r\n\r\nstruct EntityVertexOutput {\r\n    @builtin(position) Position : vec4<f32>,\r\n    @location(0) color : vec4<f32>,\r\n}\r\n\r\n@vertex\r\nfn entity_vs(input : EntityVertexInput) -> EntityVertexOutput {\r\n    var output : EntityVertexOutput;\r\n    let worldPos = entityUniforms.modelMatrix * vec4<f32>(input.position, 1.0);\r\n    output.Position = entityUniforms.viewProjectionMatrix * worldPos;\r\n    \r\n    // Simple directional lighting simulation based on normal?\r\n    // For a cube, we can infer normal from model matrix if we passed it, but let's just use constant color\r\n    // Or simpler: generic lighting.\r\n    // Let's stick to flat color for now, maybe slight tint based on Y?\r\n    output.color = entityUniforms.color;\r\n    return output;\r\n}\r\n\r\n@fragment\r\nfn entity_fs(input: EntityVertexOutput) -> @location(0) vec4<f32> {\r\n    return input.color;\r\n}\r\n";

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
/******/ 		__webpack_require__.p = "dist/";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0Q0FBNEM7QUFDdkQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNPO0FBQ1A7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQLGdCQUFnQixrREFBbUI7QUFDbkMsTUFBTSxrREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQLGdCQUFnQixrREFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQLGdCQUFnQixrREFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsYUFBYSxhQUFhO0FBQzFCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsYUFBYSxRQUFRO0FBQ3JCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsZUFBZTtBQUMxQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QjtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekI7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixhQUFhLFFBQVE7QUFDckI7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsUUFBUTtBQUNyQjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxTQUFTO0FBQ3RCO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxTQUFTO0FBQ3RCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsK0NBQWdCLHFFQUFxRSwrQ0FBZ0IscUVBQXFFLCtDQUFnQixxRUFBcUUsK0NBQWdCLHFFQUFxRSwrQ0FBZ0IscUVBQXFFLCtDQUFnQixxRUFBcUUsK0NBQWdCLHFFQUFxRSwrQ0FBZ0IscUVBQXFFLCtDQUFnQjtBQUN0dEI7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNPOztBQUVQO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDTyxtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcHdCaUM7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1AsZ0JBQWdCLGtEQUFtQjtBQUNuQyxNQUFNLGtEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUCxnQkFBZ0Isa0RBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQLGdCQUFnQixrREFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsYUFBYSxhQUFhO0FBQzFCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixhQUFhLFFBQVE7QUFDckI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0NBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsUUFBUTtBQUNuQixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrQ0FBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGVBQWU7QUFDMUIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUCx3QkFBd0Isa0RBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixZQUFZLGNBQWM7QUFDMUIsWUFBWSxNQUFNO0FBQ2xCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixZQUFZLGNBQWM7QUFDMUIsWUFBWSxNQUFNO0FBQ2xCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLFlBQVksTUFBTTtBQUNsQjtBQUNPO0FBQ1Asb0JBQW9CLGtEQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLFlBQVksTUFBTTtBQUNsQixZQUFZLE1BQU07QUFDbEIsWUFBWSxjQUFjO0FBQzFCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekI7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsK0NBQWdCLCtCQUErQiwrQ0FBZ0IsK0JBQStCLCtDQUFnQjtBQUMvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsYUFBYSxRQUFRO0FBQ3JCO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixhQUFhLFFBQVE7QUFDckI7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxTQUFTO0FBQ3RCO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxTQUFTO0FBQ3RCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLCtDQUFnQixxRUFBcUUsK0NBQWdCLHFFQUFxRSwrQ0FBZ0IscUVBQXFFLCtDQUFnQixxRUFBcUUsK0NBQWdCLHFFQUFxRSwrQ0FBZ0IscUVBQXFFLCtDQUFnQixxRUFBcUUsK0NBQWdCLHFFQUFxRSwrQ0FBZ0IscUVBQXFFLCtDQUFnQix1RUFBdUUsK0NBQWdCLHlFQUF5RSwrQ0FBZ0IseUVBQXlFLCtDQUFnQix5RUFBeUUsK0NBQWdCLHlFQUF5RSwrQ0FBZ0IseUVBQXlFLCtDQUFnQjtBQUMvekM7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNPOztBQUVQO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDTyxtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4NkRpQztBQUNOO0FBQ0E7QUFDQTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUCxnQkFBZ0Isa0RBQW1CO0FBQ25DLE1BQU0sa0RBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsWUFBWSxjQUFjO0FBQzFCLFlBQVksWUFBWTtBQUN4QjtBQUNPO0FBQ1A7QUFDQTtBQUNBLFVBQVUsK0NBQWdCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUIsWUFBWSxjQUFjO0FBQzFCLFlBQVksWUFBWTtBQUN4QjtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0EsV0FBVyw4Q0FBZTtBQUMxQixXQUFXLDhDQUFlO0FBQzFCLFdBQVcsOENBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcscUNBQXFDO0FBQ2hELGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ087QUFDUCxrRkFBa0YsbURBQW9CO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixhQUFhLFFBQVE7QUFDckI7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ08sWUFBWSwyQ0FBVTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ08saUJBQWlCLGdEQUFlOztBQUV2QztBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ08sV0FBVywwQ0FBUzs7QUFFM0I7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNPLFVBQVUseUNBQVE7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ08sVUFBVSx5Q0FBUTs7QUFFekI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ08sWUFBWSwyQ0FBVTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNPLFVBQVUseUNBQVE7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNPLFdBQVcsMENBQVM7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixhQUFhLFFBQVE7QUFDckI7QUFDTyxhQUFhLDRDQUFXOztBQUUvQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ08sb0JBQW9CLG1EQUFrQjs7QUFFN0M7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDTyxnQkFBZ0IsK0NBQWM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxTQUFTO0FBQ3RCO0FBQ08sa0JBQWtCLGlEQUFnQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxTQUFTO0FBQ3RCO0FBQ087QUFDUCxrQkFBa0IseUNBQVEsZUFBZSwrQ0FBZ0I7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUCxnQkFBZ0IsNENBQVc7QUFDM0Isa0JBQWtCLGdEQUFlO0FBQ2pDLGtCQUFrQixnREFBZTtBQUNqQztBQUNBLGNBQWMseUNBQVE7QUFDdEI7QUFDQSxNQUFNLDJDQUFVO0FBQ2hCLFVBQVUseUNBQVEsc0JBQXNCLDJDQUFVO0FBQ2xELE1BQU0sK0NBQWM7QUFDcEI7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLE1BQU0sMkNBQVU7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1AsYUFBYSw0Q0FBVztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3Z1QnVDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQLGdCQUFnQixrREFBbUI7QUFDbkMsTUFBTSxrREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQLGdCQUFnQixrREFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsYUFBYSxRQUFRO0FBQ3JCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1AsZ0JBQWdCLGtEQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQLFdBQVcsNkNBQWM7QUFDekIsV0FBVyw2Q0FBYztBQUN6QixXQUFXLDZDQUFjO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixhQUFhLFFBQVE7QUFDckI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixhQUFhLFFBQVE7QUFDckI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsUUFBUTtBQUNyQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixhQUFhLFFBQVE7QUFDckI7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0EsVUFBVSw4Q0FBZTtBQUN6QixVQUFVLDhDQUFlO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixhQUFhLFFBQVE7QUFDckI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsUUFBUTtBQUNyQjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsU0FBUztBQUN0QjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsU0FBUztBQUN0QjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLCtDQUFnQixxRUFBcUUsK0NBQWdCLHFFQUFxRSwrQ0FBZ0I7QUFDeE47O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNPOztBQUVQO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDTzs7QUFFUDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ087O0FBRVA7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNPOztBQUVQO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDTzs7QUFFUDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ087O0FBRVA7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFVBQVU7QUFDckIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzV4QnVDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQLGdCQUFnQixrREFBbUI7QUFDbkMsTUFBTSxrREFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1AsZ0JBQWdCLGtEQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1AsZ0JBQWdCLGtEQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1AsV0FBVyw2Q0FBYztBQUN6QixXQUFXLDZDQUFjO0FBQ3pCLFdBQVcsNkNBQWM7QUFDekIsV0FBVyw2Q0FBYztBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsUUFBUTtBQUNyQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsYUFBYSxRQUFRO0FBQ3JCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsUUFBUTtBQUNyQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixhQUFhLFFBQVE7QUFDckI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixhQUFhLFFBQVE7QUFDckI7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsY0FBYztBQUN6QixXQUFXLGNBQWM7QUFDekIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOENBQWU7QUFDeEI7QUFDQSxZQUFZLDhDQUFlO0FBQzNCO0FBQ0EsU0FBUyw4Q0FBZTtBQUN4QjtBQUNBLFlBQVksOENBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsY0FBYztBQUN6QixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsTUFBTTtBQUNuQjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsYUFBYSxNQUFNO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsUUFBUTtBQUNyQjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsU0FBUztBQUN0QjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsU0FBUztBQUN0QjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwrQ0FBZ0IscUVBQXFFLCtDQUFnQixxRUFBcUUsK0NBQWdCLHFFQUFxRSwrQ0FBZ0I7QUFDN1M7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNPOztBQUVQO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDTzs7QUFFUDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ087O0FBRVA7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNPOztBQUVQO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDTzs7QUFFUDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ087O0FBRVA7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFVBQVU7QUFDckIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbnBCZ0M7QUFFakMscUNBQXFDO0FBQ3JDLHdCQUF3QjtBQUN4QiwyRUFBMkU7QUFDcEUsU0FBUyxPQUFPLENBQ25CLElBQVUsRUFDVixNQUFZLEVBQ1osSUFBWSxFQUNaLElBQVksRUFDWixPQUFhLENBQUMsa0NBQWtDOztJQUdoRCxnQ0FBZ0M7SUFDaEMsTUFBTSxJQUFJLEdBQUcsNkNBQVcsRUFBRSxDQUFDO0lBQzNCLCtDQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsQyxNQUFNLElBQUksR0FBRyw2Q0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRS9CLGtDQUFrQztJQUNsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzNCLE1BQU0sU0FBUyxHQUFHLDRDQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFckMsSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFLENBQUM7UUFDakIsaUJBQWlCO1FBQ2pCLGdEQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNCLGtEQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWhELE1BQU0sSUFBSSxHQUFHLDZDQUFXLEVBQUUsQ0FBQztRQUMzQixrREFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsdUNBQXVDO0lBQ3ZDLG1GQUFtRjtJQUNuRiw0QkFBNEI7SUFFNUIsaUVBQWlFO0lBRWpFLCtCQUErQjtJQUMvQiw2REFBNkQ7SUFDN0QsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMvRSxtQkFBbUI7SUFDbkIsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzVELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFekMscUNBQXFDO0lBQ3JDLHdDQUF3QztJQUN4QyxNQUFNLEtBQUssR0FBRyw0Q0FBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLGdEQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRTdCLCtEQUErRDtJQUMvRCxNQUFNLEtBQUssR0FBRyw2Q0FBVyxFQUFFLENBQUM7SUFDNUIsNENBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLElBQUksNkNBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUM3Qiw0Q0FBNEM7UUFDNUMsNENBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLGlEQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxnREFBYyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUU3QixpQ0FBaUM7SUFDakMsTUFBTSxLQUFLLEdBQUcsNkNBQVcsRUFBRSxDQUFDO0lBQzVCLDRDQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoQyxnREFBYyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUU3Qiw2QkFBNkI7SUFDN0Isb0RBQW9EO0lBQ3BELGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLG1FQUFtRTtJQUVuRSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUV4QixNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsZUFBZSxDQUFDO0lBQ3JDLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXJDLE1BQU0sSUFBSSxHQUFHLDRDQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsa0RBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0Msa0RBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFM0MsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFDckMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkZNLE1BQU0sTUFBTTtJQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3BDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1o0QztBQUM3QyxhQUFhO0FBQzJCO0FBQ3hDLGFBQWE7QUFDMkM7QUFDMUI7QUFDYztBQUNWO0FBQ0s7QUFDTDtBQUNXO0FBQ0o7QUFFekMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXNCLENBQUM7QUFDeEUsMkNBQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFdEUsTUFBTSxPQUFPLEdBQUcsTUFBTSxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEMsSUFBSSxDQUFDLE9BQU87SUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFFdkQsTUFBTSxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUV0QyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFeEMsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFekMsdUJBQXVCO0FBQ3ZCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQztBQUV6QixrQ0FBa0M7QUFDbEMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBRWYsT0FBTyxFQUFFLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRWxDLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUIsYUFBYTtBQUNnQztBQUM3QyxhQUFhO0FBQzBDO0FBQ3ZELGFBQWE7QUFDeUM7QUFDdEQsYUFBYTtBQUM4QjtBQUMzQyxhQUFhO0FBR2IsMEJBQTBCO0FBQzFCLEtBQUssVUFBVSxtQkFBbUIsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLE1BQWM7SUFDekUsTUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUN4QixHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNkLE1BQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBRW5ELG9CQUFvQjtJQUNwQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsSUFBSSxDQUFDLEdBQUc7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFFdEQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEMsT0FBTyxNQUFNLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFFRCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUM7QUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsdURBQWEsQ0FBQyxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsOENBQVksQ0FBQyxDQUFDO0FBRWxELE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQzdFLG1CQUFtQixDQUFDLHVEQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQztJQUM5RCxtQkFBbUIsQ0FBQyw4Q0FBWSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7SUFDN0QsbUJBQW1CLENBQUMsb0RBQWdCLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQztJQUNqRSxtQkFBbUIsQ0FBQyxtREFBZ0IsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDO0lBQ2pFLG1CQUFtQixDQUFDLDZDQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQztDQUMvRCxDQUFDLENBQUM7QUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFFN0MsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUNqQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLGdDQUFnQztJQUN2RSxNQUFNLEVBQUUsWUFBWTtJQUNwQixLQUFLLEVBQUUsZUFBZSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxpQkFBaUI7Q0FDeEcsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FDbkMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQ3JCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFDdEMsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQy9CLENBQUM7QUFDRixNQUFNLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUNuQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFDbkIsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUN0QyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FDL0IsQ0FBQztBQUNGLE1BQU0sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQ25DLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxFQUN2QixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQ3RDLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUMvQixDQUFDO0FBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FDbkMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEVBQ3ZCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFDdEMsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQy9CLENBQUM7QUFDRixNQUFNLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUNuQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFDbEIsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUN0QyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FDL0IsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDakMsU0FBUyxFQUFFLFNBQVM7SUFDcEIsU0FBUyxFQUFFLFNBQVM7Q0FDdkIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN2QyxPQUFPLEVBQUUsTUFBTTtJQUNmLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFNBQVMsRUFBRSxRQUFRO0NBQ3RCLENBQUMsQ0FBQztBQUVILE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUM1QyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO0lBQ2hDLEtBQUssRUFBRSxlQUFlLENBQUMsaUJBQWlCLEdBQUcsZUFBZSxDQUFDLGVBQWU7SUFDMUUsTUFBTSxFQUFFLGNBQWM7Q0FDekIsQ0FBQyxDQUFDO0FBV0gsTUFBTSxVQUFVLEdBQWdCLEVBQUUsQ0FBQztBQUVuQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFFckIsaUNBQWlDO0FBQ2pDLDJDQUEyQztBQUMzQyw0QkFBNEI7QUFDNUIsTUFBTSxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUM7SUFDbEMsY0FBYztJQUNkLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3RCLGFBQWE7SUFDYixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QixZQUFZO0lBQ1osQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDdEIsZUFBZTtJQUNmLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3ZCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3ZCLGNBQWM7SUFDZCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN0QixhQUFhO0lBQ2IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVB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QUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLFNBQVM7UUFDVCwwQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEUsTUFBTTtRQUNOLDBDQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RSw2QkFBNkI7UUFDN0IsMENBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLG9EQUFvRDtRQUNwRCwwQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsYUFBYSxDQUFDLEdBQVMsRUFBRSxHQUFTO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxH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QUNwQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEMsTUFBTSxPQUFPLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUNsRSxNQUFNLE9BQU8sR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ2xFLE1BQU0sT0FBTyxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFFbEUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQzlJLElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFD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QTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLENBQUM7V0FDRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0Esc0dBQXNHO1dBQ3RHO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ3ZFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsZ0M7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW9yZ2UtY3MvLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L2VzbS9jb21tb24uanMiLCJ3ZWJwYWNrOi8vZ2VvcmdlLWNzLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vbWF0My5qcyIsIndlYnBhY2s6Ly9nZW9yZ2UtY3MvLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L2VzbS9tYXQ0LmpzIiwid2VicGFjazovL2dlb3JnZS1jcy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL3F1YXQuanMiLCJ3ZWJwYWNrOi8vZ2VvcmdlLWNzLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vdmVjMy5qcyIsIndlYnBhY2s6Ly9nZW9yZ2UtY3MvLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L2VzbS92ZWM0LmpzIiwid2VicGFjazovL2dlb3JnZS1jcy8uL3NyYy9pay50cyIsIndlYnBhY2s6Ly9nZW9yZ2UtY3MvLi9zcmMvbG9nZ2VyLnRzIiwid2VicGFjazovL2dlb3JnZS1jcy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL2dlb3JnZS1jcy8uL3NyYy9ub2lzZS50cyIsIndlYnBhY2s6Ly9nZW9yZ2UtY3MvLi9zcmMvcGFydGljbGVzLnRzIiwid2VicGFjazovL2dlb3JnZS1jcy8uL3NyYy9waWNrdXBzLnRzIiwid2VicGFjazovL2dlb3JnZS1jcy8uL3NyYy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vZ2VvcmdlLWNzLy4vc3JjL3JlbmRlcmVyLnRzIiwid2VicGFjazovL2dlb3JnZS1jcy8uL3NyYy9zcGlkZXIudHMiLCJ3ZWJwYWNrOi8vZ2VvcmdlLWNzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dlb3JnZS1jcy93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL2dlb3JnZS1jcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2VvcmdlLWNzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2VvcmdlLWNzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2VvcmdlLWNzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2dlb3JnZS1jcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2dlb3JnZS1jcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ2VvcmdlLWNzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbW1vbiB1dGlsaXRpZXNcbiAqIEBtb2R1bGUgZ2xNYXRyaXhcbiAqL1xuXG4vLyBDb25maWd1cmF0aW9uIENvbnN0YW50c1xuZXhwb3J0IHZhciBFUFNJTE9OID0gMC4wMDAwMDE7XG5leHBvcnQgdmFyIEFSUkFZX1RZUEUgPSB0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSBcInVuZGVmaW5lZFwiID8gRmxvYXQzMkFycmF5IDogQXJyYXk7XG5leHBvcnQgdmFyIFJBTkRPTSA9IE1hdGgucmFuZG9tO1xuZXhwb3J0IHZhciBBTkdMRV9PUkRFUiA9IFwienl4XCI7XG5cbi8qKlxuICogU3ltbWV0cmljIHJvdW5kXG4gKiBzZWUgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvcm91bmQtaGFsZi11cC1zeW1tZXRyaWMjdXNlci1jb250ZW50LWRldGFpbGVkLWJhY2tncm91bmRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gYSB2YWx1ZSB0byByb3VuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmQoYSkge1xuICBpZiAoYSA+PSAwKSByZXR1cm4gTWF0aC5yb3VuZChhKTtcbiAgcmV0dXJuIGEgJSAwLjUgPT09IDAgPyBNYXRoLmZsb29yKGEpIDogTWF0aC5yb3VuZChhKTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSB0eXBlIG9mIGFycmF5IHVzZWQgd2hlbiBjcmVhdGluZyBuZXcgdmVjdG9ycyBhbmQgbWF0cmljZXNcbiAqXG4gKiBAcGFyYW0ge0Zsb2F0MzJBcnJheUNvbnN0cnVjdG9yIHwgQXJyYXlDb25zdHJ1Y3Rvcn0gdHlwZSBBcnJheSB0eXBlLCBzdWNoIGFzIEZsb2F0MzJBcnJheSBvciBBcnJheVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TWF0cml4QXJyYXlUeXBlKHR5cGUpIHtcbiAgQVJSQVlfVFlQRSA9IHR5cGU7XG59XG52YXIgZGVncmVlID0gTWF0aC5QSSAvIDE4MDtcbnZhciByYWRpYW4gPSAxODAgLyBNYXRoLlBJO1xuXG4vKipcbiAqIENvbnZlcnQgRGVncmVlIFRvIFJhZGlhblxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBhIEFuZ2xlIGluIERlZ3JlZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFuKGEpIHtcbiAgcmV0dXJuIGEgKiBkZWdyZWU7XG59XG5cbi8qKlxuICogQ29udmVydCBSYWRpYW4gVG8gRGVncmVlXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGEgQW5nbGUgaW4gUmFkaWFuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYSkge1xuICByZXR1cm4gYSAqIHJhZGlhbjtcbn1cblxuLyoqXG4gKiBUZXN0cyB3aGV0aGVyIG9yIG5vdCB0aGUgYXJndW1lbnRzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSB2YWx1ZSwgd2l0aGluIGFuIGFic29sdXRlXG4gKiBvciByZWxhdGl2ZSB0b2xlcmFuY2Ugb2YgZ2xNYXRyaXguRVBTSUxPTiAoYW4gYWJzb2x1dGUgdG9sZXJhbmNlIGlzIHVzZWQgZm9yIHZhbHVlcyBsZXNzXG4gKiB0aGFuIG9yIGVxdWFsIHRvIDEuMCwgYW5kIGEgcmVsYXRpdmUgdG9sZXJhbmNlIGlzIHVzZWQgZm9yIGxhcmdlciB2YWx1ZXMpXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGEgICAgICAgICAgVGhlIGZpcnN0IG51bWJlciB0byB0ZXN0LlxuICogQHBhcmFtIHtOdW1iZXJ9IGIgICAgICAgICAgVGhlIHNlY29uZCBudW1iZXIgdG8gdGVzdC5cbiAqIEBwYXJhbSB7TnVtYmVyfSB0b2xlcmFuY2UgIEFic29sdXRlIG9yIHJlbGF0aXZlIHRvbGVyYW5jZSAoZGVmYXVsdCBnbE1hdHJpeC5FUFNJTE9OKVxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG51bWJlcnMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHZhciB0b2xlcmFuY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IEVQU0lMT047XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYikgPD0gdG9sZXJhbmNlICogTWF0aC5tYXgoMSwgTWF0aC5hYnMoYSksIE1hdGguYWJzKGIpKTtcbn0iLCJpbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb24uanNcIjtcblxuLyoqXG4gKiAzeDMgTWF0cml4XG4gKiBAbW9kdWxlIG1hdDNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0M1xuICpcbiAqIEByZXR1cm5zIHttYXQzfSBhIG5ldyAzeDMgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg5KTtcbiAgaWYgKGdsTWF0cml4LkFSUkFZX1RZUEUgIT0gRmxvYXQzMkFycmF5KSB7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzVdID0gMDtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gIH1cbiAgb3V0WzBdID0gMTtcbiAgb3V0WzRdID0gMTtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIHVwcGVyLWxlZnQgM3gzIHZhbHVlcyBpbnRvIHRoZSBnaXZlbiBtYXQzLlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgM3gzIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgICB0aGUgc291cmNlIDR4NCBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21NYXQ0KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzRdO1xuICBvdXRbNF0gPSBhWzVdO1xuICBvdXRbNV0gPSBhWzZdO1xuICBvdXRbNl0gPSBhWzhdO1xuICBvdXRbN10gPSBhWzldO1xuICBvdXRbOF0gPSBhWzEwXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDMgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSBtYXRyaXggdG8gY2xvbmVcbiAqIEByZXR1cm5zIHttYXQzfSBhIG5ldyAzeDMgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg5KTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0MyB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICBvdXRbNF0gPSBhWzRdO1xuICBvdXRbNV0gPSBhWzVdO1xuICBvdXRbNl0gPSBhWzZdO1xuICBvdXRbN10gPSBhWzddO1xuICBvdXRbOF0gPSBhWzhdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBtYXQzIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDAgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDEgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDIgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMilcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTAgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTEgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTIgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggNSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjAgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggNilcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjEgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjIgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggOClcbiAqIEByZXR1cm5zIHttYXQzfSBBIG5ldyBtYXQzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDkpO1xuICBvdXRbMF0gPSBtMDA7XG4gIG91dFsxXSA9IG0wMTtcbiAgb3V0WzJdID0gbTAyO1xuICBvdXRbM10gPSBtMTA7XG4gIG91dFs0XSA9IG0xMTtcbiAgb3V0WzVdID0gbTEyO1xuICBvdXRbNl0gPSBtMjA7XG4gIG91dFs3XSA9IG0yMTtcbiAgb3V0WzhdID0gbTIyO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIG1hdDMgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTAyIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDIgcG9zaXRpb24gKGluZGV4IDIpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDMpXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDUpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIwIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDAgcG9zaXRpb24gKGluZGV4IDYpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDcpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIyIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDIgcG9zaXRpb24gKGluZGV4IDgpXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCBtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKSB7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMDI7XG4gIG91dFszXSA9IG0xMDtcbiAgb3V0WzRdID0gbTExO1xuICBvdXRbNV0gPSBtMTI7XG4gIG91dFs2XSA9IG0yMDtcbiAgb3V0WzddID0gbTIxO1xuICBvdXRbOF0gPSBtMjI7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IGEgbWF0MyB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAxO1xuICBvdXRbNV0gPSAwO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlKG91dCwgYSkge1xuICAvLyBJZiB3ZSBhcmUgdHJhbnNwb3Npbmcgb3Vyc2VsdmVzIHdlIGNhbiBza2lwIGEgZmV3IHN0ZXBzIGJ1dCBoYXZlIHRvIGNhY2hlIHNvbWUgdmFsdWVzXG4gIGlmIChvdXQgPT09IGEpIHtcbiAgICB2YXIgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl0sXG4gICAgICBhMTIgPSBhWzVdO1xuICAgIG91dFsxXSA9IGFbM107XG4gICAgb3V0WzJdID0gYVs2XTtcbiAgICBvdXRbM10gPSBhMDE7XG4gICAgb3V0WzVdID0gYVs3XTtcbiAgICBvdXRbNl0gPSBhMDI7XG4gICAgb3V0WzddID0gYTEyO1xuICB9IGVsc2Uge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVszXTtcbiAgICBvdXRbMl0gPSBhWzZdO1xuICAgIG91dFszXSA9IGFbMV07XG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzddO1xuICAgIG91dFs2XSA9IGFbMl07XG4gICAgb3V0WzddID0gYVs1XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzIHwgbnVsbH0gb3V0LCBvciBudWxsIGlmIHNvdXJjZSBtYXRyaXggaXMgbm90IGludmVydGlibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgYTAxID0gYVsxXSxcbiAgICBhMDIgPSBhWzJdO1xuICB2YXIgYTEwID0gYVszXSxcbiAgICBhMTEgPSBhWzRdLFxuICAgIGExMiA9IGFbNV07XG4gIHZhciBhMjAgPSBhWzZdLFxuICAgIGEyMSA9IGFbN10sXG4gICAgYTIyID0gYVs4XTtcbiAgdmFyIGIwMSA9IGEyMiAqIGExMSAtIGExMiAqIGEyMTtcbiAgdmFyIGIxMSA9IC1hMjIgKiBhMTAgKyBhMTIgKiBhMjA7XG4gIHZhciBiMjEgPSBhMjEgKiBhMTAgLSBhMTEgKiBhMjA7XG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICB2YXIgZGV0ID0gYTAwICogYjAxICsgYTAxICogYjExICsgYTAyICogYjIxO1xuICBpZiAoIWRldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGRldCA9IDEuMCAvIGRldDtcbiAgb3V0WzBdID0gYjAxICogZGV0O1xuICBvdXRbMV0gPSAoLWEyMiAqIGEwMSArIGEwMiAqIGEyMSkgKiBkZXQ7XG4gIG91dFsyXSA9IChhMTIgKiBhMDEgLSBhMDIgKiBhMTEpICogZGV0O1xuICBvdXRbM10gPSBiMTEgKiBkZXQ7XG4gIG91dFs0XSA9IChhMjIgKiBhMDAgLSBhMDIgKiBhMjApICogZGV0O1xuICBvdXRbNV0gPSAoLWExMiAqIGEwMCArIGEwMiAqIGExMCkgKiBkZXQ7XG4gIG91dFs2XSA9IGIyMSAqIGRldDtcbiAgb3V0WzddID0gKC1hMjEgKiBhMDAgKyBhMDEgKiBhMjApICogZGV0O1xuICBvdXRbOF0gPSAoYTExICogYTAwIC0gYTAxICogYTEwKSAqIGRldDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgIGEwMSA9IGFbMV0sXG4gICAgYTAyID0gYVsyXTtcbiAgdmFyIGExMCA9IGFbM10sXG4gICAgYTExID0gYVs0XSxcbiAgICBhMTIgPSBhWzVdO1xuICB2YXIgYTIwID0gYVs2XSxcbiAgICBhMjEgPSBhWzddLFxuICAgIGEyMiA9IGFbOF07XG4gIG91dFswXSA9IGExMSAqIGEyMiAtIGExMiAqIGEyMTtcbiAgb3V0WzFdID0gYTAyICogYTIxIC0gYTAxICogYTIyO1xuICBvdXRbMl0gPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gIG91dFszXSA9IGExMiAqIGEyMCAtIGExMCAqIGEyMjtcbiAgb3V0WzRdID0gYTAwICogYTIyIC0gYTAyICogYTIwO1xuICBvdXRbNV0gPSBhMDIgKiBhMTAgLSBhMDAgKiBhMTI7XG4gIG91dFs2XSA9IGExMCAqIGEyMSAtIGExMSAqIGEyMDtcbiAgb3V0WzddID0gYTAxICogYTIwIC0gYTAwICogYTIxO1xuICBvdXRbOF0gPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgYTAxID0gYVsxXSxcbiAgICBhMDIgPSBhWzJdO1xuICB2YXIgYTEwID0gYVszXSxcbiAgICBhMTEgPSBhWzRdLFxuICAgIGExMiA9IGFbNV07XG4gIHZhciBhMjAgPSBhWzZdLFxuICAgIGEyMSA9IGFbN10sXG4gICAgYTIyID0gYVs4XTtcbiAgcmV0dXJuIGEwMCAqIChhMjIgKiBhMTEgLSBhMTIgKiBhMjEpICsgYTAxICogKC1hMjIgKiBhMTAgKyBhMTIgKiBhMjApICsgYTAyICogKGEyMSAqIGExMCAtIGExMSAqIGEyMCk7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0MydzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICBhMDEgPSBhWzFdLFxuICAgIGEwMiA9IGFbMl07XG4gIHZhciBhMTAgPSBhWzNdLFxuICAgIGExMSA9IGFbNF0sXG4gICAgYTEyID0gYVs1XTtcbiAgdmFyIGEyMCA9IGFbNl0sXG4gICAgYTIxID0gYVs3XSxcbiAgICBhMjIgPSBhWzhdO1xuICB2YXIgYjAwID0gYlswXSxcbiAgICBiMDEgPSBiWzFdLFxuICAgIGIwMiA9IGJbMl07XG4gIHZhciBiMTAgPSBiWzNdLFxuICAgIGIxMSA9IGJbNF0sXG4gICAgYjEyID0gYls1XTtcbiAgdmFyIGIyMCA9IGJbNl0sXG4gICAgYjIxID0gYls3XSxcbiAgICBiMjIgPSBiWzhdO1xuICBvdXRbMF0gPSBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjA7XG4gIG91dFsxXSA9IGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMTtcbiAgb3V0WzJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyO1xuICBvdXRbM10gPSBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjA7XG4gIG91dFs0XSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMTtcbiAgb3V0WzVdID0gYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyO1xuICBvdXRbNl0gPSBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjA7XG4gIG91dFs3XSA9IGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMTtcbiAgb3V0WzhdID0gYjIwICogYTAyICsgYjIxICogYTEyICsgYjIyICogYTIyO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zbGF0ZSBhIG1hdDMgYnkgdGhlIGdpdmVuIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgbWF0cml4IHRvIHRyYW5zbGF0ZVxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICBhMDEgPSBhWzFdLFxuICAgIGEwMiA9IGFbMl0sXG4gICAgYTEwID0gYVszXSxcbiAgICBhMTEgPSBhWzRdLFxuICAgIGExMiA9IGFbNV0sXG4gICAgYTIwID0gYVs2XSxcbiAgICBhMjEgPSBhWzddLFxuICAgIGEyMiA9IGFbOF0sXG4gICAgeCA9IHZbMF0sXG4gICAgeSA9IHZbMV07XG4gIG91dFswXSA9IGEwMDtcbiAgb3V0WzFdID0gYTAxO1xuICBvdXRbMl0gPSBhMDI7XG4gIG91dFszXSA9IGExMDtcbiAgb3V0WzRdID0gYTExO1xuICBvdXRbNV0gPSBhMTI7XG4gIG91dFs2XSA9IHggKiBhMDAgKyB5ICogYTEwICsgYTIwO1xuICBvdXRbN10gPSB4ICogYTAxICsgeSAqIGExMSArIGEyMTtcbiAgb3V0WzhdID0geCAqIGEwMiArIHkgKiBhMTIgKyBhMjI7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDMgYnkgdGhlIGdpdmVuIGFuZ2xlXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKG91dCwgYSwgcmFkKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgIGEwMSA9IGFbMV0sXG4gICAgYTAyID0gYVsyXSxcbiAgICBhMTAgPSBhWzNdLFxuICAgIGExMSA9IGFbNF0sXG4gICAgYTEyID0gYVs1XSxcbiAgICBhMjAgPSBhWzZdLFxuICAgIGEyMSA9IGFbN10sXG4gICAgYTIyID0gYVs4XSxcbiAgICBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICBjID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYyAqIGEwMCArIHMgKiBhMTA7XG4gIG91dFsxXSA9IGMgKiBhMDEgKyBzICogYTExO1xuICBvdXRbMl0gPSBjICogYTAyICsgcyAqIGExMjtcbiAgb3V0WzNdID0gYyAqIGExMCAtIHMgKiBhMDA7XG4gIG91dFs0XSA9IGMgKiBhMTEgLSBzICogYTAxO1xuICBvdXRbNV0gPSBjICogYTEyIC0gcyAqIGEwMjtcbiAgb3V0WzZdID0gYTIwO1xuICBvdXRbN10gPSBhMjE7XG4gIG91dFs4XSA9IGEyMjtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTY2FsZXMgdGhlIG1hdDMgYnkgdGhlIGRpbWVuc2lvbnMgaW4gdGhlIGdpdmVuIHZlYzJcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IHYgdGhlIHZlYzIgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgdikge1xuICB2YXIgeCA9IHZbMF0sXG4gICAgeSA9IHZbMV07XG4gIG91dFswXSA9IHggKiBhWzBdO1xuICBvdXRbMV0gPSB4ICogYVsxXTtcbiAgb3V0WzJdID0geCAqIGFbMl07XG4gIG91dFszXSA9IHkgKiBhWzNdO1xuICBvdXRbNF0gPSB5ICogYVs0XTtcbiAgb3V0WzVdID0geSAqIGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHRyYW5zbGF0aW9uXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0My5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQzLnRyYW5zbGF0ZShkZXN0LCBkZXN0LCB2ZWMpO1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVRyYW5zbGF0aW9uKG91dCwgdikge1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAxO1xuICBvdXRbNV0gPSAwO1xuICBvdXRbNl0gPSB2WzBdO1xuICBvdXRbN10gPSB2WzFdO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIGdpdmVuIGFuZ2xlXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0My5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQzLnJvdGF0ZShkZXN0LCBkZXN0LCByYWQpO1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb24ob3V0LCByYWQpIHtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgIGMgPSBNYXRoLmNvcyhyYWQpO1xuICBvdXRbMF0gPSBjO1xuICBvdXRbMV0gPSBzO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAtcztcbiAgb3V0WzRdID0gYztcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3Igc2NhbGluZ1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDMuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0My5zY2FsZShkZXN0LCBkZXN0LCB2ZWMpO1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSB2IFNjYWxpbmcgdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tU2NhbGluZyhvdXQsIHYpIHtcbiAgb3V0WzBdID0gdlswXTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gdlsxXTtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBmcm9tIGEgbWF0MmQgaW50byBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDJkfSBhIHRoZSBtYXRyaXggdG8gY29weVxuICogQHJldHVybnMge21hdDN9IG91dFxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21NYXQyZChvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gYVsyXTtcbiAgb3V0WzRdID0gYVszXTtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gYVs0XTtcbiAgb3V0WzddID0gYVs1XTtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIGEgM3gzIG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBxdWF0ZXJuaW9uXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IHEgUXVhdGVybmlvbiB0byBjcmVhdGUgbWF0cml4IGZyb21cbiAqXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUXVhdChvdXQsIHEpIHtcbiAgdmFyIHggPSBxWzBdLFxuICAgIHkgPSBxWzFdLFxuICAgIHogPSBxWzJdLFxuICAgIHcgPSBxWzNdO1xuICB2YXIgeDIgPSB4ICsgeDtcbiAgdmFyIHkyID0geSArIHk7XG4gIHZhciB6MiA9IHogKyB6O1xuICB2YXIgeHggPSB4ICogeDI7XG4gIHZhciB5eCA9IHkgKiB4MjtcbiAgdmFyIHl5ID0geSAqIHkyO1xuICB2YXIgenggPSB6ICogeDI7XG4gIHZhciB6eSA9IHogKiB5MjtcbiAgdmFyIHp6ID0geiAqIHoyO1xuICB2YXIgd3ggPSB3ICogeDI7XG4gIHZhciB3eSA9IHcgKiB5MjtcbiAgdmFyIHd6ID0gdyAqIHoyO1xuICBvdXRbMF0gPSAxIC0geXkgLSB6ejtcbiAgb3V0WzNdID0geXggLSB3ejtcbiAgb3V0WzZdID0genggKyB3eTtcbiAgb3V0WzFdID0geXggKyB3ejtcbiAgb3V0WzRdID0gMSAtIHh4IC0geno7XG4gIG91dFs3XSA9IHp5IC0gd3g7XG4gIG91dFsyXSA9IHp4IC0gd3k7XG4gIG91dFs1XSA9IHp5ICsgd3g7XG4gIG91dFs4XSA9IDEgLSB4eCAtIHl5O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgYSAzeDMgbm9ybWFsIG1hdHJpeCAodHJhbnNwb3NlIGludmVyc2UpIGZyb20gdGhlIDR4NCBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSBNYXQ0IHRvIGRlcml2ZSB0aGUgbm9ybWFsIG1hdHJpeCBmcm9tXG4gKlxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsRnJvbU1hdDQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgIGEwMSA9IGFbMV0sXG4gICAgYTAyID0gYVsyXSxcbiAgICBhMDMgPSBhWzNdO1xuICB2YXIgYTEwID0gYVs0XSxcbiAgICBhMTEgPSBhWzVdLFxuICAgIGExMiA9IGFbNl0sXG4gICAgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF0sXG4gICAgYTIxID0gYVs5XSxcbiAgICBhMjIgPSBhWzEwXSxcbiAgICBhMjMgPSBhWzExXTtcbiAgdmFyIGEzMCA9IGFbMTJdLFxuICAgIGEzMSA9IGFbMTNdLFxuICAgIGEzMiA9IGFbMTRdLFxuICAgIGEzMyA9IGFbMTVdO1xuICB2YXIgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICB2YXIgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xuICB2YXIgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xuICB2YXIgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICB2YXIgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xuICB2YXIgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xuICB2YXIgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xuICB2YXIgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xuICB2YXIgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xuICB2YXIgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xuICB2YXIgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xuICB2YXIgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xuXG4gIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgdmFyIGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcbiAgaWYgKCFkZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBkZXQgPSAxLjAgLyBkZXQ7XG4gIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xuICBvdXRbMV0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcbiAgb3V0WzJdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XG4gIG91dFszXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICBvdXRbNF0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcbiAgb3V0WzVdID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XG4gIG91dFs2XSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xuICBvdXRbN10gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldDtcbiAgb3V0WzhdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgMkQgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFdpZHRoIG9mIHlvdXIgZ2wgY29udGV4dFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgZ2wgY29udGV4dFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdGlvbihvdXQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgb3V0WzBdID0gMiAvIHdpZHRoO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAtMiAvIGhlaWdodDtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gLTE7XG4gIG91dFs3XSA9IDE7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSBtYXRyaXggdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuIFwibWF0MyhcIiArIGFbMF0gKyBcIiwgXCIgKyBhWzFdICsgXCIsIFwiICsgYVsyXSArIFwiLCBcIiArIGFbM10gKyBcIiwgXCIgKyBhWzRdICsgXCIsIFwiICsgYVs1XSArIFwiLCBcIiArIGFbNl0gKyBcIiwgXCIgKyBhWzddICsgXCIsIFwiICsgYVs4XSArIFwiKVwiO1xufVxuXG4vKipcbiAqIFJldHVybnMgRnJvYmVuaXVzIG5vcm0gb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIG1hdHJpeCB0byBjYWxjdWxhdGUgRnJvYmVuaXVzIG5vcm0gb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IEZyb2Jlbml1cyBub3JtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9iKGEpIHtcbiAgcmV0dXJuIE1hdGguc3FydChhWzBdICogYVswXSArIGFbMV0gKiBhWzFdICsgYVsyXSAqIGFbMl0gKyBhWzNdICogYVszXSArIGFbNF0gKiBhWzRdICsgYVs1XSAqIGFbNV0gKyBhWzZdICogYVs2XSArIGFbN10gKiBhWzddICsgYVs4XSAqIGFbOF0pO1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIG1hdDMnc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICBvdXRbNF0gPSBhWzRdICsgYls0XTtcbiAgb3V0WzVdID0gYVs1XSArIGJbNV07XG4gIG91dFs2XSA9IGFbNl0gKyBiWzZdO1xuICBvdXRbN10gPSBhWzddICsgYls3XTtcbiAgb3V0WzhdID0gYVs4XSArIGJbOF07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIG1hdHJpeCBiIGZyb20gbWF0cml4IGFcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIG91dFszXSA9IGFbM10gLSBiWzNdO1xuICBvdXRbNF0gPSBhWzRdIC0gYls0XTtcbiAgb3V0WzVdID0gYVs1XSAtIGJbNV07XG4gIG91dFs2XSA9IGFbNl0gLSBiWzZdO1xuICBvdXRbN10gPSBhWzddIC0gYls3XTtcbiAgb3V0WzhdID0gYVs4XSAtIGJbOF07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTXVsdGlwbHkgZWFjaCBlbGVtZW50IG9mIHRoZSBtYXRyaXggYnkgYSBzY2FsYXIuXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgbWF0cml4J3MgZWxlbWVudHMgYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICBvdXRbM10gPSBhWzNdICogYjtcbiAgb3V0WzRdID0gYVs0XSAqIGI7XG4gIG91dFs1XSA9IGFbNV0gKiBiO1xuICBvdXRbNl0gPSBhWzZdICogYjtcbiAgb3V0WzddID0gYVs3XSAqIGI7XG4gIG91dFs4XSA9IGFbOF0gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIG1hdDMncyBhZnRlciBtdWx0aXBseWluZyBlYWNoIGVsZW1lbnQgb2YgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiJ3MgZWxlbWVudHMgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXJBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICBvdXRbM10gPSBhWzNdICsgYlszXSAqIHNjYWxlO1xuICBvdXRbNF0gPSBhWzRdICsgYls0XSAqIHNjYWxlO1xuICBvdXRbNV0gPSBhWzVdICsgYls1XSAqIHNjYWxlO1xuICBvdXRbNl0gPSBhWzZdICsgYls2XSAqIHNjYWxlO1xuICBvdXRbN10gPSBhWzddICsgYls3XSAqIHNjYWxlO1xuICBvdXRbOF0gPSBhWzhdICsgYls4XSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSBUaGUgZmlyc3QgbWF0cml4LlxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGIgVGhlIHNlY29uZCBtYXRyaXguXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJiBhWzNdID09PSBiWzNdICYmIGFbNF0gPT09IGJbNF0gJiYgYVs1XSA9PT0gYls1XSAmJiBhWzZdID09PSBiWzZdICYmIGFbN10gPT09IGJbN10gJiYgYVs4XSA9PT0gYls4XTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgVGhlIGZpcnN0IG1hdHJpeC5cbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBiIFRoZSBzZWNvbmQgbWF0cml4LlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1hdHJpY2VzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICBhMSA9IGFbMV0sXG4gICAgYTIgPSBhWzJdLFxuICAgIGEzID0gYVszXSxcbiAgICBhNCA9IGFbNF0sXG4gICAgYTUgPSBhWzVdLFxuICAgIGE2ID0gYVs2XSxcbiAgICBhNyA9IGFbN10sXG4gICAgYTggPSBhWzhdO1xuICB2YXIgYjAgPSBiWzBdLFxuICAgIGIxID0gYlsxXSxcbiAgICBiMiA9IGJbMl0sXG4gICAgYjMgPSBiWzNdLFxuICAgIGI0ID0gYls0XSxcbiAgICBiNSA9IGJbNV0sXG4gICAgYjYgPSBiWzZdLFxuICAgIGI3ID0gYls3XSxcbiAgICBiOCA9IGJbOF07XG4gIHJldHVybiBNYXRoLmFicyhhMCAtIGIwKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMCksIE1hdGguYWJzKGIwKSkgJiYgTWF0aC5hYnMoYTEgLSBiMSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEpLCBNYXRoLmFicyhiMSkpICYmIE1hdGguYWJzKGEyIC0gYjIpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEyKSwgTWF0aC5hYnMoYjIpKSAmJiBNYXRoLmFicyhhMyAtIGIzKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMyksIE1hdGguYWJzKGIzKSkgJiYgTWF0aC5hYnMoYTQgLSBiNCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTQpLCBNYXRoLmFicyhiNCkpICYmIE1hdGguYWJzKGE1IC0gYjUpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE1KSwgTWF0aC5hYnMoYjUpKSAmJiBNYXRoLmFicyhhNiAtIGI2KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNiksIE1hdGguYWJzKGI2KSkgJiYgTWF0aC5hYnMoYTcgLSBiNykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTcpLCBNYXRoLmFicyhiNykpICYmIE1hdGguYWJzKGE4IC0gYjgpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE4KSwgTWF0aC5hYnMoYjgpKTtcbn1cblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDMubXVsdGlwbHl9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBtdWwgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDMuc3VidHJhY3R9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBzdWIgPSBzdWJ0cmFjdDsiLCJpbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb24uanNcIjtcblxuLyoqXG4gKiA0eDQgTWF0cml4PGJyPkZvcm1hdDogY29sdW1uLW1ham9yLCB3aGVuIHR5cGVkIG91dCBpdCBsb29rcyBsaWtlIHJvdy1tYWpvcjxicj5UaGUgbWF0cmljZXMgYXJlIGJlaW5nIHBvc3QgbXVsdGlwbGllZC5cbiAqIEBtb2R1bGUgbWF0NFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBtYXQ0XG4gKlxuICogQHJldHVybnMge21hdDR9IGEgbmV3IDR4NCBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDE2KTtcbiAgaWYgKGdsTWF0cml4LkFSUkFZX1RZUEUgIT0gRmxvYXQzMkFycmF5KSB7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICB9XG4gIG91dFswXSA9IDE7XG4gIG91dFs1XSA9IDE7XG4gIG91dFsxMF0gPSAxO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSBtYXRyaXggdG8gY2xvbmVcbiAqIEByZXR1cm5zIHttYXQ0fSBhIG5ldyA0eDQgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgxNik7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIG91dFs5XSA9IGFbOV07XG4gIG91dFsxMF0gPSBhWzEwXTtcbiAgb3V0WzExXSA9IGFbMTFdO1xuICBvdXRbMTJdID0gYVsxMl07XG4gIG91dFsxM10gPSBhWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdO1xuICBvdXRbMTVdID0gYVsxNV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgb3V0WzldID0gYVs5XTtcbiAgb3V0WzEwXSA9IGFbMTBdO1xuICBvdXRbMTFdID0gYVsxMV07XG4gIG91dFsxMl0gPSBhWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdO1xuICBvdXRbMTRdID0gYVsxNF07XG4gIG91dFsxNV0gPSBhWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgbWF0NCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTAyIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDIgcG9zaXRpb24gKGluZGV4IDIpXG4gKiBAcGFyYW0ge051bWJlcn0gbTAzIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDMgcG9zaXRpb24gKGluZGV4IDMpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDUpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDYpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEzIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDMgcG9zaXRpb24gKGluZGV4IDcpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIwIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDAgcG9zaXRpb24gKGluZGV4IDgpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDkpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIyIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDIgcG9zaXRpb24gKGluZGV4IDEwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMyBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAxMSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzAgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMTIpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMxIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDEgcG9zaXRpb24gKGluZGV4IDEzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMiBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxNClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzMgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTUpXG4gKiBAcmV0dXJucyB7bWF0NH0gQSBuZXcgbWF0NFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyhtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDE2KTtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTAzO1xuICBvdXRbNF0gPSBtMTA7XG4gIG91dFs1XSA9IG0xMTtcbiAgb3V0WzZdID0gbTEyO1xuICBvdXRbN10gPSBtMTM7XG4gIG91dFs4XSA9IG0yMDtcbiAgb3V0WzldID0gbTIxO1xuICBvdXRbMTBdID0gbTIyO1xuICBvdXRbMTFdID0gbTIzO1xuICBvdXRbMTJdID0gbTMwO1xuICBvdXRbMTNdID0gbTMxO1xuICBvdXRbMTRdID0gbTMyO1xuICBvdXRbMTVdID0gbTMzO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIG1hdDQgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTAyIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDIgcG9zaXRpb24gKGluZGV4IDIpXG4gKiBAcGFyYW0ge051bWJlcn0gbTAzIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDMgcG9zaXRpb24gKGluZGV4IDMpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDUpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDYpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEzIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDMgcG9zaXRpb24gKGluZGV4IDcpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIwIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDAgcG9zaXRpb24gKGluZGV4IDgpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDkpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIyIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDIgcG9zaXRpb24gKGluZGV4IDEwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMyBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAxMSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzAgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMTIpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMxIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDEgcG9zaXRpb24gKGluZGV4IDEzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMiBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxNClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzMgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTUpXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCBtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpIHtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTAzO1xuICBvdXRbNF0gPSBtMTA7XG4gIG91dFs1XSA9IG0xMTtcbiAgb3V0WzZdID0gbTEyO1xuICBvdXRbN10gPSBtMTM7XG4gIG91dFs4XSA9IG0yMDtcbiAgb3V0WzldID0gbTIxO1xuICBvdXRbMTBdID0gbTIyO1xuICBvdXRbMTFdID0gbTIzO1xuICBvdXRbMTJdID0gbTMwO1xuICBvdXRbMTNdID0gbTMxO1xuICBvdXRbMTRdID0gbTMyO1xuICBvdXRbMTVdID0gbTMzO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCBhIG1hdDQgdG8gdGhlIGlkZW50aXR5IG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gMTtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDE7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc3Bvc2UgdGhlIHZhbHVlcyBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZShvdXQsIGEpIHtcbiAgLy8gSWYgd2UgYXJlIHRyYW5zcG9zaW5nIG91cnNlbHZlcyB3ZSBjYW4gc2tpcCBhIGZldyBzdGVwcyBidXQgaGF2ZSB0byBjYWNoZSBzb21lIHZhbHVlc1xuICBpZiAob3V0ID09PSBhKSB7XG4gICAgdmFyIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdLFxuICAgICAgYTAzID0gYVszXTtcbiAgICB2YXIgYTEyID0gYVs2XSxcbiAgICAgIGExMyA9IGFbN107XG4gICAgdmFyIGEyMyA9IGFbMTFdO1xuICAgIG91dFsxXSA9IGFbNF07XG4gICAgb3V0WzJdID0gYVs4XTtcbiAgICBvdXRbM10gPSBhWzEyXTtcbiAgICBvdXRbNF0gPSBhMDE7XG4gICAgb3V0WzZdID0gYVs5XTtcbiAgICBvdXRbN10gPSBhWzEzXTtcbiAgICBvdXRbOF0gPSBhMDI7XG4gICAgb3V0WzldID0gYTEyO1xuICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICBvdXRbMTJdID0gYTAzO1xuICAgIG91dFsxM10gPSBhMTM7XG4gICAgb3V0WzE0XSA9IGEyMztcbiAgfSBlbHNlIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbNF07XG4gICAgb3V0WzJdID0gYVs4XTtcbiAgICBvdXRbM10gPSBhWzEyXTtcbiAgICBvdXRbNF0gPSBhWzFdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs5XTtcbiAgICBvdXRbN10gPSBhWzEzXTtcbiAgICBvdXRbOF0gPSBhWzJdO1xuICAgIG91dFs5XSA9IGFbNl07XG4gICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICBvdXRbMTJdID0gYVszXTtcbiAgICBvdXRbMTNdID0gYVs3XTtcbiAgICBvdXRbMTRdID0gYVsxMV07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0IHwgbnVsbH0gb3V0LCBvciBudWxsIGlmIHNvdXJjZSBtYXRyaXggaXMgbm90IGludmVydGlibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgYTAxID0gYVsxXSxcbiAgICBhMDIgPSBhWzJdLFxuICAgIGEwMyA9IGFbM107XG4gIHZhciBhMTAgPSBhWzRdLFxuICAgIGExMSA9IGFbNV0sXG4gICAgYTEyID0gYVs2XSxcbiAgICBhMTMgPSBhWzddO1xuICB2YXIgYTIwID0gYVs4XSxcbiAgICBhMjEgPSBhWzldLFxuICAgIGEyMiA9IGFbMTBdLFxuICAgIGEyMyA9IGFbMTFdO1xuICB2YXIgYTMwID0gYVsxMl0sXG4gICAgYTMxID0gYVsxM10sXG4gICAgYTMyID0gYVsxNF0sXG4gICAgYTMzID0gYVsxNV07XG4gIHZhciBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gIHZhciBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XG4gIHZhciBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XG4gIHZhciBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gIHZhciBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XG4gIHZhciBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XG4gIHZhciBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XG4gIHZhciBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XG4gIHZhciBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XG4gIHZhciBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XG4gIHZhciBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XG4gIHZhciBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICB2YXIgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuICBpZiAoIWRldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGRldCA9IDEuMCAvIGRldDtcbiAgb3V0WzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XG4gIG91dFsxXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICBvdXRbMl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcbiAgb3V0WzNdID0gKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQ7XG4gIG91dFs0XSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xuICBvdXRbNV0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcbiAgb3V0WzZdID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gIG91dFs3XSA9IChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0O1xuICBvdXRbOF0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcbiAgb3V0WzldID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XG4gIG91dFsxMF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcbiAgb3V0WzExXSA9IChhMjEgKiBiMDIgLSBhMjAgKiBiMDQgLSBhMjMgKiBiMDApICogZGV0O1xuICBvdXRbMTJdID0gKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQ7XG4gIG91dFsxM10gPSAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldDtcbiAgb3V0WzE0XSA9IChhMzEgKiBiMDEgLSBhMzAgKiBiMDMgLSBhMzIgKiBiMDApICogZGV0O1xuICBvdXRbMTVdID0gKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQ7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYWRqdWdhdGUgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGpvaW50KG91dCwgYSkge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICBhMDEgPSBhWzFdLFxuICAgIGEwMiA9IGFbMl0sXG4gICAgYTAzID0gYVszXTtcbiAgdmFyIGExMCA9IGFbNF0sXG4gICAgYTExID0gYVs1XSxcbiAgICBhMTIgPSBhWzZdLFxuICAgIGExMyA9IGFbN107XG4gIHZhciBhMjAgPSBhWzhdLFxuICAgIGEyMSA9IGFbOV0sXG4gICAgYTIyID0gYVsxMF0sXG4gICAgYTIzID0gYVsxMV07XG4gIHZhciBhMzAgPSBhWzEyXSxcbiAgICBhMzEgPSBhWzEzXSxcbiAgICBhMzIgPSBhWzE0XSxcbiAgICBhMzMgPSBhWzE1XTtcbiAgdmFyIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcbiAgdmFyIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcbiAgdmFyIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcbiAgdmFyIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcbiAgdmFyIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcbiAgdmFyIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcbiAgdmFyIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcbiAgdmFyIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcbiAgdmFyIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcbiAgdmFyIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcbiAgdmFyIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcbiAgdmFyIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcbiAgb3V0WzBdID0gYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5O1xuICBvdXRbMV0gPSBhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDk7XG4gIG91dFsyXSA9IGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMztcbiAgb3V0WzNdID0gYTIyICogYjA0IC0gYTIxICogYjA1IC0gYTIzICogYjAzO1xuICBvdXRbNF0gPSBhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDc7XG4gIG91dFs1XSA9IGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNztcbiAgb3V0WzZdID0gYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxO1xuICBvdXRbN10gPSBhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDE7XG4gIG91dFs4XSA9IGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNjtcbiAgb3V0WzldID0gYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2O1xuICBvdXRbMTBdID0gYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwO1xuICBvdXRbMTFdID0gYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwO1xuICBvdXRbMTJdID0gYTExICogYjA3IC0gYTEwICogYjA5IC0gYTEyICogYjA2O1xuICBvdXRbMTNdID0gYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2O1xuICBvdXRbMTRdID0gYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwO1xuICBvdXRbMTVdID0gYTIwICogYjAzIC0gYTIxICogYjAxICsgYTIyICogYjAwO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkZXRlcm1pbmFudCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudChhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgIGEwMSA9IGFbMV0sXG4gICAgYTAyID0gYVsyXSxcbiAgICBhMDMgPSBhWzNdO1xuICB2YXIgYTEwID0gYVs0XSxcbiAgICBhMTEgPSBhWzVdLFxuICAgIGExMiA9IGFbNl0sXG4gICAgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF0sXG4gICAgYTIxID0gYVs5XSxcbiAgICBhMjIgPSBhWzEwXSxcbiAgICBhMjMgPSBhWzExXTtcbiAgdmFyIGEzMCA9IGFbMTJdLFxuICAgIGEzMSA9IGFbMTNdLFxuICAgIGEzMiA9IGFbMTRdLFxuICAgIGEzMyA9IGFbMTVdO1xuICB2YXIgYjAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gIHZhciBiMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcbiAgdmFyIGIyID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICB2YXIgYjMgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XG4gIHZhciBiNCA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcbiAgdmFyIGI1ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xuICB2YXIgYjYgPSBhMDAgKiBiNSAtIGEwMSAqIGI0ICsgYTAyICogYjM7XG4gIHZhciBiNyA9IGExMCAqIGI1IC0gYTExICogYjQgKyBhMTIgKiBiMztcbiAgdmFyIGI4ID0gYTIwICogYjIgLSBhMjEgKiBiMSArIGEyMiAqIGIwO1xuICB2YXIgYjkgPSBhMzAgKiBiMiAtIGEzMSAqIGIxICsgYTMyICogYjA7XG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICByZXR1cm4gYTEzICogYjYgLSBhMDMgKiBiNyArIGEzMyAqIGI4IC0gYTIzICogYjk7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0NHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgIGEwMSA9IGFbMV0sXG4gICAgYTAyID0gYVsyXSxcbiAgICBhMDMgPSBhWzNdO1xuICB2YXIgYTEwID0gYVs0XSxcbiAgICBhMTEgPSBhWzVdLFxuICAgIGExMiA9IGFbNl0sXG4gICAgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF0sXG4gICAgYTIxID0gYVs5XSxcbiAgICBhMjIgPSBhWzEwXSxcbiAgICBhMjMgPSBhWzExXTtcbiAgdmFyIGEzMCA9IGFbMTJdLFxuICAgIGEzMSA9IGFbMTNdLFxuICAgIGEzMiA9IGFbMTRdLFxuICAgIGEzMyA9IGFbMTVdO1xuXG4gIC8vIENhY2hlIG9ubHkgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGUgc2Vjb25kIG1hdHJpeFxuICB2YXIgYjAgPSBiWzBdLFxuICAgIGIxID0gYlsxXSxcbiAgICBiMiA9IGJbMl0sXG4gICAgYjMgPSBiWzNdO1xuICBvdXRbMF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgb3V0WzFdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gIG91dFsyXSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICBvdXRbM10gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcbiAgYjAgPSBiWzRdO1xuICBiMSA9IGJbNV07XG4gIGIyID0gYls2XTtcbiAgYjMgPSBiWzddO1xuICBvdXRbNF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgb3V0WzVdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gIG91dFs2XSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICBvdXRbN10gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcbiAgYjAgPSBiWzhdO1xuICBiMSA9IGJbOV07XG4gIGIyID0gYlsxMF07XG4gIGIzID0gYlsxMV07XG4gIG91dFs4XSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xuICBvdXRbOV0gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcbiAgb3V0WzEwXSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICBvdXRbMTFdID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XG4gIGIwID0gYlsxMl07XG4gIGIxID0gYlsxM107XG4gIGIyID0gYlsxNF07XG4gIGIzID0gYlsxNV07XG4gIG91dFsxMl0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgb3V0WzEzXSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xuICBvdXRbMTRdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gIG91dFsxNV0gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQ0IGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2IHZlY3RvciB0byB0cmFuc2xhdGUgYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgdmFyIHggPSB2WzBdLFxuICAgIHkgPSB2WzFdLFxuICAgIHogPSB2WzJdO1xuICB2YXIgYTAwLCBhMDEsIGEwMiwgYTAzO1xuICB2YXIgYTEwLCBhMTEsIGExMiwgYTEzO1xuICB2YXIgYTIwLCBhMjEsIGEyMiwgYTIzO1xuICBpZiAoYSA9PT0gb3V0KSB7XG4gICAgb3V0WzEyXSA9IGFbMF0gKiB4ICsgYVs0XSAqIHkgKyBhWzhdICogeiArIGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzFdICogeCArIGFbNV0gKiB5ICsgYVs5XSAqIHogKyBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsyXSAqIHggKyBhWzZdICogeSArIGFbMTBdICogeiArIGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzNdICogeCArIGFbN10gKiB5ICsgYVsxMV0gKiB6ICsgYVsxNV07XG4gIH0gZWxzZSB7XG4gICAgYTAwID0gYVswXTtcbiAgICBhMDEgPSBhWzFdO1xuICAgIGEwMiA9IGFbMl07XG4gICAgYTAzID0gYVszXTtcbiAgICBhMTAgPSBhWzRdO1xuICAgIGExMSA9IGFbNV07XG4gICAgYTEyID0gYVs2XTtcbiAgICBhMTMgPSBhWzddO1xuICAgIGEyMCA9IGFbOF07XG4gICAgYTIxID0gYVs5XTtcbiAgICBhMjIgPSBhWzEwXTtcbiAgICBhMjMgPSBhWzExXTtcbiAgICBvdXRbMF0gPSBhMDA7XG4gICAgb3V0WzFdID0gYTAxO1xuICAgIG91dFsyXSA9IGEwMjtcbiAgICBvdXRbM10gPSBhMDM7XG4gICAgb3V0WzRdID0gYTEwO1xuICAgIG91dFs1XSA9IGExMTtcbiAgICBvdXRbNl0gPSBhMTI7XG4gICAgb3V0WzddID0gYTEzO1xuICAgIG91dFs4XSA9IGEyMDtcbiAgICBvdXRbOV0gPSBhMjE7XG4gICAgb3V0WzEwXSA9IGEyMjtcbiAgICBvdXRbMTFdID0gYTIzO1xuICAgIG91dFsxMl0gPSBhMDAgKiB4ICsgYTEwICogeSArIGEyMCAqIHogKyBhWzEyXTtcbiAgICBvdXRbMTNdID0gYTAxICogeCArIGExMSAqIHkgKyBhMjEgKiB6ICsgYVsxM107XG4gICAgb3V0WzE0XSA9IGEwMiAqIHggKyBhMTIgKiB5ICsgYTIyICogeiArIGFbMTRdO1xuICAgIG91dFsxNV0gPSBhMDMgKiB4ICsgYTEzICogeSArIGEyMyAqIHogKyBhWzE1XTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0NCBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMyBub3QgdXNpbmcgdmVjdG9yaXphdGlvblxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdiB0aGUgdmVjMyB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gIHZhciB4ID0gdlswXSxcbiAgICB5ID0gdlsxXSxcbiAgICB6ID0gdlsyXTtcbiAgb3V0WzBdID0gYVswXSAqIHg7XG4gIG91dFsxXSA9IGFbMV0gKiB4O1xuICBvdXRbMl0gPSBhWzJdICogeDtcbiAgb3V0WzNdID0gYVszXSAqIHg7XG4gIG91dFs0XSA9IGFbNF0gKiB5O1xuICBvdXRbNV0gPSBhWzVdICogeTtcbiAgb3V0WzZdID0gYVs2XSAqIHk7XG4gIG91dFs3XSA9IGFbN10gKiB5O1xuICBvdXRbOF0gPSBhWzhdICogejtcbiAgb3V0WzldID0gYVs5XSAqIHo7XG4gIG91dFsxMF0gPSBhWzEwXSAqIHo7XG4gIG91dFsxMV0gPSBhWzExXSAqIHo7XG4gIG91dFsxMl0gPSBhWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdO1xuICBvdXRbMTRdID0gYVsxNF07XG4gIG91dFsxNV0gPSBhWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0NCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBnaXZlbiBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGF4aXMgdGhlIGF4aXMgdG8gcm90YXRlIGFyb3VuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKG91dCwgYSwgcmFkLCBheGlzKSB7XG4gIHZhciB4ID0gYXhpc1swXSxcbiAgICB5ID0gYXhpc1sxXSxcbiAgICB6ID0gYXhpc1syXTtcbiAgdmFyIGxlbiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICB2YXIgcywgYywgdDtcbiAgdmFyIGEwMCwgYTAxLCBhMDIsIGEwMztcbiAgdmFyIGExMCwgYTExLCBhMTIsIGExMztcbiAgdmFyIGEyMCwgYTIxLCBhMjIsIGEyMztcbiAgdmFyIGIwMCwgYjAxLCBiMDI7XG4gIHZhciBiMTAsIGIxMSwgYjEyO1xuICB2YXIgYjIwLCBiMjEsIGIyMjtcbiAgaWYgKGxlbiA8IGdsTWF0cml4LkVQU0lMT04pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBsZW4gPSAxIC8gbGVuO1xuICB4ICo9IGxlbjtcbiAgeSAqPSBsZW47XG4gIHogKj0gbGVuO1xuICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgYyA9IE1hdGguY29zKHJhZCk7XG4gIHQgPSAxIC0gYztcbiAgYTAwID0gYVswXTtcbiAgYTAxID0gYVsxXTtcbiAgYTAyID0gYVsyXTtcbiAgYTAzID0gYVszXTtcbiAgYTEwID0gYVs0XTtcbiAgYTExID0gYVs1XTtcbiAgYTEyID0gYVs2XTtcbiAgYTEzID0gYVs3XTtcbiAgYTIwID0gYVs4XTtcbiAgYTIxID0gYVs5XTtcbiAgYTIyID0gYVsxMF07XG4gIGEyMyA9IGFbMTFdO1xuXG4gIC8vIENvbnN0cnVjdCB0aGUgZWxlbWVudHMgb2YgdGhlIHJvdGF0aW9uIG1hdHJpeFxuICBiMDAgPSB4ICogeCAqIHQgKyBjO1xuICBiMDEgPSB5ICogeCAqIHQgKyB6ICogcztcbiAgYjAyID0geiAqIHggKiB0IC0geSAqIHM7XG4gIGIxMCA9IHggKiB5ICogdCAtIHogKiBzO1xuICBiMTEgPSB5ICogeSAqIHQgKyBjO1xuICBiMTIgPSB6ICogeSAqIHQgKyB4ICogcztcbiAgYjIwID0geCAqIHogKiB0ICsgeSAqIHM7XG4gIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzO1xuICBiMjIgPSB6ICogeiAqIHQgKyBjO1xuXG4gIC8vIFBlcmZvcm0gcm90YXRpb24tc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gIG91dFswXSA9IGEwMCAqIGIwMCArIGExMCAqIGIwMSArIGEyMCAqIGIwMjtcbiAgb3V0WzFdID0gYTAxICogYjAwICsgYTExICogYjAxICsgYTIxICogYjAyO1xuICBvdXRbMl0gPSBhMDIgKiBiMDAgKyBhMTIgKiBiMDEgKyBhMjIgKiBiMDI7XG4gIG91dFszXSA9IGEwMyAqIGIwMCArIGExMyAqIGIwMSArIGEyMyAqIGIwMjtcbiAgb3V0WzRdID0gYTAwICogYjEwICsgYTEwICogYjExICsgYTIwICogYjEyO1xuICBvdXRbNV0gPSBhMDEgKiBiMTAgKyBhMTEgKiBiMTEgKyBhMjEgKiBiMTI7XG4gIG91dFs2XSA9IGEwMiAqIGIxMCArIGExMiAqIGIxMSArIGEyMiAqIGIxMjtcbiAgb3V0WzddID0gYTAzICogYjEwICsgYTEzICogYjExICsgYTIzICogYjEyO1xuICBvdXRbOF0gPSBhMDAgKiBiMjAgKyBhMTAgKiBiMjEgKyBhMjAgKiBiMjI7XG4gIG91dFs5XSA9IGEwMSAqIGIyMCArIGExMSAqIGIyMSArIGEyMSAqIGIyMjtcbiAgb3V0WzEwXSA9IGEwMiAqIGIyMCArIGExMiAqIGIyMSArIGEyMiAqIGIyMjtcbiAgb3V0WzExXSA9IGEwMyAqIGIyMCArIGExMyAqIGIyMSArIGEyMyAqIGIyMjtcbiAgaWYgKGEgIT09IG91dCkge1xuICAgIC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBYIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB2YXIgYTEwID0gYVs0XTtcbiAgdmFyIGExMSA9IGFbNV07XG4gIHZhciBhMTIgPSBhWzZdO1xuICB2YXIgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF07XG4gIHZhciBhMjEgPSBhWzldO1xuICB2YXIgYTIyID0gYVsxMF07XG4gIHZhciBhMjMgPSBhWzExXTtcbiAgaWYgKGEgIT09IG91dCkge1xuICAgIC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIHJvd3NcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfVxuXG4gIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzRdID0gYTEwICogYyArIGEyMCAqIHM7XG4gIG91dFs1XSA9IGExMSAqIGMgKyBhMjEgKiBzO1xuICBvdXRbNl0gPSBhMTIgKiBjICsgYTIyICogcztcbiAgb3V0WzddID0gYTEzICogYyArIGEyMyAqIHM7XG4gIG91dFs4XSA9IGEyMCAqIGMgLSBhMTAgKiBzO1xuICBvdXRbOV0gPSBhMjEgKiBjIC0gYTExICogcztcbiAgb3V0WzEwXSA9IGEyMiAqIGMgLSBhMTIgKiBzO1xuICBvdXRbMTFdID0gYTIzICogYyAtIGExMyAqIHM7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBZIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB2YXIgYTAwID0gYVswXTtcbiAgdmFyIGEwMSA9IGFbMV07XG4gIHZhciBhMDIgPSBhWzJdO1xuICB2YXIgYTAzID0gYVszXTtcbiAgdmFyIGEyMCA9IGFbOF07XG4gIHZhciBhMjEgPSBhWzldO1xuICB2YXIgYTIyID0gYVsxMF07XG4gIHZhciBhMjMgPSBhWzExXTtcbiAgaWYgKGEgIT09IG91dCkge1xuICAgIC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIHJvd3NcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfVxuXG4gIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzBdID0gYTAwICogYyAtIGEyMCAqIHM7XG4gIG91dFsxXSA9IGEwMSAqIGMgLSBhMjEgKiBzO1xuICBvdXRbMl0gPSBhMDIgKiBjIC0gYTIyICogcztcbiAgb3V0WzNdID0gYTAzICogYyAtIGEyMyAqIHM7XG4gIG91dFs4XSA9IGEwMCAqIHMgKyBhMjAgKiBjO1xuICBvdXRbOV0gPSBhMDEgKiBzICsgYTIxICogYztcbiAgb3V0WzEwXSA9IGEwMiAqIHMgKyBhMjIgKiBjO1xuICBvdXRbMTFdID0gYTAzICogcyArIGEyMyAqIGM7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBaIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB2YXIgYTAwID0gYVswXTtcbiAgdmFyIGEwMSA9IGFbMV07XG4gIHZhciBhMDIgPSBhWzJdO1xuICB2YXIgYTAzID0gYVszXTtcbiAgdmFyIGExMCA9IGFbNF07XG4gIHZhciBhMTEgPSBhWzVdO1xuICB2YXIgYTEyID0gYVs2XTtcbiAgdmFyIGExMyA9IGFbN107XG4gIGlmIChhICE9PSBvdXQpIHtcbiAgICAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCBsYXN0IHJvd1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgb3V0WzldID0gYVs5XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfVxuXG4gIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzBdID0gYTAwICogYyArIGExMCAqIHM7XG4gIG91dFsxXSA9IGEwMSAqIGMgKyBhMTEgKiBzO1xuICBvdXRbMl0gPSBhMDIgKiBjICsgYTEyICogcztcbiAgb3V0WzNdID0gYTAzICogYyArIGExMyAqIHM7XG4gIG91dFs0XSA9IGExMCAqIGMgLSBhMDAgKiBzO1xuICBvdXRbNV0gPSBhMTEgKiBjIC0gYTAxICogcztcbiAgb3V0WzZdID0gYTEyICogYyAtIGEwMiAqIHM7XG4gIG91dFs3XSA9IGExMyAqIGMgLSBhMDMgKiBzO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21UcmFuc2xhdGlvbihvdXQsIHYpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gMTtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDE7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gdlswXTtcbiAgb3V0WzEzXSA9IHZbMV07XG4gIG91dFsxNF0gPSB2WzJdO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3Igc2NhbGluZ1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC5zY2FsZShkZXN0LCBkZXN0LCB2ZWMpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2IFNjYWxpbmcgdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tU2NhbGluZyhvdXQsIHYpIHtcbiAgb3V0WzBdID0gdlswXTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gdlsxXTtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IHZbMl07XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBnaXZlbiBhbmdsZSBhcm91bmQgYSBnaXZlbiBheGlzXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnJvdGF0ZShkZXN0LCBkZXN0LCByYWQsIGF4aXMpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb24ob3V0LCByYWQsIGF4aXMpIHtcbiAgdmFyIHggPSBheGlzWzBdLFxuICAgIHkgPSBheGlzWzFdLFxuICAgIHogPSBheGlzWzJdO1xuICB2YXIgbGVuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG4gIHZhciBzLCBjLCB0O1xuICBpZiAobGVuIDwgZ2xNYXRyaXguRVBTSUxPTikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGxlbiA9IDEgLyBsZW47XG4gIHggKj0gbGVuO1xuICB5ICo9IGxlbjtcbiAgeiAqPSBsZW47XG4gIHMgPSBNYXRoLnNpbihyYWQpO1xuICBjID0gTWF0aC5jb3MocmFkKTtcbiAgdCA9IDEgLSBjO1xuXG4gIC8vIFBlcmZvcm0gcm90YXRpb24tc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gIG91dFswXSA9IHggKiB4ICogdCArIGM7XG4gIG91dFsxXSA9IHkgKiB4ICogdCArIHogKiBzO1xuICBvdXRbMl0gPSB6ICogeCAqIHQgLSB5ICogcztcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0geCAqIHkgKiB0IC0geiAqIHM7XG4gIG91dFs1XSA9IHkgKiB5ICogdCArIGM7XG4gIG91dFs2XSA9IHogKiB5ICogdCArIHggKiBzO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB4ICogeiAqIHQgKyB5ICogcztcbiAgb3V0WzldID0geSAqIHogKiB0IC0geCAqIHM7XG4gIG91dFsxMF0gPSB6ICogeiAqIHQgKyBjO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFggYXhpc1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC5yb3RhdGVYKGRlc3QsIGRlc3QsIHJhZCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21YUm90YXRpb24ob3V0LCByYWQpIHtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQpO1xuICB2YXIgYyA9IE1hdGguY29zKHJhZCk7XG5cbiAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSBjO1xuICBvdXRbNl0gPSBzO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAtcztcbiAgb3V0WzEwXSA9IGM7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnJvdGF0ZVkoZGVzdCwgZGVzdCwgcmFkKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVlSb3RhdGlvbihvdXQsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTtcblxuICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gIG91dFswXSA9IGM7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IC1zO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAxO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSBzO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gYztcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBaIGF4aXNcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQucm90YXRlWihkZXN0LCBkZXN0LCByYWQpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tWlJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpO1xuXG4gIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzBdID0gYztcbiAgb3V0WzFdID0gcztcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gLXM7XG4gIG91dFs1XSA9IGM7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSAxO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgcXVhdGVybmlvbiByb3RhdGlvbiBhbmQgdmVjdG9yIHRyYW5zbGF0aW9uXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCBkZXN0LCB2ZWMpO1xuICogICAgIGxldCBxdWF0TWF0ID0gbWF0NC5jcmVhdGUoKTtcbiAqICAgICBtYXQ0LmZyb21RdWF0KHF1YXRNYXQsIHF1YXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgZGVzdCwgcXVhdE1hdCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24ob3V0LCBxLCB2KSB7XG4gIC8vIFF1YXRlcm5pb24gbWF0aFxuICB2YXIgeCA9IHFbMF0sXG4gICAgeSA9IHFbMV0sXG4gICAgeiA9IHFbMl0sXG4gICAgdyA9IHFbM107XG4gIHZhciB4MiA9IHggKyB4O1xuICB2YXIgeTIgPSB5ICsgeTtcbiAgdmFyIHoyID0geiArIHo7XG4gIHZhciB4eCA9IHggKiB4MjtcbiAgdmFyIHh5ID0geCAqIHkyO1xuICB2YXIgeHogPSB4ICogejI7XG4gIHZhciB5eSA9IHkgKiB5MjtcbiAgdmFyIHl6ID0geSAqIHoyO1xuICB2YXIgenogPSB6ICogejI7XG4gIHZhciB3eCA9IHcgKiB4MjtcbiAgdmFyIHd5ID0gdyAqIHkyO1xuICB2YXIgd3ogPSB3ICogejI7XG4gIG91dFswXSA9IDEgLSAoeXkgKyB6eik7XG4gIG91dFsxXSA9IHh5ICsgd3o7XG4gIG91dFsyXSA9IHh6IC0gd3k7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHh5IC0gd3o7XG4gIG91dFs1XSA9IDEgLSAoeHggKyB6eik7XG4gIG91dFs2XSA9IHl6ICsgd3g7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHh6ICsgd3k7XG4gIG91dFs5XSA9IHl6IC0gd3g7XG4gIG91dFsxMF0gPSAxIC0gKHh4ICsgeXkpO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF07XG4gIG91dFsxM10gPSB2WzFdO1xuICBvdXRbMTRdID0gdlsyXTtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBtYXQ0IGZyb20gYSBkdWFsIHF1YXQuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgTWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdDJ9IGEgRHVhbCBRdWF0ZXJuaW9uXG4gKiBAcmV0dXJucyB7bWF0NH0gbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVF1YXQyKG91dCwgYSkge1xuICB2YXIgdHJhbnNsYXRpb24gPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgzKTtcbiAgdmFyIGJ4ID0gLWFbMF0sXG4gICAgYnkgPSAtYVsxXSxcbiAgICBieiA9IC1hWzJdLFxuICAgIGJ3ID0gYVszXSxcbiAgICBheCA9IGFbNF0sXG4gICAgYXkgPSBhWzVdLFxuICAgIGF6ID0gYVs2XSxcbiAgICBhdyA9IGFbN107XG4gIHZhciBtYWduaXR1ZGUgPSBieCAqIGJ4ICsgYnkgKiBieSArIGJ6ICogYnogKyBidyAqIGJ3O1xuICAvL09ubHkgc2NhbGUgaWYgaXQgbWFrZXMgc2Vuc2VcbiAgaWYgKG1hZ25pdHVkZSA+IDApIHtcbiAgICB0cmFuc2xhdGlvblswXSA9IChheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5KSAqIDIgLyBtYWduaXR1ZGU7XG4gICAgdHJhbnNsYXRpb25bMV0gPSAoYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBieikgKiAyIC8gbWFnbml0dWRlO1xuICAgIHRyYW5zbGF0aW9uWzJdID0gKGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYngpICogMiAvIG1hZ25pdHVkZTtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc2xhdGlvblswXSA9IChheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5KSAqIDI7XG4gICAgdHJhbnNsYXRpb25bMV0gPSAoYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBieikgKiAyO1xuICAgIHRyYW5zbGF0aW9uWzJdID0gKGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYngpICogMjtcbiAgfVxuICBmcm9tUm90YXRpb25UcmFuc2xhdGlvbihvdXQsIGEsIHRyYW5zbGF0aW9uKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0cmFuc2xhdGlvbiB2ZWN0b3IgY29tcG9uZW50IG9mIGEgdHJhbnNmb3JtYXRpb25cbiAqICBtYXRyaXguIElmIGEgbWF0cml4IGlzIGJ1aWx0IHdpdGggZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24sXG4gKiAgdGhlIHJldHVybmVkIHZlY3RvciB3aWxsIGJlIHRoZSBzYW1lIGFzIHRoZSB0cmFuc2xhdGlvbiB2ZWN0b3JcbiAqICBvcmlnaW5hbGx5IHN1cHBsaWVkLlxuICogQHBhcmFtICB7dmVjM30gb3V0IFZlY3RvciB0byByZWNlaXZlIHRyYW5zbGF0aW9uIGNvbXBvbmVudFxuICogQHBhcmFtICB7UmVhZG9ubHlNYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxuICogQHJldHVybiB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2xhdGlvbihvdXQsIG1hdCkge1xuICBvdXRbMF0gPSBtYXRbMTJdO1xuICBvdXRbMV0gPSBtYXRbMTNdO1xuICBvdXRbMl0gPSBtYXRbMTRdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNjYWxpbmcgZmFjdG9yIGNvbXBvbmVudCBvZiBhIHRyYW5zZm9ybWF0aW9uXG4gKiAgbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uU2NhbGVcbiAqICB3aXRoIGEgbm9ybWFsaXplZCBRdWF0ZXJuaW9uIHBhcmFtZXRlciwgdGhlIHJldHVybmVkIHZlY3RvciB3aWxsIGJlXG4gKiAgdGhlIHNhbWUgYXMgdGhlIHNjYWxpbmcgdmVjdG9yXG4gKiAgb3JpZ2luYWxseSBzdXBwbGllZC5cbiAqIEBwYXJhbSAge3ZlYzN9IG91dCBWZWN0b3IgdG8gcmVjZWl2ZSBzY2FsaW5nIGZhY3RvciBjb21wb25lbnRcbiAqIEBwYXJhbSAge1JlYWRvbmx5TWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcbiAqIEByZXR1cm4ge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGluZyhvdXQsIG1hdCkge1xuICB2YXIgbTExID0gbWF0WzBdO1xuICB2YXIgbTEyID0gbWF0WzFdO1xuICB2YXIgbTEzID0gbWF0WzJdO1xuICB2YXIgbTIxID0gbWF0WzRdO1xuICB2YXIgbTIyID0gbWF0WzVdO1xuICB2YXIgbTIzID0gbWF0WzZdO1xuICB2YXIgbTMxID0gbWF0WzhdO1xuICB2YXIgbTMyID0gbWF0WzldO1xuICB2YXIgbTMzID0gbWF0WzEwXTtcbiAgb3V0WzBdID0gTWF0aC5zcXJ0KG0xMSAqIG0xMSArIG0xMiAqIG0xMiArIG0xMyAqIG0xMyk7XG4gIG91dFsxXSA9IE1hdGguc3FydChtMjEgKiBtMjEgKyBtMjIgKiBtMjIgKyBtMjMgKiBtMjMpO1xuICBvdXRbMl0gPSBNYXRoLnNxcnQobTMxICogbTMxICsgbTMyICogbTMyICsgbTMzICogbTMzKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcXVhdGVybmlvbiByZXByZXNlbnRpbmcgdGhlIHJvdGF0aW9uYWwgY29tcG9uZW50XG4gKiAgb2YgYSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXguIElmIGEgbWF0cml4IGlzIGJ1aWx0IHdpdGhcbiAqICBmcm9tUm90YXRpb25UcmFuc2xhdGlvbiwgdGhlIHJldHVybmVkIHF1YXRlcm5pb24gd2lsbCBiZSB0aGVcbiAqICBzYW1lIGFzIHRoZSBxdWF0ZXJuaW9uIG9yaWdpbmFsbHkgc3VwcGxpZWQuXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBRdWF0ZXJuaW9uIHRvIHJlY2VpdmUgdGhlIHJvdGF0aW9uIGNvbXBvbmVudFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IG1hdCBNYXRyaXggdG8gYmUgZGVjb21wb3NlZCAoaW5wdXQpXG4gKiBAcmV0dXJuIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdGF0aW9uKG91dCwgbWF0KSB7XG4gIHZhciBzY2FsaW5nID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIGdldFNjYWxpbmcoc2NhbGluZywgbWF0KTtcbiAgdmFyIGlzMSA9IDEgLyBzY2FsaW5nWzBdO1xuICB2YXIgaXMyID0gMSAvIHNjYWxpbmdbMV07XG4gIHZhciBpczMgPSAxIC8gc2NhbGluZ1syXTtcbiAgdmFyIHNtMTEgPSBtYXRbMF0gKiBpczE7XG4gIHZhciBzbTEyID0gbWF0WzFdICogaXMyO1xuICB2YXIgc20xMyA9IG1hdFsyXSAqIGlzMztcbiAgdmFyIHNtMjEgPSBtYXRbNF0gKiBpczE7XG4gIHZhciBzbTIyID0gbWF0WzVdICogaXMyO1xuICB2YXIgc20yMyA9IG1hdFs2XSAqIGlzMztcbiAgdmFyIHNtMzEgPSBtYXRbOF0gKiBpczE7XG4gIHZhciBzbTMyID0gbWF0WzldICogaXMyO1xuICB2YXIgc20zMyA9IG1hdFsxMF0gKiBpczM7XG4gIHZhciB0cmFjZSA9IHNtMTEgKyBzbTIyICsgc20zMztcbiAgdmFyIFMgPSAwO1xuICBpZiAodHJhY2UgPiAwKSB7XG4gICAgUyA9IE1hdGguc3FydCh0cmFjZSArIDEuMCkgKiAyO1xuICAgIG91dFszXSA9IDAuMjUgKiBTO1xuICAgIG91dFswXSA9IChzbTIzIC0gc20zMikgLyBTO1xuICAgIG91dFsxXSA9IChzbTMxIC0gc20xMykgLyBTO1xuICAgIG91dFsyXSA9IChzbTEyIC0gc20yMSkgLyBTO1xuICB9IGVsc2UgaWYgKHNtMTEgPiBzbTIyICYmIHNtMTEgPiBzbTMzKSB7XG4gICAgUyA9IE1hdGguc3FydCgxLjAgKyBzbTExIC0gc20yMiAtIHNtMzMpICogMjtcbiAgICBvdXRbM10gPSAoc20yMyAtIHNtMzIpIC8gUztcbiAgICBvdXRbMF0gPSAwLjI1ICogUztcbiAgICBvdXRbMV0gPSAoc20xMiArIHNtMjEpIC8gUztcbiAgICBvdXRbMl0gPSAoc20zMSArIHNtMTMpIC8gUztcbiAgfSBlbHNlIGlmIChzbTIyID4gc20zMykge1xuICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgc20yMiAtIHNtMTEgLSBzbTMzKSAqIDI7XG4gICAgb3V0WzNdID0gKHNtMzEgLSBzbTEzKSAvIFM7XG4gICAgb3V0WzBdID0gKHNtMTIgKyBzbTIxKSAvIFM7XG4gICAgb3V0WzFdID0gMC4yNSAqIFM7XG4gICAgb3V0WzJdID0gKHNtMjMgKyBzbTMyKSAvIFM7XG4gIH0gZWxzZSB7XG4gICAgUyA9IE1hdGguc3FydCgxLjAgKyBzbTMzIC0gc20xMSAtIHNtMjIpICogMjtcbiAgICBvdXRbM10gPSAoc20xMiAtIHNtMjEpIC8gUztcbiAgICBvdXRbMF0gPSAoc20zMSArIHNtMTMpIC8gUztcbiAgICBvdXRbMV0gPSAoc20yMyArIHNtMzIpIC8gUztcbiAgICBvdXRbMl0gPSAwLjI1ICogUztcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIERlY29tcG9zZXMgYSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXggaW50byBpdHMgcm90YXRpb24sIHRyYW5zbGF0aW9uXG4gKiBhbmQgc2NhbGUgY29tcG9uZW50cy4gUmV0dXJucyBvbmx5IHRoZSByb3RhdGlvbiBjb21wb25lbnRcbiAqIEBwYXJhbSAge3F1YXR9IG91dF9yIFF1YXRlcm5pb24gdG8gcmVjZWl2ZSB0aGUgcm90YXRpb24gY29tcG9uZW50XG4gKiBAcGFyYW0gIHt2ZWMzfSBvdXRfdCBWZWN0b3IgdG8gcmVjZWl2ZSB0aGUgdHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcGFyYW0gIHt2ZWMzfSBvdXRfcyBWZWN0b3IgdG8gcmVjZWl2ZSB0aGUgc2NhbGluZyBmYWN0b3JcbiAqIEBwYXJhbSAge1JlYWRvbmx5TWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRfclxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb21wb3NlKG91dF9yLCBvdXRfdCwgb3V0X3MsIG1hdCkge1xuICBvdXRfdFswXSA9IG1hdFsxMl07XG4gIG91dF90WzFdID0gbWF0WzEzXTtcbiAgb3V0X3RbMl0gPSBtYXRbMTRdO1xuICB2YXIgbTExID0gbWF0WzBdO1xuICB2YXIgbTEyID0gbWF0WzFdO1xuICB2YXIgbTEzID0gbWF0WzJdO1xuICB2YXIgbTIxID0gbWF0WzRdO1xuICB2YXIgbTIyID0gbWF0WzVdO1xuICB2YXIgbTIzID0gbWF0WzZdO1xuICB2YXIgbTMxID0gbWF0WzhdO1xuICB2YXIgbTMyID0gbWF0WzldO1xuICB2YXIgbTMzID0gbWF0WzEwXTtcbiAgb3V0X3NbMF0gPSBNYXRoLnNxcnQobTExICogbTExICsgbTEyICogbTEyICsgbTEzICogbTEzKTtcbiAgb3V0X3NbMV0gPSBNYXRoLnNxcnQobTIxICogbTIxICsgbTIyICogbTIyICsgbTIzICogbTIzKTtcbiAgb3V0X3NbMl0gPSBNYXRoLnNxcnQobTMxICogbTMxICsgbTMyICogbTMyICsgbTMzICogbTMzKTtcbiAgdmFyIGlzMSA9IDEgLyBvdXRfc1swXTtcbiAgdmFyIGlzMiA9IDEgLyBvdXRfc1sxXTtcbiAgdmFyIGlzMyA9IDEgLyBvdXRfc1syXTtcbiAgdmFyIHNtMTEgPSBtMTEgKiBpczE7XG4gIHZhciBzbTEyID0gbTEyICogaXMyO1xuICB2YXIgc20xMyA9IG0xMyAqIGlzMztcbiAgdmFyIHNtMjEgPSBtMjEgKiBpczE7XG4gIHZhciBzbTIyID0gbTIyICogaXMyO1xuICB2YXIgc20yMyA9IG0yMyAqIGlzMztcbiAgdmFyIHNtMzEgPSBtMzEgKiBpczE7XG4gIHZhciBzbTMyID0gbTMyICogaXMyO1xuICB2YXIgc20zMyA9IG0zMyAqIGlzMztcbiAgdmFyIHRyYWNlID0gc20xMSArIHNtMjIgKyBzbTMzO1xuICB2YXIgUyA9IDA7XG4gIGlmICh0cmFjZSA+IDApIHtcbiAgICBTID0gTWF0aC5zcXJ0KHRyYWNlICsgMS4wKSAqIDI7XG4gICAgb3V0X3JbM10gPSAwLjI1ICogUztcbiAgICBvdXRfclswXSA9IChzbTIzIC0gc20zMikgLyBTO1xuICAgIG91dF9yWzFdID0gKHNtMzEgLSBzbTEzKSAvIFM7XG4gICAgb3V0X3JbMl0gPSAoc20xMiAtIHNtMjEpIC8gUztcbiAgfSBlbHNlIGlmIChzbTExID4gc20yMiAmJiBzbTExID4gc20zMykge1xuICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgc20xMSAtIHNtMjIgLSBzbTMzKSAqIDI7XG4gICAgb3V0X3JbM10gPSAoc20yMyAtIHNtMzIpIC8gUztcbiAgICBvdXRfclswXSA9IDAuMjUgKiBTO1xuICAgIG91dF9yWzFdID0gKHNtMTIgKyBzbTIxKSAvIFM7XG4gICAgb3V0X3JbMl0gPSAoc20zMSArIHNtMTMpIC8gUztcbiAgfSBlbHNlIGlmIChzbTIyID4gc20zMykge1xuICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgc20yMiAtIHNtMTEgLSBzbTMzKSAqIDI7XG4gICAgb3V0X3JbM10gPSAoc20zMSAtIHNtMTMpIC8gUztcbiAgICBvdXRfclswXSA9IChzbTEyICsgc20yMSkgLyBTO1xuICAgIG91dF9yWzFdID0gMC4yNSAqIFM7XG4gICAgb3V0X3JbMl0gPSAoc20yMyArIHNtMzIpIC8gUztcbiAgfSBlbHNlIHtcbiAgICBTID0gTWF0aC5zcXJ0KDEuMCArIHNtMzMgLSBzbTExIC0gc20yMikgKiAyO1xuICAgIG91dF9yWzNdID0gKHNtMTIgLSBzbTIxKSAvIFM7XG4gICAgb3V0X3JbMF0gPSAoc20zMSArIHNtMTMpIC8gUztcbiAgICBvdXRfclsxXSA9IChzbTIzICsgc20zMikgLyBTO1xuICAgIG91dF9yWzJdID0gMC4yNSAqIFM7XG4gIH1cbiAgcmV0dXJuIG91dF9yO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24sIHZlY3RvciB0cmFuc2xhdGlvbiBhbmQgdmVjdG9yIHNjYWxlXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCBkZXN0LCB2ZWMpO1xuICogICAgIGxldCBxdWF0TWF0ID0gbWF0NC5jcmVhdGUoKTtcbiAqICAgICBtYXQ0LmZyb21RdWF0KHF1YXRNYXQsIHF1YXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgZGVzdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5zY2FsZShkZXN0LCBkZXN0LCBzY2FsZSlcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gcyBTY2FsaW5nIHZlY3RvclxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZShvdXQsIHEsIHYsIHMpIHtcbiAgLy8gUXVhdGVybmlvbiBtYXRoXG4gIHZhciB4ID0gcVswXSxcbiAgICB5ID0gcVsxXSxcbiAgICB6ID0gcVsyXSxcbiAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeHkgPSB4ICogeTI7XG4gIHZhciB4eiA9IHggKiB6MjtcbiAgdmFyIHl5ID0geSAqIHkyO1xuICB2YXIgeXogPSB5ICogejI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgdmFyIHN4ID0gc1swXTtcbiAgdmFyIHN5ID0gc1sxXTtcbiAgdmFyIHN6ID0gc1syXTtcbiAgb3V0WzBdID0gKDEgLSAoeXkgKyB6eikpICogc3g7XG4gIG91dFsxXSA9ICh4eSArIHd6KSAqIHN4O1xuICBvdXRbMl0gPSAoeHogLSB3eSkgKiBzeDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gKHh5IC0gd3opICogc3k7XG4gIG91dFs1XSA9ICgxIC0gKHh4ICsgenopKSAqIHN5O1xuICBvdXRbNl0gPSAoeXogKyB3eCkgKiBzeTtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gKHh6ICsgd3kpICogc3o7XG4gIG91dFs5XSA9ICh5eiAtIHd4KSAqIHN6O1xuICBvdXRbMTBdID0gKDEgLSAoeHggKyB5eSkpICogc3o7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gdlswXTtcbiAgb3V0WzEzXSA9IHZbMV07XG4gIG91dFsxNF0gPSB2WzJdO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLCB2ZWN0b3IgdHJhbnNsYXRpb24gYW5kIHZlY3RvciBzY2FsZSwgcm90YXRpbmcgYW5kIHNjYWxpbmcgYXJvdW5kIHRoZSBnaXZlbiBvcmlnaW5cbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIGRlc3QsIHZlYyk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgZGVzdCwgb3JpZ2luKTtcbiAqICAgICBsZXQgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgbWF0NC5mcm9tUXVhdChxdWF0TWF0LCBxdWF0KTtcbiAqICAgICBtYXQ0Lm11bHRpcGx5KGRlc3QsIGRlc3QsIHF1YXRNYXQpO1xuICogICAgIG1hdDQuc2NhbGUoZGVzdCwgZGVzdCwgc2NhbGUpXG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgZGVzdCwgbmVnYXRpdmVPcmlnaW4pO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBzIFNjYWxpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gbyBUaGUgb3JpZ2luIHZlY3RvciBhcm91bmQgd2hpY2ggdG8gc2NhbGUgYW5kIHJvdGF0ZVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZU9yaWdpbihvdXQsIHEsIHYsIHMsIG8pIHtcbiAgLy8gUXVhdGVybmlvbiBtYXRoXG4gIHZhciB4ID0gcVswXSxcbiAgICB5ID0gcVsxXSxcbiAgICB6ID0gcVsyXSxcbiAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeHkgPSB4ICogeTI7XG4gIHZhciB4eiA9IHggKiB6MjtcbiAgdmFyIHl5ID0geSAqIHkyO1xuICB2YXIgeXogPSB5ICogejI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgdmFyIHN4ID0gc1swXTtcbiAgdmFyIHN5ID0gc1sxXTtcbiAgdmFyIHN6ID0gc1syXTtcbiAgdmFyIG94ID0gb1swXTtcbiAgdmFyIG95ID0gb1sxXTtcbiAgdmFyIG96ID0gb1syXTtcbiAgdmFyIG91dDAgPSAoMSAtICh5eSArIHp6KSkgKiBzeDtcbiAgdmFyIG91dDEgPSAoeHkgKyB3eikgKiBzeDtcbiAgdmFyIG91dDIgPSAoeHogLSB3eSkgKiBzeDtcbiAgdmFyIG91dDQgPSAoeHkgLSB3eikgKiBzeTtcbiAgdmFyIG91dDUgPSAoMSAtICh4eCArIHp6KSkgKiBzeTtcbiAgdmFyIG91dDYgPSAoeXogKyB3eCkgKiBzeTtcbiAgdmFyIG91dDggPSAoeHogKyB3eSkgKiBzejtcbiAgdmFyIG91dDkgPSAoeXogLSB3eCkgKiBzejtcbiAgdmFyIG91dDEwID0gKDEgLSAoeHggKyB5eSkpICogc3o7XG4gIG91dFswXSA9IG91dDA7XG4gIG91dFsxXSA9IG91dDE7XG4gIG91dFsyXSA9IG91dDI7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IG91dDQ7XG4gIG91dFs1XSA9IG91dDU7XG4gIG91dFs2XSA9IG91dDY7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IG91dDg7XG4gIG91dFs5XSA9IG91dDk7XG4gIG91dFsxMF0gPSBvdXQxMDtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSB2WzBdICsgb3ggLSAob3V0MCAqIG94ICsgb3V0NCAqIG95ICsgb3V0OCAqIG96KTtcbiAgb3V0WzEzXSA9IHZbMV0gKyBveSAtIChvdXQxICogb3ggKyBvdXQ1ICogb3kgKyBvdXQ5ICogb3opO1xuICBvdXRbMTRdID0gdlsyXSArIG96IC0gKG91dDIgKiBveCArIG91dDYgKiBveSArIG91dDEwICogb3opO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIGEgNHg0IG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBxdWF0ZXJuaW9uXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IHEgUXVhdGVybmlvbiB0byBjcmVhdGUgbWF0cml4IGZyb21cbiAqXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUXVhdChvdXQsIHEpIHtcbiAgdmFyIHggPSBxWzBdLFxuICAgIHkgPSBxWzFdLFxuICAgIHogPSBxWzJdLFxuICAgIHcgPSBxWzNdO1xuICB2YXIgeDIgPSB4ICsgeDtcbiAgdmFyIHkyID0geSArIHk7XG4gIHZhciB6MiA9IHogKyB6O1xuICB2YXIgeHggPSB4ICogeDI7XG4gIHZhciB5eCA9IHkgKiB4MjtcbiAgdmFyIHl5ID0geSAqIHkyO1xuICB2YXIgenggPSB6ICogeDI7XG4gIHZhciB6eSA9IHogKiB5MjtcbiAgdmFyIHp6ID0geiAqIHoyO1xuICB2YXIgd3ggPSB3ICogeDI7XG4gIHZhciB3eSA9IHcgKiB5MjtcbiAgdmFyIHd6ID0gdyAqIHoyO1xuICBvdXRbMF0gPSAxIC0geXkgLSB6ejtcbiAgb3V0WzFdID0geXggKyB3ejtcbiAgb3V0WzJdID0genggLSB3eTtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0geXggLSB3ejtcbiAgb3V0WzVdID0gMSAtIHh4IC0geno7XG4gIG91dFs2XSA9IHp5ICsgd3g7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHp4ICsgd3k7XG4gIG91dFs5XSA9IHp5IC0gd3g7XG4gIG91dFsxMF0gPSAxIC0geHggLSB5eTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGZydXN0dW0gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7TnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJ1c3R1bShvdXQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XG4gIHZhciBybCA9IDEgLyAocmlnaHQgLSBsZWZ0KTtcbiAgdmFyIHRiID0gMSAvICh0b3AgLSBib3R0b20pO1xuICB2YXIgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICBvdXRbMF0gPSBuZWFyICogMiAqIHJsO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSBuZWFyICogMiAqIHRiO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAocmlnaHQgKyBsZWZ0KSAqIHJsO1xuICBvdXRbOV0gPSAodG9wICsgYm90dG9tKSAqIHRiO1xuICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gIG91dFsxMV0gPSAtMTtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gZmFyICogbmVhciAqIDIgKiBuZjtcbiAgb3V0WzE1XSA9IDA7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzLlxuICogVGhlIG5lYXIvZmFyIGNsaXAgcGxhbmVzIGNvcnJlc3BvbmQgdG8gYSBub3JtYWxpemVkIGRldmljZSBjb29yZGluYXRlIFogcmFuZ2Ugb2YgWy0xLCAxXSxcbiAqIHdoaWNoIG1hdGNoZXMgV2ViR0wvT3BlbkdMJ3MgY2xpcCB2b2x1bWUuXG4gKiBQYXNzaW5nIG51bGwvdW5kZWZpbmVkL25vIHZhbHVlIGZvciBmYXIgd2lsbCBnZW5lcmF0ZSBpbmZpbml0ZSBwcm9qZWN0aW9uIG1hdHJpeC5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gZm92eSBWZXJ0aWNhbCBmaWVsZCBvZiB2aWV3IGluIHJhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBhc3BlY3QgQXNwZWN0IHJhdGlvLiB0eXBpY2FsbHkgdmlld3BvcnQgd2lkdGgvaGVpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bSwgY2FuIGJlIG51bGwgb3IgSW5maW5pdHlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlTk8ob3V0LCBmb3Z5LCBhc3BlY3QsIG5lYXIsIGZhcikge1xuICB2YXIgZiA9IDEuMCAvIE1hdGgudGFuKGZvdnkgLyAyKTtcbiAgb3V0WzBdID0gZiAvIGFzcGVjdDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gZjtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzExXSA9IC0xO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNV0gPSAwO1xuICBpZiAoZmFyICE9IG51bGwgJiYgZmFyICE9PSBJbmZpbml0eSkge1xuICAgIHZhciBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxNF0gPSAyICogZmFyICogbmVhciAqIG5mO1xuICB9IGVsc2Uge1xuICAgIG91dFsxMF0gPSAtMTtcbiAgICBvdXRbMTRdID0gLTIgKiBuZWFyO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQ0LnBlcnNwZWN0aXZlTk99XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBwZXJzcGVjdGl2ZSA9IHBlcnNwZWN0aXZlTk87XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggc3VpdGFibGUgZm9yIFdlYkdQVSB3aXRoIHRoZSBnaXZlbiBib3VuZHMuXG4gKiBUaGUgbmVhci9mYXIgY2xpcCBwbGFuZXMgY29ycmVzcG9uZCB0byBhIG5vcm1hbGl6ZWQgZGV2aWNlIGNvb3JkaW5hdGUgWiByYW5nZSBvZiBbMCwgMV0sXG4gKiB3aGljaCBtYXRjaGVzIFdlYkdQVS9WdWxrYW4vRGlyZWN0WC9NZXRhbCdzIGNsaXAgdm9sdW1lLlxuICogUGFzc2luZyBudWxsL3VuZGVmaW5lZC9ubyB2YWx1ZSBmb3IgZmFyIHdpbGwgZ2VuZXJhdGUgaW5maW5pdGUgcHJvamVjdGlvbiBtYXRyaXguXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGZvdnkgVmVydGljYWwgZmllbGQgb2YgdmlldyBpbiByYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0IEFzcGVjdCByYXRpby4gdHlwaWNhbGx5IHZpZXdwb3J0IHdpZHRoL2hlaWdodFxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW0sIGNhbiBiZSBudWxsIG9yIEluZmluaXR5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZXJzcGVjdGl2ZVpPKG91dCwgZm92eSwgYXNwZWN0LCBuZWFyLCBmYXIpIHtcbiAgdmFyIGYgPSAxLjAgLyBNYXRoLnRhbihmb3Z5IC8gMik7XG4gIG91dFswXSA9IGYgLyBhc3BlY3Q7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IGY7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMV0gPSAtMTtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTVdID0gMDtcbiAgaWYgKGZhciAhPSBudWxsICYmIGZhciAhPT0gSW5maW5pdHkpIHtcbiAgICB2YXIgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFsxMF0gPSBmYXIgKiBuZjtcbiAgICBvdXRbMTRdID0gZmFyICogbmVhciAqIG5mO1xuICB9IGVsc2Uge1xuICAgIG91dFsxMF0gPSAtMTtcbiAgICBvdXRbMTRdID0gLW5lYXI7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBmaWVsZCBvZiB2aWV3LlxuICogVGhpcyBpcyBwcmltYXJpbHkgdXNlZnVsIGZvciBnZW5lcmF0aW5nIHByb2plY3Rpb24gbWF0cmljZXMgdG8gYmUgdXNlZFxuICogd2l0aCB0aGUgc3RpbGwgZXhwZXJpZW1lbnRhbCBXZWJWUiBBUEkuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtPYmplY3R9IGZvdiBPYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIHZhbHVlczogdXBEZWdyZWVzLCBkb3duRGVncmVlcywgbGVmdERlZ3JlZXMsIHJpZ2h0RGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3KG91dCwgZm92LCBuZWFyLCBmYXIpIHtcbiAgdmFyIHVwVGFuID0gTWF0aC50YW4oZm92LnVwRGVncmVlcyAqIE1hdGguUEkgLyAxODAuMCk7XG4gIHZhciBkb3duVGFuID0gTWF0aC50YW4oZm92LmRvd25EZWdyZWVzICogTWF0aC5QSSAvIDE4MC4wKTtcbiAgdmFyIGxlZnRUYW4gPSBNYXRoLnRhbihmb3YubGVmdERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLjApO1xuICB2YXIgcmlnaHRUYW4gPSBNYXRoLnRhbihmb3YucmlnaHREZWdyZWVzICogTWF0aC5QSSAvIDE4MC4wKTtcbiAgdmFyIHhTY2FsZSA9IDIuMCAvIChsZWZ0VGFuICsgcmlnaHRUYW4pO1xuICB2YXIgeVNjYWxlID0gMi4wIC8gKHVwVGFuICsgZG93blRhbik7XG4gIG91dFswXSA9IHhTY2FsZTtcbiAgb3V0WzFdID0gMC4wO1xuICBvdXRbMl0gPSAwLjA7XG4gIG91dFszXSA9IDAuMDtcbiAgb3V0WzRdID0gMC4wO1xuICBvdXRbNV0gPSB5U2NhbGU7XG4gIG91dFs2XSA9IDAuMDtcbiAgb3V0WzddID0gMC4wO1xuICBvdXRbOF0gPSAtKChsZWZ0VGFuIC0gcmlnaHRUYW4pICogeFNjYWxlICogMC41KTtcbiAgb3V0WzldID0gKHVwVGFuIC0gZG93blRhbikgKiB5U2NhbGUgKiAwLjU7XG4gIG91dFsxMF0gPSBmYXIgLyAobmVhciAtIGZhcik7XG4gIG91dFsxMV0gPSAtMS4wO1xuICBvdXRbMTJdID0gMC4wO1xuICBvdXRbMTNdID0gMC4wO1xuICBvdXRbMTRdID0gZmFyICogbmVhciAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzE1XSA9IDAuMDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBvcnRob2dvbmFsIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kcy5cbiAqIFRoZSBuZWFyL2ZhciBjbGlwIHBsYW5lcyBjb3JyZXNwb25kIHRvIGEgbm9ybWFsaXplZCBkZXZpY2UgY29vcmRpbmF0ZSBaIHJhbmdlIG9mIFstMSwgMV0sXG4gKiB3aGljaCBtYXRjaGVzIFdlYkdML09wZW5HTCdzIGNsaXAgdm9sdW1lLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gb3J0aG9OTyhvdXQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XG4gIHZhciBsciA9IDEgLyAobGVmdCAtIHJpZ2h0KTtcbiAgdmFyIGJ0ID0gMSAvIChib3R0b20gLSB0b3ApO1xuICB2YXIgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICBvdXRbMF0gPSAtMiAqIGxyO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAtMiAqIGJ0O1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gMiAqIG5mO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IChsZWZ0ICsgcmlnaHQpICogbHI7XG4gIG91dFsxM10gPSAodG9wICsgYm90dG9tKSAqIGJ0O1xuICBvdXRbMTRdID0gKGZhciArIG5lYXIpICogbmY7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0NC5vcnRob05PfVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgb3J0aG8gPSBvcnRob05PO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIG9ydGhvZ29uYWwgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzLlxuICogVGhlIG5lYXIvZmFyIGNsaXAgcGxhbmVzIGNvcnJlc3BvbmQgdG8gYSBub3JtYWxpemVkIGRldmljZSBjb29yZGluYXRlIFogcmFuZ2Ugb2YgWzAsIDFdLFxuICogd2hpY2ggbWF0Y2hlcyBXZWJHUFUvVnVsa2FuL0RpcmVjdFgvTWV0YWwncyBjbGlwIHZvbHVtZS5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b20gQm90dG9tIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9ydGhvWk8ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICB2YXIgbHIgPSAxIC8gKGxlZnQgLSByaWdodCk7XG4gIHZhciBidCA9IDEgLyAoYm90dG9tIC0gdG9wKTtcbiAgdmFyIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzBdID0gLTIgKiBscjtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gLTIgKiBidDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IG5mO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IChsZWZ0ICsgcmlnaHQpICogbHI7XG4gIG91dFsxM10gPSAodG9wICsgYm90dG9tKSAqIGJ0O1xuICBvdXRbMTRdID0gbmVhciAqIG5mO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsb29rLWF0IG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBleWUgcG9zaXRpb24sIGZvY2FsIHBvaW50LCBhbmQgdXAgYXhpcy5cbiAqIElmIHlvdSB3YW50IGEgbWF0cml4IHRoYXQgYWN0dWFsbHkgbWFrZXMgYW4gb2JqZWN0IGxvb2sgYXQgYW5vdGhlciBvYmplY3QsIHlvdSBzaG91bGQgdXNlIHRhcmdldFRvIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGV5ZSBQb3NpdGlvbiBvZiB0aGUgdmlld2VyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gY2VudGVyIFBvaW50IHRoZSB2aWV3ZXIgaXMgbG9va2luZyBhdFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHVwIHZlYzMgcG9pbnRpbmcgdXBcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvb2tBdChvdXQsIGV5ZSwgY2VudGVyLCB1cCkge1xuICB2YXIgeDAsIHgxLCB4MiwgeTAsIHkxLCB5MiwgejAsIHoxLCB6MiwgbGVuO1xuICB2YXIgZXlleCA9IGV5ZVswXTtcbiAgdmFyIGV5ZXkgPSBleWVbMV07XG4gIHZhciBleWV6ID0gZXllWzJdO1xuICB2YXIgdXB4ID0gdXBbMF07XG4gIHZhciB1cHkgPSB1cFsxXTtcbiAgdmFyIHVweiA9IHVwWzJdO1xuICB2YXIgY2VudGVyeCA9IGNlbnRlclswXTtcbiAgdmFyIGNlbnRlcnkgPSBjZW50ZXJbMV07XG4gIHZhciBjZW50ZXJ6ID0gY2VudGVyWzJdO1xuICBpZiAoTWF0aC5hYnMoZXlleCAtIGNlbnRlcngpIDwgZ2xNYXRyaXguRVBTSUxPTiAmJiBNYXRoLmFicyhleWV5IC0gY2VudGVyeSkgPCBnbE1hdHJpeC5FUFNJTE9OICYmIE1hdGguYWJzKGV5ZXogLSBjZW50ZXJ6KSA8IGdsTWF0cml4LkVQU0lMT04pIHtcbiAgICByZXR1cm4gaWRlbnRpdHkob3V0KTtcbiAgfVxuICB6MCA9IGV5ZXggLSBjZW50ZXJ4O1xuICB6MSA9IGV5ZXkgLSBjZW50ZXJ5O1xuICB6MiA9IGV5ZXogLSBjZW50ZXJ6O1xuICBsZW4gPSAxIC8gTWF0aC5zcXJ0KHowICogejAgKyB6MSAqIHoxICsgejIgKiB6Mik7XG4gIHowICo9IGxlbjtcbiAgejEgKj0gbGVuO1xuICB6MiAqPSBsZW47XG4gIHgwID0gdXB5ICogejIgLSB1cHogKiB6MTtcbiAgeDEgPSB1cHogKiB6MCAtIHVweCAqIHoyO1xuICB4MiA9IHVweCAqIHoxIC0gdXB5ICogejA7XG4gIGxlbiA9IE1hdGguc3FydCh4MCAqIHgwICsgeDEgKiB4MSArIHgyICogeDIpO1xuICBpZiAoIWxlbikge1xuICAgIHgwID0gMDtcbiAgICB4MSA9IDA7XG4gICAgeDIgPSAwO1xuICB9IGVsc2Uge1xuICAgIGxlbiA9IDEgLyBsZW47XG4gICAgeDAgKj0gbGVuO1xuICAgIHgxICo9IGxlbjtcbiAgICB4MiAqPSBsZW47XG4gIH1cbiAgeTAgPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgeTEgPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgeTIgPSB6MCAqIHgxIC0gejEgKiB4MDtcbiAgbGVuID0gTWF0aC5zcXJ0KHkwICogeTAgKyB5MSAqIHkxICsgeTIgKiB5Mik7XG4gIGlmICghbGVuKSB7XG4gICAgeTAgPSAwO1xuICAgIHkxID0gMDtcbiAgICB5MiA9IDA7XG4gIH0gZWxzZSB7XG4gICAgbGVuID0gMSAvIGxlbjtcbiAgICB5MCAqPSBsZW47XG4gICAgeTEgKj0gbGVuO1xuICAgIHkyICo9IGxlbjtcbiAgfVxuICBvdXRbMF0gPSB4MDtcbiAgb3V0WzFdID0geTA7XG4gIG91dFsyXSA9IHowO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB4MTtcbiAgb3V0WzVdID0geTE7XG4gIG91dFs2XSA9IHoxO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB4MjtcbiAgb3V0WzldID0geTI7XG4gIG91dFsxMF0gPSB6MjtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAtKHgwICogZXlleCArIHgxICogZXlleSArIHgyICogZXlleik7XG4gIG91dFsxM10gPSAtKHkwICogZXlleCArIHkxICogZXlleSArIHkyICogZXlleik7XG4gIG91dFsxNF0gPSAtKHowICogZXlleCArIHoxICogZXlleSArIHoyICogZXlleik7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIG1hdHJpeCB0aGF0IG1ha2VzIHNvbWV0aGluZyBsb29rIGF0IHNvbWV0aGluZyBlbHNlLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBleWUgUG9zaXRpb24gb2YgdGhlIHZpZXdlclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHRhcmdldCBQb2ludCB0aGUgdmlld2VyIGlzIGxvb2tpbmcgYXRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB1cCB2ZWMzIHBvaW50aW5nIHVwXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRUbyhvdXQsIGV5ZSwgdGFyZ2V0LCB1cCkge1xuICB2YXIgZXlleCA9IGV5ZVswXSxcbiAgICBleWV5ID0gZXllWzFdLFxuICAgIGV5ZXogPSBleWVbMl0sXG4gICAgdXB4ID0gdXBbMF0sXG4gICAgdXB5ID0gdXBbMV0sXG4gICAgdXB6ID0gdXBbMl07XG4gIHZhciB6MCA9IGV5ZXggLSB0YXJnZXRbMF0sXG4gICAgejEgPSBleWV5IC0gdGFyZ2V0WzFdLFxuICAgIHoyID0gZXlleiAtIHRhcmdldFsyXTtcbiAgdmFyIGxlbiA9IHowICogejAgKyB6MSAqIHoxICsgejIgKiB6MjtcbiAgaWYgKGxlbiA+IDApIHtcbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gICAgejAgKj0gbGVuO1xuICAgIHoxICo9IGxlbjtcbiAgICB6MiAqPSBsZW47XG4gIH1cbiAgdmFyIHgwID0gdXB5ICogejIgLSB1cHogKiB6MSxcbiAgICB4MSA9IHVweiAqIHowIC0gdXB4ICogejIsXG4gICAgeDIgPSB1cHggKiB6MSAtIHVweSAqIHowO1xuICBsZW4gPSB4MCAqIHgwICsgeDEgKiB4MSArIHgyICogeDI7XG4gIGlmIChsZW4gPiAwKSB7XG4gICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICAgIHgwICo9IGxlbjtcbiAgICB4MSAqPSBsZW47XG4gICAgeDIgKj0gbGVuO1xuICB9XG4gIG91dFswXSA9IHgwO1xuICBvdXRbMV0gPSB4MTtcbiAgb3V0WzJdID0geDI7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHoxICogeDIgLSB6MiAqIHgxO1xuICBvdXRbNV0gPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgb3V0WzZdID0gejAgKiB4MSAtIHoxICogeDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHowO1xuICBvdXRbOV0gPSB6MTtcbiAgb3V0WzEwXSA9IHoyO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IGV5ZXg7XG4gIG91dFsxM10gPSBleWV5O1xuICBvdXRbMTRdID0gZXllejtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSBtYXRyaXggdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuIFwibWF0NChcIiArIGFbMF0gKyBcIiwgXCIgKyBhWzFdICsgXCIsIFwiICsgYVsyXSArIFwiLCBcIiArIGFbM10gKyBcIiwgXCIgKyBhWzRdICsgXCIsIFwiICsgYVs1XSArIFwiLCBcIiArIGFbNl0gKyBcIiwgXCIgKyBhWzddICsgXCIsIFwiICsgYVs4XSArIFwiLCBcIiArIGFbOV0gKyBcIiwgXCIgKyBhWzEwXSArIFwiLCBcIiArIGFbMTFdICsgXCIsIFwiICsgYVsxMl0gKyBcIiwgXCIgKyBhWzEzXSArIFwiLCBcIiArIGFbMTRdICsgXCIsIFwiICsgYVsxNV0gKyBcIilcIjtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIEZyb2Jlbml1cyBub3JtIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gY2FsY3VsYXRlIEZyb2Jlbml1cyBub3JtIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBGcm9iZW5pdXMgbm9ybVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvYihhKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoYVswXSAqIGFbMF0gKyBhWzFdICogYVsxXSArIGFbMl0gKiBhWzJdICsgYVszXSAqIGFbM10gKyBhWzRdICogYVs0XSArIGFbNV0gKiBhWzVdICsgYVs2XSAqIGFbNl0gKyBhWzddICogYVs3XSArIGFbOF0gKiBhWzhdICsgYVs5XSAqIGFbOV0gKyBhWzEwXSAqIGFbMTBdICsgYVsxMV0gKiBhWzExXSArIGFbMTJdICogYVsxMl0gKyBhWzEzXSAqIGFbMTNdICsgYVsxNF0gKiBhWzE0XSArIGFbMTVdICogYVsxNV0pO1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIG1hdDQnc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICBvdXRbNF0gPSBhWzRdICsgYls0XTtcbiAgb3V0WzVdID0gYVs1XSArIGJbNV07XG4gIG91dFs2XSA9IGFbNl0gKyBiWzZdO1xuICBvdXRbN10gPSBhWzddICsgYls3XTtcbiAgb3V0WzhdID0gYVs4XSArIGJbOF07XG4gIG91dFs5XSA9IGFbOV0gKyBiWzldO1xuICBvdXRbMTBdID0gYVsxMF0gKyBiWzEwXTtcbiAgb3V0WzExXSA9IGFbMTFdICsgYlsxMV07XG4gIG91dFsxMl0gPSBhWzEyXSArIGJbMTJdO1xuICBvdXRbMTNdID0gYVsxM10gKyBiWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdICsgYlsxNF07XG4gIG91dFsxNV0gPSBhWzE1XSArIGJbMTVdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFN1YnRyYWN0cyBtYXRyaXggYiBmcm9tIG1hdHJpeCBhXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgb3V0WzRdID0gYVs0XSAtIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gLSBiWzVdO1xuICBvdXRbNl0gPSBhWzZdIC0gYls2XTtcbiAgb3V0WzddID0gYVs3XSAtIGJbN107XG4gIG91dFs4XSA9IGFbOF0gLSBiWzhdO1xuICBvdXRbOV0gPSBhWzldIC0gYls5XTtcbiAgb3V0WzEwXSA9IGFbMTBdIC0gYlsxMF07XG4gIG91dFsxMV0gPSBhWzExXSAtIGJbMTFdO1xuICBvdXRbMTJdID0gYVsxMl0gLSBiWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdIC0gYlsxM107XG4gIG91dFsxNF0gPSBhWzE0XSAtIGJbMTRdO1xuICBvdXRbMTVdID0gYVsxNV0gLSBiWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNdWx0aXBseSBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeCBieSBhIHNjYWxhci5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSBtYXRyaXgncyBlbGVtZW50cyBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXIob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgb3V0WzJdID0gYVsyXSAqIGI7XG4gIG91dFszXSA9IGFbM10gKiBiO1xuICBvdXRbNF0gPSBhWzRdICogYjtcbiAgb3V0WzVdID0gYVs1XSAqIGI7XG4gIG91dFs2XSA9IGFbNl0gKiBiO1xuICBvdXRbN10gPSBhWzddICogYjtcbiAgb3V0WzhdID0gYVs4XSAqIGI7XG4gIG91dFs5XSA9IGFbOV0gKiBiO1xuICBvdXRbMTBdID0gYVsxMF0gKiBiO1xuICBvdXRbMTFdID0gYVsxMV0gKiBiO1xuICBvdXRbMTJdID0gYVsxMl0gKiBiO1xuICBvdXRbMTNdID0gYVsxM10gKiBiO1xuICBvdXRbMTRdID0gYVsxNF0gKiBiO1xuICBvdXRbMTVdID0gYVsxNV0gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIG1hdDQncyBhZnRlciBtdWx0aXBseWluZyBlYWNoIGVsZW1lbnQgb2YgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiJ3MgZWxlbWVudHMgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXJBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICBvdXRbM10gPSBhWzNdICsgYlszXSAqIHNjYWxlO1xuICBvdXRbNF0gPSBhWzRdICsgYls0XSAqIHNjYWxlO1xuICBvdXRbNV0gPSBhWzVdICsgYls1XSAqIHNjYWxlO1xuICBvdXRbNl0gPSBhWzZdICsgYls2XSAqIHNjYWxlO1xuICBvdXRbN10gPSBhWzddICsgYls3XSAqIHNjYWxlO1xuICBvdXRbOF0gPSBhWzhdICsgYls4XSAqIHNjYWxlO1xuICBvdXRbOV0gPSBhWzldICsgYls5XSAqIHNjYWxlO1xuICBvdXRbMTBdID0gYVsxMF0gKyBiWzEwXSAqIHNjYWxlO1xuICBvdXRbMTFdID0gYVsxMV0gKyBiWzExXSAqIHNjYWxlO1xuICBvdXRbMTJdID0gYVsxMl0gKyBiWzEyXSAqIHNjYWxlO1xuICBvdXRbMTNdID0gYVsxM10gKyBiWzEzXSAqIHNjYWxlO1xuICBvdXRbMTRdID0gYVsxNF0gKyBiWzE0XSAqIHNjYWxlO1xuICBvdXRbMTVdID0gYVsxNV0gKyBiWzE1XSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSBUaGUgZmlyc3QgbWF0cml4LlxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGIgVGhlIHNlY29uZCBtYXRyaXguXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJiBhWzNdID09PSBiWzNdICYmIGFbNF0gPT09IGJbNF0gJiYgYVs1XSA9PT0gYls1XSAmJiBhWzZdID09PSBiWzZdICYmIGFbN10gPT09IGJbN10gJiYgYVs4XSA9PT0gYls4XSAmJiBhWzldID09PSBiWzldICYmIGFbMTBdID09PSBiWzEwXSAmJiBhWzExXSA9PT0gYlsxMV0gJiYgYVsxMl0gPT09IGJbMTJdICYmIGFbMTNdID09PSBiWzEzXSAmJiBhWzE0XSA9PT0gYlsxNF0gJiYgYVsxNV0gPT09IGJbMTVdO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSBUaGUgZmlyc3QgbWF0cml4LlxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGIgVGhlIHNlY29uZCBtYXRyaXguXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgIGExID0gYVsxXSxcbiAgICBhMiA9IGFbMl0sXG4gICAgYTMgPSBhWzNdO1xuICB2YXIgYTQgPSBhWzRdLFxuICAgIGE1ID0gYVs1XSxcbiAgICBhNiA9IGFbNl0sXG4gICAgYTcgPSBhWzddO1xuICB2YXIgYTggPSBhWzhdLFxuICAgIGE5ID0gYVs5XSxcbiAgICBhMTAgPSBhWzEwXSxcbiAgICBhMTEgPSBhWzExXTtcbiAgdmFyIGExMiA9IGFbMTJdLFxuICAgIGExMyA9IGFbMTNdLFxuICAgIGExNCA9IGFbMTRdLFxuICAgIGExNSA9IGFbMTVdO1xuICB2YXIgYjAgPSBiWzBdLFxuICAgIGIxID0gYlsxXSxcbiAgICBiMiA9IGJbMl0sXG4gICAgYjMgPSBiWzNdO1xuICB2YXIgYjQgPSBiWzRdLFxuICAgIGI1ID0gYls1XSxcbiAgICBiNiA9IGJbNl0sXG4gICAgYjcgPSBiWzddO1xuICB2YXIgYjggPSBiWzhdLFxuICAgIGI5ID0gYls5XSxcbiAgICBiMTAgPSBiWzEwXSxcbiAgICBiMTEgPSBiWzExXTtcbiAgdmFyIGIxMiA9IGJbMTJdLFxuICAgIGIxMyA9IGJbMTNdLFxuICAgIGIxNCA9IGJbMTRdLFxuICAgIGIxNSA9IGJbMTVdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJiBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiYgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpICYmIE1hdGguYWJzKGE0IC0gYjQpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE0KSwgTWF0aC5hYnMoYjQpKSAmJiBNYXRoLmFicyhhNSAtIGI1KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNSksIE1hdGguYWJzKGI1KSkgJiYgTWF0aC5hYnMoYTYgLSBiNikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTYpLCBNYXRoLmFicyhiNikpICYmIE1hdGguYWJzKGE3IC0gYjcpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE3KSwgTWF0aC5hYnMoYjcpKSAmJiBNYXRoLmFicyhhOCAtIGI4KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhOCksIE1hdGguYWJzKGI4KSkgJiYgTWF0aC5hYnMoYTkgLSBiOSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTkpLCBNYXRoLmFicyhiOSkpICYmIE1hdGguYWJzKGExMCAtIGIxMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEwKSwgTWF0aC5hYnMoYjEwKSkgJiYgTWF0aC5hYnMoYTExIC0gYjExKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTEpLCBNYXRoLmFicyhiMTEpKSAmJiBNYXRoLmFicyhhMTIgLSBiMTIpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExMiksIE1hdGguYWJzKGIxMikpICYmIE1hdGguYWJzKGExMyAtIGIxMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEzKSwgTWF0aC5hYnMoYjEzKSkgJiYgTWF0aC5hYnMoYTE0IC0gYjE0KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTQpLCBNYXRoLmFicyhiMTQpKSAmJiBNYXRoLmFicyhhMTUgLSBiMTUpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExNSksIE1hdGguYWJzKGIxNSkpO1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0NC5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0NC5zdWJ0cmFjdH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0OyIsImltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuaW1wb3J0ICogYXMgbWF0MyBmcm9tIFwiLi9tYXQzLmpzXCI7XG5pbXBvcnQgKiBhcyB2ZWMzIGZyb20gXCIuL3ZlYzMuanNcIjtcbmltcG9ydCAqIGFzIHZlYzQgZnJvbSBcIi4vdmVjNC5qc1wiO1xuXG4vKipcbiAqIFF1YXRlcm5pb24gaW4gdGhlIGZvcm1hdCBYWVpXXG4gKiBAbW9kdWxlIHF1YXRcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgcXVhdFxuICpcbiAqIEByZXR1cm5zIHtxdWF0fSBhIG5ldyBxdWF0ZXJuaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg0KTtcbiAgaWYgKGdsTWF0cml4LkFSUkFZX1RZUEUgIT0gRmxvYXQzMkFycmF5KSB7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gIH1cbiAgb3V0WzNdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgYSBxdWF0IHRvIHRoZSBpZGVudGl0eSBxdWF0ZXJuaW9uXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXRzIGEgcXVhdCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhbmQgcm90YXRpb24gYXhpcyxcbiAqIHRoZW4gcmV0dXJucyBpdC5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBheGlzIHRoZSBheGlzIGFyb3VuZCB3aGljaCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBeGlzQW5nbGUob3V0LCBheGlzLCByYWQpIHtcbiAgcmFkID0gcmFkICogMC41O1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIG91dFswXSA9IHMgKiBheGlzWzBdO1xuICBvdXRbMV0gPSBzICogYXhpc1sxXTtcbiAgb3V0WzJdID0gcyAqIGF4aXNbMl07XG4gIG91dFszXSA9IE1hdGguY29zKHJhZCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgcm90YXRpb24gYXhpcyBhbmQgYW5nbGUgZm9yIGEgZ2l2ZW5cbiAqICBxdWF0ZXJuaW9uLiBJZiBhIHF1YXRlcm5pb24gaXMgY3JlYXRlZCB3aXRoXG4gKiAgc2V0QXhpc0FuZ2xlLCB0aGlzIG1ldGhvZCB3aWxsIHJldHVybiB0aGUgc2FtZVxuICogIHZhbHVlcyBhcyBwcm92aWRpZWQgaW4gdGhlIG9yaWdpbmFsIHBhcmFtZXRlciBsaXN0XG4gKiAgT1IgZnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdmFsdWVzLlxuICogRXhhbXBsZTogVGhlIHF1YXRlcm5pb24gZm9ybWVkIGJ5IGF4aXMgWzAsIDAsIDFdIGFuZFxuICogIGFuZ2xlIC05MCBpcyB0aGUgc2FtZSBhcyB0aGUgcXVhdGVybmlvbiBmb3JtZWQgYnlcbiAqICBbMCwgMCwgMV0gYW5kIDI3MC4gVGhpcyBtZXRob2QgZmF2b3JzIHRoZSBsYXR0ZXIuXG4gKiBAcGFyYW0gIHt2ZWMzfSBvdXRfYXhpcyAgVmVjdG9yIHJlY2VpdmluZyB0aGUgYXhpcyBvZiByb3RhdGlvblxuICogQHBhcmFtICB7UmVhZG9ubHlRdWF0fSBxICAgICBRdWF0ZXJuaW9uIHRvIGJlIGRlY29tcG9zZWRcbiAqIEByZXR1cm4ge051bWJlcn0gICAgIEFuZ2xlLCBpbiByYWRpYW5zLCBvZiB0aGUgcm90YXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF4aXNBbmdsZShvdXRfYXhpcywgcSkge1xuICB2YXIgcmFkID0gTWF0aC5hY29zKHFbM10pICogMi4wO1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCAvIDIuMCk7XG4gIGlmIChzID4gZ2xNYXRyaXguRVBTSUxPTikge1xuICAgIG91dF9heGlzWzBdID0gcVswXSAvIHM7XG4gICAgb3V0X2F4aXNbMV0gPSBxWzFdIC8gcztcbiAgICBvdXRfYXhpc1syXSA9IHFbMl0gLyBzO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIHMgaXMgemVybywgcmV0dXJuIGFueSBheGlzIChubyByb3RhdGlvbiAtIGF4aXMgZG9lcyBub3QgbWF0dGVyKVxuICAgIG91dF9heGlzWzBdID0gMTtcbiAgICBvdXRfYXhpc1sxXSA9IDA7XG4gICAgb3V0X2F4aXNbMl0gPSAwO1xuICB9XG4gIHJldHVybiByYWQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgYW5ndWxhciBkaXN0YW5jZSBiZXR3ZWVuIHR3byB1bml0IHF1YXRlcm5pb25zXG4gKlxuICogQHBhcmFtICB7UmVhZG9ubHlRdWF0fSBhICAgICBPcmlnaW4gdW5pdCBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0gIHtSZWFkb25seVF1YXR9IGIgICAgIERlc3RpbmF0aW9uIHVuaXQgcXVhdGVybmlvblxuICogQHJldHVybiB7TnVtYmVyfSAgICAgQW5nbGUsIGluIHJhZGlhbnMsIGJldHdlZW4gdGhlIHR3byBxdWF0ZXJuaW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGUoYSwgYikge1xuICB2YXIgZG90cHJvZHVjdCA9IGRvdChhLCBiKTtcbiAgcmV0dXJuIE1hdGguYWNvcygyICogZG90cHJvZHVjdCAqIGRvdHByb2R1Y3QgLSAxKTtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICB2YXIgYXggPSBhWzBdLFxuICAgIGF5ID0gYVsxXSxcbiAgICBheiA9IGFbMl0sXG4gICAgYXcgPSBhWzNdO1xuICB2YXIgYnggPSBiWzBdLFxuICAgIGJ5ID0gYlsxXSxcbiAgICBieiA9IGJbMl0sXG4gICAgYncgPSBiWzNdO1xuICBvdXRbMF0gPSBheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5O1xuICBvdXRbMV0gPSBheSAqIGJ3ICsgYXcgKiBieSArIGF6ICogYnggLSBheCAqIGJ6O1xuICBvdXRbMl0gPSBheiAqIGJ3ICsgYXcgKiBieiArIGF4ICogYnkgLSBheSAqIGJ4O1xuICBvdXRbM10gPSBhdyAqIGJ3IC0gYXggKiBieCAtIGF5ICogYnkgLSBheiAqIGJ6O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBxdWF0ZXJuaW9uIGJ5IHRoZSBnaXZlbiBhbmdsZSBhYm91dCB0aGUgWCBheGlzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgcXVhdCB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIHJhZCkge1xuICByYWQgKj0gMC41O1xuICB2YXIgYXggPSBhWzBdLFxuICAgIGF5ID0gYVsxXSxcbiAgICBheiA9IGFbMl0sXG4gICAgYXcgPSBhWzNdO1xuICB2YXIgYnggPSBNYXRoLnNpbihyYWQpLFxuICAgIGJ3ID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYXggKiBidyArIGF3ICogYng7XG4gIG91dFsxXSA9IGF5ICogYncgKyBheiAqIGJ4O1xuICBvdXRbMl0gPSBheiAqIGJ3IC0gYXkgKiBieDtcbiAgb3V0WzNdID0gYXcgKiBidyAtIGF4ICogYng7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBZIGF4aXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHJhZCBhbmdsZSAoaW4gcmFkaWFucykgdG8gcm90YXRlXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgcmFkKSB7XG4gIHJhZCAqPSAwLjU7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgYXkgPSBhWzFdLFxuICAgIGF6ID0gYVsyXSxcbiAgICBhdyA9IGFbM107XG4gIHZhciBieSA9IE1hdGguc2luKHJhZCksXG4gICAgYncgPSBNYXRoLmNvcyhyYWQpO1xuICBvdXRbMF0gPSBheCAqIGJ3IC0gYXogKiBieTtcbiAgb3V0WzFdID0gYXkgKiBidyArIGF3ICogYnk7XG4gIG91dFsyXSA9IGF6ICogYncgKyBheCAqIGJ5O1xuICBvdXRbM10gPSBhdyAqIGJ3IC0gYXkgKiBieTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgcXVhdGVybmlvbiBieSB0aGUgZ2l2ZW4gYW5nbGUgYWJvdXQgdGhlIFogYXhpc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHF1YXQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVoob3V0LCBhLCByYWQpIHtcbiAgcmFkICo9IDAuNTtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICBheSA9IGFbMV0sXG4gICAgYXogPSBhWzJdLFxuICAgIGF3ID0gYVszXTtcbiAgdmFyIGJ6ID0gTWF0aC5zaW4ocmFkKSxcbiAgICBidyA9IE1hdGguY29zKHJhZCk7XG4gIG91dFswXSA9IGF4ICogYncgKyBheSAqIGJ6O1xuICBvdXRbMV0gPSBheSAqIGJ3IC0gYXggKiBiejtcbiAgb3V0WzJdID0gYXogKiBidyArIGF3ICogYno7XG4gIG91dFszXSA9IGF3ICogYncgLSBheiAqIGJ6O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIFcgY29tcG9uZW50IG9mIGEgcXVhdCBmcm9tIHRoZSBYLCBZLCBhbmQgWiBjb21wb25lbnRzLlxuICogQXNzdW1lcyB0aGF0IHF1YXRlcm5pb24gaXMgMSB1bml0IGluIGxlbmd0aC5cbiAqIEFueSBleGlzdGluZyBXIGNvbXBvbmVudCB3aWxsIGJlIGlnbm9yZWQuXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBXIGNvbXBvbmVudCBvZlxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlVyhvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgIHkgPSBhWzFdLFxuICAgIHogPSBhWzJdO1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICBvdXRbM10gPSBNYXRoLnNxcnQoTWF0aC5hYnMoMS4wIC0geCAqIHggLSB5ICogeSAtIHogKiB6KSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBleHBvbmVudGlhbCBvZiBhIHVuaXQgcXVhdGVybmlvbi5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXQgdG8gY2FsY3VsYXRlIHRoZSBleHBvbmVudGlhbCBvZlxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhwKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV0sXG4gICAgeiA9IGFbMl0sXG4gICAgdyA9IGFbM107XG4gIHZhciByID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG4gIHZhciBldCA9IE1hdGguZXhwKHcpO1xuICB2YXIgcyA9IHIgPiAwID8gZXQgKiBNYXRoLnNpbihyKSAvIHIgOiAwO1xuICBvdXRbMF0gPSB4ICogcztcbiAgb3V0WzFdID0geSAqIHM7XG4gIG91dFsyXSA9IHogKiBzO1xuICBvdXRbM10gPSBldCAqIE1hdGguY29zKHIpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgbmF0dXJhbCBsb2dhcml0aG0gb2YgYSB1bml0IHF1YXRlcm5pb24uXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSB0aGUgZXhwb25lbnRpYWwgb2ZcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxuKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV0sXG4gICAgeiA9IGFbMl0sXG4gICAgdyA9IGFbM107XG4gIHZhciByID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG4gIHZhciB0ID0gciA+IDAgPyBNYXRoLmF0YW4yKHIsIHcpIC8gciA6IDA7XG4gIG91dFswXSA9IHggKiB0O1xuICBvdXRbMV0gPSB5ICogdDtcbiAgb3V0WzJdID0geiAqIHQ7XG4gIG91dFszXSA9IDAuNSAqIE1hdGgubG9nKHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIHNjYWxhciBwb3dlciBvZiBhIHVuaXQgcXVhdGVybmlvbi5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXQgdG8gY2FsY3VsYXRlIHRoZSBleHBvbmVudGlhbCBvZlxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSBxdWF0ZXJuaW9uIGJ5XG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3cob3V0LCBhLCBiKSB7XG4gIGxuKG91dCwgYSk7XG4gIHNjYWxlKG91dCwgb3V0LCBiKTtcbiAgZXhwKG91dCwgb3V0KTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhIHNwaGVyaWNhbCBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byBxdWF0XG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCwgaW4gdGhlIHJhbmdlIFswLTFdLCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgLy8gYmVuY2htYXJrczpcbiAgLy8gICAgaHR0cDovL2pzcGVyZi5jb20vcXVhdGVybmlvbi1zbGVycC1pbXBsZW1lbnRhdGlvbnNcbiAgdmFyIGF4ID0gYVswXSxcbiAgICBheSA9IGFbMV0sXG4gICAgYXogPSBhWzJdLFxuICAgIGF3ID0gYVszXTtcbiAgdmFyIGJ4ID0gYlswXSxcbiAgICBieSA9IGJbMV0sXG4gICAgYnogPSBiWzJdLFxuICAgIGJ3ID0gYlszXTtcbiAgdmFyIG9tZWdhLCBjb3NvbSwgc2lub20sIHNjYWxlMCwgc2NhbGUxO1xuXG4gIC8vIGNhbGMgY29zaW5lXG4gIGNvc29tID0gYXggKiBieCArIGF5ICogYnkgKyBheiAqIGJ6ICsgYXcgKiBidztcbiAgLy8gYWRqdXN0IHNpZ25zIChpZiBuZWNlc3NhcnkpXG4gIGlmIChjb3NvbSA8IDAuMCkge1xuICAgIGNvc29tID0gLWNvc29tO1xuICAgIGJ4ID0gLWJ4O1xuICAgIGJ5ID0gLWJ5O1xuICAgIGJ6ID0gLWJ6O1xuICAgIGJ3ID0gLWJ3O1xuICB9XG4gIC8vIGNhbGN1bGF0ZSBjb2VmZmljaWVudHNcbiAgaWYgKDEuMCAtIGNvc29tID4gZ2xNYXRyaXguRVBTSUxPTikge1xuICAgIC8vIHN0YW5kYXJkIGNhc2UgKHNsZXJwKVxuICAgIG9tZWdhID0gTWF0aC5hY29zKGNvc29tKTtcbiAgICBzaW5vbSA9IE1hdGguc2luKG9tZWdhKTtcbiAgICBzY2FsZTAgPSBNYXRoLnNpbigoMS4wIC0gdCkgKiBvbWVnYSkgLyBzaW5vbTtcbiAgICBzY2FsZTEgPSBNYXRoLnNpbih0ICogb21lZ2EpIC8gc2lub207XG4gIH0gZWxzZSB7XG4gICAgLy8gXCJmcm9tXCIgYW5kIFwidG9cIiBxdWF0ZXJuaW9ucyBhcmUgdmVyeSBjbG9zZVxuICAgIC8vICAuLi4gc28gd2UgY2FuIGRvIGEgbGluZWFyIGludGVycG9sYXRpb25cbiAgICBzY2FsZTAgPSAxLjAgLSB0O1xuICAgIHNjYWxlMSA9IHQ7XG4gIH1cbiAgLy8gY2FsY3VsYXRlIGZpbmFsIHZhbHVlc1xuICBvdXRbMF0gPSBzY2FsZTAgKiBheCArIHNjYWxlMSAqIGJ4O1xuICBvdXRbMV0gPSBzY2FsZTAgKiBheSArIHNjYWxlMSAqIGJ5O1xuICBvdXRbMl0gPSBzY2FsZTAgKiBheiArIHNjYWxlMSAqIGJ6O1xuICBvdXRbM10gPSBzY2FsZTAgKiBhdyArIHNjYWxlMSAqIGJ3O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB1bml0IHF1YXRlcm5pb25cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShvdXQpIHtcbiAgLy8gSW1wbGVtZW50YXRpb24gb2YgaHR0cDovL3BsYW5uaW5nLmNzLnVpdWMuZWR1L25vZGUxOTguaHRtbFxuICAvLyBUT0RPOiBDYWxsaW5nIHJhbmRvbSAzIHRpbWVzIGlzIHByb2JhYmx5IG5vdCB0aGUgZmFzdGVzdCBzb2x1dGlvblxuICB2YXIgdTEgPSBnbE1hdHJpeC5SQU5ET00oKTtcbiAgdmFyIHUyID0gZ2xNYXRyaXguUkFORE9NKCk7XG4gIHZhciB1MyA9IGdsTWF0cml4LlJBTkRPTSgpO1xuICB2YXIgc3FydDFNaW51c1UxID0gTWF0aC5zcXJ0KDEgLSB1MSk7XG4gIHZhciBzcXJ0VTEgPSBNYXRoLnNxcnQodTEpO1xuICBvdXRbMF0gPSBzcXJ0MU1pbnVzVTEgKiBNYXRoLnNpbigyLjAgKiBNYXRoLlBJICogdTIpO1xuICBvdXRbMV0gPSBzcXJ0MU1pbnVzVTEgKiBNYXRoLmNvcygyLjAgKiBNYXRoLlBJICogdTIpO1xuICBvdXRbMl0gPSBzcXJ0VTEgKiBNYXRoLnNpbigyLjAgKiBNYXRoLlBJICogdTMpO1xuICBvdXRbM10gPSBzcXJ0VTEgKiBNYXRoLmNvcygyLjAgKiBNYXRoLlBJICogdTMpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGludmVyc2Ugb2YgYSBxdWF0XG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBpbnZlcnNlIG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gIHZhciBhMCA9IGFbMF0sXG4gICAgYTEgPSBhWzFdLFxuICAgIGEyID0gYVsyXSxcbiAgICBhMyA9IGFbM107XG4gIHZhciBkb3QgPSBhMCAqIGEwICsgYTEgKiBhMSArIGEyICogYTIgKyBhMyAqIGEzO1xuICB2YXIgaW52RG90ID0gZG90ID8gMS4wIC8gZG90IDogMDtcblxuICAvLyBUT0RPOiBXb3VsZCBiZSBmYXN0ZXIgdG8gcmV0dXJuIFswLDAsMCwwXSBpbW1lZGlhdGVseSBpZiBkb3QgPT0gMFxuXG4gIG91dFswXSA9IC1hMCAqIGludkRvdDtcbiAgb3V0WzFdID0gLWExICogaW52RG90O1xuICBvdXRbMl0gPSAtYTIgKiBpbnZEb3Q7XG4gIG91dFszXSA9IGEzICogaW52RG90O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbmp1Z2F0ZSBvZiBhIHF1YXRcbiAqIElmIHRoZSBxdWF0ZXJuaW9uIGlzIG5vcm1hbGl6ZWQsIHRoaXMgZnVuY3Rpb24gaXMgZmFzdGVyIHRoYW4gcXVhdC5pbnZlcnNlIGFuZCBwcm9kdWNlcyB0aGUgc2FtZSByZXN1bHQuXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBjb25qdWdhdGUgb2ZcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmp1Z2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICBvdXRbMl0gPSAtYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcXVhdGVybmlvbiBmcm9tIHRoZSBnaXZlbiAzeDMgcm90YXRpb24gbWF0cml4LlxuICpcbiAqIE5PVEU6IFRoZSByZXN1bHRhbnQgcXVhdGVybmlvbiBpcyBub3Qgbm9ybWFsaXplZCwgc28geW91IHNob3VsZCBiZSBzdXJlXG4gKiB0byByZW5vcm1hbGl6ZSB0aGUgcXVhdGVybmlvbiB5b3Vyc2VsZiB3aGVyZSBuZWNlc3NhcnkuXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gbSByb3RhdGlvbiBtYXRyaXhcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbU1hdDMob3V0LCBtKSB7XG4gIC8vIEFsZ29yaXRobSBpbiBLZW4gU2hvZW1ha2UncyBhcnRpY2xlIGluIDE5ODcgU0lHR1JBUEggY291cnNlIG5vdGVzXG4gIC8vIGFydGljbGUgXCJRdWF0ZXJuaW9uIENhbGN1bHVzIGFuZCBGYXN0IEFuaW1hdGlvblwiLlxuICB2YXIgZlRyYWNlID0gbVswXSArIG1bNF0gKyBtWzhdO1xuICB2YXIgZlJvb3Q7XG4gIGlmIChmVHJhY2UgPiAwLjApIHtcbiAgICAvLyB8d3wgPiAxLzIsIG1heSBhcyB3ZWxsIGNob29zZSB3ID4gMS8yXG4gICAgZlJvb3QgPSBNYXRoLnNxcnQoZlRyYWNlICsgMS4wKTsgLy8gMndcbiAgICBvdXRbM10gPSAwLjUgKiBmUm9vdDtcbiAgICBmUm9vdCA9IDAuNSAvIGZSb290OyAvLyAxLyg0dylcbiAgICBvdXRbMF0gPSAobVs1XSAtIG1bN10pICogZlJvb3Q7XG4gICAgb3V0WzFdID0gKG1bNl0gLSBtWzJdKSAqIGZSb290O1xuICAgIG91dFsyXSA9IChtWzFdIC0gbVszXSkgKiBmUm9vdDtcbiAgfSBlbHNlIHtcbiAgICAvLyB8d3wgPD0gMS8yXG4gICAgdmFyIGkgPSAwO1xuICAgIGlmIChtWzRdID4gbVswXSkgaSA9IDE7XG4gICAgaWYgKG1bOF0gPiBtW2kgKiAzICsgaV0pIGkgPSAyO1xuICAgIHZhciBqID0gKGkgKyAxKSAlIDM7XG4gICAgdmFyIGsgPSAoaSArIDIpICUgMztcbiAgICBmUm9vdCA9IE1hdGguc3FydChtW2kgKiAzICsgaV0gLSBtW2ogKiAzICsgal0gLSBtW2sgKiAzICsga10gKyAxLjApO1xuICAgIG91dFtpXSA9IDAuNSAqIGZSb290O1xuICAgIGZSb290ID0gMC41IC8gZlJvb3Q7XG4gICAgb3V0WzNdID0gKG1baiAqIDMgKyBrXSAtIG1bayAqIDMgKyBqXSkgKiBmUm9vdDtcbiAgICBvdXRbal0gPSAobVtqICogMyArIGldICsgbVtpICogMyArIGpdKSAqIGZSb290O1xuICAgIG91dFtrXSA9IChtW2sgKiAzICsgaV0gKyBtW2kgKiAzICsga10pICogZlJvb3Q7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcXVhdGVybmlvbiBmcm9tIHRoZSBnaXZlbiBldWxlciBhbmdsZSB4LCB5LCB6IHVzaW5nIHRoZSBwcm92aWRlZCBpbnRyaW5zaWMgb3JkZXIgZm9yIHRoZSBjb252ZXJzaW9uLlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtOdW1iZXJ9IHggQW5nbGUgdG8gcm90YXRlIGFyb3VuZCBYIGF4aXMgaW4gZGVncmVlcy5cbiAqIEBwYXJhbSB7TnVtYmVyfSB5IEFuZ2xlIHRvIHJvdGF0ZSBhcm91bmQgWSBheGlzIGluIGRlZ3JlZXMuXG4gKiBAcGFyYW0ge051bWJlcn0geiBBbmdsZSB0byByb3RhdGUgYXJvdW5kIFogYXhpcyBpbiBkZWdyZWVzLlxuICogQHBhcmFtIHsneHl6J3wneHp5J3wneXh6J3wneXp4J3wnenh5J3wnenl4J30gb3JkZXIgSW50cmluc2ljIG9yZGVyIGZvciBjb252ZXJzaW9uLCBkZWZhdWx0IGlzIHp5eC5cbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUV1bGVyKG91dCwgeCwgeSwgeikge1xuICB2YXIgb3JkZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IGdsTWF0cml4LkFOR0xFX09SREVSO1xuICB2YXIgaGFsZlRvUmFkID0gTWF0aC5QSSAvIDM2MDtcbiAgeCAqPSBoYWxmVG9SYWQ7XG4gIHogKj0gaGFsZlRvUmFkO1xuICB5ICo9IGhhbGZUb1JhZDtcbiAgdmFyIHN4ID0gTWF0aC5zaW4oeCk7XG4gIHZhciBjeCA9IE1hdGguY29zKHgpO1xuICB2YXIgc3kgPSBNYXRoLnNpbih5KTtcbiAgdmFyIGN5ID0gTWF0aC5jb3MoeSk7XG4gIHZhciBzeiA9IE1hdGguc2luKHopO1xuICB2YXIgY3ogPSBNYXRoLmNvcyh6KTtcbiAgc3dpdGNoIChvcmRlcikge1xuICAgIGNhc2UgXCJ4eXpcIjpcbiAgICAgIG91dFswXSA9IHN4ICogY3kgKiBjeiArIGN4ICogc3kgKiBzejtcbiAgICAgIG91dFsxXSA9IGN4ICogc3kgKiBjeiAtIHN4ICogY3kgKiBzejtcbiAgICAgIG91dFsyXSA9IGN4ICogY3kgKiBzeiArIHN4ICogc3kgKiBjejtcbiAgICAgIG91dFszXSA9IGN4ICogY3kgKiBjeiAtIHN4ICogc3kgKiBzejtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ4enlcIjpcbiAgICAgIG91dFswXSA9IHN4ICogY3kgKiBjeiAtIGN4ICogc3kgKiBzejtcbiAgICAgIG91dFsxXSA9IGN4ICogc3kgKiBjeiAtIHN4ICogY3kgKiBzejtcbiAgICAgIG91dFsyXSA9IGN4ICogY3kgKiBzeiArIHN4ICogc3kgKiBjejtcbiAgICAgIG91dFszXSA9IGN4ICogY3kgKiBjeiArIHN4ICogc3kgKiBzejtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ5eHpcIjpcbiAgICAgIG91dFswXSA9IHN4ICogY3kgKiBjeiArIGN4ICogc3kgKiBzejtcbiAgICAgIG91dFsxXSA9IGN4ICogc3kgKiBjeiAtIHN4ICogY3kgKiBzejtcbiAgICAgIG91dFsyXSA9IGN4ICogY3kgKiBzeiAtIHN4ICogc3kgKiBjejtcbiAgICAgIG91dFszXSA9IGN4ICogY3kgKiBjeiArIHN4ICogc3kgKiBzejtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ5enhcIjpcbiAgICAgIG91dFswXSA9IHN4ICogY3kgKiBjeiArIGN4ICogc3kgKiBzejtcbiAgICAgIG91dFsxXSA9IGN4ICogc3kgKiBjeiArIHN4ICogY3kgKiBzejtcbiAgICAgIG91dFsyXSA9IGN4ICogY3kgKiBzeiAtIHN4ICogc3kgKiBjejtcbiAgICAgIG91dFszXSA9IGN4ICogY3kgKiBjeiAtIHN4ICogc3kgKiBzejtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ6eHlcIjpcbiAgICAgIG91dFswXSA9IHN4ICogY3kgKiBjeiAtIGN4ICogc3kgKiBzejtcbiAgICAgIG91dFsxXSA9IGN4ICogc3kgKiBjeiArIHN4ICogY3kgKiBzejtcbiAgICAgIG91dFsyXSA9IGN4ICogY3kgKiBzeiArIHN4ICogc3kgKiBjejtcbiAgICAgIG91dFszXSA9IGN4ICogY3kgKiBjeiAtIHN4ICogc3kgKiBzejtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ6eXhcIjpcbiAgICAgIG91dFswXSA9IHN4ICogY3kgKiBjeiAtIGN4ICogc3kgKiBzejtcbiAgICAgIG91dFsxXSA9IGN4ICogc3kgKiBjeiArIHN4ICogY3kgKiBzejtcbiAgICAgIG91dFsyXSA9IGN4ICogY3kgKiBzeiAtIHN4ICogc3kgKiBjejtcbiAgICAgIG91dFszXSA9IGN4ICogY3kgKiBjeiArIHN4ICogc3kgKiBzejtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gYW5nbGUgb3JkZXIgJyArIG9yZGVyKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBxdWF0ZXJuaW9uXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdmVjdG9yIHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiBcInF1YXQoXCIgKyBhWzBdICsgXCIsIFwiICsgYVsxXSArIFwiLCBcIiArIGFbMl0gKyBcIiwgXCIgKyBhWzNdICsgXCIpXCI7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBxdWF0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgcXVhdGVybmlvblxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXRlcm5pb24gdG8gY2xvbmVcbiAqIEByZXR1cm5zIHtxdWF0fSBhIG5ldyBxdWF0ZXJuaW9uXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBjbG9uZSA9IHZlYzQuY2xvbmU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBxdWF0IGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7cXVhdH0gYSBuZXcgcXVhdGVybmlvblxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgZnJvbVZhbHVlcyA9IHZlYzQuZnJvbVZhbHVlcztcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgcXVhdCB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgc291cmNlIHF1YXRlcm5pb25cbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIGNvcHkgPSB2ZWM0LmNvcHk7XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgcXVhdCB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgc2V0ID0gdmVjNC5zZXQ7XG5cbi8qKlxuICogQWRkcyB0d28gcXVhdCdzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBhZGQgPSB2ZWM0LmFkZDtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHF1YXQubXVsdGlwbHl9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBtdWwgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBTY2FsZXMgYSBxdWF0IGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgc2NhbGUgPSB2ZWM0LnNjYWxlO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBkb3QgPSB2ZWM0LmRvdDtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHF1YXQnc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgbGVycCA9IHZlYzQubGVycDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSBxdWF0XG4gKlxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCB2YXIgbGVuZ3RoID0gdmVjNC5sZW5ndGg7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBxdWF0Lmxlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIGxlbiA9IGxlbmd0aDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGxlbmd0aCBvZiBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBzcXVhcmVkTGVuZ3RoID0gdmVjNC5zcXVhcmVkTGVuZ3RoO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgcXVhdC5zcXVhcmVkTGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgc3FyTGVuID0gc3F1YXJlZExlbmd0aDtcblxuLyoqXG4gKiBOb3JtYWxpemUgYSBxdWF0XG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0ZXJuaW9uIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgbm9ybWFsaXplID0gdmVjNC5ub3JtYWxpemU7XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgcXVhdGVybmlvbnMgaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIFRoZSBmaXJzdCBxdWF0ZXJuaW9uLlxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGIgVGhlIHNlY29uZCBxdWF0ZXJuaW9uLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCB2YXIgZXhhY3RFcXVhbHMgPSB2ZWM0LmV4YWN0RXF1YWxzO1xuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHF1YXRlcm5pb25zIHBvaW50IGFwcHJveGltYXRlbHkgdG8gdGhlIHNhbWUgZGlyZWN0aW9uLlxuICpcbiAqIEJvdGggcXVhdGVybmlvbnMgYXJlIGFzc3VtZWQgdG8gYmUgdW5pdCBsZW5ndGguXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgVGhlIGZpcnN0IHVuaXQgcXVhdGVybmlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIFRoZSBzZWNvbmQgdW5pdCBxdWF0ZXJuaW9uLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHF1YXRlcm5pb25zIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHZlYzQuZG90KGEsIGIpKSA+PSAxIC0gZ2xNYXRyaXguRVBTSUxPTjtcbn1cblxuLyoqXG4gKiBTZXRzIGEgcXVhdGVybmlvbiB0byByZXByZXNlbnQgdGhlIHNob3J0ZXN0IHJvdGF0aW9uIGZyb20gb25lXG4gKiB2ZWN0b3IgdG8gYW5vdGhlci5cbiAqXG4gKiBCb3RoIHZlY3RvcnMgYXJlIGFzc3VtZWQgdG8gYmUgdW5pdCBsZW5ndGguXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uLlxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGluaXRpYWwgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgZGVzdGluYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCB2YXIgcm90YXRpb25UbyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRtcHZlYzMgPSB2ZWMzLmNyZWF0ZSgpO1xuICB2YXIgeFVuaXRWZWMzID0gdmVjMy5mcm9tVmFsdWVzKDEsIDAsIDApO1xuICB2YXIgeVVuaXRWZWMzID0gdmVjMy5mcm9tVmFsdWVzKDAsIDEsIDApO1xuICByZXR1cm4gZnVuY3Rpb24gKG91dCwgYSwgYikge1xuICAgIHZhciBkb3QgPSB2ZWMzLmRvdChhLCBiKTtcbiAgICBpZiAoZG90IDwgLTAuOTk5OTk5KSB7XG4gICAgICB2ZWMzLmNyb3NzKHRtcHZlYzMsIHhVbml0VmVjMywgYSk7XG4gICAgICBpZiAodmVjMy5sZW4odG1wdmVjMykgPCAwLjAwMDAwMSkgdmVjMy5jcm9zcyh0bXB2ZWMzLCB5VW5pdFZlYzMsIGEpO1xuICAgICAgdmVjMy5ub3JtYWxpemUodG1wdmVjMywgdG1wdmVjMyk7XG4gICAgICBzZXRBeGlzQW5nbGUob3V0LCB0bXB2ZWMzLCBNYXRoLlBJKTtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfSBlbHNlIGlmIChkb3QgPiAwLjk5OTk5OSkge1xuICAgICAgb3V0WzBdID0gMDtcbiAgICAgIG91dFsxXSA9IDA7XG4gICAgICBvdXRbMl0gPSAwO1xuICAgICAgb3V0WzNdID0gMTtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZlYzMuY3Jvc3ModG1wdmVjMywgYSwgYik7XG4gICAgICBvdXRbMF0gPSB0bXB2ZWMzWzBdO1xuICAgICAgb3V0WzFdID0gdG1wdmVjM1sxXTtcbiAgICAgIG91dFsyXSA9IHRtcHZlYzNbMl07XG4gICAgICBvdXRbM10gPSAxICsgZG90O1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZShvdXQsIG91dCk7XG4gICAgfVxuICB9O1xufSgpO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgc3BoZXJpY2FsIGxpbmVhciBpbnRlcnBvbGF0aW9uIHdpdGggdHdvIGNvbnRyb2wgcG9pbnRzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYyB0aGUgdGhpcmQgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGQgdGhlIGZvdXJ0aCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCwgaW4gdGhlIHJhbmdlIFswLTFdLCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCB2YXIgc3FsZXJwID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGVtcDEgPSBjcmVhdGUoKTtcbiAgdmFyIHRlbXAyID0gY3JlYXRlKCk7XG4gIHJldHVybiBmdW5jdGlvbiAob3V0LCBhLCBiLCBjLCBkLCB0KSB7XG4gICAgc2xlcnAodGVtcDEsIGEsIGQsIHQpO1xuICAgIHNsZXJwKHRlbXAyLCBiLCBjLCB0KTtcbiAgICBzbGVycChvdXQsIHRlbXAxLCB0ZW1wMiwgMiAqIHQgKiAoMSAtIHQpKTtcbiAgICByZXR1cm4gb3V0O1xuICB9O1xufSgpO1xuXG4vKipcbiAqIFNldHMgdGhlIHNwZWNpZmllZCBxdWF0ZXJuaW9uIHdpdGggdmFsdWVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuXG4gKiBheGVzLiBFYWNoIGF4aXMgaXMgYSB2ZWMzIGFuZCBpcyBleHBlY3RlZCB0byBiZSB1bml0IGxlbmd0aCBhbmRcbiAqIHBlcnBlbmRpY3VsYXIgdG8gYWxsIG90aGVyIHNwZWNpZmllZCBheGVzLlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2aWV3ICB0aGUgdmVjdG9yIHJlcHJlc2VudGluZyB0aGUgdmlld2luZyBkaXJlY3Rpb25cbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSByaWdodCB0aGUgdmVjdG9yIHJlcHJlc2VudGluZyB0aGUgbG9jYWwgXCJyaWdodFwiIGRpcmVjdGlvblxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHVwICAgIHRoZSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSBsb2NhbCBcInVwXCIgZGlyZWN0aW9uXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCB2YXIgc2V0QXhlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1hdHIgPSBtYXQzLmNyZWF0ZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gKG91dCwgdmlldywgcmlnaHQsIHVwKSB7XG4gICAgbWF0clswXSA9IHJpZ2h0WzBdO1xuICAgIG1hdHJbM10gPSByaWdodFsxXTtcbiAgICBtYXRyWzZdID0gcmlnaHRbMl07XG4gICAgbWF0clsxXSA9IHVwWzBdO1xuICAgIG1hdHJbNF0gPSB1cFsxXTtcbiAgICBtYXRyWzddID0gdXBbMl07XG4gICAgbWF0clsyXSA9IC12aWV3WzBdO1xuICAgIG1hdHJbNV0gPSAtdmlld1sxXTtcbiAgICBtYXRyWzhdID0gLXZpZXdbMl07XG4gICAgcmV0dXJuIG5vcm1hbGl6ZShvdXQsIGZyb21NYXQzKG91dCwgbWF0cikpO1xuICB9O1xufSgpOyIsImltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuXG4vKipcbiAqIDMgRGltZW5zaW9uYWwgVmVjdG9yXG4gKiBAbW9kdWxlIHZlYzNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzNcbiAqXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgzKTtcbiAgaWYgKGdsTWF0cml4LkFSUkFZX1RZUEUgIT0gRmxvYXQzMkFycmF5KSB7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzMgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gY2xvbmVcbiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gIHZhciB4ID0gYVswXTtcbiAgdmFyIHkgPSBhWzFdO1xuICB2YXIgeiA9IGFbMl07XG4gIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzMgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyh4LCB5LCB6KSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgzKTtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjMyB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzMgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCB4LCB5LCB6KSB7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAqIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAvIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC8gYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNYXRoLmNlaWwgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBjZWlsXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjZWlsKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmNlaWwoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguY2VpbChhWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5jZWlsKGFbMl0pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE1hdGguZmxvb3IgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBmbG9vclxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmxvb3Iob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguZmxvb3IoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguZmxvb3IoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguZmxvb3IoYVsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICBvdXRbMl0gPSBNYXRoLm1pbihhWzJdLCBiWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSk7XG4gIG91dFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIHN5bW1ldHJpYyByb3VuZCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIHJvdW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChvdXQsIGEpIHtcbiAgb3V0WzBdID0gZ2xNYXRyaXgucm91bmQoYVswXSk7XG4gIG91dFsxXSA9IGdsTWF0cml4LnJvdW5kKGFbMV0pO1xuICBvdXRbMl0gPSBnbE1hdHJpeC5yb3VuZChhWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWMzIGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgb3V0WzJdID0gYVsyXSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gdmVjMydzIGFmdGVyIHNjYWxpbmcgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXTtcbiAgdmFyIHkgPSBiWzFdIC0gYVsxXTtcbiAgdmFyIHogPSBiWzJdIC0gYVsyXTtcbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UoYSwgYikge1xuICB2YXIgeCA9IGJbMF0gLSBhWzBdO1xuICB2YXIgeSA9IGJbMV0gLSBhWzFdO1xuICB2YXIgeiA9IGJbMl0gLSBhWzJdO1xuICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICB2YXIgeCA9IGFbMF07XG4gIHZhciB5ID0gYVsxXTtcbiAgdmFyIHogPSBhWzJdO1xuICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6O1xufVxuXG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBuZWdhdGVcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICBvdXRbMl0gPSAtYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gaW52ZXJ0XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICBvdXRbMV0gPSAxLjAgLyBhWzFdO1xuICBvdXRbMl0gPSAxLjAgLyBhWzJdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF07XG4gIHZhciB5ID0gYVsxXTtcbiAgdmFyIHogPSBhWzJdO1xuICB2YXIgbGVuID0geCAqIHggKyB5ICogeSArIHogKiB6O1xuICBpZiAobGVuID4gMCkge1xuICAgIC8vVE9ETzogZXZhbHVhdGUgdXNlIG9mIGdsbV9pbnZzcXJ0IGhlcmU/XG4gICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICB9XG4gIG91dFswXSA9IGFbMF0gKiBsZW47XG4gIG91dFsxXSA9IGFbMV0gKiBsZW47XG4gIG91dFsyXSA9IGFbMl0gKiBsZW47XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl07XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcm9zcyhvdXQsIGEsIGIpIHtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICBheSA9IGFbMV0sXG4gICAgYXogPSBhWzJdO1xuICB2YXIgYnggPSBiWzBdLFxuICAgIGJ5ID0gYlsxXSxcbiAgICBieiA9IGJbMl07XG4gIG91dFswXSA9IGF5ICogYnogLSBheiAqIGJ5O1xuICBvdXRbMV0gPSBheiAqIGJ4IC0gYXggKiBiejtcbiAgb3V0WzJdID0gYXggKiBieSAtIGF5ICogYng7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgdmFyIGF4ID0gYVswXTtcbiAgdmFyIGF5ID0gYVsxXTtcbiAgdmFyIGF6ID0gYVsyXTtcbiAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheCk7XG4gIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpO1xuICBvdXRbMl0gPSBheiArIHQgKiAoYlsyXSAtIGF6KTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhIHNwaGVyaWNhbCBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xlcnAob3V0LCBhLCBiLCB0KSB7XG4gIHZhciBhbmdsZSA9IE1hdGguYWNvcyhNYXRoLm1pbihNYXRoLm1heChkb3QoYSwgYiksIC0xKSwgMSkpO1xuICB2YXIgc2luVG90YWwgPSBNYXRoLnNpbihhbmdsZSk7XG4gIHZhciByYXRpb0EgPSBNYXRoLnNpbigoMSAtIHQpICogYW5nbGUpIC8gc2luVG90YWw7XG4gIHZhciByYXRpb0IgPSBNYXRoLnNpbih0ICogYW5nbGUpIC8gc2luVG90YWw7XG4gIG91dFswXSA9IHJhdGlvQSAqIGFbMF0gKyByYXRpb0IgKiBiWzBdO1xuICBvdXRbMV0gPSByYXRpb0EgKiBhWzFdICsgcmF0aW9CICogYlsxXTtcbiAgb3V0WzJdID0gcmF0aW9BICogYVsyXSArIHJhdGlvQiAqIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYSBoZXJtaXRlIGludGVycG9sYXRpb24gd2l0aCB0d28gY29udHJvbCBwb2ludHNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGMgdGhlIHRoaXJkIG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBkIHRoZSBmb3VydGggb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGVybWl0ZShvdXQsIGEsIGIsIGMsIGQsIHQpIHtcbiAgdmFyIGZhY3RvclRpbWVzMiA9IHQgKiB0O1xuICB2YXIgZmFjdG9yMSA9IGZhY3RvclRpbWVzMiAqICgyICogdCAtIDMpICsgMTtcbiAgdmFyIGZhY3RvcjIgPSBmYWN0b3JUaW1lczIgKiAodCAtIDIpICsgdDtcbiAgdmFyIGZhY3RvcjMgPSBmYWN0b3JUaW1lczIgKiAodCAtIDEpO1xuICB2YXIgZmFjdG9yNCA9IGZhY3RvclRpbWVzMiAqICgzIC0gMiAqIHQpO1xuICBvdXRbMF0gPSBhWzBdICogZmFjdG9yMSArIGJbMF0gKiBmYWN0b3IyICsgY1swXSAqIGZhY3RvcjMgKyBkWzBdICogZmFjdG9yNDtcbiAgb3V0WzFdID0gYVsxXSAqIGZhY3RvcjEgKyBiWzFdICogZmFjdG9yMiArIGNbMV0gKiBmYWN0b3IzICsgZFsxXSAqIGZhY3RvcjQ7XG4gIG91dFsyXSA9IGFbMl0gKiBmYWN0b3IxICsgYlsyXSAqIGZhY3RvcjIgKyBjWzJdICogZmFjdG9yMyArIGRbMl0gKiBmYWN0b3I0O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgYmV6aWVyIGludGVycG9sYXRpb24gd2l0aCB0d28gY29udHJvbCBwb2ludHNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGMgdGhlIHRoaXJkIG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBkIHRoZSBmb3VydGggb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmV6aWVyKG91dCwgYSwgYiwgYywgZCwgdCkge1xuICB2YXIgaW52ZXJzZUZhY3RvciA9IDEgLSB0O1xuICB2YXIgaW52ZXJzZUZhY3RvclRpbWVzVHdvID0gaW52ZXJzZUZhY3RvciAqIGludmVyc2VGYWN0b3I7XG4gIHZhciBmYWN0b3JUaW1lczIgPSB0ICogdDtcbiAgdmFyIGZhY3RvcjEgPSBpbnZlcnNlRmFjdG9yVGltZXNUd28gKiBpbnZlcnNlRmFjdG9yO1xuICB2YXIgZmFjdG9yMiA9IDMgKiB0ICogaW52ZXJzZUZhY3RvclRpbWVzVHdvO1xuICB2YXIgZmFjdG9yMyA9IDMgKiBmYWN0b3JUaW1lczIgKiBpbnZlcnNlRmFjdG9yO1xuICB2YXIgZmFjdG9yNCA9IGZhY3RvclRpbWVzMiAqIHQ7XG4gIG91dFswXSA9IGFbMF0gKiBmYWN0b3IxICsgYlswXSAqIGZhY3RvcjIgKyBjWzBdICogZmFjdG9yMyArIGRbMF0gKiBmYWN0b3I0O1xuICBvdXRbMV0gPSBhWzFdICogZmFjdG9yMSArIGJbMV0gKiBmYWN0b3IyICsgY1sxXSAqIGZhY3RvcjMgKyBkWzFdICogZmFjdG9yNDtcbiAgb3V0WzJdID0gYVsyXSAqIGZhY3RvcjEgKyBiWzJdICogZmFjdG9yMiArIGNbMl0gKiBmYWN0b3IzICsgZFsyXSAqIGZhY3RvcjQ7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gW3NjYWxlXSBMZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3IuIElmIG9taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG91dCwgc2NhbGUpIHtcbiAgc2NhbGUgPSBzY2FsZSA9PT0gdW5kZWZpbmVkID8gMS4wIDogc2NhbGU7XG4gIHZhciByID0gZ2xNYXRyaXguUkFORE9NKCkgKiAyLjAgKiBNYXRoLlBJO1xuICB2YXIgeiA9IGdsTWF0cml4LlJBTkRPTSgpICogMi4wIC0gMS4wO1xuICB2YXIgelNjYWxlID0gTWF0aC5zcXJ0KDEuMCAtIHogKiB6KSAqIHNjYWxlO1xuICBvdXRbMF0gPSBNYXRoLmNvcyhyKSAqIHpTY2FsZTtcbiAgb3V0WzFdID0gTWF0aC5zaW4ocikgKiB6U2NhbGU7XG4gIG91dFsyXSA9IHogKiBzY2FsZTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBtYXQ0LlxuICogNHRoIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgIHkgPSBhWzFdLFxuICAgIHogPSBhWzJdO1xuICB2YXIgdyA9IG1bM10gKiB4ICsgbVs3XSAqIHkgKyBtWzExXSAqIHogKyBtWzE1XTtcbiAgdyA9IHcgfHwgMS4wO1xuICBvdXRbMF0gPSAobVswXSAqIHggKyBtWzRdICogeSArIG1bOF0gKiB6ICsgbVsxMl0pIC8gdztcbiAgb3V0WzFdID0gKG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdKSAvIHc7XG4gIG91dFsyXSA9IChtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0pIC8gdztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBtYXQzLlxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IG0gdGhlIDN4MyBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDMob3V0LCBhLCBtKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICB5ID0gYVsxXSxcbiAgICB6ID0gYVsyXTtcbiAgb3V0WzBdID0geCAqIG1bMF0gKyB5ICogbVszXSArIHogKiBtWzZdO1xuICBvdXRbMV0gPSB4ICogbVsxXSArIHkgKiBtWzRdICsgeiAqIG1bN107XG4gIG91dFsyXSA9IHggKiBtWzJdICsgeSAqIG1bNV0gKyB6ICogbVs4XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBxdWF0XG4gKiBDYW4gYWxzbyBiZSB1c2VkIGZvciBkdWFsIHF1YXRlcm5pb25zLiAoTXVsdGlwbHkgaXQgd2l0aCB0aGUgcmVhbCBwYXJ0KVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IHEgbm9ybWFsaXplZCBxdWF0ZXJuaW9uIHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1RdWF0KG91dCwgYSwgcSkge1xuICAvLyBGYXN0IFZlY3RvciBSb3RhdGlvbiB1c2luZyBRdWF0ZXJuaW9ucyBieSBSb2JlcnQgRWlzZWxlXG4gIC8vIGh0dHBzOi8vcmF3Lm9yZy9wcm9vZi92ZWN0b3Itcm90YXRpb24tdXNpbmctcXVhdGVybmlvbnMvXG5cbiAgdmFyIHF4ID0gcVswXSxcbiAgICBxeSA9IHFbMV0sXG4gICAgcXogPSBxWzJdLFxuICAgIHF3ID0gcVszXTtcbiAgdmFyIHZ4ID0gYVswXSxcbiAgICB2eSA9IGFbMV0sXG4gICAgdnogPSBhWzJdO1xuXG4gIC8vIHQgPSBxIHggdlxuICB2YXIgdHggPSBxeSAqIHZ6IC0gcXogKiB2eTtcbiAgdmFyIHR5ID0gcXogKiB2eCAtIHF4ICogdno7XG4gIHZhciB0eiA9IHF4ICogdnkgLSBxeSAqIHZ4O1xuXG4gIC8vIHQgPSAydFxuICB0eCA9IHR4ICsgdHg7XG4gIHR5ID0gdHkgKyB0eTtcbiAgdHogPSB0eiArIHR6O1xuXG4gIC8vIHYgKyB3IHQgKyBxIHggdFxuICBvdXRbMF0gPSB2eCArIHF3ICogdHggKyBxeSAqIHR6IC0gcXogKiB0eTtcbiAgb3V0WzFdID0gdnkgKyBxdyAqIHR5ICsgcXogKiB0eCAtIHF4ICogdHo7XG4gIG91dFsyXSA9IHZ6ICsgcXcgKiB0eiArIHF4ICogdHkgLSBxeSAqIHR4O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHgtYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIFRoZSBhbmdsZSBvZiByb3RhdGlvbiBpbiByYWRpYW5zXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgYiwgcmFkKSB7XG4gIHZhciBwID0gW10sXG4gICAgciA9IFtdO1xuICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gIHBbMF0gPSBhWzBdIC0gYlswXTtcbiAgcFsxXSA9IGFbMV0gLSBiWzFdO1xuICBwWzJdID0gYVsyXSAtIGJbMl07XG5cbiAgLy9wZXJmb3JtIHJvdGF0aW9uXG4gIHJbMF0gPSBwWzBdO1xuICByWzFdID0gcFsxXSAqIE1hdGguY29zKHJhZCkgLSBwWzJdICogTWF0aC5zaW4ocmFkKTtcbiAgclsyXSA9IHBbMV0gKiBNYXRoLnNpbihyYWQpICsgcFsyXSAqIE1hdGguY29zKHJhZCk7XG5cbiAgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICBvdXRbMF0gPSByWzBdICsgYlswXTtcbiAgb3V0WzFdID0gclsxXSArIGJbMV07XG4gIG91dFsyXSA9IHJbMl0gKyBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHktYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIFRoZSBhbmdsZSBvZiByb3RhdGlvbiBpbiByYWRpYW5zXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgYiwgcmFkKSB7XG4gIHZhciBwID0gW10sXG4gICAgciA9IFtdO1xuICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gIHBbMF0gPSBhWzBdIC0gYlswXTtcbiAgcFsxXSA9IGFbMV0gLSBiWzFdO1xuICBwWzJdID0gYVsyXSAtIGJbMl07XG5cbiAgLy9wZXJmb3JtIHJvdGF0aW9uXG4gIHJbMF0gPSBwWzJdICogTWF0aC5zaW4ocmFkKSArIHBbMF0gKiBNYXRoLmNvcyhyYWQpO1xuICByWzFdID0gcFsxXTtcbiAgclsyXSA9IHBbMl0gKiBNYXRoLmNvcyhyYWQpIC0gcFswXSAqIE1hdGguc2luKHJhZCk7XG5cbiAgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICBvdXRbMF0gPSByWzBdICsgYlswXTtcbiAgb3V0WzFdID0gclsxXSArIGJbMV07XG4gIG91dFsyXSA9IHJbMl0gKyBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHotYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIFRoZSBhbmdsZSBvZiByb3RhdGlvbiBpbiByYWRpYW5zXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgYiwgcmFkKSB7XG4gIHZhciBwID0gW10sXG4gICAgciA9IFtdO1xuICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gIHBbMF0gPSBhWzBdIC0gYlswXTtcbiAgcFsxXSA9IGFbMV0gLSBiWzFdO1xuICBwWzJdID0gYVsyXSAtIGJbMl07XG5cbiAgLy9wZXJmb3JtIHJvdGF0aW9uXG4gIHJbMF0gPSBwWzBdICogTWF0aC5jb3MocmFkKSAtIHBbMV0gKiBNYXRoLnNpbihyYWQpO1xuICByWzFdID0gcFswXSAqIE1hdGguc2luKHJhZCkgKyBwWzFdICogTWF0aC5jb3MocmFkKTtcbiAgclsyXSA9IHBbMl07XG5cbiAgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICBvdXRbMF0gPSByWzBdICsgYlswXTtcbiAgb3V0WzFdID0gclsxXSArIGJbMV07XG4gIG91dFsyXSA9IHJbMl0gKyBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdldCB0aGUgYW5nbGUgYmV0d2VlbiB0d28gM0QgdmVjdG9yc1xuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIFRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFuZ2xlKGEsIGIpIHtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICBheSA9IGFbMV0sXG4gICAgYXogPSBhWzJdLFxuICAgIGJ4ID0gYlswXSxcbiAgICBieSA9IGJbMV0sXG4gICAgYnogPSBiWzJdLFxuICAgIG1hZyA9IE1hdGguc3FydCgoYXggKiBheCArIGF5ICogYXkgKyBheiAqIGF6KSAqIChieCAqIGJ4ICsgYnkgKiBieSArIGJ6ICogYnopKSxcbiAgICBjb3NpbmUgPSBtYWcgJiYgZG90KGEsIGIpIC8gbWFnO1xuICByZXR1cm4gTWF0aC5hY29zKE1hdGgubWluKE1hdGgubWF4KGNvc2luZSwgLTEpLCAxKSk7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMyB0byB6ZXJvXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHplcm8ob3V0KSB7XG4gIG91dFswXSA9IDAuMDtcbiAgb3V0WzFdID0gMC4wO1xuICBvdXRbMl0gPSAwLjA7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gXCJ2ZWMzKFwiICsgYVswXSArIFwiLCBcIiArIGFbMV0gKyBcIiwgXCIgKyBhWzJdICsgXCIpXCI7XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIGZpcnN0IHZlY3Rvci5cbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgZmlyc3QgdmVjdG9yLlxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHZhciBhMCA9IGFbMF0sXG4gICAgYTEgPSBhWzFdLFxuICAgIGEyID0gYVsyXTtcbiAgdmFyIGIwID0gYlswXSxcbiAgICBiMSA9IGJbMV0sXG4gICAgYjIgPSBiWzJdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJiBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSk7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLnN1YnRyYWN0fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgc3ViID0gc3VidHJhY3Q7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLm11bHRpcGx5fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgbXVsID0gbXVsdGlwbHk7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLmRpdmlkZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIGRpdiA9IGRpdmlkZTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuZGlzdGFuY2V9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBkaXN0ID0gZGlzdGFuY2U7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLnNxdWFyZWREaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIHNxckRpc3QgPSBzcXVhcmVkRGlzdGFuY2U7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLmxlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIGxlbiA9IGxlbmd0aDtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuc3F1YXJlZExlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIHNxckxlbiA9IHNxdWFyZWRMZW5ndGg7XG5cbi8qKlxuICogUGVyZm9ybSBzb21lIG9wZXJhdGlvbiBvdmVyIGFuIGFycmF5IG9mIHZlYzNzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGEgdGhlIGFycmF5IG9mIHZlY3RvcnMgdG8gaXRlcmF0ZSBvdmVyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RyaWRlIE51bWJlciBvZiBlbGVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydCBvZiBlYWNoIHZlYzMuIElmIDAgYXNzdW1lcyB0aWdodGx5IHBhY2tlZFxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IE51bWJlciBvZiB2ZWMzcyB0byBpdGVyYXRlIG92ZXIuIElmIDAgaXRlcmF0ZXMgb3ZlciBlbnRpcmUgYXJyYXlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggdmVjdG9yIGluIHRoZSBhcnJheVxuICogQHBhcmFtIHtPYmplY3R9IFthcmddIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gcGFzcyB0byBmblxuICogQHJldHVybnMge0FycmF5fSBhXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBmb3JFYWNoID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdmVjID0gY3JlYXRlKCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYSwgc3RyaWRlLCBvZmZzZXQsIGNvdW50LCBmbiwgYXJnKSB7XG4gICAgdmFyIGksIGw7XG4gICAgaWYgKCFzdHJpZGUpIHtcbiAgICAgIHN0cmlkZSA9IDM7XG4gICAgfVxuICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgIH1cbiAgICBpZiAoY291bnQpIHtcbiAgICAgIGwgPSBNYXRoLm1pbihjb3VudCAqIHN0cmlkZSArIG9mZnNldCwgYS5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsID0gYS5sZW5ndGg7XG4gICAgfVxuICAgIGZvciAoaSA9IG9mZnNldDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICB2ZWNbMF0gPSBhW2ldO1xuICAgICAgdmVjWzFdID0gYVtpICsgMV07XG4gICAgICB2ZWNbMl0gPSBhW2kgKyAyXTtcbiAgICAgIGZuKHZlYywgdmVjLCBhcmcpO1xuICAgICAgYVtpXSA9IHZlY1swXTtcbiAgICAgIGFbaSArIDFdID0gdmVjWzFdO1xuICAgICAgYVtpICsgMl0gPSB2ZWNbMl07XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9O1xufSgpOyIsImltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuXG4vKipcbiAqIDQgRGltZW5zaW9uYWwgVmVjdG9yXG4gKiBAbW9kdWxlIHZlYzRcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzRcbiAqXG4gKiBAcmV0dXJucyB7dmVjNH0gYSBuZXcgNEQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg0KTtcbiAgaWYgKGdsTWF0cml4LkFSUkFZX1RZUEUgIT0gRmxvYXQzMkFycmF5KSB7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjNCBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byBjbG9uZVxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWM0IGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjNH0gYSBuZXcgNEQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKHgsIHksIHosIHcpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICBvdXRbM10gPSB3O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWM0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNCB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCB4LCB5LCB6LCB3KSB7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIG91dFszXSA9IHc7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgb3V0WzNdID0gYVszXSArIGJbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIG91dFszXSA9IGFbM10gLSBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKiBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICogYlsyXTtcbiAgb3V0WzNdID0gYVszXSAqIGJbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAvIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC8gYlsyXTtcbiAgb3V0WzNdID0gYVszXSAvIGJbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTWF0aC5jZWlsIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gY2VpbFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2VpbChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5jZWlsKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmNlaWwoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguY2VpbChhWzJdKTtcbiAgb3V0WzNdID0gTWF0aC5jZWlsKGFbM10pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE1hdGguZmxvb3IgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byBmbG9vclxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmxvb3Iob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguZmxvb3IoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguZmxvb3IoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguZmxvb3IoYVsyXSk7XG4gIG91dFszXSA9IE1hdGguZmxvb3IoYVszXSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICBvdXRbMl0gPSBNYXRoLm1pbihhWzJdLCBiWzJdKTtcbiAgb3V0WzNdID0gTWF0aC5taW4oYVszXSwgYlszXSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pO1xuICBvdXRbMl0gPSBNYXRoLm1heChhWzJdLCBiWzJdKTtcbiAgb3V0WzNdID0gTWF0aC5tYXgoYVszXSwgYlszXSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogc3ltbWV0cmljIHJvdW5kIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gcm91bmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kKG91dCwgYSkge1xuICBvdXRbMF0gPSBnbE1hdHJpeC5yb3VuZChhWzBdKTtcbiAgb3V0WzFdID0gZ2xNYXRyaXgucm91bmQoYVsxXSk7XG4gIG91dFsyXSA9IGdsTWF0cml4LnJvdW5kKGFbMl0pO1xuICBvdXRbM10gPSBnbE1hdHJpeC5yb3VuZChhWzNdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWM0IGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgb3V0WzJdID0gYVsyXSAqIGI7XG4gIG91dFszXSA9IGFbM10gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzQncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF0gKiBzY2FsZTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV0gKiBzY2FsZTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl0gKiBzY2FsZTtcbiAgb3V0WzNdID0gYVszXSArIGJbM10gKiBzY2FsZTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF07XG4gIHZhciB5ID0gYlsxXSAtIGFbMV07XG4gIHZhciB6ID0gYlsyXSAtIGFbMl07XG4gIHZhciB3ID0gYlszXSAtIGFbM107XG4gIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHcpO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UoYSwgYikge1xuICB2YXIgeCA9IGJbMF0gLSBhWzBdO1xuICB2YXIgeSA9IGJbMV0gLSBhWzFdO1xuICB2YXIgeiA9IGJbMl0gLSBhWzJdO1xuICB2YXIgdyA9IGJbM10gLSBhWzNdO1xuICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHc7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgdmFyIHcgPSBhWzNdO1xuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGxlbmd0aCBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkTGVuZ3RoKGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgdmFyIHcgPSBhWzNdO1xuICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHc7XG59XG5cbi8qKlxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIG5lZ2F0ZVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICBvdXRbMF0gPSAtYVswXTtcbiAgb3V0WzFdID0gLWFbMV07XG4gIG91dFsyXSA9IC1hWzJdO1xuICBvdXRbM10gPSAtYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gaW52ZXJ0XG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICBvdXRbMV0gPSAxLjAgLyBhWzFdO1xuICBvdXRbMl0gPSAxLjAgLyBhWzJdO1xuICBvdXRbM10gPSAxLjAgLyBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF07XG4gIHZhciB5ID0gYVsxXTtcbiAgdmFyIHogPSBhWzJdO1xuICB2YXIgdyA9IGFbM107XG4gIHZhciBsZW4gPSB4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdztcbiAgaWYgKGxlbiA+IDApIHtcbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gIH1cbiAgb3V0WzBdID0geCAqIGxlbjtcbiAgb3V0WzFdID0geSAqIGxlbjtcbiAgb3V0WzJdID0geiAqIGxlbjtcbiAgb3V0WzNdID0gdyAqIGxlbjtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXSArIGFbM10gKiBiWzNdO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGNyb3NzLXByb2R1Y3Qgb2YgdGhyZWUgdmVjdG9ycyBpbiBhIDQtZGltZW5zaW9uYWwgc3BhY2VcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gdSB0aGUgZmlyc3QgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gdiB0aGUgc2Vjb25kIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IHcgdGhlIHRoaXJkIHZlY3RvclxuICogQHJldHVybnMge3ZlYzR9IHJlc3VsdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3Mob3V0LCB1LCB2LCB3KSB7XG4gIHZhciBBID0gdlswXSAqIHdbMV0gLSB2WzFdICogd1swXSxcbiAgICBCID0gdlswXSAqIHdbMl0gLSB2WzJdICogd1swXSxcbiAgICBDID0gdlswXSAqIHdbM10gLSB2WzNdICogd1swXSxcbiAgICBEID0gdlsxXSAqIHdbMl0gLSB2WzJdICogd1sxXSxcbiAgICBFID0gdlsxXSAqIHdbM10gLSB2WzNdICogd1sxXSxcbiAgICBGID0gdlsyXSAqIHdbM10gLSB2WzNdICogd1syXTtcbiAgdmFyIEcgPSB1WzBdO1xuICB2YXIgSCA9IHVbMV07XG4gIHZhciBJID0gdVsyXTtcbiAgdmFyIEogPSB1WzNdO1xuICBvdXRbMF0gPSBIICogRiAtIEkgKiBFICsgSiAqIEQ7XG4gIG91dFsxXSA9IC0oRyAqIEYpICsgSSAqIEMgLSBKICogQjtcbiAgb3V0WzJdID0gRyAqIEUgLSBIICogQyArIEogKiBBO1xuICBvdXRbM10gPSAtKEcgKiBEKSArIEggKiBCIC0gSSAqIEE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgdmFyIGF4ID0gYVswXTtcbiAgdmFyIGF5ID0gYVsxXTtcbiAgdmFyIGF6ID0gYVsyXTtcbiAgdmFyIGF3ID0gYVszXTtcbiAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheCk7XG4gIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpO1xuICBvdXRbMl0gPSBheiArIHQgKiAoYlsyXSAtIGF6KTtcbiAgb3V0WzNdID0gYXcgKyB0ICogKGJbM10gLSBhdyk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gW3NjYWxlXSBMZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3IuIElmIG9taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG91dCwgc2NhbGUpIHtcbiAgc2NhbGUgPSBzY2FsZSA9PT0gdW5kZWZpbmVkID8gMS4wIDogc2NhbGU7XG5cbiAgLy8gTWFyc2FnbGlhLCBHZW9yZ2UuIENob29zaW5nIGEgUG9pbnQgZnJvbSB0aGUgU3VyZmFjZSBvZiBhXG4gIC8vIFNwaGVyZS4gQW5uLiBNYXRoLiBTdGF0aXN0LiA0MyAoMTk3MiksIG5vLiAyLCA2NDUtLTY0Ni5cbiAgLy8gaHR0cDovL3Byb2plY3RldWNsaWQub3JnL2V1Y2xpZC5hb21zLzExNzc2OTI2NDQ7XG4gIHZhciB2MSwgdjIsIHYzLCB2NDtcbiAgdmFyIHMxLCBzMjtcbiAgdmFyIHJhbmQ7XG4gIHJhbmQgPSBnbE1hdHJpeC5SQU5ET00oKTtcbiAgdjEgPSByYW5kICogMiAtIDE7XG4gIHYyID0gKDQgKiBnbE1hdHJpeC5SQU5ET00oKSAtIDIpICogTWF0aC5zcXJ0KHJhbmQgKiAtcmFuZCArIHJhbmQpO1xuICBzMSA9IHYxICogdjEgKyB2MiAqIHYyO1xuICByYW5kID0gZ2xNYXRyaXguUkFORE9NKCk7XG4gIHYzID0gcmFuZCAqIDIgLSAxO1xuICB2NCA9ICg0ICogZ2xNYXRyaXguUkFORE9NKCkgLSAyKSAqIE1hdGguc3FydChyYW5kICogLXJhbmQgKyByYW5kKTtcbiAgczIgPSB2MyAqIHYzICsgdjQgKiB2NDtcbiAgdmFyIGQgPSBNYXRoLnNxcnQoKDEgLSBzMSkgLyBzMik7XG4gIG91dFswXSA9IHNjYWxlICogdjE7XG4gIG91dFsxXSA9IHNjYWxlICogdjI7XG4gIG91dFsyXSA9IHNjYWxlICogdjMgKiBkO1xuICBvdXRbM10gPSBzY2FsZSAqIHY0ICogZDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWM0IHdpdGggYSBtYXQ0LlxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV0sXG4gICAgeiA9IGFbMl0sXG4gICAgdyA9IGFbM107XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdICogdztcbiAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzVdICogeSArIG1bOV0gKiB6ICsgbVsxM10gKiB3O1xuICBvdXRbMl0gPSBtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0gKiB3O1xuICBvdXRbM10gPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6ICsgbVsxNV0gKiB3O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzQgd2l0aCBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBxIG5vcm1hbGl6ZWQgcXVhdGVybmlvbiB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtUXVhdChvdXQsIGEsIHEpIHtcbiAgLy8gRmFzdCBWZWN0b3IgUm90YXRpb24gdXNpbmcgUXVhdGVybmlvbnMgYnkgUm9iZXJ0IEVpc2VsZVxuICAvLyBodHRwczovL3Jhdy5vcmcvcHJvb2YvdmVjdG9yLXJvdGF0aW9uLXVzaW5nLXF1YXRlcm5pb25zL1xuXG4gIHZhciBxeCA9IHFbMF0sXG4gICAgcXkgPSBxWzFdLFxuICAgIHF6ID0gcVsyXSxcbiAgICBxdyA9IHFbM107XG4gIHZhciB2eCA9IGFbMF0sXG4gICAgdnkgPSBhWzFdLFxuICAgIHZ6ID0gYVsyXTtcblxuICAvLyB0ID0gcSB4IHZcbiAgdmFyIHR4ID0gcXkgKiB2eiAtIHF6ICogdnk7XG4gIHZhciB0eSA9IHF6ICogdnggLSBxeCAqIHZ6O1xuICB2YXIgdHogPSBxeCAqIHZ5IC0gcXkgKiB2eDtcblxuICAvLyB0ID0gMnRcbiAgdHggPSB0eCArIHR4O1xuICB0eSA9IHR5ICsgdHk7XG4gIHR6ID0gdHogKyB0ejtcblxuICAvLyB2ICsgdyB0ICsgcSB4IHRcbiAgb3V0WzBdID0gdnggKyBxdyAqIHR4ICsgcXkgKiB0eiAtIHF6ICogdHk7XG4gIG91dFsxXSA9IHZ5ICsgcXcgKiB0eSArIHF6ICogdHggLSBxeCAqIHR6O1xuICBvdXRbMl0gPSB2eiArIHF3ICogdHogKyBxeCAqIHR5IC0gcXkgKiB0eDtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0IHRvIHplcm9cbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gemVybyhvdXQpIHtcbiAgb3V0WzBdID0gMC4wO1xuICBvdXRbMV0gPSAwLjA7XG4gIG91dFsyXSA9IDAuMDtcbiAgb3V0WzNdID0gMC4wO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuIFwidmVjNChcIiArIGFbMF0gKyBcIiwgXCIgKyBhWzFdICsgXCIsIFwiICsgYVsyXSArIFwiLCBcIiArIGFbM10gKyBcIilcIjtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSBUaGUgZmlyc3QgdmVjdG9yLlxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmIGFbM10gPT09IGJbM107XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgVGhlIGZpcnN0IHZlY3Rvci5cbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgIGExID0gYVsxXSxcbiAgICBhMiA9IGFbMl0sXG4gICAgYTMgPSBhWzNdO1xuICB2YXIgYjAgPSBiWzBdLFxuICAgIGIxID0gYlsxXSxcbiAgICBiMiA9IGJbMl0sXG4gICAgYjMgPSBiWzNdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJiBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiYgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpO1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5zdWJ0cmFjdH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0O1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5kaXZpZGV9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBkaXYgPSBkaXZpZGU7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LmRpc3RhbmNlfVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgZGlzdCA9IGRpc3RhbmNlO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5zcXVhcmVkRGlzdGFuY2V9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBzcXJEaXN0ID0gc3F1YXJlZERpc3RhbmNlO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5sZW5ndGh9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBsZW4gPSBsZW5ndGg7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LnNxdWFyZWRMZW5ndGh9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuXG4vKipcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWM0cy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWM0LiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjNHMgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm5cbiAqIEByZXR1cm5zIHtBcnJheX0gYVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgZm9yRWFjaCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZlYyA9IGNyZWF0ZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIHZhciBpLCBsO1xuICAgIGlmICghc3RyaWRlKSB7XG4gICAgICBzdHJpZGUgPSA0O1xuICAgIH1cbiAgICBpZiAoIW9mZnNldCkge1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgaWYgKGNvdW50KSB7XG4gICAgICBsID0gTWF0aC5taW4oY291bnQgKiBzdHJpZGUgKyBvZmZzZXQsIGEubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbCA9IGEubGVuZ3RoO1xuICAgIH1cbiAgICBmb3IgKGkgPSBvZmZzZXQ7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgdmVjWzBdID0gYVtpXTtcbiAgICAgIHZlY1sxXSA9IGFbaSArIDFdO1xuICAgICAgdmVjWzJdID0gYVtpICsgMl07XG4gICAgICB2ZWNbM10gPSBhW2kgKyAzXTtcbiAgICAgIGZuKHZlYywgdmVjLCBhcmcpO1xuICAgICAgYVtpXSA9IHZlY1swXTtcbiAgICAgIGFbaSArIDFdID0gdmVjWzFdO1xuICAgICAgYVtpICsgMl0gPSB2ZWNbMl07XG4gICAgICBhW2kgKyAzXSA9IHZlY1szXTtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH07XG59KCk7IiwiaW1wb3J0IHsgdmVjMyB9IGZyb20gJ2dsLW1hdHJpeCc7XHJcblxyXG4vLyBTaW1wbGUgMi1Cb25lIElLIFNvbHZlciAoQW5hbHl0aWMpXHJcbi8vIFRoaWdoIC0+IEtuZWUgLT4gRm9vdFxyXG4vLyBSZXR1cm5zIHRoZSBwb3NpdGlvbnMgb2YgdGhlIEtuZWUgYW5kIHRoZSBBZGp1c3RlZCBGb290IChpZiB1bnJlYWNoYWJsZSlcclxuZXhwb3J0IGZ1bmN0aW9uIHNvbHZlSUsoXHJcbiAgICByb290OiB2ZWMzLFxyXG4gICAgdGFyZ2V0OiB2ZWMzLFxyXG4gICAgbGVuMTogbnVtYmVyLFxyXG4gICAgbGVuMjogbnVtYmVyLFxyXG4gICAgcG9sZURpcjogdmVjMyAvLyBEaXJlY3Rpb24gdGhlIGtuZWUgc2hvdWxkIHBvaW50XHJcbik6IHsga25lZTogdmVjMywgZm9vdDogdmVjMyB9IHtcclxuXHJcbiAgICAvLyAxLiBWZWN0b3IgZnJvbSBSb290IHRvIFRhcmdldFxyXG4gICAgY29uc3QgYXhpcyA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICB2ZWMzLnN1YnRyYWN0KGF4aXMsIHRhcmdldCwgcm9vdCk7XHJcbiAgICBjb25zdCBkaXN0ID0gdmVjMy5sZW5ndGgoYXhpcyk7XHJcblxyXG4gICAgLy8gMi4gQ2xhbXAgdGFyZ2V0IGlmIG91dCBvZiByZWFjaFxyXG4gICAgY29uc3QgbWF4TGVuID0gbGVuMSArIGxlbjI7XHJcbiAgICBjb25zdCBmaW5hbEZvb3QgPSB2ZWMzLmNsb25lKHRhcmdldCk7XHJcblxyXG4gICAgaWYgKGRpc3QgPj0gbWF4TGVuKSB7XHJcbiAgICAgICAgLy8gRnVsbHkgZXh0ZW5kZWRcclxuICAgICAgICB2ZWMzLm5vcm1hbGl6ZShheGlzLCBheGlzKTtcclxuICAgICAgICB2ZWMzLnNjYWxlQW5kQWRkKGZpbmFsRm9vdCwgcm9vdCwgYXhpcywgbWF4TGVuKTtcclxuXHJcbiAgICAgICAgY29uc3Qga25lZSA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICAgICAgdmVjMy5zY2FsZUFuZEFkZChrbmVlLCByb290LCBheGlzLCBsZW4xKTtcclxuICAgICAgICByZXR1cm4geyBrbmVlLCBmb290OiBmaW5hbEZvb3QgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAzLiBMYXcgb2YgQ29zaW5lcyB0byBmaW5kIGtuZWUgYW5nbGVcclxuICAgIC8vIGRpc3ReMiA9IGxlbjFeMiArIGxlbjJeMiAtIDIqbGVuMSpsZW4yKmNvcyhrbmVlX2FuZ2xlKSAtPiBUaGlzIGlzIGludGVybmFsIGFuZ2xlXHJcbiAgICAvLyBXZSBuZWVkIHRoZSBsYXlvdXQgaW4gM0QuXHJcblxyXG4gICAgLy8gQW5hbHl0aWMgc29sdXRpb24gaW4gMkQgcGxhbmUgZm9ybWVkIGJ5IFJvb3QsIFRhcmdldCwgYW5kIFBvbGVcclxuXHJcbiAgICAvLyBBbHBoYTogQW5nbGUgYXQgUm9vdCAoVGhpZ2gpXHJcbiAgICAvLyBDb3MgQWxwaGEgPSAobGVuMV4yICsgZGlzdF4yIC0gbGVuMl4yKSAvICgyICogbGVuMSAqIGRpc3QpXHJcbiAgICBjb25zdCBjb3NBbHBoYSA9IChsZW4xICogbGVuMSArIGRpc3QgKiBkaXN0IC0gbGVuMiAqIGxlbjIpIC8gKDIgKiBsZW4xICogZGlzdCk7XHJcbiAgICAvLyBDbGFtcCBmb3Igc2FmZXR5XHJcbiAgICBjb25zdCBjbGFtcGVkQ29zQWxwaGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgY29zQWxwaGEpKTtcclxuICAgIGNvbnN0IGFscGhhID0gTWF0aC5hY29zKGNsYW1wZWRDb3NBbHBoYSk7XHJcblxyXG4gICAgLy8gNC4gQ29uc3RydWN0IHRoZSBDb29yZGluYXRlIFN5c3RlbVxyXG4gICAgLy8gWi1heGlzOiBWZWN0b3IgdG8gVGFyZ2V0IChub3JtYWxpemVkKVxyXG4gICAgY29uc3QgekF4aXMgPSB2ZWMzLmNsb25lKGF4aXMpO1xyXG4gICAgdmVjMy5ub3JtYWxpemUoekF4aXMsIHpBeGlzKTtcclxuXHJcbiAgICAvLyBYLWF4aXM6IFBlcnBlbmRpY3VsYXIgdG8gWiBhbmQgUG9sZSAoS25lZSBiZW5kaW5nIGRpcmVjdGlvbilcclxuICAgIGNvbnN0IHhBeGlzID0gdmVjMy5jcmVhdGUoKTtcclxuICAgIHZlYzMuY3Jvc3MoeEF4aXMsIHpBeGlzLCBwb2xlRGlyKTtcclxuICAgIGlmICh2ZWMzLmxlbmd0aCh4QXhpcykgPCAwLjAwMSkge1xyXG4gICAgICAgIC8vIFBvbGUgaXMgcGFyYWxsZWwgdG8gYXhpcywgcGljayBnZW5lcmljIHVwXHJcbiAgICAgICAgdmVjMy5jcm9zcyh4QXhpcywgekF4aXMsIHZlYzMuZnJvbVZhbHVlcygwLCAxLCAwKSk7XHJcbiAgICB9XHJcbiAgICB2ZWMzLm5vcm1hbGl6ZSh4QXhpcywgeEF4aXMpO1xyXG5cclxuICAgIC8vIFktYXhpczogVXAgdmVjdG9yIGluIHRoZSBwbGFuZVxyXG4gICAgY29uc3QgeUF4aXMgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgdmVjMy5jcm9zcyh5QXhpcywgeEF4aXMsIHpBeGlzKTtcclxuICAgIHZlYzMubm9ybWFsaXplKHlBeGlzLCB5QXhpcyk7XHJcblxyXG4gICAgLy8gNS4gQ2FsY3VsYXRlIEtuZWUgUG9zaXRpb25cclxuICAgIC8vIFJvdGF0ZSB2ZWN0b3IgKGxlbjEsIDAsIDApIGJ5IGFscGhhIGluIHRoZSBwbGFuZT9cclxuICAgIC8vIEluIG91ciBiYXNpczpcclxuICAgIC8vIFJvb3QgaXMgKDAsMClcclxuICAgIC8vIFRhcmdldCBpcyAoZGlzdCwgMCkgYWxvbmcgWlxyXG4gICAgLy8gS25lZSBpcyBhdCBkaXN0YW5jZSBsZW4xLCByb3RhdGVkIGJ5IGFscGhhIGF3YXkgZnJvbSBaIHRvd2FyZHMgWVxyXG5cclxuICAgIC8vIEtuZWUgTG9jYWw6XHJcbiAgICAvLyB6ID0gbGVuMSAqIGNvcyhhbHBoYSlcclxuICAgIC8vIHkgPSBsZW4xICogc2luKGFscGhhKVxyXG5cclxuICAgIGNvbnN0IGtuZWVaID0gbGVuMSAqIGNsYW1wZWRDb3NBbHBoYTtcclxuICAgIGNvbnN0IGtuZWVZID0gbGVuMSAqIE1hdGguc2luKGFscGhhKTtcclxuXHJcbiAgICBjb25zdCBrbmVlID0gdmVjMy5jbG9uZShyb290KTtcclxuICAgIHZlYzMuc2NhbGVBbmRBZGQoa25lZSwga25lZSwgekF4aXMsIGtuZWVaKTtcclxuICAgIHZlYzMuc2NhbGVBbmRBZGQoa25lZSwga25lZSwgeUF4aXMsIGtuZWVZKTtcclxuXHJcbiAgICByZXR1cm4geyBrbmVlLCBmb290OiBmaW5hbEZvb3QgfTtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTG9nZ2VyIHtcclxuICAgIHN0YXRpYyBsb2cobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtMT0ddICR7bXNnfWAsIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlcnJvcihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBbRVJSXSAke21zZ31gLCAuLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgd2Fybihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYFtXQVJOXSAke21zZ31gLCAuLi5hcmdzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBtYXQ0LCB2ZWMzLCB2ZWM0IH0gZnJvbSAnZ2wtbWF0cml4JztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgc2hhZGVyQ29kZSBmcm9tICcuL3NoYWRlcnMud2dzbCc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IGdyYXNzSW1hZ2VTcmMgZnJvbSAnLi9hc3NldHMvY3VzdG9tX3RleHR1cmUuanBnJztcclxuaW1wb3J0IHsgZmJtIH0gZnJvbSAnLi9ub2lzZSc7XHJcbmltcG9ydCB7IFNpbXBsZVJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXJlcic7XHJcbmltcG9ydCB7IFNwaWRlciB9IGZyb20gJy4vc3BpZGVyJztcclxuaW1wb3J0IHsgUGxheWVyTW9kZWwgfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcclxuaW1wb3J0IHsgUGFydGljbGVTeXN0ZW0gfSBmcm9tICcuL3BhcnRpY2xlcyc7XHJcbmltcG9ydCB7IFBpY2t1cFN5c3RlbSB9IGZyb20gJy4vcGlja3Vwcyc7XHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2Z4LW1haW4nKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuTG9nZ2VyLmxvZygnQ2FudmFzIGVsZW1lbnQ6JywgY2FudmFzKTtcclxuY29uc29sZS5sb2coJ0NhbnZhcyBpbml0aWFsIHNpemU6JywgY2FudmFzLndpZHRoLCAneCcsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuY29uc3QgYWRhcHRlciA9IGF3YWl0IG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcclxuY29uc29sZS5sb2coJ1dlYkdQVSBBZGFwdGVyOicsIGFkYXB0ZXIpO1xyXG5pZiAoIWFkYXB0ZXIpIHRocm93IG5ldyBFcnJvcignV2ViR1BVIG5vdCBzdXBwb3J0ZWQuJyk7XHJcblxyXG5jb25zdCBkZXZpY2UgPSBhd2FpdCBhZGFwdGVyLnJlcXVlc3REZXZpY2UoKTtcclxuY29uc29sZS5sb2coJ1dlYkdQVSBEZXZpY2U6JywgZGV2aWNlKTtcclxuXHJcbmNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ3B1Jyk7XHJcbmNvbnNvbGUubG9nKCdXZWJHUFUgQ29udGV4dDonLCBjb250ZXh0KTtcclxuXHJcbmNvbnN0IGZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XHJcbmNvbnNvbGUubG9nKCdQcmVmZXJyZWQgZm9ybWF0OicsIGZvcm1hdCk7XHJcblxyXG4vLyBTaGFkb3cgTWFwIENvbnN0YW50c1xyXG5jb25zdCBTSEFET1dfU0laRSA9IDIwNDg7XHJcblxyXG4vLyBHbG9iYWwgSUQgY291bnRlciBmb3IgaW5zdGFuY2VzXHJcbmxldCBuZXh0SWQgPSAwO1xyXG5cclxuY29udGV4dD8uY29uZmlndXJlKHsgZGV2aWNlLCBmb3JtYXQsIGFscGhhTW9kZTogJ29wYXF1ZScgfSk7XHJcbmNvbnNvbGUubG9nKCdDb250ZXh0IGNvbmZpZ3VyZWQnKTtcclxuXHJcbi8vIC0tLSBUZXh0dXJlIExvYWRpbmcgLS0tXHJcbi8vIC0tLSBUZXh0dXJlIExvYWRpbmcgLS0tXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IGRpcnRJbWFnZVNyYyBmcm9tICcuL2Fzc2V0cy9kaXJ0LmpwZyc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IG5ld0dyYXNzSW1hZ2VTcmMgZnJvbSAnLi9hc3NldHMvZ3Jhc3Nfc2lkZS5qcGcnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCBncmFzc1RvcEltYWdlU3JjIGZyb20gJy4vYXNzZXRzL2dyYXNzX3RvcC5wbmcnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCB0bnRJbWFnZVNyYyBmcm9tICcuL2Fzc2V0cy90bnQucG5nJztcclxuLy8gQHRzLWlnbm9yZVxyXG5cclxuXHJcbi8vIC0tLSBUZXh0dXJlIExvYWRpbmcgLS0tXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRBbmRSZXNpemVCaXRtYXAoc3JjOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGltZy5vbmxvYWQgPSByZXNvbHZlKTtcclxuXHJcbiAgICAvLyBSZXNpemUgdmlhIENhbnZhc1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGlmICghY3R4KSB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBnZXQgMmQgY29udGV4dCcpO1xyXG5cclxuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHJldHVybiBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChjYW52YXMpO1xyXG59XHJcblxyXG5jb25zdCBURVhUVVJFX1NJWkUgPSAyNTY7XHJcbmNvbnNvbGUubG9nKCdMb2FkaW5nIHRleHR1cmVzLi4uJyk7XHJcbmNvbnNvbGUubG9nKCdHcmFzcyB0ZXh0dXJlIHNvdXJjZTonLCBncmFzc0ltYWdlU3JjKTtcclxuY29uc29sZS5sb2coJ0RpcnQgdGV4dHVyZSBzb3VyY2U6JywgZGlydEltYWdlU3JjKTtcclxuXHJcbmNvbnN0IFtpbWdDb2JibGUsIGltZ0RpcnQsIGltZ05ld0dyYXNzLCBpbWdHcmFzc1RvcCwgaW1nVE5UXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIGxvYWRBbmRSZXNpemVCaXRtYXAoZ3Jhc3NJbWFnZVNyYywgVEVYVFVSRV9TSVpFLCBURVhUVVJFX1NJWkUpLFxyXG4gICAgbG9hZEFuZFJlc2l6ZUJpdG1hcChkaXJ0SW1hZ2VTcmMsIFRFWFRVUkVfU0laRSwgVEVYVFVSRV9TSVpFKSxcclxuICAgIGxvYWRBbmRSZXNpemVCaXRtYXAobmV3R3Jhc3NJbWFnZVNyYywgVEVYVFVSRV9TSVpFLCBURVhUVVJFX1NJWkUpLFxyXG4gICAgbG9hZEFuZFJlc2l6ZUJpdG1hcChncmFzc1RvcEltYWdlU3JjLCBURVhUVVJFX1NJWkUsIFRFWFRVUkVfU0laRSksXHJcbiAgICBsb2FkQW5kUmVzaXplQml0bWFwKHRudEltYWdlU3JjLCBURVhUVVJFX1NJWkUsIFRFWFRVUkVfU0laRSksXHJcbl0pO1xyXG5jb25zb2xlLmxvZygnVGV4dHVyZXMgbG9hZGVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuXHJcbmNvbnN0IHRleHR1cmUgPSBkZXZpY2UuY3JlYXRlVGV4dHVyZSh7XHJcbiAgICBzaXplOiBbVEVYVFVSRV9TSVpFLCBURVhUVVJFX1NJWkUsIDVdLCAvLyBMYXllciBjb3VudCA1IChyZW1vdmVkIHRvcmNoKVxyXG4gICAgZm9ybWF0OiAncmdiYTh1bm9ybScsXHJcbiAgICB1c2FnZTogR1BVVGV4dHVyZVVzYWdlLlRFWFRVUkVfQklORElORyB8IEdQVVRleHR1cmVVc2FnZS5DT1BZX0RTVCB8IEdQVVRleHR1cmVVc2FnZS5SRU5ERVJfQVRUQUNITUVOVCxcclxufSk7XHJcblxyXG5kZXZpY2UucXVldWUuY29weUV4dGVybmFsSW1hZ2VUb1RleHR1cmUoXHJcbiAgICB7IHNvdXJjZTogaW1nQ29iYmxlIH0sXHJcbiAgICB7IHRleHR1cmU6IHRleHR1cmUsIG9yaWdpbjogeyB6OiAwIH0gfSxcclxuICAgIFtURVhUVVJFX1NJWkUsIFRFWFRVUkVfU0laRV1cclxuKTtcclxuZGV2aWNlLnF1ZXVlLmNvcHlFeHRlcm5hbEltYWdlVG9UZXh0dXJlKFxyXG4gICAgeyBzb3VyY2U6IGltZ0RpcnQgfSxcclxuICAgIHsgdGV4dHVyZTogdGV4dHVyZSwgb3JpZ2luOiB7IHo6IDEgfSB9LFxyXG4gICAgW1RFWFRVUkVfU0laRSwgVEVYVFVSRV9TSVpFXVxyXG4pO1xyXG5kZXZpY2UucXVldWUuY29weUV4dGVybmFsSW1hZ2VUb1RleHR1cmUoXHJcbiAgICB7IHNvdXJjZTogaW1nTmV3R3Jhc3MgfSxcclxuICAgIHsgdGV4dHVyZTogdGV4dHVyZSwgb3JpZ2luOiB7IHo6IDIgfSB9LFxyXG4gICAgW1RFWFRVUkVfU0laRSwgVEVYVFVSRV9TSVpFXVxyXG4pO1xyXG5kZXZpY2UucXVldWUuY29weUV4dGVybmFsSW1hZ2VUb1RleHR1cmUoXHJcbiAgICB7IHNvdXJjZTogaW1nR3Jhc3NUb3AgfSxcclxuICAgIHsgdGV4dHVyZTogdGV4dHVyZSwgb3JpZ2luOiB7IHo6IDMgfSB9LFxyXG4gICAgW1RFWFRVUkVfU0laRSwgVEVYVFVSRV9TSVpFXVxyXG4pO1xyXG5kZXZpY2UucXVldWUuY29weUV4dGVybmFsSW1hZ2VUb1RleHR1cmUoXHJcbiAgICB7IHNvdXJjZTogaW1nVE5UIH0sXHJcbiAgICB7IHRleHR1cmU6IHRleHR1cmUsIG9yaWdpbjogeyB6OiA0IH0gfSxcclxuICAgIFtURVhUVVJFX1NJWkUsIFRFWFRVUkVfU0laRV1cclxuKTtcclxuXHJcbmNvbnN0IHNhbXBsZXIgPSBkZXZpY2UuY3JlYXRlU2FtcGxlcih7XHJcbiAgICBtYWdGaWx0ZXI6ICduZWFyZXN0JyxcclxuICAgIG1pbkZpbHRlcjogJ25lYXJlc3QnLFxyXG59KTtcclxuXHJcbmNvbnN0IHNoYWRvd1NhbXBsZXIgPSBkZXZpY2UuY3JlYXRlU2FtcGxlcih7XHJcbiAgICBjb21wYXJlOiAnbGVzcycsXHJcbiAgICBtYWdGaWx0ZXI6ICdsaW5lYXInLFxyXG4gICAgbWluRmlsdGVyOiAnbGluZWFyJyxcclxufSk7XHJcblxyXG5jb25zdCBzaGFkb3dEZXB0aFRleHR1cmUgPSBkZXZpY2UuY3JlYXRlVGV4dHVyZSh7XHJcbiAgICBzaXplOiBbU0hBRE9XX1NJWkUsIFNIQURPV19TSVpFXSxcclxuICAgIHVzYWdlOiBHUFVUZXh0dXJlVXNhZ2UuUkVOREVSX0FUVEFDSE1FTlQgfCBHUFVUZXh0dXJlVXNhZ2UuVEVYVFVSRV9CSU5ESU5HLFxyXG4gICAgZm9ybWF0OiAnZGVwdGgzMmZsb2F0JyxcclxufSk7XHJcblxyXG4vLyAtLS0gRW50aXRpZXMgLS0tXHJcbi8vIFN5c3RlbXMgYXJlIG5vdyBpbnN0YW50aWF0ZWQgYWZ0ZXIgQ0hVTksgY29uc3RhbnRzIChsaW5lIH4yMDcpXHJcblxyXG5pbnRlcmZhY2UgQWN0aXZlVE5UIHtcclxuICAgIHBvc2l0aW9uOiB2ZWMzO1xyXG4gICAgc2NhbGU6IHZlYzM7XHJcbiAgICBzY2FsZURpcjogbnVtYmVyO1xyXG4gICAgdGltZXI6IG51bWJlcjtcclxufVxyXG5jb25zdCBhY3RpdmVUTlRzOiBBY3RpdmVUTlRbXSA9IFtdO1xyXG5cclxubGV0IGlzUmlkaW5nID0gZmFsc2U7XHJcblxyXG4vLyAtLS0gVmVydGV4IERhdGEgKFBvcyArIFVWKSAtLS1cclxuLy8gMzYgdmVydGljZXMgKDYgZmFjZXMgKiAyIHRyaXMgKiAzIHZlcnRzKVxyXG4vLyBYLCBZLCBaLCBVLCBWLCBOWCwgTlksIE5aXHJcbmNvbnN0IGN1YmVWZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgLy8gRnJvbnQgKHo9MSlcclxuICAgIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDEsXHJcbiAgICAxLCAwLCAxLCAxLCAxLCAwLCAwLCAxLFxyXG4gICAgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSxcclxuICAgIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDEsXHJcbiAgICAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLFxyXG4gICAgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSxcclxuICAgIC8vIEJhY2sgKHo9MClcclxuICAgIDAsIDAsIDAsIDEsIDEsIDAsIDAsIC0xLFxyXG4gICAgMCwgMSwgMCwgMSwgMCwgMCwgMCwgLTEsXHJcbiAgICAxLCAxLCAwLCAwLCAwLCAwLCAwLCAtMSxcclxuICAgIDAsIDAsIDAsIDEsIDEsIDAsIDAsIC0xLFxyXG4gICAgMSwgMSwgMCwgMCwgMCwgMCwgMCwgLTEsXHJcbiAgICAxLCAwLCAwLCAwLCAxLCAwLCAwLCAtMSxcclxuICAgIC8vIFRvcCAoeT0xKVxyXG4gICAgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCxcclxuICAgIDAsIDEsIDEsIDAsIDEsIDAsIDEsIDAsXHJcbiAgICAxLCAxLCAxLCAxLCAxLCAwLCAxLCAwLFxyXG4gICAgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCxcclxuICAgIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDAsXHJcbiAgICAxLCAxLCAwLCAxLCAwLCAwLCAxLCAwLFxyXG4gICAgLy8gQm90dG9tICh5PTApXHJcbiAgICAwLCAwLCAwLCAwLCAxLCAwLCAtMSwgMCxcclxuICAgIDEsIDAsIDAsIDEsIDEsIDAsIC0xLCAwLFxyXG4gICAgMSwgMCwgMSwgMSwgMCwgMCwgLTEsIDAsXHJcbiAgICAwLCAwLCAwLCAwLCAxLCAwLCAtMSwgMCxcclxuICAgIDEsIDAsIDEsIDEsIDAsIDAsIC0xLCAwLFxyXG4gICAgMCwgMCwgMSwgMCwgMCwgMCwgLTEsIDAsXHJcbiAgICAvLyBSaWdodCAoeD0xKVxyXG4gICAgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMCxcclxuICAgIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDAsXHJcbiAgICAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLFxyXG4gICAgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMCxcclxuICAgIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsXHJcbiAgICAxLCAwLCAxLCAwLCAxLCAxLCAwLCAwLFxyXG4gICAgLy8gTGVmdCAoeD0wKVxyXG4gICAgMCwgMCwgMCwgMCwgMSwgLTEsIDAsIDAsXHJcbiAgICAwLCAwLCAxLCAxLCAxLCAtMSwgMCwgMCxcclxuICAgIDAsIDEsIDEsIDEsIDAsIC0xLCAwLCAwLFxyXG4gICAgMCwgMCwgMCwgMCwgMSwgLTEsIDAsIDAsXHJcbiAgICAwLCAxLCAxLCAxLCAwLCAtMSwgMCwgMCxcclxuICAgIDAsIDEsIDAsIDAsIDAsIC0xLCAwLCAwLFxyXG5dKTtcclxuXHJcbmNvbnN0IHZlcnRleEJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xyXG4gICAgc2l6ZTogY3ViZVZlcnRpY2VzLmJ5dGVMZW5ndGgsXHJcbiAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVkVSVEVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QsXHJcbn0pO1xyXG5kZXZpY2UucXVldWUud3JpdGVCdWZmZXIodmVydGV4QnVmZmVyLCAwLCBjdWJlVmVydGljZXMpO1xyXG5cclxuLy8gLS0tIENodW5rIFN5c3RlbSAtLS1cclxuLy8gQ2h1bmsgU2l6ZTogMTZ4MTZcclxuLy8gSGVpZ2h0IGxpbWl0IGZvciBncmlkOiAyNTYgKDAgdG8gMjU1KS4gTG9naWMgWSBvZmZzZXQ6ICs2NCAoc28gLTY0IHRvIDE5MSlcclxuY29uc3QgQ0hVTktfU0laRSA9IDE2O1xyXG5jb25zdCBDSFVOS19IRUlHSFQgPSAyNTY7XHJcbmNvbnN0IFlfT0ZGU0VUID0gNjQ7XHJcbmNvbnN0IFJFTkRFUl9ESVNUQU5DRSA9IDE0O1xyXG5cclxuLy8gU3lzdGVtc1xyXG5jb25zdCBwYXJ0aWNsZVN5c3RlbSA9IG5ldyBQYXJ0aWNsZVN5c3RlbSgpO1xyXG5jb25zdCBwaWNrdXBTeXN0ZW0gPSBuZXcgUGlja3VwU3lzdGVtKCk7XHJcbmNvbnN0IHNwaWRlciA9IG5ldyBTcGlkZXIoKTtcclxuY29uc3QgcGxheWVyTW9kZWwgPSBuZXcgUGxheWVyTW9kZWwoKTsgLy8gSW5zdGFudGlhdGUgUGxheWVyIE1vZGVsXHJcbmNvbnN0IHNpbXBsZVJlbmRlcmVyID0gbmV3IFNpbXBsZVJlbmRlcmVyKGRldmljZSwgZm9ybWF0KTtcclxuXHJcbi8vIFZhbHVlcyBmb3IgR3JpZCBMb2dpY1xyXG4vLyAwID0gQWlyXHJcbi8vIDEgPSBTdG9uZSAoVGV4IDApXHJcbi8vIDIgPSBEaXJ0IChUZXggMSlcclxuLy8gMyA9IEdyYXNzIFNpZGUgKFRleCAyKVxyXG4vLyA0ID0gR3Jhc3MgVG9wIChUZXggMykgLSBMb2dpYyB1c2VzIDMgZm9yIEdyYXNzIEJsb2NrLlxyXG4vLyA1ID0gVE5UIChUZXggNClcclxuXHJcbnR5cGUgQmxvY2tJbnN0YW5jZSA9IHsgcG9zOiBGbG9hdDMyQXJyYXksIHR5cGU6IG51bWJlciB9O1xyXG50eXBlIENodW5rRGF0YSA9IHtcclxuICAgIGdyaWQ6IFVpbnQ4QXJyYXk7IC8vIFNpemUgMTZ4MTZ4MjU2LiBJbmRleDogeCArIHoqMTYgKyAoeStPRkZTRVQpKjI1NlxyXG4gICAgdmlzaWJsZTogQmxvY2tJbnN0YW5jZVtdOyAvLyBQcmUtY2FsY3VsYXRlZCB2aXNpYmxlIGluc3RhbmNlc1xyXG59O1xyXG5cclxuY29uc3QgY2h1bmtzID0gbmV3IE1hcDxzdHJpbmcsIENodW5rRGF0YT4oKTtcclxuY29uc3QgY2h1bmtDYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBDaHVua0RhdGE+KCk7XHJcblxyXG4vLyBIZWxwZXIgdG8gZ2V0IGdyaWQgaW5kZXhcclxuZnVuY3Rpb24gZ2V0R3JpZEluZGV4KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpIHtcclxuICAgIHggPSBNYXRoLmZsb29yKHgpO1xyXG4gICAgeSA9IE1hdGguZmxvb3IoeSk7XHJcbiAgICB6ID0gTWF0aC5mbG9vcih6KTtcclxuICAgIGlmICh4IDwgMCB8fCB4ID49IENIVU5LX1NJWkUgfHwgeiA8IDAgfHwgeiA+PSBDSFVOS19TSVpFKSByZXR1cm4gLTE7XHJcbiAgICBjb25zdCB5SWR4ID0geSArIFlfT0ZGU0VUO1xyXG4gICAgaWYgKHlJZHggPCAwIHx8IHlJZHggPj0gQ0hVTktfSEVJR0hUKSByZXR1cm4gLTE7XHJcbiAgICByZXR1cm4geCArIHogKiBDSFVOS19TSVpFICsgeUlkeCAqIChDSFVOS19TSVpFICogQ0hVTktfU0laRSk7XHJcbn1cclxuXHJcbi8vIEdsb2JhbCBJbnN0YW5jZSBMaXN0IChGbGF0KVxyXG5sZXQgYWxsSW5zdGFuY2VzOiBCbG9ja0luc3RhbmNlW10gPSBbXTtcclxuXHJcbi8vIFJlbW92ZWQgYmxvY2tNYXAgKERlcHJlY2F0ZWQpXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldE9yR2VuZXJhdGVDaHVuayhjeDogbnVtYmVyLCBjejogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBrZXkgPSBgJHtjeH0sJHtjen1gO1xyXG4gICAgaWYgKGNodW5rQ2FjaGUuaGFzKGtleSkpIHtcclxuICAgICAgICBpZiAoIWNodW5rcy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICBjaHVua3Muc2V0KGtleSwgY2h1bmtDYWNoZS5nZXQoa2V5KSEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ3JpZCA9IG5ldyBVaW50OEFycmF5KENIVU5LX1NJWkUgKiBDSFVOS19TSVpFICogQ0hVTktfSEVJR0hUKTtcclxuICAgIGNvbnN0IHZpc2libGU6IEJsb2NrSW5zdGFuY2VbXSA9IFtdO1xyXG5cclxuICAgIC8vIDEuIEdlbmVyYXRlIFRlcnJhaW4gKFBvcHVsYXRlIEdSSUQpXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IENIVU5LX1NJWkU7IHgrKykge1xyXG4gICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgQ0hVTktfU0laRTsgeisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHd4ID0gY3ggKiBDSFVOS19TSVpFICsgeDtcclxuICAgICAgICAgICAgY29uc3Qgd3ogPSBjeiAqIENIVU5LX1NJWkUgKyB6O1xyXG5cclxuICAgICAgICAgICAgLy8gVGVycmFpbiBOb2lzZVxyXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IDAuMDU7XHJcbiAgICAgICAgICAgIGNvbnN0IGhSYXcgPSBmYm0od3ggKiBzY2FsZSwgd3ogKiBzY2FsZSwgMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlcnJhaW5IZWlnaHQgPSBNYXRoLmZsb29yKGhSYXcgKiAyMCArIDIwKTsgLy8gRG91YmxlZCBBbXBsaXR1ZGVcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAtMzA7IHkgPD0gdGVycmFpbkhlaWdodDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IDE7IC8vIFN0b25lXHJcbiAgICAgICAgICAgICAgICBpZiAoeSA9PT0gdGVycmFpbkhlaWdodCkgdHlwZSA9IDM7IC8vIEdyYXNzXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh5ID49IHRlcnJhaW5IZWlnaHQgLSA3KSB0eXBlID0gMjsgLy8gRGlydFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IGdldEdyaWRJbmRleCh4LCB5LCB6KTtcclxuICAgICAgICAgICAgICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFtpZHhdID0gdHlwZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAyLiBDb21wdXRlIFZpc2liaWxpdHkgKExvY2FsIE1lc2gpXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IENIVU5LX1NJWkU7IHgrKykge1xyXG4gICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgQ0hVTktfU0laRTsgeisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHd4ID0gY3ggKiBDSFVOS19TSVpFICsgeDtcclxuICAgICAgICAgICAgY29uc3Qgd3ogPSBjeiAqIENIVU5LX1NJWkUgKyB6O1xyXG5cclxuICAgICAgICAgICAgLy8gU2NhbiBib3VuZHMgLVlfT0ZGU0VUIHRvIChDSFVOS19IRUlHSFQgLSBZX09GRlNFVCAtIDEpXHJcbiAgICAgICAgICAgIGNvbnN0IG1pblkgPSAtWV9PRkZTRVQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFkgPSBDSFVOS19IRUlHSFQgLSBZX09GRlNFVCAtIDE7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSBtaW5ZOyB5IDw9IG1heFk7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gZ2V0R3JpZEluZGV4KHgsIHksIHopO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkeCA9PT0gLTEpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IGdyaWRbaWR4XTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBuZWlnaGJvcnMgaW4gR1JJRFxyXG4gICAgICAgICAgICAgICAgbGV0IGV4cG9zZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NvbGlkID0gKG54OiBudW1iZXIsIG55OiBudW1iZXIsIG56OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuSWR4ID0gZ2V0R3JpZEluZGV4KG54LCBueSwgbnopO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuSWR4ID09PSAtMSkgcmV0dXJuIGZhbHNlOyAvLyBPdXQgb2YgYm91bmRzIC0+IEFzc3VtZSBleHBvc2VkXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdyaWRbbklkeF0gIT09IDA7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaXNTb2xpZCh4ICsgMSwgeSwgeikpIGV4cG9zZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzU29saWQoeCAtIDEsIHksIHopKSBleHBvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1NvbGlkKHgsIHkgKyAxLCB6KSkgZXhwb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNTb2xpZCh4LCB5IC0gMSwgeikpIGV4cG9zZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzU29saWQoeCwgeSwgeiArIDEpKSBleHBvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1NvbGlkKHgsIHksIHogLSAxKSkgZXhwb3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGV4cG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IG5ldyBGbG9hdDMyQXJyYXkoW3d4LCB5LCB3el0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNodW5rRGF0YSA9IHsgZ3JpZCwgdmlzaWJsZSB9O1xyXG4gICAgY2h1bmtDYWNoZS5zZXQoa2V5LCBjaHVua0RhdGEpO1xyXG4gICAgY2h1bmtzLnNldChrZXksIGNodW5rRGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNodW5rcyhwbGF5ZXJQb3M6IHZlYzMpIHtcclxuICAgIGNvbnN0IHBDeCA9IE1hdGguZmxvb3IocGxheWVyUG9zWzBdIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBwQ3ogPSBNYXRoLmZsb29yKHBsYXllclBvc1syXSAvIENIVU5LX1NJWkUpO1xyXG5cclxuICAgIGNvbnN0IG5lZWRlZEtleXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XHJcblxyXG4gICAgZm9yIChsZXQgeCA9IC1SRU5ERVJfRElTVEFOQ0U7IHggPD0gUkVOREVSX0RJU1RBTkNFOyB4KyspIHtcclxuICAgICAgICBmb3IgKGxldCB6ID0gLVJFTkRFUl9ESVNUQU5DRTsgeiA8PSBSRU5ERVJfRElTVEFOQ0U7IHorKykge1xyXG4gICAgICAgICAgICBuZWVkZWRLZXlzLmFkZChgJHtwQ3ggKyB4fSwke3BDeiArIHp9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IG9mIGNodW5rcy5rZXlzKCkpIHtcclxuICAgICAgICBpZiAoIW5lZWRlZEtleXMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgY2h1bmtzLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICBjaHVua0NhY2hlLmRlbGV0ZShrZXkpOyAvLyBGaXggTWVtb3J5IExlYWtcclxuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBhZGRlZENvdW50ID0gMDtcclxuICAgIGZvciAoY29uc3Qga2V5IG9mIG5lZWRlZEtleXMpIHtcclxuICAgICAgICBpZiAoIWNodW5rcy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBbY3gsIGN6XSA9IGtleS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgICAgICBnZXRPckdlbmVyYXRlQ2h1bmsoY3gsIGN6KTtcclxuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGFkZGVkQ291bnQrKztcclxuICAgICAgICAgICAgaWYgKGFkZGVkQ291bnQgPj0gMSkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VkKSB7XHJcbiAgICAgICAgcmVidWlsZFdvcmxkKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFVzZXItcGxhY2VkIGJsb2NrcyBidWZmZXI/IFxyXG4vLyBGb3Igc2ltcGxpY2l0eSwgd2UgY2FuIGp1c3QgbWl4IHRoZW0gaW50byB0aGUgY3VycmVudCBjaHVuayBsb2dpYyBvciBrZWVwIGEgc2VwYXJhdGUgbGlzdC5cclxuLy8gSWYgd2Ugd2FudCBcIkluZmluaXRlXCIgZ2VuZXJhdGlvbiwgdXNlciBibG9ja3Mgc2hvdWxkIGlkZWFsbHkgYmUgc3RvcmVkIGluIHRoZSBjaHVuayBkYXRhLlxyXG4vLyBGb3IgdGhpcyBkZW1vOiBXZSB3aWxsIGp1c3QgTk9UIHN1cHBvcnQgc2F2aW5nIHVzZXIgYmxvY2tzIHRvIGRpc2svcGVyc2lzdGVuY2UuXHJcbi8vIEJ1dCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB1c2VyIHBsYWNlZCBibG9ja3MgYXJlIGtlcHQgaWYgdGhleSBhcmUgaW4gcmFuZ2UuXHJcbi8vIEFjdHVhbGx5LCBgZ2VuZXJhdGVDaHVua2AgaXMgY2FsbGVkIGZyZXNobHkuIElmIHdlIHVubG9hZCBhIGNodW5rLCB1c2VyIGNoYW5nZXMgYXJlIGxvc3QuXHJcbi8vIFRvIGZpeCB0aGlzOiBgY2h1bmtzYCBtYXAgc2hvdWxkIGJlIHRoZSBzb3VyY2Ugb2YgdHJ1dGguIFdlIG9ubHkgR2VuZXJhdGUgaWYgYCFjaHVua3MuaGFzKGtleSlgLlxyXG4vLyBCdXQgd2UganVzdCBkZWxldGVkIGtleXMgaW4gdGhlIGxvb3AgYWJvdmUuIFxyXG4vLyBGaXg6IERvbid0IGRlbGV0ZSBmcm9tIGBjaHVua3NgIG1hcCBpbW1lZGlhdGVseSBpZiB3ZSB3YW50IG1lbW9yeSBwZXJzaXN0ZW5jZSAoYnV0IHRoZW4gbWVtb3J5IGdyb3dzKS5cclxuLy8gSW5maW5pdGUgdXN1YWxseSBpbXBsaWVzIHVubG9hZGluZy4gXHJcbi8vIExldCdzIGFzc3VtZSBmb3IgdGhpcyBNVlA6IFVubG9hZGluZyA9IFJlc2V0LiBcclxuLy8gT3IgYmV0dGVyOiBVc2UgYSBzZXBhcmF0ZSBgdXNlckNoYW5nZXNgIG1hcD8gVG9vIGNvbXBsZXguXHJcbi8vIExldCdzIHN0aWNrIHRvOiBVbmxvYWQgPSBMb3N0LiAoVXNlciBkaWRuJ3QgYXNrIGZvciBzYXZlL2xvYWQpLlxyXG5cclxuLy8gLS0tIE9wdGltaXplZCBSZWJ1aWxkICYgTWVtb3J5IE1hbmFnZW1lbnQgLS0tXHJcbmNvbnN0IG1heEluc3RhbmNlcyA9IDIwMDAwMDA7XHJcbmNvbnN0IGluc3RhbmNlQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XHJcbiAgICBzaXplOiBtYXhJbnN0YW5jZXMgKiAxNiwgLy8gdmVjMyArIGYzMiA9IDE2IGJ5dGVzXHJcbiAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVkVSVEVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QsXHJcbn0pO1xyXG5jb25zdCBzdGFnaW5nQnVmZmVyID0gbmV3IEZsb2F0MzJBcnJheShtYXhJbnN0YW5jZXMgKiA0KTsgLy8gUGVyc2lzdGVudCBCdWZmZXJcclxuXHJcbi8vIC0tLSBGcnVzdHVtIENsYXNzIC0tLVxyXG5jbGFzcyBGcnVzdHVtIHtcclxuICAgIHBsYW5lczogdmVjNFtdO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wbGFuZXMgPSBbdmVjNC5jcmVhdGUoKSwgdmVjNC5jcmVhdGUoKSwgdmVjNC5jcmVhdGUoKSwgdmVjNC5jcmVhdGUoKSwgdmVjNC5jcmVhdGUoKSwgdmVjNC5jcmVhdGUoKV07XHJcbiAgICB9XHJcbiAgICB1cGRhdGUobTogbWF0NCkge1xyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLnBsYW5lcztcclxuICAgICAgICAvLyBSaWdodFxyXG4gICAgICAgIHZlYzQuc2V0KHBbMF0sIG1bM10gLSBtWzBdLCBtWzddIC0gbVs0XSwgbVsxMV0gLSBtWzhdLCBtWzE1XSAtIG1bMTJdKTtcclxuICAgICAgICAvLyBMZWZ0XHJcbiAgICAgICAgdmVjNC5zZXQocFsxXSwgbVszXSArIG1bMF0sIG1bN10gKyBtWzRdLCBtWzExXSArIG1bOF0sIG1bMTVdICsgbVsxMl0pO1xyXG4gICAgICAgIC8vIEJvdHRvbVxyXG4gICAgICAgIHZlYzQuc2V0KHBbMl0sIG1bM10gKyBtWzFdLCBtWzddICsgbVs1XSwgbVsxMV0gKyBtWzldLCBtWzE1XSArIG1bMTNdKTtcclxuICAgICAgICAvLyBUb3BcclxuICAgICAgICB2ZWM0LnNldChwWzNdLCBtWzNdIC0gbVsxXSwgbVs3XSAtIG1bNV0sIG1bMTFdIC0gbVs5XSwgbVsxNV0gLSBtWzEzXSk7XHJcbiAgICAgICAgLy8gRmFyICh6IDw9IHcgLT4gdyAtIHogPj0gMClcclxuICAgICAgICB2ZWM0LnNldChwWzRdLCBtWzNdIC0gbVsyXSwgbVs3XSAtIG1bNl0sIG1bMTFdIC0gbVsxMF0sIG1bMTVdIC0gbVsxNF0pO1xyXG4gICAgICAgIC8vIE5lYXIgKHogPj0gMCAtPiB6ID49IDApIC0tIFdlYkdQVSAwLi4xIGNsaXAgc3BhY2VcclxuICAgICAgICB2ZWM0LnNldChwWzVdLCBtWzJdLCBtWzZdLCBtWzEwXSwgbVsxNF0pO1xyXG4gICAgfVxyXG4gICAgaW50ZXJzZWN0c0JveChtaW46IHZlYzMsIG1heDogdmVjMykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLnBsYW5lc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgcHggPSBwWzBdID4gMCA/IG1heFswXSA6IG1pblswXTtcclxuICAgICAgICAgICAgY29uc3QgcHkgPSBwWzFdID4gMCA/IG1heFsxXSA6IG1pblsxXTtcclxuICAgICAgICAgICAgY29uc3QgcHogPSBwWzJdID4gMCA/IG1heFsyXSA6IG1pblsyXTtcclxuICAgICAgICAgICAgaWYgKHBbMF0gKiBweCArIHBbMV0gKiBweSArIHBbMl0gKiBweiArIHBbM10gPCAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IGZydXN0dW0gPSBuZXcgRnJ1c3R1bSgpO1xyXG5cclxubGV0IGxhc3RDdWxsUG9zID0gdmVjMy5jcmVhdGUoKTsgLy8gVHJhY2sgY2FtZXJhIHBvcyBmb3IgY3VsbGluZ1xyXG5sZXQgbGFzdEN1bGxZYXcgPSAwO1xyXG5sZXQgY3VycmVudEluc3RhbmNlQ291bnQgPSAwOyAvLyBHTE9CQUwgU0NPUEVcclxuXHJcbi8vIE9wdGltaXphdGlvbjogUmV1c2FibGUgdGVtcCB2ZWN0b3JzIGZvciBmcnVzdHVtIGNoZWNrXHJcbmNvbnN0IHRlbXBDaHVua01pbiA9IHZlYzMuY3JlYXRlKCk7XHJcbmNvbnN0IHRlbXBDaHVua01heCA9IHZlYzMuY3JlYXRlKCk7XHJcblxyXG5mdW5jdGlvbiByZWJ1aWxkV29ybGQoZm9yY2UgPSBmYWxzZSkge1xyXG4gICAgaWYgKCFmb3JjZSkge1xyXG4gICAgICAgIC8vIFRocm90dGxlOiBPbmx5IHJlYnVpbGQgaWYgY2FtZXJhIG1vdmVkID4gNCBibG9ja3Mgb3Igcm90YXRlZCA+IDAuMSByYWRcclxuICAgICAgICBjb25zdCBkaXN0U3EgPSB2ZWMzLnNxckRpc3QoY2FtZXJhUG9zaXRpb24sIGxhc3RDdWxsUG9zKTtcclxuICAgICAgICBjb25zdCByb3REaWZmID0gTWF0aC5hYnMoY2FtZXJhWWF3IC0gbGFzdEN1bGxZYXcpO1xyXG5cclxuICAgICAgICBpZiAoZGlzdFNxIDwgMTYuMCAmJiByb3REaWZmIDwgMC4xKSB7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gU2tpcCB1cGRhdGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIENhY2hlXHJcbiAgICB2ZWMzLmNvcHkobGFzdEN1bGxQb3MsIGNhbWVyYVBvc2l0aW9uKTtcclxuICAgIGxhc3RDdWxsWWF3ID0gY2FtZXJhWWF3O1xyXG5cclxuICAgIC8vIFVwZGF0ZSBGcnVzdHVtXHJcbiAgICBmcnVzdHVtLnVwZGF0ZSh2aWV3UHJvamVjdGlvbk1hdHJpeCk7XHJcblxyXG4gICAgbGV0IGluc3RhbmNlQ291bnQgPSAwO1xyXG5cclxuICAgIC8vIERpcmVjdCBMb29wIHdpdGggZmFzdCB3cml0ZVxyXG4gICAgZm9yIChjb25zdCBba2V5LCBjaHVua10gb2YgY2h1bmtzKSB7XHJcbiAgICAgICAgY29uc3QgW2N4LCBjel0gPSBrZXkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKTtcclxuXHJcbiAgICAgICAgLy8gQ2h1bmsgQUFCQiAtIE9wdGltaXplZCB0byBhdm9pZCBHQ1xyXG4gICAgICAgIHZlYzMuc2V0KHRlbXBDaHVua01pbiwgY3ggKiBDSFVOS19TSVpFLCAtWV9PRkZTRVQsIGN6ICogQ0hVTktfU0laRSk7XHJcbiAgICAgICAgdmVjMy5zZXQodGVtcENodW5rTWF4LCAoY3ggKyAxKSAqIENIVU5LX1NJWkUsIENIVU5LX0hFSUdIVCAtIFlfT0ZGU0VULCAoY3ogKyAxKSAqIENIVU5LX1NJWkUpO1xyXG5cclxuICAgICAgICBpZiAoZnJ1c3R1bS5pbnRlcnNlY3RzQm94KHRlbXBDaHVua01pbiwgdGVtcENodW5rTWF4KSkge1xyXG4gICAgICAgICAgICBjb25zdCB2aXNpYmxlID0gY2h1bmsudmlzaWJsZTtcclxuICAgICAgICAgICAgY29uc3QgbGVuID0gdmlzaWJsZS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAvLyBTYWZldHkgY2hlY2sgYWdhaW5zdCBtYXhJbnN0YW5jZXNcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlQ291bnQgKyBsZW4gPiBtYXhJbnN0YW5jZXMpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBzaW1wbGUgdHJ1bmNhdGlvblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9jayA9IHZpc2libGVbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBpbnN0YW5jZUNvdW50ICogNDtcclxuICAgICAgICAgICAgICAgIHN0YWdpbmdCdWZmZXJbb2Zmc2V0XSA9IGJsb2NrLnBvc1swXTtcclxuICAgICAgICAgICAgICAgIHN0YWdpbmdCdWZmZXJbb2Zmc2V0ICsgMV0gPSBibG9jay5wb3NbMV07XHJcbiAgICAgICAgICAgICAgICBzdGFnaW5nQnVmZmVyW29mZnNldCArIDJdID0gYmxvY2sucG9zWzJdO1xyXG4gICAgICAgICAgICAgICAgc3RhZ2luZ0J1ZmZlcltvZmZzZXQgKyAzXSA9IGJsb2NrLnR5cGU7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZUNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV3JpdGUgT05MWSB0aGUgdXNlZCBwb3J0aW9uIHRvIEdQVVxyXG4gICAgZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKGluc3RhbmNlQnVmZmVyLCAwLCBzdGFnaW5nQnVmZmVyLCAwLCBpbnN0YW5jZUNvdW50ICogNCk7XHJcblxyXG4gICAgY3VycmVudEluc3RhbmNlQ291bnQgPSBpbnN0YW5jZUNvdW50O1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlYnVpbGRXb3JsZDogaW5zdGFuY2VDb3VudCcsIGluc3RhbmNlQ291bnQsICdDaHVua3M6JywgY2h1bmtzLnNpemUpO1xyXG4gICAgaWYgKGluc3RhbmNlQ291bnQgPT09IDAgJiYgY2h1bmtzLnNpemUgPiAwKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdyZWJ1aWxkV29ybGQ6IENodW5rcyBleGlzdCBidXQgMCBpbnN0YW5jZXMuIEZydXN0dW0gaXNzdWU/Jyk7XHJcbiAgICAgICAgLy8gRGVidWcgRnJ1c3R1bVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDYW06JywgY2FtZXJhUG9zaXRpb24sICdNaW46JywgY2h1bmtzLnZhbHVlcygpLm5leHQoKS52YWx1ZT8ubWluKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlSW5zdGFuY2VCdWZmZXIoKSB7XHJcbiAgICAvLyBMZWdhY3kgd3JhcHBlciBpZiBuZWVkZWQsIGJ1dCByZWJ1aWxkV29ybGQgaGFuZGxlcyBpdCBub3cuXHJcbn1cclxuLy8gSW5pdGlhbCB1cGRhdGUgY2FsbGVkIGluIHJlYnVpbGRXb3JsZFxyXG4vLyBJbml0aWFsaXplIHdvcmxkIGdlbmVyYXRpb24gYWZ0ZXIgYnVmZmVycyBhcmUgcmVhZHlcclxuXHJcblxyXG5cclxuLy8gLS0tIFBpcGVsaW5lIC0tLVxyXG5jb25zdCBwaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XHJcbiAgICBsYXlvdXQ6ICdhdXRvJyxcclxuICAgIHZlcnRleDoge1xyXG4gICAgICAgIG1vZHVsZTogZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlckNvZGUgfSksXHJcbiAgICAgICAgZW50cnlQb2ludDogJ21haW5fdnMnLFxyXG4gICAgICAgIGJ1ZmZlcnM6IFtcclxuICAgICAgICAgICAgLy8gVmVydGV4IEF0dHJpYnV0ZXNcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlTdHJpZGU6IDggKiA0LFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDAsIG9mZnNldDogMCwgZm9ybWF0OiAnZmxvYXQzMngzJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDEsIG9mZnNldDogMyAqIDQsIGZvcm1hdDogJ2Zsb2F0MzJ4MicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiAyLCBvZmZzZXQ6IDUgKiA0LCBmb3JtYXQ6ICdmbG9hdDMyeDMnIH0sIC8vIE5vcm1hbFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBJbnN0YW5jZSBBdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFycmF5U3RyaWRlOiA0ICogNCwgLy8gdmVjMyBwb3MgKyBmMzIgdHlwZVxyXG4gICAgICAgICAgICAgICAgc3RlcE1vZGU6ICdpbnN0YW5jZScsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMywgb2Zmc2V0OiAwLCBmb3JtYXQ6ICdmbG9hdDMyeDMnIH0sIC8vIGluc3RhbmNlUG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICB7IHNoYWRlckxvY2F0aW9uOiA0LCBvZmZzZXQ6IDMgKiA0LCBmb3JtYXQ6ICdmbG9hdDMyJyB9IC8vIHRleHR1cmVJbmRleFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIGZyYWdtZW50OiB7XHJcbiAgICAgICAgbW9kdWxlOiBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyQ29kZSB9KSxcclxuICAgICAgICBlbnRyeVBvaW50OiAnbWFpbl9mcycsXHJcbiAgICAgICAgdGFyZ2V0czogW3sgZm9ybWF0IH1dXHJcbiAgICB9LFxyXG4gICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiAndHJpYW5nbGUtbGlzdCcsIGN1bGxNb2RlOiAnYmFjaycgfSxcclxuICAgIGRlcHRoU3RlbmNpbDoge1xyXG4gICAgICAgIGRlcHRoV3JpdGVFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIGRlcHRoQ29tcGFyZTogJ2xlc3MnLFxyXG4gICAgICAgIGZvcm1hdDogJ2RlcHRoMjRwbHVzJyxcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBzaGFkb3dQaXBlbGluZSA9IGRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XHJcbiAgICBsYXlvdXQ6ICdhdXRvJyxcclxuICAgIHZlcnRleDoge1xyXG4gICAgICAgIG1vZHVsZTogZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7IGNvZGU6IHNoYWRlckNvZGUgfSksXHJcbiAgICAgICAgZW50cnlQb2ludDogJ3NoYWRvd192cycsXHJcbiAgICAgICAgYnVmZmVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnJheVN0cmlkZTogOCAqIDQsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMCwgb2Zmc2V0OiAwLCBmb3JtYXQ6ICdmbG9hdDMyeDMnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMSwgb2Zmc2V0OiAzICogNCwgZm9ybWF0OiAnZmxvYXQzMngyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgc2hhZGVyTG9jYXRpb246IDIsIG9mZnNldDogNSAqIDQsIGZvcm1hdDogJ2Zsb2F0MzJ4MycgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlTdHJpZGU6IDQgKiA0LFxyXG4gICAgICAgICAgICAgICAgc3RlcE1vZGU6ICdpbnN0YW5jZScsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMywgb2Zmc2V0OiAwLCBmb3JtYXQ6ICdmbG9hdDMyeDMnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogNCwgb2Zmc2V0OiAzICogNCwgZm9ybWF0OiAnZmxvYXQzMicgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHByaW1pdGl2ZTogeyB0b3BvbG9neTogJ3RyaWFuZ2xlLWxpc3QnLCBjdWxsTW9kZTogJ2JhY2snIH0sXHJcbiAgICBkZXB0aFN0ZW5jaWw6IHtcclxuICAgICAgICBkZXB0aFdyaXRlRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBkZXB0aENvbXBhcmU6ICdsZXNzJyxcclxuICAgICAgICBmb3JtYXQ6ICdkZXB0aDMyZmxvYXQnLFxyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIC0tLSBVbmlmb3JtcyAtLS1cclxuLy8gSW5jcmVhc2VkIHRvIDU2MCB0byBtYXRjaCBzaGFkZXIgcmVxdWlyZW1lbnRzIChhbmQgYWRkZWQgc2FmZXR5IHBhZGRpbmcpXHJcbmNvbnN0IHVuaWZvcm1CdWZmZXJTaXplID0gNTYwOyAvLyBXYXMgNTQ0XHJcbmNvbnN0IHVuaWZvcm1CdWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcclxuICAgIHNpemU6IHVuaWZvcm1CdWZmZXJTaXplLFxyXG4gICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCxcclxufSk7XHJcblxyXG5jb25zdCBiaW5kR3JvdXAgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcclxuICAgIGxheW91dDogcGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLFxyXG4gICAgZW50cmllczogW1xyXG4gICAgICAgIHsgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB1bmlmb3JtQnVmZmVyIH0gfSxcclxuICAgICAgICB7IGJpbmRpbmc6IDEsIHJlc291cmNlOiBzYW1wbGVyIH0sXHJcbiAgICAgICAgeyBiaW5kaW5nOiAyLCByZXNvdXJjZTogdGV4dHVyZS5jcmVhdGVWaWV3KHsgZGltZW5zaW9uOiAnMmQtYXJyYXknIH0pIH0sXHJcbiAgICAgICAgeyBiaW5kaW5nOiAzLCByZXNvdXJjZTogc2hhZG93U2FtcGxlciB9LFxyXG4gICAgICAgIHsgYmluZGluZzogNCwgcmVzb3VyY2U6IHNoYWRvd0RlcHRoVGV4dHVyZS5jcmVhdGVWaWV3KCkgfSxcclxuICAgIF1cclxufSk7XHJcblxyXG5cclxuLy8gUmUtY29ycmVjdGlvbjogYmluZCBncm91cCBsYXlvdXQgZm9yIHNoYWRvdyBwYXNzLlxyXG4vLyBzaGFkb3dfdnMgb25seSBhY2Nlc3NlcyAndW5pZm9ybXMnLiBcclxuLy8gU28gZW50cmllcyBzaG91bGQgYmUganVzdCBiaW5kaW5nIDAuXHJcbmNvbnN0IHNoYWRvd0JpbmRHcm91cFJlYWwgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcclxuICAgIGxheW91dDogc2hhZG93UGlwZWxpbmUuZ2V0QmluZEdyb3VwTGF5b3V0KDApLFxyXG4gICAgZW50cmllczogW1xyXG4gICAgICAgIHsgYmluZGluZzogMCwgcmVzb3VyY2U6IHsgYnVmZmVyOiB1bmlmb3JtQnVmZmVyIH0gfVxyXG4gICAgXVxyXG59KTtcclxuXHJcbi8vIC0tLSBDYW1lcmEgJiBSZXNpemUgLS0tXHJcbmNvbnN0IHByb2plY3Rpb25NYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xyXG5jb25zdCB2aWV3TWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcclxuY29uc3QgbW9kZWxWaWV3UHJvamVjdGlvbk1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7IC8vIHVudXNlZCBpbiBuZXcgc2hhZGVyIGxvZ2ljIGdlbmVyYWxseSwgYnV0IGNhbiBrZWVwIHN0cnVjdHVyZVxyXG5jb25zdCB2aWV3UHJvamVjdGlvbk1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XHJcblxyXG5sZXQgZGVwdGhUZXh0dXJlOiBHUFVUZXh0dXJlO1xyXG5cclxuZnVuY3Rpb24gcmVzaXplKCkge1xyXG4gICAgLy8gUmVzaXplIGJhc2VkIG9uIGRpc3BsYXllZCBzaXplIChDU1MpXHJcbiAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IGRpc3BsYXlXaWR0aCA9IE1hdGguZmxvb3IocmVjdC53aWR0aCAqIGRldmljZVBpeGVsUmF0aW8pO1xyXG4gICAgbGV0IGRpc3BsYXlIZWlnaHQgPSBNYXRoLmZsb29yKHJlY3QuaGVpZ2h0ICogZGV2aWNlUGl4ZWxSYXRpbyk7XHJcblxyXG4gICAgLy8gRm9yY2UgZXZlblxyXG4gICAgaWYgKGRpc3BsYXlXaWR0aCAlIDIgIT09IDApIGRpc3BsYXlXaWR0aC0tO1xyXG4gICAgaWYgKGRpc3BsYXlIZWlnaHQgJSAyICE9PSAwKSBkaXNwbGF5SGVpZ2h0LS07XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1Jlc2l6ZSBjYWxsZWQ6JywgZGlzcGxheVdpZHRoLCAneCcsIGRpc3BsYXlIZWlnaHQsICdkZXZpY2VQaXhlbFJhdGlvOicsIGRldmljZVBpeGVsUmF0aW8pO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIGNhbnZhcyBtYXRjaGVzXHJcbiAgICBpZiAoY2FudmFzLndpZHRoICE9PSBkaXNwbGF5V2lkdGggfHwgY2FudmFzLmhlaWdodCAhPT0gZGlzcGxheUhlaWdodCkge1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGRpc3BsYXlXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gZGlzcGxheUhlaWdodDtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ2FudmFzIHJlc2l6ZWQgdG86JywgY2FudmFzLndpZHRoLCAneCcsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgcHJvamVjdGlvbiB3aXRoIG5ldyBhc3BlY3QgcmF0aW8gKFdlYkdQVSBaTyBzdHJpY3QpXHJcbiAgICAgICAgbWF0NC5wZXJzcGVjdGl2ZVpPKHByb2plY3Rpb25NYXRyaXgsICgyICogTWF0aC5QSSkgLyA1LCBjYW52YXMud2lkdGggLyBjYW52YXMuaGVpZ2h0LCAwLjEsIDEwMC4wKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnW0RFQlVHXSBSZXNpemUgUHJvajonLCBbcHJvamVjdGlvbk1hdHJpeFswXSwgcHJvamVjdGlvbk1hdHJpeFs1XSwgcHJvamVjdGlvbk1hdHJpeFsxMF0sIHByb2plY3Rpb25NYXRyaXhbMTVdXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWx3YXlzIHJlY3JlYXRlIGRlcHRoIHRleHR1cmUgaWYgc2l6ZSBjaGFuZ2VkIE9SIGlmIGl0IGRvZXNuJ3QgZXhpc3RcclxuICAgIC8vIENoZWNrIHRleHR1cmUgc2l6ZSBtYXRjaFxyXG4gICAgaWYgKCFkZXB0aFRleHR1cmUgfHwgZGVwdGhUZXh0dXJlLndpZHRoICE9PSBjYW52YXMud2lkdGggfHwgZGVwdGhUZXh0dXJlLmhlaWdodCAhPT0gY2FudmFzLmhlaWdodCkge1xyXG4gICAgICAgIGlmIChkZXB0aFRleHR1cmUpIGRlcHRoVGV4dHVyZS5kZXN0cm95KCk7XHJcbiAgICAgICAgZGVwdGhUZXh0dXJlID0gZGV2aWNlLmNyZWF0ZVRleHR1cmUoe1xyXG4gICAgICAgICAgICBzaXplOiBbY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XSxcclxuICAgICAgICAgICAgZm9ybWF0OiAnZGVwdGgyNHBsdXMnLFxyXG4gICAgICAgICAgICB1c2FnZTogR1BVVGV4dHVyZVVzYWdlLlJFTkRFUl9BVFRBQ0hNRU5ULFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUpO1xyXG5yZXNpemUoKTtcclxuXHJcblxyXG4vLyAtLS0gQ29udHJvbHMgLS0tXHJcbi8vIENSSVRJQ0FMOiBTZXBhcmF0ZSBwbGF5ZXIgcG9zaXRpb24gZnJvbSBjYW1lcmEgcG9zaXRpb25cclxuLy8gcGxheWVyUG9zaXRpb24gPSBhY3R1YWwgcGxheWVyIGxvY2F0aW9uICh1c2VkIGZvciBwaHlzaWNzLCBjb2xsaXNpb24sIGNodW5rIGxvYWRpbmcpXHJcbi8vIGNhbWVyYVBvc2l0aW9uID0gY2FsY3VsYXRlZCBjYW1lcmEgcG9zaXRpb24gKHVzZWQgZm9yIHJlbmRlcmluZyB2aWV3IG1hdHJpeClcclxuY29uc3QgcGxheWVyUG9zaXRpb24gPSB2ZWMzLmZyb21WYWx1ZXMoMCwgMiwgNSk7XHJcbmNvbnN0IGNhbWVyYVBvc2l0aW9uID0gdmVjMy5jcmVhdGUoKTsgLy8gQ2FsY3VsYXRlZCBmcm9tIHBsYXllclBvc2l0aW9uIGluIDNyZCBwZXJzb25cclxubGV0IGNhbWVyYVlhdyA9IE1hdGguUEk7XHJcbmxldCBjYW1lcmFQaXRjaCA9IC0wLjM7XHJcbi8vIFR1bmVkIGZvciBTZWNvbmRzXHJcbmNvbnN0IGNhbWVyYVNwZWVkID0gNC4wO1xyXG5jb25zdCBtb3VzZVNlbnNpdGl2aXR5ID0gMC4wMDI7XHJcbi8vIFBoeXNpY3NcclxubGV0IHZlcnRpY2FsVmVsb2NpdHkgPSAwO1xyXG5jb25zdCBncmF2aXR5ID0gMjAuMDtcclxuY29uc3QganVtcEZvcmNlID0gOC41OyAvLyBUdW5lZCBmb3IgPjFtIGp1bXBcclxubGV0IGlzR3JvdW5kZWQgPSBmYWxzZTtcclxuY29uc3QgcGxheWVySGVpZ2h0ID0gMS42OyAvLyBWaXN1YWwgQm9keSBIZWlnaHQgKEV5ZXMgYXJlIGF0ICsxLjggZnJvbSBmZWV0IHJvdWdobHkpXHJcbmNvbnN0IHBsYXllclJhZGl1cyA9IDAuMzsgLy8gSGFsZi13aWR0aFxyXG5sZXQgY2FtZXJhWm9vbSA9IDYuMDsgLy8gRGlzdGFuY2UgZm9yIDNyZCBQZXJzb25cclxuY29uc3QgZXllTGV2ZWwgPSAxLjg7IC8vIENhbWVyYSBoZWlnaHQgYWJvdmUgZmVldCBmb3IgRmlyc3QgUGVyc29uXHJcblxyXG5cclxuLy8gUmV0dXJucyB0aGUgaW50ZWdlciBZIGxldmVsIG9mIHRoZSBoaWdoZXN0IGJsb2NrIGhpdCwgb3IgbnVsbCBpZiBubyBjb2xsaXNpb25cclxuZnVuY3Rpb24gY2hlY2tDb2xsaXNpb24ocG9zOiB2ZWMzKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICBjb25zdCBtaW5YID0gTWF0aC5mbG9vcihwb3NbMF0gLSBwbGF5ZXJSYWRpdXMpO1xyXG4gICAgY29uc3QgbWF4WCA9IE1hdGguZmxvb3IocG9zWzBdICsgcGxheWVyUmFkaXVzKTtcclxuICAgIGNvbnN0IG1pblogPSBNYXRoLmZsb29yKHBvc1syXSAtIHBsYXllclJhZGl1cyk7XHJcbiAgICBjb25zdCBtYXhaID0gTWF0aC5mbG9vcihwb3NbMl0gKyBwbGF5ZXJSYWRpdXMpO1xyXG5cclxuICAgIGNvbnN0IG1pblkgPSBNYXRoLmZsb29yKHBvc1sxXSAtIHBsYXllckhlaWdodCk7XHJcbiAgICBjb25zdCBtYXhZID0gTWF0aC5mbG9vcihwb3NbMV0pO1xyXG5cclxuICAgIGxldCBoaXRZOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICAvLyBJdGVyYXRlIHJlbGV2YW50IGJsb2Nrc1xyXG4gICAgZm9yIChsZXQgeCA9IG1pblg7IHggPD0gbWF4WDsgeCsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeiA9IG1pblo7IHogPD0gbWF4WjsgeisrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSBtaW5ZOyB5IDw9IG1heFk7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3ggPSBNYXRoLmZsb29yKHggLyBDSFVOS19TSVpFKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN6ID0gTWF0aC5mbG9vcih6IC8gQ0hVTktfU0laRSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVuayA9IGNodW5rcy5nZXQoYCR7Y3h9LCR7Y3p9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNodW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbHggPSB4IC0gY3ggKiBDSFVOS19TSVpFO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGx6ID0geiAtIGN6ICogQ0hVTktfU0laRTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBnZXRHcmlkSW5kZXgobHgsIHksIGx6KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ICE9PSAtMSAmJiBjaHVuay5ncmlkW2lkeF0gIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGl0IVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGl0WSA9PT0gbnVsbCB8fCB5ID4gaGl0WSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGl0WSA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGl0WTtcclxufVxyXG5cclxuLy8gLS0tIEludmVudG9yeSAmIEhvdGJhciAtLS1cclxuLy8gU2xvdHMgMC04IChLZXlzIDEtOSlcclxuLy8gSW52ZW50b3J5IE1hcHBpbmc6IFNsb3QgSW5kZXggLT4gVGV4dHVyZSBUeXBlXHJcbi8vIERlZmF1bHQ6IFNsb3QgMCA9IENvYmJsZSAoMCksIFNsb3QgMSA9IERpcnQgKDEpLCBTbG90IDIgPSBHcmFzcyAoMiksIFNsb3QgMyA9IFROVCAoNClcclxuY29uc3QgaW52ZW50b3J5ID0gWzAsIDEsIDIsIDQsIDAsIDAsIDAsIDAsIDBdO1xyXG4vLyBJbml0aWFsIENvdW50czogNjQgQ29iYmxlLCAxMCBEaXJ0LCAxMCBHcmFzcywgMTAwIFROVFxyXG5jb25zdCBpbnZlbnRvcnlDb3VudHMgPSBbNjQsIDEwLCAxMCwgMTAwLCAwLCAwLCAwLCAwLCAwXTtcclxuLy8gUGFkIHRvIDM2IGlzIGRvbmUgYmVsb3cgaW4gVUkgc2V0dXBcclxubGV0IHNlbGVjdGVkU2xvdCA9IDA7XHJcblxyXG4vLyBDcmVhdGUgVUlcclxuY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNvbnRhaW5lcicpO1xyXG5pZiAoIWdhbWVDb250YWluZXIpIHRocm93IG5ldyBFcnJvcihcIkdhbWUgY29udGFpbmVyIG5vdCBmb3VuZFwiKTtcclxuXHJcbmNvbnN0IGhvdGJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5ob3RiYXJDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5ob3RiYXJDb250YWluZXIuc3R5bGUuYm90dG9tID0gJzEwcHgnO1xyXG5ob3RiYXJDb250YWluZXIuc3R5bGUubGVmdCA9ICc1MCUnO1xyXG5ob3RiYXJDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTUwJSknO1xyXG5ob3RiYXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuaG90YmFyQ29udGFpbmVyLnN0eWxlLmdhcCA9ICc0cHgnO1xyXG5ob3RiYXJDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwwLDAsMC41KSc7XHJcbmhvdGJhckNvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gJzRweCc7XHJcbmhvdGJhckNvbnRhaW5lci5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNHB4JztcclxuLy8gRGlzYWJsZSBkcmFnL3NlbWFudGljc1xyXG5ob3RiYXJDb250YWluZXIuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcclxuaG90YmFyQ29udGFpbmVyLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XHJcbmdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG90YmFyQ29udGFpbmVyKTtcclxuXHJcbi8vIENyb3NzaGFpclxyXG5jb25zdCBjcm9zc2hhaXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY3Jvc3NoYWlyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuY3Jvc3NoYWlyLnN0eWxlLnRvcCA9ICc1MCUnO1xyXG5jcm9zc2hhaXIuc3R5bGUubGVmdCA9ICc1MCUnO1xyXG5jcm9zc2hhaXIuc3R5bGUud2lkdGggPSAnMjBweCc7XHJcbmNyb3NzaGFpci5zdHlsZS5oZWlnaHQgPSAnMjBweCc7XHJcbmNyb3NzaGFpci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKC01MCUsIC01MCUpJztcclxuY3Jvc3NoYWlyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7IC8vIENsaWNrIHRocm91Z2hcclxuLy8gRHJhdyBzaW1wbGUgY3Jvc3NcclxuY3Jvc3NoYWlyLmlubmVySFRNTCA9IGBcclxuPGRpdiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OjlweDsgdG9wOjA7IHdpZHRoOjJweDsgaGVpZ2h0OjIwcHg7IGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwwLjgpO1wiPjwvZGl2PlxyXG48ZGl2IHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6MDsgdG9wOjlweDsgd2lkdGg6MjBweDsgaGVpZ2h0OjJweDsgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XCI+PC9kaXY+XHJcbmA7XHJcbmdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3Jvc3NoYWlyKTtcclxuXHJcbmNvbnN0IHNsb3RzOiB7IGRpdjogSFRNTEVsZW1lbnQsIGNvdW50OiBIVE1MRWxlbWVudCB9W10gPSBbXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcclxuICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNsb3Quc3R5bGUud2lkdGggPSAnNDBweCc7XHJcbiAgICBzbG90LnN0eWxlLmhlaWdodCA9ICc0MHB4JztcclxuICAgIHNsb3Quc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCBncmF5JztcclxuICAgIHNsb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzMzMnO1xyXG4gICAgc2xvdC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7IC8vIEZvciBhYnNvbHV0ZSBwb3NpdGlvbmluZyBvZiBjb3VudFxyXG4gICAgc2xvdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgc2xvdC5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XHJcbiAgICBzbG90LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XHJcbiAgICBzbG90LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICAgIHNsb3Quc3R5bGUuZm9udEZhbWlseSA9ICdtb25vc3BhY2UnO1xyXG4gICAgLy8gc2xvdC5pbm5lclRleHQgPSBpIDwgMiA/IChpID09PSAwID8gJ0MnIDogJ0QnKSA6ICcnOyBcclxuXHJcbiAgICAvLyBJY29uXHJcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpY29uLnN0eWxlLndpZHRoID0gJzIwcHgnO1xyXG4gICAgaWNvbi5zdHlsZS5oZWlnaHQgPSAnMjBweCc7XHJcbiAgICBjb25zdCB0eXBlID0gaW52ZW50b3J5W2ldO1xyXG4gICAgaWYgKHR5cGUgPT09IDApIGljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4ODgnOyAvLyBTdG9uZVxyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gMSkgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzg1NSc7IC8vIERpcnRcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09IDIpIGljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0ODQnOyAvLyBHcmFzc1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PT0gNCkgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0YwMCc7IC8vIFROVFxyXG4gICAgZWxzZSBpY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODg4JztcclxuICAgIHNsb3QuYXBwZW5kQ2hpbGQoaWNvbik7XHJcblxyXG4gICAgLy8gQ291bnRcclxuICAgIGNvbnN0IGNvdW50U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY291bnRTcGFuLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGNvdW50U3Bhbi5zdHlsZS5ib3R0b20gPSAnMnB4JztcclxuICAgIGNvdW50U3Bhbi5zdHlsZS5yaWdodCA9ICcycHgnO1xyXG4gICAgY291bnRTcGFuLnN0eWxlLmZvbnRTaXplID0gJzEycHgnO1xyXG4gICAgY291bnRTcGFuLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XHJcbiAgICBjb3VudFNwYW4uc3R5bGUudGV4dFNoYWRvdyA9ICcxcHggMXB4IDAgIzAwMCc7XHJcbiAgICBjb3VudFNwYW4uaW5uZXJUZXh0ID0gaW52ZW50b3J5Q291bnRzW2ldLnRvU3RyaW5nKCk7XHJcbiAgICBzbG90LmFwcGVuZENoaWxkKGNvdW50U3Bhbik7XHJcblxyXG4gICAgc2xvdHMucHVzaCh7IGRpdjogc2xvdCwgY291bnQ6IGNvdW50U3BhbiB9KTtcclxuICAgIGhvdGJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChzbG90KTtcclxufVxyXG5cclxuLy8gLS0tIEV4cGFuZGVkIEludmVudG9yeSBMb2dpYyAtLS1cclxuLy8gNCBSb3dzIG9mIDkuIFJvdyAwIGlzIEhvdGJhci4gUm93cyAxLTMgYXJlIE1haW4gSW52ZW50b3J5LlxyXG5jb25zdCBUT1RBTF9TTE9UUyA9IDM2O1xyXG4vLyBQYWQgaW52ZW50b3J5IHRvIDM2XHJcbndoaWxlIChpbnZlbnRvcnkubGVuZ3RoIDwgVE9UQUxfU0xPVFMpIGludmVudG9yeS5wdXNoKDApO1xyXG53aGlsZSAoaW52ZW50b3J5Q291bnRzLmxlbmd0aCA8IFRPVEFMX1NMT1RTKSBpbnZlbnRvcnlDb3VudHMucHVzaCgwKTtcclxuXHJcbi8vIEludmVudG9yeSBVSSBPdmVybGF5XHJcbmNvbnN0IGludmVudG9yeU92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuaW52ZW50b3J5T3ZlcmxheS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbmludmVudG9yeU92ZXJsYXkuc3R5bGUudG9wID0gJzUwJSc7XHJcbmludmVudG9yeU92ZXJsYXkuc3R5bGUubGVmdCA9ICc1MCUnO1xyXG5pbnZlbnRvcnlPdmVybGF5LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknO1xyXG5pbnZlbnRvcnlPdmVybGF5LnN0eWxlLndpZHRoID0gJzQwMHB4JztcclxuaW52ZW50b3J5T3ZlcmxheS5zdHlsZS5oZWlnaHQgPSAnMzAwcHgnO1xyXG5pbnZlbnRvcnlPdmVybGF5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsMCwwLDAuOCknO1xyXG5pbnZlbnRvcnlPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vIEhpZGRlbiBieSBkZWZhdWx0XHJcbmludmVudG9yeU92ZXJsYXkuc3R5bGUuZmxleFdyYXAgPSAnd3JhcCc7XHJcbmludmVudG9yeU92ZXJsYXkuc3R5bGUuZ2FwID0gJzRweCc7XHJcbmludmVudG9yeU92ZXJsYXkuc3R5bGUucGFkZGluZyA9ICcxMHB4JztcclxuaW52ZW50b3J5T3ZlcmxheS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnOHB4JztcclxuaW52ZW50b3J5T3ZlcmxheS5zdHlsZS56SW5kZXggPSAnMTAwJztcclxuaW52ZW50b3J5T3ZlcmxheS5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkICM1NTUnO1xyXG5nYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGludmVudG9yeU92ZXJsYXkpO1xyXG5cclxuY29uc3QgaW52U2xvdHM6IHsgZGl2OiBIVE1MRWxlbWVudCwgY291bnQ6IEhUTUxFbGVtZW50LCBpY29uOiBIVE1MRWxlbWVudCwgaW5kZXg6IG51bWJlciB9W10gPSBbXTtcclxubGV0IHN3YXBTb3VyY2VJbmRleCA9IC0xO1xyXG5sZXQgZHJhZ2dlZEl0ZW06IHsgdHlwZTogbnVtYmVyLCBjb3VudDogbnVtYmVyLCBzb3VyY2VJbmRleDogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUludmVudG9yeVNsb3RzKCkge1xyXG4gICAgaW52ZW50b3J5T3ZlcmxheS5pbm5lckhUTUwgPSAnJztcclxuICAgIGludlNsb3RzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgLy8gQ3JlYXRlIDM2IHNsb3RzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFRPVEFMX1NMT1RTOyBpKyspIHtcclxuICAgICAgICBjb25zdCBzbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2xvdC5zdHlsZS53aWR0aCA9ICc0MHB4JztcclxuICAgICAgICBzbG90LnN0eWxlLmhlaWdodCA9ICc0MHB4JztcclxuICAgICAgICBzbG90LnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgZ3JheSc7XHJcbiAgICAgICAgc2xvdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzMzMyc7XHJcbiAgICAgICAgc2xvdC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgc2xvdC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIHNsb3Quc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xyXG4gICAgICAgIHNsb3Quc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcclxuICAgICAgICBzbG90LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICAgICAgICBzbG90LnN0eWxlLmZvbnRGYW1pbHkgPSAnbW9ub3NwYWNlJztcclxuICAgICAgICBzbG90LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuXHJcbiAgICAgICAgLy8gRXZlbnQ6IERyYWcgU3RhcnRcclxuICAgICAgICBzbG90LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW52ZW50b3J5Q291bnRzW2ldID09PSAwKSByZXR1cm47IC8vIE5vdGhpbmcgdG8gZHJhZ1xyXG5cclxuICAgICAgICAgICAgZHJhZ2dlZEl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBpbnZlbnRvcnlbaV0sXHJcbiAgICAgICAgICAgICAgICBjb3VudDogaW52ZW50b3J5Q291bnRzW2ldLFxyXG4gICAgICAgICAgICAgICAgc291cmNlSW5kZXg6IGlcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIFZpc3VhbCBmZWVkYmFja1xyXG4gICAgICAgICAgICBzbG90LnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRXZlbnQ6IFN3YXBcclxuICAgICAgICBzbG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3dhcFNvdXJjZUluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gU2VsZWN0XHJcbiAgICAgICAgICAgICAgICBzd2FwU291cmNlSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgc2xvdC5zdHlsZS5ib3JkZXJDb2xvciA9ICd5ZWxsb3cnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU3dhcFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gc3dhcFNvdXJjZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHN0ID0gaTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTd2FwIFR5cGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBUeXBlID0gaW52ZW50b3J5W3NyY107XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlbc3JjXSA9IGludmVudG9yeVtkc3RdO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5W2RzdF0gPSB0ZW1wVHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTd2FwIENvdW50XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wQ291bnQgPSBpbnZlbnRvcnlDb3VudHNbc3JjXTtcclxuICAgICAgICAgICAgICAgIGludmVudG9yeUNvdW50c1tzcmNdID0gaW52ZW50b3J5Q291bnRzW2RzdF07XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlDb3VudHNbZHN0XSA9IHRlbXBDb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2FwU291cmNlSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUludmVudG9yeVVJKCk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVIb3RiYXJVSSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEljb25cclxuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaWNvbi5zdHlsZS53aWR0aCA9ICcyMHB4JztcclxuICAgICAgICBpY29uLnN0eWxlLmhlaWdodCA9ICcyMHB4JztcclxuICAgICAgICBzbG90LmFwcGVuZENoaWxkKGljb24pO1xyXG5cclxuICAgICAgICAvLyBDb3VudFxyXG4gICAgICAgIGNvbnN0IGNvdW50U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvdW50U3Bhbi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgY291bnRTcGFuLnN0eWxlLmJvdHRvbSA9ICcycHgnO1xyXG4gICAgICAgIGNvdW50U3Bhbi5zdHlsZS5yaWdodCA9ICcycHgnO1xyXG4gICAgICAgIGNvdW50U3Bhbi5zdHlsZS5mb250U2l6ZSA9ICcxMnB4JztcclxuICAgICAgICBjb3VudFNwYW4uc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcclxuICAgICAgICBjb3VudFNwYW4uc3R5bGUudGV4dFNoYWRvdyA9ICcxcHggMXB4IDAgIzAwMCc7XHJcbiAgICAgICAgc2xvdC5hcHBlbmRDaGlsZChjb3VudFNwYW4pO1xyXG5cclxuICAgICAgICBpbnZTbG90cy5wdXNoKHsgZGl2OiBzbG90LCBjb3VudDogY291bnRTcGFuLCBpY29uOiBpY29uLCBpbmRleDogaSB9KTtcclxuICAgICAgICBpbnZlbnRvcnlPdmVybGF5LmFwcGVuZENoaWxkKHNsb3QpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBEcmFnLWFuZC1kcm9wIGhhbmRsZXJzXHJcbmludmVudG9yeU92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgIGlmICghZHJhZ2dlZEl0ZW0pIHJldHVybjtcclxuXHJcbiAgICAvLyBGaW5kIHNsb3QgdW5kZXIgY3Vyc29yXHJcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcclxuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XHJcblxyXG4gICAgLy8gSGlnaGxpZ2h0IGRyb3AgdGFyZ2V0XHJcbiAgICBpbnZTbG90cy5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgIGlmIChzLmRpdi5jb250YWlucyh0YXJnZXQgYXMgTm9kZSkgJiYgcy5pbmRleCAhPT0gZHJhZ2dlZEl0ZW0hLnNvdXJjZUluZGV4KSB7XHJcbiAgICAgICAgICAgIHMuZGl2LnN0eWxlLmJvcmRlckNvbG9yID0gJ3llbGxvdyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzLmluZGV4ICE9PSBkcmFnZ2VkSXRlbSEuc291cmNlSW5kZXgpIHtcclxuICAgICAgICAgICAgcy5kaXYuc3R5bGUuYm9yZGVyQ29sb3IgPSAocy5pbmRleCA8IDkpID8gJyNhYWEnIDogJyM1NTUnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmludmVudG9yeU92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB7XHJcbiAgICBpZiAoIWRyYWdnZWRJdGVtKSByZXR1cm47XHJcblxyXG4gICAgLy8gRmluZCB0YXJnZXQgc2xvdFxyXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcbiAgICBjb25zdCB0YXJnZXRTbG90ID0gaW52U2xvdHMuZmluZChzID0+IHMuZGl2LmNvbnRhaW5zKHRhcmdldCBhcyBOb2RlKSk7XHJcblxyXG4gICAgaWYgKHRhcmdldFNsb3QgJiYgdGFyZ2V0U2xvdC5pbmRleCAhPT0gZHJhZ2dlZEl0ZW0uc291cmNlSW5kZXgpIHtcclxuICAgICAgICAvLyBTd2FwIGl0ZW1zXHJcbiAgICAgICAgY29uc3Qgc3JjID0gZHJhZ2dlZEl0ZW0uc291cmNlSW5kZXg7XHJcbiAgICAgICAgY29uc3QgZHN0ID0gdGFyZ2V0U2xvdC5pbmRleDtcclxuXHJcbiAgICAgICAgY29uc3QgdGVtcFR5cGUgPSBpbnZlbnRvcnlbc3JjXTtcclxuICAgICAgICBpbnZlbnRvcnlbc3JjXSA9IGludmVudG9yeVtkc3RdO1xyXG4gICAgICAgIGludmVudG9yeVtkc3RdID0gdGVtcFR5cGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHRlbXBDb3VudCA9IGludmVudG9yeUNvdW50c1tzcmNdO1xyXG4gICAgICAgIGludmVudG9yeUNvdW50c1tzcmNdID0gaW52ZW50b3J5Q291bnRzW2RzdF07XHJcbiAgICAgICAgaW52ZW50b3J5Q291bnRzW2RzdF0gPSB0ZW1wQ291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzZXQgZHJhZyBzdGF0ZVxyXG4gICAgZHJhZ2dlZEl0ZW0gPSBudWxsO1xyXG4gICAgdXBkYXRlSW52ZW50b3J5VUkoKTtcclxuICAgIHVwZGF0ZUhvdGJhclVJKCk7XHJcbn0pO1xyXG5cclxuY3JlYXRlSW52ZW50b3J5U2xvdHMoKTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUludmVudG9yeVVJKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBUT1RBTF9TTE9UUzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgc2xvdCA9IGludlNsb3RzW2ldO1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBpbnZlbnRvcnlbaV07XHJcbiAgICAgICAgY29uc3QgY291bnQgPSBpbnZlbnRvcnlDb3VudHNbaV07XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBJY29uIHdpdGggYWN0dWFsIHRleHR1cmUgcmVwcmVzZW50YXRpb25cclxuICAgICAgICBjb25zdCBpY29uID0gc2xvdC5pY29uO1xyXG4gICAgICAgIGlmICh0eXBlID09PSAwKSBpY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjY2JzsgLy8gU3RvbmVcclxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAxKSBpY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODU1JzsgLy8gRGlydCAgXHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gMikge1xyXG4gICAgICAgICAgICAvLyBHcmFzcyAtIHNob3cgZ3JlZW4gdG9wXHJcbiAgICAgICAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNGE0IDAlLCAjNGE0IDYwJSwgIzg1NSA2MCUsICM4NTUgMTAwJSknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSA0KSBpY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYzIyJzsgLy8gVE5UXHJcbiAgICAgICAgZWxzZSBpY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBDb3VudFxyXG4gICAgICAgIHNsb3QuY291bnQuaW5uZXJUZXh0ID0gY291bnQgPiAwID8gY291bnQudG9TdHJpbmcoKSA6ICcnO1xyXG5cclxuICAgICAgICAvLyBSZXNldCBvcGFjaXR5IGFuZCBib3JkZXJcclxuICAgICAgICBzbG90LmRpdi5zdHlsZS5vcGFjaXR5ID0gKGRyYWdnZWRJdGVtICYmIGRyYWdnZWRJdGVtLnNvdXJjZUluZGV4ID09PSBpKSA/ICcwLjUnIDogJzEuMCc7XHJcbiAgICAgICAgc2xvdC5kaXYuc3R5bGUuYm9yZGVyQ29sb3IgPSAoaSA8IDkpID8gJyNhYWEnIDogJyM1NTUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVJbnZlbnRvcnkoKSB7XHJcbiAgICBpZiAoaW52ZW50b3J5T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgICBpbnZlbnRvcnlPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgZG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrKCk7IC8vIEZyZWUgbW91c2VcclxuICAgICAgICB1cGRhdGVJbnZlbnRvcnlVSSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpbnZlbnRvcnlPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgY2FudmFzLnJlcXVlc3RQb2ludGVyTG9jaygpOyAvLyBMb2NrIG1vdXNlXHJcbiAgICAgICAgc3dhcFNvdXJjZUluZGV4ID0gLTE7IC8vIENhbmNlbCBzd2FwXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUhvdGJhclVJKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcclxuICAgICAgICBjb25zdCB0eXBlID0gaW52ZW50b3J5W2ldO1xyXG5cclxuICAgICAgICBjb25zdCBzbG90RGl2ID0gc2xvdHNbaV0uZGl2O1xyXG4gICAgICAgIGNvbnN0IGljb24gPSBzbG90RGl2LmZpcnN0RWxlbWVudENoaWxkIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBNYXRjaCBpbnZlbnRvcnkgVUkgc3R5bGluZ1xyXG4gICAgICAgIGlmICh0eXBlID09PSAwKSBpY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjY2JztcclxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAxKSBpY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODU1JztcclxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAyKSB7XHJcbiAgICAgICAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNGE0IDAlLCAjNGE0IDYwJSwgIzg1NSA2MCUsICM4NTUgMTAwJSknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSA0KSBpY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYzIyJztcclxuICAgICAgICBlbHNlIGljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuXHJcbiAgICAgICAgc2xvdHNbaV0uY291bnQuaW5uZXJUZXh0ID0gaW52ZW50b3J5Q291bnRzW2ldLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIGlmIChpID09PSBzZWxlY3RlZFNsb3QpIHtcclxuICAgICAgICAgICAgc2xvdHNbaV0uZGl2LnN0eWxlLmJvcmRlckNvbG9yID0gJ3doaXRlJztcclxuICAgICAgICAgICAgc2xvdHNbaV0uZGl2LnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxLjEpJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzbG90c1tpXS5kaXYuc3R5bGUuYm9yZGVyQ29sb3IgPSAnZ3JheSc7XHJcbiAgICAgICAgICAgIHNsb3RzW2ldLmRpdi5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMS4wKSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbnVwZGF0ZUhvdGJhclVJKCk7XHJcblxyXG5jb25zdCBrZXlzOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgLy8gU3RyaWN0IElucHV0IEJsb2NraW5nOlxyXG4gICAgLy8gSWYgR2FtZSBBY3RpdmU6IEJsb2NrIFdBU0QvU3BhY2UvQXJyb3dzL0kvRi9OdW1iZXJzIGZyb20gc2Nyb2xsaW5nL3R5cGluZyBjb250ZXh0LlxyXG4gICAgLy8gSWYgR2FtZSBQYXVzZWQ6IEFsbG93IEVWRVJZVEhJTkcgKGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvcikuXHJcblxyXG4gICAgaWYgKCFpc0dhbWVBY3RpdmUpIHJldHVybjsgLy8gQWxsb3cgdHlwaW5nL3Njcm9sbGluZyBpZiBwYXVzZWRcclxuXHJcbiAgICBpZiAoZS5jb2RlID09PSAnU3BhY2UnIHx8IGUuY29kZS5zdGFydHNXaXRoKCdBcnJvdycpIHx8IGUuY29kZSA9PT0gJ0tleVcnIHx8IGUuY29kZSA9PT0gJ0tleVMnIHx8IGUuY29kZSA9PT0gJ0tleUEnIHx8IGUuY29kZSA9PT0gJ0tleUQnKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRvZ2dsZSBJbnZlbnRvcnkgKEkpIC0gT25seSBpZiBhY3RpdmVcclxuICAgIGlmIChlLmNvZGUgPT09ICdLZXlJJykge1xyXG4gICAgICAgIHRvZ2dsZUludmVudG9yeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhvdGtleXMvQWN0aW9ucyBvbmx5IGlmIGFjdGl2ZVxyXG4gICAga2V5c1tlLmNvZGVdID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBFeGl0IEludmVudG9yeSAoRXNjYXBlKVxyXG4gICAgaWYgKGUuY29kZSA9PT0gJ0VzY2FwZScgJiYgaW52ZW50b3J5T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcclxuICAgICAgICB0b2dnbGVJbnZlbnRvcnkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIb3RrZXkgMS05XHJcbiAgICBpZiAoZS5jb2RlID09PSAnS2V5RScpIHtcclxuICAgICAgICBjb25zdCBkaXN0ID0gdmVjMy5kaXN0YW5jZShjYW1lcmFQb3NpdGlvbiwgc3BpZGVyLnBvc2l0aW9uKTtcclxuICAgICAgICBpZiAoaXNSaWRpbmcpIHtcclxuICAgICAgICAgICAgaXNSaWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gRGlzbW91bnQgbmVhciBzcGlkZXIgcG9zaXRpb25cclxuICAgICAgICB9IGVsc2UgaWYgKGRpc3QgPCA1LjApIHtcclxuICAgICAgICAgICAgaXNSaWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBFeHBsb3Npb24gKEYpXHJcbiAgICBpZiAoZS5jb2RlID09PSAnS2V5RicpIHtcclxuICAgICAgICBpZiAoY3VycmVudEhpdCAmJiBjdXJyZW50SGl0LmluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAvLyBVbnVzZWQgLTEgaW5kZXggaW4gY3VycmVudCBpbXBsZW1lbnRhdGlvbiwgYnV0IGN1cnJlbnRIaXQgaW1wbGllcyB2YWxpZCBibG9ja1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBY3R1YWxseSwgY2hlY2sgY3VycmVudEhpdFxyXG4gICAgICAgIGlmIChjdXJyZW50SGl0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHB4ID0gTWF0aC5yb3VuZChjdXJyZW50SGl0LnBvaW50WzBdKTtcclxuICAgICAgICAgICAgY29uc3QgcHkgPSBNYXRoLnJvdW5kKGN1cnJlbnRIaXQucG9pbnRbMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBweiA9IE1hdGgucm91bmQoY3VycmVudEhpdC5wb2ludFsyXSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjeCA9IE1hdGguZmxvb3IocHggLyBDSFVOS19TSVpFKTtcclxuICAgICAgICAgICAgY29uc3QgY3ogPSBNYXRoLmZsb29yKHB6IC8gQ0hVTktfU0laRSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGAke2N4fSwke2N6fWA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaHVuayA9IGNodW5rcy5nZXQoa2V5KTtcclxuICAgICAgICAgICAgaWYgKGNodW5rKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBseCA9IHB4IC0gY3ggKiBDSFVOS19TSVpFO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbHogPSBweiAtIGN6ICogQ0hVTktfU0laRTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IGdldEdyaWRJbmRleChseCwgcHksIGx6KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBUTlRcclxuICAgICAgICAgICAgICAgIGlmIChpZHggIT09IC0xICYmIGNodW5rLmdyaWRbaWR4XSA9PT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVYUExPREVcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIubG9nKCdCT09NIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluWCA9IHB4IC0gcmFkaXVzOyBjb25zdCBtYXhYID0gcHggKyByYWRpdXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluWSA9IHB5IC0gcmFkaXVzOyBjb25zdCBtYXhZID0gcHkgKyByYWRpdXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluWiA9IHB6IC0gcmFkaXVzOyBjb25zdCBtYXhaID0gcHogKyByYWRpdXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhlbHBlciB0byByZWJ1aWxkIHNpbmdsZSBjaHVuayBtZXNoXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVidWlsZENodW5rTWVzaCA9IChjaHVuazogQ2h1bmtEYXRhLCBjeDogbnVtYmVyLCBjejogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNodW5rLnZpc2libGUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBDSFVOS19TSVpFOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgQ0hVTktfU0laRTsgeisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd3ggPSBjeCAqIENIVU5LX1NJWkUgKyB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHd6ID0gY3ogKiBDSFVOS19TSVpFICsgejtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGYXN0IHNjYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gLTMwOyB5IDw9IDMwOyB5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gZ2V0R3JpZEluZGV4KHgsIHksIHopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSAtMSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBjaHVuay5ncmlkW2lkeF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleHBvc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU29saWQgPSAobng6IG51bWJlciwgbnk6IG51bWJlciwgbno6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbklkeCA9IGdldEdyaWRJbmRleChueCwgbnksIG56KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuSWR4ID09PSAtMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNodW5rLmdyaWRbbklkeF0gIT09IDA7IC8vIE5vdCAwIG1lYW5zIHNvbGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXYWl0LCBhaXIgaXMgMC4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzU29saWQoeCArIDEsIHksIHopKSBleHBvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzU29saWQoeCAtIDEsIHksIHopKSBleHBvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzU29saWQoeCwgeSArIDEsIHopKSBleHBvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzU29saWQoeCwgeSAtIDEsIHopKSBleHBvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzU29saWQoeCwgeSwgeiArIDEpKSBleHBvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzU29saWQoeCwgeSwgeiAtIDEpKSBleHBvc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHBvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaHVuay52aXNpYmxlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogbmV3IEZsb2F0MzJBcnJheShbd3gsIHksIHd6XSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSAtIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2h1bmtzVG9VcGRhdGUgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IG1pblg7IHggPD0gbWF4WDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSBtaW5ZOyB5IDw9IG1heFk7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeiA9IG1pblo7IHogPD0gbWF4WjsgeisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHggPSB4IC0gcHg7IGNvbnN0IGR5ID0geSAtIHB5OyBjb25zdCBkeiA9IHogLSBwejtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHggKiBkeCArIGR5ICogZHkgKyBkeiAqIGR6IDw9IHJhZGl1cyAqIHJhZGl1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEZXN0cm95XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRDeCA9IE1hdGguZmxvb3IoeCAvIENIVU5LX1NJWkUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0Q3ogPSBNYXRoLmZsb29yKHogLyBDSFVOS19TSVpFKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdEtleSA9IGAke3RDeH0sJHt0Q3p9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdENodW5rID0gY2h1bmtzLmdldCh0S2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0Q2h1bmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRMeCA9IHggLSB0Q3ggKiBDSFVOS19TSVpFO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdEx6ID0geiAtIHRDeiAqIENIVU5LX1NJWkU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0SWR4ID0gZ2V0R3JpZEluZGV4KHRMeCwgeSwgdEx6KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0SWR4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRDaHVuay5ncmlkW3RJZHhdID0gMDsgLy8gQWlyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmtzVG9VcGRhdGUuYWRkKHRLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBSZWJ1aWxkIENodW5rc1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY0tleSBvZiBjaHVua3NUb1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBbY2N4LCBjY3pdID0gY0tleS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWJ1aWxkQ2h1bmtNZXNoKGNodW5rcy5nZXQoY0tleSkhLCBjY3gsIGNjeik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlYnVpbGRXb3JsZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5ID49ICcxJyAmJiBlLmtleSA8PSAnOScpIHtcclxuICAgICAgICBzZWxlY3RlZFNsb3QgPSBwYXJzZUludChlLmtleSkgLSAxO1xyXG4gICAgICAgIHVwZGF0ZUhvdGJhclVJKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gTW91c2UgV2hlZWxcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgKGUpID0+IHtcclxuICAgIGlmICghaXNHYW1lQWN0aXZlKSByZXR1cm47IC8vIFN0cmljdCBJc29sYXRpb246IEFsbG93IHNjcm9sbCBpZiBwYXVzZWRcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIEJsb2NrIHBhZ2Ugc2Nyb2xsIGlmIGFjdGl2ZVxyXG5cclxuICAgIGlmIChpc1JpZGluZykge1xyXG4gICAgICAgIC8vIFpvb20gQ2FtZXJhXHJcbiAgICAgICAgY2FtZXJhWm9vbSArPSBlLmRlbHRhWSAqIDAuMDE7XHJcbiAgICAgICAgLy8gQWxsb3cgZ3JlYXRlciB6b29tIHdoZW4gcmlkaW5nIHNwaWRlciBmb3IgYmV0dGVyIHZpZXdcclxuICAgICAgICBjb25zdCBtYXhab29tID0gNDAuMDtcclxuICAgICAgICBjYW1lcmFab29tID0gTWF0aC5tYXgoMi4wLCBNYXRoLm1pbihtYXhab29tLCBjYW1lcmFab29tKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEludmVudG9yeSBTY3JvbGxcclxuICAgICAgICBpZiAoZS5kZWx0YVkgPiAwKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkU2xvdCA9IChzZWxlY3RlZFNsb3QgKyAxKSAlIDk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRTbG90ID0gKHNlbGVjdGVkU2xvdCAtIDEgKyA5KSAlIDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVwZGF0ZUhvdGJhclVJKCk7XHJcbiAgICB9XHJcbn0sIHsgcGFzc2l2ZTogZmFsc2UgfSk7IC8vIFJFUVVJUkVEIGZvciBwcmV2ZW50RGVmYXVsdCB0byB3b3JrIG9uIHdoZWVsIGV2ZW50c1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHsga2V5c1tlLmNvZGVdID0gZmFsc2U7IH0pO1xyXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGNhbnZhcy5yZXF1ZXN0UG9pbnRlckxvY2soKTsgfSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgaWYgKGRvY3VtZW50LnBvaW50ZXJMb2NrRWxlbWVudCA9PT0gY2FudmFzKSB7XHJcbiAgICAgICAgY2FtZXJhWWF3IC09IGUubW92ZW1lbnRYICogbW91c2VTZW5zaXRpdml0eTtcclxuXHJcbiAgICAgICAgLy8gSW52ZXJ0IFBpdGNoIGlmIDNyZCBQZXJzb24gT24tRm9vdFxyXG4gICAgICAgIC8vIE5vdGU6IGlzVGhpcmRQZXJzb25PbkZvb3QgaXMgbG9jYWwgdG8gZnJhbWUoKSwgc28gd2UgY2hlY2sgRE9NIGVsZW1lbnQgZGlyZWN0bHkgaGVyZS5cclxuICAgICAgICAvLyBPciBiZXR0ZXIsIGNoZWNrIHRoZSBnbG9iYWwgY2hlY2tib3ggcmVmZXJlbmNlLlxyXG4gICAgICAgIC8vIGNoa1RoaXJkUGVyc29uIGlzIGdsb2JhbC5cclxuXHJcbiAgICAgICAgbGV0IHBpdGNoRGVsdGEgPSBlLm1vdmVtZW50WSAqIG1vdXNlU2Vuc2l0aXZpdHk7XHJcbiAgICAgICAgaWYgKGNoa1RoaXJkUGVyc29uICYmIGNoa1RoaXJkUGVyc29uLmNoZWNrZWQgJiYgIWlzUmlkaW5nKSB7XHJcbiAgICAgICAgICAgIC8vIEludmVydCBmb3IgXCJNb3VzZSBEb3duID0gTG9vayBEb3duXCIgZmVlbCBpbiAzcmQgcGVyc29uXHJcbiAgICAgICAgICAgIC8vIEN1cnJlbnQ6IFBpdGNoLSA9IFVwLiBQaXRjaCsgPSBEb3duLlxyXG4gICAgICAgICAgICAvLyBNb3VzZSBEb3duIChQb3MgWSkuIFdlIHdhbnQgUGl0Y2grIChEb3duKS5cclxuICAgICAgICAgICAgLy8gT3JpZ2luYWxseTogY2FtZXJhUGl0Y2ggLT0gZGVsdGEuIChQb3MgWSAtPiBQaXRjaC0gLT4gVXApLlxyXG4gICAgICAgICAgICAvLyBOZXc6IGNhbWVyYVBpdGNoICs9IGRlbHRhLiAoUG9zIFkgLT4gUGl0Y2grIC0+IERvd24pLlxyXG4gICAgICAgICAgICAvLyBTbyB3ZSBqdXN0IGZsaXAgZGVsdGEgc2lnbj8gXHJcbiAgICAgICAgICAgIC8vIExvZ2ljOiBjYW1lcmFQaXRjaCAtPSAoZmxpcHBlZF9kZWx0YSkuIFxyXG4gICAgICAgICAgICAvLyBJZiB3ZSB3YW50ICs9LCB0aGVuIGZsaXBwZWRfZGVsdGEgbXVzdCBiZSBuZWdhdGl2ZSBvZiBvcmlnaW5hbC5cclxuXHJcbiAgICAgICAgICAgIHBpdGNoRGVsdGEgPSAtcGl0Y2hEZWx0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhbWVyYVBpdGNoIC09IHBpdGNoRGVsdGE7XHJcbiAgICAgICAgY2FtZXJhUGl0Y2ggPSBNYXRoLm1heCgtTWF0aC5QSSAvIDIgKyAwLjEsIE1hdGgubWluKE1hdGguUEkgLyAyIC0gMC4xLCBjYW1lcmFQaXRjaCkpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIC0tLSBSYXljYXN0aW5nIC0tLVxyXG5mdW5jdGlvbiBnZXRDYW1lcmFGb3J3YXJkKCkge1xyXG4gICAgY29uc3QgZm9yd2FyZCA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICBmb3J3YXJkWzBdID0gTWF0aC5jb3MoY2FtZXJhUGl0Y2gpICogTWF0aC5zaW4oY2FtZXJhWWF3KTtcclxuICAgIGZvcndhcmRbMV0gPSBNYXRoLnNpbihjYW1lcmFQaXRjaCk7XHJcbiAgICBmb3J3YXJkWzJdID0gTWF0aC5jb3MoY2FtZXJhUGl0Y2gpICogTWF0aC5jb3MoY2FtZXJhWWF3KTtcclxuICAgIHZlYzMubm9ybWFsaXplKGZvcndhcmQsIGZvcndhcmQpO1xyXG4gICAgcmV0dXJuIGZvcndhcmQ7XHJcbn1cclxuXHJcbi8vIFJheSB2cyBBQUJCXHJcbmZ1bmN0aW9uIGludGVyc2VjdFJheUFBQkIob3JpZ2luOiB2ZWMzLCBkaXI6IHZlYzMsIGJveE1pbjogdmVjMywgYm94TWF4OiB2ZWMzKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICBsZXQgdG1pbiA9IChib3hNaW5bMF0gLSBvcmlnaW5bMF0pIC8gZGlyWzBdO1xyXG4gICAgbGV0IHRtYXggPSAoYm94TWF4WzBdIC0gb3JpZ2luWzBdKSAvIGRpclswXTtcclxuICAgIGlmICh0bWluID4gdG1heCkgW3RtaW4sIHRtYXhdID0gW3RtYXgsIHRtaW5dO1xyXG5cclxuICAgIGxldCB0eW1pbiA9IChib3hNaW5bMV0gLSBvcmlnaW5bMV0pIC8gZGlyWzFdO1xyXG4gICAgbGV0IHR5bWF4ID0gKGJveE1heFsxXSAtIG9yaWdpblsxXSkgLyBkaXJbMV07XHJcbiAgICBpZiAodHltaW4gPiB0eW1heCkgW3R5bWluLCB0eW1heF0gPSBbdHltYXgsIHR5bWluXTtcclxuXHJcbiAgICBpZiAoKHRtaW4gPiB0eW1heCkgfHwgKHR5bWluID4gdG1heCkpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKHR5bWluID4gdG1pbikgdG1pbiA9IHR5bWluO1xyXG4gICAgaWYgKHR5bWF4IDwgdG1heCkgdG1heCA9IHR5bWF4O1xyXG5cclxuICAgIGxldCB0em1pbiA9IChib3hNaW5bMl0gLSBvcmlnaW5bMl0pIC8gZGlyWzJdO1xyXG4gICAgbGV0IHR6bWF4ID0gKGJveE1heFsyXSAtIG9yaWdpblsyXSkgLyBkaXJbMl07XHJcbiAgICBpZiAodHptaW4gPiB0em1heCkgW3R6bWluLCB0em1heF0gPSBbdHptYXgsIHR6bWluXTtcclxuXHJcbiAgICBpZiAoKHRtaW4gPiB0em1heCkgfHwgKHR6bWluID4gdG1heCkpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKHR6bWluID4gdG1pbikgdG1pbiA9IHR6bWluO1xyXG4gICAgaWYgKHR6bWF4IDwgdG1heCkgdG1heCA9IHR6bWF4O1xyXG5cclxuICAgIGlmICh0bWF4IDwgMCkgcmV0dXJuIG51bGw7IC8vIEJlaGluZFxyXG4gICAgLy8gSWYgdG1pbiA8IDAgKGluc2lkZSBibG9jayksIHJldHVybiB0bWF4PyBPciAwPyBMZXQncyByZXR1cm4gdG1pbiBpZiB2YWxpZCAocG9zaXRpdmUpLCBlbHNlIDAgaWYgaW5zaWRlP1xyXG4gICAgLy8gQWN0dWFsbHkgc3RhbmRhcmQgaW1wbGVtZW50YXRpb24gaGFuZGxlcyBzdGFydCBpbnNpZGUuXHJcbiAgICByZXR1cm4gdG1pbiA+PSAwID8gdG1pbiA6IHRtYXg7XHJcbn1cclxuXHJcblxyXG4vLyAtLS0gT3V0bGluZSBSZW5kZXJlciAtLS1cclxuLy8gTmV3IHNoYWRlciBmb3IgVEhJQ0sgQkxBQ0sgTElORVMgKENhZ2UgRWZmZWN0KVxyXG5jb25zdCBvdXRsaW5lU2hhZGVyQ29kZSA9IGBcclxuc3RydWN0IFVuaWZvcm1zIHtcclxuICAgIG1vZGVsVmlld1Byb2plY3Rpb25NYXRyaXggOiBtYXQ0eDQ8ZjMyPixcclxuICAgIHZpZXdQcm9qZWN0aW9uTWF0cml4IDogbWF0NHg0PGYzMj4sXHJcbn1cclxuc3RydWN0IE91dGxpbmVVbmlmb3JtcyB7XHJcbiAgICBwb3NpdGlvbiA6IHZlYzQ8ZjMyPiwgXHJcbn1cclxuQGdyb3VwKDApIEBiaW5kaW5nKDApIHZhcjx1bmlmb3JtPiBnbG9iYWxVbmlmb3JtcyA6IFVuaWZvcm1zO1xyXG5AZ3JvdXAoMCkgQGJpbmRpbmcoMSkgdmFyPHVuaWZvcm0+IG91dGxpbmVVbmlmb3JtcyA6IE91dGxpbmVVbmlmb3JtcztcclxuXHJcbnN0cnVjdCBWZXJ0ZXhPdXRwdXQge1xyXG4gICAgQGJ1aWx0aW4ocG9zaXRpb24pIFBvc2l0aW9uIDogdmVjNDxmMzI+LFxyXG4gICAgQGxvY2F0aW9uKDApIHV2IDogdmVjMjxmMzI+LFxyXG59XHJcblxyXG5AdmVydGV4XHJcbmZuIG1haW5fdnMoQGxvY2F0aW9uKDApIHBvc2l0aW9uIDogdmVjMzxmMzI+LCBAbG9jYXRpb24oMSkgdXYgOiB2ZWMyPGYzMj4pIC0+IFZlcnRleE91dHB1dCB7XHJcbiAgICB2YXIgb3V0cHV0IDogVmVydGV4T3V0cHV0O1xyXG4gICAgLy8gTW92ZSB0byBibG9jayBwb3NpdGlvblxyXG4gICAgbGV0IHdvcmxkUG9zID0gcG9zaXRpb24gKyBvdXRsaW5lVW5pZm9ybXMucG9zaXRpb24ueHl6OyBcclxuICAgIG91dHB1dC5Qb3NpdGlvbiA9IGdsb2JhbFVuaWZvcm1zLnZpZXdQcm9qZWN0aW9uTWF0cml4ICogdmVjNDxmMzI+KHdvcmxkUG9zLCAxLjApO1xyXG4gICAgb3V0cHV0LnV2ID0gdXY7XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XHJcblxyXG5AZnJhZ21lbnRcclxuZm4gbWFpbl9mcyhpbnB1dDogVmVydGV4T3V0cHV0KSAtPiBAbG9jYXRpb24oMCkgdmVjNDxmMzI+IHtcclxuICAgIC8vIFRoaWNrIGJsYWNrIGxpbmVzIGJhc2VkIG9uIFVWIGVkZ2UgZGlzdGFuY2VcclxuICAgIGxldCB0aGlja25lc3MgPSAwLjA1OyAvLyA1JSBib3JkZXIgdGhpY2tuZXNzXHJcbiAgICAvLyBDaGVjayBpZiBjbG9zZSB0byBhbnkgZWRnZVxyXG4gICAgbGV0IG5lYXJFZGdlWCA9IGlucHV0LnV2LnggPCB0aGlja25lc3MgfHwgaW5wdXQudXYueCA+ICgxLjAgLSB0aGlja25lc3MpO1xyXG4gICAgbGV0IG5lYXJFZGdlWSA9IGlucHV0LnV2LnkgPCB0aGlja25lc3MgfHwgaW5wdXQudXYueSA+ICgxLjAgLSB0aGlja25lc3MpO1xyXG4gICAgXHJcbiAgICBpZiAobmVhckVkZ2VYIHx8IG5lYXJFZGdlWSkge1xyXG4gICAgICAgIHJldHVybiB2ZWM0PGYzMj4oMC4wLCAwLjAsIDAuMCwgMS4wKTsgLy8gU29saWQgQmxhY2tcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGlzY2FyZDsgLy8gVHJhbnNwYXJlbnQgY2VudGVyXHJcbiAgICByZXR1cm4gdmVjNDxmMzI+KDAuMCwgMC4wLCAwLjAsIDAuMCk7XHJcbn1cclxuYDtcclxuXHJcbmNvbnN0IG91dGxpbmVVbmlmb3JtQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XHJcbiAgICBzaXplOiAxNiwgLy8gdmVjNFxyXG4gICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0gfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCxcclxufSk7XHJcblxyXG5jb25zdCBvdXRsaW5lUGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xyXG4gICAgbGF5b3V0OiAnYXV0bycsXHJcbiAgICB2ZXJ0ZXg6IHtcclxuICAgICAgICBtb2R1bGU6IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoeyBjb2RlOiBvdXRsaW5lU2hhZGVyQ29kZSB9KSxcclxuICAgICAgICBlbnRyeVBvaW50OiAnbWFpbl92cycsXHJcbiAgICAgICAgYnVmZmVyczogW3tcclxuICAgICAgICAgICAgYXJyYXlTdHJpZGU6IDggKiA0LCAvLyBNYXRjaCBtYWluIHZlcnRleCBidWZmZXIgc3RyaWRlIChQb3MrVVYrTm9ybSlcclxuICAgICAgICAgICAgYXR0cmlidXRlczogW1xyXG4gICAgICAgICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMCwgb2Zmc2V0OiAwLCBmb3JtYXQ6ICdmbG9hdDMyeDMnIH0sIC8vIFBvc1xyXG4gICAgICAgICAgICAgICAgeyBzaGFkZXJMb2NhdGlvbjogMSwgb2Zmc2V0OiAxMiwgZm9ybWF0OiAnZmxvYXQzMngyJyB9IC8vIFVWXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XVxyXG4gICAgfSxcclxuICAgIGZyYWdtZW50OiB7XHJcbiAgICAgICAgbW9kdWxlOiBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogb3V0bGluZVNoYWRlckNvZGUgfSksXHJcbiAgICAgICAgZW50cnlQb2ludDogJ21haW5fZnMnLFxyXG4gICAgICAgIHRhcmdldHM6IFt7XHJcbiAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0LFxyXG4gICAgICAgICAgICBibGVuZDoge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHsgc3JjRmFjdG9yOiAnc3JjLWFscGhhJywgZHN0RmFjdG9yOiAnb25lLW1pbnVzLXNyYy1hbHBoYScsIG9wZXJhdGlvbjogJ2FkZCcgfSxcclxuICAgICAgICAgICAgICAgIGFscGhhOiB7IHNyY0ZhY3RvcjogJ3NyYy1hbHBoYScsIGRzdEZhY3RvcjogJ29uZS1taW51cy1zcmMtYWxwaGEnLCBvcGVyYXRpb246ICdhZGQnIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dXHJcbiAgICB9LFxyXG4gICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiAndHJpYW5nbGUtbGlzdCcsIGN1bGxNb2RlOiAnYmFjaycgfSxcclxuICAgIGRlcHRoU3RlbmNpbDoge1xyXG4gICAgICAgIGRlcHRoV3JpdGVFbmFibGVkOiB0cnVlLCAvLyBXcml0ZSBkZXB0aCBzbyBsaW5lcyBvY2NsdWRlIHByb3Blcmx5PyBPciBmYWxzZSB0byBzZWUgdGhyb3VnaD9cclxuICAgICAgICAvLyBVc2VyIHdhbnRzIFwiY2xlYXJseSB2aXNpYmxlXCIuIElmIGRlcHRoV3JpdGUgaXMgdHJ1ZSwgbGluZXMgYmVoaW5kIHdvbid0IHNob3cuXHJcbiAgICAgICAgLy8gQnV0IGxpbmVzIGFyZSBvbiB0aGUgZmFjZS5cclxuICAgICAgICAvLyBMZXQncyBrZWVwIGRlcHRoQ29tcGFyZSBsZXNzIChzdGFuZGFyZCkuXHJcbiAgICAgICAgZGVwdGhDb21wYXJlOiAnbGVzcycsXHJcbiAgICAgICAgZm9ybWF0OiAnZGVwdGgyNHBsdXMnLFxyXG4gICAgICAgIC8vIEJpYXMgdG8gZW5zdXJlIGxpbmVzIGRyYXcgT04gVE9QIG9mIHRoZSBibG9ja1xyXG4gICAgICAgIGRlcHRoQmlhczogLTEwMDAsXHJcbiAgICAgICAgZGVwdGhCaWFzU2xvcGVTY2FsZTogLTIuMFxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IG91dGxpbmVCaW5kR3JvdXAgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcclxuICAgIGxheW91dDogb3V0bGluZVBpcGVsaW5lLmdldEJpbmRHcm91cExheW91dCgwKSxcclxuICAgIGVudHJpZXM6IFtcclxuICAgICAgICB7IGJpbmRpbmc6IDAsIHJlc291cmNlOiB7IGJ1ZmZlcjogdW5pZm9ybUJ1ZmZlciB9IH0sXHJcbiAgICAgICAgeyBiaW5kaW5nOiAxLCByZXNvdXJjZTogeyBidWZmZXI6IG91dGxpbmVVbmlmb3JtQnVmZmVyIH0gfVxyXG4gICAgXVxyXG59KTtcclxuXHJcbi8vIFN0YXRlIGZvciByYXljYXN0XHJcbmxldCBjdXJyZW50SGl0OiB7IGluZGV4OiBudW1iZXIsIHBvaW50OiB2ZWMzLCBrZXk6IHN0cmluZywgZW1wdHk6IHZlYzMgfCBudWxsIH0gfCBudWxsID0gbnVsbDtcclxuLy8gLi4uIChyYXljYXN0IGxvZ2ljIHVuY2hhbmdlZCkgLi4uXHJcblxyXG5cclxuZnVuY3Rpb24gcmF5Y2FzdCgpIHtcclxuICAgIGNvbnN0IGZvcndhcmQgPSBnZXRDYW1lcmFGb3J3YXJkKCk7XHJcblxyXG4gICAgbGV0IHggPSBNYXRoLmZsb29yKGNhbWVyYVBvc2l0aW9uWzBdKTtcclxuICAgIGxldCB5ID0gTWF0aC5mbG9vcihjYW1lcmFQb3NpdGlvblsxXSk7XHJcbiAgICBsZXQgeiA9IE1hdGguZmxvb3IoY2FtZXJhUG9zaXRpb25bMl0pO1xyXG5cclxuICAgIGNvbnN0IHN0ZXBYID0gTWF0aC5zaWduKGZvcndhcmRbMF0pO1xyXG4gICAgY29uc3Qgc3RlcFkgPSBNYXRoLnNpZ24oZm9yd2FyZFsxXSk7XHJcbiAgICBjb25zdCBzdGVwWiA9IE1hdGguc2lnbihmb3J3YXJkWzJdKTtcclxuXHJcbiAgICBjb25zdCB0RGVsdGFYID0gc3RlcFggIT09IDAgPyAxIC8gTWF0aC5hYnMoZm9yd2FyZFswXSkgOiBJbmZpbml0eTtcclxuICAgIGNvbnN0IHREZWx0YVkgPSBzdGVwWSAhPT0gMCA/IDEgLyBNYXRoLmFicyhmb3J3YXJkWzFdKSA6IEluZmluaXR5O1xyXG4gICAgY29uc3QgdERlbHRhWiA9IHN0ZXBaICE9PSAwID8gMSAvIE1hdGguYWJzKGZvcndhcmRbMl0pIDogSW5maW5pdHk7XHJcblxyXG4gICAgbGV0IHRNYXhYID0gKHN0ZXBYID4gMCA/IE1hdGguZmxvb3IoY2FtZXJhUG9zaXRpb25bMF0pICsgMSAtIGNhbWVyYVBvc2l0aW9uWzBdIDogY2FtZXJhUG9zaXRpb25bMF0gLSBNYXRoLmZsb29yKGNhbWVyYVBvc2l0aW9uWzBdKSkgKiB0RGVsdGFYO1xyXG4gICAgbGV0IHRNYXhZID0gKHN0ZXBZID4gMCA/IE1hdGguZmxvb3IoY2FtZXJhUG9zaXRpb25bMV0pICsgMSAtIGNhbWVyYVBvc2l0aW9uWzFdIDogY2FtZXJhUG9zaXRpb25bMV0gLSBNYXRoLmZsb29yKGNhbWVyYVBvc2l0aW9uWzFdKSkgKiB0RGVsdGFZO1xyXG4gICAgbGV0IHRNYXhaID0gKHN0ZXBaID4gMCA/IE1hdGguZmxvb3IoY2FtZXJhUG9zaXRpb25bMl0pICsgMSAtIGNhbWVyYVBvc2l0aW9uWzJdIDogY2FtZXJhUG9zaXRpb25bMl0gLSBNYXRoLmZsb29yKGNhbWVyYVBvc2l0aW9uWzJdKSkgKiB0RGVsdGFaO1xyXG5cclxuICAgIGxldCBsYXN0WCA9IHgsIGxhc3RZID0geSwgbGFzdFogPSB6O1xyXG5cclxuICAgIGNvbnN0IHJhbmdlID0gODtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2UgKiAyOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjeCA9IE1hdGguZmxvb3IoeCAvIENIVU5LX1NJWkUpO1xyXG4gICAgICAgIGNvbnN0IGN6ID0gTWF0aC5mbG9vcih6IC8gQ0hVTktfU0laRSk7XHJcbiAgICAgICAgY29uc3QgY2h1bmsgPSBjaHVua3MuZ2V0KGAke2N4fSwke2N6fWApO1xyXG5cclxuICAgICAgICBsZXQgaGl0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGNodW5rKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGx4ID0geCAtIGN4ICogQ0hVTktfU0laRTtcclxuICAgICAgICAgICAgY29uc3QgbHogPSB6IC0gY3ogKiBDSFVOS19TSVpFO1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSBnZXRHcmlkSW5kZXgobHgsIHksIGx6KTtcclxuICAgICAgICAgICAgaWYgKGlkeCAhPT0gLTEgJiYgY2h1bmsuZ3JpZFtpZHhdICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBoaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gT3V0IG9mIGxvYWRlZCBjaHVua3M/IFRyZWF0IGFzIGFpci5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoaXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiAtMSxcclxuICAgICAgICAgICAgICAgIHBvaW50OiB2ZWMzLmZyb21WYWx1ZXMoeCwgeSwgeiksXHJcbiAgICAgICAgICAgICAgICBrZXk6IGAke3h9LCR7eX0sJHt6fWAsIC8vIExlZ2FjeSBrZXkgdXNhZ2U/IE9yIHVudXNlZC5cclxuICAgICAgICAgICAgICAgIGVtcHR5OiB2ZWMzLmZyb21WYWx1ZXMobGFzdFgsIGxhc3RZLCBsYXN0WilcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhc3RYID0geDtcclxuICAgICAgICBsYXN0WSA9IHk7XHJcbiAgICAgICAgbGFzdFogPSB6O1xyXG5cclxuICAgICAgICBpZiAodE1heFggPCB0TWF4WSkge1xyXG4gICAgICAgICAgICBpZiAodE1heFggPCB0TWF4Wikge1xyXG4gICAgICAgICAgICAgICAgeCArPSBzdGVwWDtcclxuICAgICAgICAgICAgICAgIHRNYXhYICs9IHREZWx0YVg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB6ICs9IHN0ZXBaO1xyXG4gICAgICAgICAgICAgICAgdE1heFogKz0gdERlbHRhWjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0TWF4WSA8IHRNYXhaKSB7XHJcbiAgICAgICAgICAgICAgICB5ICs9IHN0ZXBZO1xyXG4gICAgICAgICAgICAgICAgdE1heFkgKz0gdERlbHRhWTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHogKz0gc3RlcFo7XHJcbiAgICAgICAgICAgICAgICB0TWF4WiArPSB0RGVsdGFaO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byBzZXQgYSBibG9jayBhbmQgdXBkYXRlIGl0cyBjaHVua1xyXG5mdW5jdGlvbiBzZXRCbG9jayh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCB0eXBlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGN4ID0gTWF0aC5mbG9vcih4IC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBjeiA9IE1hdGguZmxvb3IoeiAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3Qga2V5ID0gYCR7Y3h9LCR7Y3p9YDtcclxuXHJcbiAgICBjb25zdCBjaHVuayA9IGNodW5rcy5nZXQoa2V5KTtcclxuICAgIGlmIChjaHVuaykge1xyXG4gICAgICAgIGNvbnN0IGx4ID0geCAtIGN4ICogQ0hVTktfU0laRTtcclxuICAgICAgICBjb25zdCBseiA9IHogLSBjeiAqIENIVU5LX1NJWkU7XHJcbiAgICAgICAgY29uc3QgaWR4ID0gZ2V0R3JpZEluZGV4KGx4LCB5LCBseik7XHJcblxyXG4gICAgICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNodW5rLmdyaWRbaWR4XSA9IHR5cGU7XHJcbiAgICAgICAgICAgIHJlYnVpbGRDaHVua01lc2goY2h1bmssIGN4LCBjeik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBIZWxwZXIgdG8gcmVidWlsZCBzaW5nbGUgY2h1bmsgbWVzaFxyXG5jb25zdCByZWJ1aWxkQ2h1bmtNZXNoID0gKGNodW5rOiBDaHVua0RhdGEsIGN4OiBudW1iZXIsIGN6OiBudW1iZXIpID0+IHtcclxuICAgIGNodW5rLnZpc2libGUgPSBbXTtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgQ0hVTktfU0laRTsgeCsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBDSFVOS19TSVpFOyB6KyspIHtcclxuICAgICAgICAgICAgY29uc3Qgd3ggPSBjeCAqIENIVU5LX1NJWkUgKyB4O1xyXG4gICAgICAgICAgICBjb25zdCB3eiA9IGN6ICogQ0hVTktfU0laRSArIHo7XHJcbiAgICAgICAgICAgIC8vIEZ1bGwgc2NhbiBmb3IgY29ycmVjdCBjdWxsaW5nXHJcbiAgICAgICAgICAgIGNvbnN0IG1pblkgPSAtWV9PRkZTRVQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFkgPSBDSFVOS19IRUlHSFQgLSBZX09GRlNFVCAtIDE7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSBtaW5ZOyB5IDw9IG1heFk7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gZ2V0R3JpZEluZGV4KHgsIHksIHopO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkeCA9PT0gLTEpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IGNodW5rLmdyaWRbaWR4XTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZXhwb3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTb2xpZCA9IChueDogbnVtYmVyLCBueTogbnVtYmVyLCBuejogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbklkeCA9IGdldEdyaWRJbmRleChueCwgbnksIG56KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobklkeCA9PT0gLTEpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2h1bmsuZ3JpZFtuSWR4XSAhPT0gMDtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc1NvbGlkKHggKyAxLCB5LCB6KSkgZXhwb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNTb2xpZCh4IC0gMSwgeSwgeikpIGV4cG9zZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzU29saWQoeCwgeSArIDEsIHopKSBleHBvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1NvbGlkKHgsIHkgLSAxLCB6KSkgZXhwb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNTb2xpZCh4LCB5LCB6ICsgMSkpIGV4cG9zZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzU29saWQoeCwgeSwgeiAtIDEpKSBleHBvc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXhwb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNodW5rLnZpc2libGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczogbmV3IEZsb2F0MzJBcnJheShbd3gsIHksIHd6XSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUgLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQgIT09IGNhbnZhcykgcmV0dXJuO1xyXG4gICAgaWYgKCFjdXJyZW50SGl0KSByZXR1cm47XHJcblxyXG4gICAgaWYgKGUuYnV0dG9uID09PSAwKSB7IC8vIE1pbmUgKExlZnQgQ2xpY2spXHJcbiAgICAgICAgY29uc3QgcHggPSBNYXRoLnJvdW5kKGN1cnJlbnRIaXQucG9pbnRbMF0pO1xyXG4gICAgICAgIGNvbnN0IHB5ID0gTWF0aC5yb3VuZChjdXJyZW50SGl0LnBvaW50WzFdKTtcclxuICAgICAgICBjb25zdCBweiA9IE1hdGgucm91bmQoY3VycmVudEhpdC5wb2ludFsyXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGN4ID0gTWF0aC5mbG9vcihweCAvIENIVU5LX1NJWkUpO1xyXG4gICAgICAgIGNvbnN0IGN6ID0gTWF0aC5mbG9vcihweiAvIENIVU5LX1NJWkUpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGAke2N4fSwke2N6fWA7XHJcblxyXG4gICAgICAgIGNvbnN0IGNodW5rID0gY2h1bmtzLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChjaHVuaykge1xyXG4gICAgICAgICAgICBjb25zdCBseCA9IHB4IC0gY3ggKiBDSFVOS19TSVpFO1xyXG4gICAgICAgICAgICBjb25zdCBseiA9IHB6IC0gY3ogKiBDSFVOS19TSVpFO1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSBnZXRHcmlkSW5kZXgobHgsIHB5LCBseik7XHJcbiAgICAgICAgICAgIGlmIChpZHggIT09IC0xICYmIGNodW5rLmdyaWRbaWR4XSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkVHlwZSA9IGNodW5rLmdyaWRbaWR4XTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBNYXAgYmxvY2sgdHlwZXMgdG8gaXRlbSB0eXBlcyAod2hhdCBnZXRzIGRyb3BwZWQpXHJcbiAgICAgICAgICAgICAgICAvLyBHcmlkIHR5cGUgMSAoc3RvbmUpIC0+IEl0ZW0gdHlwZSAwIChjb2JibGVzdG9uZSB0ZXh0dXJlKVxyXG4gICAgICAgICAgICAgICAgLy8gR3JpZCB0eXBlIDIgKGRpcnQpIC0+IEl0ZW0gdHlwZSAxIChkaXJ0IHRleHR1cmUpXHJcbiAgICAgICAgICAgICAgICAvLyBHcmlkIHR5cGUgMyAoZ3Jhc3MpIC0+IEl0ZW0gdHlwZSAyIChncmFzcyB0ZXh0dXJlKVxyXG4gICAgICAgICAgICAgICAgLy8gR3JpZCB0eXBlIDUgKFROVCkgLT4gSXRlbSB0eXBlIDQgKFROVCB0ZXh0dXJlKVxyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1UeXBlID0gb2xkVHlwZSAtIDE7IC8vIERlZmF1bHQgbWFwcGluZ1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFR5cGUgPT09IDEpIGl0ZW1UeXBlID0gMDsgLy8gU3RvbmUgLT4gQ29iYmxlc3RvbmVcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRCbG9jayhweCwgcHksIHB6LCAwKTsgLy8gU2V0IHRvIEFpclxyXG5cclxuICAgICAgICAgICAgICAgIHJlYnVpbGRXb3JsZCh0cnVlKTsgLy8gRm9yY2UgdXBkYXRlIHRvIHJlbW92ZSBibG9jayBpbnN0YW50bHlcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTcGF3biBQaWNrdXAgYXQgZXhhY3QgbWluZWQgcG9zaXRpb24gKG5vdCBzdXJmYWNlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcFBvcyA9IHZlYzMuZnJvbVZhbHVlcyhweCArIDAuNSwgcHkgKyAwLjUsIHB6ICsgMC41KTtcclxuICAgICAgICAgICAgICAgIHBpY2t1cFN5c3RlbS5zcGF3bihwUG9zLCBpdGVtVHlwZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXBkYXRlSG90YmFyVUkoKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUludmVudG9yeVVJKCk7IC8vIFVwZGF0ZSBmdWxsIGludmVudG9yeSB0b29cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZS5idXR0b24gPT09IDIpIHsgLy8gUGxhY2UgKFJpZ2h0IENsaWNrKVxyXG4gICAgICAgIGlmIChpbnZlbnRvcnlDb3VudHNbc2VsZWN0ZWRTbG90XSA+IDAgJiYgY3VycmVudEhpdC5lbXB0eSkge1xyXG4gICAgICAgICAgICBjb25zdCBueCA9IGN1cnJlbnRIaXQuZW1wdHlbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IG55ID0gY3VycmVudEhpdC5lbXB0eVsxXTtcclxuICAgICAgICAgICAgY29uc3QgbnogPSBjdXJyZW50SGl0LmVtcHR5WzJdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHggPSBueCAtIGNhbWVyYVBvc2l0aW9uWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBkeSA9IG55IC0gY2FtZXJhUG9zaXRpb25bMV07XHJcbiAgICAgICAgICAgIGNvbnN0IGR6ID0gbnogLSBjYW1lcmFQb3NpdGlvblsyXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkeCAqIGR4ICsgZHkgKiBkeSArIGR6ICogZHogPiAxLjApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN4ID0gTWF0aC5mbG9vcihueCAvIENIVU5LX1NJWkUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3ogPSBNYXRoLmZsb29yKG56IC8gQ0hVTktfU0laRSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBgJHtjeH0sJHtjen1gO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjaHVuayA9IGNodW5rcy5nZXQoa2V5KTtcclxuICAgICAgICAgICAgICAgIGlmICghY2h1bmspIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBPcHRpb25hbGx5IGNyZWF0ZSBuZXcgY2h1bmsgZGF0YSBpZiBuZWVkZWRcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2h1bmspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBseCA9IG54IC0gY3ggKiBDSFVOS19TSVpFO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGx6ID0gbnogLSBjeiAqIENIVU5LX1NJWkU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gZ2V0R3JpZEluZGV4KGx4LCBueSwgbHopO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ICE9PSAtMSAmJiBjaHVuay5ncmlkW2lkeF0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmxvY2sobngsIG55LCBueiwgaW52ZW50b3J5W3NlbGVjdGVkU2xvdF0gKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludmVudG9yeUNvdW50c1tzZWxlY3RlZFNsb3RdICE9PSBJbmZpbml0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5Q291bnRzW3NlbGVjdGVkU2xvdF0tLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnZlbnRvcnlDb3VudHNbc2VsZWN0ZWRTbG90XSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5W3NlbGVjdGVkU2xvdF0gPSAwOyAvLyBDbGVhciBzbG90IChzZXQgdG8gYWlyIGJsb2NrIHR5cGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5Q291bnRzW3NlbGVjdGVkU2xvdF0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlSW52ZW50b3J5VUkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWJ1aWxkV29ybGQodHJ1ZSk7IC8vIEZvcmNlIHVwZGF0ZSB0byBzaG93IGJsb2NrIGluc3RhbnRseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVIb3RiYXJVSSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4vLyAtLS0gVUkgLS0tXHJcbi8vIGdhbWVDb250YWluZXIgZGVmaW5lZCBhYm92ZVxyXG5cclxuY29uc3QgZnBzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmZwc0Rpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbmZwc0Rpdi5zdHlsZS50b3AgPSAnMTBweCc7XHJcbmZwc0Rpdi5zdHlsZS5sZWZ0ID0gJzEwcHgnO1xyXG5mcHNEaXYuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG5mcHNEaXYuc3R5bGUuZm9udEZhbWlseSA9ICdtb25vc3BhY2UnO1xyXG5mcHNEaXYuc3R5bGUuZm9udFNpemUgPSAnMTZweCc7XHJcbmZwc0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwwLjUpJztcclxuZnBzRGl2LnN0eWxlLnBhZGRpbmcgPSAnNHB4JztcclxuZnBzRGl2LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7IC8vIERvbid0IGJsb2NrIG1vdXNlXHJcbmdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZnBzRGl2KTtcclxuXHJcbi8vIC0tLSBNb3VudCBCdXR0b24gLS0tXHJcbmNvbnN0IG1vdW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbm1vdW50QnRuLmlubmVyVGV4dCA9IFwiTW91bnQgU3BpZGVyXCI7XHJcbm1vdW50QnRuLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxubW91bnRCdG4uc3R5bGUudG9wID0gJzEwcHgnO1xyXG5tb3VudEJ0bi5zdHlsZS5yaWdodCA9ICcxMHB4JztcclxubW91bnRCdG4uc3R5bGUucGFkZGluZyA9ICc4cHggMTZweCc7XHJcbm1vdW50QnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNENBRjUwJztcclxubW91bnRCdG4uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG5tb3VudEJ0bi5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbm1vdW50QnRuLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc0cHgnO1xyXG5tb3VudEJ0bi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbm1vdW50QnRuLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XHJcbm1vdW50QnRuLnN0eWxlLnpJbmRleCA9ICcxMDAwJzsgLy8gRW5zdXJlIGl0J3MgYWJvdmUgZXZlcnl0aGluZ1xyXG5tb3VudEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgaXNSaWRpbmcgPSB0cnVlO1xyXG4gICAgaXNHYW1lQWN0aXZlID0gdHJ1ZTsgLy8gRW5zdXJlIGdhbWUgaXMgYWN0aXZlIHNvIGNvbnRyb2xzIHdvcmtcclxuICAgIC8vIFRlbGVwb3J0IHRvIHNwaWRlciB0byBlbnN1cmUgdmlzdWFsIHNuYXBcclxuICAgIHZlYzMuY29weShwbGF5ZXJQb3NpdGlvbiwgc3BpZGVyLnBvc2l0aW9uKTtcclxuICAgIHBsYXllclBvc2l0aW9uWzFdICs9IDMuMDsgLy8gQWJvdmUgc3BpZGVyXHJcbiAgICAvLyBBbHNvIGxpa2VseSBuZWVkIHRvIHNldCBmb2N1cy9wb2ludGVyIGxvY2sgaWYgbm90IGFjdGl2ZT9cclxuICAgIC8vIGNhbnZhcy5yZXF1ZXN0UG9pbnRlckxvY2soKTsgLy8gT3B0aW9uYWwsIG1pZ2h0IGFubm95IGlmIHN0cmljdFxyXG59O1xyXG5nYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vdW50QnRuKTtcclxuXHJcbi8vIC0tLSBNZW51IExvZ2ljIC0tLVxyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tbWVudScpO1xyXG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw7XHJcbmxldCBpc0dhbWVBY3RpdmUgPSBmYWxzZTtcclxuXHJcbmlmIChzdGFydEJ0biAmJiBtZW51KSB7XHJcbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoIWlzV29ybGRMb2FkZWQpIHtcclxuICAgICAgICAgICAgLy8gU3RhcnQgTG9hZGluZyBQcm9jZXNzXHJcbiAgICAgICAgICAgIC8vIERvbid0IGFjdGl2YXRlIGdhbWUgeWV0LCBqdXN0IGVuYWJsZSBsb2FkaW5nIGxvb3BcclxuICAgICAgICAgICAgaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgc3RhcnRCdG4uaW5uZXJUZXh0ID0gXCJMb2FkaW5nIFdvcmxkLi4uXCI7XHJcbiAgICAgICAgICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FudmFzLnN0eWxlLmN1cnNvciA9ICdwcm9ncmVzcyc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlc3VtZSBHYW1lXHJcbiAgICAgICAgLy8gRm9yY2Ugc3RhcnQgaW1tZWRpYXRlbHksIGRvbid0IHdhaXQgZm9yIHBvaW50ZXIgbG9jayBldmVudCAod2hpY2ggbWlnaHQgZmFpbClcclxuICAgICAgICBpc0dhbWVBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBjYW52YXMucmVxdWVzdFBvaW50ZXJMb2NrKCkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUG9pbnRlciBsb2NrIGZhaWxlZCBvciBzdXBwcmVzc2VkOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAvLyBGYWxsYmFjazogR2FtZSBpcyBhY3RpdmUsIGJ1dCBtb3VzZSBtaWdodCB3YW5kZXIuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybG9ja2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQucG9pbnRlckxvY2tFbGVtZW50ID09PSBjYW52YXMpIHtcclxuICAgICAgICAgICAgaXNHYW1lQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIE9ubHkgcGF1c2UgaWYgd2UgZXhwbGljaXRseSBsb3N0IGxvY2sgKHVzZXIgcHJlc3NlZCBFc2MpLlxyXG4gICAgICAgICAgICAvLyBCdXQgaWYgd2UgbmV2ZXIgSEFEIGxvY2ssIHRoaXMgbWlnaHQgbm90IGZpcmU/XHJcbiAgICAgICAgICAgIC8vIElmIGl0IGZpcmVzIHdpdGggbnVsbCwgd2UgcGF1c2UuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYWNjZXB0YWJsZSBiZWhhdmlvciBmb3IgRXNjLlxyXG4gICAgICAgICAgICBpc0dhbWVBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIEJ1dHRvbiBUZXh0IGJhc2VkIG9uIHN0YXRlXHJcbiAgICAgICAgICAgIGlmIChzdGFydEJ0bikge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRCdG4uaW5uZXJUZXh0ID0gXCJSZXN1bWUgR2FtZVwiO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyAtLS0gQXV0by1QYXVzZSBJbnRlcnNlY3Rpb24gT2JzZXJ2ZXIgLS0tXHJcbmNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgLy8gR2FtZSBzY3JvbGxlZCBvdXQgb2YgdmlldyAtPiBQYXVzZVxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChpc0dhbWVBY3RpdmUgJiYgaXNXb3JsZExvYWRlZCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrKCk7XHJcbiAgICAgICAgICAgICAgICBpc0dhbWVBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChtZW51KSBtZW51LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7IC8vIFNob3cgbWVudVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0sIHsgdGhyZXNob2xkOiAwLjEgfSk7IC8vIFBhdXNlIGlmIDwgMTAlIHZpc2libGVcclxub2JzZXJ2ZXIub2JzZXJ2ZShnYW1lQ29udGFpbmVyKTtcclxuY29uc3QgY2hrU2hhZG93cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGstc2hhZG93cycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGNoa0xvY2tUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Noay1sb2NrLXRpbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBjaGtUaGlyZFBlcnNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGstdGhpcmQtcGVyc29uJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuaWYgKGNoa1RoaXJkUGVyc29uKSB7XHJcbiAgICBjaGtUaGlyZFBlcnNvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgLy8gVXBkYXRlIGxhYmVsIHRleHQgc2FmZXIgd2F5IChUZXh0IE5vZGUgc2libGluZylcclxuICAgIGlmIChjaGtUaGlyZFBlcnNvbi5uZXh0U2libGluZykge1xyXG4gICAgICAgIGNoa1RoaXJkUGVyc29uLm5leHRTaWJsaW5nLnRleHRDb250ZW50ID0gXCIgT24tRm9vdCBUaGlyZCBQZXJzb25cIjtcclxuICAgICAgICAvLyBGaXggR3JheSBDb2xvciAod2FzIHNldCBpbiBpbmxpbmUgc3R5bGUpXHJcbiAgICAgICAgaWYgKGNoa1RoaXJkUGVyc29uLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY2hrVGhpcmRQZXJzb24ucGFyZW50RWxlbWVudC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7IC8vIE1hdGNoIHBhcmVudCAjbWFpbi1tZW51IGNvbG9yXHJcbiAgICAgICAgICAgIGNoa1RoaXJkUGVyc29uLnBhcmVudEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIFNwYXduIExvZ2ljIChDb3JyZWN0bHkgUGxhY2VkKSAtLS1cclxuZnVuY3Rpb24gZ2V0U3VyZmFjZUhlaWdodCh4OiBudW1iZXIsIHo6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBjeCA9IE1hdGguZmxvb3IoeCAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgY3ogPSBNYXRoLmZsb29yKHogLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IGNodW5rID0gY2h1bmtzLmdldChgJHtjeH0sJHtjen1gKTtcclxuICAgIGlmICghY2h1bmspIHJldHVybiAwO1xyXG5cclxuICAgIGNvbnN0IGx4ID0gTWF0aC5mbG9vcih4IC0gY3ggKiBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IGx6ID0gTWF0aC5mbG9vcih6IC0gY3ogKiBDSFVOS19TSVpFKTtcclxuXHJcbiAgICAvLyBTY2FuIGRvd24gZnJvbSByZWFzb25hYmxlIGhlaWdodFxyXG4gICAgZm9yIChsZXQgeSA9IDEwMDsgeSA+PSAtMzA7IHktLSkge1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IGdldEdyaWRJbmRleChseCwgeSwgbHopO1xyXG4gICAgICAgIGlmIChpZHggIT09IC0xICYmIGNodW5rLmdyaWRbaWR4XSAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4geTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0ZW1wdFNwYXduUGxheWVyKCk6IGJvb2xlYW4ge1xyXG4gICAgdXBkYXRlQ2h1bmtzKHZlYzMuZnJvbVZhbHVlcygwLCAwLCAwKSk7XHJcbiAgICBjb25zdCBwbGF5ZXJZID0gZ2V0U3VyZmFjZUhlaWdodCgwLCAwKTtcclxuXHJcbiAgICAvLyBJZiBjaHVuayBub3QgZ2VuZXJhdGVkICgwKSBvciB0b28gbG93ICg8IC01MCksIGZhaWxcclxuICAgIC8vIGdldFN1cmZhY2VIZWlnaHQgcmV0dXJucyAwIGlmIGNodW5rIG1pc3NpbmcuXHJcbiAgICAvLyBXZSB3YW50IHRvIGJlIHN1cmUgaXQncyBhIHJlYWwgYmxvY2suXHJcbiAgICAvLyBMZXQncyBtb2RpZnkgZ2V0U3VyZmFjZUhlaWdodCBzbGlnaHRseSBpbiBsb2dpYyBvciBqdXN0IGNoZWNrIGlmIGl0J3MgMC5cclxuICAgIC8vIE5PVEU6IDAgaXMgZGlzdGluY3QgZnJvbSBcImdyb3VuZCBhdCAwXCIuIFxyXG4gICAgLy8gV2FpdCwgZ2V0U3VyZmFjZUhlaWdodCByZXR1cm5zIDAgaWYgbWlzc2luZy4gXHJcbiAgICAvLyBBbmQgbG9vcCByZXR1cm5zIDAgaWYgbm90aGluZyBmb3VuZC5cclxuICAgIC8vIFJlYWwgZ3JvdW5kIGlzIHVzdWFsbHkgPiA1LiBcclxuICAgIC8vIExldCdzIGFzc3VtZSBncm91bmQgbXVzdCBiZSA+IDAgdG8gYmUgdmFsaWQgZm9yIHNwYXduLlxyXG5cclxuICAgIGlmIChwbGF5ZXJZIDw9IDApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAvLyBGb3VuZCB2YWxpZCBncm91bmQhIFVwZGF0ZSBVSSBhbmQgU3Bhd24uXHJcbiAgICBjb25zdCBzcGlkZXJHcm91bmRZID0gcGxheWVyWTsgLy8gU2ltcGxpZnkgZm9yIG5vdywgc3BpZGVyIHNwYXducyBuZWFyIHBsYXllclxyXG5cclxuICAgIC8vIFNwYXduIHNwaWRlciBuZWFyYnkgYnV0IHJhbmRvbWl6ZWRcclxuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xyXG4gICAgY29uc3QgZGlzdCA9IDUgKyBNYXRoLnJhbmRvbSgpICogNTsgLy8gNSB0byAxMCBibG9ja3MgYXdheVxyXG4gICAgY29uc3Qgc3ggPSBNYXRoLmNvcyhhbmdsZSkgKiBkaXN0O1xyXG4gICAgY29uc3Qgc3ogPSBNYXRoLnNpbihhbmdsZSkgKiBkaXN0O1xyXG5cclxuICAgIC8vIEVuc3VyZSBzcGlkZXIgY2h1bmtcclxuICAgIGNvbnN0IHNwQ3ggPSBNYXRoLmZsb29yKHN4IC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBzcEN6ID0gTWF0aC5mbG9vcihzeiAvIENIVU5LX1NJWkUpO1xyXG4gICAgZ2V0T3JHZW5lcmF0ZUNodW5rKHNwQ3gsIHNwQ3opO1xyXG5cclxuICAgIC8vIFJlLWNoZWNrIHNwaWRlciBoZWlnaHRcclxuICAgIGxldCBtYXhZID0gLTEwMDtcclxuICAgIGZvciAobGV0IG94ID0gLTE7IG94IDw9IDE7IG94KyspIHtcclxuICAgICAgICBmb3IgKGxldCBveiA9IC0xOyBveiA8PSAxOyBveisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBnZXRTdXJmYWNlSGVpZ2h0KHN4ICsgb3gsIHN6ICsgb3opO1xyXG4gICAgICAgICAgICBpZiAoeSA+IG1heFkpIG1heFkgPSB5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHJlYWxTcGlkZXJZID0gbWF4WSA+IC01MCA/IG1heFkgOiBwbGF5ZXJZOyAvLyBGYWxsYmFja1xyXG5cclxuICAgIGNhbWVyYVBvc2l0aW9uWzBdID0gMDtcclxuICAgIGNhbWVyYVBvc2l0aW9uWzFdID0gcGxheWVyWSArIDU7XHJcbiAgICBjYW1lcmFQb3NpdGlvblsyXSA9IDA7XHJcbiAgICB2ZXJ0aWNhbFZlbG9jaXR5ID0gMDtcclxuICAgIGlzUmlkaW5nID0gZmFsc2U7XHJcblxyXG5cclxuICAgIHNwaWRlci5wb3NpdGlvblswXSA9IHN4O1xyXG4gICAgc3BpZGVyLnBvc2l0aW9uWzFdID0gcmVhbFNwaWRlclkgKyA1O1xyXG4gICAgc3BpZGVyLnBvc2l0aW9uWzJdID0gc3o7XHJcbiAgICBzcGlkZXIudmVsb2NpdHkgPSB2ZWMzLmNyZWF0ZSgpO1xyXG5cclxuICAgIC8vIFJlLWluaXQgbGVncz9cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BpZGVyLmxlZ1RhcmdldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBpZGVhbCA9IHNwaWRlci5nZXRJZGVhbEZvb3RQb3MoaSwgc3BpZGVyLnBvc2l0aW9uLCBzcGlkZXIueWF3KTtcclxuICAgICAgICBjb25zdCBneSA9IGdldFN1cmZhY2VIZWlnaHQoaWRlYWxbMF0sIGlkZWFsWzJdKTtcclxuICAgICAgICBpZGVhbFsxXSA9IChneSB8fCByZWFsU3BpZGVyWSkgKyAxLjA7XHJcbiAgICAgICAgdmVjMy5jb3B5KHNwaWRlci5sZWdUYXJnZXRzW2ldLCBpZGVhbCk7XHJcbiAgICAgICAgdmVjMy5jb3B5KHNwaWRlci5sZWdTdGFydFtpXSwgaWRlYWwpO1xyXG4gICAgICAgIHZlYzMuY29weShzcGlkZXIubGVnTmV4dFtpXSwgaWRlYWwpO1xyXG4gICAgICAgIHNwaWRlci5sZWdNb3ZpbmdbaV0gPSBmYWxzZTtcclxuICAgICAgICBzcGlkZXIubGVnUHJvZ3Jlc3NbaV0gPSAxLjA7XHJcbiAgICB9XHJcbiAgICBMb2dnZXIubG9nKGBTcGF3bmVkISBQbGF5ZXIgWTogJHtwbGF5ZXJZfWApO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8vIEluaXRpYWwgU3RhdGVcclxubGV0IGlzV29ybGRMb2FkZWQgPSBmYWxzZTtcclxubGV0IGlzTG9hZGluZyA9IGZhbHNlO1xyXG4vLyBEb24ndCBzcGF3biBpbW1lZGlhdGVseS4gV2FpdCBmb3IgdXNlciBvciBsb2FkIGxvb3AuXHJcblxyXG4vLyAtLS0gTG9vcCAtLS1cclxubGV0IGxhc3RUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbmxldCBmcmFtZXMgPSAwO1xyXG5sZXQgbGFzdEZwc1RpbWUgPSBsYXN0VGltZTtcclxubGV0IGZyYW1lQ291bnQgPSAwO1xyXG5cclxuLy8gSG9pc3RlZCBSZW5kZXIgVmFyaWFibGVzXHJcbmNvbnN0IGdsb2JhbFNreSA9IHZlYzMuY3JlYXRlKCk7XHJcbmNvbnN0IGdsb2JhbExpZ2h0Q29sb3IgPSB2ZWMzLmNyZWF0ZSgpO1xyXG5jb25zdCBnbG9iYWxBbWJpZW50Q29sb3IgPSB2ZWMzLmNyZWF0ZSgpO1xyXG5jb25zdCBnbG9iYWxMaWdodFZpZXdNYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xyXG5cclxuZnVuY3Rpb24gZnJhbWUoKSB7XHJcbiAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIGxldCBkdCA9IChub3cgLSBsYXN0VGltZSkgLyAxMDAwO1xyXG4gICAgbGFzdFRpbWUgPSBub3c7XHJcblxyXG4gICAgLy8gRGVmaW5lZCBhdCB0b3Agb2YgZnJhbWUgZm9yIHNjb3BlIHZpc2liaWxpdHlcclxuICAgIGNvbnN0IGlzVGhpcmRQZXJzb25PbkZvb3QgPSAoY2hrVGhpcmRQZXJzb24gJiYgY2hrVGhpcmRQZXJzb24uY2hlY2tlZCk7XHJcblxyXG4gICAgaWYgKGZyYW1lQ291bnQgPT09IDApIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnRmlyc3QgZnJhbWUgcmVuZGVyaW5nISBDYW52YXMgc2l6ZTonLCBjYW52YXMud2lkdGgsICd4JywgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0luc3RhbmNlIGNvdW50OicsIGFsbEluc3RhbmNlcy5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgZnJhbWVDb3VudCsrO1xyXG5cclxuICAgIGlmIChpc0xvYWRpbmcpIHtcclxuICAgICAgICAvLyBBdHRlbXB0IHRvIHNwYXduXHJcbiAgICAgICAgaWYgKGF0dGVtcHRTcGF3blBsYXllcigpKSB7XHJcbiAgICAgICAgICAgIGlzV29ybGRMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgaXNHYW1lQWN0aXZlID0gdHJ1ZTsgLy8gQXV0by1zdGFydCBvbmNlIGxvYWRlZFxyXG4gICAgICAgICAgICBjYW52YXMucmVxdWVzdFBvaW50ZXJMb2NrKCk7XHJcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XHJcbiAgICAgICAgICAgIGlmIChzdGFydEJ0bikge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRCdG4uaW5uZXJUZXh0ID0gXCJSZXN1bWUgR2FtZVwiO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU3RpbGwgbG9hZGluZy4uLiBmb3JjZSBjaHVuayB1cGRhdGVzIGZvciAwLDBcclxuICAgICAgICAgICAgdXBkYXRlQ2h1bmtzKHZlYzMuZnJvbVZhbHVlcygwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgIC8vIE1heWJlIGFuaW1hdGUgbG9hZGluZyB0ZXh0P1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNHYW1lQWN0aXZlICYmIGlzV29ybGRMb2FkZWQpIHtcclxuICAgICAgICAvLyBDYWxjdWxhdGUgcGxheWVyJ3MgY2h1bmsgYW5kIHVwZGF0ZSBpZiBuZWVkZWRcclxuICAgICAgICAvLyBEb25lIGV2ZXJ5IDAuMXMgb3Igc28/IE9yIGV2ZXJ5IGZyYW1lP1xyXG4gICAgICAgIC8vIEV2ZXJ5IGZyYW1lIGlzIHNhZmVyIGZvciBcImluZmluaXRlXCIgYnV0IG1pZ2h0IGJlIHNsb3cuXHJcbiAgICAgICAgLy8gT3B0aW1pemF0aW9uOiBDaGVjayBkaXN0IG1vdmVkLlxyXG4gICAgICAgIHVwZGF0ZUNodW5rcyhwbGF5ZXJQb3NpdGlvbik7IC8vIFVzZSBQTEFZRVIgcG9zaXRpb24gZm9yIGNodW5rIGxvYWRpbmcsIG5vdCBjYW1lcmEhXHJcblxyXG4gICAgICAgIC8vIENsYW1wIGR0IHRvIGF2b2lkIHBoeXNpY3MgZXhwbG9zaW9ucyAoZS5nLiBtYXggMC4xcylcclxuICAgICAgICBkdCA9IE1hdGgubWluKGR0LCAwLjEpO1xyXG5cclxuICAgICAgICAvLyBGUFNcclxuICAgICAgICAvLyBGUFNcclxuICAgICAgICBmcmFtZXMrKztcclxuICAgICAgICBpZiAobm93IC0gbGFzdEZwc1RpbWUgPj0gMTAwMCkge1xyXG4gICAgICAgICAgICBmcHNEaXYuaW5uZXJUZXh0ID0gYEZQUzogJHtmcmFtZXN9IHwgSW5zdGFuY2VzOiAke2N1cnJlbnRJbnN0YW5jZUNvdW50fWA7XHJcbiAgICAgICAgICAgIGZyYW1lcyA9IDA7XHJcbiAgICAgICAgICAgIGxhc3RGcHNUaW1lID0gbm93O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIFRlcnJhaW4gRnVuY3Rpb24gZm9yIFNwaWRlclxyXG4gICAgICAgIGNvbnN0IGdldFRlcnJhaW5IZWlnaHQgPSAocG9zOiB2ZWMzKTogbnVtYmVyIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl4ID0gTWF0aC5mbG9vcihwb3NbMF0pO1xyXG4gICAgICAgICAgICBjb25zdCBpeiA9IE1hdGguZmxvb3IocG9zWzJdKTtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgdmVydGljYWwgY29sdW1uXHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSBNYXRoLmZsb29yKHBvc1sxXSArIDIpOyB5ID49IE1hdGguZmxvb3IocG9zWzFdIC0gNSk7IHktLSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3ggPSBNYXRoLmZsb29yKGl4IC8gQ0hVTktfU0laRSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjeiA9IE1hdGguZmxvb3IoaXogLyBDSFVOS19TSVpFKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rID0gY2h1bmtzLmdldChgJHtjeH0sJHtjen1gKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaHVuaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGx4ID0gaXggLSBjeCAqIENIVU5LX1NJWkU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbHogPSBpeiAtIGN6ICogQ0hVTktfU0laRTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBnZXRHcmlkSW5kZXgobHgsIHksIGx6KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ICE9PSAtMSAmJiBjaHVuay5ncmlkW2lkeF0gIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBTcGlkZXJcclxuICAgICAgICAvLyBJZiByaWRpbmcsIHBhc3Mga2V5cy4gRWxzZSBwYXNzIGVtcHR5LlxyXG4gICAgICAgIGNvbnN0IHNwaWRlcklucHV0ID0gaXNSaWRpbmcgPyBrZXlzIDoge307XHJcbiAgICAgICAgc3BpZGVyLnVwZGF0ZShkdCwgc3BpZGVySW5wdXQsIGdldFRlcnJhaW5IZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgUGFydGljbGVzXHJcbiAgICAgICAgcGFydGljbGVTeXN0ZW0udXBkYXRlKGR0KTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIFBpY2t1cHMgLSBTY2FuIGRvd253YXJkIGZyb20gaXRlbSBwb3NpdGlvbiBmb3IgcmVhbGlzdGljIGdyYXZpdHlcclxuICAgICAgICBwaWNrdXBTeXN0ZW0udXBkYXRlKGR0LCBwbGF5ZXJQb3NpdGlvbiwgaW52ZW50b3J5LCBpbnZlbnRvcnlDb3VudHMsIChwb3M6IHZlYzMpID0+IHtcclxuICAgICAgICAgICAgLy8gU2NhbiBkb3dud2FyZCBmcm9tIGl0ZW0ncyBjdXJyZW50IHBvc2l0aW9uIGZvciByZWFsaXN0aWMgZ3Jhdml0eVxyXG4gICAgICAgICAgICBjb25zdCBjeCA9IE1hdGguZmxvb3IocG9zWzBdIC8gQ0hVTktfU0laRSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN6ID0gTWF0aC5mbG9vcihwb3NbMl0gLyBDSFVOS19TSVpFKTtcclxuICAgICAgICAgICAgY29uc3QgY2h1bmsgPSBjaHVua3MuZ2V0KGAke2N4fSwke2N6fWApO1xyXG4gICAgICAgICAgICBpZiAoIWNodW5rKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGx4ID0gTWF0aC5mbG9vcihwb3NbMF0gLSBjeCAqIENIVU5LX1NJWkUpO1xyXG4gICAgICAgICAgICBjb25zdCBseiA9IE1hdGguZmxvb3IocG9zWzJdIC0gY3ogKiBDSFVOS19TSVpFKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNjYW4gRE9XTiBmcm9tIGl0ZW0ncyBjdXJyZW50IFkgcG9zaXRpb25cclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRZID0gTWF0aC5mbG9vcihwb3NbMV0pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gc3RhcnRZOyB5ID49IC1ZX09GRlNFVDsgeS0tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBnZXRHcmlkSW5kZXgobHgsIHksIGx6KTtcclxuICAgICAgICAgICAgICAgIGlmIChpZHggIT09IC0xICYmIGNodW5rLmdyaWRbaWR4XSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5OyAvLyBSZXR1cm4gWSBvZiB0b3Btb3N0IHNvbGlkIGJsb2NrIGJlbG93IGl0ZW1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gTm8gZ3JvdW5kIGZvdW5kXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBBY3RpdmUgVE5UXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGFjdGl2ZVROVHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgdG50ID0gYWN0aXZlVE5Uc1tpXTtcclxuICAgICAgICAgICAgdG50LnRpbWVyIC09IGR0O1xyXG5cclxuICAgICAgICAgICAgLy8gUHVsc2UgU2NhbGVcclxuICAgICAgICAgICAgY29uc3QgcHVsc2VTcGVlZCA9IDEwLjAgKyAoMy4wIC0gdG50LnRpbWVyKSAqIDUuMDsgLy8gRmFzdGVyIGFzIGl0IGdldHMgY2xvc2VyXHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlQW10ID0gMS4wICsgTWF0aC5zaW4ocGVyZm9ybWFuY2Uubm93KCkgLyAxMDAgKiBwdWxzZVNwZWVkKSAqIDAuMTtcclxuICAgICAgICAgICAgdmVjMy5zZXQodG50LnNjYWxlLCBzY2FsZUFtdCwgc2NhbGVBbXQsIHNjYWxlQW10KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0bnQudGltZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRVhQTE9ERVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlVE5Ucy5zcGxpY2UoaSwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHggPSBNYXRoLnJvdW5kKHRudC5wb3NpdGlvblswXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBweSA9IE1hdGgucm91bmQodG50LnBvc2l0aW9uWzFdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHB6ID0gTWF0aC5yb3VuZCh0bnQucG9zaXRpb25bMl0pO1xyXG5cclxuICAgICAgICAgICAgICAgIExvZ2dlci5sb2coJ0JPT00hIChQYXJ0aWNsZXMpJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBTcGF3biBQYXJ0aWNsZXNcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLmVtaXQodG50LnBvc2l0aW9uLCAxMDAsIHZlYzQuZnJvbVZhbHVlcygxLCAwLjUsIDAsIDEpLCA4LjApOyAvLyBPcmFuZ2UgRmlyZVxyXG4gICAgICAgICAgICAgICAgcGFydGljbGVTeXN0ZW0uZW1pdCh0bnQucG9zaXRpb24sIDUwLCB2ZWM0LmZyb21WYWx1ZXMoMC4yLCAwLjIsIDAuMiwgMSksIDQuMCk7IC8vIFNtb2tlXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gMztcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pblggPSBweCAtIHJhZGl1czsgY29uc3QgbWF4WCA9IHB4ICsgcmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWluWSA9IHB5IC0gcmFkaXVzOyBjb25zdCBtYXhZID0gcHkgKyByYWRpdXM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW5aID0gcHogLSByYWRpdXM7IGNvbnN0IG1heFogPSBweiArIHJhZGl1cztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVua3NUb1VwZGF0ZSA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSBtaW5YOyB4IDw9IG1heFg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSBtaW5ZOyB5IDw9IG1heFk7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB6ID0gbWluWjsgeiA8PSBtYXhaOyB6KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0geCAtIHB4OyBjb25zdCBkeSA9IHkgLSBweTsgY29uc3QgZHogPSB6IC0gcHo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHggKiBkeCArIGR5ICogZHkgKyBkeiAqIGR6IDw9IHJhZGl1cyAqIHJhZGl1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlc3Ryb3lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0Q3ggPSBNYXRoLmZsb29yKHggLyBDSFVOS19TSVpFKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0Q3ogPSBNYXRoLmZsb29yKHogLyBDSFVOS19TSVpFKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0S2V5ID0gYCR7dEN4fSwke3RDen1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRDaHVuayA9IGNodW5rcy5nZXQodEtleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0Q2h1bmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdEx4ID0geCAtIHRDeCAqIENIVU5LX1NJWkU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRMeiA9IHogLSB0Q3ogKiBDSFVOS19TSVpFO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0SWR4ID0gZ2V0R3JpZEluZGV4KHRMeCwgeSwgdEx6KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRJZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Q2h1bmsuZ3JpZFt0SWR4XSA9IDA7IC8vIEFpclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmtzVG9VcGRhdGUuYWRkKHRLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlYnVpbGQgQ2h1bmtzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNLZXkgb2YgY2h1bmtzVG9VcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbY2N4LCBjY3pdID0gY0tleS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYnVpbGRDaHVua01lc2goY2h1bmtzLmdldChjS2V5KSEsIGNjeCwgY2N6KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYnVpbGRXb3JsZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKGlzUmlkaW5nKSB7XHJcbiAgICAgICAgICAgIC8vIFdoZW4gcmlkaW5nIHNwaWRlcjogcGxheWVyIHBvc2l0aW9uID0gc3BpZGVyIHBvc2l0aW9uXHJcbiAgICAgICAgICAgIHZlYzMuY29weShwbGF5ZXJQb3NpdGlvbiwgc3BpZGVyLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgcGxheWVyUG9zaXRpb25bMV0gKz0gMS41OyAvLyBQbGF5ZXIgc2l0cyBvbiBzcGlkZXJcclxuXHJcbiAgICAgICAgICAgIC8vIDNyZCBQZXJzb24gT3JiaXQgQ2FtZXJhXHJcbiAgICAgICAgICAgIGNvbnN0IGNhbURpc3QgPSBjYW1lcmFab29tO1xyXG4gICAgICAgICAgICBjb25zdCBob3Jpem9udGFsRGlzdCA9IGNhbURpc3QgKiBNYXRoLmNvcyhjYW1lcmFQaXRjaCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN4ID0gcGxheWVyUG9zaXRpb25bMF0gLSBNYXRoLnNpbihjYW1lcmFZYXcpICogaG9yaXpvbnRhbERpc3Q7XHJcbiAgICAgICAgICAgIGNvbnN0IGN6ID0gcGxheWVyUG9zaXRpb25bMl0gLSBNYXRoLmNvcyhjYW1lcmFZYXcpICogaG9yaXpvbnRhbERpc3Q7XHJcbiAgICAgICAgICAgIGNvbnN0IGN5ID0gcGxheWVyUG9zaXRpb25bMV0gLSBwbGF5ZXJIZWlnaHQgKyBjYW1EaXN0ICogTWF0aC5zaW4oY2FtZXJhUGl0Y2gpICsgMi4wO1xyXG4gICAgICAgICAgICB2ZWMzLnNldChjYW1lcmFQb3NpdGlvbiwgY3gsIGN5LCBjeik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAtLS0gT24tRm9vdCBUaGlyZCBQZXJzb24gTG9naWMgLS0tXHJcbiAgICAgICAgLy8gaXNUaGlyZFBlcnNvbk9uRm9vdCBpcyBkZWZpbmVkIGF0IHRvcCBvZiBmcmFtZVxyXG4gICAgICAgIGlmICghaXNSaWRpbmcgJiYgaXNUaGlyZFBlcnNvbk9uRm9vdCkge1xyXG4gICAgICAgICAgICAvLyBPcmJpdCBDYW1lcmFcclxuICAgICAgICAgICAgY29uc3QgY2FtRGlzdCA9IGNhbWVyYVpvb207XHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGVvcmV0aWNhbCBjYW1lcmEgcG9zaXRpb25cclxuICAgICAgICAgICAgY29uc3QgaG9yaXpvbnRhbERpc3QgPSBjYW1EaXN0ICogTWF0aC5jb3MoY2FtZXJhUGl0Y2gpO1xyXG4gICAgICAgICAgICBjb25zdCBjeCA9IHBsYXllclBvc2l0aW9uWzBdIC0gTWF0aC5zaW4oY2FtZXJhWWF3KSAqIGhvcml6b250YWxEaXN0O1xyXG4gICAgICAgICAgICBjb25zdCBjeiA9IHBsYXllclBvc2l0aW9uWzJdIC0gTWF0aC5jb3MoY2FtZXJhWWF3KSAqIGhvcml6b250YWxEaXN0O1xyXG4gICAgICAgICAgICBjb25zdCBjeSA9IHBsYXllclBvc2l0aW9uWzFdICsgZXllTGV2ZWwgKyBjYW1EaXN0ICogTWF0aC5zaW4oY2FtZXJhUGl0Y2gpOyAvLyBQaXZvdCBmcm9tIGV5ZSBsZXZlbFxyXG5cclxuICAgICAgICAgICAgLy8gUmF5Y2FzdCBmb3IgQ2FtZXJhIENsaXBwaW5nIChBbnRpLUNsaXApXHJcbiAgICAgICAgICAgIC8vIENhc3QgcmF5IGZyb20gUGxheWVyIEhlYWQgLT4gQ2FtZXJhXHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRQb3MgPSB2ZWMzLmZyb21WYWx1ZXMocGxheWVyUG9zaXRpb25bMF0sIHBsYXllclBvc2l0aW9uWzFdICsgZXllTGV2ZWwsIHBsYXllclBvc2l0aW9uWzJdKTtcclxuICAgICAgICAgICAgY29uc3QgY2FtUG9zID0gdmVjMy5mcm9tVmFsdWVzKGN4LCBjeSwgY3opO1xyXG4gICAgICAgICAgICBjb25zdCBjYW1EaXIgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICB2ZWMzLnN1YnRyYWN0KGNhbURpciwgY2FtUG9zLCBoZWFkUG9zKTtcclxuICAgICAgICAgICAgY29uc3QgbWF4TGVuID0gdmVjMy5sZW5ndGgoY2FtRGlyKTtcclxuICAgICAgICAgICAgdmVjMy5ub3JtYWxpemUoY2FtRGlyLCBjYW1EaXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmF5Y2FzdCBjaGVja1xyXG4gICAgICAgICAgICAvLyBXZSBjYW4gcmV1c2UgYSBzaW1wbGlmaWVkIHJheWNhc3Qgb3Igd2FsayB0aGUgcmF5XHJcbiAgICAgICAgICAgIGxldCBzYWZlRGlzdCA9IG1heExlbjtcclxuICAgICAgICAgICAgLy8gUXVpY2sgcmF5IG1hcmNoXHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gMjA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0ZXBzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSAobWF4TGVuICogaSkgLyBzdGVwcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdmVjMy5zY2FsZUFuZEFkZChwLCBoZWFkUG9zLCBjYW1EaXIsIGQpO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaW5zaWRlIHNvbGlkIGJsb2NrXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpeCA9IE1hdGguZmxvb3IocFswXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpeSA9IE1hdGguZmxvb3IocFsxXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpeiA9IE1hdGguZmxvb3IocFsyXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2N4ID0gTWF0aC5mbG9vcihpeCAvIENIVU5LX1NJWkUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2N6ID0gTWF0aC5mbG9vcihpeiAvIENIVU5LX1NJWkUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2h1bmsgPSBjaHVua3MuZ2V0KGAke2NjeH0sJHtjY3p9YCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2h1bmspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBseCA9IGl4IC0gY2N4ICogQ0hVTktfU0laRTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBseiA9IGl6IC0gY2N6ICogQ0hVTktfU0laRTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBnZXRHcmlkSW5kZXgobHgsIGl5LCBseik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCAhPT0gLTEgJiYgY2h1bmsuZ3JpZFtpZHhdICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhpdCFcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2FmZURpc3QgPSBNYXRoLm1heCgwLjUsIGQgLSAwLjIpOyAvLyBQdWxsIGJhY2sgc2xpZ2h0bHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgZmluYWwgY2FtZXJhIHBvc1xyXG4gICAgICAgICAgICB2ZWMzLnNjYWxlQW5kQWRkKGNhbWVyYVBvc2l0aW9uLCBoZWFkUG9zLCBjYW1EaXIsIHNhZmVEaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIWlzUmlkaW5nICYmICFpc1RoaXJkUGVyc29uT25Gb290KSB7XHJcbiAgICAgICAgICAgIC8vIDFzdCBQZXJzb24gQ2FtZXJhIChGUFMpXHJcbiAgICAgICAgICAgIHZlYzMuc2V0KGNhbWVyYVBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgcGxheWVyUG9zaXRpb25bMF0sXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJQb3NpdGlvblsxXSArIGV5ZUxldmVsLFxyXG4gICAgICAgICAgICAgICAgcGxheWVyUG9zaXRpb25bMl1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE5vcm1hbCBQaHlzaWNzICh3aGVuIG5vdCByaWRpbmcpXHJcbiAgICAgICAgaWYgKCFpc1JpZGluZyAmJiBrZXlzWydTcGFjZSddICYmIGlzR3JvdW5kZWQpIHtcclxuICAgICAgICAgICAgdmVydGljYWxWZWxvY2l0eSA9IGp1bXBGb3JjZTtcclxuICAgICAgICAgICAgaXNHcm91bmRlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUGh5c2ljcyAmIENvbGxpc2lvbiBSZXNvbHV0aW9uXHJcblxyXG4gICAgICAgIC8vIDEuIFZlcnRpY2FsIE1vdmVtZW50IChZKVxyXG4gICAgICAgIHZlcnRpY2FsVmVsb2NpdHkgLT0gZ3Jhdml0eSAqIGR0O1xyXG4gICAgICAgIC8vIFRlcm1pbmFsIHZlbG9jaXR5IGNoZWNrPyBrZWVwaW5nIGl0IHNpbXBsZVxyXG5cclxuICAgICAgICAvLyBBcHBseSBZIHRvIFBMQVlFUlxyXG4gICAgICAgIHBsYXllclBvc2l0aW9uWzFdICs9IHZlcnRpY2FsVmVsb2NpdHkgKiBkdDtcclxuXHJcbiAgICAgICAgY29uc3QgaGl0WSA9IGNoZWNrQ29sbGlzaW9uKHBsYXllclBvc2l0aW9uKTtcclxuICAgICAgICBpZiAoaGl0WSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBEZXRlY3QgaWYgdGhpcyBpcyBqdXN0IHRoZSBmbG9vciB3ZSBhcmUgc3RhbmRpbmcgb25cclxuICAgICAgICAgICAgLy8gQmxvY2sgdG9wIGlzIGhpdFkgKyAxLiBJZiBmZWV0IChwb3NbMV0pIGFyZSBhYm92ZSB0aGF0LCBpdCdzIGZsb29yLlxyXG5cclxuICAgICAgICAgICAgLy8gRklYOiBPbmx5IHRyZWF0IGFzIGZsb29yIGlmIGl0IGlzIHJlYXNvbmFibHkgY2xvc2UgdG8gZmVldCAoc3RlcCBoZWlnaHQpXHJcbiAgICAgICAgICAgIC8vIElmIGl0J3Mgd2F5IGFib3ZlIGZlZXQsIGl0J3MgYSBjZWlsaW5nIG9yIGhlYWRlciwgbm90IGEgdmFsaWQgZmxvb3IgdG8gc25hcCB0by5cclxuICAgICAgICAgICAgLy8gRklYOiBTdGVwIEhlaWdodCBMaW1pdCB0byAwLjYgcHJldmVudHMgd2FsbCB0ZWxlcG9ydCAoc3RlcHBhYmxlKVxyXG4gICAgICAgICAgICAvLyBCdXQgd2UgbmVlZCBhIHNlcGFyYXRlIFwiTGFuZGluZ1wiIGNoZWNrIGZvciBmYWxsaW5nLCB3aGljaCBzaG91bGQgYmUgbGVuaWVudC5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RUb1RvcCA9IChoaXRZICsgMS4wKSAtIHBsYXllclBvc2l0aW9uWzFdO1xyXG5cclxuICAgICAgICAgICAgLy8gU3RlcHBpbmc6IFN0cmljdCBsaW1pdCAoY2xpbWJpbmcgc3RhaXJzL3NsYWJzKVxyXG4gICAgICAgICAgICBjb25zdCBpc1N0ZXBwYWJsZSA9IChkaXN0VG9Ub3AgPD0gMC42ICYmIGRpc3RUb1RvcCA+PSAtMC4xKTtcclxuXHJcbiAgICAgICAgICAgIC8vIExhbmRpbmc6IExlbmllbnQgbGltaXQgKGZhbGxpbmcgZnJvbSBoZWlnaHQpXHJcbiAgICAgICAgICAgIC8vIElmIGZhbGxpbmcsIHdlIHdhbnQgdG8gc25hcCB0byBncm91bmQgZXZlbiBpZiB3ZSBwZW5ldHJhdGVkIGRlZXAgaW50byBpdCAoZHVlIHRvIHNwZWVkKS5cclxuICAgICAgICAgICAgLy8gQnV0IHdlIGRvbid0IHdhbnQgdG8gc25hcCB0byBhIFwiQ2VpbGluZ1wiIGZhciBhYm92ZSB1cy5cclxuICAgICAgICAgICAgLy8gSWYgZGlzdFRvVG9wIGlzIHBvc2l0aXZlIChmZWV0IGJlbG93IHRvcCksIHdlIGFyZSBpbnNpZGUvYmVsb3cgdGhlIGJsb2NrIHRvcC5cclxuICAgICAgICAgICAgLy8gSWYgZGlzdFRvVG9wIGlzIG1hc3NpdmUgKGUuZy4gNS4wKSwgd2UgYXJlIHdheSBkZWVwPyBObywgZGlzdFRvVG9wID0gVG9wIC0gRmVldC5cclxuICAgICAgICAgICAgLy8gSWYgZmVldCA9IDAsIFRvcCA9IDUuIGRpc3QgPSA1LiBXZSBhcmUgYmVsb3cgaXQuXHJcbiAgICAgICAgICAgIC8vIFNvIGZvciBsYW5kaW5nLCBiYXNpY2FsbHkgYW55dGhpbmcgd2hlcmUgZmVldCA8PSB0b3AuXHJcbiAgICAgICAgICAgIGNvbnN0IGlzTGFuZGFibGUgPSAoZGlzdFRvVG9wID4gLTAuMSk7IC8vIEFsbG93IHNsaWdodCBob3ZlciAoZXBzaWxvbiksIGJ1dCBtYWlubHkganVzdCBcImFtIEkgYmVsb3cgdGhlIHRvcD9cIlxyXG5cclxuICAgICAgICAgICAgaWYgKHZlcnRpY2FsVmVsb2NpdHkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGYWxsaW5nL0xhbmRpbmdcclxuICAgICAgICAgICAgICAgIGlmIChpc0xhbmRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyUG9zaXRpb25bMV0gPSBoaXRZICsgMS4wICsgMC4wMTtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFZlbG9jaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpc0dyb3VuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE1vdmluZyBVcCAoSnVtcGluZylcclxuICAgICAgICAgICAgICAgIC8vIFVzZSBzdHJpY3QgU3RlcHBhYmxlIGNoZWNrIGZvciBpbnRlcnJ1cHRpb25zPyBPciBDZWlsaW5nIGNoZWNrP1xyXG4gICAgICAgICAgICAgICAgLy8gQ2VpbGluZyBDaGVjazogT25seSBibG9jayBpZiBoaXRZIGlzIEFCT1ZFIHBsYXllciBoZWFkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJUb3AgPSBwbGF5ZXJQb3NpdGlvblsxXSArIHBsYXllckhlaWdodDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhpdEJvdHRvbSA9IGhpdFk7IC8vIEJvdHRvbSBvZiBibG9jayBpcyBoaXRZPyBObywgaGl0WSBpcyBcIlRvcCBvZiBibG9jayBZXCIgb3IgXCJCb3R0b21cIj8gXHJcbiAgICAgICAgICAgICAgICAvLyBjaGVja0NvbGxpc2lvbiByZXR1cm5zIFkgKGludGVnZXIgY29vcmRpbmF0ZSkuXHJcbiAgICAgICAgICAgICAgICAvLyBTb2xpZCBibG9jayBvY2N1cGllcyBbeSwgeSsxXS5cclxuICAgICAgICAgICAgICAgIC8vIFNvIGhpdFkgaXMgdGhlIGB5YCBpbmRleC4gQm90dG9tIGlzIGB5YC4gVG9wIGlzIGB5KzFgLlxyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGhpdCBhIGJsb2NrIEFCT1ZFIHVzLiBCbG9jayBZID4gUGxheWVyIFkgKyBIZWlnaHQuXHJcbiAgICAgICAgICAgICAgICAvLyBXYWl0LCBjaGVja0NvbGxpc2lvbiByZXR1cm5zIHRoZSBoaWdoZXN0IGJsb2NrIFkgYXQgdGhhdCBYLFo/XHJcbiAgICAgICAgICAgICAgICAvLyBZZXMsIFwiSGl0IVwiIC0+IHkuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgbm90IHN0ZXBwYWJsZSwgdHJlYXQgYXMgd2FsbC9jZWlsaW5nIGRlcGVuZGluZyBvbiByZWxhdGl2ZSBwb3MuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzU3RlcHBhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT25seSBzdG9wIGlmIGl0J3MgYWN0dWFsbHkgYmxvY2tpbmcgdXMgKENlaWxpbmcpIE9SIGlmIGl0J3MgYSBXYWxsIHdlIGNhbid0IHN0ZXAgdXAuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIEp1bXBpbmc6IFdlIHdhbnQgdG8gc2xpZGUgVVAgd2FsbHMuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU28gd2Ugc2hvdWxkIE9OTFkgc3RvcCBpZiB3ZSBoaXQgYSBDRUlMSU5HLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEEgd2FsbCAoc2lkZSkgaXMgaGFuZGxlZCBieSBYL1ogY29sbGlzaW9uLiBcclxuICAgICAgICAgICAgICAgICAgICAvLyBZIENvbGxpc2lvbiB1c3VhbGx5IG1lYW5zIFwiSSBhbSBpbnNpZGUgdGhpcyBibG9ja1wiLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIEkgYW0gaW5zaWRlIGEgYmxvY2sgdGhhdCBpcyBOT1Qgc3RlcHBhYmxlLCBhbmQgSSBhbSBtb3ZpbmcgVVAuLi5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJdCBtaWdodCBiZSBhIGhlYWRlci5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgYmxvY2sgWSA+IHBsYXllciBoZWFkLCBpdCdzIGEgY2VpbGluZy5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGl0WSA+IHBsYXllclBvc2l0aW9uWzFdICsgMS4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclBvc2l0aW9uWzFdIC09IHZlcnRpY2FsVmVsb2NpdHkgKiBkdDsgLy8gUHVzaCBiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBFbHNlOiBJdCdzIGEgd2FsbCB3ZSBhcmUgc2xpZGluZyB1cD8gSWdub3JlIFkgY29sbGlzaW9uIChhbGxvdyBzbGlkZSkuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpc0dyb3VuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGbG9vciBcImRlYXRoIHBsYW5lXCIgZmFsbGJhY2tcclxuICAgICAgICBpZiAocGxheWVyUG9zaXRpb25bMV0gPCAtMTApIHtcclxuICAgICAgICAgICAgcGxheWVyUG9zaXRpb25bMF0gPSAwO1xyXG4gICAgICAgICAgICBwbGF5ZXJQb3NpdGlvblsxXSA9IDU7XHJcbiAgICAgICAgICAgIHBsYXllclBvc2l0aW9uWzJdID0gNTtcclxuICAgICAgICAgICAgdmVydGljYWxWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gQ2FtZXJhIExvZ2ljIChmb3IgbW92ZW1lbnQgZGlyZWN0aW9uKVxyXG4gICAgICAgIGNvbnN0IGZvcndhcmQgPSBnZXRDYW1lcmFGb3J3YXJkKCk7XHJcbiAgICAgICAgLy8gRmxhdHRlbiBmb3J3YXJkIGZvciBtb3ZlbWVudCAoc28geW91IGRvbid0IGZseSB1cC9kb3duIHdoZW4gbG9va2luZyB1cC9kb3duKVxyXG4gICAgICAgIGNvbnN0IG1vdmVEaXJGb3J3YXJkID0gdmVjMy5mcm9tVmFsdWVzKGZvcndhcmRbMF0sIDAsIGZvcndhcmRbMl0pO1xyXG4gICAgICAgIHZlYzMubm9ybWFsaXplKG1vdmVEaXJGb3J3YXJkLCBtb3ZlRGlyRm9yd2FyZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdmVjMy5jcmVhdGUoKTtcclxuICAgICAgICB2ZWMzLmNyb3NzKHJpZ2h0LCBmb3J3YXJkLCB2ZWMzLmZyb21WYWx1ZXMoMCwgMSwgMCkpO1xyXG4gICAgICAgIGNvbnN0IG1vdmVEaXJSaWdodCA9IHZlYzMuZnJvbVZhbHVlcyhyaWdodFswXSwgMCwgcmlnaHRbMl0pO1xyXG4gICAgICAgIHZlYzMubm9ybWFsaXplKG1vdmVEaXJSaWdodCwgbW92ZURpclJpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGludGVuZGVkIG1vdmVtZW50XHJcbiAgICAgICAgY29uc3QgbW92ZVZlYyA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICAgICAgY29uc3QgbW92ZUFtb3VudCA9IGNhbWVyYVNwZWVkICogZHQ7XHJcblxyXG4gICAgICAgIGlmIChrZXlzWydLZXlXJ10pIHZlYzMuc2NhbGVBbmRBZGQobW92ZVZlYywgbW92ZVZlYywgbW92ZURpckZvcndhcmQsIG1vdmVBbW91bnQpO1xyXG4gICAgICAgIGlmIChrZXlzWydLZXlTJ10pIHZlYzMuc2NhbGVBbmRBZGQobW92ZVZlYywgbW92ZVZlYywgbW92ZURpckZvcndhcmQsIC1tb3ZlQW1vdW50KTtcclxuICAgICAgICBpZiAoa2V5c1snS2V5QSddKSB2ZWMzLnNjYWxlQW5kQWRkKG1vdmVWZWMsIG1vdmVWZWMsIG1vdmVEaXJSaWdodCwgLW1vdmVBbW91bnQpO1xyXG4gICAgICAgIGlmIChrZXlzWydLZXlEJ10pIHZlYzMuc2NhbGVBbmRBZGQobW92ZVZlYywgbW92ZVZlYywgbW92ZURpclJpZ2h0LCBtb3ZlQW1vdW50KTtcclxuXHJcbiAgICAgICAgLy8gWCBBeGlzIC0gbW92ZSBQTEFZRVJcclxuICAgICAgICBwbGF5ZXJQb3NpdGlvblswXSArPSBtb3ZlVmVjWzBdO1xyXG4gICAgICAgIGNvbnN0IGhpdFggPSBjaGVja0NvbGxpc2lvbihwbGF5ZXJQb3NpdGlvbik7XHJcbiAgICAgICAgaWYgKGhpdFggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gU2FtZSBsb2dpYzogSWYgaXQncyBqdXN0IHRoZSBmbG9vciwgYWxsb3cgbW92ZW1lbnQuXHJcbiAgICAgICAgICAgIC8vIElmIGl0J3MgYSB3YWxsIChoaWdoZXIgdGhhbiBmbG9vciksIGJsb2NrLlxyXG4gICAgICAgICAgICBpZiAoaGl0WCArIDEuMCA+IHBsYXllclBvc2l0aW9uWzFdICsgMC4wNSkge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyUG9zaXRpb25bMF0gLT0gbW92ZVZlY1swXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gWiBBeGlzIC0gbW92ZSBQTEFZRVJcclxuICAgICAgICBwbGF5ZXJQb3NpdGlvblsyXSArPSBtb3ZlVmVjWzJdO1xyXG4gICAgICAgIGNvbnN0IGhpdFogPSBjaGVja0NvbGxpc2lvbihwbGF5ZXJQb3NpdGlvbik7XHJcbiAgICAgICAgaWYgKGhpdFogIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGhpdFogKyAxLjAgPiBwbGF5ZXJQb3NpdGlvblsxXSArIDAuMDUpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllclBvc2l0aW9uWzJdIC09IG1vdmVWZWNbMl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tIENhbWVyYSBVcGRhdGVzIENvbXBsZXRlZCAtLS1cclxuXHJcbiAgICAvLyBDUklUSUNBTCBGSVg6IFJheWNhc3QgbW92ZWQgdG8gRU5EIG9mIGZyYW1lLCBhZnRlciBjYW1lcmEgcG9zaXRpb24gaXMgZmluYWwuXHJcbiAgICAvLyBUaGlzIGVuc3VyZXMgaGlnaGxpZ2h0IGV4YWN0bHkgbWF0Y2hlcyB0aGUgY3Jvc3NoYWlyIGZvciB0aGUgY3VycmVudCBmcmFtZS5cclxuICAgIGN1cnJlbnRIaXQgPSByYXljYXN0KCk7XHJcblxyXG4gICAgLy8gUmVjYWxjdWxhdGUgZm9yd2FyZCBmb3IgcmVuZGVyaW5nIGlmIG5lZWRlZCwgdGhvdWdoIHZpZXdNYXRyaXggdXNlcyB0YXJnZXRzLlxyXG4gICAgLy8gT3RoZXJ3aXNlIHRoZSBzZWxlY3Rpb24gbGFncyAxIGZyYW1lIGJlaGluZCB0aGUgY3Jvc3NoYWlyIGR1cmluZyBtb3ZlbWVudCwgZmVlbGluZyBcIm9mZi1jZW50ZXJlZFwiLlxyXG4gICAgLy8gUmF5Y2FzdCB3YXMgaGVyZSAobGluZSAyMTQxKSwgbW92ZWQgdG8gZW5kIG9mIGxvb3AgKGxpbmUgMjI0NilcclxuICAgIC8vIGN1cnJlbnRIaXQgPSByYXljYXN0KCk7XHJcbiAgICBjb25zdCBmb3J3YXJkID0gZ2V0Q2FtZXJhRm9yd2FyZCgpO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldCA9IHZlYzMuY3JlYXRlKCk7XHJcblxyXG4gICAgLy8gLS0tIFRhcmdldCBDYWxjdWxhdGlvbiAoRm9yIExvb2tBdCkgLS0tXHJcbiAgICAvLyBDYW1lcmEgUG9zaXRpb24gaXMgYWxyZWFkeSBzZXQgaW4gdGhlIGJsb2NrIGFib3ZlICh3aXRoIEFudGktQ2xpcCAvIE9yYml0IGxvZ2ljKVxyXG4gICAgLy8gSGVyZSB3ZSBqdXN0IGRldGVybWluZSB3aGF0IHRoZSBjYW1lcmEgaXMgTE9PS0lORyBBVC5cclxuXHJcbiAgICBpZiAoaXNSaWRpbmcpIHtcclxuICAgICAgICAvLyBMb29rIGF0IHNwaWRlciBjZW50ZXIgd2hlbiByaWRpbmdcclxuICAgICAgICB2ZWMzLmNvcHkodGFyZ2V0LCBzcGlkZXIucG9zaXRpb24pO1xyXG4gICAgICAgIHRhcmdldFsxXSArPSAxLjU7IC8vIExvb2sgYXQgc3BpZGVyIGNlbnRlciBoZWlnaHRcclxuICAgIH0gZWxzZSBpZiAoaXNUaGlyZFBlcnNvbk9uRm9vdCkge1xyXG4gICAgICAgIC8vIExvb2sgYXQgUGxheWVyIENlbnRlciAobm90IGhlYWQpXHJcbiAgICAgICAgdmVjMy5jb3B5KHRhcmdldCwgcGxheWVyUG9zaXRpb24pO1xyXG4gICAgICAgIHRhcmdldFsxXSArPSAxLjA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEZpcnN0IFBlcnNvbjogTG9vayBGb3J3YXJkIGZyb20gQ2FtZXJhIFBvc2l0aW9uXHJcbiAgICAgICAgdmVjMy5hZGQodGFyZ2V0LCBjYW1lcmFQb3NpdGlvbiwgZm9yd2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0NC5sb29rQXQodmlld01hdHJpeCwgY2FtZXJhUG9zaXRpb24sIHRhcmdldCwgdmVjMy5mcm9tVmFsdWVzKDAsIDEsIDApKTtcclxuXHJcbiAgICBtYXQ0Lm11bHRpcGx5KHZpZXdQcm9qZWN0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCB2aWV3TWF0cml4KTtcclxuXHJcbiAgICAvLyBVcGRhdGUgVW5pZm9ybXNcclxuICAgIC8vIFN0cnVjdHVyZTogbW9kZWxWaWV3UHJvamVjdGlvbiAoNjQpLCB2aWV3UHJvamVjdGlvbiAoNjQpXHJcbiAgICAvLyBXZSBvbmx5IHN0cmljdGx5IG5lZWQgdmlld1Byb2plY3Rpb24gZm9yIHRoZSBuZXcgc2hhZGVyLCBidXQgbGV0J3MganVzdCB3cml0ZSBvZmZzZXRzXHJcbiAgICAvLyBTaGFkZXIgZXhwZWN0czpcclxuICAgIC8vIHN0cnVjdCBVbmlmb3JtcyB7XHJcbiAgICAvLyAgICAgbW9kZWxWaWV3UHJvamVjdGlvbk1hdHJpeCA6IG1hdDR4NDxmMzI+LCAodW51c2VkIGluIHZlcnRleCBzaGFkZXIgbm93LCBidXQga2VwdCBmb3IgYWxpZ25tZW50L2NvbXBhdClcclxuICAgIC8vICAgICB2aWV3UHJvamVjdGlvbk1hdHJpeCA6IG1hdDR4NDxmMzI+LFxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIC0tLSBEYXkvTmlnaHQgQ3ljbGUgLS0tXHJcbiAgICBjb25zdCBjeWNsZUR1cmF0aW9uID0gMTIwLjA7XHJcblxyXG4gICAgLy8gQ2hlY2sgU2V0dGluZ3NcclxuICAgIGxldCBlZmZlY3RpdmVUaW1lID0gbm93IC8gMTAwMDtcclxuICAgIGlmIChjaGtMb2NrVGltZSAmJiBjaGtMb2NrVGltZS5jaGVja2VkKSB7XHJcbiAgICAgICAgZWZmZWN0aXZlVGltZSA9IDYwLjA7IC8vIE5vb24gKGhhbGZ3YXkgdGhyb3VnaCBmaXJzdCBjeWNsZSByb3VnaGx5PylcclxuICAgICAgICAvLyBPciBzcGVjaWZpYyBjb25zdGFudC4gTGV0J3Mgc2F5IGN5Y2xlIHN0YXJ0cyBhdCAwIChkYXduPykuIFxyXG4gICAgICAgIC8vIDEyMHMgdG90YWwuIDMwcyA9IE5vb24/IFxyXG4gICAgICAgIC8vIExldCdzIHN0aWNrIHRvIGxvZ2ljIGJlbG93OiBzaW4odGltZSAvIGR1cmF0aW9uICogUEkgKiAyKVxyXG4gICAgICAgIC8vIE5vb24gaXMgd2hlbiBzdW4gaXMgaGlnaC4gc2luID0gMS4gdGltZSA9IGR1cmF0aW9uIC8gNCA9IDMwcy5cclxuICAgICAgICBlZmZlY3RpdmVUaW1lID0gMzAuMDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0aW1lID0gZWZmZWN0aXZlVGltZTsgLy8gVXNlIGVmZmVjdGl2ZSB0aW1lXHJcbiAgICBjb25zdCBhbmdsZSA9ICh0aW1lIC8gY3ljbGVEdXJhdGlvbikgKiBNYXRoLlBJICogMjtcclxuICAgIGNvbnN0IHRpbWVPZkRheSA9IGVmZmVjdGl2ZVRpbWUgJSBjeWNsZUR1cmF0aW9uO1xyXG4gICAgY29uc3QgY3ljbGVQcm9ncmVzcyA9IHRpbWVPZkRheSAvIGN5Y2xlRHVyYXRpb247XHJcbiAgICBjb25zdCBzdW5BbmdsZSA9IGN5Y2xlUHJvZ3Jlc3MgKiBNYXRoLlBJICogMjtcclxuICAgIGNvbnN0IHN1bkRpciA9IHZlYzMuZnJvbVZhbHVlcyhNYXRoLmNvcyhzdW5BbmdsZSksIE1hdGguc2luKHN1bkFuZ2xlKSwgMC4yKTtcclxuICAgIHZlYzMubm9ybWFsaXplKHN1bkRpciwgc3VuRGlyKTtcclxuXHJcbiAgICBjb25zdCBkYXlDb2xvciA9IHZlYzMuZnJvbVZhbHVlcygxLjAsIDAuOTUsIDAuOSk7XHJcbiAgICBjb25zdCBzdW5TZXRDb2xvciA9IHZlYzMuZnJvbVZhbHVlcygxLjAsIDAuNiwgMC4zKTtcclxuICAgIGNvbnN0IG5pZ2h0Q29sb3IgPSB2ZWMzLmZyb21WYWx1ZXMoMC4xLCAwLjEsIDAuMyk7XHJcbiAgICBjb25zdCBhbWJEYXkgPSB2ZWMzLmZyb21WYWx1ZXMoMC4zLCAwLjMsIDAuNCk7XHJcbiAgICBjb25zdCBhbWJOaWdodCA9IHZlYzMuZnJvbVZhbHVlcygwLjA1LCAwLjA1LCAwLjEpO1xyXG5cclxuICAgIC8vIFZhcmlhYmxlcyAoSG9pc3RlZClcclxuICAgIGNvbnN0IGN1cnJlbnRTa3kgPSBnbG9iYWxTa3k7XHJcbiAgICBjb25zdCBsaWdodENvbG9yID0gZ2xvYmFsTGlnaHRDb2xvcjtcclxuICAgIGNvbnN0IGFtYmllbnRDb2xvciA9IGdsb2JhbEFtYmllbnRDb2xvcjtcclxuXHJcbiAgICAvLyBTa3kgQ29uc3RhbnRzXHJcbiAgICBjb25zdCBza3lEYXkgPSB2ZWMzLmZyb21WYWx1ZXMoMC41LCAwLjcsIDEuMCk7XHJcbiAgICBjb25zdCBza3lOaWdodCA9IHZlYzMuZnJvbVZhbHVlcygwLjA1LCAwLjA1LCAwLjEpO1xyXG4gICAgY29uc3Qgc2t5U3Vuc2V0ID0gdmVjMy5mcm9tVmFsdWVzKDEuMCwgMC41LCAwLjIpO1xyXG5cclxuICAgIGlmIChzdW5EaXJbMV0gPiAwLjIpIHsgLy8gRnVsbCBEYXlcclxuICAgICAgICB2ZWMzLmNvcHkoY3VycmVudFNreSwgc2t5RGF5KTtcclxuICAgICAgICB2ZWMzLmNvcHkobGlnaHRDb2xvciwgZGF5Q29sb3IpO1xyXG4gICAgICAgIHZlYzMuY29weShhbWJpZW50Q29sb3IsIGFtYkRheSk7XHJcbiAgICB9IGVsc2UgaWYgKHN1bkRpclsxXSA8IC0wLjIpIHsgLy8gRnVsbCBOaWdodFxyXG4gICAgICAgIHZlYzMuY29weShjdXJyZW50U2t5LCBza3lOaWdodCk7XHJcbiAgICAgICAgdmVjMy5jb3B5KGxpZ2h0Q29sb3IsIG5pZ2h0Q29sb3IpO1xyXG4gICAgICAgIHZlYzMuY29weShhbWJpZW50Q29sb3IsIGFtYk5pZ2h0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gU21vb3RoIFRyYW5zaXRpb24gKC0wLjIgdG8gMC4yKVxyXG4gICAgICAgIGNvbnN0IHQgPSAoc3VuRGlyWzFdICsgMC4yKSAvIDAuNDtcclxuICAgICAgICAvLyBFYXNlIGluL291dFxyXG4gICAgICAgIGNvbnN0IHRTbW9vdGggPSB0ICogdCAqICgzIC0gMiAqIHQpO1xyXG5cclxuICAgICAgICB2ZWMzLmxlcnAoY3VycmVudFNreSwgc2t5TmlnaHQsIHNreURheSwgdFNtb290aCk7XHJcbiAgICAgICAgLy8gQWRkIHN1bnNldCB0aW50IGFyb3VuZCAwLjVcclxuICAgICAgICBjb25zdCBzdW5zZXRTdHIgPSAxLjAgLSBNYXRoLmFicyh0U21vb3RoIC0gMC41KSAqIDI7XHJcbiAgICAgICAgdmVjMy5sZXJwKGN1cnJlbnRTa3ksIGN1cnJlbnRTa3ksIHNreVN1bnNldCwgc3Vuc2V0U3RyICogMC44KTtcclxuXHJcbiAgICAgICAgdmVjMy5sZXJwKGxpZ2h0Q29sb3IsIG5pZ2h0Q29sb3IsIGRheUNvbG9yLCB0U21vb3RoKTtcclxuICAgICAgICB2ZWMzLmxlcnAoYW1iaWVudENvbG9yLCBhbWJOaWdodCwgYW1iRGF5LCB0U21vb3RoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaGFkb3cgQ2FtZXJhIExvZ2ljXHJcbiAgICAvLyBGb2xsb3cgcGxheWVyXHJcbiAgICAvLyBSZXVzZSBnbG9iYWxMaWdodFZpZXdNYXRyaXhcclxuICAgIGNvbnN0IGxpZ2h0Vmlld01hdHJpeCA9IGdsb2JhbExpZ2h0Vmlld01hdHJpeDtcclxuICAgIGNvbnN0IHNoYWRvd0Rpc3QgPSA1MDtcclxuICAgIGNvbnN0IGxpZ2h0Q2FtUG9zID0gdmVjMy5mcm9tVmFsdWVzKFxyXG4gICAgICAgIGNhbWVyYVBvc2l0aW9uWzBdICsgc3VuRGlyWzBdICogc2hhZG93RGlzdCxcclxuICAgICAgICBjYW1lcmFQb3NpdGlvblsxXSArIHN1bkRpclsxXSAqIHNoYWRvd0Rpc3QsXHJcbiAgICAgICAgY2FtZXJhUG9zaXRpb25bMl0gKyBzdW5EaXJbMl0gKiBzaGFkb3dEaXN0XHJcbiAgICApO1xyXG4gICAgbWF0NC5sb29rQXQobGlnaHRWaWV3TWF0cml4LCBsaWdodENhbVBvcywgY2FtZXJhUG9zaXRpb24sIHZlYzMuZnJvbVZhbHVlcygwLCAxLCAwKSk7XHJcblxyXG4gICAgY29uc3QgbGlnaHRQcm9qZWN0aW9uTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcclxuICAgIGNvbnN0IG9ydGhvU2l6ZSA9IDYwO1xyXG4gICAgbWF0NC5vcnRobyhsaWdodFByb2plY3Rpb25NYXRyaXgsIC1vcnRob1NpemUsIG9ydGhvU2l6ZSwgLW9ydGhvU2l6ZSwgb3J0aG9TaXplLCAxLjAsIDIwMCk7XHJcblxyXG4gICAgY29uc3QgbGlnaHRWaWV3UHJvamVjdGlvbk1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XHJcbiAgICBtYXQ0Lm11bHRpcGx5KGxpZ2h0Vmlld1Byb2plY3Rpb25NYXRyaXgsIGxpZ2h0UHJvamVjdGlvbk1hdHJpeCwgbGlnaHRWaWV3TWF0cml4KTtcclxuXHJcbiAgICAvLyBVcGRhdGUgVW5pZm9ybXNcclxuICAgIGNvbnN0IHVuaWZvcm1EYXRhID0gbmV3IEZsb2F0MzJBcnJheSh1bmlmb3JtQnVmZmVyU2l6ZSAvIDQpO1xyXG4gICAgLy8gMC0xNTogTVZQIChVbnVzZWQpXHJcbiAgICAvLyAxNi0zMTogQ2FtIFZpZXdQcm9qXHJcbiAgICB1bmlmb3JtRGF0YS5zZXQodmlld1Byb2plY3Rpb25NYXRyaXgsIDE2KTtcclxuICAgIC8vIDMyLTQ3OiBMaWdodCBWaWV3UHJvalxyXG4gICAgdW5pZm9ybURhdGEuc2V0KGxpZ2h0Vmlld1Byb2plY3Rpb25NYXRyaXgsIDMyKTtcclxuICAgIC8vIDQ4LTUxOiBMaWdodCBEaXIgKHh5eiwgcGFkKVxyXG4gICAgdW5pZm9ybURhdGEuc2V0KFtzdW5EaXJbMF0sIHN1bkRpclsxXSwgc3VuRGlyWzJdLCAwXSwgNDgpO1xyXG4gICAgLy8gNTItNTU6IExpZ2h0IENvbG9yXHJcbiAgICB1bmlmb3JtRGF0YS5zZXQoW2xpZ2h0Q29sb3JbMF0sIGxpZ2h0Q29sb3JbMV0sIGxpZ2h0Q29sb3JbMl0sIDEuMF0sIDUyKTtcclxuICAgIC8vIDU2LTU5OiBBbWJpZW50IENvbG9yXHJcbiAgICB1bmlmb3JtRGF0YS5zZXQoW2FtYmllbnRDb2xvclswXSwgYW1iaWVudENvbG9yWzFdLCBhbWJpZW50Q29sb3JbMl0sIDEuMF0sIDU2KTtcclxuICAgIC8vIDYwLTYzOiBTa3kgQ29sb3IgKGZvciBmb2cpXHJcbiAgICB1bmlmb3JtRGF0YS5zZXQoW2N1cnJlbnRTa3lbMF0sIGN1cnJlbnRTa3lbMV0sIGN1cnJlbnRTa3lbMl0sIDEuMF0sIDYwKTtcclxuICAgIC8vIDY0LTY3OiBDYW1lcmEgUG9zaXRpb25cclxuICAgIHVuaWZvcm1EYXRhLnNldChbY2FtZXJhUG9zaXRpb25bMF0sIGNhbWVyYVBvc2l0aW9uWzFdLCBjYW1lcmFQb3NpdGlvblsyXSwgMS4wXSwgNjQpO1xyXG5cclxuICAgIC8vIFRvcmNoZXMgcmVtb3ZlZFxyXG4gICAgdW5pZm9ybURhdGEuc2V0KFswLCAwLCAwLCAwXSwgNjgpO1xyXG5cclxuICAgIGRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih1bmlmb3JtQnVmZmVyLCAwLCB1bmlmb3JtRGF0YSk7XHJcblxyXG4gICAgLy8gQ3VsbGluZyBVcGRhdGUgVHJpZ2dlclxyXG4gICAgLy8gUmVidWlsZCB3b3JsZCBpZiBjYW1lcmEgbW92ZWQvcm90YXRlZCBzaWduaWZpY2FudGx5P1xyXG4gICAgLy8gVXNpbmcgaW50ZXJuYWwgdGhyb3R0bGUgb2YgNCBibG9ja3MgZGlzdGFuY2Ugb3IgMC4xIHJhZCByb3RhdGlvbi5cclxuICAgIHJlYnVpbGRXb3JsZChmYWxzZSk7XHJcblxyXG5cclxuICAgIC8vIERyYXcgU2t5IFNwcml0ZXMgKFN1bi9Nb29uKVxyXG4gICAgY29uc3Qgc2t5RGlzdCA9IDgwLjA7XHJcbiAgICBjb25zdCBzdW5Qb3MgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgdmVjMy5zY2FsZShzdW5Qb3MsIHN1bkRpciwgc2t5RGlzdCk7XHJcbiAgICB2ZWMzLmFkZChzdW5Qb3MsIHN1blBvcywgY2FtZXJhUG9zaXRpb24pO1xyXG5cclxuICAgIGNvbnN0IG1vb25Qb3MgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgdmVjMy5zY2FsZShtb29uUG9zLCBzdW5EaXIsIC1za3lEaXN0KTsgLy8gT3Bwb3NpdGUgdG8gc3VuXHJcbiAgICB2ZWMzLmFkZChtb29uUG9zLCBtb29uUG9zLCBjYW1lcmFQb3NpdGlvbik7XHJcblxyXG4gICAgY29uc3QgY29tbWFuZEVuY29kZXIgPSBkZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcclxuXHJcbiAgICAvLyAxLiBTaGFkb3cgUGFzc1xyXG4gICAgaWYgKCFjaGtTaGFkb3dzIHx8IGNoa1NoYWRvd3MuY2hlY2tlZCkge1xyXG4gICAgICAgIGNvbnN0IHNoYWRvd1Bhc3MgPSBjb21tYW5kRW5jb2Rlci5iZWdpblJlbmRlclBhc3Moe1xyXG4gICAgICAgICAgICBjb2xvckF0dGFjaG1lbnRzOiBbXSxcclxuICAgICAgICAgICAgZGVwdGhTdGVuY2lsQXR0YWNobWVudDoge1xyXG4gICAgICAgICAgICAgICAgdmlldzogc2hhZG93RGVwdGhUZXh0dXJlLmNyZWF0ZVZpZXcoKSxcclxuICAgICAgICAgICAgICAgIGRlcHRoQ2xlYXJWYWx1ZTogMS4wLFxyXG4gICAgICAgICAgICAgICAgZGVwdGhMb2FkT3A6ICdjbGVhcicsXHJcbiAgICAgICAgICAgICAgICBkZXB0aFN0b3JlT3A6ICdzdG9yZScsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzaGFkb3dQYXNzLnNldFBpcGVsaW5lKHNoYWRvd1BpcGVsaW5lKTtcclxuICAgICAgICBzaGFkb3dQYXNzLnNldEJpbmRHcm91cCgwLCBzaGFkb3dCaW5kR3JvdXBSZWFsKTtcclxuICAgICAgICBzaGFkb3dQYXNzLnNldFZlcnRleEJ1ZmZlcigwLCB2ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgICAgIHNoYWRvd1Bhc3Muc2V0VmVydGV4QnVmZmVyKDEsIGluc3RhbmNlQnVmZmVyKTtcclxuICAgICAgICBzaGFkb3dQYXNzLmRyYXcoMzYsIE1hdGgubWluKGN1cnJlbnRJbnN0YW5jZUNvdW50LCBtYXhJbnN0YW5jZXMpKTtcclxuICAgICAgICBzaGFkb3dQYXNzLmVuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIE1haW4gUGFzc1xyXG4gICAgY29uc3QgdGV4dHVyZVZpZXcgPSBjb250ZXh0Py5nZXRDdXJyZW50VGV4dHVyZSgpLmNyZWF0ZVZpZXcoKTtcclxuICAgIGNvbnN0IHJlbmRlclBhc3NEZXNjcmlwdG9yOiBHUFVSZW5kZXJQYXNzRGVzY3JpcHRvciA9IHtcclxuICAgICAgICBjb2xvckF0dGFjaG1lbnRzOiBbe1xyXG4gICAgICAgICAgICB2aWV3OiB0ZXh0dXJlVmlldyEsXHJcbiAgICAgICAgICAgIC8vIGNsZWFyVmFsdWU6IHsgcjogMS4wLCBnOiAwLjAsIGI6IDEuMCwgYTogMS4wIH0sXHJcbiAgICAgICAgICAgIGNsZWFyVmFsdWU6IHsgcjogY3VycmVudFNreVswXSwgZzogY3VycmVudFNreVsxXSwgYjogY3VycmVudFNreVsyXSwgYTogMS4wIH0sXHJcbiAgICAgICAgICAgIGxvYWRPcDogJ2NsZWFyJywgc3RvcmVPcDogJ3N0b3JlJyxcclxuICAgICAgICB9XSxcclxuICAgICAgICBkZXB0aFN0ZW5jaWxBdHRhY2htZW50OiB7XHJcbiAgICAgICAgICAgIHZpZXc6IGRlcHRoVGV4dHVyZS5jcmVhdGVWaWV3KCksXHJcbiAgICAgICAgICAgIGRlcHRoQ2xlYXJWYWx1ZTogMS4wLCBkZXB0aExvYWRPcDogJ2NsZWFyJywgZGVwdGhTdG9yZU9wOiAnc3RvcmUnLFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGFzc0VuY29kZXIgPSBjb21tYW5kRW5jb2Rlci5iZWdpblJlbmRlclBhc3MocmVuZGVyUGFzc0Rlc2NyaXB0b3IpO1xyXG5cclxuICAgIC8vIERyYXcgV29ybGQgKFRlcnJhaW4pXHJcbiAgICBwYXNzRW5jb2Rlci5zZXRQaXBlbGluZShwaXBlbGluZSk7XHJcbiAgICBwYXNzRW5jb2Rlci5zZXRCaW5kR3JvdXAoMCwgYmluZEdyb3VwKTtcclxuICAgIHBhc3NFbmNvZGVyLnNldFZlcnRleEJ1ZmZlcigwLCB2ZXJ0ZXhCdWZmZXIpO1xyXG4gICAgcGFzc0VuY29kZXIuc2V0VmVydGV4QnVmZmVyKDEsIGluc3RhbmNlQnVmZmVyKTtcclxuICAgIHBhc3NFbmNvZGVyLmRyYXcoMzYsIE1hdGgubWluKGN1cnJlbnRJbnN0YW5jZUNvdW50LCBtYXhJbnN0YW5jZXMpKTtcclxuXHJcbiAgICAvLyBEcmF3IE91dGxpbmUgLSBSRU1PVkVEIChEdXBsaWNhdGUgcGFzcywgY2F1c2luZyB2aXN1YWwgZ2xpdGNoZXMpXHJcbiAgICAvLyBXZSB1c2UgdGhlIEhpZ2hpZ2h0IEJveCBsb2dpYyBiZWxvdyBpbnN0ZWFkLlxyXG5cclxuICAgIC8vIERyYXcgRW50aXRpZXMgKFN1bi9Nb29uL1NwaWRlci9QYXJ0aWNsZXMvVE5UKVxyXG4gICAgY29uc3QgcUlkID0gWzAsIDAsIDAsIDFdIGFzIHVua25vd24gYXMgYW55O1xyXG5cclxuICAgIHNpbXBsZVJlbmRlcmVyLnN0YXJ0RnJhbWUocGFzc0VuY29kZXIsIHZpZXdQcm9qZWN0aW9uTWF0cml4KTtcclxuICAgIC8vIFN1biAmIE1vb25cclxuICAgIHNpbXBsZVJlbmRlcmVyLmRyYXdDdWJlKGRldmljZSwgcGFzc0VuY29kZXIsIHN1blBvcywgcUlkLCB2ZWMzLmZyb21WYWx1ZXMoNSwgNSwgNSksIHZlYzQuZnJvbVZhbHVlcygxLCAxLCAwLCAxKSk7XHJcbiAgICBzaW1wbGVSZW5kZXJlci5kcmF3Q3ViZShkZXZpY2UsIHBhc3NFbmNvZGVyLCBtb29uUG9zLCBxSWQsIHZlYzMuZnJvbVZhbHVlcyg0LCA0LCA0KSwgdmVjNC5mcm9tVmFsdWVzKDAuOSwgMC45LCAxLCAxKSk7XHJcblxyXG4gICAgLy8gU3BpZGVyXHJcbiAgICBzcGlkZXIuZHJhdyhkZXZpY2UsIHBhc3NFbmNvZGVyLCBzaW1wbGVSZW5kZXJlciwgaXNSaWRpbmcpO1xyXG5cclxuICAgIC8vIFBsYXllciBNb2RlbFxyXG4gICAgaWYgKGlzUmlkaW5nIHx8IGlzVGhpcmRQZXJzb25PbkZvb3QpIHtcclxuICAgICAgICAvLyBEcmF3IFBsYXllclxyXG4gICAgICAgIGlmIChpc1JpZGluZykge1xyXG4gICAgICAgICAgICAvLyBDb25zdGFudCBzbmFwIHRvIHNwaWRlciBiYWNrXHJcbiAgICAgICAgICAgIHZlYzMuY29weShwbGF5ZXJQb3NpdGlvbiwgc3BpZGVyLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgcGxheWVyUG9zaXRpb25bMV0gKz0gMC44OyAvLyBTaXQgb24gYmFjayAoTG93ZXJlZCBmcm9tIDEuOClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExvZ2ljIGZpeDogV2hlbiByaWRpbmcsIEZPUkNFIGlzTW92aW5nIHRvIGZhbHNlIHRvIHN0b3Agd2Fsa2luZyBhbmltYXRpb25cclxuICAgICAgICBjb25zdCBpc1dhbGtpbmdJbnB1dCA9IChrZXlzWydLZXlXJ10gfHwga2V5c1snS2V5UyddIHx8IGtleXNbJ0tleUEnXSB8fCBrZXlzWydLZXlEJ10pO1xyXG4gICAgICAgIGNvbnN0IHNob3VsZEFuaW1hdGVXYWxrID0gaXNSaWRpbmcgPyBmYWxzZSA6IGlzV2Fsa2luZ0lucHV0O1xyXG5cclxuICAgICAgICBwbGF5ZXJNb2RlbC5kcmF3KGRldmljZSwgcGFzc0VuY29kZXIsIHNpbXBsZVJlbmRlcmVyLCBwbGF5ZXJQb3NpdGlvbiwgY2FtZXJhWWF3LCBjYW1lcmFQaXRjaCwgc2hvdWxkQW5pbWF0ZVdhbGssIHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCwgaXNSaWRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcnRpY2xlc1xyXG4gICAgcGFydGljbGVTeXN0ZW0uZHJhdyhkZXZpY2UsIHBhc3NFbmNvZGVyLCBzaW1wbGVSZW5kZXJlcik7XHJcblxyXG4gICAgLy8gVE5UXHJcbiAgICBjb25zdCB3aGl0ZUNvbG9yID0gdmVjNC5mcm9tVmFsdWVzKDEwLCAxMCwgMTAsIDEpO1xyXG4gICAgY29uc3QgdG50Q29sb3IgPSB2ZWM0LmZyb21WYWx1ZXMoMSwgMSwgMSwgMSk7XHJcbiAgICBmb3IgKGxldCB0bnQgb2YgYWN0aXZlVE5Ucykge1xyXG4gICAgICAgIGNvbnN0IGZsYXNoID0gTWF0aC5zaW4ocGVyZm9ybWFuY2Uubm93KCkgLyA1MCAqICg0LjAgLSB0bnQudGltZXIpKSA+IDAuNTtcclxuICAgICAgICBzaW1wbGVSZW5kZXJlci5kcmF3Q3ViZShkZXZpY2UsIHBhc3NFbmNvZGVyLCB0bnQucG9zaXRpb24sIHFJZCwgdG50LnNjYWxlLCBmbGFzaCA/IHdoaXRlQ29sb3IgOiB0bnRDb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyBQaWNrdXBzXHJcbiAgICBwaWNrdXBTeXN0ZW0uZHJhdyhkZXZpY2UsIHBhc3NFbmNvZGVyLCBzaW1wbGVSZW5kZXJlcik7XHJcblxyXG4gICAgLy8gSGlnaGxpZ2h0IEJveCAoT3V0bGluZSkgLSB1c2luZyBTaW1wbGVSZW5kZXJlciBhcyB0cmFuc3BhcmVudCBibGFjayBib3hcclxuICAgIGlmIChjdXJyZW50SGl0KSB7XHJcbiAgICAgICAgLy8gU2xpZ2h0bHkgbGFyZ2VyIHRoYW4gYmxvY2sgdG8gcHJldmVudCBaLWZpZ2h0aW5nXHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSB2ZWMzLmZyb21WYWx1ZXMoMS4wMSwgMS4wMSwgMS4wMSk7XHJcbiAgICAgICAgY29uc3QgcG9zID0gdmVjMy5jbG9uZShjdXJyZW50SGl0LnBvaW50KTsgLy8gVGhpcyBpcyB1c3VhbGx5IHRoZSBjZW50ZXIgaWYgcmF5Y2FzdCByZXR1cm5zIGNlbnRlcj8gXHJcbiAgICAgICAgLy8gV2FpdCwgUmF5Y2FzdC5wb2ludCBpcyB0aGUgSU5URVJTRUNUSU9OIHBvaW50IG9yIEJMT0NLIGNlbnRlcj9cclxuICAgICAgICAvLyBSYXljYXN0IHVzdWFsbHkgcmV0dXJucyBIaXQgUG9pbnQuIFxyXG4gICAgICAgIC8vIFdlIG5lZWQgdGhlIEJMT0NLIGNlbnRlciBmb3IgdGhlIGJveC5cclxuICAgICAgICAvLyBjdXJyZW50SGl0IGxvZ2ljIGluIGByYXljYXN0YCB1c3VhbGx5IHJldHVybnMgYHBvaW50YCBhcyBpbnRlcnNlY3Rpb24sIGJ1dCB3ZSBuZWVkIHRoZSBibG9jayBjb29yZGluYXRlLlxyXG4gICAgICAgIC8vIExldCdzIGFzc3VtZSBmb3Igbm93IHdlIG5lZWQgdG8gcm91bmQgYHBvaW50YD8gXHJcbiAgICAgICAgLy8gQ2hlY2tpbmcgcmF5Y2FzdCB1c2FnZTogYGNvbnN0IHB4ID0gTWF0aC5yb3VuZChjdXJyZW50SGl0LnBvaW50WzBdKWAuXHJcbiAgICAgICAgLy8gQWN0dWFsbHksIGxldCdzIGxvb2sgYXQgYHJheWNhc3RgIGxvZ2ljIGxhdGVyIGlmIG5lZWRlZC4gXHJcbiAgICAgICAgLy8gRm9yIG5vdywgbGV0J3MgYXNzdW1lIGBjdXJyZW50SGl0LnBvaW50YCBJUyB0aGUgaGl0IHBvaW50LCB3aGljaCBtaWdodCBiZSBvbiB0aGUgZmFjZS5cclxuICAgICAgICAvLyBXZSB3YW50IHRoZSBibG9jayBjdWJlIGNlbnRlci5cclxuICAgICAgICAvLyBJZiBgY3VycmVudEhpdC5wb2ludGAgaXMgdGhlIGZhY2UtaGl0LCB3ZSBuZWVkIHRvIGZsb29yL3JvdW5kIHRvIGdldCBibG9jayBjZW50ZXI/XHJcbiAgICAgICAgLy8gVXN1YWxseSByYXljYXN0IHJldHVybnMgeyBwb2ludCwgbm9ybWFsLCAuLi4gfS5cclxuICAgICAgICAvLyBMZXQncyBjaGVjayBob3cgdGhlIG9sZCBvdXRsaW5lIHdvcmtlZDogYG91dGxpbmVEYXRhLnNldChjdXJyZW50SGl0LnBvaW50KWAuXHJcbiAgICAgICAgLy8gVGhlIHNoYWRlciBwcm9iYWJseSBleHBhbmRlZCBpdD8gXHJcbiAgICAgICAgLy8gTGV0J3MgYXNzdW1lIGBjdXJyZW50SGl0LnBvaW50YCBpcyB0aGUgYmxvY2sgY2VudGVyIGZvciBub3csIG9yIHVzZSB0aGUgYGVtcHR5YCBwcm9wZXJ0eSBuZWlnaGJvcj9cclxuICAgICAgICAvLyBMZXQncyBqdXN0IHVzZSBgY3VycmVudEhpdC5wb2ludGAgYnV0IGFzc3VtZSBpdCBuZWVkcyB0byBiZSBibG9jay1hbGlnbmVkP1xyXG4gICAgICAgIC8vIEFjdHVhbGx5LCByYXljYXN0aW5nIHVzdWFsbHkgcG9wdWxhdGVzIGBjdXJyZW50SGl0YCB3aXRoIHRoZSBgcG9pbnRgIG9mIGludGVyc2VjdGlvbi5cclxuICAgICAgICAvLyBUbyBoaWdobGlnaHQgdGhlIGJsb2NrLCB3ZSBuZWVkIGBmbG9vcihwb2ludCAtIG5vcm1hbCAqIDAuMDEpICsgMC41YC5cclxuICAgICAgICAvLyBMZXQncyBqdXN0IHRyeSB1c2luZyB0aGUgcG9pbnQgZm9yIG5vdy5cclxuXHJcbiAgICAgICAgLy8gVXNlIGEgYmxhY2sgc2VtaS10cmFuc3BhcmVudCBib3hcclxuICAgICAgICBjb25zdCBvdXRsaW5lQ29sb3IgPSB2ZWM0LmZyb21WYWx1ZXMoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAvLyBXZSBuZWVkIHRvIHNuYXAgdG8gYmxvY2sgY2VudGVyLlxyXG4gICAgICAgIC8vIEJhc2VkIG9uIGBjaGVja0NvbGxpc2lvbmAsIGJsb2NrcyBhcmUgYXQgaW50ZWdlciBjb29yZHMuXHJcbiAgICAgICAgLy8gU28gY2VudGVyIGlzIGBmbG9vcih4KSswLjVgLlxyXG4gICAgICAgIC8vIExldCdzIHNuYXAgaXQuXHJcbiAgICAgICAgLy8gQnV0IGBjdXJyZW50SGl0LnBvaW50YCBtaWdodCBiZSB0aGUgc3BlY2lmaWMgSElUIHBvaW50LlxyXG4gICAgICAgIC8vIFRoZSB0ZXh0IGVhcmxpZXIgc2FpZCBgY29uc3QgcHggPSBNYXRoLnJvdW5kKGN1cnJlbnRIaXQucG9pbnRbMF0pYC5cclxuICAgICAgICAvLyBJZiB3ZSB3YW50IHRvIGhpZ2hsaWdodCB0aGUgYmxvY2sgKmNvbnRhaW5pbmcqIHRoZSBoaXQgKG9yIHRoZSBibG9jayAqaGl0Kik6XHJcbiAgICAgICAgLy8gVHlwaWNhbGx5OiBibG9ja1BvcyA9IGZsb29yKGhpdFBvcyAtIG5vcm1hbCAqIGVwc2lsb24pLlxyXG4gICAgICAgIC8vIExldCdzIGFwcHJveGltYXRlIGJ5IGBNYXRoLnJvdW5kYCBidXQgMC41IG9mZnNldD9cclxuICAgICAgICAvLyBTdGFuZGFyZCBNaW5lY3JhZnQgYmxvY2tzIGFyZSBjZW50ZXJlZCBhdCBYLjUsIFkuNSwgWi41PyBPciBYLjA/XHJcbiAgICAgICAgLy8gTXkgYG1ha2VDdWJlYCB2ZXJ0aWNlcyBhcmUgMC4uMSByYW5nZS4gQ2VudGVyZWQgb3B0aW9uYWxseT9cclxuICAgICAgICAvLyBgY3ViZVZlcnRpY2VzYCAobGluZXMgMTQ3KykgYXJlIDAuLjEuIFxyXG4gICAgICAgIC8vIFNvIGJsb2NrIGF0IGludGVnZXIgYCh4LHkseilgIG9jY3VwaWVzIGBbeCwgeCsxXWAuIENlbnRlciBpcyBgeCswLjVgLlxyXG4gICAgICAgIC8vIFNpbXBsZVJlbmRlcmVyIGRyYXdzIGNlbnRlcmVkIGN1YmVzP1xyXG4gICAgICAgIC8vIGBTaW1wbGVSZW5kZXJlcmAgdmVydGljZXM6IGAtMC41YCB0byBgMC41YCAoTGluZXMgNzArIGluIHJlbmRlcmVyLnRzKS5cclxuICAgICAgICAvLyBTbyB5ZXMsIGl0IGRyYXdzIGNlbnRlcmVkIGF0IGBwb3NpdGlvbmAuXHJcbiAgICAgICAgLy8gU28gd2UgbmVlZCB0byBwYXNzIGBmbG9vcihoaXQpICsgMC41YC5cclxuXHJcbiAgICAgICAgY29uc3QgYnggPSBjdXJyZW50SGl0LnBvaW50WzBdICsgMC41O1xyXG4gICAgICAgIGNvbnN0IGJ5ID0gY3VycmVudEhpdC5wb2ludFsxXSArIDAuNTtcclxuICAgICAgICBjb25zdCBieiA9IGN1cnJlbnRIaXQucG9pbnRbMl0gKyAwLjU7XHJcblxyXG4gICAgICAgIGNvbnN0IGJveFBvcyA9IHZlYzMuZnJvbVZhbHVlcyhieCwgYnksIGJ6KTtcclxuICAgICAgICBzaW1wbGVSZW5kZXJlci5kcmF3Q3ViZShkZXZpY2UsIHBhc3NFbmNvZGVyLCBib3hQb3MsIHFJZCwgc2NhbGUsIG91dGxpbmVDb2xvcik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwYXNzRW5jb2Rlci5lbmQoKTtcclxuXHJcbiAgICBkZXZpY2UucXVldWUuc3VibWl0KFtjb21tYW5kRW5jb2Rlci5maW5pc2goKV0pO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcclxufVxyXG5cclxuLy8gVXBkYXRlIENyb3NzaGFpciB0byBhIERPVFxyXG5jcm9zc2hhaXIuaW5uZXJIVE1MID0gYFxyXG48ZGl2IHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6OHB4OyB0b3A6OHB4OyB3aWR0aDo0cHg7IGhlaWdodDo0cHg7IGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwxLjApOyBib3JkZXItcmFkaXVzOjUwJTsgYm94LXNoYWRvdzogMCAwIDJweCAjMDAwO1wiPjwvZGl2PlxyXG5gO1xyXG5cclxuZnJhbWUoKTtcclxuIiwiLy8gU2ltcGxlIDJEIE5vaXNlIEltcGxlbWVudGF0aW9uXHJcbi8vIEJhc2VkIG9uIGEgc2ltcGxlIHZhbHVlIG5vaXNlIG9yIHBlcmxpbiBhcHByb3hpbWF0aW9uXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZnJhYyh4OiBudW1iZXIpIHsgcmV0dXJuIHggLSBNYXRoLmZsb29yKHgpOyB9XHJcbmV4cG9ydCBmdW5jdGlvbiBtaXgoYTogbnVtYmVyLCBiOiBudW1iZXIsIHQ6IG51bWJlcikgeyByZXR1cm4gYSArIChiIC0gYSkgKiB0OyB9XHJcblxyXG4vLyBIYXNoIGZ1bmN0aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNoKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCBhID0gTWF0aC5zaW4oeCAqIDEyLjk4OTggKyB5ICogNzguMjMzKSAqIDQzNzU4LjU0NTM7XHJcbiAgICByZXR1cm4gYSAtIE1hdGguZmxvb3IoYSk7XHJcbn1cclxuXHJcbi8vIDJEIE5vaXNlXHJcbmV4cG9ydCBmdW5jdGlvbiBub2lzZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBpeCA9IE1hdGguZmxvb3IoeCk7XHJcbiAgICBjb25zdCBpeSA9IE1hdGguZmxvb3IoeSk7XHJcbiAgICBjb25zdCBmeCA9IGZyYWMoeCk7XHJcbiAgICBjb25zdCBmeSA9IGZyYWMoeSk7XHJcblxyXG4gICAgLy8gU21vb3Roc3RlcCBpbnRlcnBvbGF0aW9uXHJcbiAgICBjb25zdCB0eCA9IGZ4ICogZnggKiAoMy4wIC0gMi4wICogZngpO1xyXG4gICAgY29uc3QgdHkgPSBmeSAqIGZ5ICogKDMuMCAtIDIuMCAqIGZ5KTtcclxuXHJcbiAgICBjb25zdCBhID0gaGFzaChpeCwgaXkpO1xyXG4gICAgY29uc3QgYiA9IGhhc2goaXggKyAxLCBpeSk7XHJcbiAgICBjb25zdCBjID0gaGFzaChpeCwgaXkgKyAxKTtcclxuICAgIGNvbnN0IGQgPSBoYXNoKGl4ICsgMSwgaXkgKyAxKTtcclxuXHJcbiAgICByZXR1cm4gbWl4KG1peChhLCBiLCB0eCksIG1peChjLCBkLCB0eCksIHR5KTtcclxufVxyXG5cclxuLy8gRkJNIChGcmFjdGFsIEJyb3duaWFuIE1vdGlvbikgZm9yIGJldHRlciB0ZXJyYWluXHJcbmV4cG9ydCBmdW5jdGlvbiBmYm0oeDogbnVtYmVyLCB5OiBudW1iZXIsIG9jdGF2ZXM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBsZXQgdmFsdWUgPSAwO1xyXG4gICAgbGV0IGFtcGxpdHVkZSA9IDAuNTtcclxuICAgIGxldCBmcmVxdWVuY3kgPSAxLjA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvY3RhdmVzOyBpKyspIHtcclxuICAgICAgICB2YWx1ZSArPSBub2lzZSh4ICogZnJlcXVlbmN5LCB5ICogZnJlcXVlbmN5KSAqIGFtcGxpdHVkZTtcclxuICAgICAgICBhbXBsaXR1ZGUgKj0gMC41O1xyXG4gICAgICAgIGZyZXF1ZW5jeSAqPSAyLjA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgdmVjMywgdmVjNCB9IGZyb20gJ2dsLW1hdHJpeCc7XHJcbmltcG9ydCB7IFNpbXBsZVJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXJlcic7XHJcblxyXG5jbGFzcyBQYXJ0aWNsZSB7XHJcbiAgICBwb3NpdGlvbjogdmVjMyA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICB2ZWxvY2l0eTogdmVjMyA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICBjb2xvcjogdmVjNCA9IHZlYzQuY3JlYXRlKCk7XHJcbiAgICBsaWZlOiBudW1iZXIgPSAwO1xyXG4gICAgbWF4TGlmZTogbnVtYmVyID0gMDtcclxuICAgIHNpemU6IG51bWJlciA9IDAuMjtcclxuICAgIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFydGljbGVTeXN0ZW0ge1xyXG4gICAgcHJpdmF0ZSBwYXJ0aWNsZXM6IFBhcnRpY2xlW10gPSBbXTtcclxuICAgIHByaXZhdGUgbWF4UGFydGljbGVzID0gMTAwMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4UGFydGljbGVzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChuZXcgUGFydGljbGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVtaXQocG9zOiB2ZWMzLCBjb3VudDogbnVtYmVyLCBjb2xvckJhc2U6IHZlYzQsIHNwZWVkOiBudW1iZXIgPSA1LjApIHtcclxuICAgICAgICBsZXQgc3Bhd25lZCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnBhcnRpY2xlcykge1xyXG4gICAgICAgICAgICBpZiAoIXAuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2ZWMzLmNvcHkocC5wb3NpdGlvbiwgcG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSYW5kb20gVmVsb2NpdHlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ4ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ5ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ6ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMjtcclxuICAgICAgICAgICAgICAgIHZlYzMuc2V0KHAudmVsb2NpdHksIHJ4LCByeSwgcnopO1xyXG4gICAgICAgICAgICAgICAgdmVjMy5ub3JtYWxpemUocC52ZWxvY2l0eSwgcC52ZWxvY2l0eSk7XHJcbiAgICAgICAgICAgICAgICB2ZWMzLnNjYWxlKHAudmVsb2NpdHksIHAudmVsb2NpdHksIE1hdGgucmFuZG9tKCkgKiBzcGVlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ29sb3IgdmFyaWF0aW9uXHJcbiAgICAgICAgICAgICAgICB2ZWM0LmNvcHkocC5jb2xvciwgY29sb3JCYXNlKTtcclxuICAgICAgICAgICAgICAgIHAuY29sb3JbMF0gKz0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4xO1xyXG4gICAgICAgICAgICAgICAgcC5jb2xvclsxXSArPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjE7XHJcbiAgICAgICAgICAgICAgICBwLmNvbG9yWzJdICs9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuMTtcclxuXHJcbiAgICAgICAgICAgICAgICBwLm1heExpZmUgPSAxLjAgKyBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgcC5saWZlID0gcC5tYXhMaWZlO1xyXG4gICAgICAgICAgICAgICAgcC5zaXplID0gMC4xICsgTWF0aC5yYW5kb20oKSAqIDAuMjtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGF3bmVkKys7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3Bhd25lZCA+PSBjb3VudCkgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucGFydGljbGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChwLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgcC5saWZlIC09IGR0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHAubGlmZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBHcmF2aXR5XHJcbiAgICAgICAgICAgICAgICBwLnZlbG9jaXR5WzFdIC09IDkuOCAqIGR0O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1vdmVcclxuICAgICAgICAgICAgICAgIHZlYzMuc2NhbGVBbmRBZGQocC5wb3NpdGlvbiwgcC5wb3NpdGlvbiwgcC52ZWxvY2l0eSwgZHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZsb29yIGNoZWNrIChzaW1wbGUpXHJcbiAgICAgICAgICAgICAgICAvLyBpZihwLnBvc2l0aW9uWzFdIDwgLTYwKSBwLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoZGV2aWNlOiBHUFVEZXZpY2UsIHBhc3NFbmNvZGVyOiBHUFVSZW5kZXJQYXNzRW5jb2RlciwgcmVuZGVyZXI6IFNpbXBsZVJlbmRlcmVyKSB7XHJcbiAgICAgICAgLy8gVXNlIGEgdGVtcCBxdWF0IGZvciBubyByb3RhdGlvblxyXG4gICAgICAgIGNvbnN0IHEgPSBbMCwgMCwgMCwgMV0gYXMgdW5rbm93biBhcyBhbnk7IC8vIHF1YXQuY3JlYXRlKClcclxuICAgICAgICBjb25zdCBzID0gdmVjMy5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnBhcnRpY2xlcykge1xyXG4gICAgICAgICAgICBpZiAocC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHZlYzMuc2V0KHMsIHAuc2l6ZSwgcC5zaXplLCBwLnNpemUpO1xyXG4gICAgICAgICAgICAgICAgLy8gQWxwaGEgZmFkZVxyXG4gICAgICAgICAgICAgICAgcC5jb2xvclszXSA9IHAubGlmZSAvIHAubWF4TGlmZTtcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLmRyYXdDdWJlKGRldmljZSwgcGFzc0VuY29kZXIsIHAucG9zaXRpb24sIHEsIHMsIHAuY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHZlYzMsIHZlYzQsIHF1YXQgfSBmcm9tICdnbC1tYXRyaXgnO1xyXG5pbXBvcnQgeyBTaW1wbGVSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyZXInO1xyXG5cclxuaW50ZXJmYWNlIFBpY2t1cCB7XHJcbiAgICBwb3NpdGlvbjogdmVjMztcclxuICAgIHZlbG9jaXR5OiB2ZWMzO1xyXG4gICAgdHlwZTogbnVtYmVyOyAvLyBCbG9jayB0eXBlICgwPUNvYmJsZSwgMT1EaXJ0LCBldGMuKVxyXG4gICAgcm90YXRpb246IHZlYzM7IC8vIEV1bGVyIGFuZ2xlc1xyXG4gICAgdGltZXI6IG51bWJlcjsgLy8gTGlmZXNwYW4gb3IgYm91bmNlIHRpbWVyXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQaWNrdXBTeXN0ZW0ge1xyXG4gICAgcGlja3VwczogUGlja3VwW10gPSBbXTtcclxuXHJcbiAgICAvLyBQaHlzaWNzIENvbmZpZ1xyXG4gICAgcHJpdmF0ZSBncmF2aXR5ID0gMjAuMDtcclxuICAgIHByaXZhdGUgYm91bmNlWSA9IDAuNTtcclxuICAgIHByaXZhdGUgY29sbGVjdGlvblJhZGl1cyA9IDEuNTtcclxuXHJcbiAgICBzcGF3bihwb3NpdGlvbjogdmVjMywgdHlwZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gUmFuZG9tIHZlbG9jaXR5IHNwcmVhZFxyXG4gICAgICAgIGNvbnN0IHZlbCA9IHZlYzMuZnJvbVZhbHVlcyhcclxuICAgICAgICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNC4wLFxyXG4gICAgICAgICAgICA0LjAgKyBNYXRoLnJhbmRvbSgpICogMi4wLCAvLyBVcHdhcmQgcG9wXHJcbiAgICAgICAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDQuMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMucGlja3Vwcy5wdXNoKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHZlYzMuY2xvbmUocG9zaXRpb24pLFxyXG4gICAgICAgICAgICB2ZWxvY2l0eTogdmVsLFxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICByb3RhdGlvbjogdmVjMy5mcm9tVmFsdWVzKE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJLCBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSwgMCksXHJcbiAgICAgICAgICAgIHRpbWVyOiAwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIsIHBsYXllclBvczogdmVjMywgaW52ZW50b3J5OiBudW1iZXJbXSwgaW52ZW50b3J5Q291bnRzOiBudW1iZXJbXSwgZ2V0VGVycmFpbkhlaWdodDogKHBvczogdmVjMykgPT4gbnVtYmVyIHwgbnVsbCkge1xyXG4gICAgICAgIC8vIFJldmVyc2UgbG9vcCBmb3IgcmVtb3ZhbFxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnBpY2t1cHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMucGlja3Vwc1tpXTtcclxuXHJcbiAgICAgICAgICAgIC8vIDEuIFBoeXNpY3NcclxuICAgICAgICAgICAgcC52ZWxvY2l0eVsxXSAtPSB0aGlzLmdyYXZpdHkgKiBkdDtcclxuXHJcbiAgICAgICAgICAgIC8vIE1vdmVcclxuICAgICAgICAgICAgdmVjMy5zY2FsZUFuZEFkZChwLnBvc2l0aW9uLCBwLnBvc2l0aW9uLCBwLnZlbG9jaXR5LCBkdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBGcmljdGlvbi9EYW1waW5nXHJcbiAgICAgICAgICAgIHAudmVsb2NpdHlbMF0gKj0gMC45NTtcclxuICAgICAgICAgICAgcC52ZWxvY2l0eVsyXSAqPSAwLjk1O1xyXG5cclxuICAgICAgICAgICAgLy8gUm90YXRpb25cclxuICAgICAgICAgICAgcC5yb3RhdGlvblsxXSArPSAyLjAgKiBkdDtcclxuXHJcbiAgICAgICAgICAgIC8vIENvbGxpc2lvbiB3aXRoIEdyb3VuZFxyXG4gICAgICAgICAgICAvLyBncm91bmRZIHJldHVybnMgdGhlIFkgY29vcmRpbmF0ZSBvZiB0aGUgdG9wbW9zdCBzb2xpZCBibG9ja1xyXG4gICAgICAgICAgICAvLyBUaGUgdG9wIHN1cmZhY2UgaXMgYXQgZ3JvdW5kWSArIDEuMFxyXG4gICAgICAgICAgICBjb25zdCBncm91bmRZID0gZ2V0VGVycmFpbkhlaWdodChwLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgaWYgKGdyb3VuZFkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1cmZhY2VZID0gZ3JvdW5kWSArIDEuMDtcclxuICAgICAgICAgICAgICAgIGlmIChwLnBvc2l0aW9uWzFdIDwgc3VyZmFjZVkgKyAwLjEyNSkgeyAvLyAwLjEyNSA9IGhhbGYgb2YgcGlja3VwIHNpemUgKDAuMjUpXHJcbiAgICAgICAgICAgICAgICAgICAgcC5wb3NpdGlvblsxXSA9IHN1cmZhY2VZICsgMC4xMjU7XHJcbiAgICAgICAgICAgICAgICAgICAgcC52ZWxvY2l0eVsxXSAqPSAtMC41OyAvLyBCb3VuY2VcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMocC52ZWxvY2l0eVsxXSkgPCAxLjApIHAudmVsb2NpdHlbMV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAyLiBDb2xsZWN0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSB2ZWMzLmRpc3RhbmNlKHAucG9zaXRpb24sIHBsYXllclBvcyk7XHJcbiAgICAgICAgICAgIC8vIE1hZ25ldCBlZmZlY3QgaWYgY2xvc2VcclxuICAgICAgICAgICAgaWYgKGRpc3QgPCA1LjApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpciA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB2ZWMzLnN1YnRyYWN0KGRpciwgcGxheWVyUG9zLCBwLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIHZlYzMubm9ybWFsaXplKGRpciwgZGlyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hZ25ldFN0cmVuZ3RoID0gKDUuMCAtIGRpc3QpICogMTAuMDtcclxuICAgICAgICAgICAgICAgIHZlYzMuc2NhbGVBbmRBZGQocC52ZWxvY2l0eSwgcC52ZWxvY2l0eSwgZGlyLCBtYWduZXRTdHJlbmd0aCAqIGR0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3QgPCB0aGlzLmNvbGxlY3Rpb25SYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIENvbGxlY3QhXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRvSW52ZW50b3J5KHAudHlwZSwgaW52ZW50b3J5LCBpbnZlbnRvcnlDb3VudHMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrdXBzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRUb0ludmVudG9yeSh0eXBlOiBudW1iZXIsIGludmVudG9yeTogbnVtYmVyW10sIGNvdW50czogbnVtYmVyW10pIHtcclxuICAgICAgICAvLyAxLiBDaGVjayBmb3IgZXhpc3Rpbmcgc3RhY2tcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludmVudG9yeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaW52ZW50b3J5W2ldID09PSB0eXBlICYmIGNvdW50c1tpXSA8IDY0KSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHNbaV0rKztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAyLiBFbXB0eSBzbG90XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnZlbnRvcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvdW50c1tpXSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5W2ldID0gdHlwZTtcclxuICAgICAgICAgICAgICAgIGNvdW50c1tpXSA9IDE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRnVsbD8gZGlzY2FyZC5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGRldmljZTogR1BVRGV2aWNlLCBwYXNzRW5jb2RlcjogR1BVUmVuZGVyUGFzc0VuY29kZXIsIHJlbmRlcmVyOiBTaW1wbGVSZW5kZXJlcikge1xyXG4gICAgICAgIGNvbnN0IHNjYWxlID0gdmVjMy5mcm9tVmFsdWVzKDAuMjUsIDAuMjUsIDAuMjUpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgdGhpcy5waWNrdXBzKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvciA9IHZlYzQuZnJvbVZhbHVlcygwLjUsIDAuNSwgMC41LCAxKTtcclxuICAgICAgICAgICAgLy8gTWF0Y2ggZXhhY3QgYmxvY2sgdGV4dHVyZXMgZnJvbSAzRCB3b3JsZFxyXG4gICAgICAgICAgICBpZiAocC50eXBlID09PSAwKSBjb2xvciA9IHZlYzQuZnJvbVZhbHVlcygwLjUzLCAwLjUzLCAwLjUzLCAxKTsgLy8gU3RvbmUgKGNvYmJsZXN0b25lIGdyYXkpXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHAudHlwZSA9PT0gMSkgY29sb3IgPSB2ZWM0LmZyb21WYWx1ZXMoMC41NSwgMC4zNSwgMC4yNSwgMSk7IC8vIERpcnQgKGJyb3duKVxyXG4gICAgICAgICAgICBlbHNlIGlmIChwLnR5cGUgPT09IDIpIGNvbG9yID0gdmVjNC5mcm9tVmFsdWVzKDAuNDUsIDAuNywgMC4zLCAxKTsgLy8gR3Jhc3MgKGJyaWdodCBncmVlbilcclxuICAgICAgICAgICAgZWxzZSBpZiAocC50eXBlID09PSA0KSBjb2xvciA9IHZlYzQuZnJvbVZhbHVlcygwLjksIDAuMTUsIDAuMTUsIDEpOyAvLyBUTlQgKGJyaWdodCByZWQpXHJcblxyXG5cclxuICAgICAgICAgICAgcmVuZGVyZXIuZHJhd0N1YmVFdWxlcihkZXZpY2UsIHBhc3NFbmNvZGVyLCBwLnBvc2l0aW9uLCBwLnJvdGF0aW9uLCBzY2FsZSwgY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxuaW1wb3J0IHsgdmVjMywgbWF0NCwgdmVjNCwgcXVhdCB9IGZyb20gJ2dsLW1hdHJpeCc7XHJcbmltcG9ydCB7IFNpbXBsZVJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXJlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyTW9kZWwge1xyXG4gICAgLy8gQm9keSBQYXJ0cyAoUmVsYXRpdmUgdG8gcGxheWVyIG9yaWdpbilcclxuICAgIC8vIFNpbXBsZSBTdGV2ZTpcclxuICAgIC8vIEhlYWQ6IDh4OHg4XHJcbiAgICAvLyBCb2R5OiA4eDEyeDRcclxuICAgIC8vIEFybXM6IDR4MTJ4NFxyXG4gICAgLy8gTGVnczogNHgxMng0XHJcblxyXG4gICAgLy8gVXNpbmcgc2ltcGxlIGJveGVzLiBcclxuICAgIC8vIFNjYWxlIGZhY3RvcjogMSB1bml0ID0gMSBtZXRlciBhcHByb3guIFxyXG4gICAgLy8gUGxheWVyIGhlaWdodCB+MS44bS4gXHJcbiAgICAvLyBIZWFkIH4wLjI1bSwgQm9keSB+MC43NW0sIExlZ3MgfjAuNzVtLlxyXG5cclxuICAgIGRyYXcoZGV2aWNlOiBHUFVEZXZpY2UsIHBhc3NFbmNvZGVyOiBHUFVSZW5kZXJQYXNzRW5jb2RlciwgcmVuZGVyZXI6IFNpbXBsZVJlbmRlcmVyLCBwb3NpdGlvbjogdmVjMywgeWF3OiBudW1iZXIsIHBpdGNoOiBudW1iZXIsIGlzTW92aW5nOiBib29sZWFuLCB0aW1lOiBudW1iZXIsIGlzUmlkaW5nOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICAvLyBDb2xvcnNcclxuICAgICAgICBjb25zdCBza2luQ29sb3IgPSB2ZWM0LmZyb21WYWx1ZXMoMC45LCAwLjcsIDAuNiwgMS4wKTtcclxuICAgICAgICBjb25zdCBzaGlydENvbG9yID0gdmVjNC5mcm9tVmFsdWVzKDAuMiwgMC42LCAwLjgsIDEuMCk7IC8vIEN5YW4gc2hpcnRcclxuICAgICAgICBjb25zdCBwYW50c0NvbG9yID0gdmVjNC5mcm9tVmFsdWVzKDAuMiwgMC4yLCAwLjYsIDEuMCk7IC8vIEJsdWUgcGFudHNcclxuXHJcbiAgICAgICAgY29uc3QgcUlkID0gWzAsIDAsIDAsIDFdIGFzIHVua25vd24gYXMgYW55OyAvLyBJZGVudGl0eSBRdWF0ZXJuaW9uICh3ZSdsbCBkbyByb3RhdGlvbnMgbWFudWFsbHkgdmlhIHBvc2l0aW9ucy9tYXRyaWNlcyBpZiBuZWVkZWQsIG9yIGp1c3QgcGFzcyBxSWQgaWYgd2UgcHJlLWNhbGMgd29ybGQgcG9zKVxyXG5cclxuICAgICAgICAvLyBIZWxwZXIgdG8gdHJhbnNmb3JtIGxvY2FsIHBhcnQgdG8gd29ybGRcclxuICAgICAgICAvLyBCdXQgU2ltcGxlUmVuZGVyZXIgdGFrZXMgd29ybGQgUG9zaXRpb24gYW5kIFNjYWxlLiBSb3RhdGlvbiBpcyBsaW1pdGVkIChBQUJCKS5cclxuICAgICAgICAvLyBXYWl0LCBTaW1wbGVSZW5kZXJlciBgZHJhd0N1YmVgIHRha2VzIGBwb3NpdGlvbmAsIGByb3RhdGlvbmAgKHF1YXQpLCBgc2NhbGVgLlxyXG4gICAgICAgIC8vIFNvIHdlIGNhbiByb3RhdGUgcGFydHMhXHJcblxyXG4gICAgICAgIC8vIFBsYXllciBRdWF0ZXJuaW9uIChZYXcpXHJcbiAgICAgICAgY29uc3QgcVBsYXllciA9IHF1YXQuY3JlYXRlKCk7XHJcbiAgICAgICAgcXVhdC5mcm9tRXVsZXIocVBsYXllciwgMCwgeWF3ICogKDE4MCAvIE1hdGguUEkpLCAwKTsgLy8geWF3IGluIHJhZGlhbnMgdG8gZGVncmVlcz8gZ2wtbWF0cml4IHVzZXMgZGVncmVlcz8gXHJcbiAgICAgICAgLy8gV2FpdCwgZ2wtbWF0cml4IGZyb21FdWxlciB1c3VhbGx5IHRha2VzIGRlZ3JlZXMuIGB5YXdgIGlzIHJhZGlhbnMgaW4gbWFpbi50cz8gXHJcbiAgICAgICAgLy8gSW4gbWFpbi50czogYGNhbWVyYVlhdyArPSBlLm1vdmVtZW50WCAqIG1vdXNlU2Vuc2l0aXZpdHk7YC4gSXQncyByYWRpYW5zLlxyXG4gICAgICAgIC8vIFNvIGNvbnZlcnQgdG8gZGVncmVlcy5cclxuXHJcbiAgICAgICAgLy8gQWN0dWFsbHksIGxldCdzIGNoZWNrIFNpbXBsZVJlbmRlcmVyLiBJdCB0YWtlcyBhIHN0b3JlZCByb3RhdGlvbj9cclxuICAgICAgICAvLyBSZW5kZXJlciBzaWduYXR1cmU6IGBkcmF3Q3ViZShkZXZpY2UsIHBhc3NFbmNvZGVyLCBwb3MsIHJvdCwgc2NhbGUsIGNvbG9yKWBcclxuICAgICAgICAvLyBgcm90YCBpcyBhIHF1YXRlcm5pb24uXHJcblxyXG4gICAgICAgIC8vIEFuaW1hdGlvblxyXG4gICAgICAgIGNvbnN0IHdhbGtTcGVlZCA9IDEwLjA7XHJcbiAgICAgICAgY29uc3Qgc3dpbmcgPSBpc01vdmluZyA/IE1hdGguc2luKHRpbWUgKiB3YWxrU3BlZWQpICogMC41IDogMDtcclxuXHJcbiAgICAgICAgLy8gLS0tIEhFQUQgLS0tXHJcbiAgICAgICAgLy8gMC4yNSBzaXplXHJcbiAgICAgICAgY29uc3QgaGVhZFBvc0xvY2FsID0gdmVjMy5mcm9tVmFsdWVzKDAsIDEuNSwgMCk7IC8vIDEuNW0gb2ZmIGdyb3VuZFxyXG4gICAgICAgIGNvbnN0IGhlYWRQb3NXb3JsZCA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICAgICAgdmVjMy50cmFuc2Zvcm1RdWF0KGhlYWRQb3NXb3JsZCwgaGVhZFBvc0xvY2FsLCBxUGxheWVyKTtcclxuICAgICAgICB2ZWMzLmFkZChoZWFkUG9zV29ybGQsIGhlYWRQb3NXb3JsZCwgcG9zaXRpb24pO1xyXG5cclxuICAgICAgICAvLyBIZWFkIFJvdGF0aW9uIChZYXcgKyBQaXRjaClcclxuICAgICAgICBjb25zdCBxSGVhZCA9IHF1YXQuY3JlYXRlKCk7XHJcbiAgICAgICAgcXVhdC5mcm9tRXVsZXIocUhlYWQsIHBpdGNoICogKDE4MCAvIE1hdGguUEkpLCB5YXcgKiAoMTgwIC8gTWF0aC5QSSksIDApO1xyXG4gICAgICAgIC8vIFBpdGNoIGlzIFgsIFlhdyBpcyBZLlxyXG5cclxuICAgICAgICByZW5kZXJlci5kcmF3Q3ViZShkZXZpY2UsIHBhc3NFbmNvZGVyLCBoZWFkUG9zV29ybGQsIHFIZWFkLCB2ZWMzLmZyb21WYWx1ZXMoMC41LCAwLjUsIDAuNSksIHNraW5Db2xvcik7XHJcblxyXG5cclxuICAgICAgICAvLyAtLS0gQk9EWSAtLS1cclxuICAgICAgICBjb25zdCBib2R5UG9zTG9jYWwgPSB2ZWMzLmZyb21WYWx1ZXMoMCwgMC45LCAwKTtcclxuICAgICAgICBjb25zdCBib2R5UG9zV29ybGQgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgICAgIHZlYzMudHJhbnNmb3JtUXVhdChib2R5UG9zV29ybGQsIGJvZHlQb3NMb2NhbCwgcVBsYXllcik7XHJcbiAgICAgICAgdmVjMy5hZGQoYm9keVBvc1dvcmxkLCBib2R5UG9zV29ybGQsIHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIuZHJhd0N1YmUoZGV2aWNlLCBwYXNzRW5jb2RlciwgYm9keVBvc1dvcmxkLCBxUGxheWVyLCB2ZWMzLmZyb21WYWx1ZXMoMC41LCAwLjcsIDAuMjUpLCBzaGlydENvbG9yKTtcclxuXHJcblxyXG4gICAgICAgIC8vIC0tLSBSSUdIVCBBUk0gLS0tXHJcbiAgICAgICAgY29uc3QgckFybUxvYyA9IHZlYzMuZnJvbVZhbHVlcygwLjUsIDAuOSwgMCk7XHJcbiAgICAgICAgY29uc3QgckFybVdvcmxkID0gdmVjMy5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgLy8gU3dpbmdcclxuICAgICAgICBjb25zdCBxUkFybSA9IHF1YXQuY3JlYXRlKCk7XHJcbiAgICAgICAgcXVhdC5mcm9tRXVsZXIocVJBcm0sIHN3aW5nICogKDE4MCAvIE1hdGguUEkpLCB5YXcgKiAoMTgwIC8gTWF0aC5QSSksIDApO1xyXG5cclxuICAgICAgICB2ZWMzLnRyYW5zZm9ybVF1YXQockFybVdvcmxkLCByQXJtTG9jLCBxUGxheWVyKTsgLy8gU3RhcnQgYXQgc2hvdWxkZXJcclxuICAgICAgICB2ZWMzLmFkZChyQXJtV29ybGQsIHJBcm1Xb3JsZCwgcG9zaXRpb24pO1xyXG5cclxuICAgICAgICByZW5kZXJlci5kcmF3Q3ViZShkZXZpY2UsIHBhc3NFbmNvZGVyLCByQXJtV29ybGQsIHFSQXJtLCB2ZWMzLmZyb21WYWx1ZXMoMC4yLCAwLjcsIDAuMiksIHNraW5Db2xvcik7XHJcblxyXG4gICAgICAgIC8vIC0tLSBMRUZUIEFSTSAtLS1cclxuICAgICAgICBjb25zdCBsQXJtTG9jID0gdmVjMy5mcm9tVmFsdWVzKC0wLjUsIDAuOSwgMCk7XHJcbiAgICAgICAgY29uc3QgbEFybVdvcmxkID0gdmVjMy5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcUxBcm0gPSBxdWF0LmNyZWF0ZSgpO1xyXG4gICAgICAgIHF1YXQuZnJvbUV1bGVyKHFMQXJtLCAtc3dpbmcgKiAoMTgwIC8gTWF0aC5QSSksIHlhdyAqICgxODAgLyBNYXRoLlBJKSwgMCk7IC8vIE9wcG9zaXRlIHN3aW5nXHJcblxyXG4gICAgICAgIHZlYzMudHJhbnNmb3JtUXVhdChsQXJtV29ybGQsIGxBcm1Mb2MsIHFQbGF5ZXIpO1xyXG4gICAgICAgIHZlYzMuYWRkKGxBcm1Xb3JsZCwgbEFybVdvcmxkLCBwb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLmRyYXdDdWJlKGRldmljZSwgcGFzc0VuY29kZXIsIGxBcm1Xb3JsZCwgcUxBcm0sIHZlYzMuZnJvbVZhbHVlcygwLjIsIDAuNywgMC4yKSwgc2tpbkNvbG9yKTtcclxuXHJcblxyXG4gICAgICAgIGlmIChpc1JpZGluZykge1xyXG4gICAgICAgICAgICAvLyBTaXR0aW5nIFBvc2VcclxuICAgICAgICAgICAgLy8gUm90YXRlIGxlZ3MgZm9yd2FyZCA4MCBkZWdyZWVzXHJcbiAgICAgICAgICAgIC8vIFBpdGNoIGlzIFguXHJcbiAgICAgICAgICAgIC8vIEJ1dCB3ZSBhbHNvIG5lZWQgdG8gcmVzcGVjdCBZYXcgKFBsYXllciBSb3RhdGlvbikuXHJcbiAgICAgICAgICAgIC8vIFNvIHdlIHdhbnQ6IFJvdGF0ZSBieSBZYXcgRmlyc3QgKFkpLCB0aGVuIFBpdGNoIChYKS5cclxuICAgICAgICAgICAgLy8gZ2wtbWF0cml4IGZyb21FdWxlciBvcmRlciBpcyB1c3VhbGx5IFgsIFksIFogb3IgWiwgWSwgWC4gRGVmYXVsdHMgdG8gWllYIHVzdWFsbHk/XHJcbiAgICAgICAgICAgIC8vIExldCdzIG1hbnVhbGx5IGNvbnN0cnVjdDpcclxuICAgICAgICAgICAgLy8gTGVnIHNob3VsZCBiZSBmb3J3YXJkIHJlbGF0aXZlIHRvIGJvZHkuXHJcblxyXG4gICAgICAgICAgICAvLyBSaWdodCBMZWdcclxuICAgICAgICAgICAgY29uc3QgckxlZ0xvYyA9IHZlYzMuZnJvbVZhbHVlcygwLjE1LCAwLjUsIDAuNCk7IC8vIEhpZ2hlciBhbmQgZm9yd2FyZFxyXG4gICAgICAgICAgICBjb25zdCByTGVnV29ybGQgPSB2ZWMzLmNyZWF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2l0dGluZyByb3RhdGlvbjogLTgwIGRlZyBYIChsb2NhbClcclxuICAgICAgICAgICAgY29uc3QgcVNpdCA9IHF1YXQuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIHF1YXQuZnJvbUV1bGVyKHFTaXQsIC04MCwgMCwgMCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBxTGVnRmluYWwgPSBxdWF0LmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICBxdWF0Lm11bHRpcGx5KHFMZWdGaW5hbCwgcVBsYXllciwgcVNpdCk7IC8vIEFwcGx5IFBsYXllciBZYXcsIHRoZW4gU2l0IFBpdGNoXHJcblxyXG4gICAgICAgICAgICB2ZWMzLnRyYW5zZm9ybVF1YXQockxlZ1dvcmxkLCByTGVnTG9jLCBxUGxheWVyKTtcclxuICAgICAgICAgICAgdmVjMy5hZGQockxlZ1dvcmxkLCByTGVnV29ybGQsIHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLmRyYXdDdWJlKGRldmljZSwgcGFzc0VuY29kZXIsIHJMZWdXb3JsZCwgcUxlZ0ZpbmFsLCB2ZWMzLmZyb21WYWx1ZXMoMC4yLCAwLjYsIDAuMiksIHBhbnRzQ29sb3IpO1xyXG5cclxuICAgICAgICAgICAgLy8gTGVmdCBMZWdcclxuICAgICAgICAgICAgY29uc3QgbExlZ0xvYyA9IHZlYzMuZnJvbVZhbHVlcygtMC4xNSwgMC41LCAwLjQpO1xyXG4gICAgICAgICAgICBjb25zdCBsTGVnV29ybGQgPSB2ZWMzLmNyZWF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgdmVjMy50cmFuc2Zvcm1RdWF0KGxMZWdXb3JsZCwgbExlZ0xvYywgcVBsYXllcik7XHJcbiAgICAgICAgICAgIHZlYzMuYWRkKGxMZWdXb3JsZCwgbExlZ1dvcmxkLCBwb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICByZW5kZXJlci5kcmF3Q3ViZShkZXZpY2UsIHBhc3NFbmNvZGVyLCBsTGVnV29ybGQsIHFMZWdGaW5hbCwgdmVjMy5mcm9tVmFsdWVzKDAuMiwgMC42LCAwLjIpLCBwYW50c0NvbG9yKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gV2Fsa2luZyAvIFN0YW5kaW5nIFBvc2UgKEV4aXN0aW5nKVxyXG4gICAgICAgICAgICAvLyAtLS0gUklHSFQgTEVHIC0tLVxyXG4gICAgICAgICAgICBjb25zdCByTGVnTG9jID0gdmVjMy5mcm9tVmFsdWVzKDAuMTUsIDAuMywgMCk7IC8vIENlbnRlciBvZiBsZWdcclxuICAgICAgICAgICAgY29uc3QgckxlZ1dvcmxkID0gdmVjMy5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHFSTGVnID0gcXVhdC5jcmVhdGUoKTtcclxuICAgICAgICAgICAgcXVhdC5mcm9tRXVsZXIocVJMZWcsIC1zd2luZyAqICgxODAgLyBNYXRoLlBJKSwgeWF3ICogKDE4MCAvIE1hdGguUEkpLCAwKTsgLy8gT3Bwb3NpdGUgdG8gUmlnaHQgQXJtXHJcblxyXG4gICAgICAgICAgICB2ZWMzLnRyYW5zZm9ybVF1YXQockxlZ1dvcmxkLCByTGVnTG9jLCBxUGxheWVyKTtcclxuICAgICAgICAgICAgdmVjMy5hZGQockxlZ1dvcmxkLCByTGVnV29ybGQsIHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLmRyYXdDdWJlKGRldmljZSwgcGFzc0VuY29kZXIsIHJMZWdXb3JsZCwgcVJMZWcsIHZlYzMuZnJvbVZhbHVlcygwLjIsIDAuNiwgMC4yKSwgcGFudHNDb2xvcik7XHJcblxyXG4gICAgICAgICAgICAvLyAtLS0gTEVGVCBMRUcgLS0tXHJcbiAgICAgICAgICAgIGNvbnN0IGxMZWdMb2MgPSB2ZWMzLmZyb21WYWx1ZXMoLTAuMTUsIDAuMywgMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxMZWdXb3JsZCA9IHZlYzMuY3JlYXRlKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBxTExlZyA9IHF1YXQuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIHF1YXQuZnJvbUV1bGVyKHFMTGVnLCBzd2luZyAqICgxODAgLyBNYXRoLlBJKSwgeWF3ICogKDE4MCAvIE1hdGguUEkpLCAwKTtcclxuXHJcbiAgICAgICAgICAgIHZlYzMudHJhbnNmb3JtUXVhdChsTGVnV29ybGQsIGxMZWdMb2MsIHFQbGF5ZXIpO1xyXG4gICAgICAgICAgICB2ZWMzLmFkZChsTGVnV29ybGQsIGxMZWdXb3JsZCwgcG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgcmVuZGVyZXIuZHJhd0N1YmUoZGV2aWNlLCBwYXNzRW5jb2RlciwgbExlZ1dvcmxkLCBxTExlZywgdmVjMy5mcm9tVmFsdWVzKDAuMiwgMC42LCAwLjIpLCBwYW50c0NvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgbWF0NCwgdmVjMywgdmVjNCwgcXVhdCB9IGZyb20gJ2dsLW1hdHJpeCc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHNoYWRlckNvZGUgZnJvbSAnLi9zaGFkZXJzLndnc2wnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZVJlbmRlcmVyIHtcclxuICAgIGRldmljZTogR1BVRGV2aWNlO1xyXG4gICAgcGlwZWxpbmU6IEdQVVJlbmRlclBpcGVsaW5lO1xyXG4gICAgdmVydGV4QnVmZmVyOiBHUFVCdWZmZXI7XHJcbiAgICB1bmlmb3JtQnVmZmVyOiBHUFVCdWZmZXI7XHJcbiAgICBiaW5kR3JvdXA6IEdQVUJpbmRHcm91cDtcclxuXHJcbiAgICAvLyBUZW1wIG1hdHJpY2VzIHRvIGF2b2lkIEdDXHJcbiAgICBwcml2YXRlIG1vZGVsTWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcclxuICAgIHByaXZhdGUgdmlld1Byb2plY3Rpb25NYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xyXG5cclxuICAgIC8vIFRlbXAgRmxvYXQzMkFycmF5IHRvIGF2b2lkIEdDXHJcbiAgICBwcml2YXRlIHVuaWZvcm1EYXRhID0gbmV3IEZsb2F0MzJBcnJheSgzNik7IC8vIDE2ICsgMTYgKyA0XHJcbiAgICBwcml2YXRlIHRlbXBRdWF0ID0gcXVhdC5jcmVhdGUoKTtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRPZmZzZXQgPSAwO1xyXG4gICAgcHJpdmF0ZSBtYXhEcmF3cyA9IDI1NjtcclxuICAgIHByaXZhdGUgdW5pZm9ybVN0cmlkZSA9IDI1NjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkZXZpY2U6IEdQVURldmljZSwgZm9ybWF0OiBHUFVUZXh0dXJlRm9ybWF0KSB7XHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSBkZXZpY2U7XHJcblxyXG4gICAgICAgIC8vIDEuIEV4cGxpY2l0IEJpbmQgR3JvdXAgTGF5b3V0IChSZXF1aXJlZCBmb3IgRHluYW1pYyBPZmZzZXRzKVxyXG4gICAgICAgIGNvbnN0IGJpbmRHcm91cExheW91dCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXBMYXlvdXQoe1xyXG4gICAgICAgICAgICBlbnRyaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgYmluZGluZzogMCxcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IEdQVVNoYWRlclN0YWdlLlZFUlRFWCB8IEdQVVNoYWRlclN0YWdlLkZSQUdNRU5ULFxyXG4gICAgICAgICAgICAgICAgYnVmZmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3VuaWZvcm0nLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc0R5bmFtaWNPZmZzZXQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluQmluZGluZ1NpemU6IDI1NlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAyLiBQaXBlbGluZVxyXG4gICAgICAgIHRoaXMucGlwZWxpbmUgPSBkZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xyXG4gICAgICAgICAgICBsYXlvdXQ6IGRldmljZS5jcmVhdGVQaXBlbGluZUxheW91dCh7XHJcbiAgICAgICAgICAgICAgICBiaW5kR3JvdXBMYXlvdXRzOiBbYmluZEdyb3VwTGF5b3V0XVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgdmVydGV4OiB7XHJcbiAgICAgICAgICAgICAgICBtb2R1bGU6IGRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoeyBjb2RlOiBzaGFkZXJDb2RlIH0pLFxyXG4gICAgICAgICAgICAgICAgZW50cnlQb2ludDogJ2VudGl0eV92cycsXHJcbiAgICAgICAgICAgICAgICBidWZmZXJzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5U3RyaWRlOiAxMiwgLy8gdmVjMyBwb3NcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbeyBzaGFkZXJMb2NhdGlvbjogMCwgb2Zmc2V0OiAwLCBmb3JtYXQ6ICdmbG9hdDMyeDMnIH1dXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmcmFnbWVudDoge1xyXG4gICAgICAgICAgICAgICAgbW9kdWxlOiBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHsgY29kZTogc2hhZGVyQ29kZSB9KSxcclxuICAgICAgICAgICAgICAgIGVudHJ5UG9pbnQ6ICdlbnRpdHlfZnMnLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogW3tcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdCxcclxuICAgICAgICAgICAgICAgICAgICBibGVuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogeyBzcmNGYWN0b3I6ICdzcmMtYWxwaGEnLCBkc3RGYWN0b3I6ICdvbmUtbWludXMtc3JjLWFscGhhJywgb3BlcmF0aW9uOiAnYWRkJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogeyBzcmNGYWN0b3I6ICdvbmUnLCBkc3RGYWN0b3I6ICdvbmUtbWludXMtc3JjLWFscGhhJywgb3BlcmF0aW9uOiAnYWRkJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJpbWl0aXZlOiB7IHRvcG9sb2d5OiAndHJpYW5nbGUtbGlzdCcsIGN1bGxNb2RlOiAnYmFjaycgfSxcclxuICAgICAgICAgICAgZGVwdGhTdGVuY2lsOiB7XHJcbiAgICAgICAgICAgICAgICBkZXB0aFdyaXRlRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRlcHRoQ29tcGFyZTogJ2xlc3MnLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAnZGVwdGgyNHBsdXMnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDMuIFZlcnRleCBCdWZmZXJcclxuICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAvLyBGcm9udFxyXG4gICAgICAgICAgICAtMC41LCAtMC41LCAwLjUsIDAuNSwgLTAuNSwgMC41LCAwLjUsIDAuNSwgMC41LFxyXG4gICAgICAgICAgICAtMC41LCAtMC41LCAwLjUsIDAuNSwgMC41LCAwLjUsIC0wLjUsIDAuNSwgMC41LFxyXG4gICAgICAgICAgICAvLyBCYWNrXHJcbiAgICAgICAgICAgIC0wLjUsIC0wLjUsIC0wLjUsIC0wLjUsIDAuNSwgLTAuNSwgMC41LCAwLjUsIC0wLjUsXHJcbiAgICAgICAgICAgIC0wLjUsIC0wLjUsIC0wLjUsIDAuNSwgMC41LCAtMC41LCAwLjUsIC0wLjUsIC0wLjUsXHJcbiAgICAgICAgICAgIC8vIFRvcFxyXG4gICAgICAgICAgICAtMC41LCAwLjUsIC0wLjUsIC0wLjUsIDAuNSwgMC41LCAwLjUsIDAuNSwgMC41LFxyXG4gICAgICAgICAgICAtMC41LCAwLjUsIC0wLjUsIDAuNSwgMC41LCAwLjUsIDAuNSwgMC41LCAtMC41LFxyXG4gICAgICAgICAgICAvLyBCb3R0b21cclxuICAgICAgICAgICAgLTAuNSwgLTAuNSwgLTAuNSwgMC41LCAtMC41LCAtMC41LCAwLjUsIC0wLjUsIDAuNSxcclxuICAgICAgICAgICAgLTAuNSwgLTAuNSwgLTAuNSwgMC41LCAtMC41LCAwLjUsIC0wLjUsIC0wLjUsIDAuNSxcclxuICAgICAgICAgICAgLy8gUmlnaHRcclxuICAgICAgICAgICAgMC41LCAtMC41LCAtMC41LCAwLjUsIDAuNSwgLTAuNSwgMC41LCAwLjUsIDAuNSxcclxuICAgICAgICAgICAgMC41LCAtMC41LCAtMC41LCAwLjUsIDAuNSwgMC41LCAwLjUsIC0wLjUsIDAuNSxcclxuICAgICAgICAgICAgLy8gTGVmdFxyXG4gICAgICAgICAgICAtMC41LCAtMC41LCAtMC41LCAtMC41LCAtMC41LCAwLjUsIC0wLjUsIDAuNSwgMC41LFxyXG4gICAgICAgICAgICAtMC41LCAtMC41LCAtMC41LCAtMC41LCAwLjUsIDAuNSwgLTAuNSwgMC41LCAtMC41LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xyXG4gICAgICAgICAgICBzaXplOiB2ZXJ0aWNlcy5ieXRlTGVuZ3RoLFxyXG4gICAgICAgICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuVkVSVEVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKHRoaXMudmVydGV4QnVmZmVyLCAwLCB2ZXJ0aWNlcyk7XHJcblxyXG4gICAgICAgIC8vIDQuIFVuaWZvcm0gQnVmZmVyIChMYXJnZSlcclxuICAgICAgICAvLyAyNTYgYnl0ZXMgcGVyIGVudGl0eSAqIDI1NiBlbnRpdGllcyBtYXggPSA2NEtCXHJcbiAgICAgICAgdGhpcy51bmlmb3JtQnVmZmVyID0gZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XHJcbiAgICAgICAgICAgIHNpemU6IHRoaXMudW5pZm9ybVN0cmlkZSAqIHRoaXMubWF4RHJhd3MsXHJcbiAgICAgICAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5VTklGT1JNIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDUuIEJpbmRHcm91cCAoV2luZG93OiAyNTYgYnl0ZXMpXHJcbiAgICAgICAgdGhpcy5iaW5kR3JvdXAgPSBkZXZpY2UuY3JlYXRlQmluZEdyb3VwKHtcclxuICAgICAgICAgICAgbGF5b3V0OiBiaW5kR3JvdXBMYXlvdXQsXHJcbiAgICAgICAgICAgIGVudHJpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBiaW5kaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHRoaXMudW5pZm9ybUJ1ZmZlcixcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogMjU2IC8vIFRoZSBzaXplIG9mIE9ORSB3aW5kb3dcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEZyYW1lKHBhc3NFbmNvZGVyOiBHUFVSZW5kZXJQYXNzRW5jb2Rlciwgdmlld1Byb2plY3Rpb25NYXRyaXg6IG1hdDQpIHtcclxuICAgICAgICBwYXNzRW5jb2Rlci5zZXRQaXBlbGluZSh0aGlzLnBpcGVsaW5lKTtcclxuICAgICAgICBwYXNzRW5jb2Rlci5zZXRWZXJ0ZXhCdWZmZXIoMCwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xyXG5cclxuICAgICAgICAvLyBDYWNoZSBWUFxyXG4gICAgICAgIG1hdDQuY29weSh0aGlzLnZpZXdQcm9qZWN0aW9uTWF0cml4LCB2aWV3UHJvamVjdGlvbk1hdHJpeCk7XHJcblxyXG4gICAgICAgIC8vIFJlc2V0IE9mZnNldFxyXG4gICAgICAgIHRoaXMuY3VycmVudE9mZnNldCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0N1YmUoZGV2aWNlOiBHUFVEZXZpY2UsIHBhc3NFbmNvZGVyOiBHUFVSZW5kZXJQYXNzRW5jb2RlcixcclxuICAgICAgICBwb3NpdGlvbjogdmVjMywgcm90YXRpb246IHF1YXQsIHNjYWxlOiB2ZWMzLCBjb2xvcjogdmVjNCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50T2Zmc2V0ID49IHRoaXMubWF4RHJhd3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTWF4IGVudGl0eSBkcmF3cyBleGNlZWRlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIFVuaWZvcm1zXHJcbiAgICAgICAgbWF0NC5mcm9tUm90YXRpb25UcmFuc2xhdGlvblNjYWxlKHRoaXMubW9kZWxNYXRyaXgsIHJvdGF0aW9uLCBwb3NpdGlvbiwgc2NhbGUpO1xyXG5cclxuICAgICAgICAvLyBSZXVzZSBwZXJzaXN0ZW50IEZsb2F0MzJBcnJheVxyXG4gICAgICAgIHRoaXMudW5pZm9ybURhdGEuc2V0KHRoaXMudmlld1Byb2plY3Rpb25NYXRyaXgsIDApO1xyXG4gICAgICAgIHRoaXMudW5pZm9ybURhdGEuc2V0KHRoaXMubW9kZWxNYXRyaXgsIDE2KTtcclxuICAgICAgICB0aGlzLnVuaWZvcm1EYXRhLnNldChjb2xvciwgMzIpO1xyXG5cclxuICAgICAgICAvLyBXcml0ZSB0byBjdXJyZW50IHNsb3RcclxuICAgICAgICBjb25zdCBieXRlT2Zmc2V0ID0gdGhpcy5jdXJyZW50T2Zmc2V0ICogdGhpcy51bmlmb3JtU3RyaWRlO1xyXG4gICAgICAgIGRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcih0aGlzLnVuaWZvcm1CdWZmZXIsIGJ5dGVPZmZzZXQsIHRoaXMudW5pZm9ybURhdGEpO1xyXG5cclxuICAgICAgICAvLyBCaW5kIHdpdGggRHluYW1pYyBPZmZzZXRcclxuICAgICAgICBwYXNzRW5jb2Rlci5zZXRCaW5kR3JvdXAoMCwgdGhpcy5iaW5kR3JvdXAsIFtieXRlT2Zmc2V0XSk7XHJcblxyXG4gICAgICAgIHBhc3NFbmNvZGVyLmRyYXcoMzYsIDEpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRPZmZzZXQrKztcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwZXIgZm9yIHNpbXBsZSBFdWxlciByb3RhdGlvblxyXG4gICAgZHJhd0N1YmVFdWxlcihkZXZpY2U6IEdQVURldmljZSwgcGFzc0VuY29kZXI6IEdQVVJlbmRlclBhc3NFbmNvZGVyLFxyXG4gICAgICAgIHBvc2l0aW9uOiB2ZWMzLCByb3RFdWxlcjogdmVjMywgc2NhbGU6IHZlYzMsIGNvbG9yOiB2ZWM0KSB7XHJcbiAgICAgICAgLy8gUmV1c2UgdGVtcFF1YXRcclxuICAgICAgICBxdWF0LmZyb21FdWxlcih0aGlzLnRlbXBRdWF0LCByb3RFdWxlclswXSAqIDE4MCAvIE1hdGguUEksIHJvdEV1bGVyWzFdICogMTgwIC8gTWF0aC5QSSwgcm90RXVsZXJbMl0gKiAxODAgLyBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmRyYXdDdWJlKGRldmljZSwgcGFzc0VuY29kZXIsIHBvc2l0aW9uLCB0aGlzLnRlbXBRdWF0LCBzY2FsZSwgY29sb3IpO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5pbXBvcnQgeyB2ZWMzLCBxdWF0LCBtYXQ0LCB2ZWM0IH0gZnJvbSAnZ2wtbWF0cml4JztcclxuaW1wb3J0IHsgc29sdmVJSyB9IGZyb20gJy4vaWsnO1xyXG5pbXBvcnQgeyBTaW1wbGVSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyZXInO1xyXG5cclxuLy8gQ29uc3RhbnRzIChTY2FsZWQgZG93biBieSB+MjAlIGZyb20gcHJldmlvdXMgZ2lhbnQgc2l6ZSlcclxuY29uc3QgTEVHX0NPVU5UID0gODtcclxuY29uc3QgQk9EWV9IRUlHSFQgPSAzLjI7ICAgICAvLyA0LjAgKiAwLjhcclxuY29uc3QgU1RFUF9ESVNUQU5DRSA9IDMuMjsgICAvLyA0LjAgKiAwLjhcclxuY29uc3QgU1RFUF9IRUlHSFQgPSAxLjY7ICAgICAvLyAyLjAgKiAwLjhcclxuY29uc3QgU1RFUF9TUEVFRCA9IDQuMDsgICAgICAvLyBLZWVwIHNwZWVkIG11bHRpcGxpZXIgKHZpc3VhbGx5IGZhc3RlciBzdHJpZGUpXHJcblxyXG4vLyBMZWcgRGltZW5zaW9ucyAoU2NhbGVkIDAuOClcclxuY29uc3QgQ09YQV9MRU4gPSAwLjg7XHJcbmNvbnN0IEZFTVVSX0xFTiA9IDIuNDtcclxuY29uc3QgVElCSUFfTEVOID0gMy42O1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwaWRlciB7XHJcbiAgICBwb3NpdGlvbjogdmVjMyA9IHZlYzMuZnJvbVZhbHVlcygwLCAxMCwgMCk7XHJcbiAgICB2ZWxvY2l0eTogdmVjMyA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICByb3RhdGlvbjogcXVhdCA9IHF1YXQuY3JlYXRlKCk7XHJcbiAgICB5YXc6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy8gTGVnIFN0YXRlXHJcbiAgICBsZWdUYXJnZXRzOiB2ZWMzW10gPSBbXTsgLy8gQ3VycmVudCB3b3JsZCBwb3NpdGlvbiBvZiBmZWV0XHJcbiAgICBsZWdTdGFydDogdmVjM1tdID0gW107ICAgLy8gV2hlcmUgZm9vdCBzb3J0IG9mIHN0YXJ0ZWQgKGZvciBsZXJwKVxyXG4gICAgbGVnTmV4dDogdmVjM1tdID0gW107ICAgIC8vIFdoZXJlIGZvb3QgaXMgZ29pbmdcclxuICAgIGxlZ1Byb2dyZXNzOiBudW1iZXJbXSA9IFtdOyAvLyAwIHRvIDFcclxuICAgIGxlZ01vdmluZzogYm9vbGVhbltdID0gW107XHJcblxyXG4gICAgLy8gUGh5c2ljc1xyXG4gICAgZ3Jhdml0eTogbnVtYmVyID0gMjAuMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBJbml0IGxlZ3NcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IExFR19DT1VOVDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVnVGFyZ2V0cy5wdXNoKHZlYzMuZnJvbVZhbHVlcygwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgIHRoaXMubGVnU3RhcnQucHVzaCh2ZWMzLmZyb21WYWx1ZXMoMCwgMCwgMCkpO1xyXG4gICAgICAgICAgICB0aGlzLmxlZ05leHQucHVzaCh2ZWMzLmZyb21WYWx1ZXMoMCwgMCwgMCkpO1xyXG4gICAgICAgICAgICB0aGlzLmxlZ1Byb2dyZXNzLnB1c2goMCk7XHJcbiAgICAgICAgICAgIHRoaXMubGVnTW92aW5nLnB1c2goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgaWRlYWwgZm9vdCBwb3NpdGlvbiBiYXNlZCBvbiBjdXJyZW50IGJvZHkgKyBsYXlvdXRcclxuICAgIGdldElkZWFsRm9vdFBvcyhpbmRleDogbnVtYmVyLCBjdXJyZW50UG9zOiB2ZWMzLCBjdXJyZW50WWF3OiBudW1iZXIpOiB2ZWMzIHtcclxuICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gMik7IC8vIDAgdG8gMyAoRnJvbnQgdG8gQmFjaylcclxuICAgICAgICBjb25zdCBzaWRlID0gaW5kZXggJSAyID09PSAwID8gMSA6IC0xOyAvLyAxID0gTGVmdCAoK1gpLCAtMSA9IFJpZ2h0ICgtWClcclxuXHJcbiAgICAgICAgLy8gTGF5b3V0IChMb2NhbCB0byBDZW50ZXIpXHJcbiAgICAgICAgLy8gU2NhbGVkIHZhbHVlcyAoMC44eClcclxuICAgICAgICAvLyBaIGxvY2FsOiBGb3J3YXJkL0JhY2tcclxuICAgICAgICAvLyBYIGxvY2FsOiBMZWZ0L1JpZ2h0IChSZWFjaClcclxuXHJcbiAgICAgICAgLy8gWiBTcGFjaW5nOiBGcm9udCBsZWdzIGluIGZyb250IG9mIGhlYWQsIG1vcmUgc3BhY2luZyBiZXR3ZWVuIGFsbCBsZWdzXHJcbiAgICAgICAgLy8gRnJvbnQgbGVncyBzaG91bGQgYmUgaW4gZnJvbnQgb2YgdGhlIHRob3JheCwgYmFjayBsZWdzIGJlaGluZFxyXG4gICAgICAgIGNvbnN0IHpWYWxzID0gWzQuNSwgMS41LCAtMS41LCAtNC4wXTtcclxuXHJcbiAgICAgICAgLy8gUmVhY2g6IE11Y2ggd2lkZXIgdG8gcHJldmVudCBjb2xsaXNpb25zLCBlc3BlY2lhbGx5IG1pZGRsZSBsZWdzXHJcbiAgICAgICAgLy8gRnJvbnQgYW5kIGJhY2sgc2xpZ2h0bHkgbmFycm93ZXIsIG1pZGRsZSBsZWdzIGV4dGVuZGVkIGZvciBzcGlkZXIgYXBwZWFyYW5jZVxyXG4gICAgICAgIGNvbnN0IHhEaXN0ID0gWzQuMCwgNS41LCA1LjUsIDQuMF07XHJcblxyXG4gICAgICAgIGNvbnN0IGx4ID0gc2lkZSAqIHhEaXN0W3Jvd107XHJcbiAgICAgICAgY29uc3QgbHogPSB6VmFsc1tyb3ddO1xyXG5cclxuICAgICAgICAvLyBSb3RhdGUgbG9jYWwgdG8gd29ybGQgYWxpZ25lZCB3aXRoIGJvZHlcclxuICAgICAgICAvLyBDUklUSUNBTCBGSVg6IEVuc3VyZSByb3RhdGlvbiBpcyBhcHBsaWVkIHRvIHRoZSBvZmZzZXQgY29ycmVjdGx5XHJcbiAgICAgICAgY29uc3QgcSA9IHF1YXQuY3JlYXRlKCk7XHJcbiAgICAgICAgcXVhdC5mcm9tRXVsZXIocSwgMCwgY3VycmVudFlhdyAqIDE4MCAvIE1hdGguUEksIDApO1xyXG5cclxuICAgICAgICBjb25zdCBvZmZzZXQgPSB2ZWMzLmZyb21WYWx1ZXMobHgsIDAsIGx6KTtcclxuICAgICAgICB2ZWMzLnRyYW5zZm9ybVF1YXQob2Zmc2V0LCBvZmZzZXQsIHEpO1xyXG5cclxuICAgICAgICAvLyBJZGVhbCBncm91bmQgcGxhbmVcclxuICAgICAgICBjb25zdCBmaW5hbCA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICAgICAgdmVjMy5hZGQoZmluYWwsIGN1cnJlbnRQb3MsIG9mZnNldCk7XHJcbiAgICAgICAgZmluYWxbMV0gLT0gQk9EWV9IRUlHSFQ7XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyLCBrZXlzOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSwgdGVycmFpbkZuOiAocDogdmVjMykgPT4gbnVtYmVyIHwgbnVsbCkge1xyXG4gICAgICAgIC8vIENvbnRyb2xzXHJcbiAgICAgICAgY29uc3Qgc3BlZWQgPSA1LjA7IC8vIFNjYWxlZCBkb3duIHNsaWdodGx5IGZyb20gNi4wXHJcbiAgICAgICAgY29uc3Qgcm90U3BlZWQgPSAxLjU7XHJcblxyXG4gICAgICAgIGxldCBtb3ZlID0gMDtcclxuICAgICAgICBsZXQgdHVybiA9IDA7XHJcblxyXG4gICAgICAgIGlmIChrZXlzWydLZXlXJ10pIG1vdmUgKz0gMTtcclxuICAgICAgICBpZiAoa2V5c1snS2V5UyddKSBtb3ZlIC09IDE7XHJcbiAgICAgICAgaWYgKGtleXNbJ0tleUEnXSkgdHVybiArPSAxO1xyXG4gICAgICAgIGlmIChrZXlzWydLZXlEJ10pIHR1cm4gLT0gMTtcclxuXHJcbiAgICAgICAgdGhpcy55YXcgKz0gdHVybiAqIHJvdFNwZWVkICogZHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcndhcmQgPSB2ZWMzLmZyb21WYWx1ZXMoTWF0aC5zaW4odGhpcy55YXcpLCAwLCBNYXRoLmNvcyh0aGlzLnlhdykpO1xyXG4gICAgICAgIHZlYzMuc2NhbGVBbmRBZGQodGhpcy52ZWxvY2l0eSwgdmVjMy5jcmVhdGUoKSwgZm9yd2FyZCwgbW92ZSAqIHNwZWVkKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIFBvc2l0aW9uXHJcbiAgICAgICAgdmVjMy5zY2FsZUFuZEFkZCh0aGlzLnBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uLCB0aGlzLnZlbG9jaXR5LCBkdCk7XHJcblxyXG4gICAgICAgIC8vIERhbXBcclxuICAgICAgICB2ZWMzLnNjYWxlKHRoaXMudmVsb2NpdHksIHRoaXMudmVsb2NpdHksIDAuMCk7IC8vIEZ1bGwgZGFtcFxyXG5cclxuICAgICAgICAvLyBMZWcgTG9naWMgKEdhaXQpXHJcbiAgICAgICAgbGV0IG1vdmluZ0NvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IExFR19DT1VOVDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxlZ01vdmluZ1tpXSkgbW92aW5nQ291bnQrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTEVHX0NPVU5UOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaWRlYWwgPSB0aGlzLmdldElkZWFsRm9vdFBvcyhpLCB0aGlzLnBvc2l0aW9uLCB0aGlzLnlhdyk7XHJcblxyXG4gICAgICAgICAgICAvLyBSYXljYXN0IHRlcnJhaW4gZm9yIGlkZWFsXHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VuZFkgPSB0ZXJyYWluRm4oaWRlYWwpO1xyXG4gICAgICAgICAgICBpZiAoZ3JvdW5kWSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWRlYWxbMV0gPSBncm91bmRZICsgMS4wO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWRlYWxbMV0gPSAwOyAvLyBGYWxsYmFja1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gdmVjMy5kaXN0YW5jZSh0aGlzLmxlZ1RhcmdldHNbaV0sIGlkZWFsKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgU3RlcFxyXG4gICAgICAgICAgICAvLyBJZiBkaXN0YW5jZSBpcyB0b28gZmFyLCBvciBpZiB0aGUgbGVnIGlzIFwiYmVoaW5kXCIgdGhlIGlkZWFsIHBvc2l0aW9uIHRvbyBtdWNoIHJlbGF0aXZlIHRvIG1vdmVtZW50XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sZWdNb3ZpbmdbaV0gJiYgZGlzdCA+IFNURVBfRElTVEFOQ0UpIHtcclxuICAgICAgICAgICAgICAgIC8vIEFsbG93IG1heCA0IGxlZ3MgbW92aW5nLCBidXQgdHJ5IHRvIGtlZXAgc3RhYmxlIHBhaXJzXHJcbiAgICAgICAgICAgICAgICBpZiAobW92aW5nQ291bnQgPCA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWdNb3ZpbmdbaV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVnUHJvZ3Jlc3NbaV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlYzMuY29weSh0aGlzLmxlZ1N0YXJ0W2ldLCB0aGlzLmxlZ1RhcmdldHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlYzMuY29weSh0aGlzLmxlZ05leHRbaV0sIGlkZWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZpbmdDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBbmltYXRlIFN0ZXBcclxuICAgICAgICAgICAgaWYgKHRoaXMubGVnTW92aW5nW2ldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZ1Byb2dyZXNzW2ldICs9IGR0ICogU1RFUF9TUEVFRDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlZ1Byb2dyZXNzW2ldID49IDEuMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVnUHJvZ3Jlc3NbaV0gPSAxLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWdNb3ZpbmdbaV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2ZWMzLmNvcHkodGhpcy5sZWdUYXJnZXRzW2ldLCB0aGlzLmxlZ05leHRbaV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gdGhpcy5sZWdQcm9ncmVzc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBMZXJwIFgvWlxyXG4gICAgICAgICAgICAgICAgICAgIHZlYzMubGVycCh0aGlzLmxlZ1RhcmdldHNbaV0sIHRoaXMubGVnU3RhcnRbaV0sIHRoaXMubGVnTmV4dFtpXSwgdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQXJjIFkgKFBhcmFib2xhKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGggPSBNYXRoLm1heCgwLCBNYXRoLnNpbih0ICogTWF0aC5QSSkpICogU1RFUF9IRUlHSFQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNpbmcgY3VycmVudCBZIHRhcmdldCBiYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZUhlaWdodCA9ICgxIC0gdCkgKiB0aGlzLmxlZ1N0YXJ0W2ldWzFdICsgdCAqIHRoaXMubGVnTmV4dFtpXVsxXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZ1RhcmdldHNbaV1bMV0gPSBiYXNlSGVpZ2h0ICsgaDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQm9keSBIZWlnaHQgQWRqdXN0bWVudCAoQXZlcmFnZSBvZiBsZWdzKVxyXG4gICAgICAgIGxldCBhdmdZID0gMDtcclxuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMubGVnVGFyZ2V0cykgYXZnWSArPSBwWzFdO1xyXG4gICAgICAgIGF2Z1kgLz0gTEVHX0NPVU5UO1xyXG5cclxuICAgICAgICAvLyBTbW9vdGggYm9keSBZXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Qm9keVkgPSBhdmdZICsgQk9EWV9IRUlHSFQ7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblsxXSA9IHRoaXMucG9zaXRpb25bMV0gKiAwLjkgKyB0YXJnZXRCb2R5WSAqIDAuMTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIFJvdGF0aW9uIFF1YXRlcm5pb25cclxuICAgICAgICBxdWF0LmZyb21FdWxlcih0aGlzLnJvdGF0aW9uLCAwLCB0aGlzLnlhdyAqIDE4MCAvIE1hdGguUEksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoZGV2aWNlOiBHUFVEZXZpY2UsIHBhc3NFbmNvZGVyOiBHUFVSZW5kZXJQYXNzRW5jb2RlciwgcmVuZGVyZXI6IFNpbXBsZVJlbmRlcmVyLCBpc1JpZGluZzogYm9vbGVhbikge1xyXG4gICAgICAgIC8vIEJvZHkgQ29sb3JzXHJcbiAgICAgICAgY29uc3QgY29sQm9keSA9IHZlYzQuZnJvbVZhbHVlcygwLjEsIDAuMSwgMC4xLCAxLjApOyAvLyBCbGFjay9HcmV5XHJcbiAgICAgICAgY29uc3QgY29sTGVnID0gdmVjNC5mcm9tVmFsdWVzKDAuMiwgMC4wNSwgMC4wNSwgMS4wKTsgLy8gRGFyayBSZWRcclxuICAgICAgICBjb25zdCBjb2xKb2ludCA9IHZlYzQuZnJvbVZhbHVlcygwLjUsIDAuMCwgMC4wLCAxLjApOyAvLyBSZWRcclxuXHJcbiAgICAgICAgLy8gMS4gRHJhdyBCb2R5XHJcbiAgICAgICAgLy8gVGhvcmF4IChDZXBoYWxvdGhvcmF4KSAtIFNjYWxlZCAwLjhcclxuICAgICAgICAvLyBPcmlnaW5hbDogMy4wLCAyLjUsIDQuMCAtPiBTY2FsZWQ6IDIuNCwgMi4wLCAzLjJcclxuICAgICAgICByZW5kZXJlci5kcmF3Q3ViZUV1bGVyKGRldmljZSwgcGFzc0VuY29kZXIsIHRoaXMucG9zaXRpb24sXHJcbiAgICAgICAgICAgIHZlYzMuZnJvbVZhbHVlcygwLCB0aGlzLnlhdywgMCksXHJcbiAgICAgICAgICAgIHZlYzMuZnJvbVZhbHVlcygyLjQsIDIuMCwgMy4yKSxcclxuICAgICAgICAgICAgY29sQm9keVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIEFiZG9tZW4gKEJlaGluZClcclxuICAgICAgICBjb25zdCBhYmRQb3MgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGJhY2t3YXJkID0gdmVjMy5mcm9tVmFsdWVzKC1NYXRoLnNpbih0aGlzLnlhdyksIDAsIC1NYXRoLmNvcyh0aGlzLnlhdykpO1xyXG4gICAgICAgIHZlYzMuc2NhbGVBbmRBZGQoYWJkUG9zLCB0aGlzLnBvc2l0aW9uLCBiYWNrd2FyZCwgMy4yKTsgLy8gT2Zmc2V0IHNjYWxlZCAod2FzIDQuMClcclxuXHJcbiAgICAgICAgLy8gVGlsdCBzbGlnaHRseVxyXG4gICAgICAgIC8vIFdlJ2xsIGNvbnN0cnVjdCBhIHJvdGF0aW9uIG1hdHJpeC9xdWF0IGZvciB0aGUgYWJkb21lblxyXG4gICAgICAgIGNvbnN0IGFiZFJvdCA9IHZlYzMuZnJvbVZhbHVlcygwLjIsIHRoaXMueWF3LCAwKTsgLy8gMC4yIHJhZCB0aWx0IFgsICsgeWF3IFlcclxuXHJcbiAgICAgICAgcmVuZGVyZXIuZHJhd0N1YmVFdWxlcihkZXZpY2UsIHBhc3NFbmNvZGVyLCBhYmRQb3MsXHJcbiAgICAgICAgICAgIGFiZFJvdCxcclxuICAgICAgICAgICAgdmVjMy5mcm9tVmFsdWVzKDQuMCwgMy4yLCA0LjgpLCAvLyBTY2FsZWQgMC44ICh3YXMgNS4wLCA0LjAsIDYuMClcclxuICAgICAgICAgICAgY29sQm9keVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIDIuIERyYXcgTGVnc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTEVHX0NPVU5UOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2lkZSA9IGkgJSAyID09PSAwID8gMSA6IC0xO1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGkgLyAyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEJvZHkgQXR0YWNobWVudCBQb2ludHMgKFJlbGF0aXZlIHRvIEJvZHkgQ2VudGVyKVxyXG4gICAgICAgICAgICAvLyBTY2FsZWQgMC44XHJcbiAgICAgICAgICAgIC8vIFogb2Zmc2V0cyAobG9jYWwpXHJcbiAgICAgICAgICAgIGNvbnN0IHpPZmYgPSBbMS4yLCAwLjQsIC0wLjQsIC0xLjJdW3Jvd107XHJcbiAgICAgICAgICAgIGNvbnN0IHhPZmYgPSBzaWRlICogMS4yOyAvLyBXaWR0aCBpcyAyLjQsIHNvIDEuMiBpcyBlZGdlXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhdHRhY2hMb2NhbCA9IHZlYzMuZnJvbVZhbHVlcyh4T2ZmLCAwLCB6T2ZmKTtcclxuICAgICAgICAgICAgdmVjMy50cmFuc2Zvcm1RdWF0KGF0dGFjaExvY2FsLCBhdHRhY2hMb2NhbCwgdGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dGFjaFdvcmxkID0gdmVjMy5jcmVhdGUoKTtcclxuICAgICAgICAgICAgdmVjMy5hZGQoYXR0YWNoV29ybGQsIHRoaXMucG9zaXRpb24sIGF0dGFjaExvY2FsKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENveGEgRW5kcG9pbnQgKFRoZSBoaXAgam9pbnQpXHJcbiAgICAgICAgICAgIC8vIFBvaW50cyBvdXR3YXJkc1xyXG4gICAgICAgICAgICBjb25zdCBjb3hhRGlyTG9jYWwgPSB2ZWMzLmZyb21WYWx1ZXMoc2lkZSwgLTAuMiwgMCk7IC8vIFNsaWdodCBkb3duIGFuZ2xlXHJcbiAgICAgICAgICAgIGNvbnN0IGNveGFEaXIgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICB2ZWMzLnRyYW5zZm9ybVF1YXQoY294YURpciwgY294YURpckxvY2FsLCB0aGlzLnJvdGF0aW9uKTtcclxuICAgICAgICAgICAgdmVjMy5ub3JtYWxpemUoY294YURpciwgY294YURpcik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb3hhRW5kID0gdmVjMy5jcmVhdGUoKTtcclxuICAgICAgICAgICAgdmVjMy5zY2FsZUFuZEFkZChjb3hhRW5kLCBhdHRhY2hXb3JsZCwgY294YURpciwgQ09YQV9MRU4pO1xyXG5cclxuICAgICAgICAgICAgLy8gRHJhdyBDb3hhXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0xpbWIoZGV2aWNlLCBwYXNzRW5jb2RlciwgcmVuZGVyZXIsIGF0dGFjaFdvcmxkLCBjb3hhRW5kLCAwLjQ4LCBjb2xCb2R5KTsgLy8gVGhpbm5lclxyXG5cclxuICAgICAgICAgICAgLy8gVGFyZ2V0IEZvb3RcclxuICAgICAgICAgICAgY29uc3QgZm9vdCA9IHRoaXMubGVnVGFyZ2V0c1tpXTtcclxuXHJcbiAgICAgICAgICAgIC8vIElLIFNvbHZlIGZyb20gQ294YUVuZCB0byBGb290XHJcbiAgICAgICAgICAgIC8vIEtuZWVzIGdlbmVyYWxseSBwb2ludCBVUFxyXG4gICAgICAgICAgICBjb25zdCBwb2xlID0gdmVjMy5mcm9tVmFsdWVzKDAsIDEsIDApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc29sID0gc29sdmVJSyhjb3hhRW5kLCBmb290LCBGRU1VUl9MRU4sIFRJQklBX0xFTiwgcG9sZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGtuZWUgPSBzb2wua25lZTtcclxuXHJcbiAgICAgICAgICAgIC8vIERyYXcgRmVtdXIgKENveGEgLT4gS25lZSlcclxuICAgICAgICAgICAgdGhpcy5kcmF3TGltYihkZXZpY2UsIHBhc3NFbmNvZGVyLCByZW5kZXJlciwgY294YUVuZCwga25lZSwgMC40LCBjb2xMZWcpO1xyXG5cclxuICAgICAgICAgICAgLy8gRHJhdyBUaWJpYSAoS25lZSAtPiBGb290KVxyXG4gICAgICAgICAgICB0aGlzLmRyYXdMaW1iKGRldmljZSwgcGFzc0VuY29kZXIsIHJlbmRlcmVyLCBrbmVlLCBmb290LCAwLjI4LCBjb2xMZWcpO1xyXG5cclxuICAgICAgICAgICAgLy8gS25lZSBKb2ludFxyXG4gICAgICAgICAgICByZW5kZXJlci5kcmF3Q3ViZUV1bGVyKGRldmljZSwgcGFzc0VuY29kZXIsIGtuZWUsIHZlYzMuY3JlYXRlKCksIHZlYzMuZnJvbVZhbHVlcygwLjU2LCAwLjU2LCAwLjU2KSwgY29sSm9pbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMy4gRHJhdyBSaWRlciAoUmVtb3ZlZCAtIEhhbmRsZWQgYnkgUGxheWVyTW9kZWwpXHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0xpbWIoZGV2aWNlOiBHUFVEZXZpY2UsIHBhc3NFbmNvZGVyOiBHUFVSZW5kZXJQYXNzRW5jb2RlciwgcmVuZGVyZXI6IFNpbXBsZVJlbmRlcmVyLFxyXG4gICAgICAgIHN0YXJ0OiB2ZWMzLCBlbmQ6IHZlYzMsIHRoaWNrbmVzczogbnVtYmVyLCBjb2xvcjogdmVjNCkge1xyXG5cclxuICAgICAgICBjb25zdCBjZW50ZXIgPSB2ZWMzLmNyZWF0ZSgpO1xyXG4gICAgICAgIHZlYzMubGVycChjZW50ZXIsIHN0YXJ0LCBlbmQsIDAuNSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlbiA9IHZlYzMuZGlzdGFuY2Uoc3RhcnQsIGVuZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpciA9IHZlYzMuY3JlYXRlKCk7XHJcbiAgICAgICAgdmVjMy5zdWJ0cmFjdChkaXIsIGVuZCwgc3RhcnQpO1xyXG4gICAgICAgIHZlYzMubm9ybWFsaXplKGRpciwgZGlyKTtcclxuXHJcbiAgICAgICAgLy8gUm90YXRpb24gUXVhdDogRnJvbSBVcCAoMCwxLDApIHRvIERpclxyXG4gICAgICAgIGNvbnN0IHEgPSBxdWF0LmNyZWF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHVwID0gdmVjMy5mcm9tVmFsdWVzKDAsIDEsIDApO1xyXG5cclxuICAgICAgICAvLyBIYW5kbGUgcGFyYWxsZWwgY2FzZVxyXG4gICAgICAgIGlmIChNYXRoLmFicyh2ZWMzLmRvdChkaXIsIHVwKSkgPiAwLjk5KSB7XHJcbiAgICAgICAgICAgIC8vIEp1c3QgdXNlIGlkZW50aXR5IG9yIGZsaXBcclxuICAgICAgICAgICAgaWYgKGRpclsxXSA8IDApIHF1YXQuZnJvbUV1bGVyKHEsIDE4MCwgMCwgMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcXVhdC5yb3RhdGlvblRvKHEsIHVwLCBkaXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVuZGVyZXIuZHJhd0N1YmUoZGV2aWNlLCBwYXNzRW5jb2RlciwgY2VudGVyLCBxLCB2ZWMzLmZyb21WYWx1ZXModGhpY2tuZXNzLCBsZW4sIHRoaWNrbmVzcyksIGNvbG9yKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJ2YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiO1xudmFyIHdlYnBhY2tRdWV1ZXMgPSBoYXNTeW1ib2wgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSBoYXNTeW1ib2wgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSBoYXNTeW1ib2wgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xuXG52YXIgcmVzb2x2ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlICYmIHF1ZXVlLmQgPCAxKSB7XG5cdFx0cXVldWUuZCA9IDE7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIHdyYXBEZXBzID0gKGRlcHMpID0+IChkZXBzLm1hcCgoZGVwKSA9PiB7XG5cdGlmKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKSB7XG5cblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAtMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHR2YXIgaGFuZGxlID0gKGRlcHMpID0+IHtcblx0XHRjdXJyZW50RGVwcyA9IHdyYXBEZXBzKGRlcHMpO1xuXHRcdHZhciBmbjtcblx0XHR2YXIgZ2V0UmVzdWx0ID0gKCkgPT4gKGN1cnJlbnREZXBzLm1hcCgoZCkgPT4ge1xuXG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fVxuXHR2YXIgZG9uZSA9IChlcnIpID0+ICgoZXJyID8gcmVqZWN0KHByb21pc2Vbd2VicGFja0Vycm9yXSA9IGVycikgOiBvdXRlclJlc29sdmUoZXhwb3J0cykpLCByZXNvbHZlUXVldWUocXVldWUpKVxuXHRib2R5KGhhbmRsZSwgZG9uZSk7XG5cdHF1ZXVlICYmIHF1ZXVlLmQgPCAwICYmIChxdWV1ZS5kID0gMCk7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImRpc3QvXCI7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4udHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9
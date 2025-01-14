// Same order as in rust driver-adapters' `ColumnType`.
// Note: exporting const enums causes lots of problems with bundlers, so we emulate
// them via regular dictionaries.
// See: https://hackmd.io/@dzearing/Sk3xV0cLs
export const ColumnTypeEnum = {
  'Int32': 0,
  'Int64': 1,
  'Float': 2,
  'Double': 3,
  'Numeric': 4,
  'Boolean': 5,
  'Char': 6,
  'Text': 7,
  'Date': 8,
  'Time': 9,
  'DateTime': 10,
  'Json': 11,
  'Enum': 12,
  'Bytes': 13,
  'Set': 14,
  'Uuid': 15,
  // ...
  'UnknownNumber': 128
} as const

// This string value paired with `ColumnType.Json` will be treated as JSON `null`
// when convering to a quaint value. This is to work around JS/JSON null values
// already being used to represent database NULLs.
export const JsonNullMarker = '$__prisma_null'

exports = async function (id) {
  try {
    const coll = await context.functions.execute(
      "util_db_get_sessions_collection"
    );
    var bsonId = new BSON.ObjectId(id);
    var result = await coll.deleteOne({ _id: bsonId });
    return result;
  } catch (e) {
    return Error(e.message);
  }
};

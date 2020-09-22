exports = async function (email) {
  try {
    const coll = await context.functions.execute(
      "util_db_get_sessions_collection"
    );
    const sessions = await coll.find({ email: email }).toArray();
    return {
      payload: sessions,
    };
  } catch (e) {
    return Error(e.message);
  }
};

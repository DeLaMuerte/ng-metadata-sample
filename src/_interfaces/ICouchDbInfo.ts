// http://docs.couchdb.org/en/2.1.0/api/database/common.html#get--db
namespace gs {
	export interface ICouchDbInfo {

		/** Set to true if the database compaction routine is operating on this database. */
		compact_running: boolean,

		/** The name of the database. */
		db_name: string,

		/** The version of the physical format used for the data when it is stored on disk. */
		disk_format_version: number,

		/** @deprecated use sizes.active instead */
		data_size: number,

		/** @deprecated use sizes.file instead */
		disk_size: number,

		/** A count of the documents in the specified database. */
		doc_count: number,

		/** Number of deleted documents */
		doc_del_count: number,

		/** Always "0". (Returned for legacy reasons.) */
		instance_start_time: string,

		/** @deprecated Used by Cloudant. */
		other: any,

		/** The number of purge operations on the database. */
		purge_seq: number,

		sizes: {

			/** The size of live data inside the database, in bytes. */
			active: number,

			/** The uncompressed size of database contents in bytes. */
			external: number,

			/** The size of the database file on disk in bytes. Views indexes are not included in the calculation. */
			file: number,

			/** The current number of updates to the database. */
			update_seq: number
		}
	}
}
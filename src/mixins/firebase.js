export default {
	data() {
		return {
			db: this.$firebase.firestore(),
			firebaseData: 'default mixin firebaseData',
		};
	},
	mounted() {
		console.log(this.db);
	},
	methods: {
		getData() {
			this.db
				.collection('chordtone')
				.get()
				.then(res => {
					const arr = [];
					res.forEach(doc => {
						arr.push(doc.data());
						console.log(doc.id);
					});
					this.firebaseData = arr;
				});
		},
		createData(obj) {
			this.db.collection('chordtone').add(obj).then(alert('저장되었습니다.'));
			this.getData();
		},
	},
};

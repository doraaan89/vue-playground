<template>
	<div class="crud">
		<ul v-for="list in firebaseData" :key="list" class="list-data">
			<li v-for="doc in Object.entries(list)" :key="doc" class="data">
				<!-- <input type="text" :value="list"/> -->
				<span class="title">{{ doc[0] }}</span>
				<input type="text" :value="doc[1]" readonly />
			</li>
		</ul>
		{{ textDateCom }}
		<ul class="create-data">
			<li>
				<span>제목</span>
				<input type="text" v-model="sendData.title" />
			</li>
			<li>
				<span>날짜</span>
				<input type="text" :value="sendData.date" readonly />
			</li>
			<li>
				<span>핸드폰번호</span>
				<input type="text" v-model="sendData.phoneNum" />
			</li>
			<li>
				<span>내용</span>
				<input type="text" v-model="sendData.content" />
			</li>
		</ul>
		<button @click="createData(sendData)">저장</button>
		{{ sendData }}
	</div>
</template>

<script>
import firebaseMixin from '@/mixins/firebase';
export default {
	name: 'FirebaseTest',
	mixins: [firebaseMixin],
	data() {
		return {
			textDate: { seconds: 1665334844, nanoseconds: 246000000 },
			sendData: {
				title: null,
				date: new Date(),
				phoneNum: null,
				content: null,
			},
		};
	},
	computed: {
		textDateCom() {
			return new Date(this.textDate.seconds * 1000);
		},
	},
	created() {
		this.getData();
	},
};
</script>

<style lang="scss" scoped>
.crud {
	.list-data {
		.data {
			display: flex;
			justify-content: space-between;
			width: 70%;
			input {
				width: 500px;
			}
		}
	}

	.create-data {
		li {
			display: flex;
			justify-content: space-between;
			width: 50%;
			input {
				width: 70%;
				padding: 0.5rem;
			}
			& + li {
				margin-top: 16px;
			}
		}
	}
}
</style>

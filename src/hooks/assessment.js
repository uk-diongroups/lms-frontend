const methods = {
	formatOptions(question) {
		const result = [];
		const options = question?.options || {};
		for (const [key, value] of Object.entries(options)) {
			result.push({ name: value, value: key });
		}

		return result;
	},

	calculatePercentageCompleted(activeQuestion, totalQuestions) {
		return Math.ceil((activeQuestion * 100) / totalQuestions) || 0;
	},

	convertDurationToMins(duration) {
		let hr2mins = duration['hours'] * 60;
		let sec2mins = duration['seconds'] / 60;

		return Math.ceil(hr2mins + sec2mins + duration['seconds']);
	},
};

const useAssessment = () => methods;

export default useAssessment;

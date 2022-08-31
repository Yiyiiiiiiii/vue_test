<template>
  <form
    id="date-form-container"
    class="date-form-container"
    ref="form"
    @submit.prevent="handleSubmit"
  >
    <div class="form-item">
      <div class="input-area">
        <input
          type="text"
          maxlength="10"
          placeholder="用户昵称"
          v-model="formData.nickname"
        />
        <span class="tip">{{ formData.nickname.length }}/10</span>
      </div>
      <div class="error">{{ error.nickname }}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea
          maxlength="300"
          placeholder="输入内容"
          v-model="formData.content"
        ></textarea>
        <span class="tip">{{ formData.content.length }}/300</span>
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button :disabled="isSubmiting">
          {{ isSubmiting ? "提交中..." : "提交" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      error: {
        nickname: "",
        content: "",
      },
      isSubmiting: false,
    };
  },
  methods: {
    handleSubmit() {
      this.error.nickname = this.formData.nickname ? "" : "请输入昵称";
      this.error.content = this.formData.content ? "" : "请输入内容";
      if (this.error.nickname || this.error.content) {
        return;
      }
      this.isSubmiting = true;
      this.$emit("submit", this.formData, (successMsg) => {
        this.$showMessage({
          content: successMsg,
          type: "success",
          duration: 1000,
          container: this.$refs.form,
          callback: () => {
            this.isSubmiting = false;
            this.formData.nickname = "";
            this.formData.content = "";
          },
        });
      });
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.date-form-container {
  margin-bottom: 20px;
  overflow: hidden;
  .form-item {
    margin-bottom: 10px;
  }
  .input-area {
    width: 50%;
    position: relative;
  }
  .text-area {
    width: 100%;
    position: relative;
  }
  input {
    height: 40px;
    padding: 0 10px;
  }
  textarea {
    resize: none;
    height: 120px;
    padding: 10px 10px;
  }
  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px dashed @gray;
    outline: none;
    color: #373737;
    font-size: 14px;
    border-radius: 4px;
    &:focus {
      border-color: @primary;
    }
  }
  .tip {
    color: @gray;
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-size: 12px;
  }
  .error {
    color: @danger;
    margin-top: 6px;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
  }
  button {
    background-color: @primary;
    color: #fff;
    width: 100px;
    height: 34px;
    position: relative;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    &:hover {
      background: darken(@primary, 10%);
    }
    &:disabled {
      background: lighten(@primary, 20%);
      cursor: not-allowed;
    }
  }
}
</style>
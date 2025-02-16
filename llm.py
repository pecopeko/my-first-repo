from transformers import AutoModelForCausalLM, AutoTokenizer

# モデルとトークナイザーのダウンロード
model_name = "mistralai/Mistral-7B-v0.1"
model = AutoModelForCausalLM.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)

# ローカルに保存
model.save_pretrained("./mistralai/Mistral-7B-v0.1")
tokenizer.save_pretrained("./mistralai/Mistral-7B-v0.1")

print("モデルとトークナイザーのダウンロードが完了しました！")

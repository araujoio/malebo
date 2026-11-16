# Instalação

Como clonar o repositório, instalar dependências e rodar o Malebo localmente.

> [!NOTE]
> Por ser um projeto estático em HTML, CSS e JavaScript puros, nenhuma etapa de compilação ou build é necessária para executar o site. O Node.js é utilizado exclusivamente para as ferramentas de desenvolvimento (formatação e linting).

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (v18 ou superior)
- **Git**
- **npm** (ou seu gerenciador preferido: `pnpm`, `yarn`, `bun`)
- **Um servidor local estático** (como a extensão "Live Server" do VS Code ou `npx serve .`)

---

### 1. Clonar o repositório

```bash
git clone https://github.com/araujoio/malebo.git
cd malebo
```

### 2. Instalar as dependências de desenvolvimento

Execute o comando a seguir na raiz do projeto para instalar as ferramentas de código (Biome, ESLint e Husky):

```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento

Você pode iniciar um servidor estático local via terminal:

```bash
npx serve .
```

Ou, se estiver utilizando o VS Code, clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.

Após iniciar, acesse o endereço fornecido no seu navegador (geralmente [http://localhost:3000](http://localhost:3000) ou [http://localhost:5500](http://localhost:5500)) para visualizar o Malebo.

<br />

<div align="left">
  <a href="../00-quickstart/README.md"
    ><strong>← Anterior: Início Rápido</strong></a
  >
</div>

---

_Aviso Legal: Este documento foi traduzido por um processo automatizado interno de IA e pode conter falhas, imprecisões ou erros. A documentação original em inglês deve ser considerada a fonte oficial de referência._

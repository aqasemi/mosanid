import re


quantitative_adjectives = [
    "Much", "Little", "No", "None", "Some", "Any", "Enough", "Sufficient",
    "Whole", "Half", "Few", "Most", "All", "A little", "A little bit", "A lot"
    "Abundant", "Couple", "Double", "Each", "Either", "Empty", "Enough",
    "Enough of", "Every", "Few", "Full", "Great", "Half", "Heavily", "Heavy",
    "Huge", "Hundred", "Hundreds", "Insufficient", "Light", "Little", "Lots of",
    "Many", "Most", "More", "Neither", "No", "Numerous", "Plenty of", "Several",
    "Significant", "Single", "So few", "Some", "Sparse", "Substantial",
    "Sufficient", "Too", "Whole", "Other", "Another"
]
quantitative_adjectives = [word.lower() for word in quantitative_adjectives] +\
 quantitative_adjectives

conjunctive_adverb_words = [
    "Accordingly", "Furthermore", "Moreover", "Similarly", "Also", "Hence",
    "Namely", "Still", "Anyway", "However", "Nevertheless", "Then", "Besides",
    "Incidentally", "Next", "Thereafter", "Certainly", "Indeed", "Nonetheless",
    "Therefore", "Consequently", "Instead", "Now", "Thus", "Finally", "But",
    "Likewise", "Otherwise", "Undoubtedly", "Further", "Meanwhile",
    "In other words", "Since"
]
conjunctive_adverb_words = conjunctive_adverb_words + \
                            [word.lower() for word in conjunctive_adverb_words]

demonstrative_words = ["this", "these", "those"]

context_lacking_words = ["next", "let", "find", "let's", "their", "such"]



question_words = ["who", "what", "where", "why", "when", "how", "which", "whom"]

low_context_objects = [
    "Image", "Slideshow", "Slide", "Text", "Page", "Section", "Question",
    "Table", "Picture", "Module", "Figure", "Diagram", "Illustration",
    "Paragraph", "Chapter", "Course", "Appendix", "Evidence", "Example"
]
low_context_objects = low_context_objects + \
                            [word.lower() for word in low_context_objects]

low_context_prepositions = ["next", "below", "following", "above"]

def clean_text(text: str, lstrip_nonalpha=True):
  """Function to clean text in proper format so that non-ascii chars, other
      symbols, invalid whitespace characters are removed
        args:
          text: (str) - input sentence to be cleaned
          lstrip_nonalpha (bool) - indicates if left stripping of
                                  non-alphabetic characters from start of
                                  the text is needed to be performed.
                                  If set to "True", non-alphabetic characters
                                  from the start of the text will be removed.
                                  If set to "False", this operation will NOT
                                  be performed.
      returns:
        text: (str) - cleaned version of input text
  """
  # pylint: disable=inconsistent-quotes
  text = text.replace("’", "'")
  text = text.replace('”', '"')
  text = text.replace('“', '"')
  #Transliterate non-ASCII characters
  # text = unidecode(text)
  text = re.sub("--", "-", text)
  # text = re.sub(r" \([^)]*\)", " ", text)
  text = re.sub(r" {1,}\.", ".", text)
  text = re.sub(r" \t", " ", text)
  text = re.sub(r" +", " ", text)
  # remove empty parenthesis
  text = text.replace("()", " ")
  text = remove_unbalanced_brackets(text)
  # remove brackets which has low context words in them
  text = remove_low_context_brackets(text)
  # remove non-alphabet characters from start of paragraph
  if lstrip_nonalpha:
    text = re.sub(r"^[^a-zA-Z_____]*", "", text)
  # replacing more than one space by single space
  text = re.sub(" {2,}", " ", text)
  text = text.replace(" ’", "’")
  text = text.replace(" - ", "-")
  text = text.replace(" ,", ",")
  text = text.replace(" .", ".")
  #remove extra underscores. Example: _________LO 22. Explain the term kinship.
  text = re.sub(r"_{2,}", "", text)
  text = re.sub(r"\s+$", "", text, 0, re.MULTILINE)
  return text.strip()



def remove_unbalanced_brackets(text: str) -> str:
  """
  Function to remove unbalanced brackets from input text.
  Example:
    input text: Some neurofibromas transform to malignant tumor {(MPNST)).
    output text: Some neurofibromas transform to malignant tumor (MPNST).
  """
  remove_square = set()
  remove_curly = set()
  remove_parenthesis = set()
  stack_square = []
  stack_curly = []
  stack_parenthesis = []
  for ind, char in enumerate(text):
    if char in "()":
      if char == "(":
        stack_parenthesis.append(ind)
      elif not stack_parenthesis:
        remove_parenthesis.add(ind)
      else:
        stack_parenthesis.pop()
    elif char in "{}":
      if char == "{":
        stack_curly.append(ind)
      elif not stack_curly:
        remove_curly.add(ind)
      else:
        stack_curly.pop()
    elif char in "[]":
      if char == "[":
        stack_square.append(ind)
      elif not stack_square:
        remove_square.add(ind)
      else:
        stack_square.pop()
    else:
      continue
  remove_ind = list(remove_parenthesis.union(set(
    stack_parenthesis))) + list(remove_curly.union(set(
    stack_curly))) + list(remove_square.union(set(stack_square)))
  output = ""
  for ind, char in enumerate(text):
    if ind in remove_ind:
      continue
    output += char
  return output


def remove_low_context_brackets(text):
  """Function to remove brackets which contains words like "Image", "Chapter"
     etc.
        args:
          text: (str) - input sentence from which bracket has to be removed
          Example: text = "Amplification, in _______, can be detected as
                Homogeneously Stained Regions or Double minutes [ Image 19 ]."
              outout = "'Amplification, in _______, can be detected as
                  Homogeneously Stained Regions or Double minutes .'"

      returns:
        text: (str) - bracket removed version of text

  """
  low_context_words = list(set(item.lower() for item in low_context_objects))
  processed_text = text
  bracket_regex = re.compile(r"\[(.*?)\]|\([^()]*\)|\{[^{}]*\}")
  for b_occurence in reversed(list(bracket_regex.finditer(text))):
    for low_c_obj in low_context_words:
      if re.search(r"\b" + low_c_obj + r"\b",
                   text[b_occurence.start():b_occurence.end()].strip("{([])}"),
                   re.IGNORECASE):
        processed_text = processed_text[:b_occurence.start(
        )] + processed_text[b_occurence.end():]
  return processed_text



def sentence_selection(lu_sentences, sent_len_thresh=5,
spacy_model_type="default"):
  """Function to select good sentences to create questions out of them
  Args:
    lu_sentences: list of sentences
    [<text1>,<text2>]
  Returns:
    list of good sentences
    [<text1>]
  """
  try:
    # Remove sentences starting with Bloom's taxonomy verbs:
    sentences = [
        sents for sents in non_question_sents
        if SPACY_MODELS[spacy_model_type](sents)[0].tag_  != "VB"
        ]
    # Remove sentences having refererence to objects which are not present:
    # eg: "below image" or "following table" or "next diagram"
    sentences = [
        sents for sents in sentences
        if not any(phrase in sents.lower() for phrase in low_context_phrases)
    ]

    # Remove sentences having refererence to objects which are not present:
    # eg: "Image 2" or "Table 3a" or "Slideshow 1"
    valid_sentences = []
    for sent in sentences:
      doc = SPACY_MODELS[spacy_model_type](sent)
      discard_sent = False
      for i, tok in enumerate(doc):
        if tok.text.lower() in low_context_objects and i < (len(doc) - 1):
          if doc[i + 1].pos_ == "NUM" or doc[i + 1].text == ":":
            discard_sent = True
            break
      if not discard_sent:
        valid_sentences.append(sent)

    # Remove sentences with phrases like "provided above/below":
    filtered_sentences = []
    for sentence in valid_sentences:
      if any(word in sentence.lower() for word in ["above", "below"]):
        doc = SPACY_MODELS[spacy_model_type](sentence)
        for token in doc:
          if token.text in ["above", "below"]:
            word_position = token.i
            if doc[word_position - 1].tag_ not in ["VBD", "VBN"]:
              filtered_sentences.append(sentence)
      else:
        filtered_sentences.append(sentence)
    # Modify sentences to improve quality:
    transformed_sentences = sentence_transformations(
      filtered_sentences, spacy_model_type)

    # Remove sentences having introductory prepositional phrases:
    sentences = [
        sents for sents in transformed_sentences
        if not any(phrase in sents.lower() for phrase in \
          introductory_prepositional_phrases)
        ]
    # Remove shorter sentences:
    sentences =[
        sents for sents in sentences
        if len([word for word in word_split(
          sents, spacy_model_type) if word not in \
        stopwords.words()]) > sent_len_thresh
    ]
    # Remove sentences begining with words that lack context:
    sentences = [
        sent for sent in sentences
        if word_split(
          sent, spacy_model_type)[0].lower() not in context_lacking_words
    ]
    # Removing sentences with specific Pronouns after Coref Resolution:
    sentences = [sent for sent in sentences if not check_pronoun(
      sent, spacy_model_type)]
    # Remove sentences having demostrative words as they lack context:
    selected_sentences = []
    for sent in sentences:
      if len(nltk.sent_tokenize(sent)) > 1:
        selected_sentences.append(sent)
      else:
        if not list(set(demonstrative_words) & \
                   set(word_split(sent.lower(), spacy_model_type))):
          selected_sentences.append(sent)
    # Remove sentences having URL links:
    sentences = [
        sent for sent in selected_sentences if not len(
            re.findall(
                r"(\S*@\S*\s?)|(https\S+|\(https\S+\))|"
                r"(http\S+|\(http\S+\))|(\(www\S+\))", sent))
    ]
    # Remove sentences where phrases like "Chapter 2" or "Example:" exist.
    # Also remove sentences begining with low context words:
    valid_sentences = []
    for sentence in sentences:
      discard_sent = False
      doc = SPACY_MODELS[spacy_model_type](sentence)
      if doc[0].text.lower() in low_context_objects + ["that"]:
        discard_sent = True
      else:
        for token in doc:
          if token.text in low_context_objects and token.i < (len(doc) - 1):
            if doc[token.i + 1].pos_ == "NUM" or doc[token.i + 1].text == ":":
              discard_sent = True
              break
      if not discard_sent:
        valid_sentences.append(sentence)
    # Return the 1st 2 sentences from LU even if no good sentences exist:
    if len(valid_sentences) < 2:
      valid_sentences = non_question_sents[:(2 - len(valid_sentences))] + \
                                                              valid_sentences
    # Remove duplicate sentences without changing order of sentences:
    sentences = list(dict.fromkeys(valid_sentences))
    # Final step: captialise 1st letter of each sentence
    sentences = [sent[0].upper() + sent[1:] for sent in sentences]
  except IndexError as e:
    logging.error("No sentences selected: %s", e)
  return sentences


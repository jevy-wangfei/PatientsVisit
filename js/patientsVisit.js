function loadPatients(callback) {
  callback(patientsArray);
}
function findPatient(uid, callback){
  $.each(patientsArray, function(index, item){
    if(item.id == uid){
      callback(item);
    }
  });
}
function savePatient(patient, callback) {
  var maxId = 1;
  $.each(patientsArray, function(index, item){
    if(item.id > maxId){
      maxId = item.id;
    }
  });
  maxId += 1;
  patient.id = maxId;
  console.log(patient);
  patientsArray.push(patient);
  callback(patient);
}
function deletePatient(uid){
  $.each(patientsArray, function(index, item){
    console.log(item);
    if(item.id == uid){
      patientsArray.splice(index, 1);
    }
  });
}

function findNote(patientId, callback){
  $.each(notesArray, function(index, item){
    var content = notesArray[index][patientId];
    // console.log("notes content: ");
    if(content !== null){
      callback(content);
    }
  });
  // var noteMap = notesArray[parientId];
  // callback(noteMap);
}

function saveNote(pid, note, callback) {
  $.each(notesArray, function(index, item){
    if(item[pid] !== null){
      var maxUid = 1;
      $.each(item[pid], function(index, row){
        if(row.nid > maxUid) maxUid = row.nid;
      });

      note.nid = (maxUid+1);
      console.log(note);
      item[pid].push(note);
      callback(note);
    }
  });

}

function deleteNote(nid){
  $.each(notesArray, function(index, item){
    if(item.nid == nid){
      notesArray.splice(index, 1);
    }
  });
}
